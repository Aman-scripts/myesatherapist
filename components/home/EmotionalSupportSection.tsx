"use client";

import React from "react";
import Image from "next/image";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

export function EmotionalSupportSection() {
  return (
    <section className="relative overflow-hidden bg-white w-full pt-0 pb-8 sm:pb-12 lg:py-0">
      {/* Mobile & Tablet Image Container (Rendered FIRST on Mobile/Tablet with 0 top gap) */}
      <div className="lg:hidden w-full overflow-hidden">
        {/* Mobile Image (< 640px) */}
        <div className="sm:hidden w-full -mt-2.5">
          <Image
            src="/mobile-emotional-support.png"
            alt="What is an Emotional Support Animal"
            width={390}
            height={425}
            priority
            unoptimized
            className="w-full h-auto block"
          />
        </div>

        {/* Tablet Image (640px to 1023px) */}
        <div className="hidden sm:block w-full -mt-3.5">
          <Image
            src="/tablet-emotional-support-section.png"
            alt="What is an Emotional Support Animal"
            width={834}
            height={521}
            priority
            unoptimized
            className="w-full h-auto block"
          />
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-[1442px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative min-h-0 lg:min-h-[640px] xl:min-h-[760px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
        {/* Left Content Area (Renders AFTER image on Mobile/Tablet) */}
        <div className="w-full lg:w-[56%] xl:w-[52%] z-10 py-6 sm:py-8 lg:py-16 xl:py-24 space-y-6 lg:space-y-5 xl:space-y-6">
          <div className="space-y-3 lg:space-y-3.5">
            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[32px] xl:text-[44px] font-bold text-[#2E5A66] leading-tight lg:leading-[42px] xl:leading-[54px] tracking-[-0.006em]">
              What is an Emotional Support Animal?
            </h2>

            {/* Description paragraphs */}
            <div className="space-y-3 lg:space-y-3 xl:space-y-3.5 text-[#5F6B6F] text-base sm:text-[17px] lg:text-[15px] xl:text-[18px] font-semibold leading-relaxed lg:leading-[25px] xl:leading-[30px]">
              <p>
                An Emotional Support Animal (ESA) is a companion animal that
                provides comfort and emotional stability to individuals with
                mental or emotional health conditions. ESAs are not trained to
                perform specific tasks but offer therapeutic benefits simply
                through their presence. They can help reduce stress, ease
                feelings of loneliness, and improve overall emotional
                well-being.
              </p>
              <p>
                ESAs are recognized under certain housing laws, allowing
                individuals to live with them in places that might otherwise have
                pet restrictions. To qualify, a licensed mental health
                professional must provide a formal recommendation explaining how
                the animal supports your emotional health. For individuals who
                may require additional support, evaluations for Psychiatric
                Service Dogs (PSDs) are also available when clinically
                appropriate.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-row items-center justify-start gap-3 sm:gap-4 lg:gap-5 pt-2 flex-wrap">
            {/* Learn about ESA's Button */}
            <button className="h-[40px] sm:h-[48px] px-5 sm:w-[193px] sm:px-0 rounded-[30px] bg-[#FAF7F2] flex items-center justify-center font-semibold text-[14px] sm:text-[16px] shadow-sm hover:bg-[#f3efe6] transition-colors shrink-0">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                Learn about ESA&apos;s
              </span>
            </button>

            {/* Get Started Button */}
            <a
              href="#how-it-works"
              className="h-[40px] sm:h-[48px] pl-4 sm:pl-6 pr-1 sm:pr-1.5 sm:w-[179px] rounded-[30px] flex items-center justify-between gap-2.5 sm:gap-0 text-white font-semibold text-[14px] sm:text-[16px] transition-opacity hover:opacity-90 shadow-sm shrink-0"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <span>Get Started</span>
              <span className="w-[32px] h-[32px] sm:w-[42px] sm:h-[42px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image src="/send-icon.svg" alt="" width={18} height={20} className="w-[18px] h-[20px] sm:w-[22px] sm:h-[24px]" />
              </span>
            </a>
          </div>
        </div>

        {/* Desktop Right Graphics (Hidden on mobile/tablet) */}
        <div className="hidden lg:flex w-[44%] xl:w-[45%] absolute right-0 top-0 bottom-0 h-full pointer-events-none z-0 items-center justify-end">
          <div className="relative w-full h-full max-w-[607px] lg:max-w-none">
            <Image
              src="/emotional-support-right-frame.png"
              alt="Emotional support dog and woman"
              fill
              priority
              unoptimized
              className="object-cover object-right"
              sizes="607px"
            />
          </div>
        </div>

        {/* Bottom Paw Icon */}
        <div className="hidden lg:block absolute z-20 pointer-events-none right-4 xl:right-[1.6%] bottom-6 xl:bottom-[15.28%] w-[64px] xl:w-[84px] h-[64px] xl:h-[84px]">
          <Image
            src="/emotional-support-section-bottom-paw-icon.svg"
            alt="Paw prints"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
