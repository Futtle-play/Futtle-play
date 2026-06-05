"use client";

import React from "react";
import CartDrawer from "./components/CartDrawer";
import { CartProvider } from "./context/CartContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
    </CartProvider>
  );
}
