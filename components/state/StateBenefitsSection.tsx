"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { StateData } from "@/data/statesData";

export function StateBenefitsSection({ data }: { data: StateData }) {
  const stateName = data.name;

  const financialBenefits = [
    {
      title: "Helps Prevent Pet-Related Denials",
      description: "A valid ESA letter can be used to request reasonable housing accommodations under applicable housing laws, even in properties with standard pet restrictions.",
      icon: "/whomayqualifies-california_chronicworry.svg",
    },
    {
      title: "Workplace Considerations (When Applicable)",
      description: "In some situations, individuals may request workplace accommodations for an ESA, subject to employer policies and applicable laws.",
      icon: "/california-benefits-workplaceconsideration.svg",
    },
    {
      title: "Expanded Housing Options",
      description: "An ESA accommodation may provide access to a broader range of housing options beyond properties marketed as pet-friendly.",
      icon: "/california-benefits-workplaceconsideration.svg",
    },
  ];

  const emotionalBenefits = [
    {
      title: "Eases Feelings of Isolation",
      description: "Daily companionship from your ESA reduces loneliness and gives you steady emotional support when life feels chaotic.",
      icon: "/whomayqualifies-panicattack.svg",
    },
    {
      title: "Stronger Sense of Safety",
      description: "Your ESA’s presence helps you feel more grounded and secure, especially during stressful or emotionally heavy moments.",
      icon: "/california-benefits-strongersense.svg",
    },
    {
      title: "Better Coping During High-Stress Situations",
      description: "ESAs offer quick comfort during tense moments, helping you calm down faster and regain emotional balance.",
      icon: "/california-benefits-strongersense.svg",
    },
  ];

  const benefitPairs = [
    { financial: financialBenefits[0], emotional: emotionalBenefits[0] },
    { financial: financialBenefits[1], emotional: emotionalBenefits[1] },
    { financial: financialBenefits[2], emotional: emotionalBenefits[2] },
  ];

  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white py-0 lg:py-16 overflow-hidden relative z-10">
      <div className="w-full max-w-[1440px] mx-auto px-0 lg:pl-16 lg:pr-0">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-0 lg:gap-4 xl:gap-8 items-center">
          
          {/* Top Image for Mobile/Tablet (Full Width, No Gap) & Right Image for Desktop */}
          <div className="order-1 lg:order-2 lg:col-span-5 relative w-full flex justify-end items-center">
            {/* Mobile View Image: Full width, edge-to-edge */}
            <div className="sm:hidden relative w-full aspect-[390/513]">
              <Image
                src="/californina-benefits-mobile.png"
                alt={`Benefits of ESA Letter in ${stateName} Mobile View`}
                fill
                priority
                unoptimized
                className="object-cover object-top"
                sizes="100vw"
              />
              {/* Heart Icon positioned directly on the bottom wave curve dip */}
              <div className="absolute bottom-0 left-[36.4%] -translate-x-1/2 translate-y-1/2 z-10 w-11 h-11">
                <Image
                  src="/whomayqualifies-california_icon.svg"
                  alt="Heart Icon"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
            </div>

            {/* Tablet View Image: Full width, edge-to-edge */}
            <div className="hidden sm:block lg:hidden relative w-full aspect-[834/1050]">
              <Image
                src="/californina-benefits-tablet.png"
                alt={`Benefits of ESA Letter in ${stateName} Tablet View`}
                fill
                priority
                unoptimized
                className="object-cover object-top"
                sizes="100vw"
              />
              {/* Heart Icon positioned directly on the bottom wave curve dip */}
              <div className="absolute bottom-0 left-[33.8%] -translate-x-1/2 translate-y-1/2 z-10 w-13 h-13">
                <Image
                  src="/whomayqualifies-california_icon.svg"
                  alt="Heart Icon"
                  width={52}
                  height={52}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
            </div>

            {/* Desktop View Image */}
            <div className="hidden lg:flex items-center justify-end w-full h-full">
              <div className="relative w-full max-w-[620px] aspect-[864/1451] ml-auto">
                <Image
                  src="/california-benefits-clinical-issued.png"
                  alt={`Benefits of ESA in ${stateName}`}
                  fill
                  priority
                  unoptimized
                  className="object-contain object-right pointer-events-none"
                  sizes="45vw"
                />
                <div className="absolute left-[5.4%] top-[39%] -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 xl:w-16 xl:h-16">
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
          </div>

          {/* Left Column: Frame 1000011976 */}
          <div className="order-2 lg:order-1 lg:col-span-7 px-4 sm:px-6 lg:px-0 pt-8 sm:pt-12 pb-8 lg:py-6 pr-0 lg:pr-4 flex flex-col justify-center">
            
            {/* Header: Frame 1000011447 */}
            <div className="mb-6 lg:mb-8 space-y-3">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[44px] font-bold text-[#2E5A66] leading-[1.23] tracking-[-0.00015em]">
                Benefits of a Clinically Issued ESA Letter in {stateName}
              </h2>
              <p className="font-sans text-sm sm:text-base lg:text-[18px] text-[#5F6B6F] font-semibold leading-[1.67] max-w-[568px]">
                A clinically issued ESA letter may support emotional well-being and, when applicable, help eligible individuals request reasonable housing accommodations for their companion animal.
              </p>
            </div>

            {/* Sub-headers: Frame 1000012006 */}
            <div className="mb-4">
              <div className="grid grid-cols-2 gap-4 max-w-[630px]">
                <h3 className="font-heading text-[18px] sm:text-[24px] lg:text-[28px] font-bold text-[#5F6B6F] leading-[36px] tracking-[-0.00015em]">
                  Financial Benefits :
                </h3>
                <h3 className="font-heading text-[18px] sm:text-[24px] lg:text-[28px] font-bold text-[#5F6B6F] leading-[36px] tracking-[-0.00015em]">
                  Emotional Benefits :
                </h3>
              </div>
            </div>

            {/* Cards Grid: Frame 1000011973 */}
            <div className="space-y-4 max-w-[630px] mb-8">
              {benefitPairs.map((pair, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Financial Card */}
                  <div className="bg-white rounded-[20px] p-[16px_12px] shadow-[0px_0.4px_3.6px_rgba(0,0,0,0.11)] flex items-start gap-3 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(26,61,79,0.07)]">
                    <div className="w-[50px] h-[50px] shrink-0 relative flex items-center justify-center">
                      <Image
                        src={pair.financial.icon}
                        alt={pair.financial.title}
                        width={50}
                        height={50}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div className="min-w-0 flex-1 space-y-1">
                      <h4 className="font-sans text-[15px] sm:text-[17px] font-semibold text-[#2E5A66] leading-[24px]">
                        {pair.financial.title}
                      </h4>
                      <p className="font-sans text-[12px] sm:text-[13px] text-[#5F6B6F] font-semibold leading-[22px]">
                        {pair.financial.description}
                      </p>
                    </div>
                  </div>

                  {/* Emotional Card */}
                  <div className="bg-white rounded-[20px] p-[16px_12px] shadow-[0px_0.4px_3.6px_rgba(0,0,0,0.11)] flex items-start gap-3 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(26,61,79,0.07)]">
                    <div className="w-[50px] h-[50px] shrink-0 relative flex items-center justify-center">
                      <Image
                        src={pair.emotional.icon}
                        alt={pair.emotional.title}
                        width={50}
                        height={50}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div className="min-w-0 flex-1 space-y-1">
                      <h4 className="font-sans text-[15px] sm:text-[17px] font-semibold text-[#2E5A66] leading-[24px]">
                        {pair.emotional.title}
                      </h4>
                      <p className="font-sans text-[12px] sm:text-[13px] text-[#5F6B6F] font-semibold leading-[22px]">
                        {pair.emotional.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Button: Frame 1000011890 */}
            <div>
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-2 w-full max-w-[290px] h-[48px] rounded-[30px] bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] hover:opacity-95 text-white font-semibold text-[16px] leading-[26px] font-sans shadow-[0px_2px_4px_rgba(0,0,0,0.15)] transition-all duration-200 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5] text-[#FAF7F2] transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
