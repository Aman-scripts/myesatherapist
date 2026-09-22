"use client";

import React from "react";
import Image from "next/image";

interface KnowCard {
  image: string;
  alt: string;
  position: string;
  title: string;
  description: string;
}

const CARDS: KnowCard[] = [
  {
    image: "/esa-renewal/esa-renewal-whattoknow-paymentcovers.webp",
    alt: "Woman with cat looking at tablet",
    position: "object-[40%_center]",
    title: "Payment Covers Professional Evaluation",
    description:
      "Your payment provides access to a licensed professional’s evaluation. Approval is not guaranteed, as all outcomes are based on the provider’s independent clinical judgment.",
  },
  {
    image: "/esa-renewal/esa-renewal-whattoknow-supportdocumentation-photo.webp",
    alt: "Woman with golden retriever",
    position: "object-left",
    title: "Supports Documentation Integrity",
    description:
      "Renewal evaluations help ensure the letter accurately reflects a person’s current circumstances. Renewal helps maintain trust with housing providers and supports smoother accommodation discussions when a recent letter is requested",
  },
];

export function EsaRenewalWhatToKnow() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 xl:py-[86px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 flex flex-col gap-10 lg:gap-12 xl:gap-[60px]">
        {/* Header (Frame 5) */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-[34px] xl:text-[44px] font-bold text-[#2E5A66] leading-tight sm:leading-[54px] lg:leading-[42px] xl:leading-[54px] tracking-[-0.00015em]">
            What to Know Before You Start?
          </h2>
          <p className="font-sans text-base sm:text-[18px] lg:text-[16px] xl:text-[18px] font-semibold text-[#5F6B6F] leading-[30px] lg:leading-[27px] xl:leading-[30px]">
            Before beginning, it’s important to understand a few key details about the renewal process.
          </p>
        </div>

        {/* 2 Horizontal Feature Cards (Frame 1000012029) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[22px] items-stretch">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-[30px] shadow-[0px_1px_4px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col sm:flex-row sm:items-center xl:min-h-[298px]"
            >
              {/* Left Photo */}
              <div className="relative w-full sm:w-[193px] lg:w-[150px] xl:w-[193px] h-[220px] sm:h-auto sm:self-stretch shrink-0 overflow-hidden">
                <Image
            quality={90}
                  src={card.image}
                  alt={card.alt}
                  fill
                  className={`object-cover ${card.position}`}
                  sizes="(min-width: 640px) 193px, 100vw"
                />
              </div>

              {/* Right Text (Frame 1000012027) */}
              <div className="flex flex-1 flex-col gap-[10px] p-6 sm:py-8 sm:pl-[25px] sm:pr-8 lg:pl-5 lg:pr-6 xl:py-[50px] xl:pl-[25px] xl:pr-[47px]">
                <h3 className="font-heading font-bold text-xl sm:text-[24px] lg:text-[22px] xl:text-[28px] tracking-[-0.00015em] text-[#2E5A66] leading-snug xl:leading-9">
                  {card.title}
                </h3>
                <p className="font-sans text-sm lg:text-[13px] xl:text-[14px] font-semibold text-[#5F6B6F] leading-[26px] lg:leading-[23px] xl:leading-[26px]">
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
