"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, ChevronDown } from "lucide-react";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

const statsData = [
  { value: "51,488+", label: "ESA Evaluations" },
  { value: "5+", label: "Years Serving" },
  { value: "4.9", label: "Verified Reviews" },
];

export function BlogHeroSection() {
  return (
    <section className="relative w-full bg-[#FAF7F2] overflow-visible">
      {/* ---------------------------------------------------- */}
      {/* 1. MOBILE VIEW (< 640px)                             */}
      {/* Uses /blog_hero-section-mobile.png                   */}
      {/* ---------------------------------------------------- */}
      <div className="sm:hidden relative w-full aspect-[390/780] min-h-[620px] max-h-[760px] overflow-hidden">
        <Image
          src="/blog_hero-section-mobile.png"
          alt="How to Verify If an ESA Letter Is Legitimate"
          fill
          priority
          className="object-cover object-bottom pointer-events-none"
          sizes="100vw"
        />

        {/* Content Container at Top */}
        <div className="absolute inset-x-0 top-0 px-3 pt-6 text-center flex flex-col items-center z-10">
          {/* Stat Pills at top (Mobile) */}
          <div className="flex items-center justify-center gap-2 w-full max-w-[340px] mx-auto mb-3.5">
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className="flex-1 flex flex-col items-center justify-center bg-[#FAF7F2] py-1.5 px-1 rounded-[24px] text-center shadow-xs"
              >
                <span
                  className="font-heading text-[16px] font-bold leading-none bg-clip-text text-transparent"
                  style={{ backgroundImage: TEAL_GRADIENT }}
                >
                  {stat.value}
                </span>
                <span className="text-[9.5px] font-semibold text-[#949494] mt-0.5 whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-[22px] leading-[1.25] font-bold tracking-tight max-w-[320px]">
            <span className="text-[#2E5A66]">How to Verify If an ESA Letter Is Legitimate: </span>
            <span className="text-[#5F6B6F]">A Landlord &amp; Tenant Checklist.</span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-[12.5px] text-[#5F6B6F] font-semibold leading-[20px] max-w-[290px] mt-2">
            Connect ESA letters, emotional well-being, housing rights, and life with an Emotional Support Animal.
          </p>

          {/* Action Buttons Stacked */}
          <div className="flex flex-col items-center gap-2.5 w-full max-w-[240px] pt-3">
            <Link
              href="#therapists"
              className="w-full h-11 bg-[#FAF7F2] rounded-[30px] shadow-sm flex items-center justify-between px-5 text-sm font-sans font-bold text-[#2E5A66] hover:bg-white transition-colors"
            >
              <span className="flex items-center gap-2">
                <Image
                  src="/hero-section-map.svg"
                  alt=""
                  width={14}
                  height={18}
                  className="w-[14px] h-[18px] object-contain"
                />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                  Start your State
                </span>
              </span>
              <ChevronDown className="w-4 h-4 text-[#2E5A66]" />
            </Link>

            <Link
              href="#tenant-checklist"
              className="w-full h-11 rounded-[30px] text-white flex items-center justify-between pl-5 pr-1.5 shadow-sm hover:opacity-95 transition-all group"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <span className="font-sans text-sm font-semibold">Get Started</span>
              <span className="w-8 h-8 rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image
                  src="/send-icon.svg"
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
      {/* Uses /blog_hero-section-tablet.png                   */}
      {/* ---------------------------------------------------- */}
      <div className="hidden sm:flex lg:hidden relative w-full aspect-[834/1100] min-h-[720px] max-h-[920px] overflow-hidden">
        <Image
          src="/blog_hero-section-tablet.png"
          alt="How to Verify If an ESA Letter Is Legitimate"
          fill
          priority
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
                className="bg-[#FAF7F2] rounded-[30px] px-4 py-2 shadow-xs flex flex-col items-center min-w-[120px]"
              >
                <span
                  className="font-heading text-xl font-bold leading-none bg-clip-text text-transparent"
                  style={{ backgroundImage: TEAL_GRADIENT }}
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
          <h1 className="font-heading text-3xl sm:text-[34px] font-bold leading-[1.2] tracking-tight">
            <span className="text-[#2E5A66]">How to Verify If an ESA Letter Is Legitimate: </span>
            <span className="text-[#5F6B6F]">A Landlord &amp; Tenant Checklist.</span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-sm sm:text-base text-[#5F6B6F] font-semibold leading-relaxed max-w-[480px]">
            Connect ESA letters, emotional well-being, housing rights, and life with an Emotional Support Animal.
          </p>

          {/* Action Buttons in a Row */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <Link
              href="#therapists"
              className="h-12 px-6 bg-[#FAF7F2] rounded-[30px] shadow-sm flex items-center gap-2 text-sm font-sans font-bold text-[#2E5A66] hover:bg-white transition-colors"
            >
              <Image
                src="/hero-section-map.svg"
                alt=""
                width={16}
                height={20}
                className="w-4 h-5 object-contain"
              />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                Start your State
              </span>
              <ChevronDown className="w-4 h-4 text-[#2E5A66]" />
            </Link>

            <Link
              href="#tenant-checklist"
              className="h-12 pl-6 pr-2 w-[165px] rounded-[30px] text-white flex items-center justify-between shadow-sm hover:opacity-95 transition-all group"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <span className="font-sans text-base font-semibold">Get Started</span>
              <span className="w-9 h-9 rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image
                  src="/send-icon.svg"
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
      {/* Uses /blog-hero_section.png                          */}
      {/* ---------------------------------------------------- */}
      <div className="hidden lg:flex relative w-full lg:min-h-[580px] xl:min-h-[792px] flex-col justify-between overflow-hidden">
        <Image
          src="/blog-hero_section.png"
          alt="How to Verify If an ESA Letter Is Legitimate: A Landlord & Tenant Checklist"
          fill
          priority
          className="object-cover lg:object-[88%_center] xl:object-center pointer-events-none"
          sizes="100vw"
        />

        {/* Hero Content inside standard container width (Frame 1261153654) */}
        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-8 lg:px-10 xl:px-20 pt-12 lg:pt-16 xl:pt-[94px] pb-20 lg:pb-28 xl:pb-[282px]">
          <div className="w-full lg:max-w-[520px] xl:max-w-[623px] space-y-4 xl:space-y-[30px]">
            
            {/* Breadcrumb Navigation: Frame 1261153653 */}
            <nav className="flex items-center gap-3 text-sm lg:text-[16px] leading-[26px] font-sans font-semibold text-[#5F6B6F]">
              <Link href="/" className="hover:text-[#2E5A66] transition-colors">
                Home
              </Link>
              <span className="w-2 h-2 rounded-full bg-[#5F6B6F] inline-block shrink-0 opacity-70" />
              <Link href="/blogs" className="hover:text-[#2E5A66] transition-colors">
                Blog
              </Link>
              <span className="w-2 h-2 rounded-full bg-[#5F6B6F] inline-block shrink-0 opacity-70" />
              <span className="text-[#5F6B6F]">ESA Guide</span>
            </nav>

            {/* Stat Pills: Frame 1000011901 */}
            <div className="flex items-center gap-3 flex-wrap">
              {statsData.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center bg-[#FAF7F2] py-2 px-5 rounded-[30px] text-center shadow-[0px_2px_4px_rgba(0,0,0,0.15)] min-w-[140px]"
                >
                  <span
                    className="font-heading text-2xl font-bold leading-none bg-clip-text text-transparent"
                    style={{ backgroundImage: TEAL_GRADIENT }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[12px] font-semibold text-[#949494] mt-1 leading-[17px] whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Main Headline: Frame 1000011902 */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[40px] xl:text-[56px] font-bold leading-[1.15] lg:leading-[48px] xl:leading-[64px] tracking-[-0.0002em]">
              <span className="text-[#2E5A66]">How to Verify If an ESA Letter Is Legitimate: </span>
              <span className="text-[#5F6B6F] block lg:inline xl:block">A Landlord &amp; Tenant Checklist.</span>
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-sm sm:text-base lg:text-[17px] xl:text-[18px] text-[#5F6B6F] font-semibold leading-[24px] lg:leading-[28px] xl:leading-[30px]">
              Connect ESA letters, emotional well-being, housing rights, and life with an Emotional Support Animal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
