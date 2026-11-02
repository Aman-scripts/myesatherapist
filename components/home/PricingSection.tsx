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
    <Image
      src="/ESA ICons/Icon-46.svg"
      alt="Included"
      width={20}
      height={20}
      unoptimized
      className="shrink-0 w-5 h-5 object-contain"
    />
  );
}

function mobileButtonLabel(text: string) {
  if (text.toLowerCase().startsWith("find your eligibility")) return "Find Your Eligibility";
  return text;
}

function mobilePlanTitle(title: string) {
  if (title.includes("\n")) return title;
  const normalized = title.toLowerCase();
  if (normalized.includes("not sure")) return "Not Sure\nWhich\nOne";
  if (normalized.includes("combo")) return "ESA +\nPSD\nCombo";
  if (normalized.includes("housing")) return "ESA\nLetter -\nHousing";
  if (normalized.includes("service")) return "PSD\nLetter";
  return title;
}

interface PricingSectionProps {
  bgColor?: string;
  defaultPlan?: PlanType;
  ctaHref?: string;
  sectionId?: string;
  sectionClassName?: string;
  heading?: string;
  headingClassName?: string;
  descriptionOverride?: string;
  showTabs?: boolean;
  maxCards?: number;
  popularCardIndex?: number;
  showDog?: boolean;
  cards?: PlanCard[];
  /** Teal header height. Shorter copy, such as renewal subtitles, should use a tighter header so the price sits on the divider. */
  headerHeight?: number;
}

export function PricingSection({
  bgColor = "bg-background",
  defaultPlan = "esa",
  ctaHref = "#how-it-works",
  sectionId = "pricing",
  sectionClassName = "py-16 lg:py-24",
  heading = "Plans & Pricing",
  headingClassName = "heading-h2 capitalize",
  descriptionOverride,
  showTabs = true,
  maxCards,
  popularCardIndex,
  showDog = true,
  cards: cardsOverride,
  headerHeight = 261,
}: PricingSectionProps) {
  const [active, setActive] = useState<PlanType>(defaultPlan);
  const plan = PLANS[active];
  const sourceCards = cardsOverride ?? plan.cards;
  const cards = sourceCards.slice(0, maxCards ?? sourceCards.length);

  return (
    <section id={sectionId} className={`${sectionClassName} ${bgColor} relative overflow-hidden`}>
      <div className="max-w-[1442px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 flex flex-col items-center gap-10">
        {/* Heading */}
        <div className="text-center max-w-[760px] mx-auto space-y-3">
          <h2 className={headingClassName}>
            {heading}
          </h2>
          <p className="body-large">
            {descriptionOverride ?? plan.description}
          </p>
        </div>

        {/* Payment mode toggle (Frame: Payment Mode in Figma, w: 386px, h: 59px) */}
        {showTabs && <div
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
        </div>}

        {/* Plan cards (Frame 1261153813 in Figma: width 972px, height 540px) */}
        <div className={`relative pb-10 ${maxCards === 2 ? "w-fit max-w-full" : "w-full max-w-[972px]"}`}>
          <div className={`relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-[68px] sm:gap-12 ${maxCards === 2 ? "lg:gap-[28px]" : "lg:gap-[16px] lg:justify-between"}`}>
            {cards.map((card, idx) => {
              const isPopular = popularCardIndex !== undefined ? idx === popularCardIndex : !!card.isPopular;

              const mobileCard = (
                <div
                  key={`mobile-${idx}`}
                  className={`sm:hidden relative mx-auto w-full max-w-[350px] ${
                    isPopular
                      ? "rounded-[22px] bg-accent px-1 pb-1 shadow-[0px_4px_12px_rgba(0,0,0,0.1)]"
                      : ""
                  }`}
                >
                  {isPopular && (
                    <div className="flex h-8 items-center justify-center font-sans text-[12px] font-bold uppercase leading-4 tracking-[0.08em] text-body-text">
                      Most Popular
                    </div>
                  )}
                  <div
                    className={`overflow-hidden rounded-[18px] bg-white ${
                      isPopular
                        ? ""
                        : "border border-[#E1E1E1] shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.1)]"
                    }`}
                  >
                    <div className="flex items-stretch">
                      <div className="flex w-[128px] shrink-0 items-start rounded-l-[18px] color-gradient px-4 pb-14 pt-8">
                        <h3 className="heading-h3 whitespace-pre-line text-background">
                          {mobilePlanTitle(card.title)}
                        </h3>
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col px-4 pb-3 pt-5">
                        <div className="flex flex-col gap-2">
                          {card.features.slice(0, 3).map((feature) => (
                            <div key={feature} className="flex items-start gap-2">
                              <span className="flex h-[22px] shrink-0 items-center">
                                <CheckmarkIcon />
                              </span>
                              <span className="min-w-0 font-sans text-[14px] font-semibold leading-[22px] text-body-text">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-auto flex justify-center pt-5">
                          <a
                            href={ctaHref}
                            className="inline-flex h-11 w-fit max-w-full items-center justify-center whitespace-nowrap rounded-full bg-accent px-5 font-sans text-[14px] font-bold leading-5 text-[#1A3D4F] shadow-[0px_1px_4px_rgba(0,0,0,0.15)]"
                          >
                            {mobileButtonLabel(card.buttonText)}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute bottom-0 z-20 flex h-[72px] w-[72px] -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-accent shadow-[0px_1px_4px_rgba(0,0,0,0.15)]"
                    style={{ left: isPopular ? 68 : 64 }}
                  >
                    <span className="font-heading text-[20px] font-bold leading-none text-primary">
                      {card.price}
                    </span>
                  </div>
                </div>
              );

              if (isPopular) {
                return (
                  <React.Fragment key={idx}>
                  {mobileCard}
                  {/* Gold frame wraps the full card, including the button */}
                  <div
                    className="hidden sm:flex w-[310px] self-stretch bg-accent rounded-[20px] pt-[4px] pb-[6px] px-[5px] shadow-[0px_4px_12px_rgba(0,0,0,0.1)] relative flex-col items-center shrink-0"
                  >
                    <div className="h-[32px] flex items-center justify-center font-sans font-bold text-[14px] leading-[26px] text-[#1A3D4F] uppercase tracking-wider shrink-0">
                      MOST POPULAR
                    </div>

                    <div className="w-[300px] flex-1 bg-white rounded-[24px] border border-[#E1E1E1] shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.1)] relative flex flex-col overflow-hidden">
                      <div className="w-[300px] rounded-t-[20px] color-gradient pt-[32px] px-[24px] flex flex-col gap-2 relative text-left shrink-0" style={{ height: headerHeight }}>
                        <h3 className="heading-h3 text-background whitespace-pre-line">
                          {card.title}
                        </h3>
                        <p className="body-text text-background font-semibold">
                          {card.description}
                        </p>
                      </div>

                      <div className="w-[78px] h-[78px] rounded-full bg-accent shadow-[0px_1px_4px_rgba(0,0,0,0.15)] absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-20" style={{ top: headerHeight - 39 }}>
                        <span className="heading-h4 font-heading font-bold text-[#1A3D4F]">
                          {card.price}
                        </span>
                      </div>

                      <div className="pt-[54px] px-[24px] pb-[16px] flex flex-1 flex-col gap-[6px]">
                        {card.features.map((f) => (
                          <div key={f} className="flex items-start gap-[8px]">
                            <span className="mt-[3px] shrink-0"><CheckmarkIcon /></span>
                            <span className="font-sans font-semibold text-[14px] leading-[22px] text-body-text">
                              {f}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto pt-2 pb-7 flex justify-center items-center px-3">
                        <a
                          href={ctaHref}
                          className="inline-flex items-center justify-center w-[154px] h-[50px] rounded-[42px] bg-accent text-[#1A3D4F] font-sans font-semibold text-[16px] leading-[26px] text-center shadow-[0px_2px_4px_rgba(0,0,0,0.15)] hover:opacity-95 transition-opacity"
                        >
                          {card.buttonText}
                        </a>
                      </div>
                    </div>
                  </div>
                  </React.Fragment>
                );
              }

              const isLongButton = card.buttonText.length > 18;

              return (
                <React.Fragment key={idx}>
                {mobileCard}
                {/* Starter Plan: Standard Cards */}
                <div
                  className="hidden sm:flex self-stretch w-[300px] bg-white rounded-[24px] border border-[#E1E1E1] shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.1)] relative flex-col shrink-0 overflow-hidden"
                >
                  {/* Frame 1261153969: Teal Header */}
                  <div className="w-[300px] rounded-t-[20px] color-gradient pt-[32px] px-[24px] flex flex-col gap-2 relative text-left shrink-0" style={{ height: headerHeight }}>
                    <h3 className="heading-h3 text-background whitespace-pre-line">
                      {card.title}
                    </h3>
                    <p className="body-text text-background font-semibold">
                      {card.description}
                    </p>
                  </div>

                  {/* Ellipse 20: Gold Price Circle (78px x 78px, centered on header-body divide) */}
                  <div className="w-[78px] h-[78px] rounded-full bg-accent shadow-[0px_1px_4px_rgba(0,0,0,0.15)] absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-20" style={{ top: headerHeight - 39 }}>
                    <span className="heading-h4 font-heading font-bold text-[#1A3D4F]">
                      {card.price}
                    </span>
                  </div>

                  {/* Feature List (min-h keeps button aligned across cards with 4 vs 5 features) */}
                  <div className="pt-[54px] px-[24px] pb-[16px] flex flex-1 flex-col gap-[8px]">
                    {card.features.map((f) => (
                      <div key={f} className="flex items-start gap-[8px]">
                        <span className="mt-[3px] shrink-0"><CheckmarkIcon /></span>
                        <span className="font-sans font-semibold text-[14px] leading-[22px] text-body-text">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Button: Inside the card, centered with padding below */}
                  <div className="mt-auto pt-2 pb-7 flex justify-center items-center px-3">
                    <a
                      href={ctaHref}
                      className={`inline-flex items-center justify-center h-[50px] rounded-[42px] bg-accent text-[#1A3D4F] font-sans font-semibold text-[16px] leading-[26px] text-center shadow-[0px_2px_4px_rgba(0,0,0,0.15)] hover:opacity-95 transition-opacity ${
                        isLongButton
                          ? "w-[272px] px-2 whitespace-nowrap"
                          : "w-[154px]"
                      }`}
                    >
                      {card.buttonText}
                    </a>
                  </div>
                </div>
                </React.Fragment>
              );
            })}
          </div>

          {/* Dog & hand artwork (Figma: width 245px, height 209px, left: 1207px, top: 494px, z-index: 3).
              Starts exactly at the last card's right edge and sits level with the price circles. */}
          {showDog && <div className="hidden lg:block absolute left-[calc(100%+1px)] w-[245px] h-[209px] pointer-events-none z-20" style={{ top: headerHeight === 261 ? 279 : headerHeight + 20 }}>
            <Image
              quality={80}
              src="/home/pricing-section-dog.webp"
              alt="Dog giving paw to woman hand"
              width={245}
              height={209}
              className="w-[245px] h-[209px] object-contain object-left pointer-events-none"
              loading="lazy"
            />
          </div>}
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
          className="inline-flex items-center justify-center w-[272px] h-[50px] px-2 rounded-[42px] bg-accent text-primary font-sans font-semibold text-[16px] leading-[26px] whitespace-nowrap text-center shadow-[0px_2px_4px_rgba(0,0,0,0.15)] hover:opacity-95 transition-opacity"
        >
          Find Your Eligibility in Minutes
        </a>
      </div>
    </div>
  );
}

