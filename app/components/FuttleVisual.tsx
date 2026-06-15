"use client";

import Image from "next/image";
import React from "react";

interface FuttleVisualProps {
  id: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  className?: string;
  interactive?: boolean;
}

export default function FuttleVisual({
  id,
  primaryColor,
  secondaryColor,
  accentColor,
  className = "",
  interactive = true,
}: FuttleVisualProps) {
  const fallbackLabel = id
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div
      className={`relative flex items-center justify-center select-none ${
        interactive ? "hover:scale-105 hover:-rotate-3 transition-all duration-500 ease-out" : ""
      } ${className}`}
      style={{
        background: `radial-gradient(circle at 50% 68%, ${primaryColor}22 0%, transparent 54%), radial-gradient(circle at 50% 28%, ${secondaryColor}1c 0%, transparent 48%)`,
      }}
    >
      {/* Last-resort product visual. Real gallery photos should be added in app/data/products.ts. */}
      <div
        aria-hidden="true"
        className="absolute inset-[18%] rounded-full opacity-25 blur-2xl"
        style={{ backgroundColor: accentColor }}
      />
      <div className="relative h-full w-full max-h-[280px]">
        <Image
          src="/f_b_nobg.webp"
          alt={`${fallbackLabel} Futtle fallback photo`}
          fill
          loading="lazy"
          unoptimized
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRgQBAABXRUJQVlA4WAoAAAAQAAAADwAACwAAQUxQSIkAAAANcB3Jtmmta9t4zOHlH4O/bNv2iyEiJgAgOP52uAIgSOL2ABg/TXemAnclH4v9HdCzaXm/FYTDsD0+A+BEOUhp1/s4X8XntrcKcpnLed7eER+r7ljK+pjMWPXLfTdaKpEwmGn8F1xX3Z2jLU8Cvl8O47UuHVjqB3Dcn2+EhH+XjZWv/zWqrB3mCwBWUDggVAAAAFACAJ0BKhAADAADwGAljAFMAW9LwS3rmFgAoADgMgFbhixeM/6EZr5b63zNnSGXFt1jaln6Pv0V/UoTjlCrJ6q9/JBSnwO+IX9Uam4WCx4AYoAAAA=="
          sizes="(min-width: 1024px) 18rem, (min-width: 640px) 14rem, 10rem"
          className="object-contain p-2 drop-shadow-[0_18px_34px_rgba(0,0,0,0.48)]"
        />
      </div>
    </div>
  );
}
