"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { STATES_DATA } from "@/data/statesData";

const POPULAR_STATES = Object.values(STATES_DATA);
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
    <div className="flex gap-1.5">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="w-5 h-5 xl:w-6 xl:h-6 flex items-center justify-center shrink-0 rounded-[2px]"
          style={{ backgroundColor: TRUSTPILOT_GREEN }}
        >
          <StarMark className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-white" />
        </div>
      ))}
      <div
        className="relative w-5 h-5 xl:w-6 xl:h-6 shrink-0 overflow-hidden rounded-[2px]"
        style={{ backgroundColor: "#CCCCCC" }}
      >
        <div className="absolute inset-y-0 left-0 w-1/2" style={{ backgroundColor: TRUSTPILOT_GREEN }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <StarMark className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-white" />
        </div>
      </div>
    </div>
  );
}

export function PricingHero() {
  const router = useRouter();
  const [selectedState, setSelectedState] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRefMobile = useRef<HTMLDivElement>(null);
  const dropdownRefTablet = useRef<HTMLDivElement>(null);
  const dropdownRefDesktop = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      const isInside =
        (dropdownRefMobile.current && dropdownRefMobile.current.contains(target)) ||
        (dropdownRefTablet.current && dropdownRefTablet.current.contains(target)) ||
        (dropdownRefDesktop.current && dropdownRefDesktop.current.contains(target));

      if (!isInside) {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleStateSelect = (slug: string) => {
    setSelectedState(slug);
    setIsDropdownOpen(false);
    router.push(`/${slug}`);
  };

  return (
    <section className="relative z-30 w-full bg-[#FAF7F2] overflow-visible">
      {/* ---------------------------------------------------- */}
      {/* 1. MOBILE PRICING HERO SECTION (< 640px)             */}
      {/* ---------------------------------------------------- */}
      <div className="sm:hidden relative w-full aspect-[390/780] min-h-[620px]">
        <Image
          src="/pricing/pricing_section-hero_section_mobile.png"
          alt="Choose the Right ESA Package for You"
          fill
          priority
          className="object-cover object-bottom"
          sizes="(max-width: 639px) 100vw, 1px"
        />

        {/* Content Container at Top */}
        <div className="absolute inset-x-0 top-0 px-4 pt-6 text-center flex flex-col items-center z-10">
          {/* Stat Pills at top (Mobile) */}
          <div className="flex items-center justify-center gap-2 w-full max-w-[340px] mx-auto mb-3">
            <div className="flex-1 flex flex-col items-center justify-center bg-[#FAF7F2] py-1 px-1.5 rounded-[24px] text-center shadow-xs">
              <span className="font-heading font-bold text-xs leading-none bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                51,488+
              </span>
              <span className="text-[9px] text-[#949494] font-semibold mt-0.5 leading-tight font-sans">
                ESA Evaluations
              </span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center bg-[#FAF7F2] py-1 px-1.5 rounded-[24px] text-center shadow-xs">
              <span className="font-heading font-bold text-xs leading-none bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                5+
              </span>
              <span className="text-[9px] text-[#949494] font-semibold mt-0.5 leading-tight font-sans">
                Years Serving
              </span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center bg-[#FAF7F2] py-1 px-1.5 rounded-[24px] text-center shadow-xs">
              <span className="font-heading font-bold text-xs leading-none bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                4.9
              </span>
              <span className="text-[9px] text-[#949494] font-semibold mt-0.5 leading-tight font-sans">
                Verified Reviews
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-[26px] leading-[32px] font-bold text-[#2E5A66] tracking-[-0.0002em] max-w-[320px]">
            Choose the Right ESA Package for You
          </h1>

          {/* Subtitle */}
          <p className="text-[12px] leading-relaxed text-[#5F6B6F] font-semibold max-w-[300px] mx-auto mt-2 font-sans">
            No hidden fees. No upfront charges. Your card is authorized at booking but only charged after your evaluation is completed.
          </p>

          {/* Stacked Action Buttons */}
          <div className="flex flex-col items-center gap-2.5 mt-4 w-full max-w-[250px]">
            {/* State Dropdown */}
            <div className="relative w-full z-50" ref={dropdownRefMobile}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between px-5 h-[46px] w-full rounded-[30px] bg-[#FAF7F2] font-semibold text-sm shadow-sm hover:bg-white transition-colors border border-[#EAE5DC]"
              >
                <span className="flex items-center gap-2">
                  <Image
                    src="/home/hero-section-map.svg"
                    alt=""
                    width={16}
                    height={21}
                    unoptimized
                    className="shrink-0 object-contain w-[14px] h-[18px]"
                  />
                  <span className="bg-clip-text text-transparent truncate max-w-[140px]" style={{ backgroundImage: TEAL_GRADIENT }}>
                    {selectedState ? STATES_DATA[selectedState]?.name || "Start your State" : "Start your State"}
                  </span>
                </span>
                <ChevronDown className={`w-4 h-4 text-primary shrink-0 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute left-0 top-full mt-1.5 w-full max-h-[260px] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-white rounded-xl shadow-[0px_10px_25px_rgba(0,0,0,0.22)] border border-[#EAE5DC] z-[9999] p-2"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  <div className="py-1">
                    {POPULAR_STATES.map((state) => (
                      <button
                        key={state.slug}
                        type="button"
                        onClick={() => handleStateSelect(state.slug)}
                        className="w-full text-left px-3 py-2 text-xs font-sans font-medium text-neutral-700 hover:bg-[#FAF7F2] hover:text-[#1A3D4F] rounded-lg transition-colors flex items-center justify-between cursor-pointer"
                      >
                        <span>{state.name}</span>
                        <span className="text-[10px] text-neutral-400">{state.abbreviation}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Get Started CTA Button */}
            <a
              href="#plans"
              className="flex items-center justify-between pl-6 pr-1.5 h-[46px] w-full rounded-[30px] text-white font-semibold text-sm transition-opacity hover:opacity-90 shadow-sm"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <span>Get Started</span>
              <span className="w-[34px] h-[34px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image src="/common/send-icon.svg" alt="" width={17} height={19} className="w-[17px] h-[19px]" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. TABLET PRICING HERO SECTION (640px to 1023px)     */}
      {/* ---------------------------------------------------- */}
      <div className="hidden sm:block lg:hidden relative w-full aspect-[834/1200] min-h-[780px]">
        <Image
          src="/pricing/pricing_section-hero_section_tablet.png"
          alt="Choose the Right ESA Package for You"
          fill
          priority
          className="object-cover object-bottom"
          sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
        />

        {/* Content Container at Top */}
        <div className="absolute inset-x-0 top-0 px-6 pt-10 text-center flex flex-col items-center z-10">
          {/* Stat Pills */}
          <div className="flex items-center justify-center gap-3 w-full max-w-md mx-auto mb-4">
            <div className="flex-1 flex flex-col items-center justify-center bg-[#FAF7F2] py-2 px-3 rounded-[30px] shadow-xs">
              <span className="font-heading font-bold text-base leading-none bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                51,488+
              </span>
              <span className="text-[11px] text-[#949494] font-semibold mt-0.5 leading-tight font-sans">
                ESA Evaluations
              </span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center bg-[#FAF7F2] py-2 px-3 rounded-[30px] shadow-xs">
              <span className="font-heading font-bold text-base leading-none bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                5+
              </span>
              <span className="text-[11px] text-[#949494] font-semibold mt-0.5 leading-tight font-sans">
                Years Serving
              </span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center bg-[#FAF7F2] py-2 px-3 rounded-[30px] shadow-xs">
              <span className="font-heading font-bold text-base leading-none bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                4.9
              </span>
              <span className="text-[11px] text-[#949494] font-semibold mt-0.5 leading-tight font-sans">
                Verified Reviews
              </span>
            </div>
          </div>

          <h1 className="font-heading text-4xl sm:text-[42px] leading-tight font-bold text-[#2E5A66] max-w-lg">
            Choose the Right ESA Package for You
          </h1>

          <p className="text-sm sm:text-base leading-relaxed text-[#5F6B6F] font-semibold max-w-md mx-auto mt-3 font-sans">
            No hidden fees. No upfront charges. Your card is authorized at booking but only charged after your evaluation is completed by a licensed mental health professional.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap mt-6">
            {/* State Dropdown */}
            <div className="relative z-50" ref={dropdownRefTablet}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2.5 px-6 py-3 rounded-[30px] bg-[#FAF7F2] font-semibold text-base hover:bg-white transition-colors min-h-[48px] shadow-sm border border-[#EAE5DC]"
              >
                <Image
                  src="/home/hero-section-map.svg"
                  alt=""
                  width={16}
                  height={21}
                  unoptimized
                  className="shrink-0 object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                  {selectedState ? STATES_DATA[selectedState]?.name || "Start your State" : "Start your State"}
                </span>
                <ChevronDown className={`w-4 h-4 text-primary shrink-0 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute left-0 top-full mt-2 w-[260px] max-h-[280px] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-white rounded-xl shadow-[0px_10px_25px_rgba(0,0,0,0.22)] border border-[#EAE5DC] z-[9999] p-2"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  <div className="py-1">
                    {POPULAR_STATES.map((state) => (
                      <button
                        key={state.slug}
                        type="button"
                        onClick={() => handleStateSelect(state.slug)}
                        className="w-full text-left px-3 py-2 text-xs font-sans font-medium text-neutral-700 hover:bg-[#FAF7F2] hover:text-[#1A3D4F] rounded-lg transition-colors flex items-center justify-between cursor-pointer"
                      >
                        <span>{state.name}</span>
                        <span className="text-xs text-neutral-400">{state.abbreviation}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#plans"
              className="flex items-center gap-3 pl-6 pr-2 py-2 rounded-[30px] text-white font-semibold text-base transition-opacity hover:opacity-90 min-h-[48px] shadow-sm"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              Get Started
              <span className="w-[38px] h-[38px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image src="/common/send-icon.svg" alt="" width={20} height={22} className="w-[20px] h-[22px]" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. DESKTOP PRICING HERO SECTION (1024px and up)      */}
      {/* ---------------------------------------------------- */}
      <div className="hidden lg:block relative w-full aspect-[1440/802] min-h-[760px]">
        <Image
          src="/pricing/pricing_section-hero_section.png"
          alt="Choose the Right ESA Package for You"
          fill
          priority
          className="object-cover object-center"
          sizes="(min-width: 1024px) 100vw, 1px"
        />

        {/* Content Container Left-Aligned (Matches Figma Frame 1000011884) */}
        <div className="absolute left-[5%] xl:left-[82px] top-[14%] xl:top-[120px] max-w-[553px] z-10 flex flex-col items-start gap-[24px]">
          {/* Stat Pills at top (Frame 1000011901) */}
          <div className="flex items-center gap-3 w-full max-w-[513px]">
            {/* Pill 1 */}
            <div className="w-[163px] h-[53px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] flex flex-col items-center justify-center py-1.5 px-3">
              <span className="font-heading font-bold text-[24px] leading-[32px] bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                51,488+
              </span>
              <span className="font-sans font-semibold text-[12px] leading-[16px] text-[#949494]">
                ESA Evaluations
              </span>
            </div>

            {/* Pill 2 */}
            <div className="w-[163px] h-[53px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] flex flex-col items-center justify-center py-1.5 px-3">
              <span className="font-heading font-bold text-[24px] leading-[32px] bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                5+
              </span>
              <span className="font-sans font-semibold text-[12px] leading-[16px] text-[#949494]">
                Years Serving
              </span>
            </div>

            {/* Pill 3 */}
            <div className="w-[163px] h-[53px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] flex flex-col items-center justify-center py-1.5 px-3">
              <span className="font-heading font-bold text-[24px] leading-[32px] bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                4.9
              </span>
              <span className="font-sans font-semibold text-[12px] leading-[16px] text-[#949494]">
                Verified Reviews
              </span>
            </div>
          </div>

          {/* Heading (Playfair Display 56px/64px) */}
          <h1 className="font-heading text-[42px] xl:text-[56px] leading-[48px] xl:leading-[64px] font-bold text-[#2E5A66] tracking-[-0.0002em] max-w-[553px]">
            Choose the Right ESA Package for You
          </h1>

          {/* Description (Manrope 18px/30px #5F6B6F) */}
          <p className="font-sans font-semibold text-[15px] xl:text-[18px] leading-[26px] xl:leading-[30px] text-[#5F6B6F] max-w-[553px]">
            No hidden fees. No upfront charges. Your card is authorized at booking but only charged after your evaluation is completed by a licensed mental health professional.
          </p>

          {/* Action Row (Frame 7) */}
          <div className="flex items-center gap-3 xl:gap-4 flex-wrap mt-2">
            {/* State Dropdown */}
            <div className="relative z-50" ref={dropdownRefDesktop}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 xl:gap-2.5 px-5 xl:px-[29px] py-2.5 xl:py-3 rounded-[30px] bg-[#FAF7F2] font-semibold text-[15px] xl:text-[18px] hover:bg-white transition-colors h-[48px] xl:h-[54px] shrink-0 border border-[#EAE5DC] cursor-pointer shadow-[0px_2px_4px_rgba(0,0,0,0.15)]"
              >
                <Image
                  src="/home/hero-section-map.svg"
                  alt=""
                  width={16}
                  height={21}
                  unoptimized
                  className="shrink-0 object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                  {selectedState ? STATES_DATA[selectedState]?.name || "Start your State" : "Start your State"}
                </span>
                <ChevronDown className={`w-4 h-4 text-primary shrink-0 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute left-0 top-full mt-2 w-[280px] max-h-[340px] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-white rounded-2xl shadow-[0px_12px_32px_rgba(0,0,0,0.22)] border border-[#EAE5DC] z-[9999] p-2"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  <div className="py-1">
                    {POPULAR_STATES.map((state) => (
                      <button
                        key={state.slug}
                        type="button"
                        onClick={() => handleStateSelect(state.slug)}
                        className="w-full text-left px-3 py-2 text-sm font-sans font-medium text-neutral-700 hover:bg-[#FAF7F2] hover:text-[#1A3D4F] rounded-lg transition-colors flex items-center justify-between cursor-pointer"
                      >
                        <span>{state.name}</span>
                        <span className="text-xs text-neutral-400 font-mono">{state.abbreviation}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Get Started CTA Button */}
            <a
              href="#plans"
              className="flex items-center gap-2.5 xl:gap-3 pl-5 xl:pl-6 pr-1.5 xl:pr-2 py-1.5 xl:py-2 rounded-[30px] text-white font-semibold text-[15px] xl:text-[16px] transition-opacity hover:opacity-90 h-[48px] xl:h-[48px] shrink-0 shadow-[0px_2px_4px_rgba(0,0,0,0.15)]"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <span>Get Started</span>
              <span className="w-[36px] h-[36px] xl:w-[42px] xl:h-[42px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image src="/common/send-icon.svg" alt="" width={22} height={24} className="w-[19px] h-[21px] xl:w-[22px] xl:h-[24px]" />
              </span>
            </a>
          </div>

          {/* Trustpilot Badge (Frame 1000011802) */}
          <div className="flex flex-col items-center gap-[6px] xl:gap-[8px] bg-white/55 backdrop-blur-sm rounded-[20px] w-[201px] px-4 py-2.5 mt-2 border border-white/10 shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
            <div className="flex items-center gap-[6px]">
              <StarMark className="w-[18px] h-[17px] xl:w-[20px] xl:h-[19px]" style={{ color: TRUSTPILOT_GREEN }} />
              <span className="text-[14px] xl:text-[16px] text-[#5F6B6F] font-[family-name:var(--font-lato)]">Trustpilot</span>
            </div>
            <TrustpilotStars />
            <div className="flex items-center gap-[8px] xl:gap-[10px] text-[11px] xl:text-xs text-[#5F6B6F] font-[family-name:var(--font-lato)] whitespace-nowrap">
              <span>Trustscore 4.9</span>
              <span>•</span>
              <span>Verified Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
