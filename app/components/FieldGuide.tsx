"use client";

import React from "react";

interface GuideVideo {
  title: string;
  src?: string;
  type?: string;
  poster?: string;
  caption?: string;
}

export default function FieldGuide() {
  // Homepage video cards live here. Add src/poster when the client has real clips;
  // until then these stay as clean placeholders and do not download video files.
  const videos: GuideVideo[] = [
    { title: "Basic sequence" },
    { title: "Inside touch" },
    { title: "Control rhythm" },
    { title: "Friend rally" },
  ];

  return (
    <section id="guide" className="section-shell relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--accent-color),transparent)] opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-8 flex max-w-7xl flex-col gap-4 border-b border-border-theme pb-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-active sm:text-[10px] sm:tracking-[0.2em]">
              How to play
            </p>
            <h2 className="mt-2 font-display text-[clamp(3rem,8vw,6.5rem)] font-bold uppercase leading-[0.86] tracking-[-0.07em] text-text-theme">
              Keep it in the air.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-text-theme/55">
            No hands. No goals. No complicated rules. Play solo, rally with friends, or chase your longest clean sequence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {videos.map((video, idx) => (
            <div
              key={video.title}
              className="relative overflow-hidden rounded-[1.5rem] border border-border-theme bg-[linear-gradient(180deg,var(--card-bg),var(--panel-bg))] shadow-[0_18px_52px_rgba(0,0,0,0.18)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_24%,rgba(212,255,58,0.14),transparent_35%),radial-gradient(circle_at_72%_76%,rgba(255,77,26,0.08),transparent_28%)]" />
              <div className="relative aspect-video w-full">
                <div className="absolute left-4 top-4 z-10 rounded-full border border-border-theme bg-header-theme px-3 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-text-theme/50 backdrop-blur-md">
                  {video.title}
                </div>
                <div className="absolute right-4 top-4 z-10 rounded-full border border-border-theme bg-header-theme px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-text-theme/35 backdrop-blur-md">
                  0{idx + 1}
                </div>
                {video.src ? (
                  <video
                    controls
                    preload="none"
                    poster={video.poster}
                    className="h-full w-full bg-black object-cover"
                  >
                    <source src={video.src} type={video.type ?? "video/mp4"} />
                    {video.caption ? (
                      <track src={video.caption} kind="captions" srcLang="en" label="English" />
                    ) : null}
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      type="button"
                      aria-label={`Play ${video.title} video`}
                      className="group flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-md transition-transform duration-300 hover:scale-105"
                    >
                      <div className="ml-1 h-0 w-0 border-y-[10px] border-y-transparent border-l-[15px] border-l-white/90 transition-colors duration-300 group-hover:border-l-white" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
