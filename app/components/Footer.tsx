"use client";

import React from "react";
import Link from "next/link";
import { products } from "../data/products";
import { getCustomerAccountUrl, isCustomerAccountConfigured } from "../../lib/customerAccounts";

export default function Footer() {
  const customerAccountHref = getCustomerAccountUrl();
  const customerAccountConfigured = isCustomerAccountConfigured();

  return (
    <footer className="border-t border-border-theme py-14 text-text-theme/40 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-border-theme pb-10 md:grid-cols-[1.3fr_0.8fr_0.8fr_1fr] md:gap-12 md:pb-12">
          <div className="space-y-5">
            <h3 className="font-display text-2xl font-bold tracking-[0.2em] text-text-theme">FUTTLE</h3>
            <p className="max-w-sm text-base leading-7 text-text-theme/45 sm:text-sm">
              A modern build for a centuries-old street game. Designed for better touch, longer sessions, and a cleaner first impression.
            </p>
          </div>

          <div>
            <h4 className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-text-theme sm:text-[10px] sm:tracking-[0.2em]">Shop</h4>
            <ul className="space-y-3 font-mono text-[12px] uppercase tracking-[0.14em] sm:text-[10px] sm:tracking-[0.16em]">
              {products.map((product) => (
                <li key={product.id}>
                  <Link href={`/shop/${product.id}`} className="text-left transition-colors hover:text-accent-active block">
                    {product.title.replace("Futtle ", "")}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/shop" className="text-left transition-colors hover:text-accent-active block">
                  All editions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-text-theme sm:text-[10px] sm:tracking-[0.2em]">Navigate</h4>
            <ul className="space-y-3 font-mono text-[12px] uppercase tracking-[0.14em] sm:text-[10px] sm:tracking-[0.16em]">
              <li>
                <Link href="/#guide" className="text-left transition-colors hover:text-accent-active block">
                  Learn
                </Link>
              </li>
              <li>
                <Link href="/#story" className="text-left transition-colors hover:text-accent-active block">
                  Story
                </Link>
              </li>
              <li>
                <Link href="/#events" className="text-left transition-colors hover:text-accent-active block">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/#care" className="text-left transition-colors hover:text-accent-active block">
                  Care
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex min-h-40 flex-col">
            <div>
              <h4 className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-text-theme sm:text-[10px] sm:tracking-[0.2em]">Contact</h4>
              <a
                href="mailto:hello@futtle.in"
                className="block font-mono text-[12px] uppercase tracking-[0.14em] text-text-theme/30 transition-colors hover:text-accent-active sm:text-[10px] sm:tracking-[0.16em]"
              >
                hello@futtle.in
              </a>
            </div>
            <div className="mt-8 flex md:mt-auto">
              <a
                href={customerAccountHref}
                aria-disabled={!customerAccountConfigured}
                className={`inline-flex min-h-12 w-full max-w-[14rem] items-center justify-center rounded-full px-5 py-3 text-center font-mono text-[11px] font-bold uppercase tracking-[0.16em] transition-all duration-300 md:max-w-[12rem] ${
                  customerAccountConfigured
                    ? "bg-accent-active text-black hover:bg-text-theme hover:text-bg-theme hover:shadow-[0_0_24px_var(--accent-glow)]"
                    : "pointer-events-none bg-text-theme/10 text-text-theme/20"
                }`}
              >
                Track order
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-8 font-mono text-[11px] uppercase tracking-[0.12em] text-text-theme/20 sm:flex-row sm:items-center sm:text-[10px] sm:tracking-[0.15em]">
          <div>© 2026 FUTTLE. All rights reserved.</div>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <span className="cursor-help transition-colors hover:text-text-theme">Terms</span>
            <span className="cursor-help transition-colors hover:text-text-theme">Privacy</span>
            <span className="text-text-theme/10">Made in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
