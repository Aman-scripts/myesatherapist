"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { STATES_DATA } from "@/data/statesData";
import { VideoTestimonialsTrustBar } from "./VideoTestimonialsTrustBar";

const POPULAR_STATES = Object.values(STATES_DATA);
const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

const TABLET_STATS = [
  { value: "51,488+", label: "ESA Evaluations" },
  { value: "5+", label: "Years Serving" },
  { value: "4.9", label: "Verified Reviews" },
];

function RatingStarMark() {
  return (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white fill-current">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function TrustpilotRatingStars() {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="w-[24px] h-[24px] bg-[#00B67A] rounded-[2px] flex items-center justify-center shrink-0"
        >
          <RatingStarMark />
        </div>
      ))}
      <div className="relative w-[24px] h-[24px] bg-[#CCCCCC] rounded-[2px] flex items-center justify-center shrink-0 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-[#00B67A]" />
        <div className="relative z-10 flex items-center justify-center">
          <RatingStarMark />
        </div>
      </div>
    </div>
  );
}

function ConsumerAffairsRatingStars() {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="w-[24px] h-[24px] bg-[#095691] rounded-[2px] flex items-center justify-center shrink-0"
        >
          <RatingStarMark />
        </div>
      ))}
      <div className="relative w-[24px] h-[24px] bg-[#CCCCCC] rounded-[2px] flex items-center justify-center shrink-0 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-[#095691]" />
        <div className="relative z-10 flex items-center justify-center">
          <RatingStarMark />
        </div>
      </div>
    </div>
  );
}

export function VideoTestimonialsHeroSection() {
  const router = useRouter();
  const [selectedState, setSelectedState] = useState("");
  const [isDropdownOpenMobile, setIsDropdownOpenMobile] = useState(false);
  const [isDropdownOpenTablet, setIsDropdownOpenTablet] = useState(false);

  const dropdownRefMobile = useRef<HTMLDivElement>(null);
  const dropdownRefTablet = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (dropdownRefMobile.current && !dropdownRefMobile.current.contains(target)) {
        setIsDropdownOpenMobile(false);
      }
      if (dropdownRefTablet.current && !dropdownRefTablet.current.contains(target)) {
        setIsDropdownOpenTablet(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleStateSelect = (slug: string) => {
    setSelectedState(slug);
    setIsDropdownOpenMobile(false);
    setIsDropdownOpenTablet(false);
    router.push(`/${slug}`);
  };

  return (
    <section className="relative z-20 w-full bg-[#FAF7F2] overflow-visible">
      {/* ---------------------------------------------------- */}
      {/* 1. MOBILE HERO SECTION (< 640px)                     */}
      {/* Matches user's mobile screenshot exactly             */}
      {/* ---------------------------------------------------- */}
      <div className="sm:hidden relative w-full aspect-[390/740] min-h-[660px]">
        <Image
          src="/video_testimonial/video_testimonial-herosection_mobile.png"
          alt="Real Impact, Real Stories - My ESA Therapist"
          fill
          priority
          className="object-cover object-bottom"
          sizes="(max-width: 639px) 100vw, 1px"
        />

        {/* Content Container (Mobile Centered matching screenshot) */}
        <div className="absolute inset-x-0 top-0 pt-8 px-4 flex flex-col items-center text-center z-10">
          {/* Heading */}
          <h1 className="font-heading text-[32px] leading-[38px] font-bold text-[#2E5A66] tracking-[-0.00015em] mb-2.5 max-w-[340px]">
            Real Impact, Real<br />Stories
          </h1>

          {/* Subtitle */}
          <p className="font-sans font-semibold text-[13px] leading-[21px] text-[#5F6B6F] mb-6 max-w-[325px]">
            Hear directly from our clients about their journey with emotional support animal therapy and how we’ve helped them live better lives.
          </p>

          {/* Stacked Actions (Mobile) */}
          <div className="flex flex-col items-center gap-3 w-full max-w-[280px]">
            {/* Start your State Selector */}
            <div className="relative w-full" ref={dropdownRefMobile}>
              <button
                type="button"
                onClick={() => setIsDropdownOpenMobile(!isDropdownOpenMobile)}
                className="w-full h-[50px] px-5 rounded-[30px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] border border-[#EAE5DC] flex items-center justify-between cursor-pointer hover:bg-white transition-colors"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <Image
                    src="/home/hero-section-map.svg"
                    alt=""
                    width={16}
                    height={20}
                    unoptimized
                    className="shrink-0 object-contain w-4 h-5"
                  />
                  <span
                    className="font-sans font-semibold text-[15px] bg-clip-text text-transparent truncate"
                    style={{ backgroundImage: TEAL_GRADIENT }}
                  >
                    {selectedState ? STATES_DATA[selectedState]?.name || "Start your State" : "Start your State"}
                  </span>
                </div>
                <ChevronDown className={`w-4 h-4 text-[#2E5A66] shrink-0 transition-transform ${isDropdownOpenMobile ? "rotate-180" : ""}`} />
              </button>

              {isDropdownOpenMobile && (
                <div
                  className="absolute left-0 top-full mt-2 w-full max-h-[240px] overflow-y-auto bg-white rounded-xl shadow-[0px_10px_25px_rgba(0,0,0,0.18)] border border-[#EAE5DC] z-[100] p-2 text-left"
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

            {/* Get Started Button */}
            <a
              href="/pricing"
              className="w-[190px] h-[48px] rounded-[30px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex items-center justify-between pl-6 pr-1.5 text-white hover:opacity-95 transition-opacity"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <span className="font-sans font-semibold text-[15px] text-white">
                Get Started
              </span>
              <span className="w-[38px] h-[38px] rounded-full bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image src="/common/send-icon.svg" alt="" width={15} height={17} className="w-[15px] h-[17px]" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. TABLET HERO SECTION (640px - 1023px)              */}
      {/* Matches user's tablet screenshot exactly             */}
      {/* ---------------------------------------------------- */}
      <div className="hidden sm:block lg:hidden relative w-full aspect-[941/1480] min-h-[780px]">
        <Image
          src="/video_testimonial/video_testimonial-herosection_tablet.png"
          alt="Real Impact, Real Stories - My ESA Therapist"
          fill
          priority
          className="object-cover object-bottom"
          sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
        />

        {/* Content Container (Tablet Centered matching screenshot) */}
        <div className="absolute inset-x-0 top-0 pt-8 sm:pt-10 md:pt-12 px-6 flex flex-col items-center text-center z-10">
          
          {/* Row 1: 3 Stat Pills (51,488+ | 5+ | 4.9) */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 w-full max-w-[530px] mb-5 sm:mb-6">
            {TABLET_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="flex-1 max-w-[163px] h-[53px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] flex flex-col justify-center items-center px-3 border border-[#EAE5DC]/60"
              >
                <span
                  className="font-heading font-bold text-[22px] sm:text-[24px] leading-[28px] sm:leading-[32px] bg-clip-text text-transparent"
                  style={{ backgroundImage: TEAL_GRADIENT }}
                >
                  {stat.value}
                </span>
                <span className="font-sans font-semibold text-[11px] sm:text-[12px] leading-tight text-[#949494] whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Row 2: Heading (Real Impact, Real Stories) */}
          <h1 className="font-heading font-bold text-[40px] sm:text-[46px] leading-[48px] sm:leading-[54px] text-[#2E5A66] tracking-[-0.00015em] mb-3 max-w-[480px]">
            Real Impact, Real<br />Stories
          </h1>

          {/* Row 3: Subtitle */}
          <p className="font-sans font-semibold text-[15px] sm:text-[16px] leading-[26px] text-[#5F6B6F] mb-6 max-w-[500px]">
            Hear directly from our clients about their journey with emotional support animal therapy and how we’ve helped them live better lives.
          </p>

          {/* Row 4: Action Buttons (Start your State & Get Started) */}
          <div className="flex items-center justify-center gap-4 w-full max-w-[480px]">
            {/* Start your State Selector */}
            <div className="relative z-40" ref={dropdownRefTablet}>
              <button
                type="button"
                onClick={() => setIsDropdownOpenTablet(!isDropdownOpenTablet)}
                className="h-[48px] px-5 sm:px-6 rounded-[30px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] border border-[#EAE5DC] flex items-center justify-between gap-2.5 cursor-pointer hover:bg-white transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="/home/hero-section-map.svg"
                    alt=""
                    width={16}
                    height={20}
                    unoptimized
                    className="shrink-0 object-contain w-4 h-5"
                  />
                  <span
                    className="font-sans font-semibold text-[15px] sm:text-[16px] bg-clip-text text-transparent truncate max-w-[140px]"
                    style={{ backgroundImage: TEAL_GRADIENT }}
                  >
                    {selectedState ? STATES_DATA[selectedState]?.name || "Start your State" : "Start your State"}
                  </span>
                </div>
                <ChevronDown className={`w-4 h-4 text-[#2E5A66] shrink-0 transition-transform ${isDropdownOpenTablet ? "rotate-180" : ""}`} />
              </button>

              {isDropdownOpenTablet && (
                <div
                  className="absolute left-0 top-full mt-2 w-[250px] max-h-[260px] overflow-y-auto bg-white rounded-xl shadow-[0px_10px_25px_rgba(0,0,0,0.18)] border border-[#EAE5DC] z-[100] p-2 text-left"
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

            {/* Get Started Button */}
            <a
              href="/pricing"
              className="h-[48px] rounded-[30px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex items-center justify-between pl-6 pr-1.5 text-white hover:opacity-95 transition-opacity"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <span className="font-sans font-semibold text-[15px] sm:text-[16px] text-white mr-3.5">
                Get Started
              </span>
              <span className="w-[38px] h-[38px] rounded-full bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image src="/common/send-icon.svg" alt="" width={16} height={18} className="w-4 h-[18px]" />
              </span>
            </a>
          </div>

        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. DESKTOP HERO SECTION (1024px and up)              */}
      {/* ---------------------------------------------------- */}
      <div className="hidden lg:block relative w-full aspect-[1440/624] min-h-[624px]">
        {/* Full-bleed background artwork */}
        <Image
          src="/video_testimonial/video_testimonial-herosection.png"
          alt="Real Stories, Real Impact - My ESA Therapist"
          fill
          priority
          className="object-cover object-center"
          sizes="(min-width: 1024px) 100vw, 1px"
        />

        {/* Content Container Left-Aligned (Matches Figma Frame 1000011884) */}
        <div className="absolute left-[5%] xl:left-[80px] top-[8%] xl:top-[57px] max-w-[579px] z-10 flex flex-col items-start gap-[24px]">
          {/* Stat Pills Row (Frame 1000011901) */}
          <div className="flex items-center gap-3 w-full max-w-[513px]">
            {/* Pill 1: 50 USA States */}
            <div className="w-[163px] h-[53px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] flex flex-col items-center justify-center py-1.5 px-3 border border-[#EAE5DC]/50">
              <span className="font-heading font-bold text-[24px] leading-[30px] bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent">
                50
              </span>
              <span className="font-sans font-semibold text-[12px] leading-[16px] text-[#949494]">
                USA States
              </span>
            </div>

            {/* Pill 2: HIPAA Compliant */}
            <div className="w-[163px] h-[53px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] flex flex-col items-center justify-center py-1.5 px-3 border border-[#EAE5DC]/50">
              <span className="font-heading font-bold text-[24px] leading-[30px] bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent">
                HIPAA
              </span>
              <span className="font-sans font-semibold text-[12px] leading-[16px] text-[#949494]">
                Compliant
              </span>
            </div>

            {/* Pill 3: 100% Licensed Pros */}
            <div className="w-[163px] h-[53px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] flex flex-col items-center justify-center py-1.5 px-3 border border-[#EAE5DC]/50">
              <span className="font-heading font-bold text-[24px] leading-[30px] bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent">
                100%
              </span>
              <span className="font-sans font-semibold text-[12px] leading-[16px] text-[#949494]">
                Licensed Pros
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-[44px] xl:text-[56px] leading-[50px] xl:leading-[64px] font-bold text-[#2E5A66] tracking-[-0.0002em] max-w-[624px]">
            Real Stories, Real Impact
          </h1>

          {/* Subtitle */}
          <p className="font-sans font-semibold text-[16px] xl:text-[18px] leading-[26px] xl:leading-[30px] text-[#5F6B6F] max-w-[579px]">
            Hear directly from our clients about their journey with emotional support animal therapy and how we’ve helped them live better lives.
          </p>

          {/* Review Glass Cards (Desktop) */}
          <div className="flex items-center gap-4 pt-1">
            {/* Trustpilot Card */}
            <div className="w-[201px] h-[105px] bg-white/55 border border-white/20 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] backdrop-blur-[11.7px] rounded-[20px] px-5 py-3.5 flex flex-col items-center justify-center gap-1.5">
              <div className="flex items-center gap-1.5">
                <svg className="w-[18px] h-[18px] text-[#00B67A] fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span className="font-[family-name:var(--font-lato)] text-[16px] text-[#5F6B6F] font-normal">
                  Trustpilot
                </span>
              </div>
              <TrustpilotRatingStars />
              <span className="font-[family-name:var(--font-lato)] text-[12px] text-[#5F6B6F]">
                Trustscore 4.4
              </span>
            </div>

            {/* ConsumerAffairs Reviews Card */}
            <div className="w-[221px] h-[105px] bg-white/55 border border-white/20 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] backdrop-blur-[11.7px] rounded-[20px] px-3.5 py-3.5 flex flex-col items-center justify-center gap-1.5">
              <div className="flex items-center gap-1.5">
                <svg className="w-[18px] h-[18px] text-[#095691] fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span className="font-[family-name:var(--font-lato)] text-[15px] text-[#5F6B6F] font-normal whitespace-nowrap">
                  ConsumerAffair Reviews
                </span>
              </div>
              <ConsumerAffairsRatingStars />
              <span className="font-[family-name:var(--font-lato)] text-[12px] text-[#5F6B6F]">
                Reviews 4.4
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* --------------------------------------------------------------------------------------------------- */}
      {/* 4. TRUST STATS BAR: EXACTLY 50% ON HERO SECTION BOTTOM & 50% ON AFTER HERO SECTION TOP               */}
      {/* --------------------------------------------------------------------------------------------------- */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-30 w-full max-w-[965px] px-4 pointer-events-auto">
        <VideoTestimonialsTrustBar />
      </div>
    </section>
  );
}
