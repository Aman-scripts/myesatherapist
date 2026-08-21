"use client";

import React from "react";
import Image from "next/image";

const stepsData = [
  {
    number: "1",
    icon: "/psdprocess-section-schedule.svg",
    title: "Schedule Consultation",
    description:
      "Complete our simple online form to request a consultation with a licensed mental health professional in your state.",
  },
  {
    number: "2",
    icon: "/psdprocess-section-meetyourtherapist.svg",
    title: "Meet Your Therapist",
    description:
      "Connect with a licensed professional via secure video or phone. They'll assess whether a PSD letter may be appropriate for you.",
  },
  {
    number: "3",
    icon: "/psdprocess-section-letterqualified.svg",
    title: "Letter if Qualified",
    description:
      "If you qualify, you may receive your PSD letter within 24-72 hours via email, signed by your licensed professional.",
  },
];

export function PsdProcessSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Section Header (2-Column Layout on Desktop matching Frame 1000011750) */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-12 mb-12 lg:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1E3E47] leading-[1.16] tracking-tight max-w-xl">
            A simple, secure,
            <br className="hidden sm:block" />
            {" "}three-step process
          </h2>
          <p className="text-[#5F6B6F] text-base lg:text-[17px] font-medium leading-[1.65] max-w-xl lg:mt-2 font-[family-name:var(--font-lato)]">
            From consultation to letter delivery, everything happens online. No paperwork, no waiting rooms — just a clear path to professional documentation.
          </p>
        </div>

        {/* 2. Main Center Photo Container with Floating Heart-Paw Badges (Floating on Left & Right Edges matching Figma) */}
        <div className="relative w-full max-w-[840px] mx-auto mb-16 lg:mb-20">
          <div className="relative aspect-[16/9] w-full rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-lg border border-gray-100">
            <Image
              src="/psd-three-steps.png"
              alt="Woman smiling with psychiatric service dog"
              fill
              priority
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 840px"
            />
          </div>

          {/* Floating Circle Badge - Top Right Edge */}
          <div className="absolute top-[20%] right-[-24px] sm:top-[22%] sm:right-[-34px] w-[56px] h-[56px] sm:w-[73px] sm:h-[73px] z-20 pointer-events-none drop-shadow-md">
            <Image
              src="/psdprocess-section-icon.svg"
              alt=""
              width={73}
              height={73}
              unoptimized
              priority
              className="object-contain w-full h-full"
            />
          </div>

          {/* Floating Circle Badge - Bottom Left Edge */}
          <div className="absolute bottom-[20%] left-[-24px] sm:bottom-[22%] sm:left-[-34px] w-[56px] h-[56px] sm:w-[73px] sm:h-[73px] z-20 pointer-events-none drop-shadow-md">
            <Image
              src="/psdprocess-section-icon.svg"
              alt=""
              width={73}
              height={73}
              unoptimized
              priority
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* 3. Three Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1140px] mx-auto">
          {stepsData.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-[24px] p-6 sm:p-8 flex flex-col items-center text-center shadow-[0_4px_16px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)]"
            >
              {/* Step Number Circle Badge at Top-Left (3D Gold Circle with pure black drop shadow) */}
              <div className="absolute top-5 left-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#E2B755] text-[#1E3E47] font-heading font-bold text-base sm:text-lg flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
                {step.number}
              </div>

              {/* Step Icon Container (Soft grayish-teal tint with no border) */}
              <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-[#AEBBBE33] flex items-center justify-center mb-5 mt-3 shrink-0">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={36}
                  height={36}
                  unoptimized
                  priority
                  className="object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>

              {/* Step Title */}
              <h3 className="font-heading text-xl sm:text-[22px] font-bold text-[#1E3E47] mb-3">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-sm sm:text-[15px] text-[#5F6B6F] font-normal leading-[1.6] font-lato">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* 4. Bottom CTA Pill Button */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <a
            href="#pricing"
            className="inline-flex items-center gap-3.5 bg-[#1E3E47] hover:bg-[#163038] text-white font-bold text-base sm:text-[17px] pl-7 pr-3 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 group"
          >
            <span>Start Your Consultation</span>
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
              <Image
                src="/send-icon.svg"
                alt=""
                width={16}
                height={16}
                unoptimized
                priority
                className="object-contain transform group-hover:translate-x-0.5 transition-transform"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
