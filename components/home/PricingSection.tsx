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
          "Professional ESA letter from a state-licensed mental health professional for housing accommodations.",
        price: "$149",
        isPopular: true,
        features: [
          "Online ESA evaluation",
          "Licensed mental health professional",
          "Disability-related need assessment",
          "ESA letter if clinically approved",
          "Secure email delivery",
        ],
        buttonText: "Get Started",
      },
      {
        title: "ESA Letter + PSD Letter Combo",
        description:
          "Professional ESA and PSD letters from a state-licensed mental health professional for housing and service dog needs.",
        price: "$199",
        features: [
          "Online ESA evaluation",
          "Licensed mental health professional",
          "ESA letter if clinically approved",
          "PSD letter if clinically approved",
          "Secure email delivery",
        ],
        buttonText: "Start Evaluation",
      },
      {
        title: "Not Sure Which One?",
        description:
          "Your needs are unique. Let’s find the right option.",
        price: "?",
        features: [
          "Help identifying the right documentation",
          "ESA and PSD needs assessed",
          "Guidance from a licensed professional",
          "Clear next steps after evaluation",
        ],
        buttonText: "Find Your Eligibility in Minutes",
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
          "Professional PSD letter from a state-licensed mental health professional for service dog needs.",
        price: "$149",
        isPopular: true,
        features: [
          "Online PSD evaluation",
          "Licensed mental health professional",
          "Disability-related need assessment",
          "PSD letter if clinically approved",
          "Secure email delivery",
        ],
        buttonText: "Get Started",
      },
      {
        title: "ESA Letter + PSD Letter Combo",
        description:
          "Professional ESA and PSD letters from a state-licensed mental health professional for housing and service dog needs.",
        price: "$199",
        features: [
          "Online ESA evaluation",
          "Licensed mental health professional",
          "ESA letter if clinically approved",
          "PSD letter if clinically approved",
          "Secure email delivery",
        ],
        buttonText: "Start Evaluation",
      },
      {
        title: "Not Sure Which One?",
        description:
          "Your needs are unique. Let’s find the right option.",
        price: "?",
        features: [
          "Help identifying the right documentation",
          "ESA and PSD needs assessed",
          "Guidance from a licensed professional",
          "Clear next steps after evaluation",
        ],
        buttonText: "Find Your Eligibility in Minutes",
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
      <div className="max-w-[1442px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 flex flex-col items-center gap-10">
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
        <div className="relative w-full max-w-[972px] pb-10">
          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-12 lg:gap-[16px]">
            {plan.cards.map((card, idx) => {
              const isPopular = card.isPopular;

              if (isPopular) {
                return (
                  /* Frame 1261153972: 310px wide Popular Card with Yellow Accent Frame */
                  <div
                    key={idx}
                    className="w-[310px] bg-accent rounded-[24px] pt-[8px] pb-[6px] px-[5px] shadow-[0px_4px_12px_rgba(0,0,0,0.1)] relative flex flex-col shrink-0 overflow-visible"
                  >
                    {/* MOST POPULAR banner */}
                    <div className="text-center font-sans font-bold text-[14px] leading-[26px] text-body-text uppercase tracking-wider py-1 shrink-0">
                      MOST POPULAR
                    </div>

                    {/* Starter Plan: Inner White Card */}
                    <div className="w-[300px] bg-white rounded-[20px] shadow-[0px_2px_4px_rgba(0,0,0,0.08)] relative flex flex-col shrink-0 pb-[36px] overflow-visible">
                      {/* Frame 1261153969: Teal Header */}
                      <div className="w-[300px] h-[285px] rounded-t-[20px] color-gradient pt-[22px] px-[24px] flex flex-col gap-2 relative text-left shrink-0">
                        <h3 className="heading-h3 text-background capitalize">
                          {card.title}
                        </h3>
                        <p className="body-text text-background font-semibold">
                          {card.description}
                        </p>
                      </div>

                      {/* Ellipse 20: Gold Price Circle (78px x 78px, centered on header-body divide) */}
                      <div className="w-[78px] h-[78px] rounded-full bg-accent shadow-[0px_2px_6px_rgba(0,0,0,0.15)] absolute left-1/2 -translate-x-1/2 top-[246px] flex items-center justify-center z-20">
                        <span className="heading-h4 font-heading font-bold text-primary">
                          {card.price}
                        </span>
                      </div>

                      {/* Feature List */}
                      <div className="pt-[54px] px-[24px] pb-[20px] flex flex-col gap-[8px]">
                        {card.features.map((f) => (
                          <div key={f} className="flex items-center gap-[8px] min-h-[26px]">
                            <CheckmarkIcon />
                            <span className="font-sans font-semibold text-[14px] leading-[26px] text-body-text">
                              {f}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Button: Centered on bottom border (-bottom-[25px]) */}
                      <div className="absolute left-1/2 -translate-x-1/2 -bottom-[25px] z-30">
                        <a
                          href={ctaHref}
                          className="inline-flex items-center justify-center w-[154px] h-[50px] rounded-[42px] text-white font-sans font-semibold text-[16px] leading-[26px] text-center shadow-[0px_4px_8px_rgba(0,0,0,0.15)] hover:opacity-95 transition-opacity color-gradient"
                        >
                          {card.buttonText}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }

              const isLongButton = card.buttonText.length > 18;

              return (
                /* Starter Plan: Standard Cards */
                <div
                  key={idx}
                  className="w-[300px] bg-white rounded-[24px] border border-[#E1E1E1] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] relative flex flex-col shrink-0 overflow-hidden lg:mt-[38px]"
                >
                  {/* Frame 1261153969: Teal Header */}
                  <div className="w-[300px] h-[285px] rounded-t-[24px] color-gradient pt-[22px] px-[24px] flex flex-col gap-2 relative text-left shrink-0">
                    <h3 className="heading-h3 text-background capitalize">
                      {card.title}
                    </h3>
                    <p className="body-text text-background font-semibold">
                      {card.description}
                    </p>
                  </div>

                  {/* Ellipse 20: Gold Price Circle (78px x 78px, centered on header-body divide) */}
                  <div className="w-[78px] h-[78px] rounded-full bg-accent shadow-[0px_2px_6px_rgba(0,0,0,0.15)] absolute left-1/2 -translate-x-1/2 top-[246px] flex items-center justify-center z-20">
                    <span className="heading-h4 font-heading font-bold text-primary">
                      {card.price}
                    </span>
                  </div>

                  {/* Feature List (min-h keeps button aligned across cards with 4 vs 5 features) */}
                  <div className="pt-[54px] px-[24px] pb-[16px] flex flex-col gap-[8px] min-h-[220px]">
                    {card.features.map((f) => (
                      <div key={f} className="flex items-center gap-[8px] min-h-[26px]">
                        <CheckmarkIcon />
                        <span className="font-sans font-semibold text-[14px] leading-[26px] text-body-text">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Button: Inside the card, centered with padding below */}
                  <div className="pt-2 pb-7 flex justify-center items-center px-3">
                    <a
                      href={ctaHref}
                      className={`inline-flex items-center justify-center h-[50px] rounded-[42px] text-white font-sans font-semibold text-[16px] leading-[26px] text-center shadow-[0px_4px_8px_rgba(0,0,0,0.15)] hover:opacity-95 transition-opacity color-gradient ${
                        isLongButton
                          ? "w-[272px] px-2 whitespace-nowrap"
                          : "w-[154px]"
                      }`}
                    >
                      {card.buttonText}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dog & hand artwork (Figma: width 245px, height 209px, left: 1207px, top: 494px, z-index: 3).
              Starts exactly at the last card's right edge and sits level with the price circles. */}
          <div className="hidden lg:block absolute left-[calc(100%+1px)] top-[279px] w-[245px] h-[209px] pointer-events-none z-20">
            <Image
              quality={95}
              src="/home/pricing-section-dog.webp"
              alt="Dog giving paw to woman hand"
              width={245}
              height={209}
              className="w-[245px] h-[209px] object-contain object-left pointer-events-none"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function HelpPlanCard({ ctaHref = "#how-it-works", className = "" }: { ctaHref?: string; className?: string }) {
  return (
    <div className={`w-[300px] bg-white rounded-[24px] border border-[#E1E1E1] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] relative flex flex-col shrink-0 overflow-hidden ${className}`}>
      {/* Teal Gradient Top Header */}
      <div className="w-[300px] h-[285px] rounded-t-[24px] color-gradient pt-[22px] px-[24px] flex flex-col gap-2 relative text-left shrink-0">
        <h3 className="heading-h3 text-background capitalize">
          Not Sure Which One?
        </h3>
        <p className="body-text text-background font-semibold">
          Your needs are unique. Let’s find the right option.
        </p>
      </div>

      {/* Overlapping Gold Circle with Price */}
      <div className="w-[78px] h-[78px] rounded-full bg-accent shadow-[0px_2px_6px_rgba(0,0,0,0.15)] flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-[246px] z-20">
        <span className="heading-h4 font-heading font-bold text-primary">
          ?
        </span>
      </div>

      {/* Feature List (min-h keeps button aligned) */}
      <div className="pt-[54px] px-[24px] pb-[16px] flex flex-col gap-[8px] min-h-[220px]">
        {[
          "Help identifying the right documentation",
          "ESA and PSD needs assessed",
          "Guidance from a licensed professional",
          "Clear next steps after evaluation",
        ].map((f) => (
          <div key={f} className="flex items-center gap-[8px] min-h-[26px]">
            <CheckmarkIcon />
            <span className="font-sans font-semibold text-[14px] leading-[26px] text-body-text">
              {f}
            </span>
          </div>
        ))}
      </div>

      {/* Button: Inside the card, centered with padding below */}
      <div className="pt-2 pb-7 flex justify-center items-center px-3">
        <a
          href={ctaHref}
          className="inline-flex items-center justify-center w-[272px] h-[50px] px-2 rounded-[42px] text-white font-sans font-semibold text-[16px] leading-[26px] whitespace-nowrap text-center shadow-[0px_4px_8px_rgba(0,0,0,0.15)] hover:opacity-95 transition-opacity color-gradient"
        >
          Find Your Eligibility in Minutes
        </a>
      </div>
    </div>
  );
}

