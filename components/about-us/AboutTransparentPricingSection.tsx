"use client";

import React from "react";
import Image from "next/image";

const cards = [
  {
    icon: "/about_us-transparetesa-refund_policy-icon.svg",
    title: "Refund Policy",
    description:
      "If a licensed mental health professional determines an ESA letter is not clinically appropriate, a refund may be provided according to our policy.",
  },
  {
    icon: "/about_us-transparetesa-secure_payment-icon.svg",
    title: "Secure Payment",
    description:
      "All payments are processed securely through encrypted systems to ensure your financial information is protected.",
  },
  {
    icon: "/about_us-transparetesa-nohidden_fees-icon.svg",
    title: "No Hidden Fees",
    description:
      "Upfront, transparent pricing with no surprise charges or recurring fees. One payment covers the complete evaluation.",
  },
];

export function AboutTransparentPricingSection() {
  return (
    <section className="w-full bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 xl:py-24 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto mb-14 sm:mb-16 lg:mb-20 space-y-3 sm:space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[38px] xl:text-[44px] font-bold text-[#2E5A66] leading-tight lg:leading-[48px] xl:leading-[54px] tracking-[-0.00015em]">
            Transparent ESA Protection
          </h2>
          <p className="font-sans font-semibold text-sm sm:text-base lg:text-[16px] xl:text-[18px] text-[#5F6B6F] leading-relaxed lg:leading-[26px] xl:leading-[30px] max-w-[700px] mx-auto">
            We believe in upfront pricing and honest policies with no surprises.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 sm:gap-10 lg:gap-5 xl:gap-8 pt-4 sm:pt-6 max-w-[1280px] mx-auto">
          {cards.map((card, idx) => (
            <div key={idx} className="relative flex flex-col items-center">
              {/* Top Floating Circular Icon Badge */}
              <div className="absolute -top-8 sm:-top-9 lg:-top-10 z-10 w-[72px] h-[72px] sm:w-[82px] sm:h-[82px] lg:w-[88px] lg:h-[88px] xl:w-[96px] xl:h-[96px] rounded-full bg-white shadow-[0px_4px_14px_rgba(0,0,0,0.12)] flex items-center justify-center p-3.5 sm:p-4 lg:p-4.5 border border-[#FAF7F2]">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={44}
                  height={44}
                  unoptimized
                  className="object-contain w-7 h-7 sm:w-9 sm:h-9 lg:w-9 lg:h-9 xl:w-11 xl:h-11"
                />
              </div>

              {/* Card Body with Gold Top Accent Bar */}
              <div className="w-full min-h-[200px] sm:min-h-[215px] lg:min-h-[225px] bg-white rounded-[20px] shadow-[0px_4px_16px_rgba(0,0,0,0.06)] border-t-[7px] border-t-[#E8B92C] pt-12 sm:pt-14 lg:pt-15 pb-6 sm:pb-7 px-4 sm:px-5 lg:px-5 xl:px-7 flex flex-col items-center justify-center text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                <h3
                  className="font-[family-name:var(--font-lato)] font-bold text-lg sm:text-xl lg:text-[21px] xl:text-2xl leading-tight bg-clip-text text-transparent mb-2.5"
                  style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                >
                  {card.title}
                </h3>
                <p className="font-sans font-semibold text-xs sm:text-sm lg:text-[13.5px] xl:text-[15px] text-[#5F6B6F] leading-relaxed max-w-[320px]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
