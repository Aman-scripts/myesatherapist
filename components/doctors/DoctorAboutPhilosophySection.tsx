"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DoctorProfile } from "@/data/doctorsData";

interface DoctorAboutPhilosophySectionProps {
  doctor: DoctorProfile;
  className?: string;
  id?: string;
  ctaHref?: string;
}

export function DoctorAboutPhilosophySection({
  doctor,
  className = "",
  id = "about-philosophy",
  ctaHref = "/pricing/",
}: DoctorAboutPhilosophySectionProps) {
  const aboutHeading = doctor.aboutSection?.heading || `About ${doctor.name}`;
  const aboutParagraphs =
    doctor.aboutSection?.paragraphs ||
    doctor.aboutParagraphs || [doctor.bio];

  const philosophyHeading =
    doctor.philosophySection?.heading || "My Patient Care Philosophy";
  const philosophyParagraphs = doctor.philosophySection?.paragraphs || [];

  return (
    <section
      id={id}
      className={`w-full bg-[#FAF7F2] ${className || "py-8 sm:py-12 lg:py-16"}`}
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Two simple, equal-width, equal-height cards side by side — no overlap */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* ── About Doctor card ── */}
          <div className="bg-white rounded-[20px] lg:rounded-[24px] p-6 sm:p-8 lg:p-10 shadow-[0px_8px_30px_rgba(26,61,79,0.08)] flex flex-col justify-start space-y-4 sm:space-y-5">

            <div className="space-y-3 sm:space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[44px] font-bold text-[#2E5A66] leading-tight lg:leading-[54px] tracking-[-0.00015em]">
                {aboutHeading}
              </h2>
              <div className="space-y-3">
                {aboutParagraphs.map((para, idx) => (
                  <p
                    key={idx}
                    className="font-sans font-semibold text-[15px] sm:text-[18px] text-[#5F6B6F] leading-[24px] sm:leading-[30px]"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-1">
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-between pl-6 pr-1.5 w-[171px] h-[48px] rounded-[30px] text-white font-sans font-semibold text-base shadow-[0px_2px_4px_rgba(0,0,0,0.15)] hover:opacity-95 transition-all group"
                style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
              >
                <span>Get Started</span>
                <span className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#FAF7F2] shadow-[0px_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Image
                    src="/common/send-icon.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="w-[16px] h-[16px] object-contain"
                  />
                </span>
              </Link>
            </div>
          </div>

          {/* ── My Philosophy card ── */}
          <div className="bg-white rounded-[20px] lg:rounded-[24px] p-6 sm:p-8 lg:p-10 shadow-[0px_8px_30px_rgba(26,61,79,0.08)] flex flex-col justify-between space-y-4 sm:space-y-5">

            <div className="space-y-3 sm:space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[44px] font-bold text-[#2E5A66] leading-tight lg:leading-[54px] tracking-[-0.00015em]">
                {philosophyHeading}
              </h2>
              <div className="space-y-3">
                {philosophyParagraphs.map((para, idx) => (
                  <p
                    key={idx}
                    className="font-sans font-semibold text-[15px] sm:text-[18px] text-[#5F6B6F] leading-[24px] sm:leading-[30px]"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Decorative quote mark — visual balance only, no added copy */}
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 text-[#3E8D69] opacity-80 self-start"
              viewBox="0 0 42 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 18.2857C0 8.19048 6.72 0 17.28 0V7.61905C11.52 7.61905 8.64 11.4286 8.64 16.7619H17.28V32H0V18.2857ZM24.72 18.2857C24.72 8.19048 31.44 0 42 0V7.61905C36.24 7.61905 33.36 11.4286 33.36 16.7619H42V32H24.72V18.2857Z"
                fill="url(#philosophy_quote_gradient)"
              />
              <defs>
                <linearGradient
                  id="philosophy_quote_gradient"
                  x1="0"
                  y1="0"
                  x2="42"
                  y2="32"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3E8D69" />
                  <stop offset="1" stopColor="#24553F" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
