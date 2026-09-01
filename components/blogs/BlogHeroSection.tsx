"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, ChevronDown } from "lucide-react";

const statsData = [
  { value: "51,488+", label: "ESA Evaluations" },
  { value: "5+", label: "Years Serving" },
  { value: "4.9", label: "Verified Reviews" },
];

export function BlogHeroSection() {
  const [selectedState, setSelectedState] = useState("");

  return (
    <section className="relative w-full bg-[#EEEBE0] overflow-visible">
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
        <div className="absolute inset-x-0 top-0 px-4 pt-8 text-center flex flex-col items-center z-10 space-y-3">
          {/* Main Headline */}
          <h1 className="font-heading text-2xl font-bold text-[#2E5A66] leading-[32px] tracking-tight max-w-[320px]">
            How to Verify If an ESA Letter Is Legitimate: <span className="font-normal">A Landlord &amp; Tenant Checklist.</span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-xs text-[#5F6B6F] font-semibold leading-[20px] max-w-[280px]">
            Connect ESA letters, emotional well-being, housing rights, and life with an Emotional Support Animal.
          </p>

          {/* Action Buttons Stacked */}
          <div className="flex flex-col items-center gap-2.5 w-full max-w-[240px] pt-1">
            <Link
              href="#therapists"
              className="w-full h-11 bg-white/95 rounded-[30px] shadow-[0px_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center gap-2 text-xs font-sans font-bold text-[#2E5A66] hover:bg-white transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#2E5A66]" />
              <span>Start your State</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#5F6B6F]" />
            </Link>

            <Link
              href="#tenant-checklist"
              className="w-full h-11 rounded-[30px] text-white flex items-center justify-between pl-5 pr-1.5 shadow-md hover:opacity-95 transition-all group"
              style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
            >
              <span className="font-sans text-xs font-bold">Get Started</span>
              <span className="w-8 h-8 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 shadow-xs group-hover:translate-x-0.5 transition-transform">
                <Image
                  src="/send-icon.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="w-3 h-3 object-contain"
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
            {statsData.map((s, idx) => (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-xs rounded-[30px] px-4 py-2 shadow-xs border border-white/60 flex flex-col items-center"
              >
                <span className="font-sans font-bold text-sm text-[#2E5A66] leading-none">
                  {s.value}
                </span>
                <span className="font-sans text-[10px] font-semibold text-[#5F6B6F] leading-tight mt-0.5">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-3xl sm:text-[34px] font-bold text-[#2E5A66] leading-[1.2] tracking-tight">
            How to Verify If an ESA Letter Is Legitimate: <span className="font-normal">A Landlord &amp; Tenant Checklist.</span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-sm sm:text-base text-[#5F6B6F] font-semibold leading-relaxed max-w-[480px]">
            Connect ESA letters, emotional well-being, housing rights, and life with an Emotional Support Animal.
          </p>

          {/* Action Buttons in a Row */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <Link
              href="#therapists"
              className="h-12 px-6 bg-white rounded-[30px] shadow-[0px_2px_8px_rgba(0,0,0,0.08)] flex items-center gap-2 text-sm font-sans font-bold text-[#2E5A66] hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#2E5A66]" />
              <span>Start your State</span>
              <ChevronDown className="w-4 h-4 text-[#5F6B6F]" />
            </Link>

            <Link
              href="#tenant-checklist"
              className="h-12 pl-6 pr-1.5 w-[165px] rounded-[30px] text-white flex items-center justify-between shadow-md hover:opacity-95 transition-all group"
              style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
            >
              <span className="font-sans text-sm font-bold">Get Started</span>
              <span className="w-9 h-9 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 shadow-xs group-hover:translate-x-0.5 transition-transform">
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
      {/* 3. DESKTOP VIEW (>= 1024px)                          */}
      {/* Uses /blog-hero_section.png                          */}
      {/* ---------------------------------------------------- */}
      <div className="hidden lg:flex relative w-full lg:min-h-[560px] xl:min-h-[792px] flex-col justify-between overflow-hidden">
        <Image
          src="/blog-hero_section.png"
          alt="How to Verify If an ESA Letter Is Legitimate: A Landlord & Tenant Checklist"
          fill
          priority
          className="object-cover lg:object-[88%_center] xl:object-center pointer-events-none"
          sizes="100vw"
        />

        {/* Hero Content inside standard container width */}
        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-8 lg:px-10 xl:px-20 pt-12 lg:pt-16 xl:pt-24 pb-20 lg:pb-28 xl:pb-36">
          <div className="w-full lg:max-w-[430px] xl:max-w-[700px] space-y-3.5 lg:space-y-4 xl:space-y-6">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs lg:text-sm xl:text-base font-sans font-semibold text-[#5F6B6F]">
              <Link href="/" className="hover:text-[#2E5A66] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5F6B6F] shrink-0" />
              <Link href="/blogs" className="hover:text-[#2E5A66] transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5F6B6F] shrink-0" />
              <span className="text-[#2E5A66]">ESA Guide</span>
            </nav>

            {/* Main Headline */}
            <h1 className="font-heading text-2xl sm:text-3xl lg:text-[34px] xl:text-[56px] font-bold text-[#2E5A66] leading-[1.2] lg:leading-[42px] xl:leading-[64px] tracking-[-0.015em]">
              How to Verify If an ESA Letter Is Legitimate: A Landlord &amp; Tenant Checklist.
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-xs sm:text-sm lg:text-[15px] xl:text-[18px] text-[#5F6B6F] font-semibold leading-relaxed lg:leading-[24px] xl:leading-[30px] lg:max-w-[400px] xl:max-w-[580px]">
              Connect ESA letters, emotional well-being, housing rights, and life with an Emotional Support Animal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
