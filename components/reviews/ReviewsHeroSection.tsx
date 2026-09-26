"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { BreakpointImage } from "@/components/common/BreakpointImage";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { STATE_INDEX, STATE_INDEX_BY_SLUG } from "@/data/stateIndex";
import { ReviewBadges } from "@/components/common/ReviewBadges";
import { STATE_DROPDOWN_PANEL, STATE_DROPDOWN_ITEM, STATE_DROPDOWN_ABBR } from "@/components/common/stateDropdownClasses";
import { MobileHeroActionButtons } from "@/components/common/MobileHeroActionButtons";

const POPULAR_STATES = STATE_INDEX;
const TRUSTPILOT_GREEN = "#00B67A";
const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

function StarMark({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
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
        <BreakpointImage
          media="(max-width: 639px)"
            quality={90}
          src="/reviews/reviews_phone-hero_section.webp"
          alt="What Our Clients Are Saying"
          fill
          className="object-cover object-bottom"
          sizes="(max-width: 639px) 100vw, 1px"
        />

        {/* Mobile Content Layer */}
        <div className="absolute inset-x-0 top-0 px-4 pt-10 text-center flex flex-col items-center z-10">
          {/* Heading */}
          <h1 className="font-heading text-[30px] leading-[36px] font-bold text-[#2E5A66] tracking-[-0.0002em] mb-2 max-w-[340px]">
            What Our Clients Are Saying
          </h1>

          {/* Subtitle */}
          <p className="font-sans font-semibold text-[13px] leading-[20px] text-[#5F6B6F] mb-4 max-w-[330px]">
            Real experiences from people who found comfort and confidence through My ESA Therapist.
          </p>

          {/* Actions Stack (Frame 7) */}
          <MobileHeroActionButtons
            selectedState={selectedState}
            onStateSelect={handleStateSelect}
            getStartedHref="#trustpilot-reviews"
            placeholder="Select your State"
          />


        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. TABLET REVIEWS HERO SECTION (640px - 1023px)      */}
      {/* ---------------------------------------------------- */}
      <div className="hidden sm:block lg:hidden relative w-full aspect-[834/1194] min-h-[880px] md:min-h-[960px]">
        <BreakpointImage
          media="(min-width: 640px) and (max-width: 1023px)"
          quality={90}
          src="/reviews/reviews_tablet-hero_section.webp"
          alt="What Our Clients Are Saying"
          fill
          className="object-cover object-[88%_bottom]"
          sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
        />

        {/* Content Container (Centered) */}
        <div className="absolute inset-x-0 top-0 px-6 pt-8 sm:pt-10 md:pt-12 text-center flex flex-col items-center z-10">
          {/* Stat Pills at top */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {[
              { value: "51,488+", label: "ESA Evaluations" },
              { value: "5+", label: "Years Serving" },
              { value: "4.9", label: "Verified Reviews" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center bg-[#FAF7F2] px-4 py-2 rounded-[30px] text-center min-w-[110px] sm:min-w-[120px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] border border-[#EAE5DC]/60"
              >
                <span
                  className="font-heading text-xl sm:text-2xl font-bold leading-none bg-clip-text text-transparent"
                  style={{ backgroundImage: TEAL_GRADIENT }}
                >
                  {stat.value}
                </span>
                <span className="text-[11px] font-semibold text-[#5F6B6F] mt-1 whitespace-nowrap">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Heading */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-[44px] font-bold tracking-[-0.011em] mt-6 leading-tight max-w-xl mx-auto text-[#2E5A66]">
            What Our Clients Are
            <br />
            Saying
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base leading-relaxed text-[#5F6B6F] font-semibold max-w-md mx-auto mt-4 font-sans tracking-normal">
            Real experiences from people who found comfort and confidence through My ESA Therapist.
          </p>

          {/* Side-by-side Action Row */}
          <div className="flex items-center justify-center gap-3 flex-wrap mt-6">
            {/* State Dropdown */}
            <div className="relative z-30" ref={dropdownRefTablet}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2.5 px-6 py-3 rounded-[30px] bg-[#FAF7F2] font-semibold text-base hover:bg-white transition-colors min-h-[48px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] border border-[#EAE5DC]"
              >
                <Image
                  quality={90}
                  src="/home/hero-section-map.svg"
                  alt=""
                  width={16}
                  height={21}
                  className="shrink-0 object-contain w-4 h-5"
                />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                  {selectedState ? STATE_INDEX_BY_SLUG[selectedState]?.name || "Start your State" : "Start your State"}
                </span>
                <ChevronDown className={`w-4 h-4 text-primary shrink-0 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isDropdownOpen && (
                <div
                  className={STATE_DROPDOWN_PANEL}
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  <div className="py-1">
                    {POPULAR_STATES.map((state) => (
                      <button
                        key={state.slug}
                        type="button"
                        onClick={() => handleStateSelect(state.slug)}
                        className={STATE_DROPDOWN_ITEM}
                      >
                        <span>{state.name}</span>
                        <span className={STATE_DROPDOWN_ABBR}>{state.abbreviation}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Get Started Button */}
            <a
              href="#trustpilot-reviews"
              className="flex items-center gap-3 pl-6 pr-2 py-2 rounded-[30px] text-white font-semibold text-base transition-opacity hover:opacity-90 min-h-[48px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)]"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <span>Get Started</span>
              <span className="w-[38px] h-[38px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image
                  quality={90}
                  src="/common/send-icon.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="w-4 h-4"
                />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. DESKTOP REVIEWS HERO SECTION (1024px and up)      */}
      {/* ---------------------------------------------------- */}
      <div className="hidden lg:block relative w-full aspect-[1440/743] min-h-[620px] xl:min-h-[720px]">
        <BreakpointImage
          media="(min-width: 1024px)"
            quality={90}
          src="/reviews/reviews_hero-section.webp"
          alt="What Our Clients Are Saying"
          fill
          className="object-cover object-[86%_center] 2xl:object-center"
          sizes="(min-width: 1024px) 100vw, 1px"
        />

        {/* Content Container Left-Aligned (Matches Figma Frame 1000011884) */}
        <div className="absolute left-[4%] xl:left-[82px] top-[7%] xl:top-[120px] max-w-[480px] xl:max-w-[553px] z-10 flex flex-col items-start gap-4 xl:gap-[24px]">
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
              <span className="font-sans font-semibold text-[12px] leading-[16px] text-[#707070]">
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
              <span className="font-sans font-semibold text-[12px] leading-[16px] text-[#707070]">
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
              <span className="font-sans font-semibold text-[12px] leading-[16px] text-[#707070]">
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
            quality={90}
                  src="/home/hero-section-map.svg"
                  alt=""
                  width={18}
                  height={22}
                  className="shrink-0 object-contain w-[18px] h-[22px]"
                />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                  {selectedState ? STATE_INDEX_BY_SLUG[selectedState]?.name || "Select your State" : "Select your State"}
                </span>
                <ChevronDown className={`w-4 h-4 text-primary shrink-0 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isDropdownOpen && (
                <div
                  className={STATE_DROPDOWN_PANEL}
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  <div className="py-1">
                    {POPULAR_STATES.map((state) => (
                      <button
                        key={state.slug}
                        type="button"
                        onClick={() => handleStateSelect(state.slug)}
                        className={STATE_DROPDOWN_ITEM}
                      >
                        <span>{state.name}</span>
                        <span className={STATE_DROPDOWN_ABBR}>{state.abbreviation}</span>
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
                <Image
            quality={90} src="/common/send-icon.svg" alt="" width={20} height={20} className="w-[18px] h-[18px]" />
              </span>
            </a>
          </div>

          {/* Trustpilot Frosted Glass Card (Frame 1000011802) */}
          <ReviewBadges />
        </div>
      </div>
    </section>
  );
}
