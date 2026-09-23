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
    name: "Robert Staaf",
    title: "Licensed Clinical Social Worker",
    evaluations: "1,200+ evaluations",
    avatar: "/doctors/robert-staaf-profile-image.webp",
    linkedin: "https://www.linkedin.com/in/robert-staaf-b57b53333/",
  },
  {
    name: "Leslie K. Gamble",
    title: "Licensed Independent Clinical Social Worker",
    evaluations: "950+ evaluations",
    avatar: "/doctors/leslie-k.-gamble-licsw-image.webp",
    linkedin: "https://www.linkedin.com/in/leslie-gamble-727571366",
  },
  {
    name: "Gaurav Patel",
    title: "Family Medicine Physician",
    evaluations: "1,500+ evaluations",
    avatar: "/doctors/dr-gaurav-patel-image.webp",
    linkedin: "https://www.linkedin.com/in/gaurav-patel-m-d-b5565916",
  },
];

export function LicensedProfessionalsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF7F2] w-full">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 max-w-[760px] mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#2E5A66] leading-tight lg:leading-[54px] tracking-tight mb-4">
            Our Licensed Professionals for PSD Support
          </h2>
          <p className="text-[#5F6B6F] text-base sm:text-[18px] font-semibold leading-relaxed lg:leading-[30px] font-sans">
            Our network includes state-licensed professionals who specialize in mental health conditions relevant to service animal evaluations.
          </p>
        </div>

        {/* 3 Professional Cards Grid (Frame 1000011782) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1140px] mx-auto">
          {professionals.map((prof, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-[10px] p-6 sm:p-8 flex flex-col items-center text-center shadow-[0px_2px_4px_rgba(0,0,0,0.15)] hover:shadow-md transition-all duration-200"
            >
              {/* Top-Right LinkedIn Icon */}
              <a
                href={prof.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${prof.name} LinkedIn Profile`}
                className="absolute top-5 right-5 w-7 h-7 rounded-full bg-[#E8B92C] hover:bg-[#dba81f] flex items-center justify-center text-[#1A3D4F] shadow-xs hover:scale-105 transition-all"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="4.98" cy="4.98" r="2.4" />
                  <rect x="2.8" y="9.5" width="4.4" height="12.5" rx="0.5" />
                  <path d="M10.5 9.5h4.2v1.8c.6-1.1 2-2.1 4.1-2.1 4.4 0 5.2 2.9 5.2 6.6v6.2h-4.4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.6h-4.4V9.5z" />
                </svg>
              </a>

              {/* Avatar Image (120x120 Circular with gold ring) */}
              <a
                href={prof.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[120px] h-[120px] rounded-full overflow-hidden mb-6 relative bg-[#E5ECEE] shrink-0 border-2 border-[#E8B92C] shadow-sm hover:opacity-95 transition-opacity block"
              >
                <Image
            quality={90}
                  src={prof.avatar}
                  alt={prof.name}
                  width={120}
                  height={120}
                  className="object-cover w-full h-full"
                />
              </a>

              {/* Professional Name */}
              <a
                href={prof.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-lg sm:text-[20px] font-bold text-[#313131] hover:text-[#1D6E72] transition-colors leading-[28px] mb-1"
              >
                {prof.name}
              </a>

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
