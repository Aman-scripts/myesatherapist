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
    <section className="relative overflow-hidden bg-white w-full py-12 lg:py-0">
      {/* Desktop Container (Exact Figma Frame 1000011701: 1442x701) */}
      <div className="hidden lg:flex relative w-full max-w-[1442px] mx-auto items-center justify-between min-h-[701px]">
        {/* Left Content Area (Figma Frame 1000011682: width 737px at x=78) */}
        <div className="w-[737px] pl-[78px] pr-4 py-8 z-10 flex flex-col justify-between shrink-0">
          <div className="space-y-5">
            <h2 className="font-heading text-[44px] font-bold text-[#2E5A66] leading-[54px] tracking-[-0.0066em]">
              Do You Need an Emotional Support Animal?
            </h2>

            <div className="text-[#5F6B6F] text-[18px] font-semibold leading-[30px] font-sans space-y-3.5">
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

              <p className="pt-1 text-[18px] leading-[30px]">
                It’s important to note that an ESA should only be recommended following a proper evaluation by a licensed mental health professional. Documentation obtained without professional guidance may not be valid or recognized under housing laws.
              </p>
            </div>
          </div>

          {/* CTA Button (Figma: 179x48px) */}
          <div className="pt-6">
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
                  height={22}
                  className="translate-x-[1px]"
                  style={{ width: "auto", height: "auto" }}
                />
              </span>
            </a>
          </div>
        </div>

        {/* Right Visual Frame (Figma Frame 1000011732: 594x701px) */}
        <div className="relative w-[594px] h-[701px] shrink-0 pointer-events-none">
          {/* Background Decorative Line SVG */}
          <div className="absolute left-0 top-[15px] w-[81px] h-[669px] z-0">
            <Image
              src="/doyouneed-emotional-support-section-line.svg"
              alt=""
              width={81}
              height={669}
              className="object-contain"
              style={{ width: "auto", height: "auto" }}
            />
          </div>

          {/* Main Photo (Cleaned watermark & smooth continuous bottom curve) */}
          <div className="absolute right-0 top-0 w-[571px] h-[701px] z-10">
            <Image
              src="/doyouneed-esa-perfect-v3.png"
              alt="Emotional support dog and owner"
              fill
              priority
              unoptimized
              className="object-contain object-right"
              sizes="571px"
            />
          </div>

          {/* Floating Circle Badge at Curve Apex */}
          <div className="absolute left-[-14px] top-[335px] w-[73px] h-[73px] z-20 drop-shadow-[0_2px_6px_rgba(0,0,0,0.18)]">
            <Image
              src="/doyouneed-emotional-support-icon.svg"
              alt="ESA Badge"
              width={73}
              height={73}
              className="object-contain rounded-full bg-[#FDFBF7]"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
      </div>

      {/* Mobile / Tablet View */}
      <div className="lg:hidden py-8 space-y-8 w-full">
        {/* Full-width Image Container (Edge to Edge) */}
        <div className="w-full">
          {/* Mobile Image (< sm / under 640px) */}
          <div className="block sm:hidden relative w-full aspect-[390/475] rounded-none">
            <Image
              src="/mobile-do-you-need-emotional-support.png"
              alt="Do You Need an Emotional Support Animal"
              fill
              unoptimized
              priority
              className="object-contain rounded-none"
              sizes="100vw"
            />
          </div>

          {/* Tablet Image (sm: to lg: / 640px to 1023px) */}
          <div className="hidden sm:block lg:hidden relative w-full aspect-[834/533] rounded-none">
            <Image
              src="/tablet-do-you-need-emotional-support.png"
              alt="Do You Need an Emotional Support Animal"
              fill
              unoptimized
              priority
              className="object-contain rounded-none"
              sizes="100vw"
            />
          </div>
        </div>

        {/* Text & Button Container */}
        <div className="px-4 sm:px-6 max-w-3xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#2E5A66] leading-tight tracking-[-0.0066em]">
              Do You Need an Emotional Support Animal?
            </h2>

            <div className="text-[#5F6B6F] text-base sm:text-[18px] font-semibold leading-relaxed space-y-3">
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
                <Image src="/send-icon.svg" alt="" width={20} height={20} style={{ width: "auto", height: "auto" }} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
