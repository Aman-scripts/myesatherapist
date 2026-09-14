"use client";

import React from "react";
import Image from "next/image";

export function DoctorsAllStatesSection() {
  const cards = [
    {
      title: "State-Licensed Providers",
      subtitle: "Therapists authorized in your state",
    },
    {
      title: "Telehealth Sessions",
      subtitle: "Video or phone, from anywhere",
    },
    {
      title: "Same-Week Availability",
      subtitle: "Most evaluations within 24-48 hours",
    },
  ];

  return (
    <section
      id="state-section"
      className="relative w-full bg-white overflow-hidden pt-0 pb-12 sm:pb-16 xl:py-0 xl:min-h-[699px] xl:h-[699px] flex flex-col xl:flex-row xl:items-center"
    >
      {/* ========================================================================= */}
      {/* DESKTOP ARTWORK (xl: and above) - Bleeds flush right, top & bottom       */}
      {/* ========================================================================= */}
      <div className="hidden xl:block absolute right-0 top-0 bottom-0 h-full w-[52%] max-w-[760px] min-w-[680px] pointer-events-none z-0">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="/doctors/doctors_weareinstate.png"
            alt="We're in All 50 US States - Licensed Mental Health Professionals with Dogs and Cats"
            fill
            priority
            unoptimized
            className="object-cover object-left-top"
            sizes="(max-width: 1440px) 52vw, 760px"
          />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE / TABLET ARTWORK (visible on < xl only)                            */}
      {/* Edge-to-edge full width with ZERO gap on left, right, and top!            */}
      {/* ========================================================================= */}
      <div className="block xl:hidden w-full relative z-10">
        {/* Mobile View (< 640px) */}
        <div className="sm:hidden w-full relative">
          <Image
            src="/doctors/doctors_weareinstate_mobile.png"
            alt="We're in All 50 US States - Licensed Mental Health Professionals with Dogs and Cats"
            width={390}
            height={426}
            priority
            unoptimized
            className="w-full h-auto block"
          />
          {/* Centered Circular Heart & Paw Badge right on the bottom wave dip */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-[52px] h-[52px] z-20 pointer-events-none flex items-center justify-center">
            <Image
              src="/about-us/about_us-legimateesasection-hearticon.svg"
              alt="Heart and Paw Icon"
              width={52}
              height={52}
              unoptimized
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Tablet View (640px to 1279px) */}
        <div className="hidden sm:block w-full relative">
          <Image
            src="/doctors/doctors_weareinstate_tablet.png"
            alt="We're in All 50 US States - Licensed Mental Health Professionals with Dogs and Cats"
            width={834}
            height={1029}
            priority
            unoptimized
            className="w-full h-auto block"
          />
          {/* Centered Circular Heart & Paw Badge right on the bottom wave dip */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] z-20 pointer-events-none flex items-center justify-center">
            <Image
              src="/about-us/about_us-legimateesasection-hearticon.svg"
              alt="Heart and Paw Icon"
              width={72}
              height={72}
              unoptimized
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MAIN CONTENT CONTAINER (Heading, Subtitle & 3 Feature Cards)             */}
      {/* ========================================================================= */}
      <div className="w-full max-w-[1448px] mx-auto px-4 sm:px-6 md:px-8 xl:px-[82px] relative z-10 pt-10 sm:pt-14 xl:pt-0">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">
          
          {/* Left Frame 1261153773 (width: 626px, gap: 56px) */}
          <div className="xl:col-span-7 flex flex-col items-start gap-6 sm:gap-8 lg:gap-10 xl:gap-[56px] py-4 xl:py-0 max-w-[560px] xl:max-w-[626px] mx-auto xl:mx-0 w-full">
            
            {/* Frame 1000011698 (Heading + Subtitle, gap: 28px) */}
            <div className="flex flex-col items-start gap-3.5 sm:gap-5 lg:gap-6 xl:gap-[28px] max-w-[560px] xl:max-w-[626px] w-full">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] text-[#2E5A66] leading-[1.18] sm:leading-[1.2] lg:leading-[48px] xl:leading-[54px] tracking-[-0.00015em]">
                We&apos;re in All 50 US States
              </h2>
              <p className="font-sans font-semibold text-base sm:text-lg lg:text-[17px] xl:text-[18px] text-[#5F6B6F] leading-[1.65] lg:leading-[28px] xl:leading-[30px]">
                Our licensed therapists are available across the entire United States, providing professional ESA evaluations no matter where you live.
              </p>
            </div>

            {/* Frame 1261153772 (The 3 Cards, gap: 32px) */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[24px] xl:gap-[32px] w-full max-w-[514px]">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="w-full h-[88px] sm:h-[94px] xl:h-[99px] rounded-[20px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex items-center overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {/* Frame 13 - Left Accent Strip */}
                  <div
                    className="w-[10px] xl:w-[13px] h-full shrink-0"
                    style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                  />

                  {/* Frame 1000011444 - Circular Icon Badge */}
                  <div className="w-[58px] h-[58px] sm:w-[66px] sm:h-[66px] xl:w-[74.56px] xl:h-[74.56px] rounded-full bg-white shadow-[0px_1.88955px_3.7791px_rgba(0,0,0,0.25)] flex items-center justify-center shrink-0 ml-3 sm:ml-4 xl:ml-6">
                    <Image
                      src="/doctors/doctors_wearein50states-icon.svg"
                      alt=""
                      width={32}
                      height={32}
                      className="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8 object-contain"
                    />
                  </div>

                  {/* Frame 14 - Card Text Area */}
                  <div className="flex flex-col justify-center min-w-0 pl-3 sm:pl-4 xl:pl-6 pr-3 sm:pr-4">
                    <h3 className="font-heading font-bold text-[16px] sm:text-[18px] xl:text-[20px] leading-[22px] sm:leading-[26px] xl:leading-[28px] text-[#2E5A66] truncate">
                      {card.title}
                    </h3>
                    <p className="font-sans font-semibold text-[12px] sm:text-[13px] xl:text-[14px] leading-[18px] sm:leading-[22px] xl:leading-[26px] text-[#5F6B6F] truncate mt-0.5">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
