"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Clock, Award, ChevronDown } from "lucide-react";

const statsData = [
  { value: "51,488+", label: "ESA Evaluations" },
  { value: "5+", label: "Years Serving" },
  { value: "4.9", label: "Verified Reviews" },
];

const stateOptions = [
  { name: "California", href: "/california" },
  { name: "Texas", href: "/texas" },
  { name: "New York", href: "/new-york" },
  { name: "Florida", href: "/florida" },
  { name: "Colorado", href: "/colorado" },
  { name: "Illinois", href: "/illinois" },
  { name: "Washington", href: "/washington" },
];

export function AboutHeroSection() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <section className="relative w-full bg-[#FAF7F2] overflow-hidden">
      {/* ---------------------------------------------------- */}
      {/* 1. MOBILE VIEW (< 640px)                             */}
      {/* Uses /about_us-mobile_hero_section.png (390x768)     */}
      {/* ---------------------------------------------------- */}
      <div className="block sm:hidden relative w-full aspect-[390/768] min-h-[640px] overflow-hidden">
        <Image
          src="/about-us/about_us-mobile_hero_section.png"
          alt="About My ESA Therapist"
          fill
          priority
          unoptimized
          className="object-cover object-bottom pointer-events-none"
          sizes="100vw"
        />

        {/* Content Container at Top */}
        <div className="absolute inset-x-0 top-0 px-4 pt-6 text-center flex flex-col items-center z-10 space-y-3">
          {/* Top 3 Stat Pills */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 w-full max-w-[350px]">
            {statsData.map((stat, idx) => (
              <div
                key={idx}
                className="flex-1 bg-[#FAF7F2] rounded-[24px] py-1.5 px-1 shadow-xs flex flex-col items-center border border-white/80"
              >
                <span
                  className="font-heading text-[15px] font-bold leading-none bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                >
                  {stat.value}
                </span>
                <span className="font-sans text-[9px] font-semibold text-[#949494] mt-0.5 whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-[26px] font-bold tracking-tight leading-[1.2] max-w-[280px]">
            <span className="text-[#2E5A66] block">About</span>
            <span className="text-[#5F6B6F] block">My ESA Therapist</span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-[12.5px] text-[#5F6B6F] font-semibold leading-[20px] max-w-[310px]">
            Providing legitimate, HIPAA-compliant ESA evaluations through state-licensed mental health professionals across all 50 states.
          </p>

          {/* Action Buttons Stacked */}
          <div className="flex flex-col items-center gap-2.5 w-full max-w-[260px] pt-1 relative">
            {/* Start your State Dropdown */}
            <div className="relative w-full">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full h-11 bg-white rounded-[30px] shadow-sm flex items-center justify-between px-5 text-sm font-sans font-bold text-[#2E5A66] border border-[#EAE5DC]"
              >
                <span className="flex items-center gap-2">
                  <Image
                    src="/home/hero-section-map.svg"
                    alt=""
                    width={14}
                    height={18}
                    className="w-[14px] h-[18px] object-contain"
                  />
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                  >
                    Start your State
                  </span>
                </span>
                <ChevronDown className="w-4 h-4 text-[#2E5A66]" />
              </button>

              {dropdownOpen && (
                <div className="absolute top-12 left-0 right-0 bg-white rounded-[16px] shadow-lg border border-[#EAE5DC] p-2 z-50 text-left">
                  {stateOptions.map((st) => (
                    <Link
                      key={st.name}
                      href={st.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-3 py-2 text-xs font-semibold text-[#1E3E47] hover:bg-[#FAF7F2] rounded-md transition-colors"
                    >
                      {st.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Get Started Button */}
            <Link
              href="#pricing"
              className="w-full h-11 rounded-[30px] text-white flex items-center justify-between pl-5 pr-1.5 shadow-sm hover:opacity-95 transition-all group"
              style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
            >
              <span className="font-sans text-sm font-semibold">Get Started</span>
              <span className="w-8 h-8 rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image
                  src="/common/send-icon.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="w-3.5 h-3.5 object-contain"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. TABLET VIEW (640px - 1023px)                      */}
      {/* Uses /about_us-tablet_hero_section.png (834x1226)    */}
      {/* ---------------------------------------------------- */}
      <div className="hidden sm:flex lg:hidden relative w-full aspect-[834/1226] min-h-[760px] max-h-[1050px] overflow-hidden">
        <Image
          src="/about-us/about_us-tablet_hero_section.png"
          alt="About My ESA Therapist"
          fill
          priority
          unoptimized
          className="object-cover object-bottom pointer-events-none"
          sizes="100vw"
        />

        {/* Content Container at Top */}
        <div className="absolute inset-x-0 top-0 px-6 pt-10 text-center flex flex-col items-center z-10 space-y-4 max-w-[620px] mx-auto">
          {/* Top Pill Badges */}
          <div className="flex items-center justify-center gap-3">
            {statsData.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] rounded-[30px] px-4 py-2 shadow-xs flex flex-col items-center min-w-[120px] border border-white/80"
              >
                <span
                  className="font-heading text-xl font-bold leading-none bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                >
                  {stat.value}
                </span>
                <span className="font-sans text-[11px] font-semibold text-[#949494] mt-1 whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-3xl sm:text-[38px] font-bold leading-[1.2] tracking-tight">
            <span className="text-[#2E5A66]">About </span>
            <span className="text-[#5F6B6F]">My ESA Therapist</span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-sm sm:text-base text-[#5F6B6F] font-semibold leading-relaxed max-w-[480px]">
            Providing legitimate, HIPAA-compliant ESA evaluations through state-licensed mental health professionals across all 50 states.
          </p>

          {/* Action Buttons in a Row */}
          <div className="flex items-center justify-center gap-4 pt-1 relative">
            {/* Start your State */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="h-12 px-6 bg-white rounded-[30px] shadow-sm flex items-center gap-2 text-sm font-sans font-bold text-[#2E5A66] hover:bg-[#FAF7F2] transition-colors border border-[#EAE5DC]"
              >
                <Image
                  src="/home/hero-section-map.svg"
                  alt=""
                  width={16}
                  height={20}
                  className="w-4 h-5 object-contain"
                />
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                >
                  Start your State
                </span>
                <ChevronDown className="w-4 h-4 text-[#2E5A66]" />
              </button>

              {dropdownOpen && (
                <div className="absolute top-14 left-0 w-48 bg-white rounded-[16px] shadow-lg border border-[#EAE5DC] p-2 z-50 text-left">
                  {stateOptions.map((st) => (
                    <Link
                      key={st.name}
                      href={st.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-3 py-2 text-xs font-semibold text-[#1E3E47] hover:bg-[#FAF7F2] rounded-md transition-colors"
                    >
                      {st.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Get Started */}
            <Link
              href="#pricing"
              className="h-12 pl-6 pr-2 w-[165px] rounded-[30px] text-white flex items-center justify-between shadow-sm hover:opacity-95 transition-all group"
              style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
            >
              <span className="font-sans text-base font-semibold">Get Started</span>
              <span className="w-9 h-9 rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image
                  src="/common/send-icon.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="w-4 h-4 object-contain"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. DESKTOP VIEW (>= 1024px)                          */}
      {/* Uses /hero_section-about_us.png                      */}
      {/* ---------------------------------------------------- */}
      <div className="hidden lg:flex relative w-full lg:min-h-[720px] xl:min-h-[795px] items-center overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-us/hero_section-about_us.png"
            alt="About My ESA Therapist"
            fill
            priority
            unoptimized
            className="object-cover object-right"
            sizes="100vw"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 xl:px-[82px] py-20 xl:py-[100px] w-full">
          <div className="max-w-[500px] xl:max-w-[540px] space-y-7 xl:space-y-8">
            {/* Top 3 Pill Stats */}
            <div className="flex flex-wrap items-center gap-3 xl:gap-3.5">
              {/* Stat 1 */}
              <div className="w-[140px] xl:w-[163px] h-[50px] xl:h-[53px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.12)] rounded-[30px] flex flex-col items-center justify-center px-2.5 py-1 border border-white/80">
                <span
                  className="font-heading font-bold text-xl lg:text-2xl leading-none bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                >
                  50
                </span>
                <span className="font-sans font-semibold text-[11px] lg:text-[12px] text-[#949494] mt-0.5">
                  USA States
                </span>
              </div>

              {/* Stat 2 */}
              <div className="w-[140px] xl:w-[163px] h-[50px] xl:h-[53px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.12)] rounded-[30px] flex flex-col items-center justify-center px-2.5 py-1 border border-white/80">
                <span
                  className="font-heading font-bold text-xl lg:text-2xl leading-none bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                >
                  HIPAA
                </span>
                <span className="font-sans font-semibold text-[11px] lg:text-[12px] text-[#949494] mt-0.5">
                  Compliant
                </span>
              </div>

              {/* Stat 3 */}
              <div className="w-[140px] xl:w-[163px] h-[50px] xl:h-[53px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.12)] rounded-[30px] flex flex-col items-center justify-center px-2.5 py-1 border border-white/80">
                <span
                  className="font-heading font-bold text-xl lg:text-2xl leading-none bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                >
                  100%
                </span>
                <span className="font-sans font-semibold text-[11px] lg:text-[12px] text-[#949494] mt-0.5">
                  Licensed Pros
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading text-4xl lg:text-[46px] xl:text-[56px] font-bold leading-tight lg:leading-[52px] xl:leading-[64px] tracking-[-0.0002em]">
              <span className="text-[#2E5A66]">About My </span>
              <span className="text-[#5F6B6F] block">ESA Therapist</span>
            </h1>

            {/* Subtitle Description */}
            <p className="font-sans font-semibold text-base lg:text-[16px] xl:text-[18px] text-[#5F6B6F] leading-[26px] xl:leading-[30px] max-w-[480px]">
              Providing legitimate, HIPAA-compliant ESA evaluations through state-licensed mental health professionals across all 50 states.
            </p>

            {/* Trustpilot Floating Badge Card */}
            <div className="w-[195px] xl:w-[201px] h-[100px] xl:h-[105px] bg-white/75 backdrop-blur-[12px] border border-white/50 shadow-[0px_2px_8px_rgba(0,0,0,0.08)] rounded-[20px] p-3 flex flex-col items-center justify-center space-y-1.5">
              {/* Trustpilot Logo & Text */}
              <div className="flex items-center gap-1.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L14.7 8.3L21.5 9.1L16.3 13.8L17.8 20.6L12 17.1L6.2 20.6L7.7 13.8L2.5 9.1L9.3 8.3L12 2Z" fill="#00B67A"/>
                </svg>
                <span className="font-[family-name:var(--font-lato)] font-normal text-sm text-[#5F6B6F]">
                  Trustpilot
                </span>
              </div>

              {/* 5 Green Stars */}
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] bg-[#00B67A] flex items-center justify-center rounded-[2px]">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                    </svg>
                  </div>
                ))}
                {/* 5th Half Star (4.4 rating) */}
                <div className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] bg-[#CCCCCC] relative overflow-hidden flex items-center justify-center rounded-[2px]">
                  <div className="absolute left-0 top-0 bottom-0 w-[55%] bg-[#00B67A]" />
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="white" className="relative z-10">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                  </svg>
                </div>
              </div>

              {/* Trustscore & Reviews */}
              <div className="flex items-center justify-between w-full px-1 text-[11px] font-[family-name:var(--font-lato)] text-[#5F6B6F]">
                <span>Trustscore 4.4</span>
                <span>23,900 reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Trust Bar (Desktop) */}
      <div className="w-full bg-[#FAF7F2] py-6 sm:py-8 lg:py-9 border-t border-b border-[#EAE5DC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center lg:justify-between gap-6 sm:gap-8 lg:gap-6 xl:gap-12">
          {/* Trust Item 1 */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white shadow-xs shrink-0"
              style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
            >
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
            </div>
            <span className="font-heading font-bold text-base sm:text-lg lg:text-[20px] xl:text-[24px] text-[#949494]">
              HIPAA Compliant
            </span>
          </div>

          {/* Trust Item 2 */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white shadow-xs shrink-0"
              style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
            >
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
            </div>
            <span className="font-heading font-bold text-base sm:text-lg lg:text-[20px] xl:text-[24px] text-[#949494]">
              Response Within 24-72 Hours
            </span>
          </div>

          {/* Trust Item 3 */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white shadow-xs shrink-0"
              style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
            >
              <Award className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
            </div>
            <span className="font-heading font-bold text-base sm:text-lg lg:text-[20px] xl:text-[24px] text-[#949494]">
              Licensed in All 50 States
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
