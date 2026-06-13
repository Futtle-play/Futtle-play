import React from "react";
import Image from "next/image";

const pickupGamesHref = "https://app.humansoffootball.in/";
const posters = [
  {
    src: "/poster.jpeg",
    alt: "Pickup games poster",
    sizes: "(min-width: 1024px) 24rem, (min-width: 640px) 28rem, calc(100vw - 2rem)",
  },
  {
    src: "/poster20.jpeg",
    alt: "Pickup games event poster",
    sizes: "(min-width: 1024px) 24rem, (min-width: 640px) 28rem, calc(100vw - 2rem)",
  },
];

export default function CommunityPosters() {
  return (
    <section id="events" className="section-shell relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--accent-color),transparent)] opacity-30" />
      <div className="pointer-events-none absolute right-[8%] top-12 h-64 w-64 rounded-full bg-[rgba(255,77,26,0.08)] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 border-b border-border-theme pb-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-active sm:text-[10px] sm:tracking-[0.2em]">
              Community Events
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold uppercase leading-[0.9] tracking-[-0.05em] text-text-theme sm:text-5xl lg:text-6xl">
              Join a juggling session around you 
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-text-theme/55">
            Find nearby football sessions, join a group, and show up ready to play.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 lg:gap-6">
          {posters.map((poster) => (
            <a
              key={poster.src}
              href={pickupGamesHref}
              className="group relative aspect-[2/3] w-full max-w-sm overflow-hidden rounded-[1.75rem] border border-border-theme bg-card-theme shadow-[0_18px_44px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-accent-active hover:shadow-[0_0_30px_var(--accent-glow)] sm:max-w-md"
              target="_blank"
              rel="noreferrer"
              aria-label="Open pickup games"
            >
              <Image
                src={poster.src}
                alt={poster.alt}
                fill
                sizes={poster.sizes}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
