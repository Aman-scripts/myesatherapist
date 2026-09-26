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

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

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
  placeholder = "Start your State",
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
          className="w-[246px] h-[54px] rounded-[30px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex items-center justify-center gap-2 px-[18px] border border-[#EAE5DC]/60 active:scale-[0.98] transition-all"
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
            <span
              className="font-sans font-semibold text-[18px] leading-[30px] bg-clip-text text-transparent truncate max-w-[138px]"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              {displayText}
            </span>
            <ChevronDown
              className={`w-[14px] h-[14px] text-[#2E5A66] shrink-0 transition-transform duration-200 ${
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
      <a
        href={getStartedHref}
        onClick={(e) => {
          if (onGetStartedClick) {
            e.preventDefault();
            onGetStartedClick();
          }
        }}
        className="w-[179px] h-[48px] rounded-[30px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex items-center justify-between pl-[28px] pr-[3px] text-white font-sans font-semibold text-[16px] leading-[26px] active:scale-[0.98] transition-all hover:opacity-95"
        style={{ backgroundImage: TEAL_GRADIENT }}
      >
        <span className="truncate">{getStartedText}</span>
        <span className="w-[42px] h-[42px] rounded-full bg-[#FAF7F2] shadow-[0px_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
          <Image
            quality={90}
            src="/common/send-icon.svg"
            alt=""
            width={18}
            height={18}
            className="w-[18px] h-[18px]"
          />
        </span>
      </a>
    </div>
  );
}
