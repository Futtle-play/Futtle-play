"use client";

import React from "react";

export default function Story() {
  const originStats = [
    {
      label: "Heritage",
      value: "Centuries Deep",
      desc: "A long street tradition refined into a cleaner, more controlled build.",
      className: "text-accent-active",
    },
    {
      label: "Weight Spec",
      value: "15 Grams",
      desc: "Calibrated weight distribution for a stable spin and a steady drop.",
      className: "text-[#ff4d1a]",
    },
    {
      label: "Assembled In",
      value: "India",
      desc: "Hand-selected goose feathers paired with a custom vulcanized base.",
      className: "text-text-theme",
    },
  ];

  return (
    <section id="story" className="section-shell relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,var(--accent-glow),transparent)]" />
      <div className="pointer-events-none absolute left-[8%] top-16 h-80 w-80 rounded-full bg-accent-glow blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-6xl space-y-12 lg:ml-[12%]">
          <div className="space-y-5 sm:space-y-7">
            <p className="font-mono text-[12px] uppercase tracking-[0.34em] text-accent-active sm:text-[11px]">
              Origin
            </p>
            <h2 className="max-w-4xl font-display text-[clamp(2.8rem,11vw,4.2rem)] font-bold uppercase leading-[0.92] tracking-[-0.055em] text-text-theme sm:text-[clamp(3.5rem,7vw,5.4rem)] lg:tracking-[-0.065em]">
              A street game with a centuries-old legacy.
            </h2>
          </div>

          <div className="max-w-5xl space-y-9">
            <div className="space-y-4 text-lg leading-8 text-text-theme/62 sm:text-xl sm:leading-9">
              <p>
                <span className="text-text-theme/82">Keep it up.</span> No hands. No goals. No complicated rules.
              </p>
              <p>
                Just you, a Futtle, and the challenge of keeping it off the ground. Play solo, challenge friends, or build your own record one touch at a time.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-9 text-text-theme/58 sm:text-xl sm:leading-10">
                Inspired by the centuries-old game of <strong className="font-semibold text-text-theme">Jianzi</strong>, Futtle combines hand-selected goose feathers, a precision-weighted rubber base, and modern engineering to create a smoother, more predictable flight that&apos;s easy to learn and endlessly rewarding to master.
              </p>
              <p className="text-base leading-8 text-text-theme/46 sm:text-lg sm:leading-9">
                Build foot precision. Improve juggling skills. Sharpen agility and reaction time. Or simply rally with friends and see who lasts longest. One touch becomes ten. Ten becomes a hundred.
              </p>
              <p className="font-display text-xl font-bold uppercase leading-none tracking-[-0.04em] text-text-theme sm:text-2xl">
                That&apos;s the fun of Futtle.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 border-t border-border-theme pt-10 sm:grid-cols-3 sm:gap-8">
            {originStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.75rem] border border-border-theme bg-[linear-gradient(180deg,var(--card-bg),var(--panel-bg))] p-6 shadow-[0_16px_44px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:bg-panel-theme"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-theme/30 sm:text-[9px]">
                  {stat.label}
                </p>
                <p className={`mt-4 font-display text-2xl font-bold tracking-[-0.04em] ${stat.className}`}>
                  {stat.value}
                </p>
                <p className="mt-4 text-sm leading-6 text-text-theme/50">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
