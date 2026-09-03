"use client";

import React from "react";
import Image from "next/image";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

export function CommunitySection() {
  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-[1251px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Title */}
        <h2 className="font-heading text-2xl sm:text-4xl lg:text-[44px] font-bold text-[#2E5A66] leading-tight sm:leading-[46px] lg:leading-[54px] tracking-[-0.0066em] max-w-[797px] mx-auto mb-6">
          My ESA Therapist has been serving the community since 2019.
        </h2>

        {/* Description Paragraphs */}
        <div className="max-w-[958px] mx-auto space-y-4 text-[#5F6B6F] text-base sm:text-[18px] font-semibold leading-[30px] font-sans mb-10">
          <p>
            Since 2019, My ESA Therapist has connected individuals with licensed mental health professionals for emotional support animal (ESA) evaluations. If an ESA is determined to be clinically appropriate following an independent assessment, providers may issue documentation to support housing accommodation requests under applicable federal housing laws.
          </p>
          <p>
            Our network includes state-licensed mental health professionals who conduct independent telehealth evaluations in accordance with recognized clinical standards. Available in eligible U.S. states, every evaluation is based solely on professional clinical judgment and aligns with Fair Housing Act and HUD guidance where applicable.
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <a
            href="#about"
            className="inline-flex items-center justify-between w-[248px] h-[48px] rounded-[30px] pl-8 pr-1.5 text-white font-semibold text-[16px] shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:opacity-95 transition-opacity"
            style={{ backgroundImage: TEAL_GRADIENT }}
          >
            <span className="font-sans">About ESA Therapist</span>
            <span className="w-[42px] h-[42px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
              <Image
                src="/common/send-icon.svg"
                alt=""
                width={22}
                height={24}
                className="w-[22px] h-[24px]"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
