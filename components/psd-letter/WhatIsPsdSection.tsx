"use client";

import React from "react";
import Image from "next/image";

export function WhatIsPsdSection() {
  return (
    <section className="relative overflow-hidden bg-white w-full py-12 sm:py-16 lg:py-0">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 lg:py-6 xl:py-16">
        <div className="w-full lg:w-[48%] xl:w-[52%] max-w-[680px] lg:max-w-[460px] xl:max-w-[680px]">
          {/* Heading */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[28px] xl:text-[44px] font-bold text-[#1E3E47] leading-[1.15] xl:leading-[1.18] tracking-tight mb-2 sm:mb-6">
            What is a Psychiatric
            <br className="hidden sm:inline" />
            {" "}Service Dog Letter?
          </h2>

          {/* Paragraphs */}
          <div className="space-y-2.5 text-[#5F6B6F] text-base lg:text-[13.5px] xl:text-[17px] font-medium leading-[1.55] xl:leading-[1.65] font-lato mb-3.5 sm:mb-8">
            <p>
              A Psychiatric Service Dog (PSD) letter is an official document from a licensed mental health professional that confirms you have a qualifying mental health condition under the Americans with Disabilities Act (ADA). This letter serves as important backup documentation for your psychiatric service dog.
            </p>
            <p>
              Your PSD letter will include a statement that you have an ADA-eligible mental health condition, be signed and dated by a state-licensed healthcare professional, and include the provider&apos;s license details and contact information for verification purposes.
            </p>
          </div>

          {/* Left Accent Bar Callout Box */}
          <div className="relative w-full p-3 sm:p-6 lg:p-3.5 xl:p-7 rounded-2xl bg-[#FAF7F2] border border-[#EAE5DC] shadow-xs overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#1E3E47]" />
            <div className="pl-2.5 sm:pl-3">
              <h3 className="font-heading text-base sm:text-lg lg:text-[14.5px] xl:text-xl font-bold text-[#1E3E47] mb-1">
                Is a PSD Letter Required?
              </h3>
              <p className="text-xs sm:text-sm lg:text-[12.5px] xl:text-[15px] text-[#5F6B6F] leading-relaxed font-medium font-lato">
                While not legally required by the ADA for public access, a PSD letter is highly recommended as backup documentation. Many airlines, landlords, and housing providers request this documentation to verify your legitimate need for a service dog.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Visual Frame: Flush to top, bottom, and right edge with 0 gaps */}
      <div className="mt-10 lg:mt-0 lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:h-full w-full lg:w-[48%] xl:w-[48%] max-w-[671px] pointer-events-none z-10">
        <div className="relative w-full h-full">
          {/* 1. Main Photo (Pre-cut Curved PNG asset) - Flush Right */}
          <div className="absolute right-0 top-0 bottom-0 w-full h-full z-10">
            <Image
              src="/psd-dogphyscarist-section.png"
              alt="Woman smiling with psychiatric service dog"
              fill
              priority
              unoptimized
              className="object-cover object-right h-full w-full"
              sizes="(max-width: 1280px) 48vw, 671px"
            />
          </div>

          {/* 2. Golden Decorative Curve Line SVG */}
          <div className="absolute left-[-20px] top-0 bottom-0 w-[34%] max-w-[230px] h-full z-20 pointer-events-none hidden sm:block">
            <Image
              src="/psd-dogphyscarist-section-line.svg"
              alt=""
              width={230}
              height={699}
              unoptimized
              priority
              className="object-contain w-full h-full object-left"
            />
          </div>

          {/* 3. Floating Heart-Paw Badge Icon */}
          <div className="absolute left-[16px] top-[49%] -translate-y-1/2 w-[56px] h-[56px] lg:w-[52px] lg:h-[52px] xl:w-[73px] xl:h-[73px] z-30 pointer-events-none">
            <Image
              src="/psd-dogphyscarist-section-icon.svg"
              alt="Heart Paw Badge"
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
