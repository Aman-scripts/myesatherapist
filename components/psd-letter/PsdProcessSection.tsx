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

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

export function PsdProcessSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Section Header (2-Column Layout on Desktop matching Frame 1000011750) */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-12 mb-12 lg:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#2E5A66] leading-tight lg:leading-[54px] tracking-tight max-w-xl">
            A simple, secure, <br className="hidden sm:block" />
            three-step process
          </h2>
          <p className="text-[#5F6B6F] text-base lg:text-[18px] font-semibold leading-relaxed lg:leading-[30px] max-w-xl lg:mt-2 font-sans">
            From consultation to letter delivery, everything happens online. No paperwork, no waiting rooms — just a clear path to professional documentation.
          </p>
        </div>

        {/* 2. Main Center Photo Container with Floating Heart-Paw Badges */}
        <div className="relative w-full max-w-[1050px] mx-auto mb-16 lg:mb-20">
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
          <div className="absolute top-[18%] right-[-14px] sm:top-[20%] sm:right-[-18px] md:top-[22%] md:right-[-20px] lg:right-[-34px] w-[50px] h-[50px] sm:w-[58px] sm:h-[58px] lg:w-[73px] lg:h-[73px] z-20 pointer-events-none drop-shadow-md">
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
          <div className="absolute bottom-[18%] left-[-14px] sm:bottom-[20%] sm:left-[-18px] md:bottom-[22%] md:left-[-20px] lg:left-[-34px] w-[50px] h-[50px] sm:w-[58px] sm:h-[58px] lg:w-[73px] lg:h-[73px] z-20 pointer-events-none drop-shadow-md">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8 max-w-[1140px] mx-auto">
          {stepsData.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-[20px] md:rounded-[24px] p-6 sm:p-7 lg:p-8 flex flex-col items-center text-center shadow-[0px_2px_4px_rgba(0,0,0,0.15)]"
            >
              {/* Step Number Circle Badge at Top-Left */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-[#E8B92C] text-[#2E5A66] font-heading font-bold text-sm sm:text-base lg:text-lg flex items-center justify-center shadow-[0px_2px_4px_rgba(58,58,58,0.25)]">
                {step.number}
              </div>

              {/* Step Icon Container */}
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full bg-[#AEBBBE33] flex items-center justify-center mb-4 sm:mb-5 mt-2 sm:mt-3 shrink-0">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={36}
                  height={36}
                  unoptimized
                  priority
                  className="object-contain w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>

              {/* Step Title */}
              <h3
                className="font-heading text-lg sm:text-xl lg:text-[24px] font-bold mb-2 sm:mb-3 bg-clip-text text-transparent"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-sm sm:text-[16px] text-[#5F6B6F] font-semibold leading-[24px] sm:leading-[26px] font-sans">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* 4. Bottom CTA Pill Button */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <a
            href="#pricing"
            className="inline-flex items-center justify-between min-w-[220px] h-[48px] rounded-[30px] pl-6 pr-1.5 text-white font-semibold text-[15px] sm:text-[16px] shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:opacity-95 transition-opacity"
            style={{ backgroundImage: TEAL_GRADIENT }}
          >
            <span className="font-sans mr-3">Start Your Consultation</span>
            <span className="w-[36px] h-[36px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
              <Image
                src="/send-icon.svg"
                alt=""
                width={18}
                height={20}
                className="w-[18px] h-[20px]"
              />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
