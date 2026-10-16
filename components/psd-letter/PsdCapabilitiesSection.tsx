"use client";

import React from "react";
import Image from "next/image";
import { DesktopScaleWrapper } from "@/components/common/DesktopScaleWrapper";

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

export function PsdCapabilitiesSection() {
  return (
    <section className="relative overflow-hidden bg-white w-full pt-0 pb-8 sm:pb-12 lg:py-0">
      {/* Mobile Image (< 640px) - Rendered FIRST above text */}
      <div className="sm:hidden w-full">
        <div className="relative w-full">
          <Image
            quality={90}
            src="/psd-letter/psdcapabilites-section-mobile.webp"
            alt="What A Psychiatric Service Dog Can Do"
            width={390}
            height={680}
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
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Tablet Image (640px to 1023px) - Rendered FIRST above text */}
      <div className="hidden sm:block lg:hidden w-full">
        <div className="relative w-full">
          <Image
            quality={90}
            src="/psd-letter/psdcapabilities-section-tablet.webp"
            alt="What A Psychiatric Service Dog Can Do"
            width={834}
            height={1013}
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
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Text Content Container (< 1024px) */}
      <div className="lg:hidden max-w-[680px] mx-auto px-4 sm:px-6 relative z-10 py-6 sm:py-8">
        <div className="w-full">
          {/* Section Header */}
          <div className="mb-6 text-left">
            <h2 className="heading-h2 text-primary capitalize mb-3">
              What A Psychiatric Service <br className="hidden sm:inline" />
              Dog Can Do?
            </h2>
            <p className="body-large text-body-text">
              Understand the legal framework behind your PSD empowers you as a handler.
            </p>
          </div>

          {/* 3 Capabilities Cards Stack */}
          <div className="space-y-4 w-full">
            {capabilitiesData.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[10px] p-4 sm:p-5 shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex items-start gap-4"
              >
                {/* Number Circle Badge */}
                <div className="w-[50px] h-[50px] sm:w-[59px] sm:h-[59px] rounded-full bg-[#AEBBBE33] flex items-center justify-center shrink-0">
                  <span className="heading-h3 text-[#5F6B6F] font-bold text-[22px] sm:text-[28px] leading-[30px] sm:leading-[36px]">
                    {item.number}
                  </span>
                </div>

                {/* Card Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="heading-h3 text-color-gradient capitalize text-[20px] sm:text-[24px] leading-tight">
                      {item.title}
                    </h3>
                    <span className="bg-primary text-[#FAF7F2] font-semibold text-[12px] sm:text-[14px] px-3 h-[24px] sm:h-[26px] rounded-[16px] flex items-center justify-center shrink-0">
                      {item.framework}
                    </span>
                  </div>
                  <p className="body-text text-body-text text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop View (>= 1024px) - Matches 1440px Figma Frame 1000011784 */}
      <DesktopScaleWrapper
        designWidth={1440}
        designHeight={652}
        className="hidden lg:block relative"
      >
        <div className="relative w-[1440px] h-[652px] mx-auto overflow-hidden bg-white flex items-center">
          {/* Frame 1000011791: Left Content (width: 704px, left: 84px) */}
          <div className="absolute left-[84px] top-1/2 -translate-y-1/2 w-[704px] z-20 flex flex-col items-start">
            {/* Heading */}
            <div className="text-left mb-8 flex flex-col gap-4">
              <h2 className="heading-h2 text-primary capitalize max-w-[559px] leading-[48px]">
                What A Psychiatric Service <br />
                Dog Can Do?
              </h2>
              <p className="body-large text-body-text max-w-[525px]">
                Understand the legal framework behind your PSD empowers you as a handler.
              </p>
            </div>

            {/* 3 Capabilities Cards (Frame 1000011790: 704px x 331px, gap 32px) */}
            <div className="flex flex-col gap-8 w-[704px]">
              {capabilitiesData.map((item, idx) => (
                <div
                  key={idx}
                  className="w-[704px] min-h-[89px] bg-white rounded-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] px-5 py-[15px] flex items-center gap-[15px] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {/* Number Circle Badge (Frame 1000011767: 59px x 59px, bg: rgba(174,187,190,0.2)) */}
                  <div className="w-[59px] h-[59px] rounded-full bg-[#AEBBBE33] flex items-center justify-center shrink-0">
                    <span className="heading-h3 text-[#5F6B6F] font-bold text-[28px] leading-[36px]">
                      {item.number}
                    </span>
                  </div>

                  {/* Card Content (Frame 1000011789) */}
                  <div className="flex flex-col justify-center items-start gap-1 flex-1 min-w-0">
                    {/* Row 1: Title + Framework Tag */}
                    <div className="flex items-center gap-3">
                      <h3 className="heading-h3 text-color-gradient capitalize text-[28px] leading-[36px]">
                        {item.title}
                      </h3>
                      <span className="bg-primary text-[#FAF7F2] font-semibold text-[14px] leading-[26px] px-[13px] h-[26px] rounded-[16px] flex items-center justify-center shrink-0">
                        {item.framework}
                      </span>
                    </div>

                    {/* Row 2: Description */}
                    <p className="body-text text-body-text text-[16px] leading-[26px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Frame (Frame 1000011787: width 641px, height 761px) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[641px] h-[761px] pointer-events-none select-none z-10">
            <Image
              quality={95}
              src="/psd-letter/psdcapabilities-new-image.webp"
              alt="What A Psychiatric Service Dog Can Do"
              fill
              className="object-contain object-right"
              sizes="641px"
              priority
            />
          </div>
        </div>
      </DesktopScaleWrapper>
    </section>
  );
}
