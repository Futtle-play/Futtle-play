export type ProductOfferKey = "single" | "three-pack";

export interface ProductOffer {
  key: ProductOfferKey;
  label: string;
  shortLabel: string;
  quantity: number;
  shopifyVariantTitle: string;
  price?: number;
}

export interface ProductImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL: string;
}

export interface Product {
  id: string;
  shopifyHandle: string;
  title: string;
  edition: string;
  basePrice: number;
  currencyCode: "INR";
  currencySymbol: string;
  offers: ProductOffer[];
  tagline: string;
  description: string;
  isAvailable: boolean;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    glow: string;
    gradient: string;
  };
  kitTheme: string;
  gallery?: ProductImage[];
  specs: {
    feathers: string;
    weight: string;
    base: string;
    aerodynamics: string;
  };
}

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

export const products: Product[] = [
  {
    id: "argentina",
    shopifyHandle: "futtle-argentina",
    title: "Futtle Argentina",
    edition: "Argentina Edition",
    basePrice: 199,
    currencyCode: "INR",
    currencySymbol: "₹",
    offers: defaultOffers,
    tagline: "La Albiceleste. Smooth touch.",
    description:
      "Honoring the masters of the beautiful game. Weighted with a sky blue and white rubber base and crowned with matching dual-tone feathers. Optimized for chest stalls and overhead flicks.",
    isAvailable: false,
    colors: {
      primary: "#75aadb",
      secondary: "#ffffff",
      accent: "#fded12",
      glow: "rgba(117, 170, 219, 0.15)",
      gradient: "from-sky-950/40 to-zinc-950 border-sky-400/20",
    },
    kitTheme: "Sky Blue & Cloud White",
    gallery: [
      {
        src: "/f_a_eyeview.webp",
        alt: "Futtle Argentina eye-level view",
        width: 2390,
        height: 1792,
        blurDataURL: "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAADQAQCdASoQAAwAA8BgJaQAAubhZyUp3AD+tcZf+bjrsJi5AGSgEZIQ2qAT8YAA",
      },
    ],
    specs: {
      feathers: "Sky Blue & White Hand-Sorted Feathers (x4)",
      weight: "15.5g (Slightly heavier for stability)",
      base: "Dual-Density Vulcanized Rubber (Sky Blue/White)",
      aerodynamics: "High-drift stall profile",
    },
  },
  {
    id: "brasil",
    shopifyHandle: "futtle-brasil",
    title: "Futtle Brazil",
    edition: "Brazil Edition",
    basePrice: 199,
    currencyCode: "INR",
    currencySymbol: "₹",
    offers: defaultOffers,
    tagline: "A Seleção. Pure freestyle energy.",
    description:
      "Built for samba-style juggle runs. Bright canary-yellow feathers on a deep forest-green base. Highly responsive bounce rate, designed to pop up easily with minimal foot effort.",
    isAvailable: true,
    colors: {
      primary: "#fded12",
      secondary: "#009c3b",
      accent: "#ffffff",
      glow: "rgba(0, 156, 59, 0.15)",
      gradient: "from-green-950/40 to-zinc-950 border-green-500/20",
    },
    kitTheme: "Canary Yellow & Forest Green",
    gallery: [
      {
        src: "/f_b_eyeview.webp",
        alt: "Futtle Brazil eye-level view",
        width: 1280,
        height: 960,
        blurDataURL: "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAADQAQCdASoQAAwAA8BgJZwAAucVHqAkwAD+tccTFO3Lcs21BdLXx/QbEEThAAAA",
      },
      {
        src: "/f_b_topview.webp",
        alt: "Futtle Brazil top view",
        width: 4160,
        height: 3120,
        blurDataURL: "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAADwAQCdASoQAAwAA8BgJZQAAuRltdOJ7MAA/t60tEgM7Kth/jAqeJjiF60dXgAA",
      },
      {
        src: "/f_b_closeup.webp",
        alt: "Futtle Brazil close-up",
        width: 1600,
        height: 1200,
        blurDataURL: "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADwAQCdASoQAAwAA8BgJbACdADDfEC2VsAA/vA4LQvxX9u6rOQxuK3Bh3YFPCT5h8JUhh9SuVcbHCPaKrJajkYaAAA=",
      },
      {
        src: "/f_b_scloseup.webp",
        alt: "Futtle Brazil side close-up",
        width: 1600,
        height: 1200,
        blurDataURL: "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACQAQCdASoQAAwAA8BgJbAAAjr0ngAA/vHftKDIyjw/VlPbyh7J+h0oK/SJn7hz//dPrJjhL+mgT5AA",
      },
      {
        src: "/f_b_feathers.webp",
        alt: "Futtle Brazil feather detail",
        width: 1600,
        height: 1200,
        blurDataURL: "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoQAAwAA8BgJZgCdADREWthgAD44GxG6go1iL2Cz7Az3Y2T+m/LQPiho4MRMUwA",
      },
      {
        src: "/f_b_sleeping.webp",
        alt: "Futtle Brazil resting on a shoe",
        width: 1600,
        height: 1200,
        blurDataURL: "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADwAQCdASoQAAwAA8BgJYwBTAA8Af69vAAA/up9vuWHHU+oEVMtLX6+vzEBbqbTnmQAAA==",
      },
      {
        src: "/f_b_bottomsup.webp",
        alt: "Futtle Brazil bottom-up view",
        width: 1600,
        height: 1200,
        blurDataURL: "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoQAAwAA8BgJbACdAC/6vTAAP7D8R4p5KozJV0dfjUDjt7u4pdYT8Mfl2RHIewAAAA=",
      },
      {
        src: "/f_b_sizeref.webp",
        alt: "Futtle Brazil size reference",
        width: 1600,
        height: 1200,
        blurDataURL: "data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAADwAQCdASoQAAwAA8BgJbACdADaPQf0CAAA/upM9u50xfDtbcvyDb4LpazfY80C2/c4A0zJ/EsIvKI1o6FJapODDGnrExG4Uk7r+E4GN3AAAA==",
      },
    ],
    specs: {
      feathers: "Canary Yellow Selected Feathers (x4)",
      weight: "15g (Spring-loaded pop)",
      base: "Dual-Density Vulcanized Rubber (Forest Green)",
      aerodynamics: "High-pop vertical launch profile",
    },
  },
  {
    id: "portugal",
    shopifyHandle: "futtle-portugal",
    title: "Futtle Portugal",
    edition: "Portugal Edition",
    basePrice: 199,
    currencyCode: "INR",
    currencySymbol: "₹",
    offers: defaultOffers,
    tagline: "As Quinas. Precision and speed.",
    description:
      "For the clinical player. Featuring deep crimson feathers anchored by a forest-green base. The slightly stiffer feather alignment ensures a tighter spin and faster drop rate.",
    isAvailable: false,
    colors: {
      primary: "#da121a",
      secondary: "#00662f",
      accent: "#fded12",
      glow: "rgba(218, 18, 26, 0.15)",
      gradient: "from-red-950/40 to-zinc-950 border-red-500/20",
    },
    kitTheme: "Crimson Red & Deep Green",
    gallery: [
      {
        src: "/f_p_eyeview.webp",
        alt: "Futtle Portugal eye-level view",
        width: 2390,
        height: 1792,
        blurDataURL: "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADwAQCdASoQAAwAA8BgJZQAAudlUM+Re8AA/rYCraO1/Sr2lA7cwMCeBCEfhTFxIMAithqhAAA=",
      },
    ],
    specs: {
      feathers: "Deep Crimson Hand-Dyed Feathers (x4)",
      weight: "15.3g (For fast reaction play)",
      base: "Dual-Density Vulcanized Rubber (Portugal Green)",
      aerodynamics: "Tight-spin fast-descent profile",
    },
  },
  {
    id: "france",
    shopifyHandle: "futtle-france",
    title: "Futtle France",
    edition: "France Edition",
    basePrice: 199,
    currencyCode: "INR",
    currencySymbol: "₹",
    offers: defaultOffers,
    tagline: "Les Bleus. Elegance in motion.",
    description:
      "Royal blue base with alternating red, white, and blue feathers. Represents tactical elegance. Soft rubber landing rings allow for clean, cushioned foot receptions and soft knee contacts.",
    isAvailable: false,
    colors: {
      primary: "#0023a0",
      secondary: "#ffffff",
      accent: "#e70023",
      glow: "rgba(0, 35, 160, 0.15)",
      gradient: "from-blue-950/40 to-zinc-950 border-blue-500/20",
    },
    kitTheme: "Tricolore - Blue, White, & Red",
    gallery: [
      {
        src: "/f_f_eyeview.webp",
        alt: "Futtle France eye-level view",
        width: 2390,
        height: 1792,
        blurDataURL: "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADwAQCdASoQAAwAA8BgJZwAAudhg1zt5CAA/rYCraPpZMdcvufR8tTFfS5qsWlLhBeQ4AAA",
      },
    ],
    specs: {
      feathers: "Royal Blue & Tricolore Feathers (x4)",
      weight: "15.2g (Cushioned impact dynamics)",
      base: "Dual-Density Soft-Landing Rubber (Royal Blue)",
      aerodynamics: "Symmetric hover-drift profile",
    },
  },
];

export function getOfferPrice(product: Product, offer: ProductOffer): number {
  if (offer.price) {
    return offer.price;
  }

  return product.basePrice * offer.quantity;
}

export function getOfferByKey(product: Product, offerKey: ProductOfferKey): ProductOffer {
  return product.offers.find((offer) => offer.key === offerKey) ?? product.offers[0];
}

export function formatPrice(currencySymbol: string, amount: number): string {
  return `${currencySymbol}${amount}`;
}

export function getProductsByAvailability(source: Product[] = products): Product[] {
  return [...source].sort((left, right) => {
    const availabilityScore = Number(right.isAvailable) - Number(left.isAvailable);

    if (availabilityScore !== 0) {
      return availabilityScore;
    }

    return left.title.localeCompare(right.title);
  });
}
