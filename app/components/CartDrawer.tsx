"use client";

import React from "react";
import { useCart } from "../context/CartContext";
import FuttleVisual from "./FuttleVisual";

function getCartItemKey(id: string, offerKey: string): string {
  return `${id}:${offerKey}`;
}

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    isCheckingOut,
    checkoutError,
    toggleCart,
    updateQuantity,
    removeFromCart,
    checkout,
  } = useCart();

  if (!isCartOpen) {
    return null;
  }

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const currencySymbol = cart[0]?.currencySymbol ?? "₹";

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div onClick={toggleCart} className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" />

      <div className="absolute inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md">
          <div className="relative flex h-full flex-col border-l border-[#2a2a28]/60 bg-[#0b0b0a] shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#2a2a28]/60 px-4 py-6 sm:px-6">
              <h2 className="font-display text-xl font-bold uppercase text-[#f5f1e8]" id="slide-over-title">
                Your Gear
              </h2>
              <button
                onClick={toggleCart}
                className="cursor-pointer rounded-full p-2 text-[#f5f1e8]/50 transition-colors hover:bg-[#2a2a28]/35 hover:text-white"
                aria-label="Close cart"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.2"
                    stroke="currentColor"
                    className="mb-4 h-16 w-16 text-[#f5f1e8]/25"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  <h3 className="mb-1 font-display text-lg font-bold uppercase text-white">Cart is empty</h3>
                  <p className="max-w-[220px] text-xs leading-relaxed text-[#f5f1e8]/50">
                    Pick your Futtle edition from the shop and the cart will stay ready here.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => {
                    const itemKey = getCartItemKey(item.id, item.offerKey);

                    return (
                      <div key={itemKey} className="flex gap-4 border-b border-[#2a2a28]/40 py-4 last:border-b-0">
                        <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#2a2a28]/50 bg-[#121211] p-2">
                          <FuttleVisual
                            id={item.id}
                            primaryColor={item.colors.primary}
                            secondaryColor={item.colors.secondary}
                            accentColor={item.colors.accent}
                            interactive={false}
                            className="h-12 w-12"
                          />
                        </div>

                        <div className="flex flex-1 flex-col justify-between">
                          <div>
                            <div className="flex justify-between text-sm font-semibold">
                              <div>
                                <h4 className="font-display uppercase tracking-wide text-white">{item.title}</h4>
                                <span className="mt-0.5 block text-[10px] font-mono uppercase tracking-widest text-[#f5f1e8]/45">
                                  {item.offerLabel}
                                </span>
                              </div>
                              <span className="font-mono text-xs text-[#ff4d1a]">
                                {item.currencySymbol}
                                {item.price * item.quantity}
                              </span>
                            </div>
                            <span className="mt-1 block text-[10px] font-mono uppercase tracking-widest text-[#f5f1e8]/30">
                              {item.edition}
                            </span>
                          </div>

                          <div className="mt-3 flex items-center justify-between text-xs">
                            <div className="flex items-center rounded-full border border-[#2a2a28]/80 bg-[#121211] p-0.5">
                              <button
                                onClick={() => updateQuantity(itemKey, item.quantity - 1)}
                                className="cursor-pointer p-1.5 text-white/50 hover:text-white"
                                aria-label="Decrease quantity"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="h-3.5 w-3.5">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>
                              </button>
                              <span className="px-2.5 font-mono text-xs font-bold text-white">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(itemKey, item.quantity + 1)}
                                className="cursor-pointer p-1.5 text-white/50 hover:text-white"
                                aria-label="Increase quantity"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="h-3.5 w-3.5">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                              </button>
                            </div>

                            <button
                              onClick={() => removeFromCart(itemKey)}
                              className="cursor-pointer border-b border-[#ff4d1a]/20 pb-0.5 font-mono text-[9px] uppercase tracking-wider text-[#ff4d1a]/70 hover:border-[#ff4d1a] hover:text-[#ff4d1a]"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="bg-[#0c0c0b] px-4 py-6 sm:px-6 border-t border-[#2a2a28]/60">
                <div className="space-y-4">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-[#f5f1e8]/60">Subtotal</span>
                    <span className="font-mono text-base font-bold text-white">
                      {currencySymbol}
                      {subtotal}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#f5f1e8]/60">Shipping</span>
                    <span className="font-mono font-bold uppercase tracking-wider text-[#d4ff3a]">
                      Calculated in Shopify
                    </span>
                  </div>
                  <p className="text-[10px] leading-relaxed text-[#f5f1e8]/40">
                    Taxes, shipping, and payment are handled on the Shopify checkout once credentials are connected.
                  </p>
                  {checkoutError ? (
                    <p className="rounded-2xl border border-[#ff4d1a]/30 bg-[#ff4d1a]/8 px-3 py-2 text-[11px] leading-relaxed text-[#ffd1c4]">
                      {checkoutError}
                    </p>
                  ) : null}
                </div>

                <div className="mt-6">
                  <button
                    onClick={checkout}
                    disabled={isCheckingOut}
                    className="w-full cursor-pointer rounded-full bg-[#ff4d1a] py-4 text-sm font-bold uppercase tracking-wide text-white shadow-[0_4px_20px_rgba(255,77,26,0.25)] transition-all duration-300 hover:bg-[#ff4d1a]/90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isCheckingOut ? "Connecting to Shopify..." : "Secure Checkout"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
