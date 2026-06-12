import React from "react";
import Navbar from "../components/Navbar";
import ShopSection from "../components/ShopSection";
import Footer from "../components/Footer";

export default function ShopPage() {
  return (
    <div className="grainy-overlay relative flex min-h-screen flex-col bg-transparent font-sans text-text-theme selection:bg-[#d4ff3a] selection:text-black antialiased overflow-x-hidden">
      <Navbar />
      <main className="flex-1 relative z-10">
        <ShopSection />
      </main>
      <Footer />
    </div>
  );
}
