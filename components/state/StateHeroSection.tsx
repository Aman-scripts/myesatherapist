"use client";

import React, { useState } from "react";
import { BreakpointImage } from "@/components/common/BreakpointImage";
import { ChevronDown } from "lucide-react";
import { StateData } from "@/data/statesData";
import { ReviewBadges } from "@/components/common/ReviewBadges";
import { HeroStatPills } from "@/components/common/HeroStatPills";
import { CtaButton } from "@/components/common/CtaButton";
import { SiteBreadcrumbs } from "@/components/seo/SiteBreadcrumbs";
import { STATE_INDEX } from "@/data/stateIndex";
import {
  evaluationDestination,
  formatPhone,
  trackHeallySubmit,
  validateEvaluationLead,
  type EvaluationErrors,
} from "@/lib/evaluationHandoff";

const statsData = [
  { value: "64,739+", label: "ESA Evaluations" },
  { value: "7+", label: "Years Serving" },
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
  terms: boolean;
  promotion: boolean;
};

interface EvaluationFormCardProps {
  formData: HeroFormData;
  setFormData: React.Dispatch<React.SetStateAction<HeroFormData>>;
  handleSubmit: (e: React.FormEvent) => void;
  errors: EvaluationErrors;
  compact?: boolean;
  /** Desktop hero card: shorter rhythm so the card clears the floating trust bar. */
  tight?: boolean;
  titleAs?: "h2" | "p";
}

// Figma: 44px fields, 5px radius, 0.2px body-text border on a translucent cream fill
const INPUT_CLASS =
  "w-full h-[44px] rounded-[5px] border-[0.2px] border-body-text bg-[rgba(250,247,242,0.3)] px-3.5 text-[16px] lg:text-[14px] font-medium text-body-text placeholder:text-body-text/70 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-all font-sans";

function EvaluationFormCard({
  formData,
  setFormData,
  handleSubmit,
  errors,
  compact = false,
  tight = false,
  titleAs = "p",
}: EvaluationFormCardProps) {
  const labelClass = "block whitespace-nowrap body-text text-body-text mb-1";

  return (
    <div
      data-state-hero-form
      className={`w-full bg-[rgba(245,166,54,0.26)] backdrop-blur-[18px] border border-[rgba(245,166,54,0.09)] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] ${
        compact
          ? "rounded-[22px] p-4 sm:p-5"
          : tight
            ? "rounded-[30px] px-[18px] pt-[22px] pb-5"
            : "rounded-[30px] px-[18px] pt-[30px] pb-[34px]"
      }`}
    >
      <div className={`text-center ${compact || tight ? "mb-4" : "mb-[30px]"}`}>
        {titleAs === "h2" ? (
          <h2 className={`font-heading font-bold text-primary ${compact ? "" : "text-[36px] leading-[44px]"}`}>
            Start Your Evaluation
          </h2>
        ) : (
          <p className={`font-heading font-bold text-primary ${compact ? "" : "text-[36px] leading-[44px]"}`}>
            Start Your Evaluation
          </p>
        )}
        <p className={`text-body-text mt-1 ${compact ? "body-text" : "body-large"}`}>
          Take the first step toward your ESA letter evaluation.
        </p>
      </div>

      <form noValidate onSubmit={handleSubmit} className={compact || tight ? "space-y-3" : "space-y-[19px]"}>
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
              {errors.firstName && <p className="body-small mt-1 text-[#c00]">{errors.firstName}</p>}
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
              {errors.lastName && <p className="body-small mt-1 text-[#c00]">{errors.lastName}</p>}
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
            {errors.email && <p className="body-small mt-1 text-[#c00]">{errors.email}</p>}
          </div>

          <div>
            <label className={labelClass}>Phone Number</label>
            <input
              type="tel"
              required
              inputMode="numeric"
              placeholder="999-999-9999"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
              className={INPUT_CLASS}
            />
            {errors.phone && <p className="body-small mt-1 text-[#c00]">{errors.phone}</p>}
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

          <div className="space-y-2">
            <label className="flex items-start gap-2 text-left body-small text-body-text">
              <input
                type="checkbox"
                checked={formData.terms}
                onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                className="mt-1 h-4 w-4 shrink-0 accent-primary"
              />
              <span className="min-w-0 flex-1 text-left">
                I accept the{" "}
                <a href="/terms-of-use/" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Terms and Conditions*
                </a>
              </span>
            </label>
            {errors.terms && <p className="body-small text-[#c00]">{errors.terms}</p>}
            <label className="flex items-start gap-2 text-left body-small text-body-text">
              <input
                type="checkbox"
                checked={formData.promotion}
                onChange={(e) => setFormData({ ...formData, promotion: e.target.checked })}
                className="mt-1 h-4 w-4 shrink-0 accent-primary"
              />
              <span className="min-w-0 flex-1 text-left">
                I agree to receive emails with educational content, exclusive offers, partnership discounts, and marketing updates
              </span>
            </label>
          </div>

          <div className={`flex justify-center ${compact || tight ? "pt-2" : "pt-[21px]"}`}>
            <CtaButton type="submit" variant="accent" className={compact ? "w-full" : "w-[290px]"}>
              Start Your ESA Evaluation
            </CtaButton>
          </div>

          <p className="body-small text-center text-body-text !mt-2">
            Your information is 100% secure and private.
          </p>
        </form>
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
    terms: false,
    promotion: false,
  });
  const [errors, setErrors] = useState<EvaluationErrors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lead = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      stateName: formData.state,
    };
    const nextErrors = validateEvaluationLead(lead, formData.terms);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const destination = evaluationDestination(lead);
    if (destination.includes("getheally.com")) {
      const abbreviation = STATE_INDEX.find((state) => state.name === formData.state)?.abbreviation || "CA";
      trackHeallySubmit(formData.email.trim(), abbreviation);
    }
    window.location.assign(destination);
  };

  const subtitle =
    data.heroSubtitle ||
    `Speak to ${stateName}'s mental health professionals for personalized wellness evaluations. ESA documentation in ${stateName} is issued through a legitimate clinical assessment that aligns with federal housing guidelines.`;

  return (
    <section className="relative w-full overflow-visible bg-background">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <BreakpointImage
          media="(max-width: 639px)"
          quality={90}
          src="/hero-image-for-mobile-all.webp"
          alt=""
          fill
          className="object-cover object-top sm:hidden"
          sizes="(max-width: 639px) 100vw, 1px"
        />
        <BreakpointImage
          media="(min-width: 640px) and (max-width: 1023px)"
          quality={90}
          src="/states/california-hero-section-tablet.webp"
          alt=""
          fill
          className="hidden object-cover object-top sm:block lg:hidden"
          sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
        />
        <BreakpointImage
          media="(min-width: 1024px)"
          quality={90}
          src="/states/california-hero-section.webp"
          alt=""
          fill
          className="hidden object-cover object-top lg:block"
          sizes="(min-width: 1024px) 100vw, 1px"
        />
      </div>

      <div
        className="responsive-hero-copy relative z-10 flex flex-col items-center px-4 pb-10 pt-4 text-center sm:px-10 lg:mx-auto lg:w-[1440px] lg:items-start lg:px-0 lg:pl-[82px] lg:pt-[82px] lg:text-left"
        style={{ "--hero-tablet": "auto", "--hero-desktop": "808px" } as React.CSSProperties}
      >
        <SiteBreadcrumbs className="mb-4 self-start lg:absolute lg:left-[82px] lg:top-[18px]" />
        <div className="hidden items-center gap-3 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
          {statsData.map((stat) => (
            <div
              key={stat.label}
              className="flex h-[77px] min-w-[177px] flex-col items-center justify-center rounded-[30px] bg-background px-4 py-2.5 text-center"
            >
              <span className="body-large text-color-gradient">{stat.value}</span>
              <span className="body-small mt-0.5 whitespace-nowrap text-[#6B6B6B]">{stat.label}</span>
            </div>
          ))}
        </div>
        <h1 className="heading-h1 text-primary mt-2 max-w-[360px] capitalize sm:mt-6 sm:max-w-[620px] lg:max-w-[560px]">
          {renderHeroTitle(data.heroTitle, stateName)}
        </h1>
        <p className="body-large text-body-text mx-auto mt-3 max-w-[330px] sm:max-w-[560px] lg:mx-0 lg:max-w-[460px]">
          {subtitle}
        </p>
        <div className="mt-6 hidden lg:block">
          <ReviewBadges />
        </div>
        <div className="mt-6 flex w-full max-w-[360px] flex-col items-center gap-3 sm:hidden">
          <HeroStatPills stats={statsData} />
          <ReviewBadges className="justify-center" />
        </div>
        <div className="mt-6 w-full max-w-[420px] lg:absolute lg:right-[81px] lg:top-[31px] lg:mt-0 lg:w-[464px] lg:max-w-none">
          <EvaluationFormCard
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            errors={errors}
            titleAs="h2"
            tight
          />
        </div>
      </div>
    </section>
  );
}
