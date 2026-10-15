"use client";

import React, { useState } from "react";
import Image from "next/image";

const TEAL_GRADIENT = "var(--color-gradient)";

type PlanType = "esa" | "psd";

interface PlanCard {
  title: string;
  description: string;
  price: string;
  isPopular?: boolean;
  features: string[];
  buttonText: string;
}

interface PlanSet {
  tabLabel: string;
  description: string;
  cards: [PlanCard, PlanCard, PlanCard];
}

const PLANS: Record<PlanType, PlanSet> = {
  esa: {
    tabLabel: "ESA Letter",
    description:
      "Choose the ESA package that fits your needs. Get a professional ESA evaluation and letter, with an ID card option for added convenience.",
    cards: [
      {
        title: "ESA Letter - Housing",
        description:
          "Professional ESA letter from a U.S.-licensed mental health professional for housing accommodations.",
        price: "$149",
        isPopular: true,
        features: [
          "Online ESA evaluation",
          "Licensed mental health professional",
          "ESA letter if clinically approved",
        ],
        buttonText: "Get Started",
      },
      {
        title: "ESA + PSD Combo",
        description:
          "Professional ESA and PSD letters from a U.S.-licensed mental health professional for housing and service dog needs.",
        price: "$199",
        features: [
          "Online ESA evaluation",
          "Licensed mental health professional",
          "ESA & PSD letters if approved",
        ],
        buttonText: "Get Started",
      },
      {
        title: "Not Sure Which One",
        description:
          "Your needs are unique. Let's find the right option for your situation.",
        price: "$149",
        features: [
          "Help identifying right document",
          "ESA and PSD needs assessed",
          "Guidance from licensed professional",
        ],
        buttonText: "Get Started",
      },
    ],
  },
  psd: {
    tabLabel: "PSD Letter",
    description:
      "Choose the PSD package that fits your needs. Get a professional PSD evaluation and letter, with an ESA + PSD combo available for added support.",
    cards: [
      {
        title: "PSD Letter - Service Dog",
        description:
          "Professional PSD letter from a U.S.-licensed mental health professional for service dog-related needs.",
        price: "$149",
        isPopular: true,
        features: [
          "Online PSD evaluation",
          "Licensed mental health professional",
          "PSD letter if clinically approved",
        ],
        buttonText: "Get Started",
      },
      {
        title: "ESA + PSD Combo",
        description:
          "Get both ESA and PSD letters through professional mental health evaluations for housing and service dog needs.",
        price: "$199",
        features: [
          "Online ESA & PSD evaluation",
          "Licensed mental health professional",
          "ESA & PSD letters if approved",
        ],
        buttonText: "Get Started",
      },
      {
        title: "Not Sure Which One",
        description:
          "Your needs are unique. Let's find the right option for your situation.",
        price: "$149",
        features: [
          "Help identifying right document",
          "ESA and PSD needs assessed",
          "Guidance from licensed professional",
        ],
        buttonText: "Get Started",
      },
    ],
  },
};

function CheckmarkIcon() {
  return (
    <span className="w-4 h-4 rounded-full bg-[#EDEDED] border border-primary text-primary flex items-center justify-center shrink-0 mt-0.5">
      <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 5L4 7L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

interface PricingSectionProps {
  bgColor?: string;
  defaultPlan?: PlanType;
  ctaHref?: string;
}

export function PricingSection({
  bgColor = "bg-background",
  defaultPlan = "esa",
  ctaHref = "#how-it-works",
}: PricingSectionProps) {
  const [active, setActive] = useState<PlanType>(defaultPlan);
  const plan = PLANS[active];

  return (
    <section id="pricing" className={`py-16 lg:py-24 ${bgColor} relative overflow-hidden`}>
      <div className="max-w-[1442px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-10">
        {/* Heading */}
        <div className="text-center max-w-[709px] mx-auto space-y-3">
          <h2 className="heading-h2 capitalize">
            Plans &amp; Pricing
          </h2>
          <p className="body-large">
            {plan.description}
          </p>
        </div>

        {/* Payment mode toggle (Frame: Payment Mode in Figma, w: 386px, h: 59px) */}
        <div
          className="flex w-full max-w-[386px] h-[59px] items-center rounded-full bg-white p-[4px_7px] shadow-sm"
          role="tablist"
          aria-label="Letter type"
        >
          {(Object.keys(PLANS) as PlanType[]).map((key) => {
            const isActive = key === active;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(key)}
                className={`flex-1 h-[51px] rounded-full font-manrope font-semibold text-[18px] leading-[28px] transition-all duration-200 cursor-pointer flex items-center justify-center ${
                  isActive
                    ? "bg-primary text-[#FFFBF5] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.12)]"
                    : "text-[#254D3C] hover:bg-primary/5"
                }`}
              >
                {PLANS[key].tabLabel}
              </button>
            );
          })}
        </div>

        {/* Plan cards (Frame 1261153813 in Figma: width 972px, height 540px) */}
        <div className="relative w-full max-w-[972px]">
          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-end justify-center gap-6 lg:gap-4">
            {plan.cards.map((card, idx) => {
              const isPopular = card.isPopular;

              const cardContent = (
                <div className="w-full bg-white rounded-[24px] overflow-hidden border border-[#E1E1E1] shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.1)] flex flex-col h-[500px]">
                  {/* Teal Gradient Top Header (Frame 1261153969) */}
                  <div
                    className="h-[235px] shrink-0 p-[28px_24px_16px] flex flex-col justify-start gap-2 relative text-left rounded-t-[20px] color-gradient"
                  >
                    <h3 className="heading-h3 text-background capitalize">
                      {card.title}
                    </h3>
                    <p className="body-text text-background line-clamp-3">
                      {card.description}
                    </p>
                  </div>

                  {/* Overlapping Gold Circle with Price (Ellipse 20: 78px x 78px, accent) */}
                  <div className="w-[78px] h-[78px] rounded-full bg-accent shadow-[0px_1px_4px_rgba(0,0,0,0.15)] flex items-center justify-center -my-[39px] mx-auto z-10 shrink-0">
                    <span className="heading-h4">
                      {card.price}
                    </span>
                  </div>

                  {/* White Lower Body: Features + CTA Button */}
                  <div className="flex-1 bg-white pt-[46px] px-6 pb-6 flex flex-col justify-between">
                    <ul className="space-y-2">
                      {card.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-left">
                          <CheckmarkIcon />
                          <span className="body-small">
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Bottom CTA Button (Frame 2: 154px x 50px, border-radius 42px) */}
                    <div className="flex justify-center mt-4">
                      <a
                        href={ctaHref}
                        className="inline-flex items-center justify-center w-[154px] h-[50px] rounded-[42px] text-white font-sans font-semibold text-[16px] leading-[26px] text-center shadow-[0_1px_4px_var(--color-accent)] hover:opacity-95 transition-opacity color-gradient"
                      >
                        {card.buttonText}
                      </a>
                    </div>
                  </div>
                </div>
              );

              if (isPopular) {
                return (
                  <div
                    key={idx}
                    className="w-full max-w-[310px] bg-accent rounded-[24px] pt-[28px] px-[5px] pb-[5px] shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1)] relative flex flex-col"
                  >
                    <div className="absolute top-1 left-0 right-0 text-center body-small font-bold text-primary uppercase tracking-wider">
                      Most Popular
                    </div>
                    {cardContent}
                  </div>
                );
              }

              return (
                <div key={idx} className="w-full max-w-[300px]">
                  {cardContent}
                </div>
              );
            })}
          </div>

          {/* Dog & hand artwork, bottom right of the section */}
          <div className="hidden xl:block absolute left-[100%] bottom-[-30px] w-[245px] pointer-events-none z-0 -ml-2">
            <Image
              quality={90}
              src="/home/pricing-section-dog.webp"
              alt="Dog giving paw to woman hand"
              width={441}
              height={376}
              className="object-contain object-left w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function HelpPlanCard({ ctaHref = "#how-it-works", className = "" }: { ctaHref?: string; className?: string }) {
  return (
    <div className={`w-full max-w-[300px] bg-white rounded-[24px] overflow-hidden border border-[#E1E1E1] shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.1)] flex flex-col h-[500px] ${className}`}>
      {/* Teal Gradient Top Header */}
      <div
        className="h-[235px] shrink-0 p-[28px_24px_16px] flex flex-col justify-start gap-2 relative text-left rounded-t-[20px] color-gradient"
      >
        <h3 className="heading-h3 text-background capitalize">
          Not Sure Which One
        </h3>
        <p className="body-large text-background line-clamp-3">
          Your needs are unique. Let&apos;s find the right option for your situation.
        </p>
      </div>

      {/* Overlapping Gold Circle with Price */}
      <div className="w-[78px] h-[78px] rounded-full bg-accent shadow-[0px_1px_4px_rgba(0,0,0,0.15)] flex items-center justify-center -my-[39px] mx-auto z-10 shrink-0">
        <span className="heading-h4">
          Free
        </span>
      </div>

      {/* White Lower Body: Features + CTA Button */}
      <div className="flex-1 bg-white pt-[46px] px-6 pb-6 flex flex-col justify-between">
        <ul className="space-y-2">
          {[
            "Help identifying right document",
            "ESA and PSD needs assessed",
            "Guidance from licensed professional",
          ].map((f) => (
            <li key={f} className="flex items-center gap-2 text-left">
              <CheckmarkIcon />
              <span className="body-small">
                {f}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex justify-center mt-4">
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center w-[154px] h-[50px] rounded-[42px] text-white font-sans font-semibold text-[16px] leading-[26px] text-center shadow-[0_1px_4px_var(--color-accent)] hover:opacity-95 transition-opacity color-gradient"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

