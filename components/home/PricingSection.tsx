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
          "Official ESA letter from a U.S.-licensed mental health professionals.",
        price: "$149",
        isPopular: true,
        features: [
          "Phone consultation",
          "PSD letter if qualified",
          "Official clinic letterhead",
        ],
        buttonText: "Get Started",
      },
      {
        title: "ESA + PSD Combo",
        description:
          "Everything in the ESA Letter package, plus an official ESA.",
        price: "$149",
        features: [
          "Phone consultation",
          "PSD letter if qualified",
          "Official clinic letterhead",
        ],
        buttonText: "Get Started",
      },
      {
        title: "Not Sure Which One",
        description:
          "Official ESA letter from a U.S.-licensed mental health professionals.",
        price: "$149",
        features: [
          "Phone consultation",
          "PSD letter if qualified",
          "Official clinic letterhead",
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
          "Official ESA letter from a U.S.-licensed mental health professionals.",
        price: "$149",
        isPopular: true,
        features: [
          "Phone consultation",
          "PSD letter if qualified",
          "Official clinic letterhead",
        ],
        buttonText: "Get Started",
      },
      {
        title: "ESA + PSD Combo",
        description:
          "Everything in the ESA Letter package, plus an official ESA.",
        price: "$149",
        features: [
          "Phone consultation",
          "PSD letter if qualified",
          "Official clinic letterhead",
        ],
        buttonText: "Get Started",
      },
      {
        title: "Not Sure Which One",
        description:
          "Official ESA letter from a U.S.-licensed mental health professionals.",
        price: "$149",
        features: [
          "Phone consultation",
          "PSD letter if qualified",
          "Official clinic letterhead",
        ],
        buttonText: "Get Started",
      },
    ],
  },
};

function CheckmarkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 w-4 h-4">
      <path
        d="M7.01412 1.74904C7.54306 1.16829 8.45679 1.16829 8.98572 1.74904L9.66586 2.49586C9.93312 2.78937 10.3173 2.94851 10.7139 2.92997L11.7229 2.88282C12.5075 2.84615 13.1537 3.4923 13.1171 4.27695L13.0699 5.28595C13.0513 5.68251 13.2105 6.0667 13.504 6.33399L14.2508 7.01412C14.8316 7.54306 14.8316 8.45679 14.2508 8.98572L13.504 9.66586C13.2105 9.93312 13.0513 10.3173 13.0699 10.7139L13.1171 11.7229C13.1537 12.5075 12.5075 13.1537 11.7229 13.1171L10.7139 13.0699C10.3173 13.0513 9.93312 13.2105 9.66586 13.504L8.98572 14.2508C8.45679 14.8316 7.54306 14.8316 7.01412 14.2508L6.33399 13.504C6.0667 13.2105 5.68251 13.0513 5.28595 13.0699L4.27694 13.1171C3.4923 13.1537 2.84615 12.5075 2.88282 11.7229L2.92997 10.7139C2.94851 10.3173 2.78937 9.93312 2.49586 9.66586L1.74904 8.98572C1.16829 8.45679 1.16829 7.54306 1.74904 7.01412L2.49586 6.33399C2.78937 6.0667 2.94851 5.68251 2.92997 5.28595L2.88282 4.27694C2.84615 3.4923 3.4923 2.84615 4.27695 2.88282L5.28595 2.92997C5.68251 2.94851 6.0667 2.78937 6.33399 2.49586L7.01412 1.74904Z"
        fill="#EDEDED"
        stroke="#2E5A66"
        strokeWidth="1.06667"
      />
      <path
        d="M6 8.00033L7.33333 9.33366L10 6.66699"
        stroke="#2E5A66"
        strokeWidth="1.06667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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
                className={`flex-1 h-[51px] rounded-full body-large font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center ${
                  isActive
                    ? "bg-primary text-background shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.12)]"
                    : "text-primary hover:bg-primary/5"
                }`}
              >
                {PLANS[key].tabLabel}
              </button>
            );
          })}
        </div>

        {/* Plan cards (Frame 1261153813 in Figma: width 972px, height 540px) */}
        <div className="relative w-full max-w-[972px]">
          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between gap-10 lg:gap-[16px]">
            {plan.cards.map((card, idx) => {
              const isPopular = card.isPopular;

              if (isPopular) {
                return (
                  /* Frame 1261153972: 310px x 534px */
                  <div
                    key={idx}
                    className="w-[310px] h-[534px] relative flex flex-col justify-end shrink-0"
                  >
                    {/* Frame 1261153971: Gold Accent Container (310px x 515px) */}
                    <div className="absolute top-0 left-0 w-[310px] h-[515px] bg-accent rounded-[20px]" />

                    {/* MOST POPULAR banner */}
                    <div className="absolute top-[4px] left-0 right-0 text-center font-sans font-semibold text-[14px] leading-[26px] text-body-text uppercase tracking-wider z-10">
                      MOST POPULAR
                    </div>

                    {/* Starter Plan: Inner White Card (300px x 477px, bottom: 6px) */}
                    <div className="w-[300px] h-[477px] bg-white rounded-[24px] border border-[#E1E1E1] shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.1)] absolute left-1/2 -translate-x-1/2 bottom-[6px] z-10 flex flex-col">
                      {/* Frame 1261153969: Teal Header (300px x 261px) */}
                      <div className="w-[300px] h-[261px] rounded-t-[20px] color-gradient p-[48px_26px_0px] flex flex-col gap-2 relative text-left shrink-0">
                        <h3 className="heading-h3 text-background capitalize">
                          {card.title}
                        </h3>
                        <p className="body-text text-background font-semibold">
                          {card.description}
                        </p>
                      </div>

                      {/* Ellipse 20: Gold Price Circle (78px x 78px, top: 226px) */}
                      <div className="w-[78px] h-[78px] rounded-full bg-accent shadow-[0px_1px_4px_rgba(0,0,0,0.15)] absolute left-1/2 -translate-x-1/2 top-[226px] flex items-center justify-center z-20">
                        <span className="heading-h4 font-heading font-bold text-primary">
                          {card.price}
                        </span>
                      </div>

                      {/* Feature List (left: 33px, top: 323px, gap: 6px) */}
                      <div className="absolute left-[33px] top-[323px] w-[236px] flex flex-col gap-[6px] z-10">
                        {card.features.map((f) => (
                          <div key={f} className="flex items-center gap-[6px] h-[26px]">
                            <CheckmarkIcon />
                            <span className="font-sans font-semibold text-[14px] leading-[26px] text-body-text">
                              {f}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Button: Frame 2 (top: 448px, overhangs bottom of inner card & gold container) */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-[448px] z-20">
                        <a
                          href={ctaHref}
                          className="inline-flex items-center justify-center w-[154px] h-[50px] rounded-[42px] text-white font-sans font-semibold text-[16px] leading-[26px] text-center shadow-[0px_1px_4px_var(--color-accent)] hover:opacity-95 transition-opacity color-gradient"
                        >
                          {card.buttonText}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                /* Starter Plan: Standard Cards (300px x 538px) */
                <div
                  key={idx}
                  className="w-[300px] h-[538px] bg-white rounded-[24px] border border-[#E1E1E1] shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.1)] relative flex flex-col shrink-0"
                >
                  {/* Frame 1261153969: Teal Header (300px x 261px) */}
                  <div className="w-[300px] h-[261px] rounded-t-[20px] color-gradient p-[48px_26px_0px] flex flex-col gap-2 relative text-left shrink-0">
                    <h3 className="heading-h3 text-background capitalize">
                      {card.title}
                    </h3>
                    <p className="body-text text-background font-semibold">
                      {card.description}
                    </p>
                  </div>

                  {/* Ellipse 20: Gold Price Circle (78px x 78px, top: 228px) */}
                  <div className="w-[78px] h-[78px] rounded-full bg-accent shadow-[0px_1px_4px_rgba(0,0,0,0.15)] absolute left-1/2 -translate-x-1/2 top-[228px] flex items-center justify-center z-20">
                    <span className="heading-h4 font-heading font-bold text-primary">
                      {card.price}
                    </span>
                  </div>

                  {/* Feature List (left: 33px, top: 323px, gap: 6px) */}
                  <div className="absolute left-[33px] top-[323px] w-[236px] flex flex-col gap-[6px] z-10">
                    {card.features.map((f) => (
                      <div key={f} className="flex items-center gap-[6px] h-[26px]">
                        <CheckmarkIcon />
                        <span className="font-sans font-semibold text-[14px] leading-[26px] text-body-text">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Button: Frame 2 (top: 447px, inside 538px card) */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-[447px] z-20">
                    <a
                      href={ctaHref}
                      className="inline-flex items-center justify-center w-[154px] h-[50px] rounded-[42px] text-white font-sans font-semibold text-[16px] leading-[26px] text-center shadow-[0px_1px_4px_var(--color-accent)] hover:opacity-95 transition-opacity color-gradient"
                    >
                      {card.buttonText}
                    </a>
                  </div>
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
    <div className={`w-[300px] h-[538px] bg-white rounded-[24px] border border-[#E1E1E1] shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.1)] relative flex flex-col shrink-0 ${className}`}>
      {/* Teal Gradient Top Header */}
      <div className="w-[300px] h-[261px] rounded-t-[20px] color-gradient p-[48px_26px_0px] flex flex-col gap-2 relative text-left shrink-0">
        <h3 className="heading-h3 text-background capitalize">
          Not Sure Which One
        </h3>
        <p className="body-text text-background font-semibold">
          Official ESA letter from a U.S.-licensed mental health professionals.
        </p>
      </div>

      {/* Overlapping Gold Circle with Price */}
      <div className="w-[78px] h-[78px] rounded-full bg-accent shadow-[0px_1px_4px_rgba(0,0,0,0.15)] flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-[228px] z-20">
        <span className="heading-h4 font-heading font-bold text-primary">
          $149
        </span>
      </div>

      {/* Feature List */}
      <div className="absolute left-[33px] top-[323px] w-[236px] flex flex-col gap-[6px] z-10">
        {[
          "Phone consultation",
          "PSD letter if qualified",
          "Official clinic letterhead",
        ].map((f) => (
          <div key={f} className="flex items-center gap-[6px] h-[26px]">
            <CheckmarkIcon />
            <span className="font-sans font-semibold text-[14px] leading-[26px] text-body-text">
              {f}
            </span>
          </div>
        ))}
      </div>

      {/* Button: Frame 2 (top: 447px, inside 538px card) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[447px] z-20">
        <a
          href={ctaHref}
          className="inline-flex items-center justify-center w-[154px] h-[50px] rounded-[42px] text-white font-sans font-semibold text-[16px] leading-[26px] text-center shadow-[0px_1px_4px_var(--color-accent)] hover:opacity-95 transition-opacity color-gradient"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

