"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DoctorProfile } from "@/data/doctorsData";

interface DoctorInternalHeroSectionProps {
  doctor: DoctorProfile;
}

export function DoctorInternalHeroSection({ doctor }: DoctorInternalHeroSectionProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF7F2] min-h-[520px] lg:min-h-[600px] flex items-center">
      {/* Background Image from public/doctors/doctor_internal.png */}
      <div className="absolute inset-0 pointer-events-none -z-0">
        <Image
          src="/doctors/doctor_internal.png"
          alt="Clinical Office Background"
          fill
          priority
          unoptimized
          className="object-cover object-[70%_center] lg:object-right-top opacity-70 lg:opacity-90 mix-blend-multiply lg:mix-blend-normal"
          sizes="100vw"
        />
        {/* Soft overlay gradient on mobile to ensure perfect text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/90 to-transparent lg:via-[#FAF7F2]/60 lg:to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-14 items-center">
          
          {/* LEFT CONTENT COLUMN (Frame 1000011884) */}
          <div className="w-full max-w-[626px] flex flex-col items-start gap-6 sm:gap-7">
            
            {/* Doctor Name H1 */}
            <div className="flex items-center gap-3">
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[50px] xl:text-[56px] text-[#2E5A66] leading-[1.14] tracking-[-0.0002em]">
                {doctor.name}
              </h1>

              {/* LinkedIn icon — mobile/tablet only, at the end of the name */}
              {doctor.linkedin && (
                <a
                  href={doctor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${doctor.name} on LinkedIn`}
                  className="lg:hidden w-8 h-8 rounded-full flex items-center justify-center shadow-[0px_2px_4px_rgba(0,0,0,0.15)] text-[#FAF7F2] hover:opacity-90 hover:scale-105 transition-all shrink-0 cursor-pointer"
                  style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <circle cx="4.98" cy="4.98" r="2.4" />
                    <rect x="2.8" y="9.5" width="4.4" height="12.5" rx="0.5" />
                    <path d="M10.5 9.5h4.2v1.8c.6-1.1 2-2.1 4.1-2.1 4.4 0 5.2 2.9 5.2 6.6v6.2h-4.4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.6h-4.4V9.5z" />
                  </svg>
                </a>
              )}
            </div>

            {/* Hero Bio Paragraph */}
            <p className="font-sans font-semibold text-base sm:text-lg lg:text-[18px] text-[#5F6B6F] leading-[26px] sm:leading-[30px] max-w-[626px]">
              {doctor.heroBio || doctor.bio}
            </p>

            {/* CTA Button Row (Frame 7) */}
            <div className="flex items-center gap-4 pt-1">
              {/* Get Started Button (Frame 1000011890) */}
              <Link
                href="/pricing/"
                className="group inline-flex items-center justify-between h-[48px] pl-6 sm:pl-7 pr-1.5 rounded-[30px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] text-white font-sans font-semibold text-[15px] sm:text-[16px] hover:opacity-95 transition-all min-w-[195px] sm:min-w-[220px]"
                style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
              >
                <span>Get Started</span>
                <span className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] rounded-full bg-[#FAF7F2] shadow-[0px_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0 ml-3 transition-transform group-hover:scale-105">
                  <Image
                    src="/common/send-icon.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain"
                  />
                </span>
              </Link>

              {/* LinkedIn Button */}
              {doctor.linkedin && (
                <a
                  href={doctor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${doctor.name} on LinkedIn`}
                  className="w-[48px] h-[48px] rounded-[30px] flex items-center justify-center shadow-[0px_2px_4px_rgba(0,0,0,0.15)] text-[#FAF7F2] hover:opacity-90 hover:scale-105 transition-all shrink-0 cursor-pointer"
                  style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <circle cx="4.98" cy="4.98" r="2.4" />
                    <rect x="2.8" y="9.5" width="4.4" height="12.5" rx="0.5" />
                    <path d="M10.5 9.5h4.2v1.8c.6-1.1 2-2.1 4.1-2.1 4.4 0 5.2 2.9 5.2 6.6v6.2h-4.4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.6h-4.4V9.5z" />
                  </svg>
                </a>
              )}
            </div>


          </div>

          {/* RIGHT COLUMN: Doctor Circular Image (leslie-k.-gamble-licsw-image 1) */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[426px] lg:h-[426px] rounded-full overflow-hidden border-[6px] sm:border-[8px] border-white shadow-[0px_8px_30px_rgba(26,61,79,0.16)] bg-white/40">
              <Image
                src={doctor.avatar}
                alt={doctor.name}
                fill
                priority
                unoptimized
                className="object-cover object-center"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 426px"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
