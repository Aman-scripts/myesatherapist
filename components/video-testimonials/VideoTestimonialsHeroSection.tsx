"use client";

import React from "react";
import Image from "next/image";
import { VideoTestimonialsTrustBar } from "./VideoTestimonialsTrustBar";

function RatingStarMark() {
  return (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white fill-current">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function TrustpilotRatingStars() {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="w-[24px] h-[24px] bg-[#00B67A] rounded-[2px] flex items-center justify-center shrink-0"
        >
          <RatingStarMark />
        </div>
      ))}
      {/* 5th Star: Half Green / Half Gray matching Figma Frame 1000011799 */}
      <div className="relative w-[24px] h-[24px] bg-[#CCCCCC] rounded-[2px] flex items-center justify-center shrink-0 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-[#00B67A]" />
        <div className="relative z-10 flex items-center justify-center">
          <RatingStarMark />
        </div>
      </div>
    </div>
  );
}

function ConsumerAffairsRatingStars() {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="w-[24px] h-[24px] bg-[#095691] rounded-[2px] flex items-center justify-center shrink-0"
        >
          <RatingStarMark />
        </div>
      ))}
      {/* 5th Star: Half Blue / Half Gray */}
      <div className="relative w-[24px] h-[24px] bg-[#CCCCCC] rounded-[2px] flex items-center justify-center shrink-0 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-[#095691]" />
        <div className="relative z-10 flex items-center justify-center">
          <RatingStarMark />
        </div>
      </div>
    </div>
  );
}

export function VideoTestimonialsHeroSection() {
  return (
    <section className="relative z-20 w-full bg-[#FAF7F2] overflow-visible">
      {/* ---------------------------------------------------- */}
      {/* 1. MOBILE HERO SECTION (< 640px)                     */}
      {/* ---------------------------------------------------- */}
      <div className="sm:hidden relative w-full aspect-[390/760] min-h-[650px]">
        <Image
          src="/video_testimonial/video_testimonial-herosection_mobile.png"
          alt="Real Stories, Real Impact - My ESA Therapist"
          fill
          priority
          className="object-cover object-bottom"
          sizes="(max-width: 639px) 100vw, 1px"
        />

        {/* Content Layer (Mobile) */}
        <div className="absolute inset-x-0 top-0 px-4 pt-6 text-center flex flex-col items-center z-10">
          {/* Stat Pills */}
          <div className="flex items-center justify-center gap-2 w-full max-w-[360px] mb-4">
            <div className="flex-1 h-[44px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] flex flex-col items-center justify-center py-1 px-1.5 border border-[#EAE5DC]/60">
              <span className="font-heading font-bold text-[18px] leading-[22px] bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent">
                50
              </span>
              <span className="font-sans font-semibold text-[10px] leading-[13px] text-[#949494]">
                USA States
              </span>
            </div>

            <div className="flex-1 h-[44px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] flex flex-col items-center justify-center py-1 px-1.5 border border-[#EAE5DC]/60">
              <span className="font-heading font-bold text-[16px] leading-[22px] bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent">
                HIPAA
              </span>
              <span className="font-sans font-semibold text-[10px] leading-[13px] text-[#949494]">
                Compliant
              </span>
            </div>

            <div className="flex-1 h-[44px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] flex flex-col items-center justify-center py-1 px-1.5 border border-[#EAE5DC]/60">
              <span className="font-heading font-bold text-[16px] leading-[22px] bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent">
                100%
              </span>
              <span className="font-sans font-semibold text-[10px] leading-[13px] text-[#949494]">
                Licensed Pros
              </span>
            </div>
          </div>

          <h1 className="font-heading text-[32px] leading-[38px] font-bold text-[#2E5A66] tracking-[-0.0002em] mb-2.5 max-w-[340px]">
            Real Stories, Real Impact
          </h1>

          <p className="font-sans font-semibold text-[14px] leading-[22px] text-[#5F6B6F] mb-4 max-w-[320px]">
            Hear directly from our clients about their journey with emotional support animal therapy and how we’ve helped them live better lives.
          </p>

          {/* Badges on mobile */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <div className="p-2.5 rounded-[16px] bg-white/75 backdrop-blur-[10px] border border-white/40 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] flex flex-col items-center gap-1 min-w-[145px]">
              <div className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-[#00B67A] fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span className="font-[family-name:var(--font-lato)] font-bold text-xs text-[#5F6B6F]">Trustpilot</span>
              </div>
              <TrustpilotRatingStars />
              <span className="font-[family-name:var(--font-lato)] text-[10px] text-[#5F6B6F]">Trustscore 4.4</span>
            </div>

            <div className="p-2.5 rounded-[16px] bg-white/75 backdrop-blur-[10px] border border-white/40 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] flex flex-col items-center gap-1 min-w-[155px]">
              <div className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-[#095691] fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span className="font-[family-name:var(--font-lato)] font-bold text-[11px] text-[#5F6B6F] whitespace-nowrap">ConsumerAffairs</span>
              </div>
              <ConsumerAffairsRatingStars />
              <span className="font-[family-name:var(--font-lato)] text-[10px] text-[#5F6B6F]">Reviews 4.4</span>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. TABLET HERO SECTION (640px - 1023px)              */}
      {/* ---------------------------------------------------- */}
      <div className="hidden sm:block lg:hidden relative w-full aspect-[1032/850] min-h-[640px]">
        <Image
          src="/video_testimonial/video_testimonial-herosection_tablet.png"
          alt="Real Stories, Real Impact - My ESA Therapist"
          fill
          priority
          className="object-cover object-bottom"
          sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
        />

        {/* Content Container Left on Tablet */}
        <div className="absolute left-6 md:left-10 top-8 md:top-12 max-w-[480px] z-10 flex flex-col items-start gap-4">
          <div className="flex items-center gap-2.5 w-full max-w-[440px]">
            <div className="flex-1 h-[48px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] flex flex-col items-center justify-center py-1 px-2 border border-[#EAE5DC]/60">
              <span className="font-heading font-bold text-[20px] leading-[24px] bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent">
                50
              </span>
              <span className="font-sans font-semibold text-[11px] leading-[14px] text-[#949494]">
                USA States
              </span>
            </div>

            <div className="flex-1 h-[48px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] flex flex-col items-center justify-center py-1 px-2 border border-[#EAE5DC]/60">
              <span className="font-heading font-bold text-[18px] leading-[24px] bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent">
                HIPAA
              </span>
              <span className="font-sans font-semibold text-[11px] leading-[14px] text-[#949494]">
                Compliant
              </span>
            </div>

            <div className="flex-1 h-[48px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] flex flex-col items-center justify-center py-1 px-2 border border-[#EAE5DC]/60">
              <span className="font-heading font-bold text-[18px] leading-[24px] bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent">
                100%
              </span>
              <span className="font-sans font-semibold text-[11px] leading-[14px] text-[#949494]">
                Licensed Pros
              </span>
            </div>
          </div>

          <h1 className="font-heading text-[38px] md:text-[44px] leading-[46px] md:leading-[52px] font-bold text-[#2E5A66] tracking-[-0.0002em] max-w-[460px]">
            Real Stories, Real Impact
          </h1>

          <p className="font-sans font-semibold text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] text-[#5F6B6F] max-w-[460px]">
            Hear directly from our clients about their journey with emotional support animal therapy and how we’ve helped them live better lives.
          </p>

          <div className="flex items-center gap-3 flex-wrap pt-1">
            <div className="w-[185px] h-[98px] bg-white/65 backdrop-blur-[11px] border border-white/30 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] rounded-[18px] p-2.5 flex flex-col items-center justify-center gap-1">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#00B67A] fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span className="font-[family-name:var(--font-lato)] text-sm text-[#5F6B6F]">Trustpilot</span>
              </div>
              <TrustpilotRatingStars />
              <span className="font-[family-name:var(--font-lato)] text-[11px] text-[#5F6B6F]">Trustscore 4.4</span>
            </div>

            <div className="w-[205px] h-[98px] bg-white/65 backdrop-blur-[11px] border border-white/30 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] rounded-[18px] p-2.5 flex flex-col items-center justify-center gap-1">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#095691] fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span className="font-[family-name:var(--font-lato)] text-xs text-[#5F6B6F] whitespace-nowrap">ConsumerAffair Reviews</span>
              </div>
              <ConsumerAffairsRatingStars />
              <span className="font-[family-name:var(--font-lato)] text-[11px] text-[#5F6B6F]">Reviews 4.4</span>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. DESKTOP HERO SECTION (1024px and up)              */}
      {/* ---------------------------------------------------- */}
      <div className="hidden lg:block relative w-full aspect-[1440/624] min-h-[624px]">
        {/* Full-bleed background artwork matching Screenshot 1 */}
        <Image
          src="/video_testimonial/video_testimonial-herosection.png"
          alt="Real Stories, Real Impact - My ESA Therapist"
          fill
          priority
          className="object-cover object-center"
          sizes="(min-width: 1024px) 100vw, 1px"
        />

        {/* Content Container Left-Aligned (Matches Figma Frame 1000011884 & Screenshot 1) */}
        <div className="absolute left-[5%] xl:left-[80px] top-[8%] xl:top-[57px] max-w-[579px] z-10 flex flex-col items-start gap-[24px]">
          {/* Stat Pills Row (Frame 1000011901) */}
          <div className="flex items-center gap-3 w-full max-w-[513px]">
            {/* Pill 1: 50 USA States */}
            <div className="w-[163px] h-[53px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] flex flex-col items-center justify-center py-1.5 px-3 border border-[#EAE5DC]/50">
              <span className="font-heading font-bold text-[24px] leading-[30px] bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent">
                50
              </span>
              <span className="font-sans font-semibold text-[12px] leading-[16px] text-[#949494]">
                USA States
              </span>
            </div>

            {/* Pill 2: HIPAA Compliant */}
            <div className="w-[163px] h-[53px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] flex flex-col items-center justify-center py-1.5 px-3 border border-[#EAE5DC]/50">
              <span className="font-heading font-bold text-[24px] leading-[30px] bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent">
                HIPAA
              </span>
              <span className="font-sans font-semibold text-[12px] leading-[16px] text-[#949494]">
                Compliant
              </span>
            </div>

            {/* Pill 3: 100% Licensed Pros */}
            <div className="w-[163px] h-[53px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] flex flex-col items-center justify-center py-1.5 px-3 border border-[#EAE5DC]/50">
              <span className="font-heading font-bold text-[24px] leading-[30px] bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent">
                100%
              </span>
              <span className="font-sans font-semibold text-[12px] leading-[16px] text-[#949494]">
                Licensed Pros
              </span>
            </div>
          </div>

          {/* Heading (Playfair Display 56px - Frame 1000011902) */}
          <h1 className="font-heading text-[44px] xl:text-[56px] leading-[50px] xl:leading-[64px] font-bold text-[#2E5A66] tracking-[-0.0002em] max-w-[624px]">
            Real Stories, Real Impact
          </h1>

          {/* Subtitle Description (Manrope 18px #5F6B6F) */}
          <p className="font-sans font-semibold text-[16px] xl:text-[18px] leading-[26px] xl:leading-[30px] text-[#5F6B6F] max-w-[579px]">
            Hear directly from our clients about their journey with emotional support animal therapy and how we’ve helped them live better lives.
          </p>

          {/* Review Glass Cards (Frame 1261153789) */}
          <div className="flex items-center gap-4 pt-1">
            {/* Trustpilot Card */}
            <div className="w-[201px] h-[105px] bg-white/55 border border-white/20 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] backdrop-blur-[11.7px] rounded-[20px] px-5 py-3.5 flex flex-col items-center justify-center gap-1.5">
              <div className="flex items-center gap-1.5">
                <svg className="w-[18px] h-[18px] text-[#00B67A] fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span className="font-[family-name:var(--font-lato)] text-[16px] text-[#5F6B6F] font-normal">
                  Trustpilot
                </span>
              </div>
              <TrustpilotRatingStars />
              <span className="font-[family-name:var(--font-lato)] text-[12px] text-[#5F6B6F]">
                Trustscore 4.4
              </span>
            </div>

            {/* ConsumerAffairs Reviews Card */}
            <div className="w-[221px] h-[105px] bg-white/55 border border-white/20 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] backdrop-blur-[11.7px] rounded-[20px] px-3.5 py-3.5 flex flex-col items-center justify-center gap-1.5">
              <div className="flex items-center gap-1.5">
                <svg className="w-[18px] h-[18px] text-[#095691] fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span className="font-[family-name:var(--font-lato)] text-[15px] text-[#5F6B6F] font-normal whitespace-nowrap">
                  ConsumerAffair Reviews
                </span>
              </div>
              <ConsumerAffairsRatingStars />
              <span className="font-[family-name:var(--font-lato)] text-[12px] text-[#5F6B6F]">
                Reviews 4.4
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* --------------------------------------------------------------------------------------------------- */}
      {/* 4. TRUST STATS BAR: EXACTLY 50% ON HERO SECTION BOTTOM & 50% ON AFTER HERO SECTION TOP               */}
      {/* --------------------------------------------------------------------------------------------------- */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-30 w-full max-w-[965px] px-4 pointer-events-auto">
        <VideoTestimonialsTrustBar />
      </div>
    </section>
  );
}
