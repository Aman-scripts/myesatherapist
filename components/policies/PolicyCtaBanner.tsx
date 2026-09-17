import React from "react";
import Link from "next/link";

export function PolicyCtaBanner() {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto">
      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#0E3C38] via-[#163038] to-[#2E5A66] p-8 sm:p-12 lg:p-14 text-center text-white shadow-xl">
        {/* Subtle decorative glow */}
        <div
          className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-[#EFBF2F]/15 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Ready to Start Your ESA Evaluation?
          </h2>
          <p className="text-sm sm:text-base text-[#D9EAE5] leading-relaxed font-sans max-w-lg mx-auto">
            If you believe an Emotional Support Animal may be appropriate for your situation, you can begin a professional evaluation today with a state-licensed therapist.
          </p>
          <div className="pt-2">
            <Link
              href="/pricing/"
              className="inline-flex items-center gap-2 rounded-full bg-[#EFBF2F] hover:bg-[#DFAB19] text-[#163038] font-bold px-8 py-3.5 text-sm sm:text-base shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <span>Start your Evaluation</span>
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
