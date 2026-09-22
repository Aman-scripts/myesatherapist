"use client";

import React from "react";
import Image from "next/image";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

const EVALUATION_STEPS = [
  {
    title: "Select Your Package",
    description: "Choose the ESA or PSD option that fits your needs and schedule your appointment.",
    icon: "/psd-letter/psdprocess-section-schedule.svg",
  },
  {
    title: "Card Authorization",
    description: "Your card is authorized (not charged) to hold your appointment slot.",
    icon: "/about-us/about_us-transparetesa-secure_payment-icon.svg",
  },
  {
    title: "Attend Evaluation",
    description: "Speak with a U.S.-licensed mental health professional via secure telehealth.",
    icon: "/psd-letter/psdprocess-section-meetyourtherapist.svg",
  },
  {
    title: "Receive Your Letter",
    description: "If approved, payment is collected and your letter is emailed immediately.",
    icon: "/psd-letter/psdprocess-section-letterqualified.svg",
  },
];

export function PricingWhyTrustSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 sm:py-20 xl:py-[70px] overflow-visible">
      <div className="max-w-[1446px] mx-auto px-4 sm:px-8 xl:px-[80px]">
        {/* Section Heading */}
        <div className="text-center max-w-[854px] mx-auto mb-16 sm:mb-20 space-y-3 sm:space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl xl:text-[44px] font-bold text-[#2E5A66] leading-tight xl:leading-[54px] tracking-[-0.00015em]">
            You Only Pay After Your Evaluation
          </h2>
          <p className="font-sans font-semibold text-sm sm:text-base xl:text-[18px] text-[#5F6B6F] leading-relaxed xl:leading-[30px] max-w-[854px] mx-auto">
            Our transparent 4-step process ensures you are only charged once your telehealth evaluation is complete and approved.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 sm:gap-8 lg:gap-6 max-w-[1286px] mx-auto pt-2">
          {EVALUATION_STEPS.map((item, index) => (
            <div
              key={index}
              className="relative w-full sm:max-w-[302px] mx-auto min-h-[210px] rounded-[20px] bg-[#E8B92C] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex flex-col justify-end"
            >
              {/* Floating Top Circular Badge with Icon */}
              <div className="absolute -top-[32px] left-1/2 -translate-x-1/2 w-[74.56px] h-[74.56px] rounded-full bg-white shadow-[0px_1.88955px_3.7791px_rgba(0,0,0,0.25)] flex items-center justify-center p-3 z-20">
                <div className="w-[34px] h-[34px] relative flex items-center justify-center">
                  <Image
            quality={90}
                    src={item.icon}
                    alt={item.title}
                    width={34}
                    height={34}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              {/* White Inner Card Body */}
              <div className="w-full min-h-[202px] bg-white rounded-[20px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] pt-12 pb-5 px-4 flex flex-col items-center justify-center text-center">
                {/* Title with Teal Gradient */}
                <h3
                  className="font-[family-name:var(--font-lato)] font-bold text-[19px] sm:text-[20px] xl:text-[22px] leading-[28px] tracking-[-0.017em] bg-clip-text text-transparent mb-2"
                  style={{ backgroundImage: TEAL_GRADIENT }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-sans font-semibold text-[13px] sm:text-[14px] xl:text-[15px] leading-[22px] xl:leading-[25px] text-[#5F6B6F] max-w-[250px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
