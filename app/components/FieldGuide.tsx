"use client";

import React from "react";

export default function FieldGuide() {
  const steps = [
    { num: "01", title: "THE DROP", desc: "Hold the Futtle at chest height and let it fall straight down. Track the base, not the feathers.", accent: "burn" },
    { num: "02", title: "INSIDE TOUCH", desc: "Lift the knee, turn the ankle out, and meet the base with the flat inside of your shoe.", accent: "acid" },
    { num: "03", title: "CUSHION POP", desc: "Guide it back up instead of kicking through it. The clean touch matters more than force.", accent: "acid" },
    { num: "04", title: "RHYTHM SPIN", desc: "Reset your balance, let it descend, and repeat. Stay relaxed so the run stays fluid.", accent: "burn" },
  ];

  const ladder = [
    { touches: "10 Touches", rank: "BEGINNER", desc: "You can keep a simple rhythm without losing the object immediately.", percent: 20 },
    { touches: "30 Touches", rank: "STREET READY", desc: "Basic control is there and the touches start to look intentional.", percent: 40 },
    { touches: "50 Touches", rank: "TACTICAL STRIKER", desc: "You can keep height and pace under control for full short runs.", percent: 60 },
    { touches: "75 Touches", rank: "LOCAL LEGEND", desc: "The rhythm is smooth enough to start mixing in direction changes and stalls.", percent: 80, highlight: true },
    { touches: "100 Touches", rank: "POST IT", desc: "You have the consistency to film it, post it, and call it a proper run.", percent: 100, highlight: true },
  ];

  const challenges = [
    { move: "Inside Arch Pop", pts: "5 PTS", desc: "The standard juggling touch and the foundation of everything else." },
    { move: "Outside Edge Flick", pts: "15 PTS", desc: "A cleaner directional touch using the outside edge of the shoe." },
    { move: "Thigh Cushion Stall", pts: "25 PTS", desc: "Catch the drop on the thigh before sending it back into the sequence." },
    { move: "Leaning Chest Stall", pts: "50 PTS", desc: "Absorb the contact on the chest and keep the object dead still for a beat." },
    { move: "Forehead Pop", pts: "40 PTS", desc: "A soft rebound that tests timing more than raw speed." },
  ];

  return (
    <section id="guide" className="section-shell relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-14 max-w-3xl space-y-4 sm:mb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-active sm:text-[10px] sm:tracking-[0.2em]">Learn</p>
          <h2 className="font-display text-4xl font-bold uppercase leading-[0.9] tracking-[-0.05em] text-text-theme sm:text-5xl lg:text-6xl">
            Learn the first clean sequence.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-text-theme/60">
            Keep it in the air with anything except your hands. These steps move a new player from random swings to controlled inside-foot touches.
          </p>
        </div>

        {/* 4-Step Sequence timeline */}
        <div className="mb-16">
          <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-[0.15em] text-text-theme/60 sm:mb-8">
            The 4-step sequence
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const isBurn = step.accent === "burn";
              return (
                <div
                  key={step.num}
                  className="group relative rounded-2xl border border-border-theme bg-card-theme p-5 sm:p-6 transition-all duration-300 hover:bg-panel-theme hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[2rem] font-bold text-text-theme/10 group-hover:text-text-theme transition-colors duration-300 sm:text-3xl">
                      {step.num}
                    </span>
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-all duration-300 group-hover:scale-125 ${
                        isBurn
                          ? "bg-[#ff4d1a] group-hover:shadow-[0_0_8px_#ff4d1a]"
                          : "bg-accent-active group-hover:shadow-[0_0_8px_var(--accent-glow)]"
                      }`}
                    />
                  </div>
                  <h4 className="mb-2 font-display text-base font-bold uppercase tracking-wide text-text-theme group-hover:text-accent-active transition-colors duration-300 sm:text-sm">
                    {step.title}
                  </h4>
                  <p className="text-sm leading-6 text-text-theme/55 sm:text-xs sm:leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ladder and Challenges */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Ladder column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-text-theme/60">
                Progress ladder
              </h3>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-accent-active sm:text-[9px] sm:tracking-[0.15em]">
                How many clean touches can you string together?
              </p>
            </div>

            <div className="space-y-4">
              {ladder.map((lvl) => {
                const totalSegments = 10;
                const activeSegments = Math.round(lvl.percent / 10);
                
                return (
                  <div
                    key={lvl.touches}
                    className="rounded-2xl border border-border-theme bg-card-theme p-5 flex flex-col justify-between gap-4 transition-all duration-300 hover:border-border-theme/40 sm:flex-row sm:items-center"
                  >
                    <div className="max-w-sm space-y-2">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="font-display text-lg font-bold text-text-theme">
                          {lvl.touches.split(" ")[0]}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-text-theme/30 sm:text-[9px]">
                          touches
                        </span>
                        <span
                          className={`rounded-full border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] sm:ml-2 sm:text-[8px] sm:tracking-widest ${
                            lvl.highlight
                              ? "border-[#ff4d1a]/20 bg-[#ff4d1a]/5 text-[#ff4d1a]"
                              : "border-accent-active/20 bg-accent-active/5 text-accent-active"
                          }`}
                        >
                          {lvl.rank}
                        </span>
                      </div>
                      <p className="text-sm leading-6 text-text-theme/55 sm:text-xs sm:leading-relaxed">{lvl.desc}</p>
                    </div>

                    {/* Skewed Neon LED Scoreboard Indicator */}
                    <div className="flex gap-1 self-start select-none sm:self-auto">
                      {Array.from({ length: totalSegments }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-3 w-2.5 rounded-sm transform -skew-x-12 transition-all duration-500 ${
                            i < activeSegments
                              ? lvl.highlight
                                ? "bg-[#ff4d1a] shadow-[0_0_6px_rgba(255,77,26,0.3)]"
                                : "bg-accent-active shadow-[0_0_6px_var(--accent-glow)]"
                              : "bg-text-theme/5"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Challenges column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-text-theme/60">
                Touch challenges
              </h3>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#ff4d1a] sm:text-[9px] sm:tracking-[0.15em]">
                Build control before you chase tricks.
              </p>
            </div>

            <div className="space-y-4">
              {challenges.map((challenge) => (
                <div
                  key={challenge.move}
                  className="flex flex-col gap-3 rounded-2xl border border-border-theme bg-card-theme p-4 transition-all duration-300 hover:border-border-theme/40 sm:flex-row sm:items-start sm:justify-between"
                >
                  <div className="space-y-1 pr-0 sm:pr-4">
                    <h4 className="font-display text-sm font-bold uppercase tracking-wide text-text-theme sm:text-xs">
                      {challenge.move}
                    </h4>
                    <p className="text-sm leading-6 text-text-theme/45 sm:text-xs sm:leading-relaxed">{challenge.desc}</p>
                  </div>
                  <span className="flex-shrink-0 self-start rounded-full border border-accent-active/15 bg-accent-active/5 px-3 py-1 font-mono text-[10px] font-bold text-accent-active sm:self-auto sm:px-2 sm:py-0.5 sm:text-[9px]">
                    {challenge.pts}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
