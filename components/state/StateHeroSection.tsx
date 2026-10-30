"use client";

import React, { useState } from "react";
import { BreakpointImage } from "@/components/common/BreakpointImage";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { StateData } from "@/data/statesData";
import { ReviewBadges } from "@/components/common/ReviewBadges";
import { CtaButton } from "@/components/common/CtaButton";
import { DesktopScaleWrapper } from "@/components/common/DesktopScaleWrapper";
import { STATE_INDEX } from "@/data/stateIndex";

const statsData = [
  { value: "64,739+", label: "ESA Evaluations" },
  { value: "5+", label: "Years Serving" },
  { value: "100%", label: "Moneyback Guarantee" },
];


function renderHeroTitle(title?: string, stateName?: string) {
  if (!title) {
    return (
      <>
        {stateName} ESA
        <br />
        Letter Evaluations by
        <br />
        Licensed Therapists
      </>
    );
  }

  if (title.includes("\n")) {
    return title.split("\n").map((line, i, arr) => (
      <React.Fragment key={i}>
        {line}
        {i < arr.length - 1 && <br />}
      </React.Fragment>
    ));
  }

  // Break standard titles into exactly 3 balanced lines:
  // e.g. "ESA Letter Evaluations by Alaska Licensed Professionals" ->
  // Line 1: ESA Letter
  // Line 2: Evaluations by
  // Line 3: Alaska Licensed Professionals
  const match = title.match(/^(.*?ESA\s*Letter|.*?ESA)\s+(Evaluations\s+by)\s+(.*)$/i);
  if (match) {
    return (
      <>
        {match[1]}
        <br />
        {match[2]}
        <br />
        <span>{match[3]}</span>
      </>
    );
  }

  return title;
}

type HeroFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  state: string;
};

interface EvaluationFormCardProps {
  formData: HeroFormData;
  setFormData: React.Dispatch<React.SetStateAction<HeroFormData>>;
  handleSubmit: (e: React.FormEvent) => void;
  isSubmitted: boolean;
  compact?: boolean;
  stateName: string;
}

// Figma: 44px fields, 5px radius, 0.2px body-text border on a translucent cream fill
const INPUT_CLASS =
  "w-full h-[44px] rounded-[5px] border-[0.2px] border-body-text bg-[rgba(250,247,242,0.3)] px-3.5 text-[16px] lg:text-[14px] font-medium text-body-text placeholder:text-body-text/70 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-all font-sans";

function EvaluationFormCard({
  formData,
  setFormData,
  handleSubmit,
  isSubmitted,
  compact = false,
  stateName,
}: EvaluationFormCardProps) {
  const labelClass = `block text-body-text mb-2 ${compact ? "body-small" : "body-text"}`;

  return (
    <div
      className={`w-full bg-[rgba(245,166,54,0.26)] backdrop-blur-[18px] border border-[rgba(245,166,54,0.09)] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] ${
        compact ? "rounded-[22px] p-4 sm:p-5" : "rounded-[30px] px-[18px] pt-[30px] pb-[34px]"
      }`}
    >
      <div className={`text-center ${compact ? "mb-4" : "mb-[30px]"}`}>
        <h2 className={`font-heading font-bold text-primary ${compact ? "text-[24px] leading-[32px]" : "text-[36px] leading-[44px]"}`}>
          Start Your Evaluation
        </h2>
        <p className={`text-body-text mt-1 ${compact ? "body-small" : "body-large"}`}>
          Free consultation - takes less than 5 minutes.
        </p>
      </div>

      {isSubmitted ? (
        <div className="py-6 text-center space-y-3 animate-fadeIn">
          <div className="w-12 h-12 rounded-full color-gradient flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-7 h-7 text-accent" />
          </div>
          <div className="heading-h4 text-primary">Evaluation Request Received!</div>
          <p className="body-small text-body-text">
            Our {stateName} intake specialist is reviewing your submission.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={compact ? "space-y-3" : "space-y-[19px]"}>
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            <div>
              <label className={labelClass}>First Name</label>
              <input
                type="text"
                required
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className={INPUT_CLASS}
              />
            </div>
            <div>
              <label className={labelClass}>Last Name</label>
              <input
                type="text"
                required
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className={INPUT_CLASS}
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Email Address</label>
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={INPUT_CLASS}
            />
          </div>

          <div>
            <label className={labelClass}>Phone Number</label>
            <input
              type="tel"
              required
              placeholder="(555) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={INPUT_CLASS}
            />
          </div>

          <div>
            <label className={labelClass}>Select your State</label>
            <div className="relative">
              <select
                required
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                className={`${INPUT_CLASS} appearance-none pr-10 cursor-pointer`}
              >
                {STATE_INDEX.map((s) => (
                  <option key={s.slug} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-body-text" />
            </div>
          </div>

          <div className={`flex justify-center ${compact ? "pt-2" : "pt-[21px]"}`}>
            <CtaButton type="submit" variant="accent" className={compact ? "w-full" : "w-[290px]"}>
              Start Your Free Evaluation
            </CtaButton>
          </div>

          <p className="body-small text-center text-body-text !mt-2">
            Your information is 100% secure and private.
          </p>
        </form>
      )}
    </div>
  );
}

export function StateHeroSection({ data }: { data: StateData }) {
  const stateName = data.name;
  const [formData, setFormData] = useState<HeroFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: stateName,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      const faqEl = document.getElementById("faq");
      if (faqEl) {
        faqEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 1500);
  };

  const subtitle =
    data.heroSubtitle ||
    `Speak to ${stateName}'s mental health professionals for personalized wellness evaluations. ESA documentation in ${stateName} is issued through a legitimate clinical assessment that aligns with federal housing guidelines.`;

  // Desktop lets the headline wrap naturally inside the 560px Figma text column
  const desktopTitle = data.heroTitle
    ? data.heroTitle.replace(/\n/g, " ")
    : `${stateName} ESA Letter Evaluations by Licensed Therapists`;

  return (
    <section className="relative w-full bg-background overflow-hidden">
      {/* 1. DESKTOP VIEW — 1440px coordinates from the Figma "ESA - California" hero */}
      <DesktopScaleWrapper
        wrapperClassName="bg-background"
        background={
          <BreakpointImage
            media="(min-width: 1024px)"
            quality={90}
            src="/states/california-hero-section.webp"
            alt={`${stateName} ESA Evaluations with Licensed Therapists`}
            fill
            className="object-cover object-top pointer-events-none"
            sizes="(min-width: 1024px) 100vw, 1px"
          />
        }
      >
        <div className="relative w-[1440px] h-[808px]">
          <div className="absolute left-[82px] top-[82px] w-[560px] z-20">
            {/* Stat Pills */}
            <div className="flex items-center gap-3">
              {statsData.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center bg-background py-2.5 px-4 rounded-[30px] text-center min-w-[177px] h-[77px]"
                >
                  <span className="body-large text-color-gradient">{stat.value}</span>
                  <span className="body-small text-[#6B6B6B] mt-0.5 whitespace-nowrap">{stat.label}</span>
                </div>
              ))}
            </div>

            <h1 className="heading-h1 text-primary capitalize mt-6">{desktopTitle}</h1>

            <p className="body-large text-body-text mt-4 max-w-[460px]">{subtitle}</p>

            <div className="mt-6">
              <ReviewBadges />
            </div>
          </div>

          <div className="absolute right-[81px] top-[31px] w-[464px] z-20">
            <EvaluationFormCard
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
              isSubmitted={isSubmitted}
              stateName={stateName}
            />
          </div>
        </div>
      </DesktopScaleWrapper>

      {/* 2. TABLET VIEW */}
      <div className="hidden sm:block lg:hidden relative w-full aspect-[834/1774] max-w-[834px] mx-auto overflow-hidden">
        <BreakpointImage
          media="(min-width: 640px) and (max-width: 1023px)"
          quality={90}
          src="/states/california-hero-section-tablet.webp"
          alt={`${stateName} ESA Evaluations Tablet View`}
          fill
          className="object-cover object-top pointer-events-none"
          sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
        />

        <div className="absolute top-0 inset-x-0 z-10 pt-8 sm:pt-10 px-6 sm:px-10">
          <div className="text-center space-y-3 max-w-[620px] mx-auto">
            <h1 className="heading-h1 text-primary capitalize text-center">
              {renderHeroTitle(data.heroTitle, stateName)}
            </h1>
            <p className="body-text text-body-text text-center max-w-[560px] mx-auto">{subtitle}</p>
          </div>
        </div>

        <div className="absolute top-[56%] left-1/2 -translate-x-1/2 z-10 w-full max-w-[480px] px-6 sm:px-10">
          <EvaluationFormCard
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            isSubmitted={isSubmitted}
            stateName={stateName}
          />
        </div>
      </div>

      {/* 3. MOBILE VIEW */}
      <div className="sm:hidden relative w-full aspect-[390/1380] overflow-hidden">
        <BreakpointImage
          media="(max-width: 639px)"
          quality={70}
          src="/states/california-hero-section-mobile.webp"
          alt={`${stateName} ESA Evaluations Mobile View`}
          fill
          className="object-cover object-top pointer-events-none"
          sizes="(max-width: 639px) 430px, 1px"
        />

        <div className="absolute top-0 inset-x-0 z-10 pt-5 px-4">
          <div className="text-center space-y-2 pt-1 px-1 max-w-[360px] mx-auto">
            <h1 className="heading-h1 text-primary capitalize text-center">
              {renderHeroTitle(data.heroTitle, stateName)}
            </h1>
            <p className="body-small text-body-text text-center max-w-[330px] mx-auto">{subtitle}</p>
          </div>
        </div>

        <div className="absolute top-[52%] left-1/2 -translate-x-1/2 z-10 w-full max-w-[350px] px-4">
          <EvaluationFormCard
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            isSubmitted={isSubmitted}
            compact
            stateName={stateName}
          />
        </div>
      </div>
    </section>
  );
}
