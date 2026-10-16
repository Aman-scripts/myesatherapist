"use client";

import React from "react";
import Image from "next/image";

import { DesktopScaleWrapper } from "@/components/common/DesktopScaleWrapper";

const benefitsData = [
  {
    title: "Living In No-Pet Housing",
    description: "If any of these describes you, a PSD letter may be exactly what you need.",
  },
  {
    title: "Getting A New Service Dog",
    description: "If any of these describes you, a PSD letter may be exactly what you need.",
  },
  {
    title: "Frequent Flyers",
    description: "If any of these describes you, a PSD letter may be exactly what you need.",
  },
  {
    title: "Upgrading From ESA",
    description: "If any of these describes you, a PSD letter may be exactly what you need.",
  },
  {
    title: "Veterans With PTSD",
    description: "If any of these describes you, a PSD letter may be exactly what you need.",
  },
  {
    title: "Need Backup Documentation",
    description: "If any of these describes you, a PSD letter may be exactly what you need.",
  },
];

export function WhoBenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-white w-full pt-0 pb-12 sm:pb-16 lg:py-0">
      {/* Mobile & Tablet View (< 1024px) */}
      <div className="lg:hidden w-full overflow-hidden">
        {/* Full-width Image Container (Edge to Edge, Image FIRST) */}
        <div className="relative w-full max-h-[480px] sm:max-h-[600px] overflow-hidden bg-[#FAF7F2]">
          <Image
            quality={95}
            src="/psd-letter/psd_benefits_section.png"
            alt="People Who Benefitted Most From The PSD Letter"
            width={595}
            height={811}
            className="w-full h-auto object-cover max-h-[440px] sm:max-h-[580px] block"
            priority
          />
          {/* Centered Heart-Paw Badge Icon on the curve dip */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-3 translate-y-1/2 w-[60px] h-[60px] sm:w-[73px] sm:h-[73px] z-20 pointer-events-none drop-shadow-[0px_2px_6px_rgba(0,0,0,0.18)]">
            <Image
              src="/psd-letter/whobenefits-section-icon.svg"
              alt="Heart Paw Badge"
              width={73}
              height={73}
              unoptimized
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* Text Content Container (Renders AFTER image on Mobile/Tablet) */}
        <div className="w-full px-4 sm:px-6 pt-10 pb-8 max-w-[660px] mx-auto">
          {/* Header */}
          <div className="mb-8 text-left">
            <h2 className="heading-h2 text-primary capitalize mb-3">
              People Who Benefitted Most <br className="hidden sm:inline" />
              From The PSD Letter
            </h2>
            <p className="body-large text-body-text">
              If any of these describes you, a PSD letter may be exactly what you need.
            </p>
          </div>

          {/* 6 Benefit Cards (1 Col on mobile, 2 Cols on tablet) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
            {benefitsData.map((item, idx) => (
              <div
                key={idx}
                className="w-full min-h-[260px] bg-white rounded-[10px] p-[19px_20px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex flex-col justify-center items-start gap-[10px]"
              >
                <div className="w-[54px] h-[54px] shrink-0 relative flex items-center justify-center">
                  <Image
                    quality={95}
                    src="/psd-letter/psd_benefits_section_commonicon.svg"
                    alt={item.title}
                    width={54}
                    height={54}
                    className="w-[54px] h-[54px] object-contain shrink-0"
                  />
                </div>

                <div className="flex flex-col justify-center items-start gap-1 w-full max-w-[262px]">
                  <h3 className="heading-h3 text-color-gradient capitalize">
                    {item.title}
                  </h3>
                  <p className="body-text text-body-text">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop View (>= 1024px) - Exact 1440px Figma Frame 1000011773 */}
      <DesktopScaleWrapper
        designWidth={1440}
        designHeight={1241}
        className="hidden lg:block relative"
      >
        <div className="relative w-[1440px] h-[1241px] mx-auto overflow-hidden bg-white">
          {/* Frame 1000011776: Heading (left: 80px, top: 88px, width: 627px, height: 140px) */}
          <div className="absolute left-[80px] top-[88px] w-[627px] h-[140px] z-10 flex flex-col gap-4 text-left">
            <h2 className="heading-h2 text-primary capitalize w-[601px]">
              People Who Benefitted Most <br />
              From The PSD Letter
            </h2>
            <p className="body-large text-body-text w-[618px]">
              If any of these describes you, a PSD letter may be exactly what you need.
            </p>
          </div>

          {/* Frame 1261153976: 6 Cards Grid (left: 80px, top: 264px, width: 630.5px, height: 844px) */}
          <div className="absolute left-[80px] top-[264px] w-[630.5px] h-[844px] z-10 grid grid-cols-2 gap-[32px_24px]">
            {benefitsData.map((item, idx) => (
              <div
                key={idx}
                className="w-[302px] h-[260px] bg-white rounded-[10px] p-[19px_20px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex flex-col justify-center items-start gap-[10px] transition-transform duration-200 hover:-translate-y-0.5"
              >
                {/* Common Card Icon (54px x 54px, fi_12807496) */}
                <div className="w-[54px] h-[54px] shrink-0 relative flex items-center justify-center">
                  <Image
                    quality={95}
                    src="/psd-letter/psd_benefits_section_commonicon.svg"
                    alt={item.title}
                    width={54}
                    height={54}
                    className="w-[54px] h-[54px] object-contain shrink-0"
                  />
                </div>

                {/* Text Container (Frame 1000011774: 262px x 154px) */}
                <div className="flex flex-col justify-center items-start gap-1 w-[262px]">
                  <h3 className="heading-h3 text-color-gradient capitalize">
                    {item.title}
                  </h3>
                  <p className="body-text text-body-text">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Visual Group: Exactly positioned from Frame 1000011773 */}
          {/* Vector 5 (decorative curve line): left 845.5px (80 + 765.5), top -16px, width 81px, height 1258px */}
          <div className="absolute left-[845.5px] top-[-16px] w-[81px] h-[1258px] z-20 pointer-events-none select-none">
            <Image
              src="/psd-letter/whobenefits-section-line.svg"
              alt=""
              width={81}
              height={1258}
              unoptimized
              className="object-contain w-full h-full object-left"
            />
          </div>

          {/* Mask group (Image psd_benefits_section.png): left 867px (80 + 787), top -24px, width 578px, height 1266px */}
          <div className="absolute left-[867px] top-[-24px] w-[578px] h-[1266px] z-10 pointer-events-none select-none">
            <Image
              quality={95}
              src="/psd-letter/psd_benefits_section.png"
              alt="People Who Benefitted Most From The PSD Letter"
              fill
              className="object-contain object-left h-full w-full"
              sizes="578px"
              priority
            />
          </div>

          {/* Frame 1000011731 (Floating Heart-Paw Badge): left 812.5px (80 + 732.5), top 326px, width 73px, height 73px */}
          <div className="absolute left-[812.5px] top-[326px] w-[73px] h-[73px] z-30 pointer-events-none drop-shadow-[0px_2px_6px_rgba(0,0,0,0.18)]">
            <Image
              src="/psd-letter/whobenefits-section-icon.svg"
              alt="Heart Paw Badge"
              width={73}
              height={73}
              unoptimized
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </DesktopScaleWrapper>
    </section>
  );
}
