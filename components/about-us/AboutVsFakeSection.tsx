"use client";

import React from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";

const legitimatePoints = [
  "State-licensed mental health professionals",
  "Based on professional assessment",
  "Audio / video consultation on secure platform",
  "Follows federal housing guidelines",
  "Clear steps and guidance",
  "Confidential, HIPAA-compliant",
];

const fakePoints = [
  "Often automated / unlicensed",
  "Instant approval, no evaluation",
  "Privacy may be lacking",
  "Often non-compliant",
  "Hidden fees / process unclear",
  "Excessive personal info requested",
];

export function AboutVsFakeSection() {
  return (
    <section className="w-full bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 xl:py-24 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-[920px] mx-auto mb-12 sm:mb-14 lg:mb-16 space-y-3 sm:space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[38px] xl:text-[44px] font-bold text-[#2E5A66] leading-tight lg:leading-[48px] xl:leading-[54px] tracking-[-0.00015em]">
            My ESA Therapist vs Fake ESA Sites
          </h2>
          <p className="font-sans font-semibold text-sm sm:text-base lg:text-[16px] text-[#5F6B6F] leading-relaxed max-w-[760px] mx-auto">
            See how legitimate, licensed evaluations differ from automated approval mills.
          </p>
        </div>

        {/* 2 Comparison Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-6 xl:gap-8 max-w-[1280px] mx-auto">
          {/* Left Card: My ESA Therapist (Legitimate Green) */}
          <div className="bg-[#EBF7EE] rounded-[24px] sm:rounded-[30px] border border-[#CDEED5] shadow-[0_4px_25px_rgba(0,0,0,0.03)] flex flex-col overflow-hidden transition-all duration-200 hover:shadow-md">
            {/* Header Image */}
            <div className="relative w-full aspect-[626/268] sm:aspect-[16/8] overflow-hidden shrink-0">
              <Image
                src="/california-scams-whatyouneed.png"
                alt="My ESA Therapist Legitimate Evaluation"
                fill
                priority
                unoptimized
                className="object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Card Content */}
            <div className="p-5 sm:p-7 lg:p-7 xl:p-10 flex flex-col flex-1">
              <h3 className="font-heading text-xl sm:text-2xl lg:text-[25px] xl:text-[28px] font-bold text-[#2E5A66] text-center mb-5 sm:mb-6 lg:mb-8 leading-tight">
                My ESA Therapist
              </h3>

              <div className="space-y-3.5 sm:space-y-4 xl:space-y-5 flex-1">
                {legitimatePoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3 sm:gap-3.5 xl:gap-4">
                    <div
                      className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full text-white flex items-center justify-center shrink-0 shadow-xs"
                      style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                    >
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                    </div>
                    <span className="font-sans font-semibold text-xs sm:text-sm lg:text-[15px] xl:text-[17px] text-[#2E5A66] leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card: Fake ESA Sites (Red Warning) */}
          <div className="bg-[#FFF0F0] rounded-[24px] sm:rounded-[30px] border border-[#FCDADA] shadow-[0_4px_25px_rgba(0,0,0,0.03)] flex flex-col overflow-hidden transition-all duration-200 hover:shadow-md">
            {/* Header Image */}
            <div className="relative w-full aspect-[626/268] sm:aspect-[16/8] overflow-hidden shrink-0">
              <Image
                src="/california-scams-commonesascams.png"
                alt="Fake ESA Websites Warning"
                fill
                priority
                unoptimized
                className="object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Card Content */}
            <div className="p-5 sm:p-7 lg:p-7 xl:p-10 flex flex-col flex-1">
              <h3 className="font-heading text-xl sm:text-2xl lg:text-[25px] xl:text-[28px] font-bold text-[#E42529] text-center mb-5 sm:mb-6 lg:mb-8 leading-tight">
                Fake ESA Sites
              </h3>

              <div className="space-y-3.5 sm:space-y-4 xl:space-y-5 flex-1">
                {fakePoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3 sm:gap-3.5 xl:gap-4">
                    <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-[#E42529] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                    </div>
                    <span className="font-sans font-semibold text-xs sm:text-sm lg:text-[15px] xl:text-[17px] text-[#E42529] leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
