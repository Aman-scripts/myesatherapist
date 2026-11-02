

import React from "react";

export function TopBanner() {
  return (
    <div
      className="w-full min-h-[29px] py-1 sm:h-[29px] sm:py-0 flex items-center justify-center relative z-50 text-background px-4 color-gradient"
    >
      <div className="flex items-center justify-center gap-2 sm:gap-[14px]">
        {/* Ellipse 16: 9px x 9px, #30D158 */}
        <span className="w-[9px] h-[9px] rounded-full bg-[#30D158] shrink-0 inline-block animate-pulse" />

        {/* 3 licensed therapists online now Next opening today at 9:00 AM */}
        <span className="body-small text-background tracking-normal flex flex-col items-center text-center sm:flex-row sm:items-center sm:gap-2">
          <span>3 licensed therapists online now</span>
          <span className="text-background/80">Next opening today at 9:00 AM</span>
        </span>
      </div>
    </div>
  );
}

