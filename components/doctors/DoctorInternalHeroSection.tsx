"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DoctorProfile } from "@/data/doctorsData";
import { ReviewBadges } from "@/components/common/ReviewBadges";

interface DoctorInternalHeroSectionProps {
  doctor: DoctorProfile;
}

export function DoctorInternalHeroSection({ doctor }: DoctorInternalHeroSectionProps) {
  const years = doctor.stats?.years || "13+";
  const states = doctor.stats?.states || "15+";
  const focusAreas = doctor.stats?.focusAreas || "7";

  const mobileSrc = doctor.avatarMobile || doctor.avatar;
  const tabletSrc = doctor.avatarTablet || doctor.avatar;
  const desktopSrc = doctor.avatar;

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF7F2]">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none -z-0">
        <Image
          quality={90}
          src="/doctors/doctor_internal.webp"
          alt="Clinical Office Background"
          fill
          priority
          className="object-cover object-[75%_center] lg:object-right-top opacity-75 lg:opacity-95"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/90 to-transparent lg:via-[#FAF7F2]/50 lg:to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── DESKTOP (lg+): side-by-side layout ─── */}
        <div className="hidden lg:flex items-end justify-between gap-10 pt-16 pb-0">
          {/* Left content */}
          <div className="max-w-[626px] flex flex-col items-start gap-6 shrink-0 pb-14">
            {/* Stat Pills */}
            <div className="flex flex-wrap items-center gap-3">
              {[
                { value: years, label: "Years" },
                { value: states, label: "States" },
                { value: focusAreas, label: "Focus Areas" },
              ].map((pill) => (
                <div key={pill.label} className="w-[163px] h-[53px] rounded-[30px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex flex-col justify-center items-center text-center shrink-0">
                  <span className="font-heading font-bold text-[24px] leading-tight bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent">
                    {pill.value}
                  </span>
                  <span className="font-sans font-semibold text-[12px] leading-tight text-[#949494]">
                    {pill.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Name + LinkedIn */}
            <h1 className="font-heading font-bold text-5xl lg:text-[56px] text-[#2E5A66] leading-[1.14] tracking-[-0.0002em]">
              {doctor.name}
              {doctor.linkedin && (
                <a
                  href={doctor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${doctor.name} on LinkedIn`}
                  className="inline-flex items-center justify-center ml-3.5 w-11 h-11 rounded-full shadow-[0px_2px_4px_rgba(0,0,0,0.15)] text-[#FAF7F2] hover:opacity-90 hover:scale-105 transition-all cursor-pointer align-middle relative -top-2 shrink-0"
                  style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                >
                  <svg className="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24">
                    <circle cx="4.98" cy="4.98" r="2.4" />
                    <rect x="2.8" y="9.5" width="4.4" height="12.5" rx="0.5" />
                    <path d="M10.5 9.5h4.2v1.8c.6-1.1 2-2.1 4.1-2.1 4.4 0 5.2 2.9 5.2 6.6v6.2h-4.4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.6h-4.4V9.5z" />
                  </svg>
                </a>
              )}
            </h1>

            <p className="font-sans font-semibold text-lg lg:text-[18px] text-[#5F6B6F] leading-[30px] max-w-[626px]">
              {doctor.heroBio || doctor.bio}
            </p>

            {/* CTA */}
            <div className="flex items-center pt-1">
              <Link
                href={doctor.ctaSection?.buttonHref || "/pricing/"}
                className="group inline-flex items-center justify-between h-[48px] pl-7 pr-1.5 rounded-[30px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] text-white font-sans font-semibold text-[16px] hover:opacity-95 transition-all min-w-[267px]"
                style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
              >
                <span>Schedule Consultation</span>
                <span className="w-[42px] h-[42px] rounded-full bg-[#FAF7F2] shadow-[0px_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0 ml-3 transition-transform group-hover:scale-105">
                  <Image quality={90} src="/common/send-icon.svg" alt="" width={16} height={16} className="w-4 h-4 object-contain" />
                </span>
              </Link>
            </div>

            <ReviewBadges className="pt-2" />
          </div>

          {/* Right: Doctor portrait */}
          <div className="shrink-0">
            <div className="relative w-[460px] xl:w-[520px] h-[540px] xl:h-[600px] flex items-end justify-center">
              <Image
                quality={90}
                src={desktopSrc}
                alt={doctor.name}
                fill
                priority
                className="object-contain object-bottom select-none pointer-events-none drop-shadow-[0_12px_24px_rgba(26,61,79,0.12)]"
                sizes="(min-width: 1024px) 520px, 1px"
              />
            </div>
          </div>
        </div>

        {/* ─── TABLET + MOBILE (< lg): stacked layout ─── */}
        <div className="lg:hidden flex flex-col items-center text-center pt-8 sm:pt-10 md:pt-12 pb-0">
          {/* Stat Pills */}
          <div className="hidden sm:flex flex-wrap items-center gap-2.5 sm:gap-3 mb-5 sm:mb-6">
            {[
              { value: years, label: "Years" },
              { value: states, label: "States" },
              { value: focusAreas, label: "Focus Areas" },
            ].map((pill) => (
              <div key={pill.label} className="w-[125px] min-[420px]:w-[140px] sm:w-[163px] h-[53px] rounded-[30px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex flex-col justify-center items-center text-center shrink-0">
                <span className="font-heading font-bold text-[22px] sm:text-[24px] leading-tight bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent">
                  {pill.value}
                </span>
                <span className="font-sans font-semibold text-[11px] sm:text-[12px] leading-tight text-[#949494]">
                  {pill.label}
                </span>
              </div>
            ))}
          </div>

          {/* Name + LinkedIn */}
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#2E5A66] leading-[1.14] tracking-[-0.0002em] mb-5 sm:mb-6">
            {doctor.name}
            {doctor.linkedin && (
              <a
                href={doctor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${doctor.name} on LinkedIn`}
                className="inline-flex items-center justify-center ml-2.5 sm:ml-3.5 w-9 h-9 sm:w-10 sm:h-10 rounded-full shadow-[0px_2px_4px_rgba(0,0,0,0.15)] text-[#FAF7F2] hover:opacity-90 hover:scale-105 transition-all cursor-pointer align-middle relative -top-1 sm:-top-1.5 shrink-0"
                style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                  <circle cx="4.98" cy="4.98" r="2.4" />
                  <rect x="2.8" y="9.5" width="4.4" height="12.5" rx="0.5" />
                  <path d="M10.5 9.5h4.2v1.8c.6-1.1 2-2.1 4.1-2.1 4.4 0 5.2 2.9 5.2 6.6v6.2h-4.4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.6h-4.4V9.5z" />
                </svg>
              </a>
            )}
          </h1>

          {/* Bio */}
          <p className="font-sans font-semibold text-base sm:text-lg text-[#5F6B6F] leading-[28px] sm:leading-[30px] max-w-[626px] mb-5 sm:mb-6">
            {doctor.heroBio || doctor.bio}
          </p>

          {/* CTA */}
          <div className="flex items-center mb-5 sm:mb-6">
            <Link
              href={doctor.ctaSection?.buttonHref || "/pricing/"}
              className="group inline-flex items-center justify-between h-[48px] pl-6 sm:pl-7 pr-1.5 rounded-[30px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] text-white font-sans font-semibold text-[15px] sm:text-[16px] hover:opacity-95 transition-all min-w-[240px] sm:min-w-[267px]"
              style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
            >
              <span>Schedule Consultation</span>
              <span className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] rounded-full bg-[#FAF7F2] shadow-[0px_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0 ml-3 transition-transform group-hover:scale-105">
                <Image quality={90} src="/common/send-icon.svg" alt="" width={16} height={16} className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain" />
              </span>
            </Link>
          </div>

          {/* Doctor Portrait — full-width, natural height */}
          <div className="relative w-full flex justify-center items-end">
            <div className="relative w-[280px] sm:w-[360px] md:w-[420px] aspect-square">
              {/* Mobile */}
              <Image
                quality={90}
                src={mobileSrc}
                alt={doctor.name}
                fill
                priority
                className="object-contain object-bottom select-none pointer-events-none drop-shadow-[0_12px_24px_rgba(26,61,79,0.12)] sm:hidden"
                sizes="280px"
              />
              {/* Tablet (sm to lg) */}
              <Image
                quality={90}
                src={tabletSrc}
                alt={doctor.name}
                fill
                className="object-contain object-bottom select-none pointer-events-none drop-shadow-[0_12px_24px_rgba(26,61,79,0.12)] hidden sm:block lg:hidden"
                sizes="420px"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
