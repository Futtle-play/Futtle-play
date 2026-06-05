"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border-theme py-14 text-text-theme/40 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-border-theme pb-10 md:grid-cols-4 md:gap-12 md:pb-12">
          <div className="space-y-5 md:col-span-2">
            <h3 className="font-display text-2xl font-bold tracking-[0.2em] text-text-theme">FUTTLE</h3>
            <p className="max-w-sm text-base leading-7 text-text-theme/45 sm:text-sm">
              A modern build for a centuries-old street game. Designed for better touch, longer sessions, and a cleaner first impression.
            </p>
          </div>

          <div>
            <h4 className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-text-theme sm:text-[10px] sm:tracking-[0.2em]">Navigate</h4>
            <ul className="space-y-3 font-mono text-[12px] uppercase tracking-[0.14em] sm:text-[10px] sm:tracking-[0.16em]">
              <li>
                <Link href="/#story" className="text-left transition-colors hover:text-accent-active block">
                  Story
                </Link>
              </li>
              <li>
                <Link href="/#guide" className="text-left transition-colors hover:text-accent-active block">
                  Learn
                </Link>
              </li>
              <li>
                <Link href="/#care" className="text-left transition-colors hover:text-accent-active block">
                  Care
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-left transition-colors hover:text-accent-active block">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-text-theme sm:text-[10px] sm:tracking-[0.2em]">Contact</h4>
            <ul className="space-y-3 font-mono text-[12px] uppercase tracking-[0.14em] text-text-theme/30 sm:text-[10px] sm:tracking-[0.16em]">
              <li>futtle</li>
              <li>futtle</li>
              <li>futtle</li>
            </ul>
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
