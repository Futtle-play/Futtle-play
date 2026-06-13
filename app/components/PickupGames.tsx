import React from "react";
import Image from "next/image";

const pickupGamesHref = "https://app.humansoffootball.in/";

export default function PickupGames() {
  return (
    <section id="pickup-games" className="section-shell relative scroll-mt-24 overflow-hidden px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--accent-color),transparent)] opacity-35" />
      <div className="pointer-events-none absolute left-[8%] top-12 h-64 w-64 rounded-full bg-[rgba(212,255,58,0.08)] blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
        <div className="max-w-4xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-active sm:text-[10px] sm:tracking-[0.2em]">
            Pickup games
          </p>
          <h2 className="mt-2 font-display text-[clamp(3rem,8vw,6.5rem)] font-bold uppercase leading-[0.86] tracking-[-0.07em] text-text-theme">
            Find a football game near you.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-text-theme/60 sm:text-lg sm:leading-8">
            Looking for people to play football with? Join a nearby game, bring your friends, or join solo and get a good session going. Simple, quick, and made for anyone who just wants to play. Don&apos;t forget to bring your Futtle.
          </p>
          <p className="mt-5 font-display text-2xl font-bold uppercase leading-none tracking-[-0.04em] text-accent-active sm:text-3xl">
            Daily pickup games in 20+ cities.
          </p>
        </div>

        <div>
          <div className="rounded-[1.75rem] border border-border-theme bg-[linear-gradient(180deg,var(--card-bg),var(--panel-bg))] p-6 shadow-[0_18px_52px_rgba(0,0,0,0.18)] sm:p-8">
            <p className="font-display text-3xl font-bold uppercase leading-none tracking-[-0.05em] text-text-theme sm:text-4xl">
              Ready for a game?
            </p>
            <p className="mt-4 text-sm leading-6 text-text-theme/55">
              Check what is open, find a group, and show up for a fun football session without overthinking it. Hosted by Humans of Football.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center">
              <a
                href={pickupGamesHref}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent-active px-7 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black transition-all duration-300 hover:bg-text-theme hover:text-bg-theme hover:shadow-[0_0_24px_var(--accent-glow)]"
                target="_blank"
                rel="noreferrer"
              >
                Find pickup games
              </a>
              <div className="flex items-center justify-center gap-3 sm:justify-self-center">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-text-theme/50">
                  Hosted by
                </p>
                <a
                  href={pickupGamesHref}
                  className="inline-flex h-14 w-14 items-center justify-center transition-transform duration-300 hover:scale-105"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Humans of Football"
                >
                  <Image
                    src="/hof_logo.png"
                    alt="Humans of Football"
                    width={96}
                    height={96}
                    className="h-20 w-20 max-w-none object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
