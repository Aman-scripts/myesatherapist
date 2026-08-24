"use client";

import React from "react";
import Image from "next/image";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

export function DoYouNeedEsaSection() {
  const points = [
    "Feeling persistent anxiety, depression, or stress that impacts daily life.",
    "Difficulty coping with emotional challenges on your own",
    "Experiencing frequent loneliness or isolation",
    "Noticing that being around animals naturally brings you comfort or a sense of calm",
    "Struggling to maintain emotional balance during stressful situations",
  ];

  return (
    <section className="relative overflow-hidden bg-white w-full py-12 lg:py-0">
      {/* Responsive Container */}
      <div className="max-w-[1442px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative min-h-0 lg:min-h-[640px] xl:min-h-[701px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
        
        {/* Left Content Area */}
        <div className="w-full lg:w-[56%] xl:w-[54%] max-w-[737px] z-10 py-4 lg:py-10 xl:py-16 space-y-5 lg:space-y-4 xl:space-y-5">
          <div className="space-y-3.5 lg:space-y-3 xl:space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[32px] xl:text-[44px] font-bold text-[#2E5A66] leading-tight lg:leading-[42px] xl:leading-[54px] tracking-[-0.0066em]">
              Do You Need an Emotional Support Animal?
            </h2>

            <div className="text-[#5F6B6F] text-base sm:text-[17px] lg:text-[14.5px] xl:text-[18px] font-semibold leading-relaxed lg:leading-[23px] xl:leading-[30px] font-sans space-y-2.5 lg:space-y-2 xl:space-y-3.5">
              <p>
                You might consider an Emotional Support Animal if you face challenges that affect your emotional or mental well-being. Situations that could indicate a need for an ESA include:
              </p>

              <ul className="space-y-1 lg:space-y-1 xl:space-y-1.5 list-none pl-0">
                {points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-[#2E5A66] font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="pt-1 text-sm sm:text-base lg:text-[14px] xl:text-[18px] leading-relaxed lg:leading-[22px] xl:leading-[30px]">
                It’s important to note that an ESA should only be recommended following a proper evaluation by a licensed mental health professional. Documentation obtained without professional guidance may not be valid or recognized under housing laws.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-2 sm:pt-4">
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-between w-full sm:w-[179px] h-[48px] rounded-[30px] pl-6 pr-1.5 text-white font-semibold text-[16px] shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:opacity-95 transition-opacity"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <span className="font-sans">Get Started</span>
              <span className="w-[42px] h-[42px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image
                  src="/send-icon.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="translate-x-[1px]"
                  style={{ width: "auto", height: "auto" }}
                />
              </span>
            </a>
          </div>
        </div>

        {/* Right Visual Frame */}
        <div className="w-full lg:w-[44%] xl:w-[46%] lg:absolute lg:right-0 lg:top-0 lg:bottom-0 pointer-events-none z-0 flex items-center justify-center lg:justify-end">
          <div className="relative w-full aspect-[834/533] lg:aspect-auto lg:h-full lg:w-full max-w-[594px] lg:max-w-none">
            {/* Background Decorative Line SVG */}
            <div className="hidden lg:block absolute left-0 top-[15px] w-[60px] xl:w-[81px] h-[85%] xl:h-[669px] z-0">
              <Image
                src="/doyouneed-emotional-support-section-line.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            {/* Main Photo */}
            <div className="relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 w-full lg:w-[96%] h-full z-10">
              <Image
                src="/doyouneed-esa-perfect-v3.png"
                alt="Emotional support dog and owner"
                fill
                priority
                unoptimized
                className="object-contain object-center lg:object-right"
                sizes="(min-width: 1024px) 594px, 100vw"
              />
            </div>

            {/* Floating Circle Badge at Curve Apex */}
            <div className="hidden lg:block absolute left-[-10px] xl:left-[-14px] top-[48%] -translate-y-1/2 w-[60px] xl:w-[73px] h-[60px] xl:h-[73px] z-20 drop-shadow-[0_2px_6px_rgba(0,0,0,0.18)]">
              <Image
                src="/doyouneed-emotional-support-icon.svg"
                alt="ESA Badge"
                fill
                className="object-contain rounded-full bg-[#FDFBF7]"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
