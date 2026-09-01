"use client";

import React from "react";
import Image from "next/image";
import { StateData } from "@/data/statesData";

const conditions = [
  {
    title: "Chronic Worry",
    description: "A constant sense of unease or overthinking that makes even simple things feel harder to manage.",
    icon: "/whomayqualifies-california_chronicworry.svg",
  },
  {
    title: "Panic Attack",
    description: "Intense fear that hits out of nowhere, often bringing chest tightness, dizziness, or shaky breathing.",
    icon: "/whomayqualifies-panicattack.svg",
  },
  {
    title: "Post-Trauma Stress",
    description: "Strong emotional reactions, memories, or tension triggered by past traumatic events.",
    icon: "/whomayqualifies-california_posttrauma.svg",
  },
  {
    title: "Mood Conditions",
    description: "Covers ADHD, bipolar shifts, social fears, phobic reactions, and other patterns that affect focus or mood.",
    icon: "/whomayqualifies-moodconditions.svg",
  },
];

export function StateWhoQualifiesSection({ data }: { data: StateData }) {
  const stateName = data.name;

  return (
    <section className="w-full bg-white py-0 overflow-hidden relative z-10">
      <div className="w-full max-w-[1440px] mx-auto px-0 lg:pl-16 lg:pr-0">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-0 lg:gap-4 xl:gap-8 items-center relative min-h-[auto] lg:min-h-[640px]">
          
          {/* Top Image for Mobile/Tablet (Full Width, No Gap) */}
          <div className="order-1 lg:hidden relative w-full flex justify-end items-center">
            {/* Mobile View Image: Full width, edge-to-edge */}
            <div className="sm:hidden relative w-full aspect-[390/440]">
              <Image
                src="/california-who-qualifies-mobile.png"
                alt={`Who qualifies for ${stateName} ESA Letter Mobile View`}
                fill
                priority
                unoptimized
                className="object-cover object-top"
                sizes="100vw"
              />
              {/* Heart Icon positioned directly on the bottom wave curve dip */}
              <div className="absolute bottom-0 left-[73.8%] -translate-x-1/2 translate-y-1/2 z-10 w-11 h-11">
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
            <div className="hidden sm:block lg:hidden relative w-full aspect-[834/943]">
              <Image
                src="/california-who-qualifies-tablet.png"
                alt={`Who qualifies for ${stateName} ESA Letter Tablet View`}
                fill
                priority
                unoptimized
                className="object-cover object-top"
                sizes="100vw"
              />
              {/* Heart Icon positioned directly on the bottom wave curve dip */}
              <div className="absolute bottom-0 left-[75.3%] -translate-x-1/2 translate-y-1/2 z-10 w-13 h-13">
                <Image
                  src="/whomayqualifies-california_icon.svg"
                  alt="Heart Icon"
                  width={52}
                  height={52}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Left Content Area: Frame 1000011976 */}
          <div className="order-2 lg:order-1 lg:col-span-7 px-4 sm:px-6 lg:px-0 pt-8 sm:pt-12 pb-8 lg:py-16 pr-0 lg:pr-4 flex flex-col justify-center">
            
            {/* Frame 1000011447 */}
            <div className="mb-6 lg:mb-8 space-y-3">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[44px] font-bold text-[#2E5A66] leading-[1.23] tracking-[-0.00015em]">
                Who May Qualifies for an ESA Letter in {stateName}?
              </h2>
              <p className="font-sans text-sm sm:text-base lg:text-[18px] text-[#5F6B6F] font-semibold leading-[1.67] max-w-[568px]">
                People whose emotional or mental health concerns meaningfully affect everyday functioning may be assessed for ESA after an evaluation by a licensed mental health professional.
              </p>
            </div>

            {/* Frame 1000011974 */}
            <div>
              <h3 className="font-heading text-[22px] sm:text-[28px] font-bold text-[#5F6B6F] leading-[36px] tracking-[-0.00015em] mb-4">
                Qualifying Conditions :
              </h3>

              {/* Frame 1000011973 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[628px]">
                {conditions.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-[20px] p-[16px_9px] shadow-[0px_0.4px_3.6px_rgba(0,0,0,0.11)] flex items-center gap-3 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(26,61,79,0.07)]"
                  >
                    <div className="w-[54px] h-[54px] shrink-0 relative flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={54}
                        height={54}
                        className="object-contain w-full h-full"
                      />
                    </div>

                    <div className="min-w-0 flex-1 space-y-0.5">
                      <h4 className="font-sans text-[16px] sm:text-[18px] font-semibold text-[#2E5A66] leading-[30px]">
                        {item.title}
                      </h4>
                      <p className="font-sans text-[13px] sm:text-[14px] text-[#5F6B6F] font-semibold leading-[26px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop View Image: Full Height Top to Bottom, No Top/Bottom Gap */}
          <div className="hidden lg:block lg:col-span-5 absolute right-0 top-0 bottom-0 h-full w-[44%] xl:w-[46%] max-w-[660px] pointer-events-none">
            <div className="relative w-full h-full">
              <Image
                src="/whomayqualifies.png"
                alt={`Who qualifies for ${stateName} ESA Letter`}
                fill
                priority
                unoptimized
                className="object-cover object-left"
                sizes="(min-width: 1024px) 46vw, 100vw"
              />
              <div className="absolute left-[3%] top-[45%] -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 xl:w-16 xl:h-16">
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
      </div>
    </section>
  );
}
