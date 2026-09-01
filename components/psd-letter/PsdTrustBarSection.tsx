"use client";

import React from "react";
import { Check } from "lucide-react";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

export function PsdTrustBarSection() {
  return (
    <div className="w-full bg-[#FAF7F2]">
      {/* Frame 24 */}
      <div className="w-full py-8 sm:py-10 lg:py-12">
        <div className="max-w-[1446px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 lg:gap-[125px]">

            {/* Frame 1000011751: HIPAA Compliant */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full text-white flex items-center justify-center shrink-0 shadow-xs"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="font-heading font-bold text-lg sm:text-xl lg:text-[24px] lg:leading-[32px] text-[#949494] text-center sm:text-left">
                HIPAA Compliant
              </div>
            </div>

            {/* Frame 1000011752: Response Within 24-72 Hours */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full text-white flex items-center justify-center shrink-0 shadow-xs"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="font-heading font-bold text-lg sm:text-xl lg:text-[24px] lg:leading-[32px] text-[#949494] text-center sm:text-left">
                Response Within 24-72 Hours
              </div>
            </div>

            {/* Frame 1000011753: Licensed in All 50 States */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full text-white flex items-center justify-center shrink-0 shadow-xs"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="font-heading font-bold text-lg sm:text-xl lg:text-[24px] lg:leading-[32px] text-[#949494] text-center sm:text-left">
                Licensed in All 50 States
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
