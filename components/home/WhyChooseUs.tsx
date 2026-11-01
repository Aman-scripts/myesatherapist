"use client";

import React from "react";
import Image from "next/image";

export interface WhyChooseFeature {
  icon?: string;
  title: string;
  description: string;
}

const defaultFeatures: WhyChooseFeature[] = [
  {
    icon: "/ESA ICons/Icon-33.svg",
    title: "Licensed Professionals",
    description:
      "Evaluations are conducted by independent U.S.-licensed mental health professionals authorized to assess ESA eligibility.",
  },
  {
    icon: "/ESA ICons/Icon-15.svg",
    title: "Secure Telehealth Platform",
    description:
      "HIPAA-compliant systems ensure your information remains confidential and protected.",
  },
  {
    icon: "/ESA ICons/Glyph-2.svg",
    title: "Clinical Integrity First",
    description:
      "We do not guarantee ESA approval. Recommendations are based solely on clinical judgment.",
  },
  {
    icon: "/ESA ICons/Icon-17.svg",
    title: "Legitimate ESA Documentation",
    description:
      "When clinically appropriate, ESA letters are issued in compliance with applicable federal and state housing guidelines.",
  },
  {
    icon: "/ESA ICons/Icon-24.svg",
    title: "Nationwide Access",
    description:
      "Telehealth evaluations available for individuals across the United States, subject to clinician availability.",
  },
  {
    icon: "/ESA ICons/Icon-26.svg",
    title: "Transparent Process",
    description:
      "Clear steps, clear expectations, no misleading claims.",
  },
];

interface WhyChooseUsProps {
  bgColor?: string;
  title?: string;
  subtitle?: string;
  features?: WhyChooseFeature[];
}

export function WhyChooseUs({
  bgColor = "bg-background",
  title = "Why Choose My ESA Therapist?",
  subtitle,
  features = defaultFeatures,
}: WhyChooseUsProps) {
  const items = features && features.length > 0 ? features : defaultFeatures;

  return (
    <section className={`py-16 lg:py-20 xl:py-24 ${bgColor}`}>
      <div className="max-w-[1279px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-14 lg:mb-16 space-y-2.5 max-w-[813px] mx-auto">
          <h2 className="heading-h2 capitalize">
            {title}
          </h2>
          <div className="mx-auto space-y-1">
            {subtitle ? (
              <p className="body-large max-w-[813px] mx-auto">{subtitle}</p>
            ) : (
              <p className="body-large max-w-[813px] mx-auto">
                We simplify online emotional support animal evaluations while maintaining efficiency and legal compliance. Here&apos;s what makes us different from other providers.
              </p>
            )}
          </div>
        </div>

        {/* 3-column 2-row grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 xl:gap-x-[23px] gap-y-14 lg:gap-y-16 pt-4">
          {items.map(({ icon, title: itemTitle, description }, idx) => {
            const resolvedIcon =
              icon && !icon.includes("/home/whychoose")
                ? icon
                : defaultFeatures[idx % defaultFeatures.length]?.icon || "/ESA ICons/Icon-10.svg";
            return (
              <div
                key={itemTitle}
                className="relative rounded-[20px] bg-accent shadow-[0px_2px_4px_rgba(0,0,0,0.15)] pt-1.5 px-0 pb-0 flex flex-col items-center"
              >
                <div className="w-full bg-white rounded-[20px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] px-6 sm:px-8 pt-12 pb-8 flex flex-col items-center text-center h-full min-h-[228px]">
                  {/* Floating icon circle on top border */}
                  <div className="absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2 w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] lg:w-[64px] lg:h-[64px] rounded-full bg-white shadow-[0px_2.5px_5px_rgba(0,0,0,0.25)] border border-[#E2E8F0] flex items-center justify-center">
                    <Image
                      src={resolvedIcon}
                      alt={itemTitle}
                      width={32}
                      height={32}
                      unoptimized
                      className="icon-lg object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="heading-h3 text-color-gradient mb-3">
                    {itemTitle}
                  </h3>

                  {/* Description */}
                  <p className="body-text max-w-[320px]">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
