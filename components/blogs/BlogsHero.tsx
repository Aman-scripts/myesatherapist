import React from "react";
import { BreakpointImage } from "@/components/common/BreakpointImage";

export function BlogsHero() {
  return (
    <section className="relative w-full bg-[#FAF7F2]">
      {/* ---------------------------------------------------- */}
      {/* 1. MOBILE BLOGS HERO SECTION (sm:hidden / < 640px)   */}
      {/* Uses /blog_hero-section-mobile.png                   */}
      {/* ---------------------------------------------------- */}
      <div className="sm:hidden relative w-full aspect-[390/780] min-h-[600px] max-h-[760px] overflow-hidden">
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
        <div className="absolute inset-x-0 top-0 px-3 pt-6 text-center flex flex-col items-center z-10">

          {/* Headline */}
          <h1 className="font-heading text-[24px] leading-[1.2] font-bold tracking-[-0.011em] max-w-xs mx-auto text-[#2E5A66]">
            Your Guide to
            <br />
            Emotional Support Animals
          </h1>

          {/* Subtitle */}
          <p className="text-[12.5px] leading-relaxed text-[#5F6B6F] font-semibold max-w-[290px] mx-auto mt-2.5 font-sans">
            Connect ESA letters, emotional well-being, housing rights, and life with an Emotional Support Animal.
          </p>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. TABLET BLOGS HERO SECTION (sm: to lg: / 640-1023px)*/}
      {/* Uses /blog_hero-section-tablet.png                   */}
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
        <div className="absolute inset-x-0 top-0 px-6 pt-10 text-center flex flex-col items-center z-10 space-y-4 max-w-[620px] mx-auto">

          {/* Headline */}
          <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-[-0.011em] mt-2 leading-tight max-w-xl mx-auto text-[#2E5A66]">
            Your Guide to
            <br />
            Emotional Support Animals
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base leading-relaxed text-[#5F6B6F] font-semibold max-w-md mx-auto font-sans">
            Connect ESA letters, emotional well-being, housing rights, and life with an Emotional Support Animal.
          </p>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. DESKTOP BLOGS HERO SECTION (lg: / 1024px and up)   */}
      {/* Uses /blog-hero_section.png                          */}
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

        {/* Content Container */}
        <div className="absolute inset-0 z-10">
          <div className="absolute left-[4%] xl:left-[5.69%] top-[6%] xl:top-[12.37%] w-[88%] sm:w-[60%] lg:w-[48%] xl:w-[47.05%] max-w-[640px]">

            {/* Headline */}
            <h1 className="font-heading text-[32px] sm:text-[40px] lg:text-[38px] xl:text-[56px] font-bold tracking-[-0.015em] leading-[1.15] lg:leading-[46px] xl:leading-[64px] mt-4 xl:mt-6 text-[#2E5A66]">
              Your Guide to Emotional
              <br />
              Support Animals
            </h1>

            {/* Subheading */}
            <p className="font-sans font-semibold text-[15px] sm:text-[18px] lg:text-[18px] xl:text-[18px] leading-[24px] sm:leading-[30px] lg:leading-[30px] xl:leading-[30px] text-[#5F6B6F] max-w-[480px] xl:max-w-[540px] mt-3 xl:mt-4">
              Connect ESA letters, emotional well-being, housing rights, and life with an Emotional Support Animal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
