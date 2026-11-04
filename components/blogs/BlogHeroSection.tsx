"use client";

import React from "react";
import Link from "next/link";
import { BreakpointImage } from "@/components/common/BreakpointImage";

interface BlogHeroSectionProps {
  title?: string;
  subtitle?: string;
  category?: string;
  categorySlug?: string;
  /** Author / published / reviewer card. Sits on the cream area on small screens. */
  meta?: React.ReactNode;
}

export function BlogHeroSection({
  title = "How to Verify If an ESA Letter Is Legitimate: A Landlord & Tenant Checklist",
  subtitle = "Connect ESA letters, emotional well-being, housing rights, and life with an Emotional Support Animal.",
  category = "ESA Guide",
  categorySlug = "esa-guide",
  meta,
}: BlogHeroSectionProps = {}) {
  const categoryHref = categorySlug ? `/blog/${categorySlug}/` : "/blog/";

  return (
    <section className="relative w-full bg-background lg:min-h-[500px] xl:min-h-[540px] flex flex-col items-center">
      {/* Desktop illustration fills the hero. The author card hangs halfway below it. */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <BreakpointImage
          media="(min-width: 1024px)"
          quality={90}
          src="/blogs/blog_hero_section_innteralpage.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Mobile and tablet cream stops partway through the author card. */}
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-0 overflow-hidden lg:hidden">
          <BreakpointImage
            media="(max-width: 1023px)"
            quality={90}
            src="/hero-image-for-mobile-all.webp"
            alt=""
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>

      {/* ---------------------------------------------------- */}
      {/* Frame 1000011884: Centered Blog Header Container    */}
      {/* Auto layout: column, align-items: center, gap: 30px */}
      {/* ---------------------------------------------------- */}
      <div className="relative z-10 w-full max-w-[1018px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 lg:pt-[56px] xl:pt-[64px] pb-[234px] sm:pb-[238px] md:pb-[96px] lg:pb-[70px] xl:pb-[76px] flex flex-col items-center text-center">
        
        {/* Frame 1261153653: Breadcrumbs */}
        {/* Auto layout: row, align-items: center, gap: 12px */}
        <nav
          aria-label="Breadcrumb"
          className="hidden sm:flex items-center justify-center flex-wrap gap-3 body-text text-body-text mb-6 sm:mb-7 lg:mb-[30px]"
        >
          <Link prefetch={false} href="/" className="hover:text-primary transition-colors">
            Home
          </Link>

          {/* fi_254434 vector indicator */}
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="currentColor"
            className="shrink-0 text-body-text"
            aria-hidden="true"
          >
            <path d="M2 1.5L6 4L2 6.5V1.5Z" />
          </svg>

          <Link prefetch={false} href="/blog/" className="hover:text-primary transition-colors">
            Blog
          </Link>

          {/* fi_254434 vector indicator */}
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="currentColor"
            className="shrink-0 text-body-text"
            aria-hidden="true"
          >
            <path d="M2 1.5L6 4L2 6.5V1.5Z" />
          </svg>

          <Link prefetch={false} href={categoryHref} className="hover:text-primary transition-colors">
            {category}
          </Link>
        </nav>

        {/* Frame 1000011902: Title and Subtitle Block */}
        {/* Auto layout: column, align-items: center, gap: 24px */}
        <div className="w-full flex flex-col items-center text-center gap-4 sm:gap-5 lg:gap-[24px]">
          {/* Main Headline */}
          <h1 className="heading-h1 text-primary text-center max-w-[839px] mx-auto capitalize">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="body-large text-body-text text-center max-w-[320px] sm:max-w-[460px] lg:max-w-[574px] mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      </div>

      {meta && (
        <div className="relative z-20 w-full max-w-[360px] sm:max-w-[520px] md:max-w-[1069px] -mt-[210px] sm:-mt-[214px] md:-mt-[72px] lg:mt-0 lg:max-w-none lg:absolute lg:left-0 lg:right-0 lg:bottom-0 lg:translate-y-1/2 lg:px-8">
          {meta}
        </div>
      )}
    </section>
  );
}
