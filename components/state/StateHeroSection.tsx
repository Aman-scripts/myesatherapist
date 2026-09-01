"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { StateData } from "@/data/statesData";

const TRUSTPILOT_GREEN = "#00B67A";

function StarMark({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function TrustpilotBox() {
  return (
    <div className="bg-[rgba(255,255,255,0.55)] border border-[rgba(255,255,255,0.09)] shadow-[0px_2px_4px_rgba(0,0,0,0.1)] backdrop-blur-[11.7px] rounded-[20px] p-3 sm:py-3.5 sm:px-5 w-fit">
      <div className="flex items-center gap-1.5 mb-1.5">
        <StarMark className="w-4 h-4" style={{ color: TRUSTPILOT_GREEN }} />
        <span className="text-[16px] leading-[20px] font-normal text-[#5F6B6F] font-sans">
          Trustpilot
        </span>
      </div>

      <div className="flex items-center gap-1.5 mb-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-5 h-5 flex items-center justify-center shrink-0 rounded-[2px]"
            style={{ backgroundColor: TRUSTPILOT_GREEN }}
          >
            <StarMark className="w-3.5 h-3.5 text-white" />
          </div>
        ))}
        <div
          className="relative w-5 h-5 shrink-0 overflow-hidden rounded-[2px]"
          style={{ backgroundColor: "#CCCCCC" }}
        >
          <div
            className="absolute inset-y-0 left-0 w-1/2"
            style={{ backgroundColor: TRUSTPILOT_GREEN }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <StarMark className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-[12px] leading-[20px] text-[#5F6B6F] font-sans">
        <span>Trustscore 4.4</span>
        <span className="text-[#5F6B6F]/40">|</span>
        <span>23,900 reviews</span>
      </div>
    </div>
  );
}

interface EvaluationFormCardProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
    }>
  >;
  handleSubmit: (e: React.FormEvent) => void;
  isSubmitted: boolean;
  compact?: boolean;
  stateName: string;
}

function EvaluationFormCard({
  formData,
  setFormData,
  handleSubmit,
  isSubmitted,
  compact = false,
  stateName,
}: EvaluationFormCardProps) {
  return (
    <div
      className={`w-full bg-[rgba(245,166,54,0.26)] border border-[rgba(245,166,54,0.09)] shadow-[0_16px_40px_rgba(26,61,79,0.08)] backdrop-blur-[18px] rounded-[30px] ${
        compact ? "p-4 sm:p-6" : "px-5 lg:px-6 xl:px-8 py-5 lg:py-6 xl:py-8"
      }`}
    >
      <div className={`${compact ? "mb-3 text-center" : "mb-4 xl:mb-6 text-center"}`}>
        <h2
          className={`font-heading font-bold text-[#373737] leading-tight ${
            compact ? "text-[22px]" : "text-[26px] xl:text-[36px] xl:leading-[44px]"
          } tracking-[-0.00015em]`}
        >
          Start Your Evaluation
        </h2>
        <p
          className={`text-[#5F6B6F] font-semibold mt-1 font-sans ${
            compact ? "text-[12px]" : "text-[14px] leading-[26px]"
          }`}
        >
          Free consultation - takes less than 5 minutes.
        </p>
      </div>

      {isSubmitted ? (
        <div className="py-6 text-center space-y-3 animate-fadeIn">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] text-white flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-7 h-7 text-[#E8B92C]" />
          </div>
          <div className="font-heading text-lg font-bold text-[#2E5A66]">
            Evaluation Request Received!
          </div>
          <p className="text-xs text-[#5F6B6F] font-medium">
            Our {stateName} intake specialist is reviewing your submission.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={compact ? "space-y-3" : "space-y-3 xl:space-y-4"}>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label
                className={`block font-semibold text-[#5F6B6F] mb-1 font-sans ${
                  compact ? "text-[12px]" : "text-[14px] leading-[26px]"
                }`}
              >
                First Name
              </label>
              <input
                type="text"
                required
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className={`w-full rounded-[5px] border-[0.2px] border-[#5F6B6F] bg-[rgba(250,247,242,0.3)] text-[#5F6B6F] placeholder:text-[#5F6B6F] focus:outline-none focus:ring-2 focus:ring-[#1D6E72]/30 focus:border-[#1D6E72] transition-all font-sans ${
                  compact ? "h-[40px] px-3 text-[13px]" : "h-[44px] px-4 text-[14px] leading-[26px]"
                }`}
              />
            </div>
            <div>
              <label
                className={`block font-semibold text-[#5F6B6F] mb-1 font-sans ${
                  compact ? "text-[12px]" : "text-[14px] leading-[26px]"
                }`}
              >
                Last Name
              </label>
              <input
                type="text"
                required
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className={`w-full rounded-[5px] border-[0.2px] border-[#5F6B6F] bg-[rgba(250,247,242,0.3)] text-[#5F6B6F] placeholder:text-[#5F6B6F] focus:outline-none focus:ring-2 focus:ring-[#1D6E72]/30 focus:border-[#1D6E72] transition-all font-sans ${
                  compact ? "h-[40px] px-3 text-[13px]" : "h-[44px] px-4 text-[14px] leading-[26px]"
                }`}
              />
            </div>
          </div>

          <div>
            <label
              className={`block font-semibold text-[#5F6B6F] mb-1 font-sans ${
                compact ? "text-[12px]" : "text-[14px] leading-[26px]"
              }`}
            >
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full rounded-[5px] border-[0.2px] border-[#5F6B6F] bg-[rgba(250,247,242,0.3)] text-[#5F6B6F] placeholder:text-[#5F6B6F] focus:outline-none focus:ring-2 focus:ring-[#1D6E72]/30 focus:border-[#1D6E72] transition-all font-sans ${
                compact ? "h-[40px] px-3 text-[13px]" : "h-[44px] px-4 text-[14px] leading-[26px]"
              }`}
            />
          </div>

          <div>
            <label
              className={`block font-semibold text-[#5F6B6F] mb-1 font-sans ${
                compact ? "text-[12px]" : "text-[14px] leading-[26px]"
              }`}
            >
              Phone Number
            </label>
            <input
              type="tel"
              required
              placeholder="(555) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full rounded-[5px] border-[0.2px] border-[#5F6B6F] bg-[rgba(250,247,242,0.3)] text-[#5F6B6F] placeholder:text-[#5F6B6F] focus:outline-none focus:ring-2 focus:ring-[#1D6E72]/30 focus:border-[#1D6E72] transition-all font-sans ${
                compact ? "h-[40px] px-3 text-[13px]" : "h-[44px] px-4 text-[14px] leading-[26px]"
              }`}
            />
          </div>

          <div className={compact ? "pt-1" : "pt-2"}>
            <button
              type="submit"
              className={`w-full rounded-[30px] bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] hover:opacity-95 text-white font-semibold font-sans shadow-[0px_2px_4px_rgba(0,0,0,0.15)] transition-all flex items-center justify-center gap-2 group ${
                compact ? "h-[44px] text-[15px]" : "h-[48px] text-[16px] leading-[26px]"
              }`}
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5] text-[#FAF7F2] transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <p className="text-center text-[12px] leading-[26px] text-[#5F6B6F] font-semibold pt-1 font-sans">
            Your information is 100% secure and private.
          </p>
        </form>
      )}
    </div>
  );
}

export function StateHeroSection({ data }: { data: StateData }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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

  const stateName = data.name;

  return (
    <section className="relative w-full bg-[#FAF7F2] overflow-hidden">
      {/* 1. DESKTOP VIEW */}
      <div className="hidden lg:block relative w-full aspect-[4320/2439] min-h-[640px] lg:min-h-[680px] xl:min-h-[820px]">
        <Image
          src="/california-hero-section.png"
          alt={`${stateName} ESA Evaluations with Licensed Therapists`}
          fill
          priority
          unoptimized
          className="object-cover object-top pointer-events-none"
          sizes="100vw"
        />

        <div className="absolute inset-0 z-10">
          <div className="max-w-[1360px] mx-auto h-full px-6 lg:px-8 xl:px-10 flex items-start justify-between pt-6 lg:pt-7 xl:pt-14">
            <div className="w-[48%] lg:w-[45%] xl:w-[48%] space-y-4 xl:space-y-6 pt-1">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-[42px] xl:text-[56px] font-bold text-[#2E5A66] leading-[1.14] xl:leading-[64px] tracking-[-0.0002em]">
                {stateName} ESA Letter Evaluations by Licensed Therapists
              </h1>

              <p className="text-[14px] lg:text-[14px] xl:text-[16px] text-[#5F6B6F] font-semibold leading-[1.62] xl:leading-[26px] max-w-[475px] font-sans">
                {data.heroSubtitle ||
                  `Connect with a ${stateName} licensed mental health professional for a online ESA evaluation from the comfort of your home. Our secure telehealth process follows ${stateName} requirements and federal housing guidelines.`}
              </p>

              <div className="pt-1 xl:pt-2">
                <TrustpilotBox />
              </div>
            </div>

            <div className="w-[46%] lg:w-[42%] xl:w-[42%] flex justify-end">
              <div className="w-full max-w-[465px]">
                <EvaluationFormCard
                  formData={formData}
                  setFormData={setFormData}
                  handleSubmit={handleSubmit}
                  isSubmitted={isSubmitted}
                  stateName={stateName}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. TABLET VIEW */}
      <div className="hidden sm:block lg:hidden relative w-full aspect-[834/1774] max-w-[834px] mx-auto overflow-hidden">
        <Image
          src="/california-hero-section-tablet.png"
          alt={`${stateName} ESA Evaluations Tablet View`}
          fill
          priority
          unoptimized
          className="object-cover object-top pointer-events-none"
          sizes="100vw"
        />

        <div className="absolute top-0 inset-x-0 z-10 pt-8 sm:pt-10 px-6 sm:px-10">
          <div className="text-center space-y-3 max-w-[620px] mx-auto">
            <h1 className="font-heading text-[36px] sm:text-[44px] font-bold text-[#2E5A66] leading-[44px] sm:leading-[54px] tracking-[-0.0002em] text-center">
              {stateName} ESA Letter Evaluations by Licensed Therapists
            </h1>
            <p className="font-sans text-[15px] sm:text-[16px] font-semibold text-[#5F6B6F] leading-[26px] tracking-normal text-center max-w-[560px] mx-auto">
              {data.heroSubtitle ||
                `Connect with a ${stateName} licensed mental health professional for a online ESA evaluation from the comfort of your home. Our secure telehealth process follows ${stateName} requirements and federal housing guidelines.`}
            </p>
          </div>
        </div>

        <div className="absolute top-[58.5%] left-1/2 -translate-x-1/2 z-10 w-full max-w-[465px] px-6 sm:px-10">
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
      <div className="sm:hidden relative w-full aspect-[390/1298] overflow-hidden">
        <Image
          src="/california-hero-section-mobile.png"
          alt={`${stateName} ESA Evaluations Mobile View`}
          fill
          priority
          unoptimized
          className="object-cover object-top pointer-events-none"
          sizes="100vw"
        />

        <div className="absolute top-0 inset-x-0 z-10 pt-5 px-4">
          <div className="text-center space-y-2 pt-1 px-1 max-w-[360px] mx-auto">
            <h1 className="font-heading text-[26px] font-bold text-[#2E5A66] leading-[34px] tracking-[-0.0002em] text-center">
              {stateName} ESA Letter Evaluations by Licensed Therapists
            </h1>
            <p className="font-sans text-[13px] font-semibold text-[#5F6B6F] leading-[22px] tracking-normal text-center max-w-[330px] mx-auto">
              {data.heroSubtitle ||
                `Connect with a ${stateName} licensed mental health professional for a online ESA evaluation from the comfort of your home. Our secure telehealth process follows ${stateName} requirements and federal housing guidelines.`}
            </p>
          </div>
        </div>

        <div className="absolute top-[54.5%] left-1/2 -translate-x-1/2 z-10 w-full max-w-[350px] px-4">
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
