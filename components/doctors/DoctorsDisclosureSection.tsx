"use client";

import React from "react";
import Image from "next/image";

export function DoctorsDisclosureSection() {
  const cards = [
    {
      text: "Providers listed are independent professionals, not employees making platform decisions",
      icon: (
        <Image
          src="/doctors/doctors_importantproviders_firstcards-icon.svg"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
        />
      ),
    },
    {
      text: "Provider availability varies by state & ESA approval is never guaranteed",
      icon: (
        <Image
          src="/doctors/doctors_importantproviders_restallthreecards-icon.svg"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
        />
      ),
    },
    {
      text: "Evaluations are conducted based on state licensure requirements",
      icon: (
        <Image
          src="/doctors/doctors_importantproviders_restallthreecards-icon.svg"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
        />
      ),
    },
    {
      text: "My ESA Therapist does not influence clinical decisions or documentation outcomes",
      icon: (
        <Image
          src="/doctors/doctors_importantproviders_restallthreecards-icon.svg"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
        />
      ),
    },
  ];

  return (
    <section className="w-full bg-white overflow-visible py-16 lg:py-[70px]">
      <div className="max-w-[1448px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        
        {/* Frame: Heading (gap: 16px, height: 100px) */}
        <div className="flex flex-col items-center text-center gap-3 sm:gap-[16px] max-w-[854px] mx-auto mb-14 lg:mb-[67px]">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#2E5A66] leading-[1.18] sm:leading-[1.2] lg:leading-[54px] tracking-[-0.00015em] max-w-[624px]">
            Important Provider Disclosure
          </h2>
          <p className="font-sans font-semibold text-base sm:text-lg lg:text-[18px] text-[#5F6B6F] leading-[1.65] lg:leading-[30px] max-w-[854px]">
            How our network of independent professionals operates.
          </p>
        </div>

        {/* Frame 1261153636 (Cards Grid: 1 col on mobile, 2x2 on tablet/1024px, 4 cols on xl desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-14 sm:gap-y-16 xl:gap-y-0 gap-x-6 max-w-[680px] xl:max-w-[1288px] mx-auto pt-4 xl:pt-0">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative w-full max-w-[302px] h-[148px] mx-auto isolate transition-transform duration-200 hover:-translate-y-1"
            >
              {/* Frame 1000011684 - Gold Accent Backing Card */}
              <div
                className="absolute inset-x-0 top-0 h-[142px] bg-[#E8B92C] rounded-[20px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)]"
                style={{ zIndex: 0 }}
              />

              {/* Frame 1000011683 - White Foreground Card */}
              <div
                className="absolute inset-x-0 top-[7px] h-[136px] bg-white rounded-[20px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex flex-col items-center justify-start pt-[39px] pb-[14px] px-4 text-center"
                style={{ zIndex: 1 }}
              >
                {/* Frame 1000011458 - Card Text */}
                <p className={`font-sans font-semibold text-[15px] sm:text-[16px] leading-[26px] text-[#5F6B6F] text-center ${idx === 0 ? 'max-w-[250px]' : 'max-w-[238px]'}`}>
                  {card.text}
                </p>
              </div>

              {/* Frame 1000011444 - Floating Circular Icon Badge */}
              <div
                className="absolute -top-[32px] left-1/2 -translate-x-1/2 w-[74.56px] h-[74.56px] rounded-full bg-white shadow-[0px_1.88955px_3.7791px_rgba(0,0,0,0.25)] flex items-center justify-center"
                style={{ zIndex: 2 }}
              >
                {card.icon}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
