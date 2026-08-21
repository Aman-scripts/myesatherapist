"use client";

import React from "react";
import Image from "next/image";

const TRUSTPILOT_GREEN = "#00B67A";

function StarMark({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function TrustpilotStars() {
  return (
    <div className="flex gap-1.5">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="w-6 h-6 flex items-center justify-center shrink-0 rounded-[2px]" style={{ backgroundColor: TRUSTPILOT_GREEN }}>
          <StarMark className="w-4 h-4 text-white" />
        </div>
      ))}
      <div className="relative w-6 h-6 shrink-0 overflow-hidden rounded-[2px]" style={{ backgroundColor: "#CCCCCC" }}>
        <div className="absolute inset-y-0 left-0 w-1/2" style={{ backgroundColor: TRUSTPILOT_GREEN }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <StarMark className="w-4 h-4 text-white" />
        </div>
      </div>
    </div>
  );
}

export function PsdHeroSection() {
  return (
    <section className="relative w-full aspect-[1440/814] min-h-[560px] sm:min-h-[660px] lg:min-h-[760px] xl:min-h-[814px] bg-[#FAF7F2] overflow-hidden flex flex-col items-center">
      {/* Background Hero Image */}
      <Image
        src="/psd-hero-section.png"
        alt="Psychiatric Service Dog Letter Assistance illustration"
        fill
        priority
        className="object-cover object-top sm:object-center"
        sizes="100vw"
      />

      {/* Content Overlay Centered at top */}
      <div className="relative z-10 text-center flex flex-col items-center px-4 pt-8 sm:pt-14 lg:pt-16 xl:pt-20 max-w-4xl mx-auto">
        {/* Headline */}
        <h1 className="font-heading text-3xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-bold text-[#1E3E47] tracking-tight leading-[1.15] max-w-3xl">
          Psychiatric Service
          <br />
          Dog Letter Assistance
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base lg:text-[17px] text-[#475467] font-semibold max-w-xl mx-auto mt-4 sm:mt-5 leading-relaxed font-[family-name:var(--font-lato)]">
          Connect with state-licensed mental health professionals to discuss your needs and explore if a psychiatric service dog letter.
        </p>

        {/* Buttons Row */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-5 mt-6 sm:mt-7">
          {/* Schedule Consultation Button */}
          <a
            href="#pricing"
            className="flex items-center justify-center px-5 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white text-[#1E3E47] font-bold text-sm sm:text-base shadow-md border border-[#E2E8F0] hover:bg-gray-50 transition-all duration-200"
          >
            Schedule Consultation
          </a>

          {/* Call us Now Button */}
          <a
            href="tel:+18884124041"
            className="flex items-center justify-center gap-3 pl-6 sm:pl-7 pr-2 py-2 sm:py-2.5 rounded-full bg-[#1E3E47] text-white font-bold text-sm sm:text-base shadow-md hover:bg-[#163038] transition-all duration-200"
          >
            <span>Call us Now</span>
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
              <Image
                src="/send-icon.svg"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4 object-contain"
              />
            </span>
          </a>
        </div>

        {/* Centered Trustpilot Badge (Slightly larger) */}
        <div className="flex flex-col items-center gap-2 bg-white/80 backdrop-blur-md rounded-[20px] w-[230px] sm:w-[245px] px-5 pt-3 pb-2.5 mt-5 shadow-sm border border-white hover:bg-white/90 transition-colors">
          <div className="flex items-center gap-2">
            <StarMark className="w-5 h-5" style={{ color: TRUSTPILOT_GREEN }} />
            <span className="text-base font-bold text-[#5F6B6F] font-[family-name:var(--font-lato)]">Trustpilot</span>
          </div>
          <TrustpilotStars />
          <div className="flex items-center gap-2.5 text-xs text-[#5F6B6F] font-[family-name:var(--font-lato)] whitespace-nowrap">
            <span className="font-bold">Trustscore 4.4</span>
            <span className="font-medium">23,900 reviews</span>
          </div>
        </div>

      </div>
    </section>
  );
}
