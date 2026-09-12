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
    <div className="flex gap-1.5 items-center">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="w-5 h-5 xl:w-6 xl:h-6 flex items-center justify-center shrink-0 rounded-[2px]"
          style={{ backgroundColor: TRUSTPILOT_GREEN }}
        >
          <StarMark className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-white" />
        </div>
      ))}
      {/* 5th Star: Half Green / Half Gray */}
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

export function ReviewsHeroSection() {
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
      {/* 1. MOBILE REVIEWS HERO SECTION (< 640px)             */}
      {/* ---------------------------------------------------- */}
      <div className="sm:hidden relative w-full aspect-[390/760] min-h-[640px]">
        <Image
          src="/reviews/reviews_phone-hero_section.png"
          alt="What Our Clients Are Saying"
          fill
          priority
          className="object-cover object-bottom"
          sizes="(max-width: 639px) 100vw, 1px"
        />

        {/* Mobile Content Layer */}
        <div className="absolute inset-x-0 top-0 px-4 pt-6 text-center flex flex-col items-center z-10">
          {/* Stat Pills Row */}
          <div className="flex items-center justify-center gap-1.5 w-full max-w-[345px] mx-auto mb-3">
            {/* Pill 1 */}
            <div className="flex-1 flex flex-col items-center justify-center bg-[#FAF7F2] py-1 px-1.5 rounded-[24px] text-center shadow-[0px_2px_4px_rgba(0,0,0,0.12)]">
              <span
                className="font-heading font-bold text-[18px] leading-[22px] bg-clip-text text-transparent"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                50
              </span>
              <span className="font-sans font-semibold text-[10px] leading-[13px] text-[#949494] whitespace-nowrap">
                USA States
              </span>
            </div>

            {/* Pill 2 */}
            <div className="flex-1 flex flex-col items-center justify-center bg-[#FAF7F2] py-1 px-1.5 rounded-[24px] text-center shadow-[0px_2px_4px_rgba(0,0,0,0.12)]">
              <span
                className="font-heading font-bold text-[18px] leading-[22px] bg-clip-text text-transparent"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                HIPAA
              </span>
              <span className="font-sans font-semibold text-[10px] leading-[13px] text-[#949494] whitespace-nowrap">
                Compliant
              </span>
            </div>

            {/* Pill 3 */}
            <div className="flex-1 flex flex-col items-center justify-center bg-[#FAF7F2] py-1 px-1.5 rounded-[24px] text-center shadow-[0px_2px_4px_rgba(0,0,0,0.12)]">
              <span
                className="font-heading font-bold text-[18px] leading-[22px] bg-clip-text text-transparent"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                100%
              </span>
              <span className="font-sans font-semibold text-[10px] leading-[13px] text-[#949494] whitespace-nowrap">
                Licensed Pros
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-[30px] leading-[36px] font-bold text-[#2E5A66] tracking-[-0.0002em] mb-2 max-w-[340px]">
            What Our Clients Are Saying
          </h1>

          {/* Subtitle */}
          <p className="font-sans font-semibold text-[13px] leading-[20px] text-[#5F6B6F] mb-4 max-w-[330px]">
            Real experiences from people who found comfort and confidence through My ESA Therapist.
          </p>

          {/* Actions Stack */}
          <div className="flex flex-col items-center gap-2.5 w-full max-w-[280px]">
            {/* State Selector */}
            <div className="relative w-full" ref={dropdownRefMobile}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-[30px] bg-[#FAF7F2] font-semibold text-xs transition-colors shadow-[0px_2px_4px_rgba(0,0,0,0.15)] border border-[#EAE5DC]"
              >
                <Image
                  src="/home/hero-section-map.svg"
                  alt=""
                  width={14}
                  height={18}
                  className="shrink-0 object-contain"
                />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                  {selectedState ? STATES_DATA[selectedState]?.name || "Select your State" : "Select your State"}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 text-primary shrink-0 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute left-0 top-full mt-1.5 w-full max-h-[220px] overflow-y-auto bg-white rounded-xl shadow-xl border border-[#EAE5DC] z-[9999] p-1.5"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  <div className="py-1">
                    {POPULAR_STATES.map((state) => (
                      <button
                        key={state.slug}
                        type="button"
                        onClick={() => handleStateSelect(state.slug)}
                        className="w-full text-left px-3 py-1.5 text-xs font-sans font-medium text-neutral-700 hover:bg-[#FAF7F2] hover:text-[#1A3D4F] rounded-lg transition-colors flex items-center justify-between"
                      >
                        <span>{state.name}</span>
                        <span className="text-[10px] text-neutral-400">{state.abbreviation}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Get Started Button */}
            <a
              href="#trustpilot-reviews"
              className="w-full flex items-center justify-center gap-2 pl-4 pr-1 py-1 rounded-[30px] text-white font-semibold text-xs shadow-[0px_2px_4px_rgba(0,0,0,0.15)]"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <span>Get Started</span>
              <span className="w-7 h-7 rounded-full bg-[#FAF7F2] shadow-[0_2px_4px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image src="/common/send-icon.svg" alt="" width={14} height={14} />
              </span>
            </a>
          </div>

          {/* Trustpilot Glass Card (Mobile) */}
          <div className="mt-4 p-2.5 rounded-[16px] bg-white/75 backdrop-blur-[10px] border border-white/40 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] flex flex-col items-center gap-1.5 max-w-[180px]">
            <div className="flex items-center gap-1.5">
              <StarMark className="w-4 h-4 text-[#00B67A]" />
              <span className="font-[family-name:var(--font-lato)] font-bold text-xs text-[#5F6B6F]">Trustpilot</span>
            </div>
            <TrustpilotStars />
            <div className="flex items-center gap-1.5 text-[10px] text-[#5F6B6F] font-[family-name:var(--font-lato)] font-medium">
              <span>Trustscore 4.4</span>
              <span>•</span>
              <span>23,900 reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. TABLET REVIEWS HERO SECTION (640px - 1023px)      */}
      {/* ---------------------------------------------------- */}
      <div className="hidden sm:block lg:hidden relative w-full aspect-[1032/850] min-h-[640px]">
        <Image
          src="/reviews/reviews_tablet-hero_section.png"
          alt="What Our Clients Are Saying"
          fill
          priority
          className="object-cover object-bottom"
          sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
        />

        {/* Content Container Left/Center on Tablet */}
        <div className="absolute left-6 md:left-10 top-8 md:top-12 max-w-[460px] z-10 flex flex-col items-start gap-4">
          {/* Stat Pills */}
          <div className="flex items-center gap-2.5 w-full max-w-[440px]">
            {/* Pill 1 */}
            <div className="flex-1 h-[48px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] flex flex-col items-center justify-center py-1 px-2 border border-[#EAE5DC]/60">
              <span
                className="font-heading font-bold text-[20px] leading-[24px] bg-clip-text text-transparent"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                50
              </span>
              <span className="font-sans font-semibold text-[11px] leading-[14px] text-[#949494]">
                USA States
              </span>
            </div>

            {/* Pill 2 */}
            <div className="flex-1 h-[48px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] flex flex-col items-center justify-center py-1 px-2 border border-[#EAE5DC]/60">
              <span
                className="font-heading font-bold text-[20px] leading-[24px] bg-clip-text text-transparent"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                HIPAA
              </span>
              <span className="font-sans font-semibold text-[11px] leading-[14px] text-[#949494]">
                Compliant
              </span>
            </div>

            {/* Pill 3 */}
            <div className="flex-1 h-[48px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] flex flex-col items-center justify-center py-1 px-2 border border-[#EAE5DC]/60">
              <span
                className="font-heading font-bold text-[20px] leading-[24px] bg-clip-text text-transparent"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                100%
              </span>
              <span className="font-sans font-semibold text-[11px] leading-[14px] text-[#949494]">
                Licensed Pros
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-[38px] md:text-[44px] leading-[44px] md:leading-[50px] font-bold text-[#2E5A66] tracking-[-0.0002em]">
            What Our Clients Are Saying
          </h1>

          {/* Subtitle */}
          <p className="font-sans font-semibold text-[15px] leading-[24px] text-[#5F6B6F] max-w-[420px]">
            Real experiences from people who found comfort and confidence through My ESA Therapist.
          </p>

          {/* Actions */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* State Selector */}
            <div className="relative z-50" ref={dropdownRefTablet}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-[30px] bg-[#FAF7F2] font-semibold text-sm hover:bg-white transition-colors h-[46px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] border border-[#EAE5DC]"
              >
                <Image
                  src="/home/hero-section-map.svg"
                  alt=""
                  width={15}
                  height={19}
                  className="shrink-0 object-contain"
                />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                  {selectedState ? STATES_DATA[selectedState]?.name || "Select your State" : "Select your State"}
                </span>
                <ChevronDown className={`w-4 h-4 text-primary shrink-0 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute left-0 top-full mt-2 w-[250px] max-h-[260px] overflow-y-auto bg-white rounded-xl shadow-xl border border-[#EAE5DC] z-[9999] p-2"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  <div className="py-1">
                    {POPULAR_STATES.map((state) => (
                      <button
                        key={state.slug}
                        type="button"
                        onClick={() => handleStateSelect(state.slug)}
                        className="w-full text-left px-3 py-2 text-xs font-sans font-medium text-neutral-700 hover:bg-[#FAF7F2] hover:text-[#1A3D4F] rounded-lg transition-colors flex items-center justify-between"
                      >
                        <span>{state.name}</span>
                        <span className="text-[10px] text-neutral-400">{state.abbreviation}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Get Started Button */}
            <a
              href="#trustpilot-reviews"
              className="flex items-center gap-2.5 pl-5 pr-1.5 py-1.5 rounded-[30px] text-white font-semibold text-sm h-[46px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)]"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <span>Get Started</span>
              <span className="w-8 h-8 rounded-full bg-[#FAF7F2] shadow-[0_2px_4px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image src="/common/send-icon.svg" alt="" width={16} height={16} />
              </span>
            </a>
          </div>

          {/* Trustpilot Glass Card (Tablet) */}
          <div className="mt-1 p-3 rounded-[18px] bg-white/65 backdrop-blur-[11px] border border-white/30 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] flex flex-col items-center gap-1.5 w-[190px]">
            <div className="flex items-center gap-1.5">
              <StarMark className="w-4 h-4 text-[#00B67A]" />
              <span className="font-[family-name:var(--font-lato)] font-normal text-sm text-[#5F6B6F]">Trustpilot</span>
            </div>
            <TrustpilotStars />
            <div className="flex items-center justify-between w-full text-[11px] text-[#5F6B6F] font-[family-name:var(--font-lato)]">
              <span>Trustscore 4.4</span>
              <span>23,900 reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. DESKTOP REVIEWS HERO SECTION (1024px and up)      */}
      {/* ---------------------------------------------------- */}
      <div className="hidden lg:block relative w-full aspect-[1440/743] min-h-[720px]">
        <Image
          src="/reviews/reviews_hero-section.png"
          alt="What Our Clients Are Saying"
          fill
          priority
          className="object-cover object-center"
          sizes="(min-width: 1024px) 100vw, 1px"
        />

        {/* Content Container Left-Aligned (Matches Figma Frame 1000011884) */}
        <div className="absolute left-[5%] xl:left-[82px] top-[10%] xl:top-[120px] max-w-[553px] z-10 flex flex-col items-start gap-[24px]">
          {/* Stat Pills at top (Frame 1000011901) */}
          <div className="flex items-center gap-3 w-full max-w-[513px]">
            {/* Pill 1: 50 USA States */}
            <div className="w-[163px] h-[53px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] flex flex-col items-center justify-center py-1.5 px-3 border border-[#EAE5DC]/50">
              <span
                className="font-heading font-bold text-[24px] leading-[32px] bg-clip-text text-transparent"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                50
              </span>
              <span className="font-sans font-semibold text-[12px] leading-[16px] text-[#949494]">
                USA States
              </span>
            </div>

            {/* Pill 2: HIPAA Compliant */}
            <div className="w-[163px] h-[53px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] flex flex-col items-center justify-center py-1.5 px-3 border border-[#EAE5DC]/50">
              <span
                className="font-heading font-bold text-[24px] leading-[32px] bg-clip-text text-transparent"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                HIPAA
              </span>
              <span className="font-sans font-semibold text-[12px] leading-[16px] text-[#949494]">
                Compliant
              </span>
            </div>

            {/* Pill 3: 100% Licensed Pros */}
            <div className="w-[163px] h-[53px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] flex flex-col items-center justify-center py-1.5 px-3 border border-[#EAE5DC]/50">
              <span
                className="font-heading font-bold text-[24px] leading-[32px] bg-clip-text text-transparent"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                100%
              </span>
              <span className="font-sans font-semibold text-[12px] leading-[16px] text-[#949494]">
                Licensed Pros
              </span>
            </div>
          </div>

          {/* Heading (Playfair Display 56px/64px - Frame 1000011902) */}
          <h1 className="font-heading text-[44px] xl:text-[56px] leading-[50px] xl:leading-[64px] font-bold text-[#2E5A66] tracking-[-0.0002em] max-w-[513px]">
            What Our Clients Are Saying
          </h1>

          {/* Subtitle (Manrope 18px/30px #5F6B6F) */}
          <p className="font-sans font-semibold text-[16px] xl:text-[18px] leading-[26px] xl:leading-[30px] text-[#5F6B6F] max-w-[553px]">
            Real experiences from people who found comfort and confidence through My ESA Therapist.
          </p>

          {/* Action Row (Frame 7) */}
          <div className="flex items-center gap-4 flex-wrap mt-1">
            {/* State Dropdown (Frame 2) */}
            <div className="relative z-50" ref={dropdownRefDesktop}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 xl:gap-2.5 px-5 xl:px-[28px] py-2.5 xl:py-3 rounded-[30px] bg-[#FAF7F2] font-semibold text-[16px] xl:text-[18px] hover:bg-white transition-colors h-[50px] xl:h-[54px] shrink-0 border border-[#EAE5DC] cursor-pointer shadow-[0px_2px_4px_rgba(0,0,0,0.15)]"
              >
                <Image
                  src="/home/hero-section-map.svg"
                  alt=""
                  width={18}
                  height={22}
                  className="shrink-0 object-contain"
                />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                  {selectedState ? STATES_DATA[selectedState]?.name || "Select your State" : "Select your State"}
                </span>
                <ChevronDown className={`w-4 h-4 text-primary shrink-0 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute left-0 top-full mt-2 w-[280px] max-h-[320px] overflow-y-auto bg-white rounded-2xl shadow-[0px_12px_32px_rgba(0,0,0,0.22)] border border-[#EAE5DC] z-[9999] p-2"
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

            {/* Get Started Button (Frame 1000011890) */}
            <a
              href="#trustpilot-reviews"
              className="flex items-center gap-3 pl-6 pr-2 py-2 rounded-[30px] text-white font-semibold text-[16px] transition-opacity hover:opacity-95 h-[48px] xl:h-[50px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)]"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <span>Get Started</span>
              <span className="w-[38px] h-[38px] xl:w-[42px] xl:h-[42px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image src="/common/send-icon.svg" alt="" width={20} height={20} className="w-[18px] h-[18px]" />
              </span>
            </a>
          </div>

          {/* Trustpilot Frosted Glass Card (Frame 1000011802) */}
          <div className="box-border w-[201px] h-[105px] p-[14px_24px_12px] bg-white/55 backdrop-blur-[11.7px] border border-white/20 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] rounded-[20px] flex flex-col items-center justify-center gap-2">
            {/* Header: Star + Trustpilot */}
            <div className="flex items-center gap-1.5 h-[25px]">
              <StarMark className="w-5 h-5 text-[#00B67A]" />
              <span className="font-[family-name:var(--font-lato)] font-normal text-[16px] leading-[20px] text-[#5F6B6F] tracking-[-0.017em]">
                Trustpilot
              </span>
            </div>

            {/* 5 Rating Stars */}
            <TrustpilotStars />

            {/* Footer metrics */}
            <div className="flex items-center justify-between w-[166px] h-[20px] text-[12px] leading-[20px] text-[#5F6B6F] font-[family-name:var(--font-lato)] tracking-[-0.017em]">
              <span>Trustscore 4.4</span>
              <span>23,900 reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
