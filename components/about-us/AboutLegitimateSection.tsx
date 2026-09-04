"use client";

import React from "react";
import Image from "next/image";

const items = [
  {
    number: "01",
    title: "Ethical and Professional Standards",
    description:
      "We prioritize ethical ESA evaluations and adhere to industry best practices, ensuring each assessment is fair, professional, and compliant with federal and state guidelines.",
  },
  {
    number: "02",
    title: "Provider-Led Clinical Assessments",
    description:
      "All evaluations are conducted independently by licensed mental health professionals, with eligibility determined solely through professional clinical review.",
  },
  {
    number: "03",
    title: "Nationwide Coverage and Accessibility",
    description:
      "Our platform offers ESA evaluations in all 50 states, providing accessible telehealth services while ensuring evaluations meet local licensing requirements.",
  },
];

export function AboutLegitimateSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* 1024px+ Absolute Right-Bleed Image (Desktop only) */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[46%] lg:w-[48%] xl:w-[737px] h-full pointer-events-none z-0">
        <Image
          src="/about-us/about_us-legimate_Esa-section.png"
          alt="Legitimate ESA Evaluations"
          fill
          priority
          unoptimized
          className="object-cover object-left-top xl:object-right-top"
          sizes="(min-width: 1280px) 737px, 50vw"
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1446px] mx-auto min-h-auto lg:min-h-[780px] xl:min-h-[938px] flex flex-col lg:flex-row items-center justify-between">
        
        {/* Mobile & Tablet View (<1024px): Image is FIRST with full width and ZERO top/left/right space */}
        <div className="lg:hidden w-full relative">
          {/* Tablet Image (640px - 1023px, exact 834x1050) */}
          <div className="hidden sm:block relative w-full aspect-[834/1050]">
            <Image
              src="/about-us/about_us-legimatesection-tablet.png"
              alt="Legitimate ESA Evaluations"
              fill
              priority
              unoptimized
              className="object-cover object-top"
              sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
            />
          </div>

          {/* Mobile Image (< 640px, exact 390x513) */}
          <div className="block sm:hidden relative w-full aspect-[390/513]">
            <Image
              src="/about-us/about_us-legimatesection-mobile.png"
              alt="Legitimate ESA Evaluations"
              fill
              priority
              unoptimized
              className="object-cover object-top"
              sizes="(max-width: 639px) 100vw, 1px"
            />
          </div>

          {/* Floating Heart & Paw Badge centered right on the bottom wave dip */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-[0px_4px_16px_rgba(0,0,0,0.15)] p-3 sm:p-3.5 flex items-center justify-center z-20 border border-[#EAE5DC]">
            <Image
              src="/about-us/about_us-legimateesasection-hearticon.svg"
              alt="Heart and Paw Icon"
              width={42}
              height={42}
              unoptimized
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* Left Column / Text Area (Desktop left side, Mobile/Tablet second) */}
        <div className="w-full lg:w-[540px] xl:w-[617px] px-5 sm:px-8 lg:pl-8 xl:pl-[84px] lg:pr-4 xl:pr-0 pt-10 sm:pt-14 pb-12 sm:pb-16 lg:py-16 xl:py-20 space-y-6 sm:space-y-8 xl:space-y-10 shrink-0 max-w-[620px] lg:max-w-none mx-auto lg:mx-0">
          {/* Header Block */}
          <div className="space-y-3 sm:space-y-4 max-w-[559px] text-center lg:text-left">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[36px] xl:text-[44px] text-[#2E5A66] leading-tight lg:leading-[44px] xl:leading-[54px] tracking-[-0.00015em]">
              Legitimate ESA Letter Evaluations You Can Trust
            </h2>
            <p className="font-sans font-semibold text-sm sm:text-base lg:text-[16px] xl:text-[18px] text-[#5F6B6F] leading-relaxed lg:leading-[26px] xl:leading-[30px]">
              Our mission is to make the ESA evaluation process clear, ethical, and accessible. We connect individuals with licensed mental health professionals through a secure ESA evaluation process, with all outcomes determined solely through an independent clinical assessment by the provider.
            </p>
          </div>

          {/* 3 Step / Feature Cards (Frame 1000011790) */}
          <div className="space-y-3 sm:space-y-4 max-w-[617px]">
            {items.map((item) => (
              <div
                key={item.number}
                className="w-full bg-white rounded-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.12)] border border-[#EAE5DC]/60 p-3.5 sm:p-4 xl:p-[15px_20px] flex items-center gap-3.5 sm:gap-4 xl:gap-[15px] transition-all duration-200 hover:shadow-md text-left"
              >
                {/* Circular Gray Number Badge (Frame 1000011767) */}
                <div className="w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] xl:w-[59px] xl:h-[59px] rounded-full bg-[#AEBBBE]/20 flex items-center justify-center shrink-0">
                  <span className="font-heading font-bold text-2xl sm:text-3xl xl:text-[36px] leading-none text-[#5F6B6F]">
                    {item.number}
                  </span>
                </div>

                {/* Text Content (Frame 1000011789) */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-sans font-semibold text-base sm:text-[17px] xl:text-[18px] leading-snug sm:leading-[26px] xl:leading-[30px] bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="font-sans font-semibold text-xs sm:text-[13px] xl:text-[14px] leading-relaxed xl:leading-[26px] text-[#5F6B6F] mt-0.5 sm:mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
