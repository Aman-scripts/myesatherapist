"use client";

import React from "react";
import Image from "next/image";

const TRUSTPILOT_GREEN = "#00B67A";
const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

function StarMark({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function TrustpilotStars() {
  return (
    <div className="flex gap-2">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="w-6 h-6 flex items-center justify-center shrink-0" style={{ backgroundColor: TRUSTPILOT_GREEN }}>
          <StarMark className="w-4 h-4 text-white" />
        </div>
      ))}
      <div className="relative w-6 h-6 shrink-0 overflow-hidden" style={{ backgroundColor: "#CCCCCC" }}>
        <div className="absolute inset-y-0 left-0 w-1/2" style={{ backgroundColor: TRUSTPILOT_GREEN }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <StarMark className="w-4 h-4 text-white" />
        </div>
      </div>
    </div>
  );
}

const statsData = [
  { value: "51,488+", label: "ESA Evaluations" },
  { value: "5+", label: "Years Serving" },
  { value: "4.9", label: "Verified Reviews" },
];

export function BlogsHero() {
  return (
    <section className="relative overflow-hidden bg-warm-bg">
      {/* Responsive Container (matching Homepage Hero layout structure) */}
      <div className="relative w-full aspect-[1441/744] min-h-[620px] xl:min-h-0">
        {/* Background Image: blog-hero_section.png */}
        <Image
          src="/blog-hero_section.png"
          alt="Your Guide to Emotional Support Animals"
          fill
          priority
          className="object-cover lg:object-[82%_center] xl:object-center"
          sizes="100vw"
        />

        {/* Content — Positioned matching Homepage Hero text area structure */}
        <div className="absolute inset-0 z-10">
          <div className="absolute left-[4%] xl:left-[5.69%] top-[6%] xl:top-[12.37%] w-[88%] sm:w-[60%] lg:w-[48%] xl:w-[47.05%] max-w-[640px]">
            
            {/* Stat Pills */}
            <div className="flex items-center gap-[10px] xl:gap-[12px] flex-wrap">
              {statsData.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center bg-[#FAF7F2] py-1.5 xl:py-2 px-3.5 xl:px-5 rounded-[30px] text-center shadow-xs"
                >
                  <span
                    className="font-heading text-lg lg:text-xl xl:text-2xl font-bold leading-none bg-clip-text text-transparent"
                    style={{ backgroundImage: TEAL_GRADIENT }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[10px] xl:text-xs font-semibold text-[#5F6B6F] mt-0.5 xl:mt-1 whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Headline:
                Line 1: "Your Guide to Emotional" ("Your Guide to" in Teal Gradient, "Emotional" in #5F6B6F)
                Line 2: "Support Animals" (in #5F6B6F)
            */}
            <h1 className="font-heading text-[32px] sm:text-[40px] lg:text-[38px] xl:text-[56px] font-bold tracking-[-0.015em] leading-[1.15] lg:leading-[46px] xl:leading-[64px] mt-4 xl:mt-6">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                Your Guide to
              </span>{" "}
              <span className="text-[#5F6B6F]">
                Emotional
              </span>
              <br />
              <span className="text-[#5F6B6F]">
                Support Animals
              </span>
            </h1>

            {/* Subheading: Manrope, 600, 18px, line-height 30px, color #5F6B6F */}
            <p className="font-sans font-semibold text-[15px] sm:text-[18px] lg:text-[18px] xl:text-[18px] leading-[24px] sm:leading-[30px] lg:leading-[30px] xl:leading-[30px] text-[#5F6B6F] max-w-[480px] xl:max-w-[540px] mt-3 xl:mt-4">
              Connect ESA letters, emotional well-being, housing rights, and life with an Emotional Support Animal.
            </p>

            {/* Trustpilot Badge */}
            <div className="flex flex-col items-center gap-[6px] xl:gap-[8px] bg-white/55 backdrop-blur-sm rounded-[20px] w-[210px] xl:w-[230px] px-3.5 xl:px-[18px] py-2 xl:pt-[11px] xl:pb-[9px] mt-4 xl:mt-[24px]">
              <div className="flex items-center gap-[6px]">
                <StarMark className="w-[18px] h-[17px] xl:w-[20px] xl:h-[19px]" style={{ color: TRUSTPILOT_GREEN }} />
                <span className="text-[14px] xl:text-[16px] text-[#5F6B6F] font-[family-name:var(--font-lato)]">Trustpilot</span>
              </div>
              <TrustpilotStars />
              <div className="flex items-center gap-[8px] xl:gap-[10px] text-[11px] xl:text-xs text-[#5F6B6F] font-[family-name:var(--font-lato)] whitespace-nowrap">
                <span className="font-semibold">Trustscore 4.4</span>
                <span>23,900 reviews</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
