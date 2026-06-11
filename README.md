# Futtle

Futtle is a Next.js 16 storefront for a single-product catalog with local fallback pricing and a Shopify Storefront checkout handoff.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Shopify handoff

The app is usable without Shopify credentials for browsing products and building a cart. Live checkout activates when these environment variables are present:

```bash
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-storefront-token
NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION=2024-01
NEXT_PUBLIC_SHOPIFY_CUSTOMER_ACCOUNT_URL=https://shopify.com/00000000/account
```

Copy `.env.example` to `.env.local` and fill in the values.

`NEXT_PUBLIC_SHOPIFY_CUSTOMER_ACCOUNT_URL` is optional. If omitted, the storefront uses `https://${NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/account` for the Track order link.

## Store data assumptions

For checkout to work after keys are added, Shopify needs:

- Products whose handles match the local catalog in [`app/data/products.ts`]
- Variants titled `Single Kit` and `Freestyle 3-Pack` for each product

If the merchant uses different handles or variant titles, update the local catalog mapping before launch.
