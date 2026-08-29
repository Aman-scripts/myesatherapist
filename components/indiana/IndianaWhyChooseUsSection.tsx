"use client";

import React from "react";
import Image from "next/image";

const features = [
  {
    icon: "/whychoose-section-license-professional.svg",
    title: "Licensed Professionals",
    description:
      "ESA Evaluations are conducted by independent US licensed mental health professionals authorized to assess ESA eligibility in Indiana.",
  },
  {
    icon: "/whychoose-section-secure-thealth.svg",
    title: "Secure Telehealth Platform",
    description:
      "Our HIPAA-compliant systems ensure your information remains confidential and protected.",
  },
  {
    icon: "/whychoose-section-clinical-integrity.svg",
    title: "Clinical Integrity First",
    description:
      "ESA recommendations are issued by licensed professionals based on individualized clinical evaluation.",
  },
  {
    icon: "/whychoose-section-legimate-documentation.svg",
    title: "Legitimate ESA Documentation",
    description:
      "When clinically appropriate, ESA letters are issued in compliance with applicable federal and Indiana state housing guidelines.",
  },
  {
    icon: "/whychoose-section-nationwide-access.svg",
    title: "Nationwide Access",
    description:
      "Telehealth evaluations available for individuals across Indiana and the United States, subject to clinician availability.",
  },
  {
    icon: "/whychoose-section-transparent-process.svg",
    title: "Transparent Process",
    description:
      "Clear steps, clear expectations, no misleading claims.",
  },
];

export function IndianaWhyChooseUsSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#EEEBE0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 lg:mb-20 space-y-2.5">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1E3E47] leading-tight tracking-[-0.006em]">
            Why Choose My ESA Therapist for ESA Letter Evaluation?
          </h2>
          <div className="text-[#5F6B6F] text-base sm:text-lg font-semibold max-w-[950px] mx-auto leading-relaxed space-y-1">
            <p>
              We simplify online emotional support animal evaluations while maintaining efficiency and legal compliance.
            </p>
            <p>
              Here&apos;s what makes us different from other providers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 lg:gap-y-16 pt-4">
          {features.map(({ icon, title, description }) => (
            <div
              key={title}
              className="relative bg-white rounded-[24px] border border-[#E2E8F0] border-t-[4px] border-t-[#E8B92C] shadow-[0_10px_30px_-10px_rgba(26,61,79,0.08)] px-6 sm:px-8 pt-12 pb-8 flex flex-col items-center text-center h-full min-h-[220px]"
            >
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-[64px] h-[64px] rounded-full bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center">
                <Image
                  src={icon}
                  alt=""
                  width={30}
                  height={30}
                  unoptimized
                  className="object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl lg:text-[24px] font-bold text-[#1A4D59] mb-3 leading-snug">
                {title}
              </h3>

              <p className="text-sm sm:text-base lg:text-[16px] text-[#5F6B6F] font-semibold leading-relaxed max-w-[320px]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
