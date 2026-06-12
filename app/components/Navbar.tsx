"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { getCustomerAccountUrl, isCustomerAccountConfigured } from "../../lib/customerAccounts";

const instagramHref = "https://www.instagram.com/futtleindia/";
const whatsappHref = "https://wa.me/+918860801685";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const hiddenAtScrollY = useRef<number | null>(null);
  const { cart, openCart } = useCart();
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
  const customerAccountHref = getCustomerAccountUrl();
  const customerAccountConfigured = isCustomerAccountConfigured();
  const scrollToHomeSection = (
    sectionId: string,
    closeMenu = false,
    block: ScrollLogicalPosition = "start"
  ) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname !== "/") {
      if (closeMenu) {
        setOpen(false);
      }
      return;
    }

    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    event.preventDefault();
    if (closeMenu) {
      setOpen(false);
    }
    window.history.pushState(null, "", `/#${sectionId}`);
    section.scrollIntoView({ behavior: "smooth", block });
  };

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
          {/* <Link
            href="/#guide"
            className="py-1 uppercase text-text-theme/60 transition-colors hover:text-accent-active cursor-pointer"
          >
            How to play
          </Link> */}
          <Link
            href="/#events"
            className="py-1 uppercase text-text-theme/60 transition-colors hover:text-accent-active cursor-pointer"
          >
            Events
          </Link>
          <Link
            href="/#pickup-games"
            onClick={scrollToHomeSection("pickup-games", false, "center")}
            className="py-1 uppercase text-text-theme/60 transition-colors hover:text-accent-active cursor-pointer"
          >
            Pickup Games
          </Link>
          <a
            href={customerAccountHref}
            target="_blank"
            aria-disabled={!customerAccountConfigured}
            className={`py-1 uppercase transition-colors ${
              customerAccountConfigured
                ? "text-text-theme/60 hover:text-accent-active"
                : "pointer-events-none text-text-theme/20"
            }`}
          >
            Track order
          </a>
        </nav>

        <div className="relative flex items-center gap-2 sm:gap-3">
          <a
            href={instagramHref}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border-theme bg-panel-theme text-text-theme transition-all duration-300 hover:border-accent-active hover:bg-accent-active hover:text-black"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Instagram"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4.5 w-4.5">
              <rect width="17.5" height="17.5" x="3.25" y="3.25" rx="5" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="12" cy="12" r="3.7" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="17" cy="7" r="1.1" fill="currentColor" />
            </svg>
          </a>

          <a
            href={whatsappHref}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border-theme bg-panel-theme text-text-theme transition-all duration-300 hover:border-accent-active hover:bg-accent-active hover:text-black"
            target="_blank"
            rel="noreferrer"
            aria-label="Open WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4.5 w-4.5">
              <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.5 0 .14 5.35.14 11.94c0 2.1.55 4.16 1.6 5.97L0 24l6.25-1.64a11.9 11.9 0 0 0 5.83 1.49h.01c6.58 0 11.94-5.35 11.94-11.94 0-3.19-1.25-6.18-3.51-8.43Zm-8.43 18.35h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.23-.37a9.87 9.87 0 0 1-1.51-5.28C2.22 6.47 6.68 2.02 12.09 2.02c2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.47-4.45 9.92-9.88 9.92Zm5.42-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
            </svg>
          </a>

          <button
            onClick={openCart}
            className="relative flex h-11 min-w-11 items-center justify-center rounded-full border border-border-theme bg-panel-theme px-3 text-text-theme transition-all duration-300 hover:border-accent-active hover:text-accent-active cursor-pointer"
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
            href="/#shop"
            className="inline-flex min-h-11 items-center rounded-full bg-text-theme px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-bg-theme transition-all duration-300 hover:bg-accent-active hover:text-black hover:shadow-[0_0_20px_rgba(212,255,58,0.25)] sm:px-5"
          >
            <span className="sm:hidden">Shop</span>
            <span className="hidden sm:inline">Shop Now</span>
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 text-text-theme md:hidden cursor-pointer"
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
            {/* <Link
              href="/#guide"
              onClick={() => setOpen(false)}
              className="border-b border-border-theme py-2 text-left font-mono text-[10px] uppercase tracking-widest text-text-theme/70 transition-colors hover:text-accent-active cursor-pointer"
            >
              How to play
            </Link> */}
            <Link
              href="/#events"
              onClick={() => setOpen(false)}
              className="border-b border-border-theme py-2 text-left font-mono text-[10px] uppercase tracking-widest text-text-theme/70 transition-colors hover:text-accent-active cursor-pointer"
            >
              Events
            </Link>
            <Link
              href="/#pickup-games"
              onClick={scrollToHomeSection("pickup-games", true, "center")}
              className="border-b border-border-theme py-2 text-left font-mono text-[10px] uppercase tracking-widest text-text-theme/70 transition-colors hover:text-accent-active cursor-pointer"
            >
              Pickup Games
            </Link>
            <a
              href={customerAccountHref}
              aria-disabled={!customerAccountConfigured}
              onClick={() => setOpen(false)}
              className={`border-b border-border-theme py-2 text-left font-mono text-[10px] uppercase tracking-widest transition-colors ${
                customerAccountConfigured
                  ? "text-text-theme/70 hover:text-accent-active"
                  : "pointer-events-none text-text-theme/20"
              }`}
            >
              Track order
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
