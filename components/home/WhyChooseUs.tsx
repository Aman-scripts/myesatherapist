"use client";

import React from "react";
import {
  Shield,
  Monitor,
  Handshake,
  FileCheck2,
  Globe,
  Eye,
} from "lucide-react";

const features = [
  {
    Icon: Shield,
    title: "Licensed Professionals",
    description:
      "Evaluations are conducted by independent U.S.-licensed mental health professionals authorized to assess ESA eligibility.",
  },
  {
    Icon: Monitor,
    title: "Secure Telehealth Platform",
    description:
      "HIPAA-compliant systems ensure your information remains confidential and protected.",
  },
  {
    Icon: Handshake,
    title: "Clinical Integrity First",
    description:
      "We do not guarantee ESA approval. Recommendations are based solely on clinical judgment.",
  },
  {
    Icon: FileCheck2,
    title: "Legitimate ESA Documentation",
    description:
      "When clinically appropriate, ESA letters are issued in compliance with applicable federal and state housing guidelines.",
  },
  {
    Icon: Globe,
    title: "Nationwide Access",
    description:
      "Telehealth evaluations available for individuals across the United States, subject to clinician availability.",
  },
  {
    Icon: Eye,
    title: "Transparent Process",
    description:
      "Clear steps, clear expectations, no misleading claims.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-14 sm:py-16 lg:py-24 bg-[#EEEBE0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12 lg:mb-16 space-y-2">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-primary leading-tight tracking-[-0.006em]">
            Why Choose My ESA Therapist?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg font-semibold max-w-2xl mx-auto">
            We simplify online emotional support animal evaluations while maintaining efficiency and legal compliance. Here&apos;s what makes us different from other providers.
          </p>
        </div>

        {/* 3-column 2-row grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 lg:gap-y-16 pt-8">
          {features.map(({ Icon, title, description }) => (
            <div key={title} className="relative">
              {/* Gold accent block behind card */}
              <div className="absolute -inset-x-0 top-1.5 bottom-0 rounded-[20px] bg-[#E8B92C] shadow-[0_20px_45px_-20px_rgba(232,185,44,0.6)]" />
              {/* Card */}
              <div className="relative bg-white rounded-[20px] shadow-[0_20px_45px_-20px_rgba(46,90,102,0.25)] px-8 pt-14 pb-9 flex flex-col items-center text-center h-full">
                {/* Icon circle floating above card */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center shadow-[0_10px_25px_-8px_rgba(46,90,102,0.35)]">
                  <Icon className="w-11 h-11 text-primary" strokeWidth={1.75} />
                </div>

                <h3 className="font-[family-name:var(--font-lato)] text-xl sm:text-2xl font-bold bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent mb-2 tracking-[-0.017em]">
                  {title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
