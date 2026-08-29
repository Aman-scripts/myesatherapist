"use client";

import React from "react";
import Image from "next/image";

const financialBenefits = [
  {
    title: "Live Stress Free with Your ESA",
    description:
      "Request housing accommodations in Hawaii to live with your emotional support animal even in properties with strict no-pet rules.",
    icon: "/whomayqualifies-california_chronicworry.svg",
  },
  {
    title: "Protection From Pet Fees and Rent",
    description:
      "Under federal housing rules, valid ESA documentation allows tenants to avoid mandatory pet rent, pet deposits, or application charges.",
    icon: "/california-benefits-workplaceconsideration.svg",
  },
  {
    title: "Exemption from Breed & Weight Limits",
    description:
      "Landlords cannot apply standard size, weight, or breed restrictions to approved emotional support animals in Hawaii housing.",
    icon: "/california-benefits-workplaceconsideration.svg",
  },
];

const emotionalBenefits = [
  {
    title: "Comfort in Island & Isolated Settings",
    description:
      "An ESA provides steady companion support that helps manage feelings of isolation or displacement common in island environments.",
    icon: "/whomayqualifies-panicattack.svg",
  },
  {
    title: "Relief from Climate & Life Transition Stress",
    description:
      "Emotional support animals offer grounding comfort during environmental or lifestyle changes and relocation to Hawaii.",
    icon: "/california-benefits-strongersense.svg",
  },
  {
    title: "Structure and Routine Encouragement",
    description:
      "Daily care and companionship of an ESA promote structure, motivation, and positive emotional health.",
    icon: "/california-benefits-strongersense.svg",
  },
];

const benefitPairs = [
  { financial: financialBenefits[0], emotional: emotionalBenefits[0] },
  { financial: financialBenefits[1], emotional: emotionalBenefits[1] },
  { financial: financialBenefits[2], emotional: emotionalBenefits[2] },
];

export function HawaiiBenefitsSection() {
  return (
    <section className="w-full bg-white my-0 py-0 overflow-hidden relative z-10">
      <div className="w-full max-w-[1440px] ml-auto mr-0 px-0 lg:pl-8 xl:pl-16 lg:pr-0">

        {/* On Desktop: 2 cols (Text left, Image right). On Mobile/Tablet: Stacked (Image first, Text after) */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-3 xl:gap-8 items-stretch">

          {/* Top Image Frame */}
          <div className="order-1 lg:order-2 lg:col-span-5 relative flex justify-end items-stretch w-full">
            {/* Mobile Image (< 640px) */}
            <div className="sm:hidden relative w-full aspect-[390/513]">
              <Image
                src="/californina-benefits-mobile.png"
                alt="Benefits of Having an ESA Letter in Hawaii Mobile View"
                fill
                priority
                unoptimized
                className="object-cover object-top"
                sizes="100vw"
              />
              <div className="absolute bottom-0 left-[36.4%] -translate-x-1/2 translate-y-1/2 z-10 w-10 h-10">
                <Image
                  src="/whomayqualifies-california_icon.svg"
                  alt="Heart Icon"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
            </div>

            {/* Tablet Image (640px - 1023px) */}
            <div className="hidden sm:block lg:hidden relative w-full aspect-[834/1050]">
              <Image
                src="/californina-benefits-tablet.png"
                alt="Benefits of Having an ESA Letter in Hawaii Tablet View"
                fill
                priority
                unoptimized
                className="object-cover object-top"
                sizes="100vw"
              />
              <div className="absolute bottom-0 left-[33.8%] -translate-x-1/2 translate-y-1/2 z-10 w-12 h-12">
                <Image
                  src="/whomayqualifies-california_icon.svg"
                  alt="Heart Icon"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
            </div>

            {/* Desktop Image (1024px+) */}
            <div className="hidden lg:block relative w-full h-full lg:min-h-0 flex items-stretch">
              <Image
                src="/california-benefits-clinical-issued.png"
                alt="Benefits of Having an ESA Letter in Hawaii"
                fill
                priority
                unoptimized
                className="object-cover object-right pointer-events-none"
                sizes="42vw"
              />
              <div className="absolute left-[12.6%] top-[31.3%] -translate-x-1/2 -translate-y-1/2 z-10 w-11 h-11 xl:w-16 xl:h-16">
                <Image
                  src="/whomayqualifies-california_icon.svg"
                  alt="Heart Icon"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="order-2 lg:order-1 lg:col-span-7 px-4 sm:px-6 lg:px-0 py-2 sm:py-4 lg:py-5 xl:py-12 pr-0 lg:pr-3 xl:pr-4 flex flex-col justify-center">

            {/* Header Title & Subtitle */}
            <div className="mb-4 lg:mb-5 xl:mb-8">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[29px] xl:text-[42px] font-bold text-[#1E3E47] leading-[1.16] tracking-tight mb-2 lg:mb-2.5">
                Benefits of Having an ESA
                <br />
                Letter in Hawaii
              </h2>
              <p className="font-sans text-xs sm:text-sm lg:text-[12px] xl:text-base text-[#5F6B6F] font-medium leading-relaxed max-w-[520px]">
                Look at the ways in which an emotional support animal letter in Hawaii offers accommodation benefits and supports overall mental and emotional well-being.
              </p>
            </div>

            {/* Subheaders for Financial vs Emotional */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-2.5 xl:gap-5 max-w-[650px] mb-2 lg:mb-3">
              <h3 className="font-heading text-base sm:text-lg lg:text-[16.5px] xl:text-[22px] font-bold text-[#1E3E47]">
                Financial Benefits :
              </h3>
              <h3 className="font-heading text-base sm:text-lg lg:text-[16.5px] xl:text-[22px] font-bold text-[#1E3E47] hidden sm:block">
                Emotional Benefits :
              </h3>
            </div>

            {/* Row by Row Equal-Height Grid */}
            <div className="space-y-3 lg:space-y-2.5 xl:space-y-4 max-w-[650px] mb-6">
              {benefitPairs.map((pair, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-2.5 xl:gap-5 items-stretch">
                  {/* Financial Card */}
                  <div className="bg-white rounded-[16px] lg:rounded-[18px] xl:rounded-[24px] p-3.5 sm:p-4 lg:p-3 xl:p-5 border border-[#EAE5DC] shadow-[0_4px_20px_rgba(0,0,0,0.025)] flex items-center gap-2.5 xl:gap-3.5 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(26,61,79,0.07)] hover:-translate-y-0.5 h-full">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-7.5 lg:h-7.5 xl:w-10 xl:h-10 shrink-0 relative flex items-center justify-center">
                      <Image
                        src={pair.financial.icon}
                        alt={pair.financial.title}
                        width={40}
                        height={40}
                        className="object-contain w-full h-full"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="font-sans text-xs sm:text-[13px] lg:text-[11.5px] xl:text-[15.5px] font-bold text-[#1E3E47] mb-0.5 lg:mb-1 leading-snug">
                        {pair.financial.title}
                      </h4>
                      <p className="font-sans text-[10px] sm:text-[11px] lg:text-[10px] xl:text-[12.5px] text-[#5F6B6F] leading-tight xl:leading-normal font-medium">
                        {pair.financial.description}
                      </p>
                    </div>
                  </div>

                  {/* Emotional Card */}
                  <div className="bg-white rounded-[16px] lg:rounded-[18px] xl:rounded-[24px] p-3.5 sm:p-4 lg:p-3 xl:p-5 border border-[#EAE5DC] shadow-[0_4px_20px_rgba(0,0,0,0.025)] flex items-center gap-2.5 xl:gap-3.5 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(26,61,79,0.07)] hover:-translate-y-0.5 h-full">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-7.5 lg:h-7.5 xl:w-10 xl:h-10 shrink-0 relative flex items-center justify-center">
                      <Image
                        src={pair.emotional.icon}
                        alt={pair.emotional.title}
                        width={40}
                        height={40}
                        className="object-contain w-full h-full"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="font-sans text-xs sm:text-[13px] lg:text-[11.5px] xl:text-[15.5px] font-bold text-[#1E3E47] mb-0.5 lg:mb-1 leading-snug">
                        {pair.emotional.title}
                      </h4>
                      <p className="font-sans text-[10px] sm:text-[11px] lg:text-[10px] xl:text-[12.5px] text-[#5F6B6F] leading-tight xl:leading-normal font-medium">
                        {pair.emotional.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA Button */}
            <div>
              <a
                href="#faq"
                className="inline-flex items-center gap-2.5 lg:gap-3 pl-5 lg:pl-5 xl:pl-6 pr-1.5 lg:pr-2 py-1.5 lg:py-2 rounded-full bg-[#184F59] hover:bg-[#133F47] text-white font-bold text-xs lg:text-[13px] xl:text-[15px] transition-all shadow-md group"
              >
                <span>Apply your ESA Letter Now</span>
                <span className="w-7 h-7 lg:w-7 lg:h-7 xl:w-8 xl:h-8 rounded-full bg-white text-[#184F59] flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:translate-x-0.5">
                  <Image src="/send-icon.svg" alt="" width={16} height={16} className="w-3.5 h-3.5 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4" />
                </span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
