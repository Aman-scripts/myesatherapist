"use client";

import React from "react";
import Link from "next/link";
import { STATES_DATA } from "@/data/statesData";

const ALL_STATES = Object.values(STATES_DATA).sort((a, b) =>
  a.name.localeCompare(b.name)
);

// Exact Figma fi_3177361 Pin SVG with linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)
function FigmaPinIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 w-8 h-8"
    >
      <defs>
        <linearGradient id="figma-pin-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A3D4F" />
          <stop offset="100%" stopColor="#1D6E72" />
        </linearGradient>
      </defs>
      {/* 24px wide inside 32px box (left 12.5% = 4px, right 12.5% = 28px) */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2C10.4772 2 6 6.47715 6 12C6 18.5 16 30 16 30C16 30 26 18.5 26 12C26 6.47715 21.5228 2 16 2ZM16 16.5C13.5147 16.5 11.5 14.4853 11.5 12C11.5 9.51472 13.5147 7.5 16 7.5C18.4853 7.5 20.5 9.51472 20.5 12C20.5 14.4853 18.4853 16.5 16 16.5Z"
        fill="url(#figma-pin-grad)"
      />
    </svg>
  );
}

export function ChooseStateGridSection() {
  return (
    <section
      id="choose-state-section"
      className="w-full bg-white py-14 sm:py-16 lg:py-[68px] px-4 sm:px-8 lg:px-[78px] border-t border-[#EAE5DC]/60 overflow-hidden"
    >
      <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center gap-10 sm:gap-14 lg:gap-[72px]">
        
        {/* Heading Block */}
        <div className="flex flex-col items-center text-center max-w-[854px] gap-4">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] lg:leading-[54px] tracking-[-0.00015em] text-[#2E5A66] max-w-[765px]">
            Choose Your State For ESA Evaluation
          </h2>
          <p className="font-sans font-semibold text-base sm:text-lg leading-[30px] text-[#5F6B6F] max-w-[854px]">
            Learn about emotional support animal rules, welfare requirements, and housing protections in your state.
          </p>
        </div>

        {/* 4 Columns Layout: Exact Figma Frame 1261153705 */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-[24px] lg:gap-y-[32px] justify-items-center">
          {ALL_STATES.map((state) => (
            <Link
              key={state.slug}
              href={`/${state.slug}`}
              className="group flex flex-col justify-center items-start px-[32px] py-[15px] bg-[#FAF7F2] hover:bg-white rounded-[10px] shadow-[0px_1px_4px_rgba(78,78,78,0.15)] hover:shadow-[0px_4px_12px_rgba(26,61,79,0.15)] transition-all duration-200 w-full max-w-[302px] h-[62px]"
            >
              {/* Frame 1261153688: Inner Row (gap: 8px, height: 32px) */}
              <div className="flex flex-row items-center gap-[8px] w-full h-[32px] overflow-hidden">
                {/* fi_3177361: Pin Icon (32px x 32px) */}
                <div className="w-[32px] h-[32px] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <FigmaPinIcon />
                </div>

                {/* Page Description: State Text (18px Manrope, font-weight 600, line-height 30px, gradient) */}
                <span className="font-sans font-semibold text-[18px] leading-[30px] bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent group-hover:underline decoration-[#1D6E72] underline-offset-4 transition-all truncate">
                  {state.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
