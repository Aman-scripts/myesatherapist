"use client";

import React from "react";
import { Check } from "lucide-react";

export function PsdTrustBarSection() {
  return (
    <div className="w-full bg-[#FAF7F2]">
      {/* 1. Trust Features Bar (Small tick icons & generous top/bottom gap) */}
      <div className="w-full py-9 sm:py-11 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-14 lg:gap-24">

            {/* Feature 1 */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#1E3E47] text-white flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div className="font-heading font-bold text-sm sm:text-base lg:text-[17px] text-[#6C7A82] leading-snug tracking-tight">
                HIPAA<br className="hidden sm:block" /> Compliant
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#1E3E47] text-white flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div className="font-heading font-bold text-sm sm:text-base lg:text-[17px] text-[#6C7A82] leading-snug tracking-tight">
                Response Within<br className="hidden sm:block" /> 24-72 Hours
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#1E3E47] text-white flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div className="font-heading font-bold text-sm sm:text-base lg:text-[17px] text-[#6C7A82] leading-snug tracking-tight">
                Licensed in All 50<br className="hidden sm:block" /> States
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
