"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, PawPrint } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-0 lg:py-0 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-20">
        <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72]">
          {/* Decorative paw prints */}
          <div className="pointer-events-none select-none absolute inset-0 hidden lg:block">
            <PawPrint className="absolute top-10 right-[28%] w-8 h-8 text-warm-bg/20 rotate-12" />
            <PawPrint className="absolute top-32 right-[20%] w-6 h-6 text-warm-bg/15 -rotate-6" />
            <PawPrint className="absolute bottom-24 right-[32%] w-7 h-7 text-warm-bg/10 rotate-45" />
            <PawPrint className="absolute bottom-10 right-[16%] w-5 h-5 text-warm-bg/15 rotate-12" />
          </div>

          <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-6 px-6 sm:px-12 lg:px-[104px] py-10 lg:py-[49px]">
            {/* Text + CTA */}
            <div className="flex-1 space-y-4 text-center lg:text-left">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[44px] font-bold text-warm-bg leading-tight max-w-lg mx-auto lg:mx-0">
                Ready to Start Your ESA Evaluation?
              </h2>
              <p className="text-warm-bg text-base sm:text-lg font-sans font-semibold max-w-md mx-auto lg:mx-0">
                If you believe an Emotional Support Animal may be appropriate
                for your situation, you can begin a professional evaluation
                today.
              </p>
              <div className="pt-2">
                <a
                  href="#"
                  className="inline-block px-8 py-3 rounded-full bg-gold text-white font-[family-name:var(--font-lato)] font-bold text-base sm:text-lg hover:opacity-90 transition-opacity shadow-lg"
                >
                  Start your Evaluation
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="relative w-full max-w-[400px] lg:max-w-none lg:w-[420px] h-[220px] lg:h-[280px] rounded-2xl overflow-hidden shrink-0">
              <Image
                src="/cta-banner-background.png"
                alt="Person with emotional support animal"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
              />
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gold/90 flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
