"use client";

import React from "react";
import Image from "next/image";

const conditions = [
  {
    title: "Mood & Depressive Conditions",
    description: "Depressive symptoms or mood fluctuations that impair daily motivation and function.",
    icon: "/whomayqualifies-moodconditions.svg",
  },
  {
    title: "Anxiety & Panic Disorder",
    description: "Persistent worry, tension, or acute panic episodes affecting daily routines.",
    icon: "/whomayqualifies-panicattack.svg",
  },
  {
    title: "Trauma & Stress-Related Conditions",
    description: "Post-traumatic stress responses or acute adjustment difficulties following significant events.",
    icon: "/whomayqualifies-california_posttrauma.svg",
  },
  {
    title: "Other Qualifying Conditions",
    description: "Various emotional or mental health conditions assessed during a clinical evaluation.",
    icon: "/whomayqualifies-california_chronicworry.svg",
  },
];

export function ArkansasWhoQualifiesSection() {
  return (
    <section className="w-full bg-white py-0 overflow-hidden relative z-10">
      <div className="w-full max-w-[1440px] ml-auto mr-0 px-0 lg:pl-10 xl:pl-16 lg:pr-0">
        
        {/* On Desktop: 2 cols (Text left, Image right). On Mobile/Tablet: Stacked */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-4 xl:gap-8 items-stretch">
          
          {/* Top Image Frame */}
          <div className="order-1 lg:order-2 lg:col-span-5 relative flex justify-end items-stretch w-full">
            {/* Mobile Image (< 640px) */}
            <div className="sm:hidden relative w-full aspect-[390/440]">
              <Image
                src="/california-who-qualifies-mobile.png"
                alt="Who May Qualify for an Emotional Support Animal in Arkansas Mobile View"
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

            {/* Tablet Image (640px - 1023px) */}
            <div className="hidden sm:block lg:hidden relative w-full aspect-[834/943]">
              <Image
                src="/california-who-qualifies-tablet.png"
                alt="Who May Qualify for an Emotional Support Animal in Arkansas Tablet View"
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

            {/* Desktop Image (1024px+) */}
            <div className="hidden lg:block relative w-full h-full min-h-[360px]">
              <Image
                src="/whomayqualifies.png"
                alt="Who May Qualify for an Emotional Support Animal in Arkansas"
                fill
                priority
                unoptimized
                className="object-cover object-right pointer-events-none"
                sizes="42vw"
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

          {/* Text Section */}
          <div className="order-2 lg:order-1 lg:col-span-7 px-4 sm:px-6 lg:px-0 py-2 sm:py-4 lg:py-6 pr-0 lg:pr-2 xl:pr-4 flex flex-col justify-center">
            {/* Header Title & Subtitle */}
            <div className="mb-4 lg:mb-4">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[32px] xl:text-[42px] font-bold text-[#1E3E47] leading-[1.16] tracking-tight mb-2">
                Who May Qualify For an
                <br />
                ESA Letter in Arkansas?
              </h2>
              <p className="font-sans text-xs sm:text-sm lg:text-[13px] xl:text-base text-[#5F6B6F] font-medium leading-[1.5] max-w-[540px]">
                To protect privacy and confidentiality, all consultations are conducted through secure,
                HIPAA-compliant telehealth platforms. During the evaluation, a licensed clinician discusses
                mental health concerns that may impact daily life and overall functioning. These conditions
                may include, but are not limited to:
              </p>
            </div>

            {/* Subheading */}
            <div>
              <h3 className="font-heading text-base sm:text-lg lg:text-[18px] xl:text-2xl font-bold text-[#1E3E47] mb-2.5 lg:mb-3">
                Qualifying Conditions :
              </h3>

              {/* 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-3 xl:gap-4 max-w-[620px]">
                {conditions.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#FAF7F2] rounded-[18px] xl:rounded-[24px] p-3 sm:p-3.5 lg:p-3 xl:p-5 border border-[#EAE5DC] shadow-[0_4px_20px_rgba(0,0,0,0.025)] flex items-center gap-2.5 lg:gap-2.5 xl:gap-3.5 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(26,61,79,0.07)] hover:-translate-y-0.5"
                  >
                    {/* Left Icon */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 xl:w-9 xl:h-9 shrink-0 relative flex items-center justify-center">
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

        </div>
      </div>
    </section>
  );
}
