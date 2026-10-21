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
const TRUSTPILOT_GREEN = "#00B67A";

const statsData = [
  { value: "51,488+", label: "ESA Evaluations" },
  { value: "5+", label: "Years Serving" },
  { value: "100%", label: "Moneyback Guarantee" },
];

export function PsdHeroSection() {
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
    <section className="relative z-30 w-full bg-background">
      {/* ---------------------------------------------------- */}
      {/* 1. MOBILE PSD HERO SECTION (sm:hidden / < 640px)     */}
      {/* Matches Screenshot 2 (Figma iPhone 13 & 14)          */}
      {/* ---------------------------------------------------- */}
      <div className="sm:hidden relative w-full aspect-[390/740] min-h-[580px] max-h-[760px] overflow-hidden">
        <BreakpointImage
          media="(max-width: 639px)"
          quality={90}
          src="/psd-letter/psd-herosection-mobile.webp"
          alt="Psychiatric Service Dog Letter Assistance"
          fill
          className="object-cover object-bottom"
          sizes="(max-width: 639px) 100vw, 1px"
        />

        {/* Content Container at Top */}
        <div className="absolute inset-x-0 top-0 px-3 pt-6 text-center flex flex-col items-center z-10">
          {/* Stat Pills at top (Mobile) */}
          <div className="flex items-center justify-center gap-2 w-full max-w-[340px] mx-auto mb-3.5">
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className="flex-1 flex flex-col items-center justify-center bg-background py-1.5 px-1 rounded-[24px] text-center shadow-xs"
              >
                <span className="body-large text-color-gradient leading-none">
                  {stat.value}
                </span>
                <span className="body-small text-[#949494] mt-0.5 whitespace-nowrap !text-[11px] leading-tight">{stat.label}</span>
              </div>
            ))}
          </div>

          <h1 className="heading-h1 capitalize max-w-xs mx-auto">
            Psychiatric Service
            <br />
            Dog Letter Assistance
          </h1>

          <p className="body-large max-w-[290px] mx-auto mt-2.5">
            Connect with state-licensed mental health professionals to discuss your needs and explore if a psychiatric service dog letter may be appropriate for you.
          </p>

          {/* Stacked Action Buttons (Mobile - Frame 7) */}
          <MobileHeroActionButtons
            className="mt-4"
            selectedState={selectedState}
            onStateSelect={handleStateSelect}
            getStartedHref="#pricing"
            placeholder="Select your State"
          />

          <p className="body-small text-center mt-2.5 max-w-[300px]">
            If not approved after your evaluation? You get a full refund.
          </p>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. TABLET PSD HERO SECTION (sm: to lg: / 640-1023px) */}
      {/* Matches Screenshot 2                                 */}
      {/* ---------------------------------------------------- */}
      <div className="hidden sm:block lg:hidden relative w-full aspect-[834/1190] min-h-[880px]">
        <BreakpointImage
          media="(min-width: 640px) and (max-width: 1023px)"
          quality={90}
          src="/psd-letter/psd-hero-section-tablet.webp"
          alt="Psychiatric Service Dog Letter Assistance"
          fill
          className="object-cover object-top"
          sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
        />

        <div className="absolute inset-x-0 top-0 px-6 pt-10 text-center flex flex-col items-center z-10">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center bg-background px-4 py-2 rounded-[30px] text-center min-w-[120px] shadow-xs"
              >
                <span className="body-large text-color-gradient leading-none">
                  {stat.value}
                </span>
                <span className="body-small text-[#949494] mt-1 whitespace-nowrap">{stat.label}</span>
              </div>
            ))}
          </div>

          <h1 className="heading-h1 capitalize mt-6 max-w-xl mx-auto">
            Psychiatric Service
            <br />
            Dog Letter Assistance
          </h1>

          <p className="body-large max-w-md mx-auto mt-4">
            Connect with state-licensed mental health professionals to discuss your needs and explore if a psychiatric service dog letter may be appropriate for you.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap mt-6">
            {/* State Dropdown */}
            <div className="relative z-30" ref={dropdownRefTablet}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2.5 px-6 py-3 rounded-[30px] bg-background font-semibold text-base hover:bg-white transition-colors min-h-[48px] shadow-sm border border-[#EAE5DC]"
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

            <CtaButton
              href="#pricing"
              className="w-auto"
            >
              Get Started
            </CtaButton>
          </div>

          <p className="body-small text-center mt-3">
            If not approved after your evaluation? You get a full refund.
          </p>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. DESKTOP PSD HERO SECTION (lg: / 1024px and up)     */}
      {/* Matches Screenshot 1                                 */}
      {/* ---------------------------------------------------- */}
      <DesktopScaleWrapper
        designHeight={814}
        designWidth={1440}
        wrapperClassName="bg-background overflow-hidden"
        background={
          <BreakpointImage
            media="(min-width: 1024px)"
            quality={90}
            src="/psd-letter/psd-herosection-new.webp"
            alt="Psychiatric Service Dog Letter Assistance"
            fill
            className="object-cover object-center"
            sizes="(min-width: 1024px) 100vw, 1px"
          />
        }
      >
        <div className="relative w-[1440px] h-[814px]">
          <div className="absolute left-[82px] top-[100px] w-[678px] z-10">
            <div className="flex items-center gap-3">
              {statsData.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center bg-background py-2 rounded-[30px] text-center w-[176px] h-[77px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)]"
                >
                  <span className="body-large text-color-gradient">
                    {stat.value}
                  </span>
                  <span className="body-small text-[#949494] mt-0.5 whitespace-nowrap">{stat.label}</span>
                </div>
              ))}
            </div>

            <h1 className="heading-h1 capitalize mt-6">
              Psychiatric Service Dog
              <br />
              Letter Assistance
            </h1>

            <p className="body-large max-w-[588px] mt-4">
              Connect with state-licensed mental health professionals to discuss your needs and explore if a psychiatric service dog letter may be appropriate for you.
            </p>

            <div className="mt-6 flex flex-col items-start gap-2">
              <div className="flex items-center gap-[25px]">
                {/* State Dropdown */}
                <div className="relative z-30" ref={dropdownRefDesktop}>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2.5 px-[24px] py-3 rounded-[30px] bg-background font-semibold body-text hover:bg-white transition-colors h-[54px] shrink-0 border border-[#EAE5DC] cursor-pointer shadow-[0px_2px_4px_rgba(0,0,0,0.15)]"
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

                <CtaButton
                  href="#pricing"
                  className="w-[192px]"
                >
                  Get Started
                </CtaButton>
              </div>

              {/* Refund guarantee note */}
              <p className="body-small text-center w-[463px] pt-1">
                If not approved after your evaluation? You get a full refund.
              </p>
            </div>

            <div className="mt-[24px]"><ReviewBadges /></div>
          </div>
        </div>
      </DesktopScaleWrapper>
    </section>
  );
}
