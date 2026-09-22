"use client";

import React from "react";
import Image from "next/image";

export function DoctorsMatchingSection() {
  const steps = [
    {
      num: "01",
      title: "Start Evaluation",
      desc: "Begin your secure online evaluation through our HIPAA-compliant platform.",
      icon: (
        <Image
            quality={90}
          src="/doctors/doctors_howyouarematched_startevalutation.svg"
          alt=""
          width={24}
          height={24}
          className="w-6 h-6 object-contain"
        />
      ),
      desktopOffsetClass: "lg:translate-y-0",
    },
    {
      num: "02",
      title: "Get Matched",
      desc: "We connect you with a licensed professional authorized to practice in your state.",
      icon: (
        <Image
            quality={90}
          src="/doctors/doctors_howyouarematched_getmatchec.svg"
          alt=""
          width={24}
          height={24}
          className="w-6 h-6 object-contain"
        />
      ),
      desktopOffsetClass: "lg:translate-y-[40px]",
    },
    {
      num: "03",
      title: "Receive Decision",
      desc: "Your therapist provides their independent clinical assessment.",
      icon: (
        <Image
            quality={90}
          src="/doctors/doctors_howyouarematched_receivedecision.svg"
          alt=""
          width={24}
          height={24}
          className="w-6 h-6 object-contain"
        />
      ),
      desktopOffsetClass: "lg:translate-y-[80px]",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F2] w-full overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Frame 1000011447 (Header, gap: 8px) */}
        <div className="text-center mb-12 lg:mb-[80px] max-w-[987px] mx-auto flex flex-col items-center gap-[8px]">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#2E5A66] leading-[1.18] sm:leading-[1.2] lg:leading-[54px] tracking-[-0.00015em] max-w-[742px]">
            How You&apos;re Matched With a Provider
          </h2>
          <p className="font-sans font-semibold text-base sm:text-lg lg:text-[18px] text-[#5F6B6F] leading-relaxed lg:leading-[30px] max-w-[987px]">
            When you begin an evaluation, you are matched with a licensed mental health professional authorized in your state.
          </p>
        </div>

        {/* Frame 1000011972 (3 Process Cards with cascading offset, width: 1272px, height: 379px) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-[20px] max-w-[1272px] mx-auto pb-6 sm:pb-12 lg:pb-[90px]">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`w-full min-h-[225px] p-[24px_22px] bg-white rounded-[30px] shadow-[0px_1px_7px_rgba(0,0,0,0.08)] border border-[#EAE5DC]/60 flex flex-col justify-between transition-all duration-300 hover:shadow-md ${step.desktopOffsetClass}`}
            >
              {/* Frame 1000011971 (Header: 46px Circle Icon + Watermark Number) */}
              <div className="flex items-center justify-between w-full h-[66px]">
                {/* Frame 1000011969 - 46px Gradient Icon Badge */}
                <div
                  className="w-[46px] h-[46px] rounded-full flex items-center justify-center shrink-0 shadow-xs"
                  style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                >
                  {step.icon}
                </div>

                {/* 01 / 02 / 03 Step Number (Plus Jakarta Sans 700, 54px, 20% opacity) */}
                <span aria-hidden="true" className="font-sans font-bold text-[50px] sm:text-[54px] leading-[66px] text-[#5F6B6F] opacity-20 select-none tracking-tight">
                  {step.num}
                </span>
              </div>

              {/* Frame 1000011970 (Title + Description, gap: 8px) */}
              <div className="flex flex-col items-start gap-[8px] w-full pt-3">
                <h3 className="font-heading font-bold text-[22px] sm:text-[24px] leading-[30px] sm:leading-[32px] text-[#2E5A66]">
                  {step.title}
                </h3>
                <p className="font-sans font-semibold text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-[#5F6B6F]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
