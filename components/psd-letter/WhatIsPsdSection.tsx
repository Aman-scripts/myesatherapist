"use client";

import React from "react";
import Image from "next/image";
import { DesktopScaleWrapper } from "@/components/common/DesktopScaleWrapper";

export function WhatIsPsdSection() {
  return (
    <section className="relative overflow-hidden bg-white w-full pt-0 pb-8 sm:pb-12 lg:py-0">
      {/* Mobile Image (< 640px) - Rendered FIRST above text */}
      <div className="sm:hidden w-full">
        <div className="relative w-full">
          <Image
            quality={90}
            src="/psd-letter/whatispsd-section-mobile.webp"
            alt="What is a Psychiatric Service Dog Letter"
            width={390}
            height={547}
            className="w-full h-auto block"
          />
          {/* Centered Heart-Paw Badge Icon directly on Golden Curved Line (90.5% from top) */}
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-[90.5%] w-[54px] h-[54px] z-30 pointer-events-none">
            <Image
              src="/psd-letter/psd-dogphyscarist-section-icon.webp"
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
            src="/psd-letter/whatispsd-section-tablet.webp"
            alt="What is a Psychiatric Service Dog Letter"
            width={834}
            height={654}
            className="w-full h-auto block"
          />
          {/* Centered Heart-Paw Badge Icon directly on Golden Curved Line (93.3% from top) */}
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-[93.3%] w-[68px] h-[68px] z-30 pointer-events-none">
            <Image
              src="/psd-letter/psd-dogphyscarist-section-icon.webp"
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
          {/* Heading */}
          <h2 className="heading-h2 capitalize mb-3 sm:mb-6">
            What is a Psychiatric
            <br className="hidden sm:inline" />
            {" "}Service Dog Letter?
          </h2>

          {/* Paragraphs */}
          <div className="space-y-3.5 mb-5 sm:mb-8">
            <p className="body-large">
              A Psychiatric Service Dog (PSD) letter is an official document from a licensed mental health professional that confirms you have a qualifying mental health condition under the Americans with Disabilities Act (ADA). This letter serves as important backup documentation for your psychiatric service dog.
            </p>
            <p className="body-large">
              Your PSD letter will include a statement that you have an ADA-eligible mental health condition, be signed and dated by a state-licensed healthcare professional, and include the provider&apos;s license details and contact information for verification purposes.
            </p>
          </div>

          {/* Left Accent Bar Callout Box (Frame 12) */}
          <div className="relative w-full p-4 sm:p-6 rounded-[20px] bg-background shadow-[0px_2px_4px_rgba(0,0,0,0.15)] overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-2.5"
              style={{ backgroundImage: "var(--color-gradient)" }}
            />
            <div className="pl-3 sm:pl-4 space-y-1.5">
              <h3 className="heading-h3 capitalize">
                Is a PSD Letter Required?
              </h3>
              <p className="body-text">
                While not legally required by the ADA for public access, a PSD letter is highly recommended as backup documentation. Many airlines, landlords, and housing providers request this documentation to verify your legitimate need for a service dog.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop & Laptop View (>= 1024px) - Matches 1440px Figma Frame 1000011742 */}
      <DesktopScaleWrapper
        designWidth={1440}
        designHeight={699}
        className="hidden lg:block relative"
      >
        <div className="relative w-[1440px] h-[699px] mx-auto overflow-hidden bg-white">
          {/* Frame 1000011698: Left Text Container (left: 87px, top: 31px, width: 626px, height: 416px) */}
          <div className="absolute left-[87px] top-[31px] w-[626px] z-10 flex flex-col justify-between">
            <h2 className="heading-h2 text-primary capitalize mb-6 w-[541px]">
              What is a Psychiatric Service Dog Letter?
            </h2>

            <div className="space-y-4 body-large text-body-text w-[626px]">
              <p>
                A Psychiatric Service Dog (PSD) letter is an official document from a licensed mental health professional that confirms you have a qualifying mental health condition under the Americans with Disabilities Act (ADA). This letter serves as important backup documentation for your psychiatric service dog.
              </p>
              <p>
                Your PSD letter will include a statement that you have an ADA-eligible mental health condition, be signed and dated by a state-licensed healthcare professional, and include the provider&apos;s license details and contact information for verification purposes.
              </p>
            </div>
          </div>

          {/* Frame 12: Callout Box (left: 87px, top: 470px, width: 772px, height: 154px) */}
          <div className="absolute left-[87px] top-[470px] w-[772px] h-[154px] p-6 rounded-[20px] bg-background shadow-[0px_2px_4px_rgba(0,0,0,0.15)] overflow-hidden z-10 flex items-center">
            <div
              className="absolute left-0 top-0 bottom-0 w-2.5"
              style={{ backgroundImage: "var(--color-gradient)" }}
            />
            <div className="pl-4 space-y-1.5">
              <h3 className="heading-h3 text-color-gradient capitalize">
                Is a PSD Letter Required?
              </h3>
              <p className="body-text text-body-text">
                While not legally required by the ADA for public access, a PSD letter is highly recommended as backup documentation. Many airlines, landlords, and housing providers request this documentation to verify your legitimate need for a service dog.
              </p>
            </div>
          </div>

          {/* Frame 1000011996: Right Visual Container (left: 746px, top: -32px, width: 754px, height: 707px) */}
          <div className="absolute left-[746px] top-[-32px] w-[754px] h-[707px] pointer-events-none select-none z-10">
            <div className="relative w-full h-full">
              {/* Main Photo (image 24: left 27px, top 0px, width 727px, height 707px) */}
              <div className="absolute left-[27px] top-0 w-[727px] h-[707px] z-10">
                <Image
                  quality={90}
                  src="/psd-letter/psd-dogphyscarist-section.webp"
                  alt="Woman smiling with psychiatric service dog"
                  fill
                  className="object-cover object-right h-full w-full"
                  sizes="727px"
                  priority
                />
              </div>

              {/* Decorative Curve Line (Vector 8: left 0px, top 9px, width 228px, height 698px) */}
              <div className="absolute left-0 top-[9px] w-[228px] h-[698px] z-20 pointer-events-none">
                <Image
                  src="/psd-letter/psd-dogphyscarist-section-line.svg"
                  alt=""
                  width={228}
                  height={698}
                  unoptimized
                  className="object-contain w-full h-full object-left"
                />
              </div>

              {/* Badge (Frame 1000011731: left 27px, top 345px, width 73px, height 73px) */}
              <div className="absolute left-[27px] top-[345px] w-[73px] h-[73px] z-30 pointer-events-none drop-shadow-md">
                <Image
                  src="/psd-letter/psd-dogphyscarist-section-icon.webp"
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
      </DesktopScaleWrapper>
    </section>
  );
}
