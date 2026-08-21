"use client";

import React from "react";
import Image from "next/image";

export function WhatIsPsdSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white relative overflow-hidden w-full min-h-[699px]">
      {/* Main Container - Left Content */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:w-[650px] xl:w-[700px]">
          <div className="space-y-6 max-w-[680px]">
            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1E3E47] leading-[1.18] tracking-tight">
              What is a Psychiatric
              <br className="hidden sm:inline" />
              Service Dog Letter?
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-[#5F6B6F] text-base lg:text-[17px] font-medium leading-[1.65] font-lato">
              <p>
                A Psychiatric Service Dog (PSD) letter is an official document from a licensed mental health professional that confirms you have a qualifying mental health condition under the Americans with Disabilities Act (ADA). This letter serves as important backup documentation for your psychiatric service dog.
              </p>
              <p>
                Your PSD letter will include a statement that you have an ADA-eligible mental health condition, be signed and dated by a state-licensed healthcare professional, and include the provider&apos;s license details and contact information for verification purposes.
              </p>
            </div>

            {/* Left Accent Bar Callout Box */}
            <div className="relative w-full p-6 sm:p-7 rounded-2xl bg-[#FAF7F2] border border-[#EAE5DC] shadow-xs overflow-hidden">
              {/* Left Vertical Accent Line */}
              <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#1E3E47]" />

              <div className="pl-3">
                <h3 className="font-heading text-lg lg:text-xl font-bold text-[#1E3E47] mb-2">
                  Is a PSD Letter Required?
                </h3>
                <p className="text-sm lg:text-[15px] text-[#5F6B6F] leading-relaxed font-medium font-lato">
                  While not legally required by the ADA for public access, a PSD letter is highly recommended as backup documentation. Many airlines, landlords, and housing providers request this documentation to verify your legitimate need for a service dog.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Frame: Flush to absolute right screen edge (0 right padding) */}
      <div className="mt-12 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[671px] h-[450px] sm:h-[550px] lg:h-[699px] flex justify-end">
        <div className="relative w-full lg:w-[671px] h-full">

          {/* 1. Main Photo (Pre-cut Curved PNG asset) - Flush Right */}
          <div className="absolute right-0 top-0 w-full lg:w-[671px] h-full z-10">
            <Image
              src="/psd-dogphyscarist-section.png"
              alt="Woman smiling with psychiatric service dog"
              fill
              priority
              unoptimized
              className="object-contain object-right"
            />
          </div>

          {/* 2. Golden Decorative Curve Line SVG */}
          <div className="absolute left-[-20px] top-0 w-[230px] h-full z-20 pointer-events-none hidden sm:block">
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

          {/* 3. Floating Heart-Paw Badge Icon (Exact Figma alignment at left-[16px] top-[345px]) */}
          <div className="absolute left-[16px] top-[50%] -translate-y-1/2 lg:top-[345px] lg:translate-y-0 w-[60px] h-[60px] lg:w-[73px] lg:h-[73px] z-30 pointer-events-none">
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
