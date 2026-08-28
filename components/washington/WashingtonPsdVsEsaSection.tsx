"use client";

import React from "react";
import Image from "next/image";

const esaBullets = [
  "Provide companionship and emotional comfort for individuals with mental health conditions.",
  "No specialized training required; valid ESA letter needed for housing accommodations.",
  "Protected under the Fair Housing Act for housing rights.",
  "Approved ESA housing usually excludes pet rent or additional deposits.",
];

const psdBullets = [
  "Specially trained dogs performing tasks supporting psychiatric disabilities.",
  "Legally recognized under the Americans with Disabilities Act.",
  "Allowed public access in restaurants, stores, workplaces, and other locations.",
];

export function WashingtonPsdVsEsaSection() {
  return (
    <section className="w-full bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1080px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-[840px] mx-auto mb-10 sm:mb-12 lg:mb-14">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-bold text-[#1E3E47] leading-[1.2] tracking-tight">
            Psychiatric Service Dogs vs. Emotional
            <br className="hidden sm:inline" /> Support Animals in Washington
          </h2>
          <p className="font-sans text-xs sm:text-sm lg:text-[15px] text-[#5F6B6F] font-medium leading-relaxed mt-3 max-w-[760px] mx-auto">
            It is critical to understand the distinctions between psychiatric service dogs (PSDs) and emotional support animals (ESAs) in Washington. While both help people with mental health issues, their training requirements, legal protections, and roles are very different.
          </p>
        </div>

        {/* 2 Horizontal Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-5 xl:gap-8 mb-10 lg:mb-12">
          
          {/* Card 1 (Left): Emotional Support Animals (ESA) */}
          <div className="bg-white rounded-[22px] sm:rounded-[26px] lg:rounded-[28px] border border-[#EAE5DC] shadow-[0_4px_20px_rgba(0,0,0,0.025)] flex flex-col sm:flex-row overflow-hidden">
            <div className="relative w-full sm:w-[32%] lg:w-[28%] xl:w-[34%] aspect-[4/3] sm:aspect-auto shrink-0 overflow-hidden">
              <Image
                src="/emotionalsupportnanimal.png"
                alt="Emotional Support Animals (ESA)"
                fill
                priority
                unoptimized
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
            </div>

            <div className="p-4 sm:p-4 lg:p-4.5 xl:p-5 flex flex-col justify-between flex-1 min-w-0">
              <div>
                <h3 className="font-heading text-lg sm:text-xl lg:text-[19px] xl:text-[21px] font-bold text-[#1E3E47] mb-3 leading-snug">
                  Emotional Support Animals
                  <br />
                  (ESA)
                </h3>
                
                <ul className="space-y-2 mb-4">
                  {esaBullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5F6B6F] shrink-0 mt-1.5" />
                      <span className="font-sans text-[11px] sm:text-[11.5px] lg:text-[11.5px] xl:text-[12.5px] text-[#5F6B6F] font-medium leading-tight">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-1 sm:gap-1.5 pt-1 flex-nowrap">
                <span className="font-sans text-[9px] sm:text-[10px] lg:text-[9.5px] xl:text-[11px] font-semibold text-[#184F59] bg-[#E7F5EE] px-1.5 sm:px-2 lg:px-1.5 xl:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap shrink-0">
                  Housing Rights
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] lg:text-[9.5px] xl:text-[11px] font-semibold text-[#184F59] bg-[#E7F5EE] px-1.5 sm:px-2 lg:px-1.5 xl:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap shrink-0">
                  No Pet Fees
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] lg:text-[9.5px] xl:text-[11px] font-semibold text-[#184F59] bg-[#E7F5EE] px-1.5 sm:px-2 lg:px-1.5 xl:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap shrink-0">
                  Emotional Support
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 (Right): Psychiatric Service Dogs (PSD) */}
          <div className="bg-white rounded-[22px] sm:rounded-[26px] lg:rounded-[28px] border border-[#EAE5DC] shadow-[0_4px_20px_rgba(0,0,0,0.025)] flex flex-col sm:flex-row overflow-hidden">
            <div className="relative w-full sm:w-[32%] lg:w-[28%] xl:w-[34%] aspect-[4/3] sm:aspect-auto shrink-0 overflow-hidden">
              <Image
                src="/psychiatricservicedogs.png"
                alt="Psychiatric Service Dogs (PSD)"
                fill
                priority
                unoptimized
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
            </div>

            <div className="p-4 sm:p-4 lg:p-4.5 xl:p-5 flex flex-col justify-between flex-1 min-w-0">
              <div>
                <h3 className="font-heading text-lg sm:text-xl lg:text-[19px] xl:text-[21px] font-bold text-[#1E3E47] mb-3 leading-snug">
                  Psychiatric Service Dogs
                  <br />
                  (PSD)
                </h3>

                <ul className="space-y-2 mb-4">
                  {psdBullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5F6B6F] shrink-0 mt-1.5" />
                      <span className="font-sans text-[11px] sm:text-[11.5px] lg:text-[11.5px] xl:text-[12.5px] text-[#5F6B6F] font-medium leading-tight">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-1 sm:gap-1.5 pt-1 flex-nowrap">
                <span className="font-sans text-[9px] sm:text-[10px] lg:text-[9.5px] xl:text-[11px] font-semibold text-[#184F59] bg-[#E7F5EE] px-1.5 sm:px-2 lg:px-1.5 xl:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap shrink-0">
                  Full Public Access
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] lg:text-[9.5px] xl:text-[11px] font-semibold text-[#184F59] bg-[#E7F5EE] px-1.5 sm:px-2 lg:px-1.5 xl:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap shrink-0">
                  Trained Tasks
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] lg:text-[9.5px] xl:text-[11px] font-semibold text-[#184F59] bg-[#E7F5EE] px-1.5 sm:px-2 lg:px-1.5 xl:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap shrink-0">
                  ADA Protected
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
