"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface BenefitCard {
  title: string;
  description: string;
  icon: string;
}

const BENEFITS: BenefitCard[] = [
  {
    title: "Reduces stress & anxiety",
    description:
      "Petting and being near your dog can help calm your nervous system and ease tension.",
    icon: "/states/california-benefits-helpprevent.svg",
  },
  {
    title: "Eases loneliness",
    description:
      "A loyal companion at home reduces isolation and gives you someone to come home to.",
    icon: "/states/california-benefits-easesfeeling.svg",
  },
  {
    title: "Builds daily routine",
    description:
      "Feeding and walks add structure, which helps with depression and low motivation.",
    icon: "/states/california-benefits-expandhousing.svg",
  },
  {
    title: "Encourages activity",
    description:
      "Daily walks mean more movement, fresh air, and better physical health.",
    icon: "/states/california-benefits-bettercopping.svg",
  },
  {
    title: "Better sleep",
    description:
      "Many owners feel safer and more settled at night with their dog nearby.",
    icon: "/states/california-benefits-expandhousing.svg",
  },
  {
    title: "Social connection",
    description:
      "Dogs make it easier to meet neighbors and rebuild confidence around others.",
    icon: "/states/california-benefits-bettercopping.svg",
  },
  {
    title: "Sense of purpose",
    description:
      "Caring for another living being restores meaning and responsibility.",
    icon: "/states/california-benefits-strongersense.svg",
  },
  {
    title: "Unconditional support",
    description:
      "Constant, non-judgmental companionship during hard moments and panic episodes.",
    icon: "/states/california-benefits-workplaceconsideration.svg",
  },
];

export function EsaDogBenefitsSection() {
  const [scale, setScale] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const updateScale = () => {
      const w = window.innerWidth;
      if (w >= 1024 && w < 1440) {
        setScale(w / 1440);
      } else {
        setScale(1);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <section
      className="relative w-full bg-white overflow-hidden min-h-0"
      style={{
        height: isMounted && scale < 1 ? `${Math.round(1236 * scale)}px` : undefined,
      }}
    >
      {/* ======================================================== */}
      {/* DESKTOP & LAPTOP (>= 1024px)                             */}
      {/* Exactly matches 1440px Figma Frame 1000012003 at 1440px, */}
      {/* and scales proportionally on 1024px-1439px screen sizes  */}
      {/* so 1024px looks 100% identical to 1440px.                */}
      {/* ======================================================== */}
      <div
        className="hidden lg:block relative origin-top-left"
        style={{
          width: "1440px",
          height: "1236px",
          transform: isMounted && scale < 1 ? `scale(${scale})` : undefined,
          marginLeft: !isMounted || scale === 1 ? "auto" : 0,
          marginRight: !isMounted || scale === 1 ? "auto" : 0,
        }}
      >
        {/* Right Curved Image (Frame 1000012003 mask: left 745px, top 0px, width 695px, height 1236px) */}
        <div className="absolute right-0 top-0 bottom-0 w-[695px] h-[1236px] pointer-events-none select-none z-10">
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
          <div className="absolute left-[60px] -translate-x-1/2 top-[545px] -translate-y-1/2 w-[73px] h-[73px] z-20 pointer-events-none drop-shadow-[0px_1px_4px_rgba(0,0,0,0.25)]">
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

        {/* Left Content Column (Frame 1000011976: 628px x 1096px, left 81px, top 70px) */}
        <div className="absolute left-[81px] top-[70px] w-[628px] h-[1096px] flex flex-col items-start gap-[40px] z-10">
          {/* Header Block (Frame 1000011447: 628px x 184px, gap 16px) */}
          <div className="flex flex-col items-start gap-[16px] w-[628px]">
            <h2 className="font-playfair font-bold text-[44px] leading-[54px] tracking-[-0.00015em] text-[#2E5A66] max-w-[590px]">
              Benefits of Having an Emotional Support Dog
            </h2>
            <p className="font-manrope font-semibold text-[18px] leading-[30px] text-[#5F6B6F] max-w-[568px]">
              Dogs provide steady comfort and structure. Here&apos;s how an ESA dog can support your daily life.
            </p>
          </div>

          {/* 8 Cards Grid (Frame 1000011974: 628px x 872px, gap 24px) */}
          <div className="grid grid-cols-2 gap-[24px_23px] w-[628px]">
            {BENEFITS.map((benefit, idx) => (
              <div
                key={idx}
                className="w-[302.5px] min-h-[198px] p-[16px_14px] bg-white rounded-[20px] shadow-[0px_0.4px_3.6px_rgba(0,0,0,0.11)] border border-black/[0.04] flex flex-row items-center gap-[12px] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
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

                {/* Text Container (Frame 1000011970: 191px x 166px) */}
                <div className="flex flex-col items-start gap-[2px] flex-1 min-w-0">
                  <div className="font-manrope font-semibold text-[18px] leading-[30px] text-[#2E5A66]">
                    {benefit.title}
                  </div>
                  <p className="font-manrope font-semibold text-[16px] leading-[26px] text-[#5F6B6F]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* MOBILE / TABLET (< 1024px)                               */}
      {/* Clean responsive layout for smaller screens               */}
      {/* ======================================================== */}
      <div className="lg:hidden w-full px-4 sm:px-6 py-12 sm:py-16">
        <div className="w-full max-w-[628px] mx-auto flex flex-col items-start gap-6 sm:gap-8">
          <div className="flex flex-col items-start gap-3 sm:gap-4">
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl leading-tight sm:leading-[44px] tracking-[-0.00015em] text-[#2E5A66]">
              Benefits of Having an Emotional Support Dog
            </h2>
            <p className="font-manrope font-semibold text-base sm:text-[18px] leading-[26px] sm:leading-[30px] text-[#5F6B6F]">
              Dogs provide steady comfort and structure. Here&apos;s how an ESA dog can support your daily life.
            </p>
          </div>

          {/* Dog Image Preview on Mobile */}
          <div className="w-full max-w-[480px] mx-auto rounded-[24px] overflow-hidden my-2">
            <div className="relative w-full aspect-[696/600]">
              <Image
                quality={90}
                src="/home/homepage_benefitsofhavingesa_section.png"
                alt="Woman with emotional support dog"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 480px"
              />
            </div>
          </div>

          {/* 8 Cards Grid (Single / 2-col on Tablet) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full">
            {BENEFITS.map((benefit, idx) => (
              <div
                key={idx}
                className="w-full min-h-[160px] sm:min-h-[192px] p-3.5 sm:p-[16px_14px] bg-white rounded-[20px] shadow-[0px_0.4px_3.6px_rgba(0,0,0,0.11)] border border-black/[0.04] flex flex-row items-center gap-3"
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
                <div className="flex flex-col items-start gap-1 flex-1 min-w-0">
                  <div className="font-manrope font-semibold text-[16px] sm:text-[18px] leading-[24px] sm:leading-[30px] text-[#2E5A66]">
                    {benefit.title}
                  </div>
                  <p className="font-manrope font-semibold text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-[#5F6B6F]">
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
