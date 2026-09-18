"use client";

import React from "react";
import Image from "next/image";

export function VideoTestimonialsHeroSection() {
  return (
    <section className="relative w-full bg-[#FAF7F2] pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Stats Pills, Heading, Subtitle & Review Badges */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 space-y-6 sm:space-y-7">
            
            {/* Top Stat Pills */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Pill 1: 50 USA States */}
              <div className="flex flex-col items-center justify-center bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] px-5 sm:px-7 py-2 min-w-[130px] sm:min-w-[150px] border border-black/5">
                <span className="font-heading font-bold text-xl sm:text-[24px] leading-tight bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent">
                  50
                </span>
                <span className="font-sans font-semibold text-[11px] sm:text-[12px] leading-tight text-[#949494]">
                  USA States
                </span>
              </div>

              {/* Pill 2: HIPAA Compliant */}
              <div className="flex flex-col items-center justify-center bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] px-5 sm:px-7 py-2 min-w-[130px] sm:min-w-[150px] border border-black/5">
                <span className="font-heading font-bold text-xl sm:text-[24px] leading-tight bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent">
                  HIPAA
                </span>
                <span className="font-sans font-semibold text-[11px] sm:text-[12px] leading-tight text-[#949494]">
                  Compliant
                </span>
              </div>

              {/* Pill 3: 100% Licensed Pros */}
              <div className="flex flex-col items-center justify-center bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] px-5 sm:px-7 py-2 min-w-[130px] sm:min-w-[150px] border border-black/5">
                <span className="font-heading font-bold text-xl sm:text-[24px] leading-tight bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent">
                  100%
                </span>
                <span className="font-sans font-semibold text-[11px] sm:text-[12px] leading-tight text-[#949494]">
                  Licensed Pros
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[56px] leading-[1.15] text-[#2E5A66] tracking-[-0.0002em] max-w-[624px]">
              Real Stories, Real Impact
            </h1>

            {/* Subtitle Description */}
            <p className="font-sans font-semibold text-base sm:text-lg lg:text-[18px] leading-[28px] sm:leading-[30px] text-[#5F6B6F] max-w-[579px]">
              Hear directly from our clients about their journey with emotional support animal therapy and how we’ve helped them live better lives.
            </p>

            {/* Review Cards (Trustpilot & ConsumerAffairs) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Trustpilot Card */}
              <div className="w-[195px] sm:w-[205px] h-[105px] bg-white/55 border border-white/40 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] backdrop-blur-[12px] rounded-[20px] p-3 flex flex-col items-center justify-center space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <svg className="w-5 h-5 text-[#00B67A] fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span className="font-sans font-medium text-[15px] text-[#5F6B6F]">Trustpilot</span>
                </div>
                {/* 5 Green Rating Star Boxes */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-[22px] h-[22px] bg-[#00B67A] rounded-[3px] flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    </div>
                  ))}
                </div>
                <span className="font-sans text-xs text-[#5F6B6F]">Trustscore 4.4</span>
              </div>

              {/* ConsumerAffairs Reviews Card */}
              <div className="w-[215px] sm:w-[225px] h-[105px] bg-white/55 border border-white/40 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] backdrop-blur-[12px] rounded-[20px] p-3 flex flex-col items-center justify-center space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <svg className="w-5 h-5 text-[#095691] fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span className="font-sans font-medium text-[14px] text-[#5F6B6F] whitespace-nowrap">
                    ConsumerAffair Reviews
                  </span>
                </div>
                {/* 5 Blue Rating Star Boxes */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-[22px] h-[22px] bg-[#095691] rounded-[3px] flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    </div>
                  ))}
                </div>
                <span className="font-sans text-xs text-[#5F6B6F]">Reviews 4.4</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Graphic */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="relative w-full max-w-[580px] lg:max-w-[620px] aspect-[1440/624] lg:aspect-auto lg:h-[500px]">
              <picture>
                <source media="(max-width: 640px)" srcSet="/video_testimonial/video_testimonial-herosection_mobile.png" />
                <source media="(max-width: 1024px)" srcSet="/video_testimonial/video_testimonial-herosection_tablet.png" />
                <img
                  src="/video_testimonial/video_testimonial-herosection.png"
                  alt="My ESA Therapist Happy Clients Testimonials"
                  className="w-full h-auto lg:h-full object-contain object-center lg:object-right"
                  loading="eager"
                />
              </picture>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
