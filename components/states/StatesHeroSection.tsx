"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { STATE_INDEX, STATE_INDEX_BY_SLUG } from "@/data/stateIndex";
import { ReviewBadges } from "@/components/common/ReviewBadges";
import { HeroStatPills } from "@/components/common/HeroStatPills";
import { STATE_DROPDOWN_PANEL, STATE_DROPDOWN_ITEM, STATE_DROPDOWN_ABBR } from "@/components/common/stateDropdownClasses";
import { CtaButton } from "@/components/common/CtaButton";
import { promptSelectState } from "@/components/common/promptSelectState";
import { SiteBreadcrumbs } from "@/components/seo/SiteBreadcrumbs";
import { ResponsiveHero, standardHeroBackgrounds } from "@/components/common/ResponsiveHero";

const STATS = [
  { value: "64,739+", label: "ESA Evaluations" },
  { value: "7+", label: "Years Serving" },
  { value: "100%", label: "Moneyback Guarantee" },
];

export function StatesHeroSection() {
  const router = useRouter();
  const [selectedState, setSelectedState] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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

  const stateLabel = selectedState
    ? STATE_INDEX_BY_SLUG[selectedState]?.name || "Select your State"
    : "Select your State";

  return (
    <ResponsiveHero
      className="z-30"
      centered={false}
      desktopHeight={787}
      tabletMinHeight="780px"
      backgrounds={standardHeroBackgrounds(
        "/hero-image-for-mobile-all.webp",
        "/states/state-hero-section-tablet.webp",
        "/states/statepage-hero-section.webp",
        { mobile: "object-top", tablet: "object-top", desktop: "object-right" },
      )}
    >
      <div
        className="absolute left-[705px] top-[488px] z-20 hidden -translate-y-1/2 items-center gap-3.5 rounded-[18px] border border-white/40 px-5 py-3 shadow-[0px_8px_24px_rgba(0,0,0,0.15)] lg:flex"
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.55) 0%, rgba(30, 70, 85, 0.65) 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <Image
          quality={90}
          src="/esa-icons/icon-37.svg"
          alt=""
          width={28}
          sizes="28px"
          height={28}
          unoptimized
          className="h-7 w-7 shrink-0 object-contain"
        />
        <span className="body-large text-left font-bold leading-tight text-white drop-shadow-sm">
          Available in
          <br />
          All 50 states
        </span>
      </div>
      <SiteBreadcrumbs className="mb-4 self-start" />
      <div className="hidden items-center gap-3 sm:flex sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex min-w-[140px] flex-col items-center justify-center rounded-full border border-[#EAE5DC]/80 bg-background px-4 py-2.5 text-center shadow-[0px_2px_4px_rgba(0,0,0,0.12)] lg:h-[77px] lg:w-[176px]"
          >
            <span className="body-large leading-none text-color-gradient">{stat.value}</span>
            <span className="body-small mt-1 whitespace-nowrap text-body-text">{stat.label}</span>
          </div>
        ))}
      </div>

      <h1 className="heading-h1 text-primary mt-6 max-w-[320px] sm:max-w-xl">
        ESA Evaluation For
        <br />
        Every State
      </h1>
      <p className="body-large text-body-text mx-auto mt-3 max-w-[320px] sm:mx-0 sm:max-w-[461px]">
        Access professional evaluations for ESA Letter that comply with the Fair Housing Act (FHA) and your state’s specific regulations.
      </p>

      <div className="relative z-50 mt-6 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
        <div className="relative z-50" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            aria-haspopup="listbox"
            aria-expanded={isDropdownOpen}
            aria-label={selectedState ? `Selected state ${stateLabel}` : "Select your State"}
            className="inline-flex h-[48px] min-w-[220px] items-center justify-between gap-3 rounded-full border border-primary bg-background px-6 shadow-sm lg:h-[54px] lg:min-w-[246px]"
          >
            <span className="flex items-center gap-2">
              <Image src="/esa-icons/icon-37.svg" alt="" width={20}
          sizes="20px" height={20} unoptimized className="icon-sm shrink-0 object-contain" />
              <span className="body-text text-color-gradient">{stateLabel}</span>
            </span>
            <ChevronDown className={`h-4 w-4 shrink-0 text-primary transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
          </button>
          {isDropdownOpen && (
            <div className={STATE_DROPDOWN_PANEL} style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              <div className="py-1">
                {STATE_INDEX.map((state) => (
                  <button
                    key={state.slug}
                    type="button"
                    onClick={() => {
                      setSelectedState(state.slug);
                      setIsDropdownOpen(false);
                    }}
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
          onClick={() => {
            if (selectedState) router.push(`/esa-letter-${selectedState}/`);
            else promptSelectState();
          }}
          stateModal={false}
          variant="accent"
          className="w-[192px]"
        >
          Get Started
        </CtaButton>
      </div>
      <p className="body-small text-body-text mt-3">
        Not approved after your ESA evaluation? You get a full refund!.
      </p>
      <div className="mt-5 flex flex-col items-center gap-3 lg:items-start">
        <HeroStatPills stats={STATS} className="sm:hidden" />
        <ReviewBadges />
      </div>
    </ResponsiveHero>
  );
}
