"use client";

import React, { use, useRef, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import FuttleVisual from "../../components/FuttleVisual";
import Navbar from "../../components/Navbar";
import { formatPrice, getOfferByKey, getOfferPrice, products, ProductOfferKey } from "../../data/products";
import { useCart } from "../../context/CartContext";

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border-theme py-3">
      <button
        onClick={() => setOpen((current) => !current)}
        className="flex w-full cursor-pointer items-center justify-between text-left font-display text-xs font-bold uppercase tracking-wider text-text-theme"
      >
        <span>{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className={`h-3 w-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "mt-3 max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="pb-1 text-xs leading-relaxed text-text-theme/60">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((entry) => entry.id === id);

  if (!product) {
    notFound();
  }

  const { addToCart } = useCart();
  const [activeView, setActiveView] = useState(0);
  const [offerKey, setOfferKey] = useState<ProductOfferKey>("single");
  const [favourited, setFavourited] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedOffer = getOfferByKey(product, offerKey);
  const selectedPrice = getOfferPrice(product, selectedOffer);

  const nextView = () => {
    setActiveView((prev) => (prev + 1) % 3);
  };

  const prevView = () => {
    setActiveView((prev) => (prev - 1 + 3) % 3);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    const factor = 12;
    setRotate({
      x: -(y / (rect.height / 2)) * factor,
      y: (x / (rect.width / 2)) * factor,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      className="grainy-overlay relative flex min-h-screen flex-col overflow-x-hidden bg-transparent font-sans text-text-theme antialiased selection:bg-accent-active selection:text-black"
      style={{
        "--prod-accent": `var(--accent-${product.id})`,
        "--prod-glow": `var(--glow-${product.id})`,
        "--prod-text": `var(--accent-${product.id}-text)`,
        "--prod-glow-button": `var(--glow-button-${product.id})`,
      } as React.CSSProperties}
    >
      <Navbar />

      <main className="relative z-10 flex-1 px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-10 font-mono text-[9px] uppercase tracking-wider text-text-theme/40">
            <Link href="/" className="transition-colors hover:text-text-theme">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="transition-colors hover:text-text-theme">
              Shop
            </Link>
            <span className="mx-2">/</span>
            <span className="text-text-theme">{product.title}</span>
          </nav>

          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="order-2 flex h-fit flex-row gap-3 overflow-x-auto select-none font-mono lg:sticky lg:top-24 lg:col-span-2 lg:order-1 lg:flex-col lg:overflow-visible">
              {[0, 1, 2].map((viewIndex) => (
                <button
                  key={viewIndex}
                  onClick={() => setActiveView(viewIndex)}
                  className={`relative flex aspect-square h-16 w-16 cursor-pointer items-center justify-center rounded-xl border bg-bg-theme p-2 transition-all duration-300 sm:h-20 sm:w-20 ${
                    activeView === viewIndex
                      ? "border-accent-active ring-1 ring-accent-active/20"
                      : "border-border-theme hover:border-text-theme/40"
                  } ${viewIndex > 0 ? "overflow-hidden" : ""}`}
                  aria-label={`View ${viewIndex + 1}`}
                >
                  <div
                    className={
                      viewIndex === 1
                        ? "h-full w-full scale-[1.6] translate-y-[-10%]"
                        : viewIndex === 2
                          ? "h-full w-full scale-[1.5] translate-y-[20%]"
                          : "h-[80%] w-[80%]"
                    }
                  >
                    <FuttleVisual
                      id={product.id}
                      primaryColor={product.colors.primary}
                      secondaryColor={product.colors.secondary}
                      accentColor={product.colors.accent}
                      interactive={false}
                    />
                  </div>
                </button>
              ))}
            </div>

            <div className="order-1 flex h-fit flex-col items-center justify-start lg:sticky lg:top-24 lg:col-span-5 lg:order-2">
              <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border border-border-theme bg-card-theme">
                <div
                  ref={containerRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="relative flex h-full w-full items-center justify-center p-6 transition-all duration-300 ease-out"
                  style={{
                    transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                  }}
                >
                  {activeView === 0 ? (
                    <FuttleVisual
                      id={product.id}
                      primaryColor={product.colors.primary}
                      secondaryColor={product.colors.secondary}
                      accentColor={product.colors.accent}
                      interactive={true}
                      className="h-[80%] w-[80%] drop-shadow-[0_24px_48px_rgba(0,0,0,0.5)]"
                    />
                  ) : null}

                  {activeView === 1 ? (
                    <div className="flex h-full w-full translate-y-[-10%] scale-[1.6] items-center justify-center transition-transform duration-300">
                      <FuttleVisual
                        id={product.id}
                        primaryColor={product.colors.primary}
                        secondaryColor={product.colors.secondary}
                        accentColor={product.colors.accent}
                        interactive={true}
                        className="h-full w-full drop-shadow-[0_24px_48px_rgba(0,0,0,0.5)]"
                      />
                    </div>
                  ) : null}

                  {activeView === 2 ? (
                    <div className="flex h-full w-full translate-y-[20%] scale-[1.5] items-center justify-center transition-transform duration-300">
                      <FuttleVisual
                        id={product.id}
                        primaryColor={product.colors.primary}
                        secondaryColor={product.colors.secondary}
                        accentColor={product.colors.accent}
                        interactive={true}
                        className="h-full w-full drop-shadow-[0_24px_48px_rgba(0,0,0,0.5)]"
                      />
                    </div>
                  ) : null}
                </div>

                <button
                  onClick={prevView}
                  className="absolute left-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border-theme bg-header-theme text-text-theme/70 transition-all duration-300 hover:bg-[var(--prod-accent)] hover:text-[var(--prod-text)]"
                  aria-label="Previous view"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4.5 w-4.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>

                <button
                  onClick={nextView}
                  className="absolute right-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border-theme bg-header-theme text-text-theme/70 transition-all duration-300 hover:bg-[var(--prod-accent)] hover:text-[var(--prod-text)]"
                  aria-label="Next view"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4.5 w-4.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="order-3 space-y-6 lg:col-span-5">
              <div>
                <span
                  className="inline-flex rounded-full border border-border-theme bg-panel-theme px-3 py-0.5 font-mono text-[9px] uppercase tracking-widest"
                  style={{ color: `var(--accent-${product.id})` }}
                >
                  {product.edition}
                </span>
                <h1 className="mt-3 font-display text-3xl font-bold uppercase leading-none tracking-tight text-text-theme sm:text-4xl">
                  {product.title}
                </h1>
                <p className="mt-1.5 text-xs font-mono uppercase tracking-wider text-text-theme/40">
                  {product.kitTheme}
                </p>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="font-display text-2xl font-bold text-text-theme">
                    {formatPrice(product.currencySymbol, selectedPrice)}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-text-theme/40">
                    {selectedOffer.label}
                  </span>
                </div>
              </div>

              <div className="border-t border-border-theme pt-4">
                <h3 className="mb-3 font-mono text-[9px] uppercase tracking-wider text-text-theme/40">Other Editions</h3>
                <div className="flex flex-wrap gap-2.5">
                  {products.map((entry) => (
                    <Link
                      key={entry.id}
                      href={`/shop/${entry.id}`}
                      className={`relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border transition-all duration-300 hover:scale-105 ${
                        entry.id === product.id
                          ? "border-[var(--swatch-accent)] ring-2 ring-[var(--swatch-glow)]"
                          : "border-border-theme hover:border-text-theme/40"
                      }`}
                      style={{
                        "--swatch-accent": `var(--accent-${entry.id})`,
                        "--swatch-glow": `var(--glow-button-${entry.id})`,
                      } as React.CSSProperties}
                      title={entry.title}
                    >
                      <div className="absolute inset-0 flex scale-90 items-center justify-center bg-bg-theme">
                        <FuttleVisual
                          id={entry.id}
                          primaryColor={entry.colors.primary}
                          secondaryColor={entry.colors.secondary}
                          accentColor={entry.colors.accent}
                          interactive={false}
                          className="h-[80%] w-[80%]"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-border-theme pt-4">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="font-mono text-[9px] uppercase tracking-wider text-text-theme/40">Select configuration</h3>
                  <span className="font-mono text-[8px] uppercase tracking-widest text-text-theme/30">
                    Synced from one local source
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 font-mono">
                  {product.offers.map((offer) => (
                    <button
                      key={offer.key}
                      onClick={() => setOfferKey(offer.key)}
                      className={`cursor-pointer rounded-xl border p-3.5 text-left transition-all duration-300 ${
                        offerKey === offer.key
                          ? "border-[var(--prod-accent)] bg-[var(--prod-glow)] text-[var(--prod-accent)] ring-1 ring-[var(--prod-glow)]"
                          : "border-border-theme bg-panel-theme text-text-theme hover:border-text-theme/40"
                      }`}
                    >
                      <p className="text-[9px] font-bold uppercase tracking-widest">{offer.label}</p>
                      <p className="mt-1 text-xs opacity-80">
                        {formatPrice(product.currencySymbol, getOfferPrice(product, offer))}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5 border-t border-border-theme pt-4">
                <button
                  onClick={() => addToCart(product, selectedOffer.key)}
                  className="w-full cursor-pointer rounded-full bg-text-theme py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-bg-theme transition-all duration-300 hover:bg-[var(--prod-accent)] hover:text-[var(--prod-text)] hover:shadow-[0_0_20px_var(--prod-glow-button)]"
                >
                  Add {selectedOffer.shortLabel} to Bag
                </button>

                <button
                  onClick={() => setFavourited((current) => !current)}
                  className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border py-3.5 text-xs font-bold uppercase tracking-[0.16em] transition-all duration-300 ${
                    favourited
                      ? "border-[#ff4d1a] bg-[#ff4d1a]/5 text-[#ff4d1a]"
                      : "border-border-theme bg-panel-theme text-text-theme hover:border-text-theme/40"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={favourited ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                  {favourited ? "Favourited" : "Favourite"}
                </button>
              </div>

              <p className="text-xs leading-relaxed text-text-theme/70 sm:text-sm">{product.description}</p>

              <div className="space-y-1 border-t border-border-theme pt-4">
                <div className="border-b border-border-theme pb-3">
                  <h3 className="font-mono text-[9px] uppercase tracking-wider text-text-theme/40">Specifications</h3>
                  <ul className="mt-2 space-y-1.5 font-mono text-[9px] uppercase tracking-wider text-text-theme/70">
                    <li><span className="text-text-theme/35">Weight:</span> {product.specs.weight}</li>
                    <li><span className="text-text-theme/35">Feathers:</span> {product.specs.feathers}</li>
                    <li><span className="text-text-theme/35">Base:</span> {product.specs.base}</li>
                    <li><span className="text-text-theme/35">Aero:</span> {product.specs.aerodynamics}</li>
                  </ul>
                </div>

                <Accordion title="Shipping & Delivery">
                  <p>Live shipping rates and the final delivery address flow are handed off to Shopify checkout after the cart is created.</p>
                </Accordion>

                <Accordion title="Care & Maintenance">
                  <p>Keep your Futtle dry at all times. Water can warp the feathers and affect flight weight. If feathers bend, steam them over a kettle for a few seconds to restore original loft.</p>
                </Accordion>

                <Accordion title="Returns & Replacement">
                  <p>Returns, replacements, and order policy text should be finalized in Shopify once the merchant account and launch rules are confirmed.</p>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
