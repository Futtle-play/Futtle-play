# Futtle

This is the Futtle storefront handoff. I kept the content-editing parts in a few predictable files so future updates do not need a redesign or a big code pass.

## Run It Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Before sending changes live, run:

```bash
npm run lint
npm run build
```

## Main Files To Edit

- Product names, prices, availability, Shopify handles, photos, and product-page videos: `app/data/products.ts`
- Homepage hero product photo: `app/components/Hero.tsx`
- Homepage video cards in the "How to play" section: `app/components/FieldGuide.tsx`
- Event posters/photos: `app/components/CommunityPosters.tsx`
- Homepage section order: `app/page.tsx`

## Change Product Names

Product names are in `app/data/products.ts`.

Use this when you only want to change what customers see on the website, for example changing `Futtle Brazil` to `Futtle Brasil`.

1. Open `app/data/products.ts`.
2. Search for the current product name. Example: `Futtle Brazil`.
3. You will find a product block that looks like this:

```ts
{
  id: "brazil",
  shopifyHandle: "futtle-brasil",
  title: "Futtle Brazil",
  edition: worldCupEdition,
  ...
}
```

4. Change only the `title` text if you only want to rename the product on the site.

Example:

```ts
title: "Futtle Brasil",
```

5. Save the file.
6. Run the site locally and check the homepage, `/shop`, and that product page.

Do not change these unless you mean to change more than the visible name:

- `id`: this controls the product page URL, like `/shop/brazil`.
- `shopifyHandle`: this must match the product handle in Shopify checkout.
- image file names in `gallery`: those are the photos.

Simple rule: if this is just a wording change, change `title` only.

## Change Variant / Offer Names

The current offer names are `Single Kit` and `Freestyle 3-Pack`.

These live near the top of `app/data/products.ts` inside `defaultOffers`.

Look for this:

```ts
const defaultOffers: ProductOffer[] = [
  {
    key: "single",
    label: "Single Kit",
    shortLabel: "Single",
    quantity: 1,
    shopifyVariantTitle: "Single Kit",
  },
  {
    key: "three-pack",
    label: "Freestyle 3-Pack",
    shortLabel: "3-Pack",
    quantity: 3,
    shopifyVariantTitle: "Freestyle 3-Pack",
    price: 549,
  },
];
```

Here is what each field means:

- `label`: the full name customers see on the product page and quick preview.
- `shortLabel`: the shorter name used where there is less space.
- `shopifyVariantTitle`: the exact Shopify variant name checkout looks for.
- `quantity`: how many units that offer adds to checkout.
- `price`: optional custom website price for that offer. Right now the 3-pack is set to `549`.
- `key`: the internal cart key. Do not change this unless a developer is also updating the cart code.

### If You Are Only Renaming The Button/Text On The Website

Example: changing `Freestyle 3-Pack` to `3 Pack`.

1. Open `app/data/products.ts`.
2. Find `defaultOffers`.
3. Change `label`.
4. Change `shortLabel` if needed.
5. Do not change `shopifyVariantTitle` unless Shopify also changed.

Example:

```ts
label: "3 Pack",
shortLabel: "3-Pack",
shopifyVariantTitle: "Freestyle 3-Pack",
```

This means the website says `3 Pack`, but checkout still looks for the Shopify variant named `Freestyle 3-Pack`.

### If You Changed The Variant Name In Shopify

Example: Shopify variant was renamed from `Freestyle 3-Pack` to `3 Pack`.

1. Open Shopify.
2. Open the product.
3. Copy the variant title exactly as Shopify shows it.
4. Open `app/data/products.ts`.
5. Find `defaultOffers`.
6. Paste that exact Shopify title into `shopifyVariantTitle`.
7. If you also want customers to see the same wording, update `label` too.

Example:

```ts
label: "3 Pack",
shortLabel: "3-Pack",
shopifyVariantTitle: "3 Pack",
```

The spelling has to match Shopify exactly. `3 Pack`, `3-Pack`, and `Three Pack` are different names to the checkout code.

### What Not To Touch

Do not change this:

```ts
key: "single"
key: "three-pack"
```

Those keys are used by the cart. If they are changed casually, add-to-cart can break.

Also do not change `quantity` unless you really mean to change how many items get added to checkout.

## Add Product Photos

1. Put the image file in `public/`.
2. Prefer `.webp` for product photos when possible. `.jpg` or `.jpeg` is also fine.
3. Open `app/data/products.ts`.
4. Find the product in the `products` array.
5. Add the image to that product's `gallery` array.

Example:

```ts
gallery: [
  {
    src: "/f_b_eyeview.webp",
    alt: "Futtle Brazil eye-level view",
    width: 1280,
    height: 960,
  },
]
```

Notes:

- `src` starts with `/` because anything inside `public/` is served from the site root. I used app routing. 
- `width` and `height` should be the real pixel size of the image.
- `alt` should describe the photo for accessibility and SEO.
- `blurDataURL` is optional. If you do not have one, leave it out.
- The first gallery image is used for the shop card, cart thumbnail, and main product page image.

## Add Event Posters Or Event Photos

1. Put the poster/photo in `public/`.
2. Open `app/components/CommunityPosters.tsx`.
3. Add or replace an item in the `posters` array.

Example:

```ts
{
  src: "/poster-new.jpeg",
  alt: "Futtle community event poster",
  sizes: "(min-width: 1024px) 24rem, (min-width: 640px) 28rem, calc(100vw - 2rem)",
}
```

Keep the poster frame as-is unless the design is being changed. The shared `aspect-[2/3]` wrapper is what makes posters with different original sizes line up nicely.

## Add HomePage Videos

HomePage videos are in `app/components/FieldGuide.tsx`.

The cards currently work as placeholders. To make one a real video, add `src` and, ideally, `poster`.

Example:

```ts
{
  title: "Basic sequence",
  src: "/videos/basic-sequence.mp4",
  poster: "/videos/basic-sequence-poster.webp",
}
```

Put the files in `public/videos/`, then reference them with `/videos/file-name.mp4`.

The component already uses `preload="none"`, so the browser will not download the whole video before someone interacts with it.

## Add Product Page Videos

Product videos also live in `app/data/products.ts`.

Add a `videos` array to the product:

```ts
videos: [
  {
    title: "Brazil edition touch test",
    src: "/videos/futtle-brazil-touch-test.mp4",
    poster: "/videos/futtle-brazil-touch-test-poster.webp",
  },
],
```

Optional fields:

```ts
type: "video/mp4"
caption: "/videos/futtle-brazil-captions.vtt"
```

The product page only shows the Videos section when a product actually has videos, so leaving this empty will not change the current layout.

## Video Optimization Tips

- Keep normal product/demo clips around 720p or 1080p. Do not upload raw phone footage straight from the camera.
- Compress videos before adding them. A short homepage/product clip should usually be a few MB, not 100 MB+.
- Use `.mp4` with H.264 for the safest browser support. WebM is fine as an extra format, but MP4 should be the first pass.
- Always add a poster image so the page shows a clean thumbnail before the video loads.
- Keep `preload="none"` for videos that are not the main hero. This keeps memory and bandwidth low.
- Avoid autoplay with sound. If a future background video is added, it should be muted, short, looped, and compressed hard.
- For large campaigns or lots of video, host videos on Mux, Cloudinary, YouTube/Vimeo, S3, or Vercel Blob instead of committing huge files into this repo.

## Shopify Handoff

The app is usable without Shopify credentials for browsing products and building a cart. Live checkout activates when these environment variables are present:

```bash
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=
NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION=
NEXT_PUBLIC_SHOPIFY_CUSTOMER_ACCOUNT_URL=
```

Copy `.env.example` to `.env.local` and fill in the values.

`NEXT_PUBLIC_SHOPIFY_CUSTOMER_ACCOUNT_URL` is optional. If omitted, the storefront uses `https://${NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/account` for the Track order link.

For checkout to work after keys are added, Shopify needs:

- Products whose handles match `shopifyHandle` in `app/data/products.ts`
- Variants titled `Single Kit` and `Freestyle 3-Pack` for each product

If Shopify uses different handles or variant titles, update `app/data/products.ts` before launch.
