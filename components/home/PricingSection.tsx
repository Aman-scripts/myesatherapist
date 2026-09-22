"use client";

import React, { useState } from "react";
import Image from "next/image";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

type PlanType = "esa" | "psd";

interface PlanCard {
  title: string;
  description: string;
  price: string;
  unit: string;
  features: string[];
  buttonText: string;
}

interface PlanSet {
  tabLabel: string;
  description: string;
  cards: [PlanCard, PlanCard];
}

const HELP_CARD = {
  title: "Not Sure Which One?",
  description: "Your needs are unique. Let’s find the right option.",
  features: [
    "Help identifying the right documentation",
    "ESA and PSD needs assessed",
    "Guidance from a licensed professional",
    "Clear next steps after evaluation",
  ],
  buttonText: "Get Evaluated For Free!",
};

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
        unit: "/ one-time",
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
          "Professional ESA and PSD letters from a U.S.-licensed mental health professional for housing and service dog needs.",
        price: "$199",
        unit: "/ one-time",
        features: [
          "Online ESA evaluation",
          "Licensed mental health professional",
          "ESA letter if clinically approved",
          "PSD letter if clinically approved",
          "Secure email delivery",
        ],
        buttonText: "Start Evaluation",
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
        unit: "/ one-time",
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
        title: "ESA + PSD Letter Combo",
        description:
          "Get both ESA and PSD letters through professional mental health evaluations for housing and service dog-related needs.",
        price: "$199",
        unit: "/ one-time",
        features: [
          "Online ESA & PSD evaluation",
          "Licensed mental health professional",
          "ESA letter if clinically approved",
          "PSD letter if clinically approved",
          "Secure email delivery",
        ],
        buttonText: "Start Evaluation",
      },
    ],
  },
};

function FeatureBadgeIcon() {
  return (
    <Image
            quality={90}
      src="/home/price-section-badge.svg"
      alt=""
      width={16}
      height={16}
      className="shrink-0 w-4 h-4 mt-px"
    />
  );
}

function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-1.5">
          <FeatureBadgeIcon />
          <span
            className="text-[14px] italic font-normal leading-[120%] tracking-[-0.03em] text-[#5F6B6F]"
            style={{ fontFamily: "var(--font-lato), Lato, sans-serif" }}
          >
            {f}
          </span>
        </li>
      ))}
    </ul>
  );
}

function PlanButton({ href, children, compact = false }: { href: string; children: React.ReactNode; compact?: boolean }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center min-h-[46px] ${compact ? "px-5 whitespace-nowrap" : "px-8"} py-3 rounded-[42px] text-white font-bold text-[18px] leading-[22px] tracking-[-0.017em] text-center shadow-[0_1px_4px_#E8B92C] hover:opacity-95 transition-opacity`}
      style={{ backgroundImage: TEAL_GRADIENT, fontFamily: "var(--font-lato), Lato, sans-serif" }}
    >
      {children}
    </a>
  );
}

/** Highlighted "Not Sure Which One?" card. Shared by the home/PSD/pricing section and the state pages. */
export function HelpPlanCard({ ctaHref = "#how-it-works", className = "" }: { ctaHref?: string; className?: string }) {
  return (
    <div className={`w-full max-w-[340px] lg:max-w-none lg:w-[308px] lg:min-h-[486px] shrink-0 rounded-[28px] bg-[#E8B92C] p-1 lg:pt-[10px] shadow-[0_8px_18px_rgba(0,0,0,0.1),0_33px_33px_rgba(0,0,0,0.09),0_73px_44px_rgba(0,0,0,0.05)] flex flex-col ${className}`}>
      <div className="flex-1 w-full bg-white rounded-[24px] px-8 pt-[30px] lg:pt-[15px] pb-8 shadow-[0_2px_4px_-2px_rgba(0,0,0,0.12)] flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <h3 className="font-heading text-[20px] font-bold text-[#2E5A66] leading-[28px]">{HELP_CARD.title}</h3>
            <p className="text-[14px] text-[#666666] font-semibold leading-[26px] font-sans">{HELP_CARD.description}</p>
          </div>
          <FeatureList features={HELP_CARD.features} />
        </div>
        <div className="flex justify-center mt-auto">
          <PlanButton href={ctaHref} compact>{HELP_CARD.buttonText}</PlanButton>
        </div>
      </div>
    </div>
  );
}

interface PricingSectionProps {
  bgColor?: string;
  /** Which plan set the toggle starts on. */
  defaultPlan?: PlanType;
  ctaHref?: string;
}

export function PricingSection({
  bgColor = "bg-[#FAF7F2]",
  defaultPlan = "esa",
  ctaHref = "#how-it-works",
}: PricingSectionProps) {
  const [active, setActive] = useState<PlanType>(defaultPlan);
  const plan = PLANS[active];

  return (
    <section id="pricing" className={`py-16 lg:py-24 ${bgColor} relative overflow-hidden`}>
      <div className="max-w-[1442px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-10">
        {/* Heading */}
        <div className="text-center max-w-[709px] mx-auto space-y-4">
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-[44px] font-bold text-[#2E5A66] leading-tight sm:leading-[46px] lg:leading-[54px] tracking-[-0.00015em]">
            Plans &amp; Pricing
          </h2>
          <p className="text-[#5F6B6F] text-base sm:text-[18px] font-semibold leading-[30px] font-sans">
            {plan.description}
          </p>
        </div>

        {/* Payment mode toggle */}
        <div className="flex w-full max-w-[320px] rounded-full bg-white px-[7px] py-1" role="tablist" aria-label="Letter type">
          {(Object.keys(PLANS) as PlanType[]).map((key) => {
            const isActive = key === active;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(key)}
                className={`flex-1 h-[42px] rounded-full font-sans font-semibold text-[16px] leading-[26px] transition-colors cursor-pointer ${
                  isActive
                    ? "bg-[#2E5A66] text-[#FFFBF5] shadow-[0_2px_4px_-2px_rgba(0,0,0,0.12)]"
                    : "text-[#254D3C] hover:bg-[#2E5A66]/5"
                }`}
              >
                {PLANS[key].tabLabel}
              </button>
            );
          })}
        </div>

        {/* Plan cards */}
        <div className="relative w-full max-w-[972px]">
          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-6 lg:gap-4">
            {plan.cards.map((card) => (
              <div
                key={card.title}
                className="relative w-full max-w-[340px] lg:max-w-none lg:w-[300px] lg:min-h-[486px] shrink-0 bg-white rounded-[24px] border border-[#E1E1E1] px-8 pt-[30px] pb-8 shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1)] flex flex-col justify-between gap-8"
              >
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-heading text-[20px] font-bold text-[#2E5A66] leading-[28px]">{card.title}</h3>
                      <p className="text-[14px] text-[#666666] font-semibold leading-[26px] font-sans">{card.description}</p>
                    </div>
                    <div className="flex flex-wrap items-baseline gap-1">
                      <span className="font-heading text-[24px] font-bold text-[#2E5A66] leading-[32px]">{card.price}</span>
                      <span className="text-[14px] text-[#5F6B6F] font-semibold leading-[26px] font-sans">{card.unit}</span>
                    </div>
                  </div>
                  <FeatureList features={card.features} />
                </div>
                <div className="flex justify-center mt-auto">
                  <PlanButton href={ctaHref}>{card.buttonText}</PlanButton>
                </div>
              </div>
            ))}

            <HelpPlanCard ctaHref={ctaHref} />
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
