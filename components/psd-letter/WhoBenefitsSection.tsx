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

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

export function WhoBenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-white w-full pt-0 pb-8 sm:pb-12 lg:py-0">
      {/* Mobile Image (< 640px) - Rendered FIRST above text */}
      <div className="sm:hidden w-full">
        <div className="relative w-full">
          <Image
            src="/whobenefits-section-mobile.png"
            alt="People who benefitted most from the PSD Letter"
            width={390}
            height={652}
            priority
            unoptimized
            className="w-full h-auto block"
          />
          {/* Centered Heart-Paw Badge Icon directly on Dark Green Curved Line (95.1% from top) */}
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-[95.1%] w-[54px] h-[54px] z-30 pointer-events-none">
            <Image
              src="/whobenefits-section-icon.svg"
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
            src="/whobenefits-section-tablet.png"
            alt="People who benefitted most from the PSD Letter"
            width={833}
            height={1140}
            priority
            unoptimized
            className="w-full h-auto block"
          />
          {/* Centered Heart-Paw Badge Icon directly on Dark Green Curved Line (93.9% from top) */}
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-[93.9%] w-[68px] h-[68px] z-30 pointer-events-none">
            <Image
              src="/whobenefits-section-icon.svg"
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
        <div className="w-full lg:w-[52%] xl:w-[55%] max-w-[660px]">

          {/* Header */}
          <div className="mb-5 sm:mb-8 text-left">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#2E5A66] leading-tight lg:leading-[54px] tracking-tight mb-2 sm:mb-3">
              People who benefitted most <br className="hidden sm:inline" />
              from the PSD Letter
            </h2>
            <p className="text-[#5F6B6F] text-base lg:text-[18px] font-semibold leading-relaxed lg:leading-[30px] font-sans">
              If any of these describes you, a PSD letter may be exactly what you need.
            </p>
          </div>

          {/* 6 Benefit Cards (2 Columns Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-2.5 xl:gap-[15px] max-w-[630px] lg:max-w-[490px] xl:max-w-[630px]">
            {benefitsData.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[10px] p-3 lg:p-2.5 xl:pt-[15px] xl:pr-[20px] xl:pb-[15px] xl:pl-[20px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex items-center gap-2.5 lg:gap-2 xl:gap-[10px] min-h-[72px] lg:min-h-[68px] xl:min-h-[88px]"
              >
                {/* Circular Icon Container */}
                <div className="w-[38px] h-[38px] lg:w-[34px] lg:h-[34px] xl:w-[44px] xl:h-[44px] rounded-full bg-[#AEBBBE33] flex items-center justify-center shrink-0">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={20}
                    height={20}
                    unoptimized
                    priority
                    className="object-contain"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>

                {/* Card Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-sans font-semibold text-[13.5px] lg:text-[14px] xl:text-[16px] leading-snug bg-clip-text text-transparent"
                    style={{ backgroundImage: TEAL_GRADIENT }}
                  >
                    {item.title}
                  </h3>
                  <p className="font-sans italic font-normal text-[12px] lg:text-[13px] xl:text-[14px] leading-[18px] lg:leading-[20px] text-[#5F6B6F] mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Desktop Image Frame (1024px and up) */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 h-full w-[42%] xl:w-[45%] max-w-[567px] pointer-events-none z-10">
        <div className="relative w-full h-full">

          {/* 1. Main Photo */}
          <div className="absolute right-0 top-0 bottom-0 w-full h-full z-10">
            <Image
              src="/whobenefits-section-image.png"
              alt="People who benefitted most from the PSD Letter"
              fill
              unoptimized
              priority
              className="object-cover object-right h-full w-full"
              sizes="(max-width: 1280px) 42vw, 567px"
            />
          </div>

          {/* 2. Organic Wavy S-Curve SVG Line */}
          <div className="absolute left-[-20px] top-0 bottom-0 w-[83px] h-full z-20 pointer-events-none">
            <Image
              src="/whobenefits-section-line.svg"
              alt=""
              width={83}
              height={671}
              unoptimized
              priority
              className="object-contain w-full h-full object-left"
            />
          </div>

          {/* 3. Floating Paw/Heart Badge Icon */}
          <div className="absolute left-[-16px] top-[49%] -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] xl:w-[73px] xl:h-[73px] z-30 pointer-events-none">
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
