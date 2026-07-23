import React from "react";

interface VizionLogoProps {
  light?: boolean;
  className?: string;
  showText?: boolean;
}

export default function VizionLogo({ light = false, className = "", showText = true }: VizionLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Pixel-perfect custom SVG representing Vizion India's eye logo */}
      <svg
        viewBox="0 0 100 60"
        className="w-12 h-8 sm:w-14 sm:h-9 md:w-16 md:h-10 flex-shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Upper Lid Arc: Indian Saffron / Orange */}
        <path
          d="M 10,28 C 25,10 75,10 90,28 C 72,16 28,16 10,28 Z"
          fill="#FF7700"
        />
        {/* Pupil / Iris: Royal Indian Blue Circle */}
        <circle
          cx="50"
          cy="30"
          r="12"
          fill="#0055D4"
        />
        {/* Lower Lid Arc: Indian Emerald Green */}
        <path
          d="M 10,32 C 25,50 75,50 90,32 C 72,44 28,44 10,32 Z"
          fill="#009944"
        />
      </svg>
      
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-display font-black text-lg sm:text-xl tracking-tight uppercase ${light ? "text-white" : "text-slate-900"}`}>
            VIZION
          </span>
          <span className={`font-display font-bold text-xs sm:text-sm tracking-[0.25em] uppercase ${light ? "text-brand-accent" : "text-slate-500"}`}>
            INDIA
          </span>
        </div>
      )}
    </div>
  );
}
