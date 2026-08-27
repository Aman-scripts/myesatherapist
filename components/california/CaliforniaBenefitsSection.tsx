"use client";

import React from "react";
import Image from "next/image";

// 6 benefits ordered as side-by-side row pairs (Financial left, Emotional right)
const benefitPairs = [
  // Row 1
  {
    title: "Helps Prevent Pet-Related Denials",
    description:
      "A valid ESA letter can be used to request reasonable housing accommodations under applicable housing laws, even in properties with standard pet restrictions.",
    icon: "/california-benefits-helpprevent.svg",
    category: "financial",
  },
  {
    title: "Eases Feelings of Isolation",
    description:
      "Daily companionship from your ESA reduces loneliness and gives you steady emotional support when life feels chaotic.",
    icon: "/california-benefits-easesfeeling.svg",
    category: "emotional",
  },
  // Row 2
  {
    title: "Workplace Considerations (When Applicable)",
    description:
      "In some situations, individuals may request workplace accommodations for an ESA, subject to employer policies and applicable laws.",
    icon: "/california-benefits-workplaceconsideration.svg",
    category: "financial",
  },
  {
    title: "Stronger Sense of Safety",
    description:
      "Your ESA's presence helps you feel more grounded and secure, especially during stressful or emotionally heavy moments.",
    icon: "/california-benefits-strongersense.svg",
    category: "emotional",
  },
  // Row 3
  {
    title: "Expanded Housing Options",
    description:
      "An ESA accommodation may provide access to a broader range of housing options beyond properties marketed as pet-friendly.",
    icon: "/california-benefits-expandhousing.svg",
    category: "financial",
  },
  {
    title: "Better Coping During High-Stress Situations",
    description:
      "ESAs offer quick comfort during tense moments, helping you calm down faster and regain emotional balance.",
    icon: "/california-benefits-bettercopping.svg",
    category: "emotional",
  },
];

export function CaliforniaBenefitsSection() {
  return (
    <section className="w-full bg-white my-0 py-0 overflow-hidden relative z-10">
      <div className="w-full max-w-[1440px] ml-auto mr-0 px-0 lg:pl-8 xl:pl-16 lg:pr-0">
        
        {/* On Desktop: 2 cols (Text left, Image right). On Mobile/Tablet: Stacked (Image first, Text after) */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-3 xl:gap-8 items-stretch">
          
          {/* Top Image Frame - Full Width Edge-to-Edge on Mobile & Tablet */}
          <div className="order-1 lg:order-2 lg:col-span-5 relative flex justify-end items-stretch w-full">
            {/* Mobile Image (< 640px) */}
            <div className="sm:hidden relative w-full aspect-[390/513]">
              <Image
                src="/californina-benefits-mobile.png"
                alt="Benefits of a Clinically Issued ESA Letter in California Mobile View"
                fill
                priority
                unoptimized
                className="object-cover object-top"
                sizes="100vw"
              />
              {/* Heart Icon Badge - Centered in artwork wave dip at 36.4% width */}
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
                alt="Benefits of a Clinically Issued ESA Letter in California Tablet View"
                fill
                priority
                unoptimized
                className="object-cover object-top"
                sizes="100vw"
              />
              {/* Heart Icon Badge - Centered in artwork wave dip at 33.8% width */}
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
                alt="Benefits of a Clinically Issued ESA Letter in California"
                fill
                priority
                unoptimized
                className="object-cover object-right pointer-events-none"
                sizes="42vw"
              />

              {/* Floating Green Heart Badge - Centered in left curve dip at 12.6% width, 31.3% height */}
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

          {/* Text Section - Displays AFTER Image with proper side padding on Mobile/Tablet */}
          <div className="order-2 lg:order-1 lg:col-span-7 px-4 sm:px-6 lg:px-0 py-2 sm:py-4 lg:py-5 xl:py-12 pr-0 lg:pr-3 xl:pr-4 flex flex-col justify-center">
            
            {/* Header Title & Subtitle */}
            <div className="mb-4 lg:mb-5 xl:mb-8">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[29px] xl:text-[42px] font-bold text-[#1E3E47] leading-[1.16] tracking-tight mb-2 lg:mb-2.5">
                Benefits of a Clinically
                <br />
                Issued ESA Letter in
                <br />
                California
              </h2>
              <p className="font-sans text-xs sm:text-sm lg:text-[12px] xl:text-base text-[#5F6B6F] font-medium leading-relaxed max-w-[520px]">
                A clinically issued ESA letter may support emotional well-being and, when applicable,
                help eligible individuals request reasonable housing accommodations for their
                companion animal.
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

            {/* 2-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-2.5 xl:gap-5 max-w-[650px] mb-4 sm:mb-6">
              {benefitPairs.map((item, idx) => (
                <React.Fragment key={item.title}>
                  {idx === 1 && (
                    <h3 className="font-heading text-base font-bold text-[#1E3E47] mt-3 sm:hidden">
                      Emotional Benefits :
                    </h3>
                  )}

                  <div className="bg-white rounded-[16px] lg:rounded-[18px] xl:rounded-[24px] p-3 sm:p-3.5 lg:p-3 xl:p-5 border border-[#EAE5DC] shadow-[0_4px_20px_rgba(0,0,0,0.025)] flex items-center gap-2.5 xl:gap-3.5 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(26,61,79,0.07)] hover:-translate-y-0.5 h-full">
                    {/* Left Icon */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-7.5 lg:h-7.5 xl:w-10 xl:h-10 shrink-0 relative flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={40}
                        height={40}
                        className="object-contain w-full h-full"
                      />
                    </div>

                    {/* Right Text Content */}
                    <div className="min-w-0 flex-1">
                      <h4 className="font-sans text-xs sm:text-[13px] lg:text-[11.5px] xl:text-[15.5px] font-bold text-[#1E3E47] mb-0.5 lg:mb-1 leading-snug">
                        {item.title}
                      </h4>
                      <p className="font-sans text-[10px] sm:text-[11px] lg:text-[10px] xl:text-[12.5px] text-[#5F6B6F] leading-tight xl:leading-normal font-medium">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </React.Fragment>
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



