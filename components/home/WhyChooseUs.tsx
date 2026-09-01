"use client";

import React from "react";
import Image from "next/image";

const features = [
  {
    icon: "/whychoose-section-license-professional.svg",
    title: "Licensed Professionals",
    description:
      "Evaluations are conducted by independent U.S.-licensed mental health professionals authorized to assess ESA eligibility.",
  },
  {
    icon: "/whychoose-section-secure-thealth.svg",
    title: "Secure Telehealth Platform",
    description:
      "HIPAA-compliant systems ensure your information remains confidential and protected.",
  },
  {
    icon: "/whychoose-section-clinical-integrity.svg",
    title: "Clinical Integrity First",
    description:
      "We do not guarantee ESA approval. Recommendations are based solely on clinical judgment.",
  },
  {
    icon: "/whychoose-section-legimate-documentation.svg",
    title: "Legitimate ESA Documentation",
    description:
      "When clinically appropriate, ESA letters are issued in compliance with applicable federal and state housing guidelines.",
  },
  {
    icon: "/whychoose-section-nationwide-access.svg",
    title: "Nationwide Access",
    description:
      "Telehealth evaluations available for individuals across the United States, subject to clinician availability.",
  },
  {
    icon: "/whychoose-section-transparent-process.svg",
    title: "Transparent Process",
    description:
      "Clear steps, clear expectations, no misleading claims.",
  },
];

export function WhyChooseUs({ bgColor = "bg-white" }: { bgColor?: string }) {
  return (
    <section className={`py-16 lg:py-24 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-14 lg:mb-20 space-y-2.5">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#2E5A66] leading-tight tracking-[-0.006em]">
            Why Choose My ESA Therapist?
          </h2>
          <div className="text-[#5F6B6F] text-base sm:text-lg font-semibold max-w-[1050px] mx-auto leading-relaxed space-y-1">
            <p className="lg:whitespace-nowrap">
              We simplify online emotional support animal evaluations while maintaining efficiency and legal compliance.
            </p>
            <p className="lg:whitespace-nowrap">
              Here&apos;s what makes us different from other providers.
            </p>
          </div>
        </div>

        {/* 3-column 2-row grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 lg:gap-y-16 pt-4">
          {features.map(({ icon, title, description }) => (
            <div
              key={title}
              className="relative rounded-[20px] bg-[#E8B92C] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] pt-1.5 px-0 pb-0 flex flex-col items-center"
            >
              <div className="w-full bg-white rounded-[20px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] px-6 sm:px-8 pt-12 pb-8 flex flex-col items-center text-center h-full min-h-[228px]">
                {/* Floating icon circle on top border */}
                <div className="absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2 w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] lg:w-[64px] lg:h-[64px] rounded-full bg-white shadow-[0px_2.5px_5px_rgba(0,0,0,0.25)] border border-[#E2E8F0] flex items-center justify-center">
                  <Image
                    src={icon}
                    alt=""
                    width={32}
                    height={32}
                    unoptimized
                    className="object-contain w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[32px] lg:h-[32px]"
                  />
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-lato)] text-xl sm:text-2xl lg:text-[24px] font-bold bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent mb-3 leading-[29px] tracking-[-0.017em]">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base lg:text-[16px] text-[#5F6B6F] font-semibold leading-[26px] max-w-[320px] font-sans">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
