"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function StatesPsdCtaSection() {
  return (
    <section className="relative w-full bg-[#FAF7F2] py-12 lg:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-[1320px] mx-auto rounded-[24px] lg:rounded-[32px] bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] relative overflow-hidden shadow-xl">
        
        {/* Subtle Decorative Paw Prints in Background */}
        <div className="absolute right-[30%] bottom-4 w-48 h-48 opacity-20 pointer-events-none">
          <Image
            src="/common/cta-section-paw.png"
            alt="Paw prints decoration"
            fill
            className="object-contain"
            sizes="192px"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-6 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
          
          {/* Left Text & CTA Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 z-10">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] lg:leading-[54px] text-[#FAF7F2] tracking-tight">
              Need help with a PSD letter?
            </h2>
            
            <p className="font-sans font-semibold text-base sm:text-lg leading-relaxed text-[#FAF7F2]/90 max-w-[580px]">
              Connect with a state-licensed mental health professional to discuss your needs and see if a psychiatric service dog letter may be right for you.
            </p>

            <Link
              href="/psd-letter"
              className="mt-2 inline-flex items-center justify-center px-8 py-3.5 bg-[#E8B92C] hover:bg-[#f0c33a] rounded-xl shadow-[0px_2px_8px_rgba(232,185,44,0.4)] transition-all duration-200 group"
            >
              <span className="font-lato font-bold text-base sm:text-lg bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                Start your Evaluation
              </span>
            </Link>
          </div>

          {/* Right Floating Dog & Owner Image */}
          <div className="lg:col-span-5 relative w-full h-[280px] sm:h-[340px] lg:h-[380px] flex items-end justify-center lg:justify-end">
            <div className="relative w-full h-full max-w-[440px]">
              <Image
                src="/common/cta-banner-background.png"
                alt="Woman smiling with golden retriever"
                fill
                className="object-contain object-bottom drop-shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
