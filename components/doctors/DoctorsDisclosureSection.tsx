"use client";

import React from "react";
import Image from "next/image";

export function DoctorsDisclosureSection() {
  const cards = [
    {
      text: "Providers listed are independent professionals who make clinical decisions independently of the platform.",
      icon: "/ESA ICons/Icon-25.svg",
    },
    {
      text: "Provider availability varies by state & ESA approval is never guaranteed",
      icon: "/ESA ICons/Icon-44.svg",
    },
    {
      text: "Evaluations are conducted based on state licensure requirements",
      icon: "/ESA ICons/Icon-33.svg",
    },
    {
      text: "My ESA Therapist does not influence clinical decisions or documentation outcomes",
      icon: "/ESA ICons/Icon-17.svg",
    },
  ];

  return (
    <section className="w-full bg-white overflow-visible py-16 lg:py-[70px]">
      <div className="max-w-[1448px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        
        {/* Frame: Heading (gap: 16px, height: 100px) */}
        <div className="flex flex-col items-center text-center gap-3 sm:gap-[16px] max-w-[854px] mx-auto mb-14 lg:mb-[67px]">
          <h2 className="heading-h2 text-primary max-w-[624px]">
            Important Provider Disclosure
          </h2>
          <p className="body-large text-body-text max-w-[854px]">
            Get clear information about our independent providers, their role in the evaluation process, and how clinical decisions are made.
          </p>
        </div>

        {/* Frame 1261153636 (Cards Grid: 1 col on mobile, 2x2 on tablet/1024px, 4 cols on xl desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-14 sm:gap-y-16 xl:gap-y-0 gap-x-6 max-w-[680px] xl:max-w-[1288px] mx-auto pt-4 xl:pt-0">
          {cards.map((card) => (
            <div
              key={card.text}
              className="relative mx-auto w-full max-w-[302px] pt-[36px] transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="rounded-[20px] bg-accent pt-[7px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)]">
                <div className="flex min-h-[168px] flex-col items-center rounded-[20px] bg-white px-4 pb-5 pt-[52px] text-center shadow-[0px_2px_4px_rgba(0,0,0,0.15)]">
                  <p className="body-text max-w-[250px] text-center font-semibold text-body-text">
                    {card.text}
                  </p>
                </div>
              </div>

              <div className="absolute left-1/2 top-0 flex h-[72px] w-[72px] -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.18)]">
                <Image src={card.icon} alt={card.text} width={32} height={32} unoptimized className="h-8 w-8 object-contain" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
