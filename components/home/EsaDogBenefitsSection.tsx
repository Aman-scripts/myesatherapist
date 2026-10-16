"use client";

import React from "react";
import Image from "next/image";

interface BenefitCard {
  title: string;
  description: string;
  icon: string;
}

const BENEFITS: BenefitCard[] = [
  {
    title: "Reduces Stress & Anxiety",
    description:
      "Petting and being near your dog can help calm your nervous system and ease tension.",
    icon: "/states/california-benefits-helpprevent.svg",
  },
  {
    title: "Eases Loneliness",
    description:
      "A loyal companion at home reduces isolation and gives you someone to come home to.",
    icon: "/states/california-benefits-easesfeeling.svg",
  },
  {
    title: "Builds Daily Routine",
    description:
      "Feeding and walks add structure, which helps with depression and low motivation.",
    icon: "/states/california-benefits-expandhousing.svg",
  },
  {
    title: "Encourages Activity",
    description:
      "Daily walks mean more movement, fresh air, and better physical health.",
    icon: "/states/california-benefits-bettercopping.svg",
  },
  {
    title: "Better Sleep",
    description:
      "Many owners feel safer and more settled at night with their dog nearby.",
    icon: "/states/california-benefits-expandhousing.svg",
  },
  {
    title: "Social Connection",
    description:
      "Dogs make it easier to meet neighbors and rebuild confidence around others.",
    icon: "/states/california-benefits-bettercopping.svg",
  },
  {
    title: "Sense Of Purpose",
    description:
      "Caring for another living being restores meaning and responsibility.",
    icon: "/states/california-benefits-strongersense.svg",
  },
  {
    title: "Unconditional Support",
    description:
      "Constant, non-judgmental companionship during hard moments and panic episodes.",
    icon: "/states/california-benefits-workplaceconsideration.svg",
  },
];

export function EsaDogBenefitsSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* ======================================================== */}
      {/* DESKTOP & LAPTOP (>= 1024px)                             */}
      {/* Exactly matches 1440px Figma Frame 1000012003 at 1440px, */}
      {/* and scales globally via GlobalDesktopScaler on 1024-1440px*/}
      {/* ======================================================== */}
      <div className="hidden lg:block relative w-full overflow-hidden">
        <div className="relative w-[1440px] h-[1409px] mx-auto">
        {/* Right Curved Image (Frame 1000012003 mask: left 745px, top 0px, width 695px, height 1409px) */}
        <div className="absolute right-0 top-0 bottom-0 w-[695px] h-[1409px] pointer-events-none select-none z-10">
          <Image
            quality={95}
            src="/home/homepage_benefitsofhavingesa_section.png"
            alt="Woman with emotional support dog"
            fill
            className="object-cover object-left"
            sizes="696px"
            priority
          />

          {/* Heart Paw Circle Badge: Aligned directly with the dog's ears at curve edge */}
          <div className="absolute left-[60px] -translate-x-1/2 top-[620px] -translate-y-1/2 w-[73px] h-[73px] z-20 pointer-events-none drop-shadow-[0px_1px_4px_rgba(0,0,0,0.25)]">
            <Image
              quality={95}
              src="/home/doyouneed-emotional-support-icon.svg"
              alt="ESA Heart Paw Badge"
              width={73}
              height={73}
              className="w-full h-full object-contain rounded-full bg-[#FDFBF7]"
            />
          </div>
        </div>

        {/* Left Content Column (Frame 1000011976: 628px x 1266px, left 81px, top 70px) */}
        <div className="absolute left-[81px] top-[70px] w-[628px] h-[1266px] flex flex-col items-start gap-[40px] z-10">
          {/* Header Block (Frame 1000011447: 628px x 172px, gap 16px) */}
          <div className="flex flex-col items-start gap-[16px] w-[628px]">
            <h2 className="heading-h2 max-w-[590px]">
              Benefits Of Having An Emotional Support Dog
            </h2>
            <p className="body-large max-w-[568px]">
              Dogs provide steady comfort and structure. Here&apos;s how an ESA dog can support your daily life.
            </p>
          </div>

          {/* 8 Cards Grid (Frame 1000011974: 628px x 1054px, gap 24px) */}
          <div className="grid grid-cols-2 gap-[24px_23px] w-[628px]">
            {BENEFITS.map((benefit, idx) => (
              <div
                key={idx}
                className="w-[302.5px] h-[250px] p-[20px] bg-white rounded-[20px] shadow-[0px_0.4px_3.6px_rgba(0,0,0,0.11)] border border-black/[0.04] flex flex-col items-start justify-center gap-[12px] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                {/* Icon (54px x 54px in Figma) */}
                <div className="w-[54px] h-[54px] shrink-0 relative flex items-center justify-center">
                  <Image
                    quality={90}
                    src={benefit.icon}
                    alt={benefit.title}
                    width={54}
                    height={54}
                    className="w-full h-full object-contain shrink-0"
                  />
                </div>

                {/* Text Container */}
                <div className="flex flex-col items-start gap-[6px] w-full">
                  <h3 className="heading-h3 capitalize">
                    {benefit.title}
                  </h3>
                  <p className="body-text">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

      {/* ======================================================== */}
      {/* MOBILE / TABLET (< 1024px)                               */}
      {/* Clean responsive layout matching EmotionalSupportSection */}
      {/* ======================================================== */}
      {/* Mobile & Tablet Image Container (Rendered FIRST on Mobile/Tablet, Full Width) */}
      <div className="lg:hidden w-full overflow-hidden">
        {/* Mobile Image (< 640px) */}
        <div className="sm:hidden w-full">
          <Image
            quality={95}
            src="/home/homepage_benefits_section_mobile.png"
            alt="Benefits Of Having An Emotional Support Dog"
            width={390}
            height={512}
            className="w-full h-auto block"
            priority
          />
        </div>

        {/* Tablet Image (640px to 1023px) */}
        <div className="hidden sm:block w-full">
          <Image
            quality={95}
            src="/home/homepage_benefits_section_tablet.png"
            alt="Benefits Of Having An Emotional Support Dog"
            width={834}
            height={1050}
            className="w-full h-auto block"
            priority
          />
        </div>
      </div>

      {/* Mobile & Tablet Content Area (Renders AFTER image on Mobile/Tablet) */}
      <div className="lg:hidden w-full px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        <div className="w-full max-w-[628px] mx-auto space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="heading-h2 capitalize">
              Benefits Of Having An Emotional Support Dog
            </h2>
            <p className="body-large">
              Dogs provide steady comfort and structure. Here&apos;s how an ESA dog can support your daily life.
            </p>
          </div>

          {/* 8 Cards Grid (Single / 2-col on Tablet) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full">
            {BENEFITS.map((benefit, idx) => (
              <div
                key={idx}
                className="w-full p-4 sm:p-5 bg-white rounded-[20px] shadow-[0px_0.4px_3.6px_rgba(0,0,0,0.11)] border border-black/[0.04] flex flex-col items-start gap-3"
              >
                <div className="w-[44px] h-[44px] sm:w-[54px] sm:h-[54px] shrink-0 relative flex items-center justify-center">
                  <Image
                    quality={90}
                    src={benefit.icon}
                    alt={benefit.title}
                    width={54}
                    height={54}
                    className="w-full h-full object-contain shrink-0"
                  />
                </div>
                <div className="flex flex-col items-start gap-1 w-full">
                  <h3 className="heading-h3 capitalize">
                    {benefit.title}
                  </h3>
                  <p className="body-text">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
