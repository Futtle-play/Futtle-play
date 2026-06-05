"use client";

import React from "react";

export default function CareLifetime() {
  const careTips = [
    {
      title: "DRY STORAGE",
      desc: "Store the Futtle somewhere dry. Moisture weakens the feather stems and reduces lift over time.",
    },
    {
      title: "THE STEAM TRICK",
      desc: "If the feathers bend out of shape, hold them over steam for a few seconds to help the original flight profile return.",
    },
    {
      title: "WIND BOUNDS",
      desc: "It can handle a light breeze, but cleaner reps usually happen indoors or in calmer corners of a court or lane.",
    },
    {
      title: "BASE CARE",
      desc: "Wipe the rubber base with a damp cloth after dusty sessions and avoid soaking the weighted internals.",
    },
  ];

  return (
    <section id="care" className="section-shell relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Text and stats list */}
          <div className="flex flex-col items-center space-y-6 text-center lg:col-span-5 lg:items-start lg:text-left">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-active sm:text-[10px] sm:tracking-[0.2em]">Care</p>
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.9] tracking-[-0.05em] text-text-theme sm:text-5xl lg:text-6xl">
              Built to play, better if maintained.
            </h2>

            <p className="max-w-md text-base leading-7 text-text-theme/50">
              The feathers are organic and the base takes repeated impact. A little maintenance keeps the flight shape consistent and makes the product feel less disposable.
            </p>

            {/* Premium, borderless list details */}
            <div className="w-full space-y-3 border-t border-border-theme pt-4 font-mono text-[10px] uppercase tracking-[0.12em] sm:text-[9px] sm:tracking-wider">
              <div className="flex flex-col gap-2 border-b border-border-theme pb-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-text-theme/30">EXPECTED LIFETIME</span>
                <span className="text-accent-active">3-6 MONTHS / SPEC</span>
              </div>
              <div className="flex flex-col gap-2 border-b border-border-theme py-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-text-theme/30">RESTORATION METHOD</span>
                <span className="text-text-theme">STEAMING</span>
              </div>
              <div className="flex flex-col gap-2 pt-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-text-theme/30">REPLACEABLE FEATHERS</span>
                <span className="text-[#ff4d1a]">YES</span>
              </div>
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {careTips.map((tip, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={tip.title}
                  className="group flex flex-col justify-between rounded-2xl border border-border-theme bg-card-theme p-5 sm:p-8 transition-all duration-300 hover:bg-panel-theme hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs tracking-wider text-text-theme/30 group-hover:text-text-theme transition-colors duration-300">
                        [0{idx + 1}]
                      </span>
                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-all duration-300 group-hover:scale-125 ${
                          isEven
                            ? "bg-[#ff4d1a] group-hover:shadow-[0_0_8px_#ff4d1a]"
                            : "bg-accent-active group-hover:shadow-[0_0_8px_var(--accent-glow)]"
                        }`}
                      />
                    </div>
                    <h3 className="mb-3 font-display text-base font-bold uppercase tracking-wide text-text-theme sm:text-sm">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-6 text-text-theme/55 sm:text-xs sm:leading-relaxed">{tip.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
