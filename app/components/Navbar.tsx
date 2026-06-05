"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const hiddenAtScrollY = useRef<number | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof document === "undefined") {
      return "dark";
    }

    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  });
  const { cart, openCart } = useCart();
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;
      const absDiff = Math.abs(diff);
      const nearTop = currentScrollY < 32;

      if (nearTop || open) {
        setVisible(true);
        hiddenAtScrollY.current = null;
        lastScrollY.current = currentScrollY;
        return;
      }

      // Ignore tiny bounce and finger jitter on touch devices.
      if (absDiff < 6) {
        lastScrollY.current = currentScrollY;
        return;
      }

      if (diff > 0) {
        if (currentScrollY > 88) {
          setVisible(false);
          hiddenAtScrollY.current = currentScrollY;
        }
      } else {
        const revealDistance = hiddenAtScrollY.current === null
          ? Math.abs(diff)
          : hiddenAtScrollY.current - currentScrollY;

        if (revealDistance > 52) {
          setVisible(true);
          hiddenAtScrollY.current = null;
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-border-theme bg-header-theme/92 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl transform transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="select-none font-display text-lg font-bold tracking-[0.25em] text-text-theme transition-colors duration-300 hover:text-accent-active"
        >
          FUTTLE
        </Link>

        <nav className="hidden items-center gap-8 text-[11px] font-medium tracking-[0.16em] md:flex">
          <Link
            href="/#story"
            className="py-1 uppercase text-text-theme/60 transition-colors hover:text-accent-active cursor-pointer"
          >
            Story
          </Link>
          <Link
            href="/#guide"
            className="py-1 uppercase text-text-theme/60 transition-colors hover:text-accent-active cursor-pointer"
          >
            Learn
          </Link>
          <Link
            href="/#care"
            className="py-1 uppercase text-text-theme/60 transition-colors hover:text-accent-active cursor-pointer"
          >
            Care
          </Link>
        </nav>

        <div className="relative flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleTheme}
            className="mr-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border-theme bg-panel-theme text-text-theme transition-all duration-300 hover:bg-accent-active hover:text-black"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4.5 w-4.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.22 4.22l1.59 1.59m12.38 12.38l1.59 1.59M21 12h-2.25m-13.5 0H3m2.22 9.78l1.59-1.59m12.38-12.38l1.59-1.59M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4.5 w-4.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            )}
          </button>

          <button
            onClick={openCart}
            className="relative flex h-10 min-w-10 items-center justify-center rounded-full border border-border-theme bg-panel-theme px-3 text-text-theme transition-all duration-300 hover:border-accent-active hover:text-accent-active cursor-pointer"
            aria-label="Open cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="h-4.5 w-4.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386a1.5 1.5 0 0 1 1.415 1.003L5.707 6m0 0h12.337a1.5 1.5 0 0 1 1.458 1.852l-1.2 4.5a1.5 1.5 0 0 1-1.458 1.148H8.239a1.5 1.5 0 0 1-1.458-1.148L5.707 6Zm0 0L4.5 16.5m4.125 3.75a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Zm9.75 0a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Z" />
            </svg>
            {cartCount > 0 ? (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent-active px-1 font-mono text-[9px] font-bold text-black">
                {cartCount}
              </span>
            ) : null}
          </button>

          <Link
            href="/shop"
            className="inline-flex min-h-10 rounded-full bg-text-theme px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-bg-theme transition-all duration-300 hover:bg-accent-active hover:text-black hover:shadow-[0_0_20px_rgba(212,255,58,0.25)] sm:px-5"
          >
            <span className="sm:hidden">Shop</span>
            <span className="hidden sm:inline">Shop Now</span>
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col items-center justify-center gap-1.5 p-2 text-text-theme md:hidden cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span className={`block h-[1px] w-4 bg-current transition-all duration-300 ${open ? "translate-y-[2.5px] rotate-45" : ""}`} />
            <span className={`block h-[1px] w-4 bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[1px] w-4 bg-current transition-all duration-300 ${open ? "-translate-y-[2.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
      
      {open && (
        <nav className="border-t border-border-theme bg-header-theme px-6 pb-6 pt-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/#story"
              onClick={() => setOpen(false)}
              className="border-b border-border-theme py-2 text-left font-mono text-[10px] uppercase tracking-widest text-text-theme/70 transition-colors hover:text-accent-active cursor-pointer"
            >
              Story
            </Link>
            <Link
              href="/#guide"
              onClick={() => setOpen(false)}
              className="border-b border-border-theme py-2 text-left font-mono text-[10px] uppercase tracking-widest text-text-theme/70 transition-colors hover:text-accent-active cursor-pointer"
            >
              Learn
            </Link>
            <Link
              href="/#care"
              onClick={() => setOpen(false)}
              className="border-b border-border-theme py-2 text-left font-mono text-[10px] uppercase tracking-widest text-text-theme/70 transition-colors hover:text-accent-active cursor-pointer"
            >
              Care
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
