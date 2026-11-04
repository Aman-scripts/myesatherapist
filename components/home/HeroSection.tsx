"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { BreakpointImage } from "@/components/common/BreakpointImage";
import { ChevronDown } from "lucide-react";
import { STATE_INDEX, STATE_INDEX_BY_SLUG } from "@/data/stateIndex";
import { ReviewBadges } from "@/components/common/ReviewBadges";
import { HeroStatPills } from "@/components/common/HeroStatPills";
import { STATE_DROPDOWN_PANEL, STATE_DROPDOWN_ITEM, STATE_DROPDOWN_ABBR } from "@/components/common/stateDropdownClasses";
import { CtaButton } from "@/components/common/CtaButton";
import { promptSelectState } from "@/components/common/promptSelectState";

const statsData = [
  { value: "64,739+", label: "ESA Evaluations" },
  { value: "7+", label: "Years Serving" },
  { value: "4.8", label: "Verified Reviews" },
];

const HERO_BACKGROUNDS = [
  {
    media: "(max-width: 639px)",
    src: "/hero-image-for-mobile-all.webp",
    className: "object-cover object-top sm:hidden",
    sizes: "100vw",
  },
  {
    media: "(min-width: 640px) and (max-width: 1023px)",
    src: "/home/tablet-hero-section.webp",
    className: "object-cover object-top hidden sm:block lg:hidden",
    sizes: "(min-width: 640px) and (max-width: 1023px) 100vw, 1px",
  },
  {
    media: "(min-width: 1024px)",
    src: "/home/hero-section.webp",
    className: "object-cover object-right hidden lg:block",
    sizes: "(min-width: 1024px) 100vw, 1px",
  },
] as const;

export function HeroSection() {
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

  const handleStateSelect = (slug: string) => {
    setSelectedState(slug);
    setIsDropdownOpen(false);
  };

  const getStartedHref = selectedState ? `/esa-letter-${selectedState}/` : undefined;
  const stateLabel = selectedState
    ? STATE_INDEX_BY_SLUG[selectedState]?.name || "Select your State"
    : "Select your State";

  return (
    <section className="relative z-40 bg-background">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {HERO_BACKGROUNDS.map((image) => (
          <BreakpointImage
            key={image.src}
            media={image.media}
            quality={90}
            src={image.src}
            alt=""
            fill
            className={image.className}
            sizes={image.sizes}
          />
        ))}
      </div>

      <div className="relative z-10 sm:min-h-[900px] lg:mx-auto lg:h-[744px] lg:min-h-0 lg:w-[1440px]">
        <div className="flex flex-col items-center px-4 pb-8 pt-8 text-center sm:px-6 sm:pt-12 lg:absolute lg:left-[82px] lg:top-[92px] lg:w-[678px] lg:items-start lg:p-0 lg:text-left">
          <div className="hidden items-center gap-3 sm:flex sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className="flex min-w-[140px] flex-col items-center justify-center rounded-[30px] bg-background px-4 py-2.5 text-center shadow-[0px_2px_4px_rgba(0,0,0,0.1)] lg:h-[77px] lg:min-w-[163px]"
              >
                <span className="body-large text-color-gradient">{stat.value}</span>
                <span className="body-small mt-1 whitespace-nowrap text-[#6B6B6B]">{stat.label}</span>
              </div>
            ))}
          </div>

          <h1 className="heading-h1 mt-6 max-w-[320px] capitalize sm:max-w-xl lg:max-w-none">
            Emotional Support
            <br />
            Animal Evaluations
            <br />
            by Licensed Professionals
          </h1>

          <p className="body-large mx-auto mt-4 max-w-[340px] text-primary sm:max-w-md lg:mx-0 lg:max-w-none">
            Connect with state-licensed mental health professionals for ESA evaluations conducted through secure telehealth and aligned with federal housing guidelines.
          </p>

          <div className="relative z-50 mt-6 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <div className="relative z-50" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-haspopup="listbox"
                aria-expanded={isDropdownOpen}
                aria-label={selectedState ? `Selected state ${stateLabel}` : "Select your State"}
                className="flex h-[54px] w-[246px] items-center justify-center gap-2.5 rounded-[30px] border border-primary bg-background px-6 shadow-[0px_2px_4px_rgba(0,0,0,0.15)] transition-colors hover:bg-white sm:w-auto sm:justify-start sm:px-[29px]"
              >
                <Image
                  quality={90}
                  src="/esa-icons/icon-37.svg"
                  alt=""
                  width={20}
          sizes="20px"
                  height={20}
                  unoptimized
                  className="icon-sm shrink-0 object-contain"
                />
                <span className="truncate font-manrope text-primary">{stateLabel}</span>
                <ChevronDown className={`h-4 w-4 shrink-0 text-primary transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isDropdownOpen && (
                <div className={STATE_DROPDOWN_PANEL} style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                  <div className="py-1">
                    {STATE_INDEX.map((state) => (
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
              href={getStartedHref}
              onClick={selectedState ? undefined : promptSelectState}
              stateModal={false}
              variant="accent"
              className="w-[246px] sm:w-[192px]"
            >
              Get Started
            </CtaButton>
          </div>

          <p className="body-small mt-4 max-w-[280px] text-center sm:max-w-none lg:text-left">
            Not approved after your ESA evaluation? You get a full refund!.
          </p>

          <div className="mt-6 flex w-full max-w-[360px] flex-col items-center gap-3 sm:max-w-none lg:items-start">
            <HeroStatPills stats={statsData} className="sm:hidden" />
            <ReviewBadges className="mx-auto justify-center lg:mx-0 lg:w-auto lg:justify-start" />
          </div>
        </div>
      </div>
    </section>
  );
}
