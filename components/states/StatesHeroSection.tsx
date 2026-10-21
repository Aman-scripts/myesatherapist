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
import { CtaButton } from "@/components/common/CtaButton";
import { DesktopScaleWrapper } from "@/components/common/DesktopScaleWrapper";

const POPULAR_STATES = STATE_INDEX;
const TEAL_GRADIENT = "var(--color-gradient)";

export function StatesHeroSection() {
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
    <section className="relative z-30 bg-background">
      
      {/* ---------------------------------------------------- */}
      {/* 1. MOBILE HERO SECTION (< sm / < 640px)              */}
      {/* Matches state_hero-section-mobile.png                */}
      {/* ---------------------------------------------------- */}
      <div className="block sm:hidden relative w-full aspect-[390/833] min-h-[720px]">
        {/* Background Artwork */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          <BreakpointImage
            media="(max-width: 639px)"
            quality={90}
            src="/states/state_hero-section-mobile.webp"
            alt="ESA Evaluation For Every State"
            fill
            className="object-cover object-top"
            sizes="(max-width: 639px) 100vw, 1px"
          />
        </div>

        {/* Content Container (Centered on top) */}
        <div className="absolute inset-x-0 top-0 px-4 pt-7 text-center flex flex-col items-center z-10">
          
          {/* Top 3 Stat Pills */}
          <div className="flex items-center justify-center gap-2 w-full max-w-[340px] mx-auto mb-4">
            <div className="flex-1 flex flex-col items-center justify-center bg-background py-2 px-1 rounded-full text-center shadow-[0px_2px_4px_rgba(0,0,0,0.12)] border border-[#EAE5DC]/80">
              <span className="body-large text-color-gradient leading-none">
                51,488+
              </span>
              <span className="body-small text-[#949494] mt-0.5 whitespace-nowrap">ESA Evaluations</span>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center bg-background py-2 px-1 rounded-full text-center shadow-[0px_2px_4px_rgba(0,0,0,0.12)] border border-[#EAE5DC]/80">
              <span className="body-large text-color-gradient leading-none">
                5+
              </span>
              <span className="body-small text-[#949494] mt-0.5 whitespace-nowrap">Years Serving</span>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center bg-background py-2 px-1 rounded-full text-center shadow-[0px_2px_4px_rgba(0,0,0,0.12)] border border-[#EAE5DC]/80">
              <span className="body-large text-color-gradient leading-none">
                100%
              </span>
              <span className="body-small text-[#949494] mt-0.5 whitespace-nowrap">Moneyback</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="heading-h2 text-primary">
            ESA Evaluation For
            <br />
            Every State
          </h1>

          {/* Subtitle */}
          <p className="body-text text-body-text max-w-[320px] mx-auto mt-3">
            Access professional evaluations for ESA Letter that comply with the Fair Housing Act (FHA) and your state’s specific regulations.
          </p>

          {/* Stacked Action Controls (Mobile - Frame 7) */}
          <MobileHeroActionButtons
            className="mt-5"
            selectedState={selectedState}
            onStateSelect={handleStateSelect}
            onGetStartedClick={handleGetStarted}
            placeholder="Select your State"
          />

          {/* Refund Guarantee Note */}
          <p className="body-small text-body-text mt-3 text-center">
            *If not approved after your evaluation? You get a full refund.
          </p>

          {/* Review Badges */}
          <div className="mt-4">
            <ReviewBadges className="justify-center" />
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. TABLET HERO SECTION (sm: to lg: / 640px to 1023px) */}
      {/* Matches state_hero-section-tablet.png                */}
      {/* ---------------------------------------------------- */}
      <div className="hidden sm:block lg:hidden relative w-full aspect-[834/1385] min-h-[920px]">
        {/* Background Artwork */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          <BreakpointImage
            media="(min-width: 640px) and (max-width: 1023px)"
            quality={90}
            src="/states/state_hero-section-tablet.webp"
            alt="ESA Evaluation For Every State"
            fill
            className="object-cover object-top"
            sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
          />
        </div>

        {/* Content Container (Centered on top) */}
        <div className="absolute inset-x-0 top-0 px-6 pt-12 text-center flex flex-col items-center z-10">
          
          {/* Stat Pills at top */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <div className="flex flex-col items-center justify-center bg-background px-5 py-2.5 rounded-full text-center min-w-[130px] shadow-[0px_2px_4px_rgba(0,0,0,0.12)] border border-[#EAE5DC]/80">
              <span className="body-large text-color-gradient leading-none">
                51,488+
              </span>
              <span className="body-small text-[#949494] mt-0.5 whitespace-nowrap">ESA Evaluations</span>
            </div>

            <div className="flex flex-col items-center justify-center bg-background px-5 py-2.5 rounded-full text-center min-w-[130px] shadow-[0px_2px_4px_rgba(0,0,0,0.12)] border border-[#EAE5DC]/80">
              <span className="body-large text-color-gradient leading-none">
                5+
              </span>
              <span className="body-small text-[#949494] mt-0.5 whitespace-nowrap">Years Serving</span>
            </div>

            <div className="flex flex-col items-center justify-center bg-background px-5 py-2.5 rounded-full text-center min-w-[130px] shadow-[0px_2px_4px_rgba(0,0,0,0.12)] border border-[#EAE5DC]/80">
              <span className="body-large text-color-gradient leading-none">
                100%
              </span>
              <span className="body-small text-[#949494] mt-0.5 whitespace-nowrap">Moneyback Guarantee</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="heading-h1 text-primary mt-6 max-w-xl mx-auto">
            ESA Evaluation For
            <br />
            Every State
          </h1>

          {/* Subheading */}
          <p className="body-large text-body-text max-w-md mx-auto mt-3">
            Access professional evaluations for ESA Letter that comply with the Fair Housing Act (FHA) and your state’s specific regulations.
          </p>

          {/* Action Row */}
          <div className="flex items-center justify-center gap-4 mt-6">
            
            {/* Select your State Dropdown */}
            <div className="relative z-30" ref={dropdownRefTablet}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between gap-3 px-6 h-[48px] rounded-[30px] bg-background body-text shadow-sm hover:bg-white transition-colors border border-[#EAE5DC] min-w-[200px]"
              >
                <span className="flex items-center gap-2">
                  <Image
                    src="/home/hero-section-map.svg"
                    alt=""
                    width={16}
                    height={21}
                    unoptimized
                    className="shrink-0 object-contain"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <span className="body-text text-color-gradient">
                    {selectedState ? STATE_INDEX_BY_SLUG[selectedState]?.name || "Select your State" : "Select your State"}
                  </span>
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
            <CtaButton
              onClick={handleGetStarted}
              className="w-auto"
            >
              Get Started
            </CtaButton>
          </div>

          {/* Refund Guarantee Note */}
          <p className="body-small text-body-text mt-3 text-center">
            *If not approved after your evaluation? You get a full refund.
          </p>

          {/* Review Badges */}
          <div className="mt-5">
            <ReviewBadges className="justify-center" />
          </div>

        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. DESKTOP HERO SECTION (lg: / 1024px+)               */}
      {/* Matches statepage_hero-section.png                   */}
      {/* ---------------------------------------------------- */}
      <DesktopScaleWrapper
        designHeight={787}
        designWidth={1440}
        wrapperClassName="bg-background overflow-hidden"
        background={
          <BreakpointImage
            media="(min-width: 1024px)"
            quality={90}
            src="/states/statepage_hero-section.webp"
            alt="ESA Evaluation For Every State"
            fill
            className="object-cover object-right-top 2xl:object-center"
            sizes="(min-width: 1024px) 100vw, 1px"
          />
        }
      >
        <div className="relative w-[1440px] h-[787px] flex items-center">
          {/* Floating "Available in All 50 states" Glassmorphism Badge */}
          <div
            className="flex items-center gap-3.5 absolute left-[705px] top-[488px] -translate-y-1/2 z-20 px-5 py-3 rounded-[18px] border border-white/40 shadow-[0px_8px_24px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.55) 0%, rgba(30, 70, 85, 0.65) 100%)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <div className="w-[34px] h-[34px] flex items-center justify-center shrink-0">
              <Image
                quality={90}
                src="/states/state_page_her-section_map-icon.svg"
                alt="Available in all 50 states"
                width={34}
                height={34}
                className="w-[34px] h-[34px] object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="body-small text-white drop-shadow-sm leading-tight">
                Available in
              </span>
              <span className="body-large font-bold text-white drop-shadow-md leading-tight">
                All 50 states
              </span>
            </div>
          </div>

          {/* Inner Desktop Container */}
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-16 py-16">
            <div className="max-w-[553px] flex flex-col gap-6">
              
              {/* Top 3 Pill Stat Badges (Frame 1000011902: 552px width, 12px gap) */}
              <div className="flex items-center gap-3">
                <div className="inline-flex flex-col items-center justify-center px-4 py-3 bg-background rounded-full shadow-[0px_2px_4px_rgba(0,0,0,0.15)] border border-[#EAE5DC]/80 w-[176px] h-[77px]">
                  <span className="body-large text-color-gradient leading-none">
                    51,488+
                  </span>
                  <span className="body-small text-[#949494] mt-1 leading-tight whitespace-nowrap">
                    ESA Evaluations
                  </span>
                </div>

                <div className="inline-flex flex-col items-center justify-center px-4 py-3 bg-background rounded-full shadow-[0px_2px_4px_rgba(0,0,0,0.15)] border border-[#EAE5DC]/80 w-[176px] h-[77px]">
                  <span className="body-large text-color-gradient leading-none">
                    5+
                  </span>
                  <span className="body-small text-[#949494] mt-1 leading-tight whitespace-nowrap">
                    Years Serving
                  </span>
                </div>

                <div className="inline-flex flex-col items-center justify-center px-4 py-3 bg-background rounded-full shadow-[0px_2px_4px_rgba(0,0,0,0.15)] border border-[#EAE5DC]/80 w-[176px] h-[77px]">
                  <span className="body-large text-color-gradient leading-none">
                    100%
                  </span>
                  <span className="body-small text-[#949494] mt-1 leading-tight whitespace-nowrap">
                    Moneyback Guarantee
                  </span>
                </div>
              </div>

              {/* Heading & Subtitle (Frame 8) */}
              <div className="flex flex-col gap-3">
                <h1 className="heading-h1 text-primary">
                  ESA Evaluation For
                  <br />
                  Every State
                </h1>
                <p className="body-large text-body-text max-w-[461px]">
                  Access professional evaluations for ESA Letter that comply with the Fair Housing Act (FHA) and your state’s specific regulations.
                </p>
              </div>

              {/* Action CTAs (Frame 1261153967) */}
              <div className="flex flex-col gap-2 pt-1">
                <div className="flex items-center gap-4">
                  {/* Select your State Selector Dropdown Button */}
                  <div className="relative z-30" ref={dropdownRefDesktop}>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="inline-flex items-center justify-between gap-3 px-6 h-[54px] bg-background hover:bg-white rounded-full shadow-[0px_2px_4px_rgba(0,0,0,0.15)] border border-[#EAE5DC] transition-all duration-200 cursor-pointer text-left min-w-[246px]"
                      aria-expanded={isDropdownOpen}
                    >
                      <div className="flex items-center gap-2.5">
                        <Image
                          src="/home/hero-section-map.svg"
                          alt="Location pin"
                          width={16}
                          height={21}
                          unoptimized
                          className="shrink-0 object-contain"
                          style={{ width: "auto", height: "auto" }}
                        />
                        <span className="body-large text-color-gradient">
                          {selectedState
                            ? STATE_INDEX_BY_SLUG[selectedState]?.name || "Select your State"
                            : "Select your State"}
                        </span>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-primary transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
                    </button>

                    {/* State Dropdown Menu */}
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
                  <CtaButton
                    onClick={handleGetStarted}
                    className="w-[192px]"
                  >
                    Get Started
                  </CtaButton>
                </div>

                {/* Refund Guarantee Note */}
                <p className="body-small text-body-text">
                  *If not approved after your evaluation? You get a full refund.
                </p>
              </div>

              {/* Review Badges */}
              <div className="mt-2">
                <ReviewBadges />
              </div>

            </div>
          </div>

        </div>
      </DesktopScaleWrapper>
    </section>
  );
}
