"use client";

import React from "react";
import Image from "next/image";

const conditions = [
  {
    title: "Chronic Worry",
    description:
      "A constant sense of unease or overthinking that makes even simple things feel harder to manage.",
    icon: "/whomayqualifies-california_chronicworry.svg",
  },
  {
    title: "Panic Attack",
    description:
      "Intense fear that hits out of nowhere, often bringing chest tightness, dizziness, or shaky breathing.",
    icon: "/whomayqualifies-panicattack.svg",
  },
  {
    title: "Post-Trauma Stress",
    description:
      "Strong emotional reactions, memories, or tension triggered by past traumatic events.",
    icon: "/whomayqualifies-california_posttrauma.svg",
  },
  {
    title: "Mood Conditions",
    description:
      "Covers ADHD, bipolar shifts, social fears, phobic reactions, and other patterns that affect focus or mood.",
    icon: "/whomayqualifies-moodconditions.svg",
  },
];

export function CaliforniaWhoQualifiesSection() {
  return (
    <section className="w-full bg-white py-0 overflow-hidden relative z-10">
      <div className="w-full max-w-[1440px] ml-auto mr-0 pl-4 sm:pl-6 lg:pl-10 xl:pl-16 pr-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 xl:gap-8 items-stretch">
          
          {/* Left Column: Text & Cards (7 cols at 1024px+) */}
          <div className="lg:col-span-7 py-4 sm:py-6 lg:py-4 xl:py-6 pr-4 sm:pr-6 lg:pr-2 xl:pr-4 flex flex-col justify-center">
            {/* Header Title & Subtitle */}
            <div className="mb-3 lg:mb-4">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[32px] xl:text-[42px] font-bold text-[#1E3E47] leading-[1.16] tracking-tight mb-2">
                Who May Qualifies for an
                <br />
                ESA Letter in California?
              </h2>
              <p className="font-sans text-xs sm:text-sm lg:text-[13px] xl:text-base text-[#5F6B6F] font-medium leading-[1.5] max-w-[500px]">
                People whose emotional or mental health concerns meaningfully affect everyday
                functioning may be assessed for ESA after an evaluation by a licensed mental health
                professional.
              </p>
            </div>

            {/* Subheading */}
            <div>
              <h3 className="font-heading text-base sm:text-lg lg:text-[18px] xl:text-2xl font-bold text-[#1E3E47] mb-2.5 lg:mb-3">
                Qualifying Conditions :
              </h3>

              {/* 2x2 Grid optimized for 1024px and all screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-3 xl:gap-4 max-w-[620px]">
                {conditions.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#FAF7F2] rounded-[18px] xl:rounded-[24px] p-3 sm:p-3.5 lg:p-3 xl:p-5 border border-[#EAE5DC] shadow-[0_4px_20px_rgba(0,0,0,0.025)] flex items-start gap-2.5 lg:gap-2.5 xl:gap-3.5 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(26,61,79,0.07)] hover:-translate-y-0.5"
                  >
                    {/* Left Icon */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 xl:w-9 xl:h-9 shrink-0 mt-0.5 relative flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={36}
                        height={36}
                        className="object-contain w-full h-full"
                      />
                    </div>

                    {/* Right Content */}
                    <div className="min-w-0">
                      <h4 className="font-heading text-xs sm:text-sm lg:text-[14px] xl:text-base font-bold text-[#1E3E47] mb-0.5 leading-snug">
                        {item.title}
                      </h4>
                      <p className="font-sans text-[10px] sm:text-xs lg:text-[11px] xl:text-[13px] text-[#5F6B6F] leading-tight xl:leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image Frame (5 cols at 1024px+) - Flush Right, Top & Bottom with object-cover */}
          <div className="lg:col-span-5 relative flex justify-end items-stretch h-full pr-0">
            <div className="relative w-full h-full min-h-[360px] sm:min-h-[420px] lg:min-h-0">
              <Image
                src="/whomayqualifies.png"
                alt="Who qualifies for California ESA Letter"
                fill
                priority
                unoptimized
                className="object-cover object-right pointer-events-none"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />

              {/* Floating Green Heart Badge on curve */}
              <div className="absolute left-[-12px] sm:left-[-18px] lg:left-[-14px] xl:left-[-22px] top-[45%] -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 lg:w-12 lg:h-12 xl:w-16 xl:h-16">
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
