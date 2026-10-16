"use client";

import React from "react";

export function TopBanner() {
  return (
    <div
      className="w-full h-[29px] flex items-center justify-center relative z-50 text-background px-4 color-gradient"
    >
      <div className="flex items-center justify-center gap-[14px] h-[26px]">
        {/* Ellipse 16: 9px x 9px, #30D158 */}
        <span className="w-[9px] h-[9px] rounded-full bg-[#30D158] shrink-0 inline-block animate-pulse" />

        {/* 3 licensed therapists online now Next opening today at 9:00 AM */}
        <span className="body-small text-background tracking-normal whitespace-nowrap flex items-center gap-2 text-xs sm:text-sm">
          <span>3 licensed therapists online now</span>
          <span className="hidden sm:inline text-background/80">Next opening today at 9:00 AM</span>
        </span>
      </div>
    </div>
  );
}

