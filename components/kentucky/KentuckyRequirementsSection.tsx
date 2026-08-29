"use client";

import React from "react";
import { Check } from "lucide-react";

const requirements = [
  "The individual is 18 years of age or older, or has verified parental/guardian consent if under 18.",
  "A licensed Kentucky clinician evaluates and confirms a diagnosed mental or emotional health condition.",
  "The condition creates a substantial limitation in one or more major life activities (such as sleep, mood, or focus).",
  "An assessment establishes that the presence of an emotional support animal provides therapeutic benefit.",
  "The individual lives in Kentucky or intends to establish residency in the state.",
];

export function KentuckyRequirementsSection() {
  return (
    <section className="w-full bg-[#EEEBE0] py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[840px] mx-auto">
        <div className="bg-[#F9F5EC] rounded-[24px] sm:rounded-[32px] border border-[#ECE4D5] p-6 sm:p-8 lg:p-10 shadow-sm text-center">
          
          {/* Section Title */}
          <h2 className="font-heading text-xl sm:text-2xl lg:text-[26px] font-bold text-[#1E3E47] text-center mb-6 sm:mb-8 tracking-tight">
            Basic Requirements For Kentucky ESA Letter
          </h2>

          {/* List of Requirements */}
          <div className="space-y-3.5 sm:space-y-4 max-w-[720px] mx-auto text-left mb-8">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span className="font-sans text-xs sm:text-sm lg:text-[14.5px] font-medium text-[#5F6B6F] leading-relaxed">
                  {req}
                </span>
              </div>
            ))}
          </div>

          {/* Yellow Callout Banner */}
          <div className="max-w-[720px] mx-auto relative overflow-hidden bg-[#FAF7F2] rounded-[14px] py-3.5 px-4 sm:px-6 border border-[#EAE5DC] shadow-xs flex items-center pl-6 sm:pl-7 text-left">
            <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#E8B92C] rounded-l-[14px]" />
            <p className="font-sans text-[11.5px] sm:text-xs lg:text-[13px] font-medium text-[#5F6B6F] leading-relaxed">
              <span className="font-bold text-[#1E3E47] uppercase tracking-wider">
                IMPORTANT -{" "}
              </span>
              Under Kentucky law (KRS 525.095), misrepresenting a pet as an assistance or service animal is a punishable violation. ESA letters are valid for housing accommodations only after an individualized evaluation by a licensed clinician.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
