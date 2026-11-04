"use client";

import React, { useState } from "react";
import { SiteBreadcrumbs } from "@/components/seo/SiteBreadcrumbs";
import { ResponsiveHero, standardHeroBackgrounds } from "@/components/common/ResponsiveHero";

const TITLE = "Your Go-to-Resource Hub for Emotional Support Animals";
const DESCRIPTION =
  "Finding reliable information about emotional support animals should not be complicated. Explore expert-written blogs that simplify important ESA topics and help you better understand your rights, responsibilities, and the role of emotional support animals in everyday life.";

export function BlogsHero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    document.getElementById("esa-guide")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ResponsiveHero
      centered={false}
      desktopHeight={744}
      tabletMinHeight="720px"
      backgrounds={standardHeroBackgrounds(
        "/hero-image-for-mobile-all.webp",
        "/blogs/blog-hero-section-tablet.webp",
        "/blogs/blog-hero-section.webp",
        { mobile: "object-bottom", tablet: "object-bottom", desktop: "object-center" },
      )}
    >
      <SiteBreadcrumbs className="mb-4 self-start" />
      <h1 className="heading-h1 text-primary max-w-[340px] capitalize sm:max-w-[512px]">{TITLE}</h1>
      <p className="body-large text-body-text mx-auto mt-4 max-w-[320px] sm:mx-0 sm:max-w-[512px]">{DESCRIPTION}</p>
      <form
        onSubmit={handleSearch}
        className="mt-6 flex h-[50px] w-full max-w-[340px] items-center justify-between rounded-[30px] bg-background pl-4 pr-1.5 shadow-[0px_2px_4px_rgba(0,0,0,0.15)] sm:h-[54px] sm:max-w-[422px] sm:pl-5"
      >
        <div className="flex min-w-0 flex-1 items-center gap-2.5">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
            <circle cx="11" cy="11" r="7" stroke="rgba(0, 0, 0, 0.57)" strokeWidth="1.8" />
            <path d="M20 20L16 16" stroke="rgba(0, 0, 0, 0.57)" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search anything...."
            className="w-full border-none bg-transparent font-sans text-[15px] font-semibold text-primary outline-none placeholder:text-body-text sm:text-[17px]"
          />
        </div>
        <button
          type="submit"
          aria-label="Filter or Search"
          className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full text-white sm:h-[46px] sm:w-[46px]"
          style={{ background: "var(--color-gradient)" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M21 7H17" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M11 7H3" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <circle cx="14" cy="7" r="3" stroke="white" strokeWidth="2" />
            <path d="M21 17H13" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M7 17H3" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <circle cx="10" cy="17" r="3" stroke="white" strokeWidth="2" />
          </svg>
        </button>
      </form>
    </ResponsiveHero>
  );
}
