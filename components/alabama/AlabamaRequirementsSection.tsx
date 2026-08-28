"use client";

import React from "react";
import { Check } from "lucide-react";

const requirements = [
  "The individual is 18 years or older (or a minor with parental/guardian consent).",
  "A mental or emotional health condition is identified during a clinical evaluation.",
  "The condition significantly impacts one or more major life activities or daily functioning.",
  "An Alabama-licensed healthcare professional determines an ESA may offer therapeutic benefit.",
  "The individual resides in Alabama or plans to relocate to the state.",
];

export function AlabamaRequirementsSection() {
  return (
    <section className="w-full bg-[#EEEBE0] py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[840px] mx-auto">
        <div className="bg-[#F9F5EC] rounded-[24px] sm:rounded-[32px] border border-[#ECE4D5] p-6 sm:p-8 lg:p-10 shadow-sm text-center">
          
          {/* Section Title */}
          <h2 className="font-heading text-xl sm:text-2xl lg:text-[26px] font-bold text-[#1E3E47] text-center mb-6 sm:mb-8 tracking-tight">
            Basic Requirements For Alabama ESA Letter
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
              A formal evaluation must be conducted by a licensed mental health professional to determine whether issuing an ESA letter in Alabama is appropriate for the individual&apos;s circumstances.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
