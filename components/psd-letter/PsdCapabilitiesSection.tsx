"use client";

import React from "react";
import Image from "next/image";

const capabilitiesData = [
  {
    number: "01",
    title: "Housing Access",
    framework: "Fair Housing Act",
    description: "If any of these describes you, a PSD letter may be exactly what you need.",
  },
  {
    number: "02",
    title: "Public Access",
    framework: "Americans with Disabilities Act",
    description: "If any of these describes you, a PSD letter may be exactly what you need.",
  },
  {
    number: "03",
    title: "Air Travel",
    framework: "Air Carrier Access Act",
    description: "If any of these describes you, a PSD letter may be exactly what you need.",
  },
];

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

export function PsdCapabilitiesSection() {
  return (
    <section className="relative overflow-hidden bg-white w-full pt-0 pb-8 sm:pb-12 lg:py-0">
      {/* Mobile Image (< 640px) - Rendered FIRST above text */}
      <div className="sm:hidden w-full">
        <div className="relative w-full">
          <Image
            src="/psd-letter/psdcapabilites-section-mobile.png"
            alt="What a Psychiatric Service Dog can do"
            width={390}
            height={680}
            priority
            unoptimized
            className="w-full h-auto block"
          />
          {/* Centered Heart-Paw Badge Icon directly on Green Curved Line (88.1% from top) */}
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-[88.1%] w-[54px] h-[54px] z-30 pointer-events-none">
            <Image
              src="/psd-letter/psdcapabilites-section-icon.svg"
              alt="Heart Paw Badge"
              width={73}
              height={73}
              unoptimized
              priority
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Tablet Image (640px to 1023px) - Rendered FIRST above text */}
      <div className="hidden sm:block lg:hidden w-full">
        <div className="relative w-full">
          <Image
            src="/psd-letter/psdcapabilities-section-tablet.png"
            alt="What a Psychiatric Service Dog can do"
            width={834}
            height={1013}
            priority
            unoptimized
            className="w-full h-auto block"
          />
          {/* Centered Heart-Paw Badge Icon directly on Green Curved Line (84.7% from top) */}
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-[84.7%] w-[68px] h-[68px] z-30 pointer-events-none">
            <Image
              src="/psd-letter/psdcapabilites-section-icon.svg"
              alt="Heart Paw Badge"
              width={73}
              height={73}
              unoptimized
              priority
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Text Content Container (Renders AFTER image on Mobile/Tablet) */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-6 sm:py-8 lg:py-10 xl:py-16">
        <div className="w-full lg:w-[50%] xl:w-[52%] max-w-[640px]">

          {/* Section Header */}
          <div className="mb-5 sm:mb-8 text-left">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#2E5A66] leading-tight lg:leading-[54px] tracking-tight mb-2 sm:mb-3">
              What a Psychiatric Service dog can do?
            </h2>
            <p className="text-[#5F6B6F] text-base lg:text-[18px] font-semibold leading-relaxed lg:leading-[30px] font-sans">
              Understand the legal framework behind your PSD empowers you as a handler.
            </p>
          </div>

          {/* 3 Capabilities Cards Stack */}
          <div className="space-y-3.5 lg:space-y-3 xl:space-y-5 lg:max-w-[490px] xl:max-w-[640px]">
            {capabilitiesData.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] p-4 lg:p-4 xl:p-6 shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex items-center gap-3.5 lg:gap-4 xl:gap-6 border-0"
              >
                {/* Number Circle Badge */}
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#AEBBBE33] text-[#5F6B6F] font-heading font-bold text-xl lg:text-[30px] flex items-center justify-center shrink-0">
                  {item.number}
                </div>

                {/* Card Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 lg:gap-2.5 mb-1 sm:mb-1.5">
                    <h3
                      className="font-sans font-semibold text-base lg:text-[16px] bg-clip-text text-transparent"
                      style={{ backgroundImage: TEAL_GRADIENT }}
                    >
                      {item.title}
                    </h3>
                    {/* Dark Teal Pill Tag */}
                    <span className="bg-[#2E5A66] text-[#FAF7F2] font-sans italic font-normal text-[12px] lg:text-[13px] px-3 py-0.5 rounded-[16px] shrink-0">
                      {item.framework}
                    </span>
                  </div>
                  <p className="text-xs sm:text-[14px] font-semibold text-[#5F6B6F] font-sans leading-[22px] sm:leading-[26px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Desktop Image Frame (1024px and up) */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 h-full w-[45%] xl:w-[48%] max-w-[635px] pointer-events-none z-10">
        <div className="relative w-full h-full">
          <Image
            src="/psd-letter/psdcapabilities-new-image.png"
            alt="What a Psychiatric Service Dog can do"
            fill
            priority
            unoptimized
            className="object-cover object-right h-full w-full"
            sizes="(max-width: 1280px) 45vw, 635px"
          />
        </div>
      </div>
    </section>
  );
}
