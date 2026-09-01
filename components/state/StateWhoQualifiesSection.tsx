"use client";

import React from "react";
import Image from "next/image";
import { StateData } from "@/data/statesData";

const conditions = [
  {
    title: "Panic Disorder with Agoraphobia",
    description: "Frequent panic attacks restricting leaving homes and public spaces.",
    icon: "/whomayqualifies-california_chronicworry.svg",
  },
  {
    title: "Chronic PTSD",
    description: "Trauma-related flashbacks affecting daily life or emotional regulation.",
    icon: "/whomayqualifies-panicattack.svg",
  },
  {
    title: "Persistent Depressive Disorder",
    description: "Long-term depressive symptoms affecting motivation and energy.",
    icon: "/whomayqualifies-california_posttrauma.svg",
  },
  {
    title: "Obsessive-Compulsive Disorder",
    description: "Intrusive thoughts or compulsions disrupting routine activities.",
    icon: "/whomayqualifies-moodconditions.svg",
  },
];

export function StateWhoQualifiesSection({ data }: { data: StateData }) {
  const stateName = data.name;

  return (
    <section className="w-full bg-white py-0 overflow-hidden relative z-10">
      <div className="w-full max-w-[1440px] ml-auto mr-0 px-0 lg:pl-8 xl:pl-16 lg:pr-0">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-4 xl:gap-8 items-center">
          <div className="order-1 lg:order-2 lg:col-span-5 relative flex justify-end w-full">
            <div className="sm:hidden relative w-full aspect-[390/440]">
              <Image
                src="/california-who-qualifies-mobile.png"
                alt={`Who May Eligible For ESA Letter in ${stateName} Mobile View`}
                fill
                priority
                unoptimized
                className="object-cover object-top"
                sizes="100vw"
              />
              <div className="absolute bottom-0 left-[73.8%] -translate-x-1/2 translate-y-1/2 z-10 w-10 h-10">
                <Image
                  src="/whomayqualifies-california_icon.svg"
                  alt="Heart Icon"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
            </div>

            <div className="hidden sm:block lg:hidden relative w-full aspect-[834/943]">
              <Image
                src="/california-who-qualifies-tablet.png"
                alt={`Who May Eligible For ESA Letter in ${stateName} Tablet View`}
                fill
                priority
                unoptimized
                className="object-cover object-top"
                sizes="100vw"
              />
              <div className="absolute bottom-0 left-[75.3%] -translate-x-1/2 translate-y-1/2 z-10 w-12 h-12">
                <Image
                  src="/whomayqualifies-california_icon.svg"
                  alt="Heart Icon"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
            </div>

            <div className="hidden lg:block relative w-full aspect-[694/827] ml-auto">
              <Image
                src="/whomayqualifies.png"
                alt={`Who qualifies for ${stateName} ESA Letter`}
                fill
                priority
                unoptimized
                className="object-contain object-right pointer-events-none"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <div className="absolute left-[9.2%] top-[45.2%] -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 xl:w-16 xl:h-16">
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

          <div className="order-2 lg:order-1 lg:col-span-7 px-4 sm:px-6 lg:px-0 py-2 sm:py-4 lg:py-6 pr-0 lg:pr-2 xl:pr-4 flex flex-col justify-center">
            <div className="mb-5 sm:mb-6 lg:mb-6 xl:mb-8">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[32px] xl:text-[44px] font-bold text-[#2E5A66] leading-[1.16] tracking-tight mb-3 sm:mb-4 lg:mb-3.5 xl:mb-5">
                Who May Eligible For ESA
                <br />
                Letter in {stateName}?
              </h2>
              <p className="font-sans text-xs sm:text-sm lg:text-[13px] xl:text-base text-[#5F6B6F] font-semibold leading-relaxed xl:leading-[26px] max-w-[540px]">
                {stateName} residents finding troubles in completing everyday tasks and activities can get themselves evaluated by licensed mental health professionals (LMHP) in {stateName} to check the need for emotional support animals. During this process, clinicians may consider a range of medical conditions, which include but are not limited to:
              </p>
            </div>

            <div>
              <h3 className="font-heading text-base sm:text-lg lg:text-[18px] xl:text-[28px] font-bold text-[#5F6B6F] mb-3 sm:mb-3.5 lg:mb-3.5 xl:mb-4">
                Qualifying Conditions :
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-3 xl:gap-4 max-w-[620px]">
                {conditions.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-[20px] p-3.5 sm:p-4 lg:p-3 xl:p-4 border border-[#EAE5DC]/60 shadow-[0px_0.4px_3.6px_rgba(0,0,0,0.11)] flex items-center gap-2.5 lg:gap-2.5 xl:gap-3.5 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(26,61,79,0.07)] hover:-translate-y-0.5"
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 xl:w-10 xl:h-10 shrink-0 relative flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={40}
                        height={40}
                        className="object-contain w-full h-full"
                      />
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-heading text-xs sm:text-sm lg:text-[14px] xl:text-[16px] font-bold text-[#2E5A66] mb-0.5 leading-snug">
                        {item.title}
                      </h4>
                      <p className="font-sans text-[10px] sm:text-xs lg:text-[11px] xl:text-[13px] text-[#5F6B6F] leading-tight xl:leading-relaxed font-semibold">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
