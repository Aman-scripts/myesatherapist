"use client";

import React from "react";
import Image from "next/image";

const capabilitiesData = [
  {
    number: "01",
    title: "Housing Access",
    framework: "Fair Housing Act",
    description: "If any of these describes you, a PSD letter may be exactly what you need.",
  },
  {
    number: "02",
    title: "Public Access",
    framework: "Americans with Disabilities Act",
    description: "If any of these describes you, a PSD letter may be exactly what you need.",
  },
  {
    number: "03",
    title: "Air Travel",
    framework: "Air Carrier Access Act",
    description: "If any of these describes you, a PSD letter may be exactly what you need.",
  },
];

export function PsdCapabilitiesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-16 bg-white relative overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading + 3 Framework Cards */}
          <div className="lg:col-span-7 xl:col-span-6 z-10 max-w-[620px]">
            {/* Section Header */}
            <div className="mb-8 lg:mb-10 text-left">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1E3E47] leading-[1.15] tracking-tight mb-3">
                What a Psychiatric Service dog can do?
              </h2>
              <p className="text-[#5F6B6F] text-base sm:text-lg font-normal italic font-lato leading-relaxed">
                Understand the legal framework behind your PSD empowers you as a handler.
              </p>
            </div>

            {/* 3 Capabilities Cards Stack */}
            <div className="space-y-4 sm:space-y-5">
              {capabilitiesData.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-[16px] p-5 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.04)] flex items-center gap-4 sm:gap-6 border-0"
                >
                  {/* Number Circle Badge (Soft Grayish-Teal Tint bg #AEBBBE33) */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#AEBBBE33] text-[#5F6B6F] font-heading font-bold text-xl sm:text-[22px] flex items-center justify-center shrink-0">
                    {item.number}
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-[#1E3E47]">
                        {item.title}
                      </h3>
                      {/* Dark Teal Pill Tag */}
                      <span className="bg-[#1E3E47] text-white font-lato italic font-medium text-xs px-3 py-1 rounded-full shrink-0">
                        {item.framework}
                      </span>
                    </div>
                    <p className="text-sm sm:text-[15px] font-normal text-[#5F6B6F] font-lato leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Full-Bleed Image Frame (Top-to-Bottom Flush, 0 Padding) */}
          <div className="lg:col-span-5 xl:col-span-6 relative lg:static">
            <div className="relative w-full max-w-[635px] mx-auto lg:max-w-none lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[635px] lg:h-full shrink-0">
              <Image
                src="/psdcapabilities-new-image.png"
                alt="What a Psychiatric Service Dog can do"
                fill
                priority
                unoptimized
                className="object-cover object-left h-full w-full"
                sizes="(max-width: 1024px) 100vw, 635px"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
