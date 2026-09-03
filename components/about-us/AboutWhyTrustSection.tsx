"use client";

import React from "react";
import Image from "next/image";

const cards = [
  {
    icon: "/about-us/about_us-whypetowners-licensed_clinics-icon.svg",
    title: "Licensed Clinicians",
    description: "State-licensed mental health professionals",
  },
  {
    icon: "/about-us/about_us-whypetowners-phone_video-icon.svg",
    title: "Phone or Video Evaluation",
    description: "Secure phone or video sessions",
  },
  {
    icon: "/about-us/about_us-whypetowners-hippa_compliance-icon.svg",
    title: "HIPAA Compliant",
    description: "Secure handling of personal information",
  },
  {
    icon: "/about-us/about_us-whypetowners-clinical_assement-icon.svg",
    title: "Clinical Assessment",
    description: "Outcomes based on clinical assessment",
  },
];

export function AboutWhyTrustSection() {
  return (
    <section className="w-full bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 xl:py-24 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-[860px] mx-auto mb-14 sm:mb-16 lg:mb-20 space-y-3 sm:space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[38px] xl:text-[44px] font-bold text-[#2E5A66] leading-tight lg:leading-[48px] xl:leading-[54px] tracking-[-0.00015em]">
            Why Pet Owners Trust MY ESA Therapist?
          </h2>
          <p className="font-sans font-semibold text-sm sm:text-base lg:text-[16px] xl:text-[18px] text-[#5F6B6F] leading-relaxed lg:leading-[26px] xl:leading-[30px] max-w-[700px] mx-auto">
            We stand apart by providing legitimate, professional ESA evaluations conducted by licensed clinicians.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 lg:gap-4 xl:gap-6 pt-2">
          {cards.map((card, idx) => (
            <div key={idx} className="relative flex flex-col items-center">
              {/* Top Floating Circular Icon Badge */}
              <div className="absolute -top-7 sm:-top-8 z-10 w-[64px] h-[64px] sm:w-[70px] sm:h-[70px] xl:w-[74px] xl:h-[74px] rounded-full bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.12)] flex items-center justify-center p-3 sm:p-3.5 border border-[#FAF7F2]">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={34}
                  height={34}
                  unoptimized
                  className="object-contain w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] xl:w-[34px] xl:h-[34px]"
                />
              </div>

              {/* Card Body with Gold Top Accent Bar */}
              <div className="w-full min-h-[175px] sm:min-h-[185px] lg:min-h-[195px] bg-white rounded-[20px] shadow-[0px_4px_12px_rgba(0,0,0,0.06)] border-t-[6px] border-t-[#E8B92C] pt-12 sm:pt-14 pb-6 px-3 sm:px-4 xl:px-5 flex flex-col items-center justify-center text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                <h3
                  className="font-[family-name:var(--font-lato)] font-bold text-base sm:text-lg lg:text-[19px] xl:text-[22px] leading-snug sm:leading-tight bg-clip-text text-transparent mb-2"
                  style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                >
                  {card.title}
                </h3>
                <p className="font-sans font-semibold text-xs sm:text-sm lg:text-[13px] xl:text-[14px] text-[#5F6B6F] leading-relaxed max-w-[220px]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
