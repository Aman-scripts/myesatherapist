"use client";

import React from "react";
import { Check } from "lucide-react";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

export function PsdTrustBarSection() {
  return (
    <div className="w-full bg-[#FAF7F2]">
      {/* Frame 24: Responsive Trust Features Bar */}
      <div className="w-full py-6 sm:py-8 lg:py-12">
        <div className="max-w-[1446px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered container: vertical left-aligned on mobile, horizontal on tablet/desktop */}
          <div className="w-fit sm:w-full mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-center gap-3.5 sm:gap-6 md:gap-10 lg:gap-[125px]">

            {/* Frame 1000011751: HIPAA Compliant */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full text-white flex items-center justify-center shrink-0 shadow-xs"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 stroke-[2.5]" />
              </div>
              <div className="font-heading font-bold text-[15px] sm:text-base md:text-lg lg:text-[24px] lg:leading-[32px] text-[#949494] whitespace-nowrap">
                HIPAA Compliant
              </div>
            </div>

            {/* Frame 1000011752: Response Within 24-72 Hours */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full text-white flex items-center justify-center shrink-0 shadow-xs"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 stroke-[2.5]" />
              </div>
              <div className="font-heading font-bold text-[15px] sm:text-base md:text-lg lg:text-[24px] lg:leading-[32px] text-[#949494] whitespace-nowrap">
                Response Within 24-72 Hours
              </div>
            </div>

            {/* Frame 1000011753: Licensed in All 50 States */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full text-white flex items-center justify-center shrink-0 shadow-xs"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 stroke-[2.5]" />
              </div>
              <div className="font-heading font-bold text-[15px] sm:text-base md:text-lg lg:text-[24px] lg:leading-[32px] text-[#949494] whitespace-nowrap">
                Licensed in All 50 States
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
