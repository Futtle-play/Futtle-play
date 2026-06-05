const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const apiVersion = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION ?? "2024-01";

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

  const result = await fetch(`https://${domain}/api/${apiVersion}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken!,
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });

  return {
    status: result.status,
    body: await result.json(),
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

export async function getShopifyCheckoutUrl(
  lines: ShopifyCheckoutLineInput[],
): Promise<string | null> {
  const productsByHandle = await fetchProductsByHandle(lines.map((line) => line.handle));

  const formattedLines = lines.map((line) => {
    const product = productsByHandle.get(line.handle);
    const variant = product?.variants.edges.find(
      ({ node }) => node.title === line.variantTitle && node.availableForSale,
    )?.node;

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
