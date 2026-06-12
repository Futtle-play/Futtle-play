import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShopSection from "./components/ShopSection";
import CommunityPosters from "./components/CommunityPosters";
import Story from "./components/Story";
import FieldGuide from "./components/FieldGuide";
import PickupGames from "./components/PickupGames";
import Reviews from "./components/Reviews";
import CareLifetime from "./components/CareLifetime";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="grainy-overlay relative flex min-h-screen flex-col bg-transparent font-sans text-text-theme selection:bg-[#d4ff3a] selection:text-black antialiased overflow-x-hidden">
      <Navbar />

      <main className="flex-1 relative z-10">
        <Hero />
        <ShopSection />
        <CommunityPosters />
        <FieldGuide />
        <PickupGames />
        <Reviews />
        <Story />
        <CareLifetime />
      </main>

      <Footer />
    </div>
  );
}
