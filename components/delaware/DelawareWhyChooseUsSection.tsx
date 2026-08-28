"use client";

import React from "react";
import Image from "next/image";

const features = [
  {
    icon: "/california-whychooseus-clinicianled.svg",
    title: "Clinician-Led Evaluations",
    description:
      "All assessments are conducted directly by licensed mental health professionals authorized to practice in Delaware.",
  },
  {
    icon: "/california-whychooseus-hipaacompliant.svg",
    title: "100% HIPAA Compliant",
    description:
      "Your personal information and medical records are protected using bank-level encryption on our secure telehealth platform.",
  },
  {
    icon: "/california-whychooseus-fairhousingaligned.svg",
    title: "Fair Housing Act Aligned",
    description:
      "Our documentation complies fully with HUD guidelines and federal Fair Housing Act standards for housing accommodations.",
  },
  {
    icon: "/california-whychooseus-transparentpricing.svg",
    title: "Transparent Flat Pricing",
    description:
      "One flat rate of $149 covers your complete clinical evaluation and documentation with zero hidden fees.",
  },
];

export function DelawareWhyChooseUsSection() {
  return (
    <section className="w-full bg-[#1E3E47] py-14 sm:py-18 lg:py-22 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-[1260px] mx-auto">
        <div className="text-center max-w-[800px] mx-auto mb-12 sm:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight mb-4 text-[#F5E5D0]">
            Why Choose My ESA Therapist in Delaware?
          </h2>
          <p className="font-sans text-xs sm:text-sm lg:text-[15px] text-[#E2E8F0] font-medium leading-relaxed">
            We prioritize clinical integrity, privacy, and transparent support to help Delaware residents navigate the ESA process with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#2A525E]/60 rounded-[22px] p-6 border border-[#3B6673] flex flex-col items-center text-center transition-all duration-300 hover:bg-[#2A525E] hover:border-[#E5B627]/40"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#1E3E47] flex items-center justify-center p-3 mb-5 border border-[#3B6673]">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="font-sans text-xs sm:text-[13px] text-[#CBD5E1] font-medium leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
