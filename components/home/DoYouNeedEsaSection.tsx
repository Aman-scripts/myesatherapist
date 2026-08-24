"use client";

import React from "react";
import Image from "next/image";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

export function DoYouNeedEsaSection() {
  const points = [
    "Feeling persistent anxiety, depression, or stress that impacts daily life.",
    "Difficulty coping with emotional challenges on your own",
    "Experiencing frequent loneliness or isolation",
    "Noticing that being around animals naturally brings you comfort or a sense of calm",
    "Struggling to maintain emotional balance during stressful situations",
  ];

  return (
    <section className="relative overflow-hidden bg-white w-full pt-0 pb-8 sm:pb-12 lg:py-0">
      {/* Desktop & Laptop Container */}
      <div className="hidden lg:flex relative w-full max-w-[1442px] mx-auto items-center justify-between h-[566px] xl:h-[701px]">
        
        {/* Left Content Area */}
        <div className="w-[500px] lg:w-[490px] xl:w-[737px] pl-6 lg:pl-8 xl:pl-[78px] pr-4 my-auto py-0 z-10 flex flex-col justify-center shrink-0 space-y-3 lg:space-y-3.5 xl:space-y-5">
          <div className="space-y-2 lg:space-y-2.5 xl:space-y-4">
            <h2 className="font-heading text-[28px] lg:text-[30px] xl:text-[44px] font-bold text-[#2E5A66] leading-[36px] lg:leading-[38px] xl:leading-[54px] tracking-[-0.0066em]">
              Do You Need an Emotional Support Animal?
            </h2>

            <div className="text-[#5F6B6F] text-[13px] lg:text-[14px] xl:text-[18px] font-semibold leading-[20px] lg:leading-[22px] xl:leading-[30px] font-sans space-y-2 lg:space-y-2.5 xl:space-y-3.5">
              <p>
                You might consider an Emotional Support Animal if you face challenges that affect your emotional or mental well-being. Situations that could indicate a need for an ESA include:
              </p>

              <ul className="space-y-0.5 lg:space-y-1 xl:space-y-1.5 list-none pl-0">
                {points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-[#2E5A66] font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="pt-0.5 text-[12px] lg:text-[13px] xl:text-[18px] leading-[17px] lg:leading-[19px] xl:leading-[30px]">
                It’s important to note that an ESA should only be recommended following a proper evaluation by a licensed mental health professional. Documentation obtained without professional guidance may not be valid or recognized under housing laws.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-2 xl:pt-4">
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-between w-[179px] h-[48px] rounded-[30px] pl-6 pr-1.5 text-white font-semibold text-[16px] shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:opacity-95 transition-opacity"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <span className="font-sans">Get Started</span>
              <span className="w-[42px] h-[42px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image
                  src="/send-icon.svg"
                  alt=""
                  width={22}
                  height={24}
                  className="w-[22px] h-[24px]"
                />
              </span>
            </a>
          </div>
        </div>

        {/* Right Visual Frame: Exact 594x701 proportions matching Figma */}
        <div className="relative shrink-0 pointer-events-none w-[480px] h-[566px] xl:w-[594px] xl:h-[701px] z-0">
          {/* Background Decorative Line SVG */}
          <div className="absolute left-0 top-[12px] xl:top-[15px] w-[65px] xl:w-[81px] h-[540px] xl:h-[669px] z-0">
            <Image
              src="/doyouneed-emotional-support-section-line.svg"
              alt=""
              width={81}
              height={669}
              className="object-contain w-full h-full"
            />
          </div>

          {/* Main Photo (Natural aspect ratio, un-cropped) */}
          <div className="absolute right-0 top-0 w-[461px] xl:w-[571px] h-[566px] xl:h-[701px] z-10">
            <Image
              src="/doyouneed-esa-perfect-v3.png"
              alt="Emotional support dog and owner"
              fill
              priority
              unoptimized
              className="object-contain object-right"
              sizes="(min-width: 1280px) 571px, 461px"
            />
          </div>

          {/* Floating Circle Badge at Curve Apex */}
          <div className="absolute left-[-11px] xl:left-[-14px] top-[270px] xl:top-[335px] w-[59px] xl:w-[73px] h-[59px] xl:h-[73px] z-20 drop-shadow-[0_2px_6px_rgba(0,0,0,0.18)]">
            <Image
              src="/doyouneed-emotional-support-icon.svg"
              alt="ESA Badge"
              width={73}
              height={73}
              className="object-contain rounded-full bg-[#FDFBF7] w-full h-full"
            />
          </div>
        </div>

      </div>

      {/* Mobile / Tablet View (Rendered with 0 top gap) */}
      <div className="lg:hidden w-full">
        {/* Full-width Image Container (Edge to Edge, Image FIRST) */}
        <div className="w-full">
          {/* Mobile Image (< 640px) */}
          <div className="sm:hidden w-full">
            <Image
              src="/mobile-do-you-need-emotional-support.png"
              alt="Do You Need an Emotional Support Animal"
              width={390}
              height={475}
              priority
              unoptimized
              className="w-full h-auto block"
            />
          </div>

          {/* Tablet Image (640px to 1023px) */}
          <div className="hidden sm:block w-full">
            <Image
              src="/tablet-do-you-need-emotional-support.png"
              alt="Do You Need an Emotional Support Animal"
              width={834}
              height={533}
              priority
              unoptimized
              className="w-full h-auto block"
            />
          </div>
        </div>

        {/* Text & Button Container (Text SECOND) */}
        <div className="px-4 sm:px-6 max-w-3xl mx-auto py-6 sm:py-8 space-y-6 sm:space-y-8">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#2E5A66] leading-tight tracking-[-0.0066em]">
              Do You Need an Emotional Support Animal?
            </h2>

            <div className="text-[#5F6B6F] text-base sm:text-[18px] font-semibold leading-relaxed space-y-3 font-sans">
              <p>
                You might consider an Emotional Support Animal if you face challenges that affect your emotional or mental well-being. Situations that could indicate a need for an ESA include:
              </p>

              <ul className="space-y-1.5 list-none pl-0">
                {points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-[#2E5A66] font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="pt-2 text-sm sm:text-base leading-relaxed">
                It’s important to note that an ESA should only be recommended following a proper evaluation by a licensed mental health professional. Documentation obtained without professional guidance may not be valid or recognized under housing laws.
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-between w-full sm:w-[179px] h-[48px] rounded-[30px] pl-6 pr-1.5 text-white font-semibold text-[16px] shadow-sm"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <span>Get Started</span>
              <span className="w-[42px] h-[42px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image src="/send-icon.svg" alt="" width={22} height={24} className="w-[22px] h-[24px]" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
