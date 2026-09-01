"use client";

import React from "react";
import { Check } from "lucide-react";
import { StateData } from "@/data/statesData";

export function StateRequirementsSection({ data }: { data: StateData }) {
  const stateName = data.name;

  const requirements = [
    "The person is at least 18 years old or has documented consent from a parent or guardian if a minor.",
    "A mental or emotional health condition is diagnosed through a professional clinical evaluation.",
    "The condition substantially affects daily life and functioning like emotional regulation, sleep or ability to focus.",
    "The therapeutic role of an animal is identified on a case-by-case basis.",
    `The individual is currently a resident of ${stateName} or is planning to relocate there.`,
  ];

  return (
    <section className="w-full bg-[#FAF7F2] py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[895px] mx-auto">
        <div className="bg-[rgba(232,185,44,0.1)] rounded-[30px] p-6 sm:p-8 lg:p-10 shadow-sm text-center">
          <h2 className="font-heading text-xl sm:text-2xl lg:text-[24px] xl:text-[28px] font-bold text-[#2E5A66] text-center mb-6 sm:mb-8 tracking-tight">
            Basic Requirements For {stateName} ESA Letter
          </h2>

          <div className="space-y-3.5 sm:space-y-4 max-w-[720px] mx-auto text-left mb-8">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-start gap-3">
                <div
                  className="w-5 h-5 rounded-full text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs"
                  style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                >
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="font-sans text-xs sm:text-sm lg:text-[14px] font-semibold text-[#5F6B6F] leading-relaxed">
                  {req}
                </span>
              </div>
            ))}
          </div>

          <div className="max-w-[711px] mx-auto relative overflow-hidden bg-[#FAF7F2] rounded-[10px] py-3.5 px-4 sm:px-6 shadow-xs flex items-center pl-6 sm:pl-7 text-left">
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-[#E8B92C] rounded-l-[10px]" />
            <p className="font-sans text-[11.5px] sm:text-xs lg:text-[14px] font-semibold text-[#5F6B6F] leading-relaxed">
              <span className="font-bold text-[#2E5A66] uppercase tracking-wider">
                IMPORTANT -{" "}
              </span>
              ESA evaluation in {stateName} must be determined through an individualized assessment conducted by an {stateName}-licensed mental health professional (LMHP). An ESA letter may only be issued when clinically appropriate based on that evaluation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
