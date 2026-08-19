"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function TopBanner() {
  return (
    <div
      className="text-[#FAF7F2] text-xs sm:text-sm py-2.5 px-4 text-center font-semibold"
      style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
    >
      <span className="flex items-center justify-center gap-2 sm:gap-6 flex-wrap">
        <span className="flex items-center gap-2">
          <span className="w-[9px] h-[9px] rounded-full bg-[#34C759] inline-block animate-pulse shrink-0"></span>
          <span>3 licensed therapists online now</span>
        </span>
        <span className="hidden sm:inline">Next opening today at 9:00 AM</span>
      </span>
    </div>
  );
}
