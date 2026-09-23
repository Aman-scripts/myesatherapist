"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BreakpointImage } from "@/components/common/BreakpointImage";
import Link from "next/link";
import { ChevronRight, MapPin, ChevronDown } from "lucide-react";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";


interface BlogHeroSectionProps {
  title?: string;
  subtitle?: string;
  category?: string;
  categorySlug?: string;
}

export function BlogHeroSection({
  title = "How to Verify If an ESA Letter Is Legitimate: A Landlord & Tenant Checklist",
  subtitle = "Connect ESA letters, emotional well-being, housing rights, and life with an Emotional Support Animal.",
  category = "ESA Guide",
  categorySlug = "esa-guide",
}: BlogHeroSectionProps = {}) {
  return (
    <section className="relative w-full bg-[#FAF7F2] overflow-visible">
      {/* ---------------------------------------------------- */}
      {/* 1. MOBILE VIEW (< 640px)                             */}
      {/* Uses /blog_hero-section-mobile.png                   */}
      {/* ---------------------------------------------------- */}
      <div className="sm:hidden relative w-full aspect-[390/780] min-h-[620px] max-h-[760px] overflow-hidden">
        <BreakpointImage
          media="(max-width: 639px)"
            quality={90}
          src="/blogs/blog_hero-section-mobile.webp"
          alt={title}
          fill
          className="object-cover object-bottom pointer-events-none"
          sizes="(max-width: 639px) 100vw, 1px"
        />

        {/* Content Container at Top */}
        <div className="absolute inset-x-0 top-0 px-3 pt-6 text-center flex flex-col items-center z-10">

          {/* Main Headline */}
          <h1 className="font-heading text-[22px] leading-[1.25] font-bold tracking-tight max-w-[320px] text-[#2E5A66]">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-[12.5px] text-[#5F6B6F] font-semibold leading-[20px] max-w-[290px] mt-2">
            {subtitle}
          </p>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. TABLET VIEW (640px - 1023px)                      */}
      {/* Uses /blog_hero-section-tablet.png                   */}
      {/* ---------------------------------------------------- */}
      <div className="hidden sm:flex lg:hidden relative w-full aspect-[834/1100] min-h-[720px] max-h-[920px] overflow-hidden">
        <BreakpointImage
          media="(min-width: 640px) and (max-width: 1023px)"
            quality={90}
          src="/blogs/blog_hero-section-tablet.webp"
          alt="How to Verify If an ESA Letter Is Legitimate"
          fill
          className="object-cover object-bottom pointer-events-none"
          sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
        />

        {/* Content Container at Top */}
        <div className="absolute inset-x-0 top-0 px-6 pt-10 text-center flex flex-col items-center z-10 space-y-4 max-w-[620px] mx-auto">

          {/* Main Headline */}
          <h1 className="font-heading text-3xl sm:text-[34px] font-bold leading-[1.2] tracking-tight text-[#2E5A66]">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-sm sm:text-base text-[#5F6B6F] font-semibold leading-relaxed max-w-[480px]">
            {subtitle}
          </p>

          {/* Action Buttons in a Row */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <Link
              href="#therapists"
              className="h-12 px-6 bg-[#FAF7F2] rounded-[30px] shadow-sm flex items-center gap-2 text-sm font-sans font-bold text-[#2E5A66] hover:bg-white transition-colors"
            >
              <Image
            quality={90}
                src="/home/hero-section-map.svg"
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
            quality={90}
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
      {/* Uses /blog-hero_section.png                          */}
      {/* ---------------------------------------------------- */}
      <div className="hidden lg:flex relative w-full lg:min-h-[580px] xl:min-h-[792px] flex-col justify-between overflow-hidden">
        <BreakpointImage
          media="(min-width: 1024px)"
            quality={90}
          src="/blogs/blog-hero_section.webp"
          alt={title}
          fill
          className="object-cover lg:object-[88%_center] xl:object-center pointer-events-none"
          sizes="(min-width: 1024px) 100vw, 1px"
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
              <Link href="/blog/" className="hover:text-[#2E5A66] transition-colors">
                Blog
              </Link>
              <span className="w-2 h-2 rounded-full bg-[#5F6B6F] inline-block shrink-0 opacity-70" />
              <span className="text-[#5F6B6F]">{category}</span>
            </nav>


            {/* Main Headline: Frame 1000011902 */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[40px] xl:text-[56px] font-bold leading-[1.15] lg:leading-[48px] xl:leading-[64px] tracking-[-0.0002em] text-[#2E5A66]">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-sm sm:text-base lg:text-[17px] xl:text-[18px] text-[#5F6B6F] font-semibold leading-[24px] lg:leading-[28px] xl:leading-[30px]">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
