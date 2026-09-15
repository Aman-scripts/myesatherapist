"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AVAILABLE_STATES = [
  { name: "Alabama", slug: "alabama" },
  { name: "Alaska", slug: "alaska" },
  { name: "Arizona", slug: "arizona" },
  { name: "Arkansas", slug: "arkansas" },
  { name: "California", slug: "california" },
  { name: "Colorado", slug: "colorado" },
  { name: "Connecticut", slug: "connecticut" },
  { name: "Delaware", slug: "delaware" },
  { name: "Florida", slug: "florida" },
  { name: "Georgia", slug: "georgia" },
  { name: "Hawaii", slug: "hawaii" },
  { name: "Idaho", slug: "idaho" },
  { name: "Illinois", slug: "illinois" },
  { name: "Indiana", slug: "indiana" },
  { name: "Iowa", slug: "iowa" },
  { name: "Kansas", slug: "kansas" },
  { name: "Kentucky", slug: "kentucky" },
  { name: "Louisiana", slug: "louisiana" },
  { name: "Maine", slug: "maine" },
  { name: "Maryland", slug: "maryland" },
  { name: "Massachusetts", slug: "massachusetts" },
  { name: "Michigan", slug: "michigan" },
  { name: "Minnesota", slug: "minnesota" },
  { name: "Mississippi", slug: "mississippi" },
  { name: "Missouri", slug: "missouri" },
  { name: "Montana", slug: "montana" },
  { name: "Nebraska", slug: "nebraska" },
  { name: "Nevada", slug: "nevada" },
  { name: "New Hampshire", slug: "new-hampshire" },
  { name: "New Jersey", slug: "new-jersey" },
  { name: "New Mexico", slug: "new-mexico" },
  { name: "New York", slug: "new-york" },
  { name: "North Carolina", slug: "north-carolina" },
  { name: "North Dakota", slug: "north-dakota" },
  { name: "Ohio", slug: "ohio" },
  { name: "Oklahoma", slug: "oklahoma" },
  { name: "Oregon", slug: "oregon" },
  { name: "Pennsylvania", slug: "pennsylvania" },
  { name: "South Carolina", slug: "south-carolina" },
  { name: "South Dakota", slug: "south-dakota" },
  { name: "Tennessee", slug: "tennessee" },
  { name: "Texas", slug: "texas" },
  { name: "Utah", slug: "utah" },
  { name: "Vermont", slug: "vermont" },
  { name: "Virginia", slug: "virginia" },
  { name: "Washington", slug: "washington" },
  { name: "West Virginia", slug: "west-virginia" },
  { name: "Wisconsin", slug: "wisconsin" },
  { name: "Wyoming", slug: "wyoming" },
];

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
                <div className="absolute left-0 top-[56px] sm:top-[60px] z-50 w-full sm:w-[280px] max-h-[320px] overflow-y-auto rounded-[20px] bg-white shadow-[0px_10px_30px_rgba(0,0,0,0.15)] border border-[#EAE5DC] py-2 scrollbar-thin scrollbar-thumb-[#2E5A66]/30">
                  <div className="px-4 py-2 border-b border-[#FAF7F2] text-xs font-bold text-[#2E5A66] tracking-wider uppercase">
                    Select Your State
                  </div>
                  {AVAILABLE_STATES.map((st) => (
                    <button
                      key={st.slug}
                      type="button"
                      onClick={() => handleSelectState(st.slug, st.name)}
                      className="w-full text-left px-4 py-2.5 text-sm font-sans font-semibold text-[#5F6B6F] hover:bg-[#FAF7F2] hover:text-[#2E5A66] transition-colors flex items-center justify-between"
                    >
                      <span>{st.name}</span>
                      <span className="text-xs text-[#E8B92C]">Choose →</span>
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
          <div
            className="hidden xl:flex w-[201px] h-[105px] rounded-[20px] p-[14px_24px_12px] flex-col justify-center items-center gap-[10px]"
            style={{
              background: "rgba(255, 255, 255, 0.55)",
              border: "1px solid rgba(255, 255, 255, 0.09)",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(11.7px)",
              WebkitBackdropFilter: "blur(11.7px)",
            }}
          >
            <div className="w-[166px] flex flex-col items-center gap-[8px]">
              <div className="flex items-center gap-[6px] w-[94px] h-[25px] justify-center">
                <svg className="w-[22px] h-[22px] text-[#00B67A] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="font-[family-name:var(--font-lato)] font-normal text-[16px] leading-[20px] text-[#5F6B6F] tracking-[-0.017em]">
                  Trustpilot
                </span>
              </div>

              <div className="flex items-center gap-[8px] w-[152px] h-[24px]">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-[24px] h-[24px] bg-[#00B67A] p-[4px] flex items-center justify-center shrink-0">
                    <svg className="w-[16px] h-[16px] text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                ))}
                <div className="w-[24px] h-[24px] bg-[#CCCCCC] relative overflow-hidden flex items-center justify-center shrink-0">
                  <div className="absolute left-0 top-0 w-[12px] h-[24px] bg-[#00B67A]" />
                  <svg className="w-[16px] h-[16px] text-white relative z-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-between w-[166px] h-[20px] text-[12px] font-[family-name:var(--font-lato)] font-normal text-[#5F6B6F] leading-[20px] tracking-[-0.017em]">
                <span className="text-center">Trustscore 4.4</span>
                <span className="text-center">23,900 reviews</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
