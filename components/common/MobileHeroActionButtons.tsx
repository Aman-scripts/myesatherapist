"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { STATE_INDEX, STATE_INDEX_BY_SLUG } from "@/data/stateIndex";
import {
  STATE_DROPDOWN_PANEL,
  STATE_DROPDOWN_ITEM,
  STATE_DROPDOWN_ABBR,
} from "@/components/common/stateDropdownClasses";
import { CtaButton } from "@/components/common/CtaButton";

const TEAL_GRADIENT = "var(--color-gradient)";

export interface MobileHeroActionButtonsProps {
  selectedState?: string;
  onStateSelect: (slug: string) => void;
  getStartedHref?: string;
  getStartedText?: string;
  placeholder?: string;
  className?: string;
  onGetStartedClick?: () => void;
}

export function MobileHeroActionButtons({
  selectedState = "",
  onStateSelect,
  getStartedHref = "#how-it-works",
  getStartedText = "Get Started",
  placeholder = "Select your State",
  className = "",
  onGetStartedClick,
}: MobileHeroActionButtonsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (slug: string) => {
    setIsOpen(false);
    onStateSelect(slug);
  };

  const displayText = selectedState
    ? STATE_INDEX_BY_SLUG[selectedState]?.name || selectedState
    : placeholder;

  return (
    <div
      className={`flex flex-col justify-center items-center gap-[16px] w-[246px] mx-auto ${className}`}
    >
      {/* Frame 2: State Selector */}
      <div className="relative w-[246px]" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-[246px] h-[54px] rounded-[30px] bg-background shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex items-center justify-center gap-2 px-[18px] border border-[#EAE5DC]/60 active:scale-[0.98] transition-all"
        >
          <div className="flex items-center gap-2 max-w-full">
            <Image
              src="/home/hero-section-map.svg"
              alt=""
              width={20}
              height={20}
              unoptimized
              className="w-[20px] h-[20px] shrink-0 object-contain"
              style={{ width: "auto", height: "auto" }}
            />
            <span className="body-large text-color-gradient truncate max-w-[138px]">
              {displayText}
            </span>
            <ChevronDown
              className={`w-[14px] h-[14px] text-primary shrink-0 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {/* Dropdown Panel */}
        {isOpen && (
          <div
            className={STATE_DROPDOWN_PANEL}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="py-1">
              {STATE_INDEX.map((state) => (
                <button
                  key={state.slug}
                  type="button"
                  onClick={() => handleSelect(state.slug)}
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

      {/* Frame 1000011890: Get Started Button */}
      <CtaButton
        href={getStartedHref}
        onClick={onGetStartedClick}
        className="w-[192px]"
      >
        {getStartedText}
      </CtaButton>
    </div>
  );
}
