"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

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
  const categoryHref = categorySlug ? `/blog/${categorySlug}/` : "/blog/";

  return (
    <section className="relative w-full bg-[#FAF7F2] overflow-hidden min-h-[420px] sm:min-h-[460px] lg:min-h-[500px] xl:min-h-[540px] flex flex-col justify-start items-center">
      {/* ---------------------------------------------------- */}
      {/* Background Graphic: blogs_internal_page_common      */}
      {/* Anchored object-right so laptop and dog are visible  */}
      {/* ---------------------------------------------------- */}
      <Image
        src="/blogs/blogs_internal_page_common.webp"
        alt={title}
        fill
        priority
        quality={95}
        className="object-cover object-right md:object-[right_center] pointer-events-none"
        sizes="100vw"
      />

      {/* ---------------------------------------------------- */}
      {/* Frame 1000011884: Centered Blog Header Container    */}
      {/* Auto layout: column, align-items: center, gap: 30px */}
      {/* ---------------------------------------------------- */}
      <div className="relative z-10 w-full max-w-[1018px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 lg:pt-[56px] xl:pt-[64px] pb-12 sm:pb-14 lg:pb-[70px] xl:pb-[76px] flex flex-col items-center text-center">
        
        {/* Frame 1261153653: Breadcrumbs */}
        {/* Auto layout: row, align-items: center, gap: 12px */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center justify-center flex-wrap gap-3 text-sm sm:text-[16px] leading-[26px] font-sans font-semibold text-[#5F6B6F] mb-6 sm:mb-7 lg:mb-[30px]"
        >
          <Link href="/" className="hover:text-[#2E5A66] transition-colors">
            Home
          </Link>

          {/* fi_254434 vector indicator */}
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="currentColor"
            className="shrink-0 text-[#5F6B6F]"
            aria-hidden="true"
          >
            <path d="M2 1.5L6 4L2 6.5V1.5Z" />
          </svg>

          <Link href="/blog/" className="hover:text-[#2E5A66] transition-colors">
            Blog
          </Link>

          {/* fi_254434 vector indicator */}
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="currentColor"
            className="shrink-0 text-[#5F6B6F]"
            aria-hidden="true"
          >
            <path d="M2 1.5L6 4L2 6.5V1.5Z" />
          </svg>

          <Link href={categoryHref} className="hover:text-[#2E5A66] transition-colors">
            {category}
          </Link>
        </nav>

        {/* Frame 1000011902: Title and Subtitle Block */}
        {/* Auto layout: column, align-items: center, gap: 24px */}
        <div className="w-full flex flex-col items-center text-center gap-4 sm:gap-5 lg:gap-[24px]">
          {/* Main Headline */}
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[56px] font-bold leading-[1.2] lg:leading-[54px] xl:leading-[64px] tracking-[-0.0002em] text-[#2E5A66] text-center max-w-[839px] mx-auto">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="font-sans text-xs sm:text-sm md:text-base lg:text-[18px] font-semibold leading-[20px] sm:leading-[26px] lg:leading-[30px] text-[#5F6B6F] text-center max-w-[574px] sm:max-w-[620px] lg:max-w-[680px] xl:max-w-[720px] mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
