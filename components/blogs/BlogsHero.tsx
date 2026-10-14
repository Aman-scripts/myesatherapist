"use client";

import React, { useState } from "react";
import { BreakpointImage } from "@/components/common/BreakpointImage";

export function BlogsHero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const el = document.getElementById("esa-guide");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-[#FAF7F2]">
      {/* ---------------------------------------------------- */}
      {/* 1. MOBILE BLOGS HERO SECTION (sm:hidden / < 640px)   */}
      {/* ---------------------------------------------------- */}
      <div className="sm:hidden relative w-full aspect-[390/780] min-h-[620px] max-h-[760px] overflow-hidden">
        <BreakpointImage
          media="(max-width: 639px)"
          quality={90}
          src="/blogs/blog_hero-section-mobile.webp"
          alt="Your Guide to Emotional Support Animals"
          fill
          className="object-cover object-bottom pointer-events-none"
          sizes="(max-width: 639px) 100vw, 1px"
        />

        {/* Content Container at Top */}
        <div className="absolute inset-x-0 top-0 px-4 pt-6 text-center flex flex-col items-center z-10">
          {/* Frame 1000011902: Headline & Subtitle */}
          <div className="flex flex-col items-center gap-3 max-w-[340px]">
            <h1 className="font-heading text-[28px] leading-[34px] font-bold tracking-[-0.0002em] text-[#2E5A66]">
              Your Guide to
              <br />
              Emotional Support
              <br />
              Animals
            </h1>

            <p className="font-sans font-semibold text-[13px] leading-[22px] text-[#5F6B6F] max-w-[300px]">
              Connect ESA letters, emotional well-being, housing rights, and life with an Emotional Support Animal.
            </p>
          </div>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="w-full max-w-[340px] h-[50px] bg-[#FAF7F2] rounded-[30px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex items-center justify-between pl-4 pr-1.5 py-1 mt-5"
          >
            <div className="flex items-center flex-1 min-w-0 gap-2.5">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 text-black/60"
                aria-hidden="true"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="rgba(0, 0, 0, 0.57)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 20L16 16"
                  stroke="rgba(0, 0, 0, 0.57)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search anything...."
                className="w-full bg-transparent border-none outline-none font-sans font-semibold text-[15px] text-[#2E5A66] placeholder:text-black/60"
              />
            </div>

            <button
              type="submit"
              aria-label="Filter or Search"
              className="w-[42px] h-[42px] rounded-full shrink-0 flex items-center justify-center text-white shadow-xs hover:opacity-95 transition-all"
              style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M21 7H17" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M11 7H3" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <circle cx="14" cy="7" r="3" stroke="white" strokeWidth="2" />
                <path d="M21 17H13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M7 17H3" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <circle cx="10" cy="17" r="3" stroke="white" strokeWidth="2" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. TABLET BLOGS HERO SECTION (sm: to lg: / 640-1023px)*/}
      {/* ---------------------------------------------------- */}
      <div className="hidden sm:flex lg:hidden relative w-full aspect-[834/1100] min-h-[720px] max-h-[920px] overflow-hidden">
        <BreakpointImage
          media="(min-width: 640px) and (max-width: 1023px)"
          quality={90}
          src="/blogs/blog_hero-section-tablet.webp"
          alt="Your Guide to Emotional Support Animals"
          fill
          className="object-cover object-bottom pointer-events-none"
          sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
        />

        {/* Content Container at Top */}
        <div className="absolute inset-x-0 top-0 px-6 pt-10 text-center flex flex-col items-center z-10 max-w-[620px] mx-auto">
          {/* Headline & Subtitle */}
          <div className="flex flex-col items-center gap-4 max-w-xl mx-auto">
            <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-[-0.0002em] leading-tight text-[#2E5A66]">
              Your Guide to
              <br />
              Emotional Support
              <br />
              Animals
            </h1>

            <p className="font-sans font-semibold text-sm sm:text-base leading-relaxed text-[#5F6B6F] max-w-md mx-auto">
              Connect ESA letters, emotional well-being, housing rights, and life with an Emotional Support Animal.
            </p>
          </div>

          {/* Search Bar on Tablet */}
          <form
            onSubmit={handleSearch}
            className="w-full max-w-[422px] h-[54px] bg-[#FAF7F2] rounded-[30px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex items-center justify-between pl-5 pr-1.5 py-1 mt-6"
          >
            <div className="flex items-center flex-1 min-w-0 gap-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 text-black/60"
                aria-hidden="true"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="rgba(0, 0, 0, 0.57)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 20L16 16"
                  stroke="rgba(0, 0, 0, 0.57)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search anything...."
                className="w-full bg-transparent border-none outline-none font-sans font-semibold text-[17px] text-[#2E5A66] placeholder:text-black/60"
              />
            </div>

            <button
              type="submit"
              aria-label="Filter or Search"
              className="w-[46px] h-[46px] rounded-full shrink-0 flex items-center justify-center text-white shadow-xs hover:opacity-95 transition-all"
              style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M21 7H17" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M11 7H3" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <circle cx="14" cy="7" r="3" stroke="white" strokeWidth="2" />
                <path d="M21 17H13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M7 17H3" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <circle cx="10" cy="17" r="3" stroke="white" strokeWidth="2" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. DESKTOP BLOGS HERO SECTION (lg: / 1024px and up)   */}
      {/* ---------------------------------------------------- */}
      <div className="hidden lg:block relative w-full aspect-[1441/744] min-h-[580px] xl:min-h-0">
        <BreakpointImage
          media="(min-width: 1024px)"
          quality={90}
          src="/blogs/blog-hero_section.webp"
          alt="Your Guide to Emotional Support Animals"
          fill
          className="object-cover lg:object-[82%_center] xl:object-center pointer-events-none"
          sizes="(min-width: 1024px) 100vw, 1px"
        />

        {/* Content Container: Frame 1261153864 */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="w-full max-w-[1440px] mx-auto px-8 lg:px-[84px]">
            <div className="w-full max-w-[519px] flex flex-col items-start gap-[32px]">
              {/* Frame 1000011884 / Frame 1000011902 */}
              <div className="flex flex-col items-start gap-[24px] w-full max-w-[512px]">
                {/* Heading: Your Guide to Emotional Support Animals */}
                <h1 className="font-heading text-[40px] lg:text-[46px] xl:text-[56px] font-bold text-[#2E5A66] leading-[48px] lg:leading-[54px] xl:leading-[64px] tracking-[-0.0002em]">
                  Your Guide to
                  <br />
                  Emotional Support
                  <br />
                  Animals
                </h1>

                {/* Subtitle: Connect ESA letters, emotional well-being... */}
                <p className="font-sans font-semibold text-[16px] xl:text-[18px] leading-[26px] xl:leading-[30px] text-[#5F6B6F] max-w-[492px]">
                  Connect ESA letters, emotional well-being, housing rights, and life with an Emotional Support Animal.
                </p>
              </div>

              {/* Search Bar 2 */}
              <form
                onSubmit={handleSearch}
                className="w-full max-w-[422px] h-[54px] bg-[#FAF7F2] rounded-[30px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex items-center justify-between pl-5 pr-1.5 py-1"
              >
                <div className="flex items-center flex-1 min-w-0 gap-3">
                  {/* Iconsax/Linear/searchnormal1 */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 text-black/60"
                    aria-hidden="true"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="7"
                      stroke="rgba(0, 0, 0, 0.57)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 20L16 16"
                      stroke="rgba(0, 0, 0, 0.57)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search anything...."
                    className="w-full bg-transparent border-none outline-none font-sans font-semibold text-[17px] xl:text-[18px] leading-[30px] text-[#2E5A66] placeholder:text-black/60"
                  />
                </div>

                {/* Group 3: Ellipse 1 + setting4 */}
                <button
                  type="submit"
                  aria-label="Filter or Search"
                  className="w-[46px] h-[46px] rounded-full shrink-0 flex items-center justify-center text-white shadow-xs hover:opacity-95 transition-all group cursor-pointer"
                  style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="group-hover:scale-105 transition-transform"
                  >
                    <path d="M21 7H17" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M11 7H3" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="14" cy="7" r="3" stroke="white" strokeWidth="2" />
                    <path d="M21 17H13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M7 17H3" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="10" cy="17" r="3" stroke="white" strokeWidth="2" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
