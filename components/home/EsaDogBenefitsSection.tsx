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
      "Petting and being near your dog can help calm your nervous system, ease tension, and make stressful moments feel more manageable.",
    icon: "/ESA ICons/Icon-21.svg",
  },
  {
    title: "Eases Loneliness",
    description:
      "A loyal companion at home can reduce feelings of isolation and give you someone to come home to every day.",
    icon: "/ESA ICons/Icon-7.svg",
  },
  {
    title: "Builds Daily Routine",
    description:
      "Regular feeding times and daily walks add structure to your day, which may help with depression and low motivation.",
    icon: "/ESA ICons/Icon-9.svg",
  },
  {
    title: "Encourages Activity",
    description:
      "Daily walks with your dog mean more movement, more fresh air, and steady habits that can support better physical health.",
    icon: "/ESA ICons/Icon-10.svg",
  },
  {
    title: "Better Sleep",
    description:
      "Many owners feel safer and more settled at night with their dog nearby, which can make it easier to rest.",
    icon: "/ESA ICons/Glyph-1.svg",
  },
  {
    title: "Social Connection",
    description:
      "Dogs make it easier to start conversations, meet neighbors, and gradually rebuild confidence when you are around other people.",
    icon: "/ESA ICons/Icon-8.svg",
  },
  {
    title: "Sense Of Purpose",
    description:
      "Caring for another living being each day can restore a sense of meaning and responsibility to your daily life.",
    icon: "/ESA ICons/Icon-11.svg",
  },
  {
    title: "Unconditional Support",
    description:
      "Your dog offers constant, non-judgmental companionship during hard moments, stressful days, and panic episodes when you need it most.",
    icon: "/ESA ICons/Icon-12.svg",
  },
];

export function EsaDogBenefitsSection() {
  return (
    <section className="relative w-full bg-white pt-16 sm:pt-20 lg:pt-24 pb-0 overflow-hidden">
      {/* Container matching Figma 1281px content width */}
      <div className="max-w-[1281px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16 space-y-3 max-w-[680px] mx-auto">
          <h2 className="heading-h2 capitalize">
            Benefits Of Having An Emotional Support Dog
          </h2>
          <p className="body-large">
            Dogs provide steady comfort and structure. Here&apos;s how an ESA dog can support your daily life.
          </p>
        </div>

        {/* 8 Cards Grid (4 columns x 2 rows on desktop: 1281px, gap 23px col, 18px row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[23px] gap-y-[18px]">
          {BENEFITS.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] p-5 sm:p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.06)] border border-black/[0.04] flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              {/* Cream Tile Icon Container (Figma: #F5EFE6) */}
              <div className="w-12 h-12 rounded-[14px] bg-[#F5EFE6] flex items-center justify-center shrink-0">
                <Image
                  quality={90}
                  src={benefit.icon}
                  alt={benefit.title}
                  width={32}
                  height={32}
                  className="icon-lg object-contain shrink-0"
                />
              </div>

              {/* Title & Description */}
              <div className="flex flex-col items-start gap-2 w-full">
                <h3 className="heading-h3 capitalize text-primary text-left">
                  {benefit.title}
                </h3>
                <p className="body-text text-left">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Full-Width Banner Image with Floating Badge at top center */}
      <div className="relative w-full mt-14 sm:mt-16 lg:mt-20">
        {/* Floating Top Badge with ESA Paw Heart Icon */}
        <div className="absolute left-[26.4%] top-[11%] z-20 flex h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#E2E8F0] bg-white p-2.5 shadow-[0_4px_16px_rgba(0,0,0,0.12)] sm:h-[72px] sm:w-[72px]">
          <Image
            quality={90}
            src="/home/doyouneed-emotional-support-icon.svg"
            alt="ESA Heart Paw Badge"
            width={48}
            height={48}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Wide Banner Image (Figma 1440x710 Image Mask) */}
        <div className="relative w-full max-w-[1440px] mx-auto h-[320px] sm:h-[480px] lg:h-[620px] xl:h-[710px] overflow-hidden">
          <Image
            quality={90}
            src="/home/myesatherapist_homepage_benefitssection.png"
            alt="Woman smiling affectionately at her emotional support dog on the couch"
            fill
            className="object-cover object-top"
            sizes="(min-width: 1440px) 1440px, 100vw"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
