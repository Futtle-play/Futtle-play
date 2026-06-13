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

const worldCupEdition = "World Cup Edition";
const worldCupProductIds = new Set(["argentina", "brazil", "portugal", "france"]);

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
    edition: worldCupEdition,
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
    id: "brazil",
    shopifyHandle: "futtle-brasil",
    title: "Futtle Brazil",
    edition: worldCupEdition,
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
    edition: worldCupEdition,
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
    edition: worldCupEdition,
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
  {
    id: "real-madrid",
    shopifyHandle: "futtle-real-madrid",
    title: "Futtle Real Madrid",
    edition: "Real Madrid Club Edition",
    basePrice: 199,
    currencyCode: "INR",
    currencySymbol: "₹",
    offers: defaultOffers,
    tagline: "Los Blancos. Clean control under pressure.",
    description:
      "A white-and-gold club build for first-touch flex and clean keep-ups. The Real Madrid edition uses crisp white feathers over a gold-accented base, tuned for composed stalls, controlled toe taps, and polished street-game sessions.",
    isAvailable: false,
    colors: {
      primary: "#ffffff",
      secondary: "#c7a24a",
      accent: "#5f2eea",
      glow: "rgba(199, 162, 74, 0.15)",
      gradient: "from-zinc-200/20 to-zinc-950 border-yellow-300/20",
    },
    kitTheme: "Royal White & Trophy Gold",
    gallery: [
      {
        src: "/f_rm_eyeview.webp",
        alt: "Futtle Real Madrid eye-level view",
        width: 1448,
        height: 1086,
        blurDataURL: "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADwAQCdASoQAAwABUB8JZwAAxeLp3uz1AAA/mXrzqAFFe+kFX2E7Kedpo82EyNO18Unaaf38Lbk8+BQAAA=",
      },
    ],
    specs: {
      feathers: "White Club-Tuned Feathers (x4)",
      weight: "15g (Balanced control)",
      base: "Dual-Density Vulcanized Rubber (White/Gold)",
      aerodynamics: "Composed stall-and-touch profile",
    },
  },
  {
    id: "barcelona",
    shopifyHandle: "futtle-barcelona",
    title: "Futtle FC Barcelona",
    edition: "FC Barcelona Club Edition",
    basePrice: 199,
    currencyCode: "INR",
    currencySymbol: "₹",
    offers: defaultOffers,
    tagline: "Blaugrana rhythm. Fast feet, soft touch.",
    description:
      "Built around Barcelona's blue-and-garnet energy, this club edition is tuned for quick link-up touches, low juggles, and smooth directional control. A bold feather set and deep base color make it feel unmistakably Barca in hand and in play.",
    isAvailable: false,
    colors: {
      primary: "#004d98",
      secondary: "#a50044",
      accent: "#edbb00",
      glow: "rgba(165, 0, 68, 0.15)",
      gradient: "from-blue-950/40 to-red-950/30 border-red-500/20",
    },
    kitTheme: "Blaugrana Blue & Garnet",
    gallery: [
      {
        src: "/f_fcb_eyeview.webp",
        alt: "Futtle FC Barcelona eye-level view",
        width: 1184,
        height: 896,
        blurDataURL: "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAAAQAgCdASoQAAwABUB8JZwAAveH3cVFORqAAP5l4li8/+nKgbRPeAYlaaO4k6CGK1ccaRGiji+CkZZUAAA=",
      },
    ],
    specs: {
      feathers: "Blue & Garnet Club Feathers (x4)",
      weight: "15.1g (Quick rhythm balance)",
      base: "Dual-Density Vulcanized Rubber (Deep Blue/Red)",
      aerodynamics: "Fast-touch rhythm profile",
    },
  },
  {
    id: "manchester-united",
    shopifyHandle: "futtle-manchester-united",
    title: "Futtle Manchester United",
    edition: "Manchester United Club Edition",
    basePrice: 199,
    currencyCode: "INR",
    currencySymbol: "₹",
    offers: defaultOffers,
    tagline: "Red attack. Direct pop.",
    description:
      "A red-and-black club edition made for aggressive pop-ups and direct freestyle play. Manchester United colors carry through the feathers and base, with a lively rebound that suits quick volleys, fast saves, and power touches.",
    isAvailable: false,
    colors: {
      primary: "#da291c",
      secondary: "#111111",
      accent: "#fbe122",
      glow: "rgba(218, 41, 28, 0.15)",
      gradient: "from-red-950/40 to-zinc-950 border-red-500/20",
    },
    kitTheme: "United Red & Black",
    gallery: [
      {
        src: "/f_mu_eyeview.webp",
        alt: "Futtle Manchester United eye-level view",
        width: 1184,
        height: 896,
        blurDataURL: "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAACQAQCdASoQAAwABUB8JZwAAcPC4AAA/ftQt8DqO1jKXXFb60l7l/Cc3CmHc+g3xHI1eM/J6wCB44viq9uKAAAA",
      },
    ],
    specs: {
      feathers: "United Red Club Feathers (x4)",
      weight: "15.2g (Direct rebound)",
      base: "Dual-Density Vulcanized Rubber (Red/Black)",
      aerodynamics: "Sharp pop-and-recover profile",
    },
  },
  {
    id: "liverpool",
    shopifyHandle: "futtle-liverpool",
    title: "Futtle Liverpool FC",
    edition: "Liverpool FC Club Edition",
    basePrice: 199,
    currencyCode: "INR",
    currencySymbol: "₹",
    offers: defaultOffers,
    tagline: "Anfield red. Relentless touch.",
    description:
      "A Liverpool red edition built for nonstop touches and long rally sessions. Bright red club styling meets a steady weighted base, giving the Futtle a reliable lift for keep-ups, passes, and fast recovery touches.",
    isAvailable: false,
    colors: {
      primary: "#c8102e",
      secondary: "#00b2a9",
      accent: "#f6eb61",
      glow: "rgba(200, 16, 46, 0.15)",
      gradient: "from-red-950/40 to-cyan-950/20 border-red-500/20",
    },
    kitTheme: "Anfield Red & Teal Detail",
    gallery: [
      {
        src: "/f_lfc_eyevie.webp",
        alt: "Futtle Liverpool FC eye-level view",
        width: 1184,
        height: 896,
        blurDataURL: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAACQAQCdASoQAAwABUB8JZQAAcOb5tAA/ftQt8DqO1jKXXFb60l7l/Cc3CmHb5Jgu3OT73S5G3nfhhQxcgAAAA==",
      },
    ],
    specs: {
      feathers: "Liverpool Red Club Feathers (x4)",
      weight: "15g (Endurance balance)",
      base: "Dual-Density Vulcanized Rubber (Red/Teal)",
      aerodynamics: "Steady rally-control profile",
    },
  },
  {
    id: "arsenal",
    shopifyHandle: "futtle-arsenal",
    title: "Futtle Arsenal FC",
    edition: "Arsenal FC Club Edition",
    basePrice: 199,
    currencyCode: "INR",
    currencySymbol: "₹",
    offers: defaultOffers,
    tagline: "North London red. Technical touch.",
    description:
      "A red-and-white club edition shaped for technical control, clean flicks, and tight-space juggling. Arsenal styling runs through the feather set and base, giving this build a crisp match-day look with a smooth, balanced flight.",
    isAvailable: false,
    colors: {
      primary: "#ef0107",
      secondary: "#ffffff",
      accent: "#063672",
      glow: "rgba(239, 1, 7, 0.15)",
      gradient: "from-red-950/40 to-blue-950/20 border-red-500/20",
    },
    kitTheme: "Arsenal Red & White",
    gallery: [
      {
        src: "/f_afc_eyeview.webp",
        alt: "Futtle Arsenal FC eye-level view",
        width: 1184,
        height: 896,
        blurDataURL: "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAACwAQCdASoQAAwABUB8JZQAAhcQ8VAAAP37ULfA6js8qe/XYjDjhOE5uFMO3yTBduco8wujqRrOrsmFYAA=",
      },
    ],
    specs: {
      feathers: "Arsenal Red & White Club Feathers (x4)",
      weight: "15.1g (Technical balance)",
      base: "Dual-Density Vulcanized Rubber (Red/White)",
      aerodynamics: "Clean flick-and-stall profile",
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

export function isWorldCupEdition(product: Pick<Product, "id">): boolean {
  return worldCupProductIds.has(product.id);
}

export function getProductsByAvailability(source: Product[] = products): Product[] {
  return source
    .map((product, index) => ({ product, index }))
    .sort((left, right) => {
      const availabilityScore = Number(right.product.isAvailable) - Number(left.product.isAvailable);

      if (availabilityScore !== 0) {
        return availabilityScore;
      }

      return left.index - right.index;
    })
    .map(({ product }) => product);
}
