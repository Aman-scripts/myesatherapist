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

interface HeroStateDropdownProps {
  className?: string;
  buttonClassName?: string;
  iconSize?: number;
  placeholder?: string;
  /** Called when a state is chosen. Navigation happens from the Get Started button. */
  onChange?: (slug: string) => void;
  /** Replaces the floating list, used when the menu should sit inside a modal. */
  menuClassName?: string;
}

export function HeroStateDropdown({
  className = "relative z-50",
  buttonClassName = "flex items-center gap-2.5 px-6 py-3 rounded-[30px] bg-background font-semibold text-base hover:bg-white transition-colors min-h-[48px] shadow-sm border border-primary",
  iconSize = 20,
  placeholder = "Select Your State",
  onChange,
  menuClassName,
}: HeroStateDropdownProps) {
  const [selectedState, setSelectedState] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
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
    setSelectedState(slug);
    setIsOpen(false);
    onChange?.(slug);
  };

  return (
    <div className={className} ref={ref}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={selectedState ? `Selected state ${STATE_INDEX_BY_SLUG[selectedState]?.name || placeholder}` : placeholder}
        className={buttonClassName}
      >
        <Image quality={90}
          src="/esa-icons/icon-37.svg"
          alt="Location"
          width={iconSize}
          height={iconSize}
          sizes={`${iconSize}px`}
          unoptimized
          className="icon-sm shrink-0 object-contain"
        />
        <span className="text-primary font-manrope">
          {selectedState ? STATE_INDEX_BY_SLUG[selectedState]?.name || placeholder : placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 text-primary shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className={menuClassName ?? STATE_DROPDOWN_PANEL} style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
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
  );
}
