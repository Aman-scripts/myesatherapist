"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { STATES_DATA } from "@/data/statesData";

const POPULAR_STATES = Object.values(STATES_DATA);
const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

export function StatesHeroSection() {
  const router = useRouter();
  const [selectedState, setSelectedState] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleStateSelect = (slug: string) => {
    setSelectedState(slug);
    setIsDropdownOpen(false);
    router.push(`/${slug}`);
  };

  const handleGetStarted = () => {
    if (selectedState) {
      router.push(`/${selectedState}`);
    } else {
      const stateGrid = document.getElementById("choose-state-section");
      if (stateGrid) {
        stateGrid.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2]">
      
      {/* ---------------------------------------------------- */}
      {/* 1. MOBILE HERO SECTION (< sm / < 640px)              */}
      {/* Matches state_hero-section-mobile.png                */}
      {/* ---------------------------------------------------- */}
      <div className="block sm:hidden relative w-full aspect-[390/833] min-h-[720px]">
        {/* Background Artwork */}
        <Image
          src="/state_hero-section-mobile.png"
          alt="ESA Evaluation For Every State"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />

        {/* Content Container (Centered on top) */}
        <div className="absolute inset-x-0 top-0 px-4 pt-7 text-center flex flex-col items-center z-10">
          
          {/* Top 3 Stat Pills */}
          <div className="flex items-center justify-center gap-2 w-full max-w-[340px] mx-auto mb-4">
            <div className="flex-1 flex flex-col items-center justify-center bg-[#FAF7F2] py-2 px-1.5 rounded-full text-center shadow-[0px_2px_4px_rgba(0,0,0,0.12)] border border-[#EAE5DC]/80">
              <span className="font-heading text-[18px] font-bold leading-none bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                50
              </span>
              <span className="font-sans font-semibold text-[10px] text-[#5F6B6F] mt-0.5 whitespace-nowrap">USA States</span>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center bg-[#FAF7F2] py-2 px-1.5 rounded-full text-center shadow-[0px_2px_4px_rgba(0,0,0,0.12)] border border-[#EAE5DC]/80">
              <span className="font-heading text-[18px] font-bold leading-none bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                HIPAA
              </span>
              <span className="font-sans font-semibold text-[10px] text-[#5F6B6F] mt-0.5 whitespace-nowrap">Compliant</span>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center bg-[#FAF7F2] py-2 px-1.5 rounded-full text-center shadow-[0px_2px_4px_rgba(0,0,0,0.12)] border border-[#EAE5DC]/80">
              <span className="font-heading text-[18px] font-bold leading-none bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                100%
              </span>
              <span className="font-sans font-semibold text-[10px] text-[#5F6B6F] mt-0.5 whitespace-nowrap">Licensed Pros</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-[28px] sm:text-[32px] leading-[1.2] font-bold tracking-tight">
            <span className="text-[#2E5A66]">ESA Evaluation For</span>
            <br />
            <span className="text-[#5F6B6F]">Every State</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[13.5px] leading-[1.55] text-[#5F6B6F] font-semibold max-w-[320px] mx-auto mt-3 font-sans">
            Access professional evaluations for ESA Letter that comply with the Fair Housing Act (FHA) and your state’s specific regulations.
          </p>

          {/* Stacked Action Controls */}
          <div className="flex flex-col items-center gap-3 mt-5 w-full max-w-[260px]">
            
            {/* Start your State Dropdown */}
            <div className="relative w-full">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between px-5 h-[48px] w-full rounded-[30px] bg-[#FAF7F2] font-semibold text-sm shadow-sm hover:bg-white transition-colors border border-[#EAE5DC]"
              >
                <span className="flex items-center gap-2">
                  <Image
                    src="/hero-section-map.svg"
                    alt=""
                    width={16}
                    height={21}
                    className="shrink-0 object-contain w-[14px] h-[18px]"
                  />
                  <span className="bg-clip-text text-transparent truncate max-w-[140px]" style={{ backgroundImage: TEAL_GRADIENT }}>
                    {selectedState ? STATES_DATA[selectedState]?.name || "Start your State" : "Start your State"}
                  </span>
                </span>
                <ChevronDown className={`w-4 h-4 text-[#2E5A66] shrink-0 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 top-full mt-1.5 w-full max-h-[220px] overflow-y-auto bg-white rounded-xl shadow-xl border border-[#EAE5DC] z-50 p-2 divide-y divide-neutral-100">
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
              )}
            </div>

            {/* Get Started Button */}
            <button
              type="button"
              onClick={handleGetStarted}
              className="flex items-center justify-between pl-6 pr-1.5 h-[48px] w-full rounded-[30px] text-white font-semibold text-sm transition-opacity hover:opacity-90 shadow-sm"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <span>Get Started</span>
              <span className="w-[34px] h-[34px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image src="/send-icon.svg" alt="" width={17} height={19} className="w-[17px] h-[19px]" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. TABLET HERO SECTION (sm: to lg: / 640px to 1023px) */}
      {/* Matches state_hero-section-tablet.png                */}
      {/* ---------------------------------------------------- */}
      <div className="hidden sm:block lg:hidden relative w-full aspect-[834/1385] min-h-[920px]">
        {/* Background Artwork */}
        <Image
          src="/state_hero-section-tablet.png"
          alt="ESA Evaluation For Every State"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />

        {/* Content Container (Centered on top) */}
        <div className="absolute inset-x-0 top-0 px-6 pt-12 text-center flex flex-col items-center z-10">
          
          {/* Stat Pills at top */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <div className="flex flex-col items-center justify-center bg-[#FAF7F2] px-6 py-2.5 rounded-full text-center min-w-[120px] shadow-[0px_2px_4px_rgba(0,0,0,0.12)] border border-[#EAE5DC]/80">
              <span className="font-heading text-xl font-bold leading-none bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                50
              </span>
              <span className="font-sans font-semibold text-xs text-[#5F6B6F] mt-0.5 whitespace-nowrap">USA States</span>
            </div>

            <div className="flex flex-col items-center justify-center bg-[#FAF7F2] px-6 py-2.5 rounded-full text-center min-w-[120px] shadow-[0px_2px_4px_rgba(0,0,0,0.12)] border border-[#EAE5DC]/80">
              <span className="font-heading text-xl font-bold leading-none bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                HIPAA
              </span>
              <span className="font-sans font-semibold text-xs text-[#5F6B6F] mt-0.5 whitespace-nowrap">Compliant</span>
            </div>

            <div className="flex flex-col items-center justify-center bg-[#FAF7F2] px-6 py-2.5 rounded-full text-center min-w-[120px] shadow-[0px_2px_4px_rgba(0,0,0,0.12)] border border-[#EAE5DC]/80">
              <span className="font-heading text-xl font-bold leading-none bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                100%
              </span>
              <span className="font-sans font-semibold text-xs text-[#5F6B6F] mt-0.5 whitespace-nowrap">Licensed Pros</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-[36px] sm:text-[42px] font-bold tracking-tight mt-6 leading-tight max-w-xl mx-auto">
            <span className="text-[#2E5A66]">ESA Evaluation For</span>
            <br />
            <span className="text-[#5F6B6F]">Every State</span>
          </h1>

          {/* Subheading */}
          <p className="text-[16px] leading-relaxed text-[#5F6B6F] font-semibold max-w-md mx-auto mt-3 font-sans">
            Access professional evaluations for ESA Letter that comply with the Fair Housing Act (FHA) and your state’s specific regulations.
          </p>

          {/* Action Row */}
          <div className="flex items-center justify-center gap-4 mt-6">
            
            {/* Start your State Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between gap-3 px-6 h-[48px] rounded-[30px] bg-[#FAF7F2] font-semibold text-sm shadow-sm hover:bg-white transition-colors border border-[#EAE5DC] min-w-[200px]"
              >
                <span className="flex items-center gap-2">
                  <Image
                    src="/hero-section-map.svg"
                    alt=""
                    width={16}
                    height={21}
                    className="shrink-0 object-contain w-[14px] h-[18px]"
                  />
                  <span className="bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                    {selectedState ? STATES_DATA[selectedState]?.name || "Start your State" : "Start your State"}
                  </span>
                </span>
                <ChevronDown className={`w-4 h-4 text-[#2E5A66] shrink-0 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-[240px] max-h-[260px] overflow-y-auto bg-white rounded-xl shadow-xl border border-[#EAE5DC] z-50 p-2 divide-y divide-neutral-100">
                  {POPULAR_STATES.map((state) => (
                    <button
                      key={state.slug}
                      type="button"
                      onClick={() => handleStateSelect(state.slug)}
                      className="w-full text-left px-3 py-2 text-xs font-sans font-medium text-neutral-700 hover:bg-[#FAF7F2] hover:text-[#1A3D4F] rounded-lg transition-colors flex items-center justify-between"
                    >
                      <span>{state.name}</span>
                      <span className="text-xs text-neutral-400">{state.abbreviation}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Get Started Button */}
            <button
              type="button"
              onClick={handleGetStarted}
              className="flex items-center gap-3 pl-6 pr-2 h-[48px] rounded-[30px] text-white font-semibold text-sm transition-opacity hover:opacity-90 shadow-sm cursor-pointer"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <span>Get Started</span>
              <span className="w-[36px] h-[36px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image src="/send-icon.svg" alt="" width={18} height={20} className="w-[18px] h-[20px]" />
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. DESKTOP HERO SECTION (lg: / 1024px+)               */}
      {/* Matches statepage_hero-section.png                   */}
      {/* ---------------------------------------------------- */}
      <div className="hidden lg:flex relative w-full min-h-[787px] items-center">
        {/* Full-width Background Artwork */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <Image
            src="/statepage_hero-section.png"
            alt="ESA Evaluation For Every State"
            fill
            priority
            className="object-cover object-right-top 2xl:object-center"
            sizes="100vw"
          />
        </div>

        {/* Floating "Available in All 50 states" Glassmorphism Badge */}
        <div
          className="hidden lg:flex items-center gap-3.5 absolute left-[47%] xl:left-[49%] 2xl:left-[51%] top-[62%] -translate-y-1/2 z-20 px-5 py-3 rounded-[18px] border border-white/40 shadow-[0px_8px_24px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform"
          style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.55) 0%, rgba(30, 70, 85, 0.65) 100%)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <div className="w-[34px] h-[34px] flex items-center justify-center shrink-0">
            <Image
              src="/state_page_her-section_map-icon.svg"
              alt="Available in all 50 states"
              width={34}
              height={34}
              className="w-[34px] h-[34px] object-contain"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans font-medium text-[14px] text-white drop-shadow-sm leading-tight">
              Available in
            </span>
            <span className="font-sans font-bold text-[16px] text-white drop-shadow-md leading-tight">
              All 50 states
            </span>
          </div>
        </div>

        {/* Inner Desktop Container */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-14 xl:px-16 py-16">
          <div className="max-w-[540px] flex flex-col gap-8">
            
            {/* Top 3 Pill Stat Badges */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="inline-flex flex-col items-center justify-center px-6 py-2.5 bg-[#FAF7F2] rounded-full shadow-[0px_2px_4px_rgba(0,0,0,0.15)] border border-[#EAE5DC]/80 min-w-[100px]">
                <span className="font-heading font-bold text-xl sm:text-2xl bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent leading-none">
                  50
                </span>
                <span className="font-sans font-semibold text-xs text-[#5F6B6F] mt-0.5 leading-tight">
                  USA States
                </span>
              </div>

              <div className="inline-flex flex-col items-center justify-center px-6 py-2.5 bg-[#FAF7F2] rounded-full shadow-[0px_2px_4px_rgba(0,0,0,0.15)] border border-[#EAE5DC]/80 min-w-[100px]">
                <span className="font-heading font-bold text-xl sm:text-2xl bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent leading-none">
                  HIPAA
                </span>
                <span className="font-sans font-semibold text-xs text-[#5F6B6F] mt-0.5 leading-tight">
                  Compliant
                </span>
              </div>

              <div className="inline-flex flex-col items-center justify-center px-6 py-2.5 bg-[#FAF7F2] rounded-full shadow-[0px_2px_4px_rgba(0,0,0,0.15)] border border-[#EAE5DC]/80 min-w-[100px]">
                <span className="font-heading font-bold text-xl sm:text-2xl bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent leading-none">
                  100%
                </span>
                <span className="font-sans font-semibold text-xs text-[#5F6B6F] mt-0.5 leading-tight">
                  Licensed Pros
                </span>
              </div>
            </div>

            {/* Heading */}
            <div className="flex flex-col gap-3">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[56px] lg:leading-[64px] tracking-tight">
                <span className="text-[#2E5A66]">ESA Evaluation For</span>
                <br />
                <span className="text-[#5F6B6F]">Every State</span>
              </h1>
              <p className="font-sans font-semibold text-base sm:text-lg leading-relaxed text-[#5F6B6F] max-w-[480px]">
                Access professional evaluations for ESA Letter that comply with the Fair Housing Act (FHA) and your state’s specific regulations.
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              
              {/* Start your State Selector Dropdown Button */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="inline-flex items-center justify-between gap-3 px-6 py-3.5 bg-[#FAF7F2] hover:bg-white rounded-full shadow-[0px_2px_4px_rgba(0,0,0,0.15)] border border-[#EAE5DC] transition-all duration-200 cursor-pointer text-left min-w-[210px]"
                  aria-expanded={isDropdownOpen}
                >
                  <div className="flex items-center gap-2.5">
                    <Image
                      src="/hero-section-map.svg"
                      alt="Location pin"
                      width={16}
                      height={21}
                      className="w-[16px] h-[21px] object-contain shrink-0"
                    />
                    <span className="font-sans font-semibold text-base sm:text-lg bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent">
                      {selectedState
                        ? STATES_DATA[selectedState]?.name || "Start your State"
                        : "Start your State"}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-[#2E5A66] transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {/* State Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-[260px] max-h-[320px] overflow-y-auto bg-white rounded-2xl shadow-xl border border-[#EAE5DC] z-50 p-2 divide-y divide-neutral-100">
                    <div className="px-3 py-1.5 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                      Select Your State
                    </div>
                    <div className="py-1">
                      {POPULAR_STATES.map((state) => (
                        <button
                          key={state.slug}
                          type="button"
                          onClick={() => handleStateSelect(state.slug)}
                          className="w-full text-left px-3 py-2 text-sm font-sans font-medium text-neutral-700 hover:bg-[#FAF7F2] hover:text-[#1A3D4F] rounded-lg transition-colors flex items-center justify-between"
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
              <button
                type="button"
                onClick={handleGetStarted}
                className="flex items-center gap-3 pl-6 pr-2 py-2 rounded-[30px] text-white font-semibold text-[16px] transition-opacity hover:opacity-90 h-[48px] shrink-0 shadow-sm cursor-pointer"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                <span>Get Started</span>
                <span className="w-[38px] h-[38px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                  <Image src="/send-icon.svg" alt="" width={20} height={22} className="w-[19px] h-[21px]" />
                </span>
              </button>
            </div>

            {/* Trustpilot Review Card */}
            <div className="mt-2 inline-flex flex-col items-start justify-center p-3.5 px-5 bg-white/75 backdrop-blur-md border border-white/60 rounded-[14px] shadow-[0px_2px_8px_rgba(0,0,0,0.06)] max-w-[210px]">
              <div className="flex items-center gap-1.5 mb-1.5">
                <svg className="w-4 h-4 text-[#00B67A] fill-current" viewBox="0 0 24 24">
                  <path d="M12 0l3.708 7.514 8.292 1.205-6 5.849 1.416 8.257-7.416-3.9-7.416 3.9 1.416-8.257-6-5.849 8.292-1.205z"/>
                </svg>
                <span className="font-sans font-bold text-xs text-[#5F6B6F]">Trustpilot</span>
              </div>

              <div className="flex items-center gap-1 mb-1.5">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-[18px] h-[18px] bg-[#00B67A] rounded-[2px] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z"/>
                    </svg>
                  </div>
                ))}
                <div className="w-[18px] h-[18px] bg-[#CCCCCC] rounded-[2px] relative overflow-hidden flex items-center justify-center">
                  <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#00B67A]" />
                  <svg className="w-3 h-3 text-white fill-current relative z-10" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z"/>
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-between w-full text-[11px] font-sans text-[#5F6B6F] gap-1">
                <span>Trustscore <strong>4.4</strong></span>
                <span>•</span>
                <span><strong>23,900</strong> reviews</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
