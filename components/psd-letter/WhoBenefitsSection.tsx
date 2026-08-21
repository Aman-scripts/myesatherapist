"use client";

import React from "react";
import Image from "next/image";

const benefitsData = [
  {
    icon: "/whobenefits-section-livingnopet.svg",
    title: "Living in No-Pet Housing",
    description: "If any of these describes you, a PSD letter may be exactly what you need.",
  },
  {
    icon: "/whobenefits-section-newservicedog.svg",
    title: "Getting a new Service Dog",
    description: "If any of these describes you, a PSD letter may be exactly what you need.",
  },
  {
    icon: "/whobenefits-section-frequentflayers.svg",
    title: "Frequent Flyers",
    description: "If any of these describes you, a PSD letter may be exactly what you need.",
  },
  {
    icon: "/whobenefits-section-upgradingform.svg",
    title: "Upgrading from ESA",
    description: "If any of these describes you, a PSD letter may be exactly what you need.",
  },
  {
    icon: "/whobenefits-section-veteranspsd.svg",
    title: "Veterans with PTSD",
    description: "If any of these describes you, a PSD letter may be exactly what you need.",
  },
  {
    icon: "/whobenefits-section-backupdocumentation.svg",
    title: "Need Backup Documentation",
    description: "If any of these describes you, a PSD letter may be exactly what you need.",
  },
];

export function WhoBenefitsSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white relative overflow-hidden w-full min-h-[701px]">
      {/* Main Container - Left Content */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:w-[650px] xl:w-[700px]">

          {/* Header */}
          <div className="mb-8 sm:mb-10 text-left">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1E3E47] leading-[1.18] tracking-tight mb-3">
              People who benefitted most <br className="hidden sm:inline" />
              from the PSD Letter
            </h2>
            <p className="text-[#5F6B6F] text-base sm:text-lg font-normal">
              If any of these describes you, a PSD letter may be exactly what you need.
            </p>
          </div>

          {/* 6 Benefit Cards (2 Columns Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-[15px] max-w-[630px]">
            {benefitsData.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[10px] pt-[15px] pr-[20px] pb-[15px] pl-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.04)] flex items-center gap-[10px] sm:w-[301.5px] sm:min-h-[88.67px]"
              >
                {/* Circular Icon Container with exact Figma bg #AEBBBE33 */}
                <div className="w-[44px] h-[44px] rounded-full bg-[#AEBBBE33] flex items-center justify-center shrink-0">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                    unoptimized
                    priority
                    className="object-contain"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>

                {/* Card Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#1E3E47] text-[15px] leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-lato italic font-normal text-[14px] leading-[145%] tracking-[-0.03em] text-[#5F6B6F] mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Right Image Frame: Exact Figma 567x701 dimensions, flush to absolute right screen edge */}
      <div className="mt-12 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[567px] h-[450px] sm:h-[550px] lg:h-[701px] flex justify-end">
        <div className="relative w-full lg:w-[567px] h-full">

          {/* 1. Main Photo of Handler & Service Pet - Flush Right (567x701) */}
          <div className="absolute right-0 top-0 w-full lg:w-[567px] h-full z-10">
            <Image
              src="/whobenefits-section-image.png"
              alt="People who benefitted most from the PSD Letter"
              fill
              unoptimized
              priority
              className="object-contain object-right"
            />
          </div>

          {/* 2. Organic Wavy S-Curve SVG Line (83x671, offset left-[-20px] for perfect parallel gap) */}
          <div className="absolute left-[-20px] top-[15px] w-[83px] h-[671px] z-20 pointer-events-none hidden sm:block">
            <Image
              src="/whobenefits-section-line.svg"
              alt=""
              width={83}
              height={671}
              unoptimized
              priority
              className="object-contain w-full h-full"
            />
          </div>

          {/* 3. Floating Paw/Heart Badge Icon */}
          <div className="absolute left-[-16px] top-[350px] -translate-x-1/2 -translate-y-1/2 w-[73px] h-[73px] z-30 pointer-events-none hidden sm:block">
            <Image
              src="/whobenefits-section-icon.svg"
              alt="Paw Heart Icon"
              width={73}
              height={73}
              unoptimized
              priority
              className="object-contain"
              style={{ width: "auto", height: "auto" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
