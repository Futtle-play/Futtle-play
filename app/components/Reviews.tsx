import React from "react";

const reviews = [
  {
    quote: "Bought one thinking we’d use it for 5 mins before football… me and my 3 friends ended up playing with it for almost 2 hours straight trying to beat each other’s score 😂",
    name: "Arjun",
    city: "Delhi",
  },
  {
    quote: "Started as one person trying it and somehow the whole hostel room got involved. Proper addictive.",
    name: "Vivaan",
    city: "Bangalore",
  },
  {
    quote: "Took it to turf once and now someone brings it to every session. Instant competition every time.",
    name: "Keshav",
    city: "Gurgaon",
  },
  {
    quote: "Didn’t expect it to be this fun honestly. Everyone keeps saying ‘last try’ and then plays for another 20 mins 💀",
    name: "Manav",
    city: "Pune",
  },
  {
    quote: "One of those things you randomly pick up and suddenly everyone around you wants a turn.",
    name: "Daksh",
    city: "Chandigarh",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="section-shell relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute right-[6%] top-10 h-72 w-72 rounded-full bg-[rgba(255,77,26,0.08)] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 border-b border-border-theme pb-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-active sm:text-[10px] sm:tracking-[0.2em]">
              Reviews
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold uppercase leading-[0.9] tracking-[-0.05em] text-text-theme sm:text-5xl lg:text-6xl">
              People keep playing.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-text-theme/55">
            A few quick notes from players who picked it up for a short session and stayed longer than planned.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={`${review.name}-${review.city}`}
              className="flex min-h-64 flex-col justify-between rounded-[1.5rem] border border-border-theme bg-[linear-gradient(180deg,var(--card-bg),var(--panel-bg))] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.14)]"
            >
              <div>
                <div className="font-mono text-sm leading-none tracking-[0.08em]" aria-label="5 stars">
                  ⭐⭐⭐⭐⭐
                </div>
                <blockquote className="mt-5 text-base leading-7 text-text-theme/72">
                  “{review.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-6 border-t border-border-theme pt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-text-theme/45">
                — {review.name}, {review.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
