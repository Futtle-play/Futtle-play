"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const visualContainerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = visualContainerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // 3D tilt factor
    const factor = 12;
    const tiltX = -(y / (rect.height / 2)) * factor;
    const tiltY = (x / (rect.width / 2)) * factor;
    setRotate({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section className="section-shell relative overflow-hidden px-4 pt-4 pb-10 sm:px-6 lg:px-8 lg:pt-6 lg:pb-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[24rem] bg-[radial-gradient(circle_at_15%_20%,rgba(212,255,58,0.18),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(255,77,26,0.16),transparent_30%),radial-gradient(circle_at_52%_72%,rgba(255,214,10,0.08),transparent_28%)]" />
      <div className="pointer-events-none absolute left-4 top-24 h-16 w-16 rounded-[1.5rem] border border-white/8 bg-[linear-gradient(135deg,rgba(212,255,58,0.2),rgba(255,77,26,0.08))] shadow-[0_10px_30px_rgba(0,0,0,0.18)] sm:left-8 sm:h-20 sm:w-20" />
      <div className="pointer-events-none absolute right-6 top-36 h-12 w-12 rounded-full border border-white/8 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),rgba(255,77,26,0.15))] sm:right-[18%]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100dvh-8rem)] max-w-7xl items-center gap-8 sm:min-h-[calc(100dvh-10rem)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="max-w-3xl space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[linear-gradient(90deg,rgba(212,255,58,0.12),rgba(255,77,26,0.04))] px-3.5 py-1.5 animate-fade-in shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-active animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-theme/50 sm:text-[9px] sm:tracking-[0.18em]">
              Foot Juggling · Skill Training · Street Sport
            </span>
          </div>

          <h1 className="animate-scale-up font-display text-[clamp(2.8rem,15vw,7.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.06em] text-text-theme sm:text-[clamp(3.4rem,8vw,7.5rem)]">
            <span className="inline-block text-accent-active drop-shadow-[0_0_24px_rgba(212,255,58,0.2)]">Train </span>
            <span> </span>
            <span className="inline-block text-[#ff7a1a]"> your</span>
            <br />
            <span className="inline-block text-text-theme">first touch</span>
          </h1>

          <p className="max-w-xl text-[1rem] leading-7 text-text-theme/70 sm:text-lg animate-fade-in">
            The football game you can carry anywhere.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 animate-fade-in">
            <Link
              href="/#shop"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent-active px-7 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white dark:text-black transition-all duration-300 hover:bg-text-theme hover:text-bg-theme hover:shadow-[0_0_24px_rgba(212,255,58,0.35)]"
            >
              Shop Now
            </Link>
            <button
              onClick={() => scrollToSection("guide")}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 bg-[rgba(255,255,255,0.03)] px-7 py-3 text-xs font-medium uppercase tracking-[0.16em] text-text-theme/80 transition-colors duration-300 hover:bg-text-theme hover:text-bg-theme cursor-pointer"
            >
              Read the sequence
            </button>
          </div>

          <dl className="grid max-w-2xl grid-cols-1 gap-4 border-t border-border-theme pt-6 sm:grid-cols-2 sm:pt-8">
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4 shadow-[0_14px_34px_rgba(0,0,0,0.14)]">
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-theme/30 sm:text-[9px] sm:tracking-[0.18em]">Weight</dt>
              <dd className="mt-2 text-sm text-text-theme/80">15g tuned for stable touch</dd>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4 shadow-[0_14px_34px_rgba(0,0,0,0.14)]">
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-theme/30 sm:text-[9px] sm:tracking-[0.18em]">Build</dt>
              <dd className="mt-2 text-sm text-text-theme/80">Goose feathers + rubber base</dd>
            </div>
          </dl>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <div
            ref={visualContainerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative flex aspect-square w-full max-w-[18rem] items-center justify-center rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] shadow-[0_28px_80px_rgba(0,0,0,0.28)] transition-all duration-300 ease-out sm:max-w-[22rem] lg:max-w-[26rem]"
            style={{
              transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
            }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_24%,rgba(212,255,58,0.12),transparent_34%),radial-gradient(circle_at_50%_85%,rgba(255,77,26,0.12),transparent_28%)]" />

            <Image
              src="/f_b_nobg.webp"
              alt="Futtle Brazil"
              fill
              preload
              unoptimized
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRgQBAABXRUJQVlA4WAoAAAAQAAAADwAACwAAQUxQSIkAAAANcB3Jtmmta9t4zOHlH4O/bNv2iyEiJgAgOP52uAIgSOL2ABg/TXemAnclH4v9HdCzaXm/FYTDsD0+A+BEOUhp1/s4X8XntrcKcpnLed7eER+r7ljK+pjMWPXLfTdaKpEwmGn8F1xX3Z2jLU8Cvl8O47UuHVjqB3Dcn2+EhH+XjZWv/zWqrB3mCwBWUDggVAAAAFACAJ0BKhAADAADwGAljAFMAW9LwS3rmFgAoADgMgFbhixeM/6EZr5b63zNnSGXFt1jaln6Pv0V/UoTjlCrJ6q9/JBSnwO+IX9Uam4WCx4AYoAAAA=="
              sizes="(min-width: 1024px) 26rem, (min-width: 640px) 22rem, 18rem"
              className="object-contain p-4 drop-shadow-[0_32px_64px_rgba(0,0,0,0.7)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
