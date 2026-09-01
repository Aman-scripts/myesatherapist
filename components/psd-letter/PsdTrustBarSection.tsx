"use client";

import React from "react";
import { Check } from "lucide-react";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

export function PsdTrustBarSection() {
  return (
    <div className="w-full bg-[#FAF7F2] border-b border-[#EDE8DE]">
      {/* 1. Trust Features Bar (Frame 24) */}
      <div className="w-full py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 lg:gap-24">

            {/* Feature 1 */}
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full text-white flex items-center justify-center shrink-0 shadow-xs"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                <Check className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </div>
              <div className="font-heading font-bold text-lg sm:text-xl lg:text-[22px] text-[#2E5A66] leading-tight text-center sm:text-left">
                HIPAA Compliant
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full text-white flex items-center justify-center shrink-0 shadow-xs"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                <Check className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </div>
              <div className="font-heading font-bold text-lg sm:text-xl lg:text-[22px] text-[#2E5A66] leading-tight text-center sm:text-left">
                Response Within 24-72 Hours
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full text-white flex items-center justify-center shrink-0 shadow-xs"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                <Check className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </div>
              <div className="font-heading font-bold text-lg sm:text-xl lg:text-[22px] text-[#2E5A66] leading-tight text-center sm:text-left">
                Licensed in All 50 States
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
