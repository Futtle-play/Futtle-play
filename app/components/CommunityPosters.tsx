import React from "react";

export default function CommunityPosters() {
  return (
    <section id="events" className="section-shell relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--accent-color),transparent)] opacity-30" />
      <div className="pointer-events-none absolute right-[8%] top-12 h-64 w-64 rounded-full bg-[rgba(255,77,26,0.08)] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 border-b border-border-theme pb-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-active sm:text-[10px] sm:tracking-[0.2em]">
              Community
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold uppercase leading-[0.9] tracking-[-0.05em] text-text-theme sm:text-5xl lg:text-6xl">
              Event posters live here.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-text-theme/55">
            A reserved wall for local rallies, drops, meetups, and street sessions once the community calendar is ready.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="group relative flex aspect-[4/5] w-full max-w-sm flex-col justify-between overflow-hidden rounded-[1.75rem] border border-border-theme bg-[linear-gradient(180deg,var(--card-bg),var(--panel-bg))] p-5 shadow-[0_18px_44px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:bg-panel-theme sm:max-w-md">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--accent-glow),transparent_34%),radial-gradient(circle_at_80%_80%,rgba(255,77,26,0.12),transparent_30%)] opacity-80" />
            <div className="relative flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-theme/35">
                Featured poster
              </p>
              <span className="h-1.5 w-1.5 rounded-full bg-accent-active" />
            </div>
            <div className="relative">
              <p className="font-display text-3xl font-bold uppercase leading-none tracking-[-0.05em] text-text-theme sm:text-4xl">
                Coming soon
              </p>
              <p className="mt-3 text-sm leading-6 text-text-theme/50">
                Drop one community event poster here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
