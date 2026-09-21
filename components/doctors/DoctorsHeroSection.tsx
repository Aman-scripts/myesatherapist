"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReviewBadges } from "@/components/common/ReviewBadges";
import { STATE_DROPDOWN_PANEL, STATE_DROPDOWN_ITEM, STATE_DROPDOWN_ABBR } from "@/components/common/stateDropdownClasses";
import { STATES_DATA } from "@/data/statesData";

const AVAILABLE_STATES = Object.values(STATES_DATA);

export function DoctorsHeroSection() {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedState, setSelectedState] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectState = (slug: string, name: string) => {
    setSelectedState(name);
    setDropdownOpen(false);
    router.push(`/esa-letter-${slug}/`);
  };

  return (
    <section className="relative w-full bg-[#FAF7F2] overflow-hidden min-h-[760px] sm:min-h-[1050px] md:min-h-[1150px] xl:min-h-[768px] flex items-start xl:items-center">
      
      {/* ========================================================================= */}
      {/* 1. DESKTOP BACKGROUND GRAPHIC (xl: >= 1280px)                            */}
      {/* ========================================================================= */}
      <div className="hidden xl:block absolute inset-0 z-0">
        <Image
          src="/doctors/doctors_hero-section.png"
          alt="Meet Our Licensed Mental Health Professionals"
          fill
          priority
          unoptimized
          className="object-cover object-right"
          sizes="100vw"
        />
        {/* Soft gradient wash on left for contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent w-[52%] pointer-events-none" />
      </div>

      {/* ========================================================================= */}
      {/* 2. TABLET BACKGROUND GRAPHIC (sm: to < xl, e.g. 640px - 1279px, 1024px)   */}
      {/* ========================================================================= */}
      <div className="hidden sm:block xl:hidden absolute inset-0 z-0">
        <Image
          src="/doctors/doctors_hero-section_tablet.png"
          alt="Meet Our Licensed Mental Health Professionals"
          fill
          priority
          unoptimized
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      {/* ========================================================================= */}
      {/* 3. MOBILE BACKGROUND GRAPHIC (< sm, < 640px)                              */}
      {/* ========================================================================= */}
      <div className="block sm:hidden absolute inset-0 z-0">
        <Image
          src="/doctors/doctors_hero-section_mobile.png"
          alt="Meet Our Licensed Mental Health Professionals"
          fill
          priority
          unoptimized
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      {/* ========================================================================= */}
      {/* MAIN CONTENT CONTAINER                                                    */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-[82px] pt-8 sm:pt-12 md:pt-14 xl:py-16">
        
        {/* Wrapper: centered on mobile & tablet, left-aligned on xl desktop */}
        <div className="w-full max-w-[640px] xl:max-w-[626px] mx-auto xl:mx-0 flex flex-col items-center xl:items-start text-center xl:text-left gap-5 sm:gap-7 xl:gap-[30px]">
          
          {/* Header Block */}
          <div className="w-full flex flex-col items-center xl:items-start gap-3.5 sm:gap-[16px]">
            
            {/* Top Stat Badges Row: Visible on all devices */}
            <div className="flex items-center justify-center xl:justify-start gap-2 sm:gap-[12px] w-full max-w-[360px] sm:max-w-[513px]">
              
              {/* Badge 1: 50 USA States */}
              <div className="flex-1 sm:flex-initial w-auto sm:w-[145px] xl:w-[163px] h-[46px] sm:h-[53px] rounded-[30px] bg-white/95 sm:bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex flex-col justify-center items-center px-2 sm:px-4 shrink-0">
                <span
                  className="font-heading font-bold text-[18px] sm:text-[24px] leading-tight sm:leading-[28px] bg-clip-text text-transparent text-center"
                  style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                >
                  50
                </span>
                <span className="font-sans font-semibold text-[10px] sm:text-[12px] leading-tight text-[#949494] text-center whitespace-nowrap">
                  USA States
                </span>
              </div>

              {/* Badge 2: HIPAA Compliant */}
              <div className="flex-1 sm:flex-initial w-auto sm:w-[145px] xl:w-[163px] h-[46px] sm:h-[53px] rounded-[30px] bg-white/95 sm:bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex flex-col justify-center items-center px-2 sm:px-4 shrink-0">
                <span
                  className="font-heading font-bold text-[18px] sm:text-[24px] leading-tight sm:leading-[28px] bg-clip-text text-transparent text-center"
                  style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                >
                  HIPAA
                </span>
                <span className="font-sans font-semibold text-[10px] sm:text-[12px] leading-tight text-[#949494] text-center whitespace-nowrap">
                  Compliant
                </span>
              </div>

              {/* Badge 3: 100% Licensed Pros */}
              <div className="flex-1 sm:flex-initial w-auto sm:w-[145px] xl:w-[163px] h-[46px] sm:h-[53px] rounded-[30px] bg-white/95 sm:bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex flex-col justify-center items-center px-2 sm:px-4 shrink-0">
                <span
                  className="font-heading font-bold text-[18px] sm:text-[24px] leading-tight sm:leading-[28px] bg-clip-text text-transparent text-center"
                  style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                >
                  100%
                </span>
                <span className="font-sans font-semibold text-[10px] sm:text-[12px] leading-tight text-[#949494] text-center whitespace-nowrap">
                  Licensed Pros
                </span>
              </div>

            </div>

            {/* Heading: Meet Our Licensed Mental Health Professionals */}
            <h1 className="w-full font-heading font-bold text-[28px] sm:text-4xl md:text-[44px] xl:text-[56px] text-[#2E5A66] leading-[1.18] sm:leading-[1.18] xl:leading-[64px] tracking-[-0.0002em] max-w-[340px] sm:max-w-[580px] xl:max-w-[624px] mx-auto xl:mx-0">
              Meet Our Licensed Mental Health Professionals
            </h1>

            {/* Subtitle */}
            <p className="w-full font-sans font-semibold text-[13.5px] sm:text-base md:text-[17px] xl:text-[18px] text-[#5F6B6F] leading-[22px] sm:leading-[26px] xl:leading-[30px] max-w-[340px] sm:max-w-[600px] xl:max-w-[626px] mx-auto xl:mx-0">
              My ESA Therapist works with a network of independent, state-licensed mental health professionals who conduct emotional support animal (ESA) evaluations through secure telehealth sessions.
            </p>

          </div>

          {/* Buttons Row / Column */}
          {/* On mobile (< sm): stacked vertically, full width up to 280px */}
          {/* On tablet (sm to xl): horizontal row, centered */}
          {/* On desktop (xl): horizontal row, left-aligned */}
          <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-3 sm:gap-4 xl:gap-[25px] w-full max-w-[280px] sm:max-w-none">
            
            {/* "Start your State" Dropdown Button */}
            <div className="relative w-full sm:w-auto" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full sm:min-w-[220px] xl:min-w-[246px] h-[48px] sm:h-[54px] rounded-[30px] bg-white sm:bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] px-5 sm:px-6 flex items-center justify-between gap-[10px] hover:bg-white transition-all cursor-pointer border border-[#FAF7F2]"
                aria-haspopup="listbox"
                aria-expanded={dropdownOpen}
              >
                <div className="flex items-center gap-[8px] shrink-0">
                  <svg className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] text-[#2E5A66] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                  </svg>
                  <span
                    className="font-sans font-semibold text-[16px] sm:text-[18px] leading-[30px] bg-clip-text text-transparent whitespace-nowrap shrink-0"
                    style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                  >
                    {selectedState || "Start your State"}
                  </span>
                </div>
                <svg
                  className={`w-[12px] h-[10px] text-[#2E5A66] transition-transform duration-200 shrink-0 ml-1 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 12 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3l4 4 4-4" />
                </svg>
              </button>

              {/* State Dropdown Menu */}
              {dropdownOpen && (
                <div className={`${STATE_DROPDOWN_PANEL} !max-h-[390px]`}>
                  {AVAILABLE_STATES.map((st) => (
                    <button
                      key={st.slug}
                      type="button"
                      onClick={() => handleSelectState(st.slug, st.name)}
                      className={STATE_DROPDOWN_ITEM}
                    >
                      <span>{st.name}</span>
                      <span className={STATE_DROPDOWN_ABBR}>{st.abbreviation}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* "Get Started" Pill Button */}
            <Link
              href="#therapists"
              className="w-full sm:w-[179px] h-[48px] rounded-[30px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] pl-[34px] pr-[3px] flex items-center justify-between gap-[8px] hover:opacity-95 transition-all shrink-0"
              style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
            >
              <span className="font-sans font-semibold text-[16px] leading-[26px] text-white whitespace-nowrap">
                Get Started
              </span>
              <span className="w-[42.48px] h-[42.48px] rounded-full bg-[#FAF7F2] shadow-[0px_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image
                  src="/common/send-icon.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="w-[18px] h-[18px] object-contain"
                />
              </span>
            </Link>

          </div>

          {/* Trustpilot Card: ONLY on xl desktop (hidden on mobile and tablet) */}
          <div className="hidden xl:block"><ReviewBadges /></div>

        </div>
      </div>
    </section>
  );
}
