import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { products } from "../../data/products";
import ProductDetailClient from "./ProductDetailClient";

type ProductDetailPageProps = {
  params: Promise<{ id: string }>;
};

function getProductById(id: string) {
  return products.find((entry) => entry.id === id);
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "FUTTLE",
    };
  }

  return {
    title: `${product.title} — ${product.currencySymbol}${product.basePrice} | FUTTLE`,
    description: product.description,
  };
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;

  if (id === "brasil") {
    redirect("/shop/brazil");
  }

  if (!getProductById(id)) {
    notFound();
  }

  return <ProductDetailClient id={id} />;
}
