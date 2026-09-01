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
    <section className="relative w-full bg-[#EEEBE0] overflow-hidden">
      {/* ---------------------------------------------------- */}
      {/* 1. MOBILE BLOGS HERO SECTION (sm:hidden / < 640px)   */}
      {/* Uses /blog_hero-section-mobile.png                   */}
      {/* ---------------------------------------------------- */}
      <div className="sm:hidden relative w-full aspect-[390/780] min-h-[600px] max-h-[760px] overflow-hidden">
        <Image
          src="/blog_hero-section-mobile.png"
          alt="Your Guide to Emotional Support Animals"
          fill
          priority
          className="object-cover object-bottom pointer-events-none"
          sizes="100vw"
        />

        {/* Content Container at Top */}
        <div className="absolute inset-x-0 top-0 px-3 pt-6 text-center flex flex-col items-center z-10">
          {/* Stat Pills at top (Mobile) */}
          <div className="flex items-center justify-center gap-2 w-full max-w-[340px] mx-auto mb-3.5">
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className="flex-1 flex flex-col items-center justify-center bg-[#FAF7F2] py-1.5 px-1 rounded-[24px] text-center shadow-xs"
              >
                <span
                  className="font-heading text-[16px] font-bold leading-none bg-clip-text text-transparent"
                  style={{ backgroundImage: TEAL_GRADIENT }}
                >
                  {stat.value}
                </span>
                <span className="text-[9.5px] font-semibold text-[#5F6B6F] mt-0.5 whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Headline */}
          <h1 className="font-heading text-[24px] leading-[1.2] font-bold tracking-[-0.011em] max-w-xs mx-auto">
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
              Your Guide to
            </span>
            <br />
            <span className="text-[#5F6B6F]">
              Emotional Support Animals
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-[12.5px] leading-relaxed text-[#5F6B6F] font-semibold max-w-[290px] mx-auto mt-2.5 font-sans">
            Connect ESA letters, emotional well-being, housing rights, and life with an Emotional Support Animal.
          </p>

          {/* Stacked Action Buttons */}
          <div className="flex flex-col items-center gap-2.5 mt-4 w-full max-w-[250px]">
            {/* State Dropdown Button */}
            <button className="flex items-center justify-between px-5 h-[46px] w-full rounded-[30px] bg-[#FAF7F2] font-semibold text-sm shadow-sm hover:bg-white transition-colors">
              <span className="flex items-center gap-2">
                <Image
                  src="/hero-section-map.svg"
                  alt=""
                  width={16}
                  height={21}
                  unoptimized
                  className="shrink-0 object-contain w-[14px] h-[18px]"
                />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                  Start your State
                </span>
              </span>
              <svg className="w-4 h-4 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>

            {/* Get Started CTA Button */}
            <a
              href="#featured"
              className="flex items-center justify-between pl-6 pr-1.5 h-[46px] w-full rounded-[30px] text-white font-semibold text-sm transition-opacity hover:opacity-90 shadow-sm"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <span>Get Started</span>
              <span className="w-[34px] h-[34px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image src="/send-icon.svg" alt="" width={17} height={19} className="w-[17px] h-[19px]" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. TABLET BLOGS HERO SECTION (sm: to lg: / 640-1023px)*/}
      {/* Uses /blog_hero-section-tablet.png                   */}
      {/* ---------------------------------------------------- */}
      <div className="hidden sm:flex lg:hidden relative w-full aspect-[834/1100] min-h-[720px] max-h-[920px] overflow-hidden">
        <Image
          src="/blog_hero-section-tablet.png"
          alt="Your Guide to Emotional Support Animals"
          fill
          priority
          className="object-cover object-bottom pointer-events-none"
          sizes="100vw"
        />

        {/* Content Container at Top */}
        <div className="absolute inset-x-0 top-0 px-6 pt-10 text-center flex flex-col items-center z-10 space-y-4 max-w-[620px] mx-auto">
          {/* Top Pill Badges */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center bg-[#FAF7F2] px-4 py-2 rounded-[30px] text-center min-w-[120px] shadow-xs"
              >
                <span
                  className="font-heading text-xl font-bold leading-none bg-clip-text text-transparent"
                  style={{ backgroundImage: TEAL_GRADIENT }}
                >
                  {stat.value}
                </span>
                <span className="text-[11px] font-semibold text-[#5F6B6F] mt-1 whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Headline */}
          <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-[-0.011em] mt-2 leading-tight max-w-xl mx-auto">
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
              Your Guide to
            </span>
            <br />
            <span className="text-[#5F6B6F]">
              Emotional Support Animals
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base leading-relaxed text-[#5F6B6F] font-semibold max-w-md mx-auto font-sans">
            Connect ESA letters, emotional well-being, housing rights, and life with an Emotional Support Animal.
          </p>

          {/* Action Buttons in a Row */}
          <div className="flex items-center justify-center gap-3 flex-wrap pt-2">
            <button className="flex items-center gap-2.5 px-6 py-3 rounded-[30px] bg-[#FAF7F2] font-semibold text-base hover:bg-white transition-colors min-h-[48px] shadow-sm">
              <Image
                src="/hero-section-map.svg"
                alt=""
                width={16}
                height={21}
                unoptimized
                className="shrink-0 object-contain"
                style={{ width: "auto", height: "auto" }}
              />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                Start your State
              </span>
              <svg className="w-4 h-4 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>

            <a
              href="#featured"
              className="flex items-center gap-3 pl-6 pr-2 py-2 rounded-[30px] text-white font-semibold text-base transition-opacity hover:opacity-90 min-h-[48px] shadow-sm"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              Get Started
              <span className="w-[38px] h-[38px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image src="/send-icon.svg" alt="" width={20} height={22} className="w-[20px] h-[22px]" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. DESKTOP BLOGS HERO SECTION (lg: / 1024px and up)   */}
      {/* Uses /blog-hero_section.png                          */}
      {/* ---------------------------------------------------- */}
      <div className="hidden lg:block relative w-full aspect-[1441/744] min-h-[580px] xl:min-h-0">
        <Image
          src="/blog-hero_section.png"
          alt="Your Guide to Emotional Support Animals"
          fill
          priority
          className="object-cover lg:object-[82%_center] xl:object-center pointer-events-none"
          sizes="100vw"
        />

        {/* Content Container */}
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

            {/* Headline */}
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

            {/* Subheading */}
            <p className="font-sans font-semibold text-[15px] sm:text-[18px] lg:text-[18px] xl:text-[18px] leading-[24px] sm:leading-[30px] lg:leading-[30px] xl:leading-[30px] text-[#5F6B6F] max-w-[480px] xl:max-w-[540px] mt-3 xl:mt-4">
              Connect ESA letters, emotional well-being, housing rights, and life with an Emotional Support Animal.
            </p>

            {/* Action Buttons in a Row (Desktop) */}
            <div className="flex items-center gap-2.5 xl:gap-3 flex-wrap mt-4 xl:mt-6">
              <button className="flex items-center gap-2 xl:gap-2.5 px-4 xl:px-[29px] py-2.5 xl:py-3 rounded-[30px] bg-[#FAF7F2] font-semibold text-[14.5px] xl:text-[18px] hover:bg-white transition-colors h-[46px] xl:h-[54px] shrink-0 shadow-xs">
                <Image
                  src="/hero-section-map.svg"
                  alt=""
                  width={16}
                  height={21}
                  unoptimized
                  className="shrink-0 object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                  Start your State
                </span>
                <svg className="w-4 h-4 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>

              <a
                href="#featured"
                className="flex items-center gap-2.5 xl:gap-3 pl-4 lg:pl-5 xl:pl-6 pr-1.5 lg:pr-2 py-1.5 lg:py-2 rounded-[30px] text-white font-semibold text-[14.5px] xl:text-[16px] transition-opacity hover:opacity-90 h-[46px] xl:h-[48px] shrink-0 shadow-xs"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                Get Started
                <span className="w-[36px] h-[36px] xl:w-[42px] xl:h-[42px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                  <Image src="/send-icon.svg" alt="" width={22} height={24} className="w-[19px] h-[21px] xl:w-[22px] xl:h-[24px]" />
                </span>
              </a>
            </div>

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
