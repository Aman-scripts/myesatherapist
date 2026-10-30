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

// Trustpilot green (brand-locked, not part of the site palette)
const TRUSTPILOT_GREEN = "#00B67A";

// Figma: var(--color-gradient)
const TEAL_GRADIENT = "var(--color-gradient)";

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
  { value: "64,739+", label: "ESA Evaluations" },
  { value: "5+", label: "Years Serving" },
  { value: "100%", label: "Moneyback Guarantee" },
];

export function HeroSection() {
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
    router.push(`/esa-letter-${slug}/`);
  };

  return (
    <section className="relative z-40 bg-background">
      {/* ---------------------------------------------------- */}
      {/* 1. MOBILE HERO SECTION (< sm / < 640px)              */}
      {/* Matches Screenshot 2                                 */}
      {/* ---------------------------------------------------- */}
      <div className="block sm:hidden relative w-full aspect-[390/833] min-h-[680px]">
        {/* Background Image: mobile-hero-section.png */}
        <BreakpointImage
          media="(max-width: 639px)"
            quality={80}
          src="/home/mobile-hero-section.webp"
          alt="Emotional Support Animal Evaluations"
          fill
          className="object-cover object-top"
          sizes="(max-width: 639px) 100vw, 1px"
        />

        {/* Content Container (Centered) */}
        <div className="absolute inset-x-0 top-0 px-3 pt-6 text-center flex flex-col items-center z-10">
          {/* Stat Pills at top (Mobile) */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 w-full max-w-[350px] mx-auto mb-3.5">
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className="flex-1 flex flex-col items-center justify-center bg-background py-1.5 px-1.5 rounded-[24px] text-center shadow-xs min-w-0"
              >
                <span className="body-large text-color-gradient text-[17px]">
                  {stat.value}
                </span>
                <span className="body-small text-[11px] min-[375px]:text-xs mt-0.5 whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Headline */}
          <h1 className="heading-h1 capitalize">
            Emotional Support
            <br />
            Animal Evaluations
            <br />
            by Licensed Professionals
          </h1>

          {/* Subheading */}
          <p className="body-text max-w-[310px] mx-auto mt-3">
            Connect with state-licensed mental health professionals for ESA evaluations conducted through secure telehealth and aligned with federal housing guidelines.
          </p>

          {/* Stacked Action Buttons */}
          <MobileHeroActionButtons
            className="mt-5"
            selectedState={selectedState}
            onStateSelect={handleStateSelect}
            getStartedHref="#how-it-works"
            placeholder="Select your State"
          />
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. TABLET HERO SECTION (sm: to lg: / 640px to 1023px) */}
      {/* Matches Screenshot 1                                 */}
      {/* ---------------------------------------------------- */}
      <div className="hidden sm:block lg:hidden relative w-full aspect-[834/1385] min-h-[900px]">
        {/* Background Image: tablet-hero-section.png */}
        <BreakpointImage
          media="(min-width: 640px) and (max-width: 1023px)"
            quality={80}
          src="/home/tablet-hero-section.webp"
          alt="Emotional Support Animal Evaluations"
          fill
          className="object-cover object-top"
          sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
        />

        {/* Content Container (Centered) */}
        <div className="absolute inset-x-0 top-0 px-6 pt-12 text-center flex flex-col items-center z-30">
          {/* Stat Pills at top */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center bg-background px-4 py-2 rounded-[30px] text-center min-w-[120px] shadow-xs"
              >
                <span className="body-large text-color-gradient">
                  {stat.value}
                </span>
                <span className="body-small text-[#6B6B6B] mt-1 whitespace-nowrap">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Headline */}
          <h1 className="heading-h1 mt-6 max-w-xl mx-auto capitalize">
            Emotional Support
            <br />
            Animal Evaluations
            <br />
            by Licensed Professionals
          </h1>

          {/* Subheading */}
          <p className="body-large max-w-md mx-auto mt-4">
            Connect with state-licensed mental health professionals for ESA evaluations conducted through secure telehealth and aligned with federal housing guidelines.
          </p>

          {/* Side-by-side Action Row */}
          <div className="flex items-center justify-center gap-3 flex-wrap mt-6 relative z-50">
            {/* State Dropdown */}
            <div className="relative z-50" ref={dropdownRefTablet}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2.5 px-6 py-3 rounded-[30px] bg-background font-semibold text-base hover:bg-white transition-colors min-h-[48px] shadow-sm border border-primary"
              >
                <Image
                  src="/ESA ICons/Icon-37.svg"
                  alt=""
                  width={20}
                  height={20}
                  unoptimized
                  className="icon-sm shrink-0 object-contain"
                />
                <span className="text-primary">
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

            {/* Get Started Button */}
            <CtaButton href="#how-it-works" variant="accent" className="w-full sm:w-[192px]">
              Get Started
            </CtaButton>
          </div>

            <p className="body-small mt-3 text-center">
              If not approved after your evaluation? You get a full refund.
            </p>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 3. DESKTOP HERO SECTION (lg: / 1024px and up)        */}
        {/* ---------------------------------------------------- */}
        <DesktopScaleWrapper
          designHeight={744}
          designWidth={1440}
          wrapperClassName="bg-background"
          background={
            <BreakpointImage
              media="(min-width: 1024px)"
              quality={80}
              src="/home/hero-section.webp"
              alt="Woman embracing her emotional support golden retriever outdoors"
              fill
              className="object-cover object-right"
              sizes="(min-width: 1024px) 100vw, 1px"
            />
          }
        >
          <div className="relative w-[1440px] h-[744px]">
            {/* Content — exact 1440px coordinates from Figma Frame 1000011884 */}
            <div className="absolute left-[82px] top-[92px] w-[678px] z-30">
              {/* Stat Pills */}
              <div className="flex items-center gap-3">
                {statsData.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center justify-center bg-background py-2.5 px-4 rounded-[30px] text-center min-w-[163px] h-[77px]"
                  >
                    <span className="body-large text-color-gradient">
                      {stat.value}
                    </span>
                    <span className="body-small text-[#6B6B6B] mt-1 whitespace-nowrap">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Headline */}
              <h1 className="heading-h1 mt-6 capitalize">
                Emotional Support
                <br />
                Animal Evaluations
                <br />
                by Licensed Professionals
              </h1>

              {/* Subheading */}
              <p className="body-large max-w-none mt-4">
                Connect with state-licensed mental health professionals for ESA evaluations conducted through secure telehealth and aligned with federal housing guidelines.
              </p>

              {/* Action Row */}
              <div className="flex items-center gap-3 flex-wrap mt-6 relative z-50">
                {/* State Dropdown */}
                <div className="relative z-50" ref={dropdownRefDesktop}>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2.5 px-[29px] py-3 rounded-[30px] bg-background body-text hover:bg-white transition-colors h-[54px] shrink-0 border border-primary cursor-pointer shadow-[0px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <Image
                      src="/ESA ICons/Icon-37.svg"
                      alt=""
                      width={20}
                      height={20}
                      unoptimized
                      className="icon-sm shrink-0 object-contain"
                    />
                    <span className="text-primary font-manrope">
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

                {/* Get Started Button */}
                <CtaButton href="#how-it-works" variant="accent" className="w-[192px]">
                  Get Started
                </CtaButton>
              </div>

              {/* Reassurance text from homepage.md */}
              <p className="body-small mt-2">
                If not approved after your evaluation? You get a full refund.
              </p>

              {/* Trustpilot Badge */}
              <div className="mt-[24px]"><ReviewBadges /></div>
            </div>
          </div>
        </DesktopScaleWrapper>
    </section>
  );
}

