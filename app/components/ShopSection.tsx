"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { formatPrice, getOfferByKey, getOfferPrice, Product, getProductsByAvailability, products } from "../data/products";
import FuttleVisual from "./FuttleVisual";

function ProductArtwork({
  product,
  interactive,
}: {
  product: Product;
  interactive: boolean;
}) {
  const firstImage = product.gallery?.[0];

  if (firstImage) {
    return (
      <div className="relative h-full w-full">
        <Image
          src={firstImage.src}
          alt={firstImage.alt}
          fill
          priority={!interactive && product.isAvailable}
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 100vw"
          className={`object-contain transition-transform duration-500 ${
            interactive ? "p-4 group-hover:scale-[1.02]" : "p-2 scale-[1.12]"
          }`}
        />
      </div>
    );
  }

  return (
    <FuttleVisual
      id={product.id}
      primaryColor={product.colors.primary}
      secondaryColor={product.colors.secondary}
      accentColor={product.colors.accent}
      interactive={interactive}
      className="h-[75%] w-[75%] drop-shadow-[0_12px_24px_rgba(0,0,0,0.4)]"
    />
  );
}

function ProductCard({
  product,
  onPreview,
}: {
  product: Product;
  onPreview: (product: Product) => void;
}) {
  const primaryOffer = getOfferByKey(product, "single");

  return (
    <article
      className="group flex flex-col justify-between rounded-2xl border border-border-theme bg-card-theme p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--prod-border)] hover:bg-panel-theme hover:shadow-[0_0_24px_var(--prod-glow)]"
      style={{
        "--prod-border": `var(--border-${product.id})`,
        "--prod-glow": `var(--glow-${product.id})`,
        "--prod-accent": `var(--accent-${product.id})`,
        "--prod-text": `var(--accent-${product.id}-text)`,
      } as React.CSSProperties}
    >
      <div className="relative">
        <button
          onClick={() => onPreview(product)}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border-theme bg-header-theme text-text-theme/80 opacity-0 transition-all duration-300 hover:scale-105 hover:bg-[var(--prod-accent)] hover:text-[var(--prod-text)] group-hover:opacity-100"
          aria-label="Quick preview"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </button>

        <Link href={`/shop/${product.id}`} className="block">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border-theme bg-bg-theme">
            <div className="flex h-full w-full items-center justify-center p-2">
              <ProductArtwork product={product} interactive={false} />
            </div>
            {!product.isAvailable ? <div className="absolute inset-0 bg-black/35" /> : null}
            <div className="absolute left-3 top-3 rounded-full border border-border-theme bg-black/70 px-2.5 py-1 font-mono text-[8px] uppercase tracking-widest text-text-theme/80 backdrop-blur-sm">
              {product.isAvailable ? "Available" : "Sold out"}
            </div>
          </div>
        </Link>

        <Link href={`/shop/${product.id}`} className="mt-4 block">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-display text-sm font-bold uppercase text-text-theme transition-colors duration-300 group-hover:text-[var(--prod-accent)]">
                {product.title}
              </h3>
              <p className="mt-0.5 font-mono text-[8px] uppercase tracking-wider text-text-theme/40">
                {product.edition}
              </p>
            </div>
            {product.isAvailable ? (
              <p className="font-display text-sm font-bold" style={{ color: `var(--accent-${product.id})` }}>
                {formatPrice(product.currencySymbol, getOfferPrice(product, primaryOffer))}
              </p>
            ) : (
              <p className="rounded-full border border-white/10 bg-white/5 px-2 py-1 font-mono text-[8px] uppercase tracking-widest text-text-theme/50">
                Sold out
              </p>
            )}
          </div>
        </Link>
      </div>
    </article>
  );
}

function PreviewModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const { addToCart } = useCart();
  const previewDisabled = !product.isAvailable;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-6 backdrop-blur-md animate-fade-in"
      style={{
        "--prod-accent": `var(--accent-${product.id})`,
        "--prod-text": `var(--accent-${product.id}-text)`,
        "--prod-glow-button": `var(--glow-button-${product.id})`,
      } as React.CSSProperties}
    >
      <div className="relative max-h-[95dvh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-border-theme bg-card-theme p-6 text-text-theme shadow-2xl sm:p-10">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border-theme bg-panel-theme text-text-theme/60 transition-all duration-300 hover:border-transparent hover:bg-text-theme hover:text-bg-theme"
          aria-label="Close preview"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="relative flex aspect-square w-full max-w-[20rem] items-center justify-center sm:max-w-[24rem]">
              <ProductArtwork product={product} interactive={true} />
              {previewDisabled ? <div className="absolute inset-0 rounded-[2rem] bg-black/20" /> : null}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <span
                className="inline-flex rounded-full border border-border-theme bg-panel-theme px-2.5 py-0.5 font-mono text-[8px] uppercase tracking-widest"
                style={{ color: `var(--accent-${product.id})` }}
              >
                {product.edition}
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-none tracking-tight text-text-theme">
                {product.title}
              </h2>
              <p className="mt-2 text-xs font-mono uppercase tracking-wider" style={{ color: `var(--accent-${product.id})` }}>
                {product.kitTheme}
              </p>
              {!product.isAvailable ? (
                <p className="mt-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[8px] uppercase tracking-widest text-text-theme/60">
                  Sold out for now
                </p>
              ) : null}
            </div>

            <p className="text-xs leading-relaxed text-text-theme/70 sm:text-sm">{product.description}</p>

            <div className="space-y-3 border-t border-border-theme pt-4">
              {product.offers.map((offer) => (
                <div key={offer.key} className="flex items-center justify-between rounded-2xl border border-border-theme bg-panel-theme px-4 py-3">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-text-theme/40">{offer.label}</p>
                    <p className="mt-1 font-display text-lg font-bold text-text-theme">
                      {formatPrice(product.currencySymbol, getOfferPrice(product, offer))}
                    </p>
                  </div>
                  <button
                    disabled={previewDisabled}
                    onClick={() => {
                      if (previewDisabled) {
                        return;
                      }

                      addToCart(product, offer.key);
                      onClose();
                    }}
                    className="cursor-pointer rounded-full bg-text-theme px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-bg-theme transition-all duration-300 hover:bg-[var(--prod-accent)] hover:text-[var(--prod-text)] hover:shadow-[0_0_20px_var(--prod-glow-button)] disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-text-theme/30 disabled:hover:bg-white/10 disabled:hover:text-text-theme/30 disabled:hover:shadow-none"
                  >
                    {previewDisabled ? "Sold out" : "Add"}
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-border-theme pt-4">
              <p className="font-mono text-[8px] uppercase tracking-wider text-text-theme/40">Technical specifications</p>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-3 pt-2 font-mono text-[9px] uppercase tracking-wider">
                <div>
                  <dt className="text-text-theme/40">Weight</dt>
                  <dd className="mt-1 text-text-theme">{product.specs.weight}</dd>
                </div>
                <div>
                  <dt className="text-text-theme/40">Feathers</dt>
                  <dd className="mt-1 text-text-theme">{product.specs.feathers}</dd>
                </div>
                <div>
                  <dt className="text-text-theme/40">Base</dt>
                  <dd className="mt-1 text-text-theme">{product.specs.base}</dd>
                </div>
                <div>
                  <dt className="text-text-theme/40">Aero</dt>
                  <dd className="mt-1 text-text-theme">{product.specs.aerodynamics}</dd>
                </div>
              </dl>
            </div>

            <Link
              href={`/shop/${product.id}`}
              onClick={onClose}
              className="inline-flex text-[10px] font-bold uppercase tracking-[0.16em] text-text-theme/60 transition-colors hover:text-text-theme"
            >
              Open full product page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShopSection() {
  const [previewProduct, setPreviewProduct] = useState<Product | null>(null);
  const visibleProducts = getProductsByAvailability(products);

  return (
    <section id="shop" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex max-w-7xl flex-col gap-4 border-b border-border-theme pb-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent-active">Catalogue</p>
            <h2 className="mt-1 font-display text-2xl font-bold uppercase leading-none tracking-tight text-text-theme sm:text-3xl">
              Choose your edition.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} onPreview={setPreviewProduct} />
          ))}
        </div>
      </div>

      {previewProduct ? (
        <PreviewModal product={previewProduct} onClose={() => setPreviewProduct(null)} />
      ) : null}
    </section>
  );
}
