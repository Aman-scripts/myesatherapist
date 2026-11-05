

import React from "react";

export function TopBanner() {
  return (
    <div
      className="hidden w-full min-h-[29px] items-center justify-center relative z-50 px-4 text-background color-gradient lg:flex lg:h-[29px] lg:py-0"
    >
      <div className="flex items-center justify-center gap-2 sm:gap-[14px]">
        <span className="w-[9px] h-[9px] rounded-full bg-[#30D158] shrink-0 inline-block animate-pulse" />

        <span className="body-small text-background tracking-normal flex flex-col items-center text-center sm:flex-row sm:items-center sm:gap-2">
          <span>3 licensed therapists online now</span>
          <span className="text-background/80">Next opening today at 9:00 AM</span>
        </span>
      </div>
    </div>
  );
}

