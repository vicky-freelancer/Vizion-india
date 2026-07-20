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
        {/* Upper Lid: Bold Indian Saffron */}
        <path
          d="M4,34 C16,10 84,10 96,34 C76,22 24,22 4,34 Z"
          fill="#FF9933"
        />
        {/* Pupil: Pristine Blue Circle */}
        <circle
          cx="50"
          cy="30"
          r="15"
          fill="#00A3E0"
        />
        {/* Lower Lid: Bold Indian Green */}
        <path
          d="M4,34 C16,58 84,58 96,34 C76,46 24,46 4,34 Z"
          fill="#138808"
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
