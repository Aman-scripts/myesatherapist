"use client";

import React from "react";
import Image from "next/image";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

export function EmotionalSupportSection() {
  return (
    <section className="relative overflow-hidden bg-white w-full">
      {/* Desktop container matching Figma section 1442x811 */}
      <div
        className="hidden lg:block relative w-full mx-auto max-w-[1442px]"
        style={{ aspectRatio: "1442 / 811", minHeight: "720px" }}
      >
        {/* Left Content Area (Figma Frame 1000011698: left 78px [5.41%], top 125.5px [15.47%], width 737px, height 560px) */}
        <div
          className="absolute z-10 flex flex-col justify-between"
          style={{
            left: "5.41%",
            top: "15.47%",
            width: "51.11%",
            maxWidth: "737px",
            height: "69.05%",
          }}
        >
          <div className="space-y-4">
            {/* Heading */}
            <h2 className="font-heading text-[44px] font-bold text-[#1A3D4F] leading-[54px] tracking-[-0.006em]">
              What is an Emotional Support Animal?
            </h2>

            {/* Description paragraphs — 18px / 30px line-height */}
            <div className="space-y-3.5 text-[#5F6B6F] text-[18px] font-semibold leading-[30px]">
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

          {/* Action Buttons — Figma: 396px width, 48px height, 24px gap */}
          <div className="flex items-center gap-6 pt-4">
            {/* Learn about ESA's Button */}
            <button className="w-[193px] h-[48px] rounded-[30px] bg-[#FAF7F2] flex items-center justify-center font-semibold text-[16px] shadow-sm hover:bg-[#f3efe6] transition-colors">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                Learn about ESA&apos;s
              </span>
            </button>

            {/* Get Started Button */}
            <a
              href="#how-it-works"
              className="w-[179px] h-[48px] rounded-[30px] pl-6 pr-1.5 flex items-center justify-between text-white font-semibold text-[16px] transition-opacity hover:opacity-90 shadow-sm"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <span>Get Started</span>
              <span className="w-[42px] h-[42px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image src="/send-icon.svg" alt="" width={18} height={20} />
              </span>
            </a>
          </div>
        </div>

        {/* Right Graphics: Figma Frame 1000011721 (exact width 607px, height 811px, right 0, top 0) */}
        <div
          className="absolute right-0 top-0 bottom-0 pointer-events-none z-0"
          style={{ width: "42.09%", height: "100%" }}
        >
          <Image
            src="/emotional-support-right-frame.png"
            alt="Emotional support dog and woman"
            fill
            priority
            className="object-contain object-right"
            sizes="(min-width: 1024px) 607px, 50vw"
          />
        </div>

        {/* Bottom Paw Icon — Figma fi_11234282 (x=3099, y=6593, width 84px, height 84px) */}
        <div
          className="absolute z-20 pointer-events-none"
          style={{
            right: "1.6%",
            bottom: "15.28%",
            width: "84px",
            height: "84px",
          }}
        >
          <Image
            src="/emotional-support-section-bottom-paw-icon.svg"
            alt="Paw prints"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Mobile / Tablet Responsive Fallback */}
      <div className="lg:hidden px-4 sm:px-6 py-12 space-y-8">
        <div className="space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1A3D4F] leading-tight tracking-[-0.006em]">
            What is an Emotional Support Animal?
          </h2>
          <div className="space-y-3.5 text-[#5F6B6F] text-base sm:text-[18px] font-semibold leading-relaxed">
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

        {/* Mobile Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="w-full sm:w-[193px] h-[48px] rounded-[30px] bg-[#FAF7F2] flex items-center justify-center font-semibold text-[16px]">
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
              Learn about ESA&apos;s
            </span>
          </button>
          <a
            href="#how-it-works"
            className="w-full sm:w-[179px] h-[48px] rounded-[30px] pl-6 pr-1.5 flex items-center justify-between text-white font-semibold text-[16px]"
            style={{ backgroundImage: TEAL_GRADIENT }}
          >
            <span>Get Started</span>
            <span className="w-[42px] h-[42px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
              <Image src="/send-icon.svg" alt="" width={18} height={20} />
            </span>
          </a>
        </div>

        {/* Mobile Photo with bottom accents */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/emotional-support-right-frame.png"
            alt="Woman embracing emotional support golden retriever"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
