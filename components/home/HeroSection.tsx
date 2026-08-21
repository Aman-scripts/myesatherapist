"use client";

import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

// Trustpilot green (brand-locked, not part of the site palette)
const TRUSTPILOT_GREEN = "#00B67A";

// Figma: linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)
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

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-warm-bg">
      {/* ---------------------------------------------------- */}
      {/* 1. MOBILE HERO SECTION (< sm / < 640px)              */}
      {/* Matches Screenshot 2                                 */}
      {/* ---------------------------------------------------- */}
      <div className="block sm:hidden relative w-full aspect-[390/833] min-h-[680px]">
        {/* Background Image: mobile-hero-section.png */}
        <Image
          src="/mobile-hero-section.png"
          alt="Emotional Support Animal Evaluations"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />

        {/* Content Container (Centered) */}
        <div className="absolute inset-x-0 top-0 px-4 pt-10 text-center flex flex-col items-center z-10">
          {/* Headline */}
          <h1 className="font-heading text-[26px] leading-[1.2] font-bold tracking-[-0.011em]">
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
              Emotional Support
              <br />
              Animal Evaluations
              <br />
            </span>
            <span className="text-[#5F6B6F]">by Licensed Professionals</span>
          </h1>

          {/* Subheading */}
          <p className="text-[13px] leading-[1.5] text-[#5F6B6F] font-semibold max-w-[310px] mx-auto mt-3 font-[family-name:var(--font-lato)]">
            Connect with US licensed mental health professionals for ESA evaluation conducted through secure telehealth and aligned with federal housing guidelines.
          </p>

          {/* Stacked Action Buttons */}
          <div className="flex flex-col items-center gap-3 mt-5 w-full max-w-[250px]">
            {/* State Dropdown Button */}
            <button className="flex items-center justify-between px-5 h-[48px] w-full rounded-[30px] bg-[#FAF7F2] font-semibold text-sm shadow-sm hover:bg-white transition-colors">
              <span className="flex items-center gap-2">
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
              </span>
              <ChevronDown className="w-4 h-4 text-primary shrink-0" />
            </button>

            {/* Get Started CTA Button */}
            <a
              href="#how-it-works"
              className="flex items-center justify-between pl-6 pr-1.5 h-[48px] w-full rounded-[30px] text-white font-semibold text-sm transition-opacity hover:opacity-90 shadow-sm"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <span>Get Started</span>
              <span className="w-[36px] h-[36px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image src="/send-icon.svg" alt="" width={16} height={18} style={{ width: "auto", height: "auto" }} />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. TABLET HERO SECTION (sm: to lg: / 640px to 1023px) */}
      {/* Matches Screenshot 1                                 */}
      {/* ---------------------------------------------------- */}
      <div className="hidden sm:block lg:hidden relative w-full aspect-[834/1385] min-h-[900px]">
        {/* Background Image: tablet-hero-section.png */}
        <Image
          src="/tablet-hero-section.png"
          alt="Emotional Support Animal Evaluations"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />

        {/* Content Container (Centered) */}
        <div className="absolute inset-x-0 top-0 px-6 pt-12 text-center flex flex-col items-center z-10">
          {/* Stat Pills at top */}
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
                <span className="text-[11px] font-semibold text-[#5F6B6F] mt-1 whitespace-nowrap">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Headline */}
          <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-[-0.011em] mt-6 leading-tight max-w-xl mx-auto">
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
              Emotional Support
              <br />
              Animal Evaluations
              <br />
            </span>
            <span className="text-[#5F6B6F]">by Licensed Professionals</span>
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base leading-relaxed text-[#5F6B6F] font-semibold max-w-md mx-auto mt-4 font-[family-name:var(--font-lato)]">
            Connect with US licensed mental health professionals for ESA evaluation conducted through secure telehealth and aligned with federal housing guidelines.
          </p>

          {/* Side-by-side Action Row */}
          <div className="flex items-center justify-center gap-3 flex-wrap mt-6">
            {/* State Dropdown */}
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
              <ChevronDown className="w-4 h-4 text-primary shrink-0" />
            </button>

            {/* Get Started Button */}
            <a
              href="#how-it-works"
              className="flex items-center gap-3 pl-6 pr-2 py-2 rounded-[30px] text-white font-semibold text-base transition-opacity hover:opacity-90 min-h-[48px] shadow-sm"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              Get Started
              <span className="w-[38px] h-[38px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image src="/send-icon.svg" alt="" width={18} height={20} style={{ width: "auto", height: "auto" }} />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. DESKTOP HERO SECTION (lg: / 1024px and up)        */}
      {/* Exact Figma Layout                                   */}
      {/* ---------------------------------------------------- */}
      <div className="hidden lg:block relative w-full aspect-[1441/744]">
        {/* Background Image: hero-section.png */}
        <Image
          src="/hero-section.png"
          alt="Woman embracing her emotional support golden retriever outdoors"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Content — positioned at exact Figma offsets: left 5.69%, top 12.37%, width 47.05% */}
        <div className="absolute inset-0">
          <div className="absolute left-[5.69%] top-[12.37%] w-[47.05%]">
            {/* Stat Pills */}
            <div className="flex items-center gap-[0.83%] flex-wrap">
              {statsData.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center bg-[#FAF7F2] py-2 rounded-[30px] text-center w-[31%] aspect-[163/53] min-w-[110px]"
                >
                  <span
                    className="font-heading text-2xl font-bold leading-none bg-clip-text text-transparent"
                    style={{ backgroundImage: TEAL_GRADIENT }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-[#5F6B6F] mt-1 whitespace-nowrap">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Headline */}
            <h1 className="font-heading text-[44px] xl:text-[52px] font-bold tracking-[-0.011em] leading-[1.15] mt-6">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                Emotional Support
                <br />
                Animal Evaluations
                <br />
              </span>
              <span className="text-[#5F6B6F]">by Licensed Professionals</span>
            </h1>

            {/* Subheading */}
            <p className="text-[16px] leading-[1.625] text-[#5F6B6F] font-semibold max-w-none mt-4 font-[family-name:var(--font-lato)]">
              Connect with US licensed mental health professionals for ESA evaluation conducted through secure telehealth and aligned with federal housing guidelines.
            </p>

            {/* Action Row */}
            <div className="flex items-center gap-3 flex-wrap mt-6">
              {/* State Dropdown */}
              <button className="flex items-center gap-2.5 px-[29px] py-3 rounded-[30px] bg-[#FAF7F2] font-semibold text-[18px] hover:bg-white transition-colors h-[54px]">
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
                <ChevronDown className="w-4 h-4 text-primary shrink-0" />
              </button>

              {/* Get Started Button */}
              <a
                href="#how-it-works"
                className="flex items-center gap-3 pl-6 pr-2 py-2 rounded-[30px] text-white font-semibold text-[16px] transition-opacity hover:opacity-90 h-[48px]"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                Get Started
                <span className="w-[42px] h-[42px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                  <Image src="/send-icon.svg" alt="" width={18} height={20} style={{ width: "auto", height: "auto" }} />
                </span>
              </a>
            </div>

            {/* Trustpilot Badge */}
            <div className="flex flex-col items-center gap-[8px] bg-white/55 backdrop-blur-sm rounded-[20px] w-[230px] px-[18px] pt-[11px] pb-[9px] mt-[30px]">
              <div className="flex items-center gap-[6px]">
                <StarMark className="w-[20px] h-[19px]" style={{ color: TRUSTPILOT_GREEN }} />
                <span className="text-[16px] text-[#5F6B6F] font-[family-name:var(--font-lato)]">Trustpilot</span>
              </div>
              <TrustpilotStars />
              <div className="flex items-center gap-[10px] text-xs text-[#5F6B6F] font-[family-name:var(--font-lato)] whitespace-nowrap">
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

