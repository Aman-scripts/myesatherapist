"use client";

import React from "react";
import Image from "next/image";
import { WaveImage } from "@/components/esa-online/EsaOnlineShared";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

interface ProFeature {
  title: string;
  subtitle: string;
}

const FEATURES: ProFeature[] = [
  {
    title: "State-Licensed Professionals",
    subtitle: "All evaluations are conducted by professionals licensed in your state.",
  },
  {
    title: "Independent Determinations",
    subtitle: "Renewal decisions are made through unbiased professional review.",
  },
];

export function EsaRenewalLicensedPros() {
  return (
    <section className="w-full bg-white relative overflow-hidden lg:min-h-[48vw] xl:min-h-0">
      {/* Illustration: map + doctors artwork (with curve and heart badge built in), full section height, flush right (lg and up) */}
      <div className="hidden lg:block absolute inset-y-0 right-0 aspect-[2291/2205]">
        <Image
          src="/esa-renewal/esa-renewal-all50states.png"
          alt="State licensed mental health professionals map across US"
          fill
          priority
          className="object-cover object-right"
          sizes="(min-width: 1280px) 780px, 640px"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1448px] px-4 sm:px-8 lg:pl-[6vw] xl:pl-[64px] xl:pr-0 pb-16 sm:pb-20 lg:py-[4.5vw] xl:py-[65px]">
        <WaveImage
          alt="State licensed mental health professionals map across US"
          mobile={{ src: "/esa-renewal/esa-renwal_licensedprofessional_mobile.png", w: 390, h: 512, crop: { x: 0, y: 109, w: 390, h: 402 } }}
          tablet={{ src: "/esa-renewal/esa-renwal_licensedprofessional_tablet.png", w: 834, h: 1050, crop: { x: 0, y: 209, w: 834, h: 840 } }}
        />
        {/* Left Column: Heading + Text + 2 Cards (Frame 1261153773) */}
        <div className="w-full max-w-[626px] lg:max-w-[39vw] xl:max-w-[590px] flex flex-col gap-10 lg:gap-[2.8vw] xl:gap-14">
          {/* Header Text (Frame 1000011447) */}
          <div className="flex flex-col gap-5 lg:gap-[1.9vw] xl:gap-7 text-center lg:text-left">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.8vw] xl:text-[44px] font-bold text-[#2E5A66] leading-[1.2] lg:leading-[3.5vw] xl:leading-[54px] tracking-[-0.00015em] max-w-[541px] mx-auto lg:mx-0">
              Licensed Professionals Across All 50 States
            </h2>
            <p className="font-sans text-base sm:text-[18px] lg:text-[1.2vw] xl:text-[18px] text-[#5F6B6F] font-semibold leading-[1.67] xl:max-w-[560px]">
              Each ESA letter renewal on our platform is completed by an independent, licensed mental health professional authorized to practice in your state. Providers evaluate DSM-recognized mental health conditions such as anxiety, depression, PTSD, and similar emotional health concerns when reviewing renewal requests. All determinations are made independently based on professional judgment and applicable clinical guidelines.
            </p>
          </div>

          {/* 2 Feature Cards (Frame 1261153772) */}
          <div className="flex flex-col gap-5 lg:gap-[2.2vw] xl:gap-8 xl:max-w-[590px]">
            {FEATURES.map((feat, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] rounded-[20px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] overflow-hidden flex items-stretch"
              >
                {/* Left 13px Teal Gradient Stripe (Frame 13) */}
                <div
                  className="w-[13px] shrink-0"
                  style={{ backgroundImage: TEAL_GRADIENT }}
                />

                {/* Card Content Row */}
                <div className="flex flex-1 items-center gap-4 sm:gap-6 lg:gap-[1.6vw] xl:gap-6 py-5 lg:py-[1vw] xl:py-[12px] pl-4 sm:pl-6 pr-4">
                  {/* Circle Icon Badge (Frame 1000011444) */}
                  <div className="w-[60px] h-[60px] sm:w-[74.56px] sm:h-[74.56px] lg:w-[5vw] lg:h-[5vw] xl:w-[74.56px] xl:h-[74.56px] rounded-full bg-white shadow-[0px_1.89px_3.78px_rgba(0,0,0,0.25)] flex items-center justify-center shrink-0">
                    <Image
                      src="/esa-renewal/esa-renewal-whyconsiderrenew-allthreecards-icon.svg"
                      alt={feat.title}
                      width={32}
                      height={32}
                      className="object-contain lg:w-6 lg:h-6 xl:w-8 xl:h-8"
                    />
                  </div>

                  {/* Text (Frame 14) */}
                  <div className="flex flex-1 flex-col gap-1.5">
                    <h3 className="font-heading font-bold text-lg sm:text-[20px] lg:text-[1.5vw] xl:text-[20px] text-[#2E5A66] leading-tight xl:leading-7">
                      {feat.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-[14px] lg:text-[1.1vw] xl:text-[14px] text-[#5F6B6F] font-semibold leading-[1.6] sm:leading-[26px] lg:leading-[1.6] xl:leading-[26px]">
                      {feat.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
