"use client";

import React from "react";
import Image from "next/image";
import { StateData } from "@/data/statesData";
import { CtaButton } from "@/components/common/CtaButton";

const FINANCIAL_ICONS = [
  "/ESA ICons/Icon-20.svg",
  "/ESA ICons/Icon-28.svg",
  "/ESA ICons/Icon-10.svg",
];

const EMOTIONAL_ICONS = [
  "/ESA ICons/Icon-29.svg",
  "/ESA ICons/Icon-30.svg",
  "/ESA ICons/Icon-17.svg",
];

function BenefitCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-white rounded-[18px] border border-[#EAE5DC] shadow-[0px_1px_4px_rgba(0,0,0,0.08)] p-4 sm:p-5 flex flex-col items-start gap-3 h-full text-left">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F6F1E8] shrink-0">
        <Image src={icon} alt={title} width={26} height={26} unoptimized className="h-[26px] w-[26px] object-contain" />
      </div>
      <h4 className="font-heading text-[18px] sm:text-[20px] font-bold text-primary leading-snug">{title}</h4>
      <p className="font-sans text-[14px] sm:text-[15px] font-medium leading-6 text-[#5F6B6F]">{description}</p>
    </div>
  );
}

export function StateBenefitsSection({ data }: { data: StateData }) {
  const stateName = data.name;

  const defaultFinancialBenefits = [
    {
      title: "Comfortable Housing with Your ESA",
      description: `${stateName} tenants may request reasonable housing accommodations with their ESAs even in no-pet policy localities.`,
      icon: "/states/whomayqualifies-california_chronicworry.svg",
    },
    {
      title: "Avoid Extra Pet-Related Costs",
      description: `When valid ESA documentation is presented, ${stateName} landlords are prohibited from charging pet rent, deposits, or extra fees.`,
      icon: "/states/california-benefits-workplaceconsideration.svg",
    },
    {
      title: "No Breed, Weight, or Size Limits",
      description: `Emotional support animals are not subject to standard breed, size, or weight limits by ${stateName} housing providers.`,
      icon: "/states/california-benefits-workplaceconsideration.svg",
    },
  ];

  const defaultEmotionalBenefits = [
    {
      title: "Supports Stress and Anxiety Relief",
      description:
        "Having an ESA nearby helps reduce anxiety levels and bring a calming presence during overwhelming high-stress situations.",
      icon: "/states/whomayqualifies-panicattack.svg",
    },
    {
      title: "Encourages Emotional Balance",
      description:
        "Ongoing companionship from an ESA provides continuous reassurance and comfort to maintain consistent emotional well-being.",
      icon: "/states/california-benefits-strongersense.svg",
    },
    {
      title: "Improves Daily Structure and Meaning",
      description:
        "Caring for an animal helps establish daily routine, generate responsibility, and add meaningful purpose to everyday life.",
      icon: "/states/california-benefits-strongersense.svg",
    },
  ];

  const financialBenefits = data.financialBenefits && data.financialBenefits.length > 0
    ? data.financialBenefits
    : defaultFinancialBenefits;

  const emotionalBenefits = data.emotionalBenefits && data.emotionalBenefits.length > 0
    ? data.emotionalBenefits
    : defaultEmotionalBenefits;

  const title = data.benefitsTitle || `Benefits of Having an ESA Letter in ${stateName}`;
  const subtitle = data.benefitsSubtitle || `A properly issued emotional support animal letter in ${stateName} can help residents obtain housing accommodations while also promoting emotional well-being and everyday stability.`;
  const financialHeading = data.financialBenefitsHeading || "Financial Benefits :";
  const emotionalHeading = data.emotionalBenefitsHeading || "Emotional Benefits :";
  const refundNote = data.benefitsRefundNote === ""
    ? ""
    : (data.benefitsRefundNote || "If not approved after your evaluation? You get a full refund.");

  const isStateWhoBenefits = Boolean(data.benefitsImage?.includes("statewhobenefits"));

  return (
    <section className="w-full bg-white overflow-hidden relative z-10">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(420px,46%)] lg:items-stretch">
          <div className="order-1 lg:order-2 relative flex w-full min-h-[280px] sm:min-h-[420px] lg:min-h-full">
            <div className="sm:hidden relative w-full aspect-[390/513]">
              <Image
            quality={90}
                src={data.benefitsImageMobile ?? "/states/californina-benefits-mobile.webp"}
                alt={`Benefits of Having an ESA Letter in ${stateName} Mobile View`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 639px) 100vw, 1px"
              />
              <div className="absolute bottom-0 left-[36.4%] -translate-x-1/2 translate-y-1/2 z-10 w-10 h-10">
                <Image
            quality={90}
                  src="/states/whomayqualifies-california_icon.webp"
                  alt="Heart Icon"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
            </div>

            <div className="hidden sm:block lg:hidden relative w-full aspect-[834/1050]">
              <Image
            quality={90}
                src={data.benefitsImageTablet ?? "/states/californina-benefits-tablet.webp"}
                alt={`Benefits of Having an ESA Letter in ${stateName} Tablet View`}
                fill
                className="object-cover object-top"
                sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
              />
              <div className="absolute bottom-0 left-[33.8%] -translate-x-1/2 translate-y-1/2 z-10 w-12 h-12">
                <Image
            quality={90}
                  src="/states/whomayqualifies-california_icon.webp"
                  alt="Heart Icon"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
            </div>

            <div className="hidden lg:block absolute inset-0">
              <Image
                quality={90}
                src={data.benefitsImage ?? "/states/california-benefits-clinical-issued.webp"}
                alt={`Benefits of Having an ESA Letter in ${stateName}`}
                fill
                className="object-cover object-left pointer-events-none"
                sizes="46vw"
              />
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10 w-11 h-11 xl:w-16 xl:h-16"
                style={{
                  top: data.benefitsBadgeTop ?? (isStateWhoBenefits ? "50%" : "31.3%"),
                  left: data.benefitsBadgeLeft ?? (isStateWhoBenefits ? "3.3%" : "12.6%"),
                }}
              >
                <Image
                  quality={90}
                  src="/states/whomayqualifies-california_icon.webp"
                  alt="Heart Icon"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-1 px-4 sm:px-6 lg:px-10 xl:px-16 py-8 lg:py-14 flex flex-col justify-center">
            <div className="mb-6 lg:mb-8">
              <h2 className="heading-h2 text-primary mb-3">
                {title}
              </h2>
              <p className="body-large max-w-[640px] text-[#5F6B6F]">
                {subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-5 max-w-[860px] mb-8">
              <div className="flex flex-col gap-4">
                <h3 className="font-heading text-[22px] md:text-[26px] font-bold text-primary leading-tight whitespace-pre-line">
                  {financialHeading}
                </h3>
                {financialBenefits.map((item, idx) => (
                  <BenefitCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    icon={FINANCIAL_ICONS[idx % FINANCIAL_ICONS.length]}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-heading text-[22px] md:text-[26px] font-bold text-primary leading-tight whitespace-pre-line">
                  {emotionalHeading}
                </h3>
                {emotionalBenefits.map((item, idx) => (
                  <BenefitCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    icon={EMOTIONAL_ICONS[idx % EMOTIONAL_ICONS.length]}
                  />
                ))}
              </div>
            </div>

            {data.benefitsFootnote ? (
              <p className="body-text text-[#5F6B6F] max-w-[860px] mb-8">
                {data.benefitsFootnote}
              </p>
            ) : null}

            <div className="flex justify-center lg:justify-start">
              <div className="flex flex-col items-center lg:items-start gap-2 w-fit">
                <CtaButton href="#faq" className="w-auto">
                  Apply your ESA Letter Now
                </CtaButton>
                {refundNote ? (
                  <p className="font-sans text-[13px] font-medium text-[#5F6B6F] text-center lg:text-left">
                    {refundNote}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
