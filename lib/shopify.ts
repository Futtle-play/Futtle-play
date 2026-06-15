const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const apiVersion = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION ?? "2024-01";
const shopifyEndpoint = domain
  ? `https://${domain.replace(/^https?:\/\//, "").replace(/\/$/, "")}/api/${apiVersion}/graphql.json`
  : null;

interface ShopifyFetchParams {
  query: string;
  variables?: Record<string, unknown>;
}

interface ShopifyVariantNode {
  id: string;
  title: string;
  availableForSale: boolean;
  price: {
    amount: string;
    currencyCode: string;
  };
}

interface ShopifyProductNode {
  handle: string;
  title: string;
  variants: {
    edges: Array<{
      node: ShopifyVariantNode;
    }>;
  };
}

interface ShopifyGraphQLError {
  message: string;
}

export interface ShopifyCheckoutLineInput {
  handle: string;
  variantTitle: string;
  quantity: number;
}

export function isShopifyConfigured(): boolean {
  return Boolean(domain && storefrontAccessToken);
}

export async function shopifyFetch<T>({
  query,
  variables = {},
}: ShopifyFetchParams): Promise<{ status: number; body: T } | null> {
  if (!isShopifyConfigured()) {
    return null;
  }

  if (!shopifyEndpoint) {
    return null;
  }

  const result = await fetch(shopifyEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken!,
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });

  const body = await result.json() as T & { errors?: ShopifyGraphQLError[] };

  if (!result.ok) {
    throw new Error(`Shopify Storefront API returned HTTP ${result.status}.`);
  }

  if (body.errors?.length) {
    throw new Error(body.errors.map((error) => error.message).join(" "));
  }

  return {
    status: result.status,
    body,
  };
}

function buildProductLookupQuery(handles: string[]): string {
  const selections = handles.map((handle, index) => {
    const alias = `product${index}`;
    const escapedHandle = JSON.stringify(handle);

    return `
      ${alias}: product(handle: ${escapedHandle}) {
        handle
        title
        variants(first: 20) {
          edges {
            node {
              id
              title
              availableForSale
              price {
                amount
                currencyCode
              }
            }
          }
        }
      }
    `;
  });

  return `query storefrontProductsByHandle { ${selections.join("\n")} }`;
}

async function fetchProductsByHandle(handles: string[]): Promise<Map<string, ShopifyProductNode>> {
  const uniqueHandles = [...new Set(handles)];
  if (uniqueHandles.length === 0) {
    return new Map();
  }

  const response = await shopifyFetch<{ data?: Record<string, ShopifyProductNode | null> }>({
    query: buildProductLookupQuery(uniqueHandles),
  });

  if (!response?.body?.data) {
    return new Map();
  }

  const productEntries = Object.values(response.body.data)
    .filter((product): product is ShopifyProductNode => Boolean(product))
    .map((product) => [product.handle, product] as const);

  return new Map(productEntries);
}

function getHandleCandidates(handle: string): string[] {
  const candidates = [handle];

  if (handle.includes("brasil")) {
    candidates.push(handle.replaceAll("brasil", "brazil"));
  }

  if (handle.includes("brazil")) {
    candidates.push(handle.replaceAll("brazil", "brasil"));
  }

  return [...new Set(candidates)];
}

function resolveVariant(product: ShopifyProductNode | undefined, variantTitle: string): ShopifyVariantNode | undefined {
  const variants = product?.variants.edges.map(({ node }) => node) ?? [];

  // Best case is an exact title match with app/data/products.ts.
  // The fallbacks keep checkout from crashing, but Shopify variant names should still be kept aligned.
  return (
    variants.find((variant) => variant.title === variantTitle && variant.availableForSale) ??
    variants.find((variant) => variant.availableForSale) ??
    variants[0]
  );
}

export async function getShopifyCheckoutUrl(
  lines: ShopifyCheckoutLineInput[],
): Promise<string | null> {
  const lookupHandles = lines.flatMap((line) => getHandleCandidates(line.handle));
  const productsByHandle = await fetchProductsByHandle(lookupHandles);

  const formattedLines = lines.map((line) => {
    const product =
      productsByHandle.get(line.handle) ??
      getHandleCandidates(line.handle)
        .map((candidate) => productsByHandle.get(candidate))
        .find(Boolean);
    const variant = resolveVariant(product, line.variantTitle);

    if (!variant) {
      throw new Error(
        `Missing Shopify variant "${line.variantTitle}" for product handle "${line.handle}".`,
      );
    }

    return {
      merchandiseId: variant.id,
      quantity: line.quantity,
    };
  });

  const response = await shopifyFetch<{
    data?: {
      cartCreate?: {
        cart?: {
          checkoutUrl: string;
        };
        userErrors?: Array<{
          field?: string[];
          message: string;
        }>;
      };
    };
  }>({
    query: `
      mutation cartCreate($input: CartInput!) {
        cartCreate(input: $input) {
          cart {
            checkoutUrl
          }
          userErrors {
            field
            message
          }
        }
      }
    `,
    variables: {
      input: {
        lines: formattedLines,
      },
    },
  });

  const userErrors = response?.body?.data?.cartCreate?.userErrors ?? [];
  if (userErrors.length > 0) {
    throw new Error(userErrors.map((error) => error.message).join(" "));
  }

  return response?.body?.data?.cartCreate?.cart?.checkoutUrl ?? null;
}
