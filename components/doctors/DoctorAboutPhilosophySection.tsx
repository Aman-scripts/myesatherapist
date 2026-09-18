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

        {/*
         * One row — mirrors BlogsFeaturedArticle exactly:
         *   LEFT  (z-0, no overflow): Philosophy card  ← sits where the image was
         *   RIGHT (z-10, -ml-16):    About card        ← overlaps from the right
         */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-[380px] lg:min-h-[463px]">

          {/* ── LEFT: About Doctor card ── */}
          <div className="w-full lg:w-[55%] xl:w-[628px] min-h-[340px] sm:min-h-[420px] lg:min-h-[463px] bg-white rounded-[20px] lg:rounded-[24px] p-6 sm:p-8 lg:p-10 xl:p-10 pr-6 sm:pr-8 lg:pr-24 xl:pr-28 shadow-[0px_8px_30px_rgba(26,61,79,0.08)] z-0 flex flex-col justify-center space-y-4 sm:space-y-5 shrink-0">

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

          {/* ── RIGHT: My Patient Care Philosophy card — overlaps left card ── */}
          <div className="w-full lg:w-[53%] xl:w-[701px] min-h-[340px] sm:min-h-[372px] bg-white rounded-[20px] lg:rounded-[28px] p-6 sm:p-8 lg:p-10 xl:p-12 shadow-[0px_8px_30px_rgba(26,61,79,0.08)] lg:-ml-16 xl:-ml-[49px] relative z-10 flex flex-col justify-center space-y-4 sm:space-y-5 my-auto mt-4 lg:mt-auto">

            <div className="space-y-3 sm:space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[44px] font-bold text-[#2E5A66] leading-tight lg:leading-[54px] tracking-[-0.00015em]">
                {philosophyHeading}
              </h2>
              <div className="space-y-3">
                {philosophyParagraphs.map((para, idx) => (
                  <p
                    key={idx}
                    className="font-sans font-semibold text-[15px] sm:text-[18px] text-[#5F6B6F] leading-[24px] sm:leading-[30px] max-w-[541px]"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
