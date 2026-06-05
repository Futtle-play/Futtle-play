export type ProductOfferKey = "single" | "three-pack";

export interface ProductOffer {
  key: ProductOfferKey;
  label: string;
  shortLabel: string;
  quantity: number;
  shopifyVariantTitle: string;
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
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    glow: string;
    gradient: string;
  };
  kitTheme: string;
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
  },
];

export const products: Product[] = [
  {
    id: "classic",
    shopifyHandle: "futtle-classic",
    title: "Futtle Classic",
    edition: "Classic Edition",
    basePrice: 199,
    currencyCode: "INR",
    currencySymbol: "₹",
    offers: defaultOffers,
    tagline: "Signature Drop 01. Raw performance.",
    description:
      "The original Futtle. Pure, lightweight, and balanced for quick inside-outside sequences. Featuring selected black goose feathers and our iconic acid-yellow rubber base.",
    colors: {
      primary: "#d4ff3a",
      secondary: "#0b0b0a",
      accent: "#ff4d1a",
      glow: "rgba(212, 255, 58, 0.15)",
      gradient: "from-zinc-900 to-zinc-950 border-acid/20",
    },
    kitTheme: "Acid Yellow & Midnight Black",
    specs: {
      feathers: "Premium Black Goose Feathers (x4)",
      weight: "15g (Perfect street balance)",
      base: "Dual-Density Vulcanized Rubber (Acid Yellow)",
      aerodynamics: "High-stability spin profile",
    },
  },
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
    colors: {
      primary: "#75aadb",
      secondary: "#ffffff",
      accent: "#fded12",
      glow: "rgba(117, 170, 219, 0.15)",
      gradient: "from-sky-950/40 to-zinc-950 border-sky-400/20",
    },
    kitTheme: "Sky Blue & Cloud White",
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
    title: "Futtle Brasil",
    edition: "Brasil Edition",
    basePrice: 199,
    currencyCode: "INR",
    currencySymbol: "₹",
    offers: defaultOffers,
    tagline: "A Seleção. Pure freestyle energy.",
    description:
      "Built for samba-style juggle runs. Bright canary-yellow feathers on a deep forest-green base. Highly responsive bounce rate, designed to pop up easily with minimal foot effort.",
    colors: {
      primary: "#fded12",
      secondary: "#009c3b",
      accent: "#ffffff",
      glow: "rgba(0, 156, 59, 0.15)",
      gradient: "from-green-950/40 to-zinc-950 border-green-500/20",
    },
    kitTheme: "Canary Yellow & Forest Green",
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
    colors: {
      primary: "#da121a",
      secondary: "#00662f",
      accent: "#fded12",
      glow: "rgba(218, 18, 26, 0.15)",
      gradient: "from-red-950/40 to-zinc-950 border-red-500/20",
    },
    kitTheme: "Crimson Red & Deep Green",
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
    colors: {
      primary: "#0023a0",
      secondary: "#ffffff",
      accent: "#e70023",
      glow: "rgba(0, 35, 160, 0.15)",
      gradient: "from-blue-950/40 to-zinc-950 border-blue-500/20",
    },
    kitTheme: "Tricolore - Blue, White, & Red",
    specs: {
      feathers: "Royal Blue & Tricolore Feathers (x4)",
      weight: "15.2g (Cushioned impact dynamics)",
      base: "Dual-Density Soft-Landing Rubber (Royal Blue)",
      aerodynamics: "Symmetric hover-drift profile",
    },
  },
];

export function getOfferPrice(product: Product, offer: ProductOffer): number {
  return product.basePrice * offer.quantity;
}

export function getOfferByKey(product: Product, offerKey: ProductOfferKey): ProductOffer {
  return product.offers.find((offer) => offer.key === offerKey) ?? product.offers[0];
}

export function formatPrice(currencySymbol: string, amount: number): string {
  return `${currencySymbol}${amount}`;
}
