"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { getOfferByKey, getOfferPrice, Product, ProductOfferKey } from "../data/products";
import { getShopifyCheckoutUrl, isShopifyConfigured } from "../../lib/shopify";

export interface CartItem {
  id: string;
  handle: string;
  title: string;
  edition: string;
  offerKey: ProductOfferKey;
  offerLabel: string;
  shopifyVariantTitle: string;
  price: number;
  currencySymbol: string;
  quantity: number;
  colors: Product["colors"];
}

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  isCheckingOut: boolean;
  checkoutError: string | null;
  addToCart: (product: Product, offerKey?: ProductOfferKey, quantity?: number) => void;
  removeFromCart: (itemKey: string) => void;
  updateQuantity: (itemKey: string, quantity: number) => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;
  clearCheckoutError: () => void;
  checkout: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function getCartItemKey(item: Pick<CartItem, "id" | "offerKey">): string {
  return `${item.id}:${item.offerKey}`;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  useEffect(() => {
    // Keep this restore step boring. The cart is local-only until checkout starts,
    // so a bad saved value should fail quietly and let the customer keep browsing.
    const savedCart = localStorage.getItem("futtle_cart");
    if (!savedCart) {
      return;
    }

    let restoreCartTimeout: number | undefined;

    try {
      const restoredCart = JSON.parse(savedCart) as CartItem[];
      restoreCartTimeout = window.setTimeout(() => {
        setCart(restoredCart);
      }, 0);
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
      localStorage.removeItem("futtle_cart");
    }

    return () => {
      if (restoreCartTimeout !== undefined) {
        window.clearTimeout(restoreCartTimeout);
      }
    };
  }, []);

  const saveCart = (getNextCart: (currentCart: CartItem[]) => CartItem[]) => {
    // One helper for React state + localStorage keeps quantity/add/remove behavior in sync.
    setCart((currentCart) => {
      const nextCart = getNextCart(currentCart);
      localStorage.setItem("futtle_cart", JSON.stringify(nextCart));
      return nextCart;
    });
  };

  const addToCart = (product: Product, offerKey: ProductOfferKey = "single", quantity = 1) => {
    const offer = getOfferByKey(product, offerKey);
    const itemKey = getCartItemKey({ id: product.id, offerKey: offer.key });

    setCheckoutError(null);

    saveCart((currentCart) => {
      const existingItemIndex = currentCart.findIndex((item) => getCartItemKey(item) === itemKey);

      if (existingItemIndex > -1) {
        return currentCart.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [
        ...currentCart,
        {
          id: product.id,
          handle: product.shopifyHandle,
          title: product.title,
          edition: product.edition,
          offerKey: offer.key,
          offerLabel: offer.label,
          shopifyVariantTitle: offer.shopifyVariantTitle,
          price: getOfferPrice(product, offer),
          currencySymbol: product.currencySymbol,
          quantity,
          colors: product.colors,
        },
      ];
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (itemKey: string) => {
    saveCart((currentCart) => currentCart.filter((item) => getCartItemKey(item) !== itemKey));
  };

  const updateQuantity = (itemKey: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemKey);
      return;
    }

    saveCart((currentCart) =>
      currentCart.map((item) =>
        getCartItemKey(item) === itemKey ? { ...item, quantity } : item,
      ),
    );
  };

  const toggleCart = () => {
    setCheckoutError(null);
    setIsCartOpen((current) => !current);
  };

  const openCart = () => {
    setCheckoutError(null);
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setCheckoutError(null);
    setIsCartOpen(false);
  };

  const clearCart = () => {
    saveCart(() => []);
  };

  const clearCheckoutError = () => {
    setCheckoutError(null);
  };

  const checkout = async () => {
    if (cart.length === 0 || isCheckingOut) {
      return;
    }

    if (!isShopifyConfigured()) {
      setCheckoutError(
        "Checkout is temporarily unavailable. Please try again in a few minutes.",
      );
      setIsCartOpen(true);
      return;
    }

    setIsCheckingOut(true);
    setCheckoutError(null);

    try {
      const checkoutUrl = await getShopifyCheckoutUrl(
        cart.map((item) => ({
          handle: item.handle,
          variantTitle: item.shopifyVariantTitle,
          quantity: item.quantity,
        })),
      );

      if (!checkoutUrl) {
        throw new Error(
          "Checkout could not be started.",
        );
      }

      window.location.assign(checkoutUrl);
    } catch (error) {
      console.error("Checkout failed", error);
      setCheckoutError("Checkout is temporarily unavailable. Please try again in a few minutes.");
      setIsCartOpen(true);
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        isCheckingOut,
        checkoutError,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleCart,
        openCart,
        closeCart,
        clearCart,
        clearCheckoutError,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
