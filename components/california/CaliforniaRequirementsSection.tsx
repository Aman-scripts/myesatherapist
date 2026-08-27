"use client";

import React from "react";
import { Check } from "lucide-react";

const requirements = [
  "You are 18 years or older (minors require parental or guardian consent).",
  "You have a mental or emotional health condition that substantially impacts daily life.",
  "A licensed professional determines that an ESA may provide emotional benefit.",
  "You reside in California or plan to relocate with the animal.",
  "You must live in California or be relocating there with your ESA.",
  "Completion of the required 30-day client-provider relationship, as outlined under AB 468.",
  "A clinical evaluation conducted by a California-licensed mental health professional.",
];

export function CaliforniaRequirementsSection() {
  return (
    <section className="w-full bg-[#EEEBE0] py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[840px] mx-auto">
        <div className="bg-[#F9F5EC] rounded-[24px] sm:rounded-[32px] border border-[#ECE4D5] p-6 sm:p-8 lg:p-10 shadow-sm text-center">
          
          {/* Compact Section Title */}
          <h2 className="font-heading text-xl sm:text-2xl lg:text-[26px] font-bold text-[#1E3E47] text-center mb-6 sm:mb-8 tracking-tight">
            Basic Requirements For California ESA Letter
          </h2>

          {/* List of Requirements */}
          <div className="space-y-3 sm:space-y-3.5 max-w-[680px] mx-auto text-left mb-8">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span className="font-sans text-xs sm:text-sm lg:text-[14px] font-medium text-[#5F6B6F] leading-relaxed">
                  {req}
                </span>
              </div>
            ))}
          </div>

          {/* Yellow Callout Banner */}
          <div className="max-w-[660px] mx-auto relative overflow-hidden bg-white rounded-[14px] py-2.5 sm:py-3 px-4 sm:px-5 border border-[#EAE5DC] shadow-sm flex items-center pl-6 sm:pl-7 text-left">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#E8B92C] rounded-l-[14px]" />
            <p className="font-sans text-[11px] sm:text-xs lg:text-[12.5px] font-medium text-[#5F6B6F] leading-relaxed">
              <span className="font-bold text-[#1E3E47] uppercase tracking-wider">
                IMPORTANT -{" "}
              </span>
              ESA eligibility is determined solely by a California-licensed mental health professional
              following a clinical evaluation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
