"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "@/components/common/CtaButton";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

export function EmotionalSupportSection() {
  return (
    <section className="relative overflow-hidden bg-white w-full pt-0 pb-8 sm:pb-12 lg:py-0">
      {/* Mobile & Tablet Image Container (Rendered FIRST on Mobile/Tablet with 0 top gap) */}
      <div className="lg:hidden w-full overflow-hidden">
        {/* Mobile Image (< 640px) */}
        <div className="sm:hidden w-full -mt-2.5">
          <Image
            quality={90}
            src="/home/mobile-emotional-support.webp"
            alt="What is an Emotional Support Animal"
            width={390}
            height={425}
            className="w-full h-auto block"
          />
        </div>

        {/* Tablet Image (640px to 1023px) */}
        <div className="hidden sm:block w-full -mt-3.5">
          <Image
            quality={90}
            src="/home/tablet-emotional-support-section.webp"
            alt="What is an Emotional Support Animal"
            width={834}
            height={521}
            className="w-full h-auto block"
          />
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-[1442px] mx-auto px-4 sm:px-6 lg:px-8 xl:pl-[78px] xl:pr-0 relative min-h-0 lg:min-h-[640px] xl:min-h-[760px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
        {/* Left Content Area (Renders AFTER image on Mobile/Tablet) */}
        <div className="w-full lg:w-[54%] xl:w-[737px] z-10 py-6 sm:py-8 lg:py-16 xl:py-24 space-y-6 lg:space-y-6 xl:space-y-8">
          <div className="space-y-3 lg:space-y-3.5">
            {/* Heading */}
            <h2 className="heading-h2 text-[#2E5A66] capitalize">
              What Is An Emotional Support Animal?
            </h2>

            {/* Description paragraphs */}
            <div className="space-y-3 lg:space-y-3.5">
              <p className="body-large text-[#5F6B6F]">
                An Emotional Support Animal (ESA) is a companion animal that
                provides comfort and emotional stability to individuals with
                mental or emotional health conditions. ESAs are not trained to
                perform specific tasks but offer therapeutic benefits simply
                through their presence. They can help reduce stress, ease
                feelings of loneliness, and improve overall emotional
                well-being.
              </p>
              <p className="body-large text-[#5F6B6F]">
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

          {/* Action Buttons & Refund Reassurance */}
          <div className="space-y-2">
            <div className="flex flex-row items-center gap-3 sm:gap-4 lg:gap-5 xl:gap-6 pt-2 w-full max-w-[420px] sm:max-w-none">
              {/* Learn about ESA's Button */}
              <Link
                href="/blog/esa-guide/emotional-support-animal/"
                className="flex-1 sm:flex-initial xl:w-[193px] h-[48px] rounded-[30px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] hover:bg-[#f3efe6] transition-colors flex items-center justify-center shrink-0 whitespace-nowrap px-4"
              >
                <span className="bg-clip-text text-transparent body-text" style={{ backgroundImage: TEAL_GRADIENT }}>
                  Learn about ESA&apos;s
                </span>
              </Link>

              {/* Get Started Button */}
              <CtaButton href="#how-it-works" className="flex-1 sm:flex-initial">
                Get Started
              </CtaButton>
            </div>
            <p className="body-small text-[#5F6B6F]">
              If not approved after your evaluation? You get a full refund.
            </p>
          </div>
        </div>

        {/* Desktop Right Graphics (Hidden on mobile/tablet) */}
        <div className="hidden lg:flex w-[44%] xl:w-[45%] absolute right-0 top-0 bottom-0 h-full pointer-events-none z-0 items-center justify-end">
          <div className="relative w-full h-full max-w-[607px] lg:max-w-none">
            <Image
            quality={90}
              src="/home/emotional-support-right-frame.webp"
              alt="Emotional support dog and woman"
              fill
              className="object-cover object-right"
              sizes="607px"
            />
          </div>
        </div>

        {/* Bottom Paw Icon */}
        <div className="hidden lg:block absolute z-20 pointer-events-none right-4 xl:right-[1.6%] bottom-6 xl:bottom-[15.28%] w-[64px] xl:w-[84px] h-[64px] xl:h-[84px]">
          <Image
            quality={90}
            src="/home/emotional-support-section-bottom-paw-icon.svg"
            alt="Paw prints"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
