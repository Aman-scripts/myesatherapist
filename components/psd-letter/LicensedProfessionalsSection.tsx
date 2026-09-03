"use client";

import React from "react";
import Image from "next/image";

function ThreeDotsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="5" height="22" viewBox="0 0 5 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="2.5" cy="2.5" r="2.5" />
      <circle cx="2.5" cy="11.0" r="2.5" />
      <circle cx="2.5" cy="19.5" r="2.5" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="#F0BB00" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0L10.472 5.008L16 5.816L12 9.712L12.944 15.216L8 12.616L3.056 15.216L4 9.712L0 5.816L5.528 5.008L8 0Z" />
    </svg>
  );
}

const professionals = [
  {
    name: "Chris Evans, California",
    title: "LCSW | 18 years Experience",
    evaluations: "1200+ evaluations",
    avatar: "/common/licensedprofessional-section.png",
  },
  {
    name: "Chris Evans, California",
    title: "LCSW | 18 years Experience",
    evaluations: "1200+ evaluations",
    avatar: "/common/licensedprofessional-section.png",
  },
  {
    name: "Chris Evans, California",
    title: "LCSW | 18 years Experience",
    evaluations: "1200+ evaluations",
    avatar: "/common/licensedprofessional-section.png",
  },
];

export function LicensedProfessionalsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF7F2] w-full">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Frame 1000011783 Heading) */}
        <div className="text-center mb-12 lg:mb-16 max-w-[760px] mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#2E5A66] leading-tight lg:leading-[54px] tracking-tight mb-4">
            Licensed Professionals ready to help
          </h2>
          <p className="text-[#5F6B6F] text-base sm:text-[18px] font-semibold leading-relaxed lg:leading-[30px] font-sans">
            All 200+ professionals in our network are state-licensed and specialize in mental-health conditions relevant to service animal evaluations.
          </p>
        </div>

        {/* 3 Professional Cards Grid (Frame 1000011782) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1140px] mx-auto">
          {professionals.map((prof, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-[10px] p-6 sm:p-8 flex flex-col items-center text-center shadow-[0px_2px_4px_rgba(0,0,0,0.15)] hover:shadow-md transition-all duration-200"
            >
              {/* Top-Right 3-Dot Menu Icon */}
              <div className="absolute top-6 right-6 text-[#2E5A66]/40 hover:text-[#2E5A66] transition-colors cursor-pointer">
                <ThreeDotsIcon className="w-1.25 h-5" />
              </div>

              {/* Avatar Image (120x120 Circular) */}
              <div className="w-[120px] h-[120px] rounded-full overflow-hidden mb-6 relative bg-[#E5ECEE] shrink-0">
                <Image
                  src={prof.avatar}
                  alt={prof.name}
                  width={120}
                  height={120}
                  unoptimized
                  priority
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Professional Name */}
              <h3 className="font-heading text-lg sm:text-[20px] font-bold text-[#313131] leading-[28px] mb-1">
                {prof.name}
              </h3>

              {/* Title & Experience */}
              <p className="text-sm sm:text-[14px] font-semibold text-[#6B6B6B] leading-[26px] mb-4 font-sans">
                {prof.title}
              </p>

              {/* 5-Star Rating & Evaluations Count */}
              <div className="flex flex-col items-center gap-1.5 mt-auto">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4" />
                  ))}
                </div>
                <span className="text-xs text-[#2E5A66] font-normal font-sans">
                  {prof.evaluations}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
