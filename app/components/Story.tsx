"use client";

import React from "react";

export default function Story() {
  return (
    <section id="story" className="section-shell relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(212,255,58,0.08),transparent)]" />
      {/* Editorial layout container */}
      <div className="mx-auto max-w-4xl space-y-12">
        
        {/* Header Section */}
        <div className="space-y-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-active sm:text-[10px] sm:tracking-[0.2em]">Origin</p>
          <h2 className="font-display text-4xl font-bold uppercase leading-[0.9] tracking-[-0.05em] text-text-theme sm:text-5xl lg:text-6xl">
            A street object with real history.
          </h2>
        </div>

        {/* Narrative Copy Section */}
        <div className="space-y-6 text-left">
          <p className="text-lg font-light leading-8 text-text-theme/80 sm:text-xl">
            Futtle is a modern build of <strong className="font-medium text-text-theme">Jianzi</strong>, the foot-juggling game played across Asia for centuries in streets, parks, and schoolyards. The goal here is simple: keep the object honest, sharpen the touch, and make long runs feel natural.
          </p>
          <p className="max-w-3xl text-base leading-7 text-text-theme/55 sm:text-base">
            Hand-selected goose feathers, a dual-density vulcanized rubber base, and calibrated counterweighting give it a cleaner spin profile and a more predictable lift. The result is a piece that feels friendlier for beginners and more precise for players chasing longer sequences.
          </p>
        </div>

        {/* Horizontal Technical Specs / Stats Grid */}
        <div className="grid grid-cols-1 gap-5 border-t border-border-theme pt-10 sm:grid-cols-3 sm:gap-8">
          <div className="space-y-2 rounded-[1.75rem] border border-white/8 bg-[linear-gradient(180deg,rgba(212,255,58,0.08),rgba(255,255,255,0.02))] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.14)]">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-theme/30 sm:text-[9px] sm:tracking-[0.16em]">Heritage</p>
            <p className="text-xl font-bold font-display text-accent-active">Centuries Deep</p>
            <p className="text-sm leading-6 text-text-theme/55 sm:text-xs sm:leading-relaxed">
              A long street tradition refined into a cleaner, more controlled build.
            </p>
          </div>
          <div className="space-y-2 rounded-[1.75rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,122,26,0.08),rgba(255,255,255,0.02))] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.14)]">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-theme/30 sm:text-[9px] sm:tracking-[0.16em]">Weight Spec</p>
            <p className="text-xl font-bold font-display text-[#ff4d1a]">15 Grams</p>
            <p className="text-sm leading-6 text-text-theme/55 sm:text-xs sm:leading-relaxed">
              Calibrated weight distribution for a stable spin and a steady drop.
            </p>
          </div>
          <div className="space-y-2 rounded-[1.75rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,214,10,0.08),rgba(255,255,255,0.02))] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.14)]">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-theme/30 sm:text-[9px] sm:tracking-[0.16em]">Assembled in</p>
            <p className="text-xl font-bold font-display text-text-theme">India</p>
            <p className="text-sm leading-6 text-text-theme/55 sm:text-xs sm:leading-relaxed">
              Hand-selected goose feathers paired with a custom vulcanized base.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
