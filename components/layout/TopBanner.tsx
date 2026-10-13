"use client";

import React from "react";

export function TopBanner() {
  return (
    <div
      className="w-full h-[29px] flex items-center justify-center relative z-50 text-[#FAF7F2] px-4"
      style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
    >
      <div className="flex items-center justify-center gap-[14px] h-[26px]">
        {/* Ellipse 16: 9px x 9px, #30D158 */}
        <span className="w-[9px] h-[9px] rounded-full bg-[#30D158] shrink-0 inline-block animate-pulse" />

        {/* 3 licensed therapists online now Next opening today at 9:00 AM */}
        <span className="font-manrope font-semibold text-[13px] sm:text-[14px] leading-[26px] text-[#FAF7F2] tracking-normal whitespace-nowrap flex items-center gap-2">
          <span>3 licensed therapists online now</span>
          <span className="text-[#FAF7F2]/80">Next opening today at 9:00 AM</span>
        </span>
      </div>
    </div>
  );
}

