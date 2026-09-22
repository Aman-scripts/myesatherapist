"use client";

import React from "react";
import Image from "next/image";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

const LATO = { fontFamily: "var(--font-lato), Lato, sans-serif" } as const;

interface Plan {
  name: string;
  description: string;
  price: string;
  unit: string;
  features: string[];
  cta: string;
}

const NEW_LETTER: Plan = {
  name: "New ESA Letter",
  description: "For first-time applicants",
  price: "$129",
  unit: "/per user",
  features: [
    "Initial evaluation completed by a licensed mental health professional",
    "ESA documentation may be issued based on the provider’s independent evaluation",
    "Intended for housing-related accommodation requests",
    "Evaluation session conducted by phone or secure video",
    "Independent professional determination required",
    "Professional clinical assessment (no guaranteed approval)",
  ],
  cta: "Get Started",
};

const RENEWAL: Plan = {
  name: "ESA Letter Renewal",
  description: "For individuals with an existing ESA letter",
  price: "$129",
  unit: "/per user",
  features: [
    "Evaluation conducted by a state-licensed mental health professional",
    "Scheduled phone or secure video session",
    "Review of your current emotional support–related needs",
    "Updated ESA documentation may be issued if determined appropriate by the provider",
    "Intended for housing accommodation requests",
    "Documentation is typically provided within 24–48 hours following the evaluation.",
    "Professional review (no guaranteed outcome)",
  ],
  cta: "Start Consultation",
};

function CheckBadge() {
  return (
    <span className="flex h-[18px] w-4 shrink-0 items-center">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="6.7" fill="#EDEDED" stroke="#1A1A1A" strokeWidth="1.07" />
        <path d="M5.4 8.1l1.8 1.8 3.4-3.6" stroke="#1A1A1A" strokeWidth="1.07" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function PlanBody({ plan, ctaClassName }: { plan: Plan; ctaClassName?: string }) {
  return (
    <>
      <div className="flex flex-1 flex-col items-start gap-8 self-stretch">
        {/* Plan header + price */}
        <div className="flex flex-col items-start gap-4 self-stretch">
          <div className="flex flex-col items-start gap-1 self-stretch">
            <h3 className="font-heading font-bold text-[20px] leading-7 text-[#2E5A66]">{plan.name}</h3>
            <p className="font-sans font-semibold text-sm leading-[26px] text-[#666666]">{plan.description}</p>
          </div>
          <div className="flex flex-wrap items-end gap-0.5 self-stretch">
            <span className="font-heading font-bold text-4xl leading-[44px] tracking-[-0.00015em] text-[#2E5A66]">
              {plan.price}
            </span>
            <span className="font-sans font-semibold text-sm leading-[26px] text-[#5F6B6F]">{plan.unit}</span>
          </div>
        </div>

        {/* Feature list */}
        <ul className="flex flex-col items-start gap-[10px] self-stretch">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-[6px] self-stretch">
              <CheckBadge />
              <span
                className="flex-1 italic text-sm leading-[120%] tracking-[-0.03em] text-[#5F6B6F]"
                style={LATO}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <a
        href="#how-it-works"
        className={`inline-flex h-[46px] items-center justify-center rounded-[42px] px-8 py-3 text-white font-bold text-[18px] leading-[22px] tracking-[-0.017em] shadow-[0px_1px_4px_#E8B92C] hover:opacity-95 transition-opacity ${ctaClassName ?? ""}`}
        style={{ backgroundImage: TEAL_GRADIENT, ...LATO }}
      >
        {plan.cta}
      </a>
    </>
  );
}

export function EsaRenewalPricing() {
  return (
    <section id="pricing" className="w-full bg-white relative overflow-hidden">
      <div className="mx-auto max-w-[1436px] px-4 sm:px-6 pt-16 pb-16 xl:pt-[69px] xl:pb-[76px] xl:px-0">
        {/* Plans & Pricing block (896px wide, left offset as in the design) */}
        <div className="relative z-10 mx-auto lg:mx-0 lg:ml-4 xl:ml-[13.16%] flex w-full max-w-[894px] flex-col items-center gap-14">
          {/* Heading */}
          <div className="flex w-full max-w-[709px] flex-col items-center gap-4 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[34px] xl:text-[44px] font-bold text-[#2E5A66] leading-tight lg:leading-[42px] xl:leading-[54px] tracking-[-0.00015em]">
              ESA Renewal Pricing
            </h2>
            <p className="font-sans text-base sm:text-[18px] font-semibold leading-[30px] text-[#5F6B6F]">
              Understand your evaluation options and pricing before getting started
            </p>
          </div>

          {/* Plan Cards */}
          <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-4">
            {/* Starter Plan */}
            <div className="flex w-full max-w-[404px] flex-col items-center gap-8 rounded-[24px] border border-[#E1E1E1] bg-white px-8 pt-[30px] pb-8 shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.1)] lg:min-h-[509px]">
              <PlanBody plan={NEW_LETTER} />
            </div>

            {/* Highlighted Plan */}
            <div className="flex w-full max-w-[416px] flex-col items-center gap-[9px] rounded-[28px] bg-[#E8B92C] px-1 pt-[10px] pb-1 shadow-[0px_130px_52px_rgba(0,0,0,0.01),0px_73px_44px_rgba(0,0,0,0.05),0px_33px_33px_rgba(0,0,0,0.09),0px_8px_18px_rgba(0,0,0,0.1)] lg:min-h-[542px]">
              <span
                className="text-[14px] font-bold uppercase leading-[115%] tracking-[0.08em] text-[#2E5A66]"
                style={LATO}
              >
                Most Popular
              </span>
              <div className="flex w-full flex-1 flex-col items-center gap-8 rounded-[24px] bg-white px-8 pt-[30px] pb-8 shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.12)]">
                <PlanBody plan={RENEWAL} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dog paw illustration, bleeding off the right edge (lg and up) */}
      <div className="pointer-events-none absolute z-0 hidden lg:block right-[-110px] bottom-[70px] h-[238px] w-[280px] xl:right-[-11px] xl:bottom-auto xl:top-[465px] xl:h-[308px] xl:w-[362px]">
        <Image
            quality={90}
          src="/home/pricing-section-dog.webp"
          alt="Dog giving paw to woman’s hand"
          fill
          className="object-contain object-left"
        />
      </div>
    </section>
  );
}
