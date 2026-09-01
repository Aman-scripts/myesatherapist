"use client";

import React from "react";
import { Check } from "lucide-react";
import { StateData } from "@/data/statesData";

export function StateRequirementsSection({ data }: { data: StateData }) {
  const stateName = data.name;

  const requirements = [
    "You are 18 years or older (minors require parental or guardian consent).",
    "You have a mental or emotional health condition that substantially impacts daily life.",
    "A licensed professional determines that an ESA may provide emotional benefit.",
    `You reside in ${stateName} or plan to relocate with the animal.`,
    `A clinical evaluation conducted by a ${stateName}-licensed mental health professional.`,
  ];

  return (
    <section className="w-full bg-[#FAF7F2] py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[895px] mx-auto">
        {/* Frame 1000011979 */}
        <div className="bg-[rgba(232,185,44,0.1)] rounded-[30px] py-8 px-6 sm:py-[32px] sm:px-[67px] text-center space-y-6">
          
          {/* Heading: Frame 1000012005 */}
          <h2 className="font-heading text-xl sm:text-2xl lg:text-[24px] font-bold text-[#2E5A66] leading-[32px] text-center tracking-[-0.00015em]">
            Basic Requirements For {stateName} ESA Letter
          </h2>

          {/* Checklist: Frame 1000012001 */}
          <div className="space-y-2.5 sm:space-y-2 max-w-[632px] mx-auto text-left">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-5 h-5 rounded-[10px] bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="font-sans text-[13px] sm:text-[14px] font-semibold text-[#5F6B6F] leading-[26px]">
                  {req}
                </span>
              </div>
            ))}
          </div>

          {/* Important Banner: Frame 1000012004 */}
          <div className="max-w-[711px] mx-auto overflow-hidden bg-[#FAF7F2] rounded-[10px] flex items-stretch text-left">
            <div className="w-[19px] bg-[#E8B92C] rounded-l-[10px] shrink-0" />
            <div className="py-3 px-4 sm:px-5 flex-1">
              <p className="font-sans text-[13px] sm:text-[14px] font-bold text-[#5F6B6F] leading-[22px]">
                IMPORTANT - ESA eligibility is determined solely by a {stateName}-licensed mental health professional following a clinical evaluation.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
