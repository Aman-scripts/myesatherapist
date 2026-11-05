import React from "react";
import Image from "next/image";
import { PricingTabSwitcher } from "./PricingTabSwitcher";
import { MaybeStateModalButton } from "@/components/common/MaybeStateModalButton";
import { isEvaluationCtaLabel, type StateModalLetter } from "@/components/common/evaluationCta";

const TEAL_GRADIENT = "var(--color-gradient)";

export type PlanType = "esa" | "psd";

export interface PlanCard {
  title: string;
  description: string;
  price: string;
  isPopular?: boolean;
  features: string[];
  buttonText: string;
}

export interface PlanSet {
  tabLabel: string;
  description: string;
  cards: [PlanCard, PlanCard, PlanCard];
}

export const PLANS: Record<PlanType, PlanSet> = {
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
        buttonText: "Start Your ESA Evaluation",
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
          "Online PSD evaluation",
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
    <Image quality={90}
      src="/esa-icons/icon-46.svg"
      alt=""
      width={20}
          sizes="20px"
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

function cardLetter(buttonText: string, directSurvey: boolean): StateModalLetter | undefined {
  if (directSurvey && isEvaluationCtaLabel(buttonText)) return "psd";
  return undefined;
}

interface RenderCardsProps {
  cards: PlanCard[];
  maxCards?: number;
  popularCardIndex?: number;
  headerHeight: number;
  showDog: boolean;
  ctaHref: string;
  directSurvey?: boolean;
  mobileFeatureLimit?: number;
}

function RenderCardsContainer({
  cards,
  maxCards,
  popularCardIndex,
  headerHeight,
  showDog,
  ctaHref,
  directSurvey = false,
  mobileFeatureLimit = 3,
}: RenderCardsProps) {
  return (
    <div className={`relative pb-10 ${maxCards === 2 ? "w-fit max-w-full" : "w-full max-w-[972px]"}`}>
      <div className={`relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-[68px] sm:gap-12 ${maxCards === 2 ? "lg:gap-[28px]" : "lg:gap-[16px] lg:justify-between"}`}>
        {cards.map((card, idx) => {
          const isPopular = popularCardIndex !== undefined ? idx === popularCardIndex : !!card.isPopular;
          const letter = cardLetter(card.buttonText, directSurvey);
          const isLongButton = card.buttonText.length > 18;
          const buttonWidth = isLongButton ? "w-[272px] px-2 whitespace-nowrap" : "w-[154px]";

          return (
            <div
              key={card.title}
              className={
                isPopular
                  ? "relative mx-auto w-full max-w-[350px] rounded-[22px] bg-accent px-1 pb-1 shadow-[0px_4px_12px_rgba(0,0,0,0.1)] sm:flex sm:w-[310px] sm:max-w-none sm:shrink-0 sm:flex-col sm:self-stretch sm:rounded-[20px] sm:px-[5px] sm:pb-[6px] sm:pt-1"
                  : "relative mx-auto w-full max-w-[350px] sm:flex sm:w-[300px] sm:max-w-none sm:shrink-0 sm:flex-col sm:self-stretch"
              }
            >
              {isPopular && (
                <div className="flex h-8 items-center justify-center font-sans text-[12px] font-bold uppercase leading-4 tracking-[0.08em] text-body-text sm:h-8 sm:text-[14px] sm:leading-[26px] sm:tracking-wider sm:text-primary">
                  Most Popular
                </div>
              )}
              <div
                className={`overflow-hidden bg-white sm:flex sm:min-h-0 sm:flex-1 sm:flex-col sm:rounded-[24px] ${
                  isPopular
                    ? "rounded-[18px] sm:border sm:border-[#E1E1E1] sm:shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.1)]"
                    : "rounded-[18px] border border-[#E1E1E1] shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.1)] sm:rounded-[24px]"
                }`}
              >
                <div className="flex min-h-0 flex-1 items-stretch sm:flex-col">
                  <div
                    className="relative flex w-[128px] shrink-0 flex-col items-center justify-between gap-3 rounded-l-[18px] color-gradient px-2 py-4 text-center sm:min-h-[var(--card-header)] sm:w-full sm:items-start sm:justify-start sm:gap-0 sm:rounded-l-none sm:rounded-t-[20px] sm:px-6 sm:py-0 sm:pb-0 sm:pt-[22px] sm:text-left"
                    style={{ ["--card-header" as string]: `${headerHeight}px` }}
                  >
                    <div className="w-full">
                      <h3 className="heading-h3 w-full whitespace-pre-line text-center text-background sm:text-left">
                        {card.title}
                      </h3>
                      <p className="body-text text-background mt-2 hidden sm:block">{card.description}</p>
                    </div>
                    <div className="relative z-20 flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-accent shadow-[0px_1px_4px_rgba(0,0,0,0.15)] sm:absolute sm:bottom-0 sm:left-1/2 sm:h-[78px] sm:w-[78px] sm:-translate-x-1/2 sm:translate-y-1/2">
                      <span className="font-heading text-[18px] font-bold leading-none text-primary sm:text-[28px]">
                        {card.price}
                      </span>
                    </div>
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col px-4 pb-3 pt-5 sm:px-6 sm:pb-4 sm:pt-[54px]">
                    <div className="flex flex-1 flex-col gap-2 sm:gap-2">
                      {card.features.map((feature, featureIndex) => (
                        <div
                          key={feature}
                          className={`items-start gap-2 ${featureIndex < mobileFeatureLimit ? "flex" : "hidden sm:flex"}`}
                        >
                          <span className="mt-[3px] flex h-[22px] shrink-0 items-center">
                            <CheckmarkIcon />
                          </span>
                          <span className="body-small min-w-0 text-body-text">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className={`mt-auto flex items-end justify-center px-0 pt-5 sm:px-3 sm:pb-7 sm:pt-6 ${isPopular ? "" : "lg:mb-[6px]"}`}>
                      <MaybeStateModalButton
                        href={ctaHref}
                        letter={letter}
                        className={`inline-flex items-center justify-center rounded-full bg-accent text-center font-sans font-bold text-primary shadow-[0px_1px_4px_rgba(0,0,0,0.15)] sm:h-[52px] sm:rounded-[42px] sm:font-semibold sm:shadow-[0px_2px_4px_rgba(0,0,0,0.15)] ${
                          isLongButton
                            ? "h-auto min-h-11 w-full max-w-full whitespace-normal px-3 py-2 text-[14px] leading-5 sm:w-full sm:px-4 sm:text-[16px] sm:leading-5"
                            : `h-11 w-fit whitespace-nowrap px-5 text-[14px] leading-5 sm:w-[154px] sm:text-[16px] sm:leading-[26px] ${buttonWidth}`
                        }`}
                      >
                        <span className="sm:hidden">{mobileButtonLabel(card.buttonText)}</span>
                        <span className={`hidden sm:block ${isLongButton ? "w-full min-w-0 whitespace-normal" : ""}`}>{card.buttonText}</span>
                      </MaybeStateModalButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {showDog && (
        <div
          className="hidden lg:block absolute left-[calc(100%+1px)] w-[245px] h-[209px] pointer-events-none z-20"
          style={{ top: headerHeight === 261 || headerHeight === 272 ? 279 : headerHeight + 20 }}
        >
          <Image
            quality={90}
            src="/home/pricing-section-dog.webp"
            alt="Dog giving paw to woman hand"
            width={245}
          sizes="245px"
            height={209}
            className="w-[245px] h-[209px] object-contain object-left pointer-events-none"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
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
  headerHeight?: number;
  mobileFeatureLimit?: number;
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
  headerHeight = 272,
  mobileFeatureLimit,
}: PricingSectionProps) {
  const plan = PLANS[defaultPlan];
  const sourceCards = cardsOverride ?? plan.cards;
  const cards = sourceCards.slice(0, maxCards ?? sourceCards.length);

  return (
    <section id={sectionId} className={`${sectionClassName} ${bgColor} relative overflow-hidden`}>
      <div className="max-w-[1442px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 flex flex-col items-center gap-10">
        <div className="text-center max-w-[760px] mx-auto space-y-3">
          <h2 className={headingClassName}>
            {heading}
          </h2>
          <p className="body-large">
            {descriptionOverride ?? plan.description}
          </p>
        </div>

        {showTabs ? (
          <PricingTabSwitcher
            esaLabel={PLANS.esa.tabLabel}
            psdLabel={PLANS.psd.tabLabel}
            defaultTab={defaultPlan}
            esaContent={
              <RenderCardsContainer
                cards={cardsOverride ?? PLANS.esa.cards.slice(0, maxCards ?? PLANS.esa.cards.length)}
                maxCards={maxCards}
                popularCardIndex={popularCardIndex}
                headerHeight={headerHeight}
                showDog={showDog}
                ctaHref={ctaHref}
                mobileFeatureLimit={mobileFeatureLimit}
              />
            }
            psdContent={
              <RenderCardsContainer
                cards={cardsOverride ?? PLANS.psd.cards.slice(0, maxCards ?? PLANS.psd.cards.length)}
                maxCards={maxCards}
                popularCardIndex={popularCardIndex}
                headerHeight={headerHeight}
                showDog={showDog}
                ctaHref={ctaHref}
                directSurvey
                mobileFeatureLimit={mobileFeatureLimit}
              />
            }
          />
        ) : (
          <RenderCardsContainer
            cards={cards}
            maxCards={maxCards}
            popularCardIndex={popularCardIndex}
            headerHeight={headerHeight}
            showDog={showDog}
            ctaHref={ctaHref}
            directSurvey={defaultPlan === "psd"}
            mobileFeatureLimit={mobileFeatureLimit}
          />
        )}
      </div>
    </section>
  );
}

export function HelpPlanCard({ ctaHref = "#how-it-works", className = "" }: { ctaHref?: string; className?: string }) {
  return (
    <div className={`w-[300px] bg-white rounded-[24px] border border-[#E1E1E1] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] relative flex flex-col shrink-0 overflow-hidden ${className}`}>
      <div className="w-[300px] h-[285px] rounded-t-[24px] color-gradient pt-[22px] px-[24px] flex flex-col gap-2 relative text-left shrink-0">
        <h3 className="heading-h3 text-background capitalize">
          Not Sure Which One?
        </h3>
        <p className="body-text text-background font-semibold">
          Your needs are unique. Let’s find the right option.
        </p>
      </div>

      <div className="w-[78px] h-[78px] rounded-full bg-accent shadow-[0px_2px_6px_rgba(0,0,0,0.15)] flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-[246px] z-20">
        <span className="heading-h4 font-heading font-bold text-primary">
          ?
        </span>
      </div>

      <div className="pt-[54px] px-[24px] pb-[16px] flex flex-col gap-[8px] min-h-[220px]">
        {[
          "Help identifying the right documentation",
          "ESA and PSD needs assessed",
          "Guidance from a licensed professional",
          "Clear next steps after evaluation",
        ].map((f) => (
          <div key={f} className="flex items-center gap-[8px] min-h-[26px]">
            <CheckmarkIcon />
            <span className="body-small text-body-text">
              {f}
            </span>
          </div>
        ))}
      </div>

      <div className="pt-2 pb-7 flex justify-center items-center px-3">
        <MaybeStateModalButton
          href={ctaHref}
          className="inline-flex w-full items-center justify-center whitespace-normal rounded-[42px] bg-accent px-4 py-2 text-center font-sans text-[16px] font-bold leading-5 text-primary shadow-[0px_2px_4px_rgba(0,0,0,0.15)] hover:opacity-95 transition-opacity min-h-[52px]"
        >
          Find Your Eligibility in Minutes
        </MaybeStateModalButton>
      </div>
    </div>
  );
}
