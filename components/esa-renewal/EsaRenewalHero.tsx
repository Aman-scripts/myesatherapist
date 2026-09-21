"use client";

import React from "react";
import Image from "next/image";
import { ReviewBadges } from "@/components/common/ReviewBadges";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

export function EsaRenewalHero() {
  return (
    <section className="relative w-full bg-[#FAF7F2] overflow-hidden grid lg:flex lg:items-center lg:min-h-[560px] xl:min-h-[660px]">
      <div aria-hidden className="lg:hidden col-start-1 row-start-1 aspect-[941/1672]" />
      {/* 1. Full Hero Background Image (Woman + Golden Retriever on Right, Soft Ambient Blur on Left) */}
      <div className="absolute inset-x-0 bottom-0 aspect-[941/1672] lg:inset-0 lg:aspect-auto lg:h-full pointer-events-none z-0">
        <Image
          src="/esa-renewal/esa-renwal-herosection_mobile.png"
          alt="Renew Your ESA Letter Online with Licensed Professional"
          fill
          priority
          className="sm:hidden object-cover object-bottom"
          sizes="(max-width: 639px) 100vw, 1px"
        />
        <Image
          src="/esa-renewal/esa-renwal-herosection_tablet.png"
          alt="Renew Your ESA Letter Online with Licensed Professional"
          fill
          priority
          className="hidden sm:block lg:hidden object-cover object-bottom"
          sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
        />
        <Image
          src="/esa-renewal/esa-renewal-herosection.png"
          alt="Renew Your ESA Letter Online with Licensed Professional"
          fill
          priority
          quality={100}
          className="hidden lg:block object-cover object-center"
          sizes="(min-width: 1024px) 100vw, 1px"
        />
      </div>

      {/* 2. Hero Content Container (Aligned to the Left half) */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-20 py-10 sm:py-14 lg:py-12 xl:py-16 col-start-1 row-start-1 pb-[80vw] sm:pb-[80vw] lg:pb-12 xl:pb-16">
        <div className="max-w-[626px] lg:max-w-[480px] xl:max-w-[626px] space-y-6 sm:space-y-8 lg:space-y-5 xl:space-y-8 mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start">
          {/* Mobile / tablet stat pills */}
          <div className="lg:hidden flex items-center justify-center gap-2 sm:gap-3 w-full max-w-[360px] sm:max-w-[513px]">
            {[["31,488+", "ESA Evaluations"], ["5+", "Years Serving"], ["4.9", "Verified Reviews"]].map(([v, l]) => (
              <div key={l} className="flex-1 rounded-[30px] bg-[#FAF7F2] border border-white/80 shadow-[0px_2px_4px_rgba(0,0,0,0.12)] py-1.5 sm:py-2.5 px-1 flex flex-col items-center">
                <span className="font-heading font-bold text-[15px] sm:text-[22px] leading-tight text-transparent bg-clip-text" style={{ backgroundImage: TEAL_GRADIENT }}>{v}</span>
                <span className="font-sans font-semibold text-[9px] sm:text-[12px] text-[#949494] whitespace-nowrap">{l}</span>
              </div>
            ))}
          </div>

          {/* 3 Metric Pills */}
          <div className="hidden lg:flex flex-wrap items-center gap-2.5 sm:gap-3.5">
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
          <div className="hidden lg:block"><ReviewBadges /></div>
        </div>
      </div>
    </section>
  );
}
