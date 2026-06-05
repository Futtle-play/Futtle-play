"use client";

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
  // Render custom feathers and rings based on product ID
  const getFeatherColors = () => {
    switch (id) {
      case "argentina":
        return {
          left: "#75aadb",  // Sky blue
          midLeft: "#ffffff", // White
          midRight: "#75aadb",
          right: "#ffffff",
        };
      case "brasil":
        return {
          left: "#009c3b",  // Green
          midLeft: "#fded12", // Yellow
          midRight: "#fded12",
          right: "#009c3b",
        };
      case "portugal":
        return {
          left: "#00662f",  // Green
          midLeft: "#da121a", // Red
          midRight: "#da121a",
          right: "#00662f",
        };
      case "france":
        return {
          left: "#0023a0",  // Blue
          midLeft: "#ffffff", // White
          midRight: "#e70023", // Red
          right: "#0023a0",
        };
      case "classic":
      default:
        return {
          left: "#2a2a28",  // Dark charcoal/black
          midLeft: "#000000",
          midRight: "#0b0b0a",
          right: "#2a2a28",
        };
    }
  };

  const feathers = getFeatherColors();

  return (
    <div
      className={`relative flex items-center justify-center select-none ${
        interactive ? "hover:scale-105 hover:-rotate-3 transition-all duration-500 ease-out" : ""
      } ${className}`}
    >
      <svg
        viewBox="0 0 160 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[280px]"
      >
        {/* Soft shadow below base */}
        <ellipse
          cx="80"
          cy="185"
          rx="24"
          ry="6"
          fill="rgba(0, 0, 0, 0.5)"
          className={interactive ? "animate-pulse" : ""}
        />

        <g className={interactive ? "hover:translate-y-[-6px] transition-transform duration-300" : ""}>
          {/* FEATHERS (Top) */}
          {/* Left Feather */}
          <path
            d="M80 145 C60 100, 35 60, 42 20 C45 15, 50 18, 55 35 C60 55, 75 100, 80 145Z"
            fill={feathers.left}
            opacity="0.95"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="0.5"
          />
          {/* Left Feather Spine */}
          <path d="M80 145 C65 105, 48 70, 42 20" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeLinecap="round" />

          {/* Right Feather */}
          <path
            d="M80 145 C100 100, 125 60, 118 20 C115 15, 110 18, 105 35 C100 55, 85 100, 80 145Z"
            fill={feathers.right}
            opacity="0.95"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="0.5"
          />
          {/* Right Feather Spine */}
          <path d="M80 145 C95 105, 112 70, 118 20" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeLinecap="round" />

          {/* Middle Left Feather */}
          <path
            d="M80 145 C70 95, 55 50, 62 12 C64 8, 68 10, 72 25 C76 45, 78 95, 80 145Z"
            fill={feathers.midLeft}
            opacity="0.98"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="0.5"
          />
          {/* Middle Left Spine */}
          <path d="M80 145 C73 95, 63 60, 62 12" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeLinecap="round" />

          {/* Middle Right Feather */}
          <path
            d="M80 145 C90 95, 105 50, 98 12 C96 8, 92 10, 88 25 C84 45, 82 95, 80 145Z"
            fill={feathers.midRight}
            opacity="0.98"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="0.5"
          />
          {/* Middle Right Spine */}
          <path d="M80 145 C87 95, 97 60, 98 12" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeLinecap="round" />

          {/* BASE CONNECTOR (The collar metal/plastic clip) */}
          <path d="M72 143 H88 L85 152 H75 L72 143Z" fill="#2a2a28" stroke="#171717" strokeWidth="1" />
          {/* Accent red or acid details on the clip */}
          <circle cx="80" cy="147.5" r="2.2" fill={accentColor} />

          {/* SHIELD DISKS / WASHER WEIGHTS */}
          {/* Metal washer ring 1 */}
          <path
            d="M66 152 C66 150, 94 150, 94 152 C94 154, 66 154, 66 152Z"
            fill="#e2e8f0"
            stroke="#94a3b8"
            strokeWidth="0.5"
          />
          {/* Rubber disk weight spacer */}
          <path
            d="M64 154 C64 151, 96 151, 96 154 C96 157, 64 157, 64 154Z"
            fill="#1e1b4b"
            opacity="0.8"
          />
          {/* Metal washer ring 2 */}
          <path
            d="M65 157 C65 155, 95 155, 95 157 C95 159, 65 159, 65 157Z"
            fill="#cbd5e1"
            stroke="#94a3b8"
            strokeWidth="0.5"
          />

          {/* RUBBER BASE (Dual density bottom weight) */}
          {/* Inner ring */}
          <path
            d="M60 162 C60 157, 100 157, 100 162 C100 167, 60 167, 60 162Z"
            fill={primaryColor}
            stroke="rgba(0,0,0,0.15)"
            strokeWidth="1"
          />
          {/* Main outer base cup */}
          <path
            d="M56 169 C56 161, 104 161, 104 169 C104 178, 56 178, 56 169Z"
            fill={primaryColor}
            stroke="rgba(0,0,0,0.2)"
            strokeWidth="1"
          />

          {/* Rubber Base Details / Texture Lines */}
          <path
            d="M62 168.5 C70 171.5, 90 171.5, 98 168.5"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M58 171.5 C68 174.5, 92 174.5, 102 171.5"
            stroke="rgba(0,0,0,0.2)"
            strokeWidth="1.2"
            fill="none"
          />

          {/* Core bottom-most cushion bumper */}
          <path
            d="M66 174 C66 172, 94 172, 94 174 C94 178, 66 178, 66 174Z"
            fill={secondaryColor === "#0b0b0a" ? "#1e1e1d" : secondaryColor}
            opacity="0.9"
          />
        </g>
      </svg>
    </div>
  );
}
