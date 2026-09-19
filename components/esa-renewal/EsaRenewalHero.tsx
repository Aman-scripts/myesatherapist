"use client";

import React from "react";
import Image from "next/image";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

export function EsaRenewalHero() {
  return (
    <section className="relative w-full bg-[#FAF7F2] overflow-hidden min-h-[580px] sm:min-h-[620px] lg:min-h-[560px] xl:min-h-[660px] flex items-center">
      {/* 1. Full Hero Background Image (Woman + Golden Retriever on Right, Soft Ambient Blur on Left) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/esa-renewal/esa-renewal-herosection.png"
          alt="Renew Your ESA Letter Online with Licensed Professional"
          fill
          priority
          quality={100}
          className="object-cover object-[75%_center] sm:object-right md:object-center"
          sizes="100vw"
        />
        {/* Subtle gradient overlay for small mobile screens only so text is always crisp */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/95 via-[#FAF7F2]/80 to-transparent lg:hidden" />
      </div>

      {/* 2. Hero Content Container (Aligned to the Left half) */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-20 py-10 sm:py-14 lg:py-12 xl:py-16">
        <div className="max-w-[626px] lg:max-w-[480px] xl:max-w-[626px] space-y-6 sm:space-y-8 lg:space-y-5 xl:space-y-8">
          {/* 3 Metric Pills */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5">
            {/* 50 USA States */}
            <div className="bg-[#FAF7F2]/95 backdrop-blur-sm shadow-[0px_2px_4px_rgba(0,0,0,0.12)] border border-white/70 rounded-[30px] px-5 sm:px-6 lg:px-4 xl:px-6 py-2 sm:py-2.5 lg:py-1.5 xl:py-2.5 flex flex-col items-center justify-center min-w-[100px] sm:min-w-[115px]">
              <span className="font-heading font-bold text-xl sm:text-[24px] lg:text-[20px] xl:text-[24px] text-transparent bg-clip-text bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] leading-tight">
                50
              </span>
              <span className="font-sans text-[11px] sm:text-[12px] font-semibold text-[#949494] leading-tight mt-0.5">
                USA States
              </span>
            </div>

            {/* HIPAA Compliant */}
            <div className="bg-[#FAF7F2]/95 backdrop-blur-sm shadow-[0px_2px_4px_rgba(0,0,0,0.12)] border border-white/70 rounded-[30px] px-5 sm:px-6 lg:px-4 xl:px-6 py-2 sm:py-2.5 lg:py-1.5 xl:py-2.5 flex flex-col items-center justify-center min-w-[110px] sm:min-w-[125px]">
              <span className="font-heading font-bold text-xl sm:text-[24px] lg:text-[20px] xl:text-[24px] text-transparent bg-clip-text bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] leading-tight">
                HIPAA
              </span>
              <span className="font-sans text-[11px] sm:text-[12px] font-semibold text-[#949494] leading-tight mt-0.5">
                Compliant
              </span>
            </div>

            {/* 100% Licensed Pros */}
            <div className="bg-[#FAF7F2]/95 backdrop-blur-sm shadow-[0px_2px_4px_rgba(0,0,0,0.12)] border border-white/70 rounded-[30px] px-5 sm:px-6 lg:px-4 xl:px-6 py-2 sm:py-2.5 lg:py-1.5 xl:py-2.5 flex flex-col items-center justify-center min-w-[115px] sm:min-w-[130px]">
              <span className="font-heading font-bold text-xl sm:text-[24px] lg:text-[20px] xl:text-[24px] text-transparent bg-clip-text bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] leading-tight">
                100%
              </span>
              <span className="font-sans text-[11px] sm:text-[12px] font-semibold text-[#949494] leading-tight mt-0.5">
                Licensed Pros
              </span>
            </div>
          </div>

          {/* Heading & Subtext */}
          <div className="space-y-3.5 sm:space-y-4">
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[40px] xl:text-[56px] font-bold text-[#2E5A66] leading-[1.12] tracking-[-0.0002em]">
              Renew Your ESA Letter<br className="hidden sm:inline" /> Online
            </h1>
            <p className="font-sans text-sm sm:text-base lg:text-[14px] xl:text-[18px] text-[#5F6B6F] font-semibold leading-[1.65] max-w-[580px]">
              Connect with a state-licensed mental health professional to request an ESA letter renewal that reflects your current emotional and mental health–related needs.
            </p>
          </div>

          {/* CTA Button: "Start your Renewal Online" with Circular Compass Arrow */}
          <div className="pt-1">
            <a
              href="#pricing"
              className="group inline-flex items-center justify-between pl-7 pr-1.5 py-1.5 rounded-[30px] text-white font-semibold text-base shadow-[0px_2px_6px_rgba(0,0,0,0.2)] hover:opacity-95 transition-all gap-4"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <span className="font-sans font-semibold text-[15px] sm:text-[16px] lg:text-[14px] xl:text-[16px] text-white tracking-wide">
                Start your Renewal Online
              </span>
              <span className="w-[42px] h-[42px] rounded-full bg-[#FAF7F2] flex items-center justify-center shadow-[0px_3px_6px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform shrink-0">
                <Image
                  src="/common/send-icon.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="h-[22px] w-[22px] object-contain"
                />
              </span>
            </a>
          </div>

          {/* Frosted Glass Reviews (Trustpilot & ConsumerAffairs) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
            {/* Trustpilot Card */}
            <div className="bg-white/70 backdrop-blur-[12px] border border-white/60 rounded-[20px] px-4 sm:px-5 lg:px-3 xl:px-5 py-3 lg:py-2 xl:py-3 shadow-[0px_2px_6px_rgba(0,0,0,0.06)] flex flex-col items-center gap-1.5 min-w-[170px] sm:min-w-[190px] lg:min-w-[150px] xl:min-w-[190px]">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#00B67A] fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span className="font-sans font-normal text-sm sm:text-[16px] text-[#5F6B6F]">Trustpilot</span>
              </div>
              {/* 5 Green Star Squares */}
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div key={s} className="w-5 h-5 bg-[#00B67A] flex items-center justify-center rounded-[2px]">
                    <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                ))}
              </div>
              <span className="font-sans text-[12px] text-[#5F6B6F]">Trustscore 4.4</span>
            </div>

            {/* ConsumerAffairs Card */}
            <div className="bg-white/70 backdrop-blur-[12px] border border-white/60 rounded-[20px] px-4 sm:px-5 lg:px-3 xl:px-5 py-3 lg:py-2 xl:py-3 shadow-[0px_2px_6px_rgba(0,0,0,0.06)] flex flex-col items-center gap-1.5 min-w-[170px] sm:min-w-[190px] lg:min-w-[150px] xl:min-w-[190px]">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#095691] fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span className="font-sans font-normal text-xs sm:text-[15px] text-[#5F6B6F]">ConsumerAffair Reviews</span>
              </div>
              {/* 5 Blue Star Squares */}
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div key={s} className="w-5 h-5 bg-[#095691] flex items-center justify-center rounded-[2px]">
                    <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                ))}
              </div>
              <span className="font-sans text-[12px] text-[#5F6B6F]">Reviews 4.4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
