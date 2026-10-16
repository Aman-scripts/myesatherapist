"use client";

import React from "react";
import Image from "next/image";

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

      {/* Desktop View (>= 1024px) - Matches 1446px Figma Frame 1000011773 */}
      <div className="hidden lg:block relative w-full overflow-hidden bg-white">
        <div className="max-w-[1446px] mx-auto px-6 xl:px-[80px] relative min-h-[1180px] xl:min-h-[1241px] flex items-center">
          {/* Left Column: Heading + 6 Cards (Frame 1000011776 + Frame 1261153976) */}
          <div className="w-full max-w-[630.5px] py-14 xl:py-20 z-10">
            {/* Header (Frame 1000011776: 627px x 140px) */}
            <div className="mb-9 text-left flex flex-col gap-4 max-w-[627px]">
              <h2 className="heading-h2 text-primary capitalize max-w-[601px]">
                People Who Benefitted Most <br />
                From The PSD Letter
              </h2>
              <p className="body-large text-body-text max-w-[618px]">
                If any of these describes you, a PSD letter may be exactly what you need.
              </p>
            </div>

            {/* 6 Cards Grid (Frame 1261153976: 630.5px x 844px, 2 Columns x 3 Rows) */}
            <div className="grid grid-cols-2 gap-[32px_24px] w-[630.5px]">
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

          {/* Right Column: Pre-masked Photo + Curve Line + Floating Badge */}
          <div className="absolute right-0 top-0 bottom-0 h-full w-[46%] xl:w-[48%] max-w-[620px] pointer-events-none z-10 select-none">
            <div className="relative w-full h-full">
              {/* Main Photo (psd_benefits_section.png) */}
              <div className="absolute right-0 top-0 bottom-0 w-full h-full z-10">
                <Image
                  quality={95}
                  src="/psd-letter/psd_benefits_section.png"
                  alt="People Who Benefitted Most From The PSD Letter"
                  fill
                  className="object-cover object-left h-full w-full"
                  sizes="(max-width: 1440px) 46vw, 620px"
                  priority
                />
              </div>

              {/* Decorative Curve Line (whobenefits-section-line.svg / Vector 5 in Figma) */}
              <div className="absolute left-[-22px] top-0 bottom-0 w-[83px] h-full z-20 pointer-events-none">
                <Image
                  src="/psd-letter/whobenefits-section-line.svg"
                  alt=""
                  width={83}
                  height={671}
                  unoptimized
                  className="object-contain w-full h-full object-left"
                />
              </div>

              {/* Floating Heart-Paw Badge (whobenefits-section-icon.svg / Frame 1000011731 in Figma) */}
              <div className="absolute left-[-4px] top-[29%] -translate-y-1/2 w-[73px] h-[73px] z-30 pointer-events-none drop-shadow-[0px_2px_6px_rgba(0,0,0,0.18)]">
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
          </div>
        </div>
      </div>
    </section>
  );
}
