"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Trustpilot brand green
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
    <div className="bg-white/95 backdrop-blur-sm rounded-[18px] p-3.5 sm:p-4 border border-[#EAE5DC] shadow-[0_4px_20px_rgba(0,0,0,0.04)] w-fit">
      {/* Top line: Star + Trustpilot name */}
      <div className="flex items-center gap-1.5 mb-1.5">
        <StarMark className="w-4 h-4" style={{ color: TRUSTPILOT_GREEN }} />
        <span className="text-[14px] font-bold text-[#1E3E47] tracking-tight">
          Trustpilot
        </span>
      </div>

      {/* 5 Green Star squares */}
      <div className="flex items-center gap-1 mb-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-5 h-5 sm:w-5.5 sm:h-5.5 flex items-center justify-center shrink-0 rounded-[2px]"
            style={{ backgroundColor: TRUSTPILOT_GREEN }}
          >
            <StarMark className="w-3.5 h-3.5 text-white" />
          </div>
        ))}
        {/* Half star */}
        <div
          className="relative w-5 h-5 sm:w-5.5 sm:h-5.5 shrink-0 overflow-hidden rounded-[2px]"
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

      {/* Bottom text */}
      <div className="flex items-center gap-2 text-[11.5px] text-[#5F6B6F] font-sans">
        <span className="font-semibold">TrustScore 4.4</span>
        <span className="text-gray-300">|</span>
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
}

function EvaluationFormCard({
  formData,
  setFormData,
  handleSubmit,
  isSubmitted,
  compact = false,
}: EvaluationFormCardProps) {
  return (
    <div
      className={`w-full bg-[#F5E5D0] backdrop-blur-md border border-[#DECDBB]/80 shadow-[0_16px_40px_rgba(26,61,79,0.08)] ${
        compact
          ? "rounded-[22px] p-4 sm:p-5"
          : "rounded-[24px] lg:rounded-[26px] xl:rounded-[32px] px-5 lg:px-5 xl:px-8 py-4 lg:py-5 xl:py-8"
      }`}
    >
      {/* Header */}
      <div className={`${compact ? "mb-3 text-center" : "mb-3 lg:mb-4 xl:mb-6 text-center"}`}>
        <h2
          className={`font-heading font-bold text-[#1E3E47] leading-tight ${
            compact ? "text-[20px] sm:text-[22px]" : "text-[24px] lg:text-[26px] xl:text-[36px] xl:leading-[44px]"
          } tracking-[-0.005em]`}
        >
          Start Your Evaluation
        </h2>
        <p
          className={`text-[#5F6B6F] font-medium mt-0.5 font-sans ${
            compact ? "text-[11.5px]" : "text-[12px] lg:text-[12.5px] xl:text-[14px]"
          }`}
        >
          Free consultation - takes less than 5 minutes.
        </p>
      </div>

      {isSubmitted ? (
        <div className="py-6 text-center space-y-3 animate-fadeIn">
          <div className="w-12 h-12 rounded-full bg-[#184F59] text-white flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-7 h-7 text-[#E8B92C]" />
          </div>
          <div className="font-heading text-lg font-bold text-[#1E3E47]">
            Evaluation Request Received!
          </div>
          <p className="text-xs text-[#5F6B6F] font-medium">
            Our Delaware intake specialist is reviewing your submission.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={compact ? "space-y-2.5" : "space-y-2.5 lg:space-y-3 xl:space-y-4"}>
          {/* First & Last Name */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
            <div>
              <label
                className={`block font-semibold text-[#4F5E63] mb-1 font-sans ${
                  compact ? "text-[11px]" : "text-[11.5px] xl:text-[13px]"
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
                className={`w-full rounded-[10px] border border-[#DFCBA8] bg-[#F1DECA]/80 text-[#1E3E47] placeholder:text-[#9A897B] focus:outline-none focus:ring-2 focus:ring-[#184F59]/25 focus:border-[#184F59] transition-all font-sans ${
                  compact ? "h-[38px] px-2.5 text-[12px]" : "h-[38px] lg:h-[40px] xl:h-[46px] px-3.5 text-[13px] xl:text-[14px]"
                }`}
              />
            </div>
            <div>
              <label
                className={`block font-semibold text-[#4F5E63] mb-1 font-sans ${
                  compact ? "text-[11px]" : "text-[11.5px] xl:text-[13px]"
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
                className={`w-full rounded-[10px] border border-[#DFCBA8] bg-[#F1DECA]/80 text-[#1E3E47] placeholder:text-[#9A897B] focus:outline-none focus:ring-2 focus:ring-[#184F59]/25 focus:border-[#184F59] transition-all font-sans ${
                  compact ? "h-[38px] px-2.5 text-[12px]" : "h-[38px] lg:h-[40px] xl:h-[46px] px-3.5 text-[13px] xl:text-[14px]"
                }`}
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label
              className={`block font-semibold text-[#4F5E63] mb-1 font-sans ${
                compact ? "text-[11px]" : "text-[11.5px] xl:text-[13px]"
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
              className={`w-full rounded-[10px] border border-[#DFCBA8] bg-[#F1DECA]/80 text-[#1E3E47] placeholder:text-[#9A897B] focus:outline-none focus:ring-2 focus:ring-[#184F59]/25 focus:border-[#184F59] transition-all font-sans ${
                compact ? "h-[38px] px-2.5 text-[12px]" : "h-[38px] lg:h-[40px] xl:h-[46px] px-3.5 text-[13px] xl:text-[14px]"
              }`}
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              className={`block font-semibold text-[#4F5E63] mb-1 font-sans ${
                compact ? "text-[11px]" : "text-[11.5px] xl:text-[13px]"
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
              className={`w-full rounded-[10px] border border-[#DFCBA8] bg-[#F1DECA]/80 text-[#1E3E47] placeholder:text-[#9A897B] focus:outline-none focus:ring-2 focus:ring-[#184F59]/25 focus:border-[#184F59] transition-all font-sans ${
                compact ? "h-[38px] px-2.5 text-[12px]" : "h-[38px] lg:h-[40px] xl:h-[46px] px-3.5 text-[13px] xl:text-[14px]"
              }`}
            />
          </div>

          {/* Submit Button */}
          <div className={compact ? "pt-1" : "pt-1 xl:pt-2"}>
            <button
              type="submit"
              className={`w-full rounded-full bg-[#184F59] hover:bg-[#133F47] text-white font-bold shadow-[0_6px_20px_rgba(24,79,89,0.22)] transition-all flex items-center justify-center gap-2 group ${
                compact ? "h-[42px] text-[13px]" : "h-[42px] lg:h-[44px] xl:h-[50px] text-[14px] xl:text-[16px]"
              }`}
            >
              <span>Start your Free Evaluation</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Subtext */}
          <p className="text-center text-[10.5px] sm:text-[11.5px] text-[#5F6B6F] font-medium pt-0.5 font-sans">
            Your information is 100% secure and private.
          </p>
        </form>
      )}
    </div>
  );
}

export function DelawareHeroSection() {
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

  return (
    <section className="relative w-full bg-[#FAF7F2] overflow-hidden">
      {/* 1. DESKTOP VIEW (lg:block / 1024px and up) */}
      <div className="hidden lg:block relative w-full aspect-[4320/2439] min-h-[640px] lg:min-h-[680px] xl:min-h-[820px]">
        {/* Background Image with Woman & Golden Retriever */}
        <Image
          src="/california-hero-section.png"
          alt="Delaware ESA Evaluations with Licensed Therapists"
          fill
          priority
          unoptimized
          className="object-cover object-top pointer-events-none"
          sizes="100vw"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10">
          <div className="max-w-[1360px] mx-auto h-full px-6 lg:px-8 xl:px-10 flex items-start justify-between pt-6 lg:pt-7 xl:pt-14">
            
            {/* Left Column: Heading + Paragraph + Trustpilot */}
            <div className="w-[44%] lg:w-[37%] xl:w-[42%] space-y-3 lg:space-y-4 xl:space-y-6 pt-1">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-[34px] xl:text-[56px] font-bold text-[#1E3E47] leading-[1.14] xl:leading-[64px] tracking-[-0.011em]">
                Delaware ESA Letter
                <br />
                Evaluations by
                <br />
                <span className="text-[#5F6B6F]">Licensed Therapists</span>
              </h1>

              <p className="text-[13px] lg:text-[13px] xl:text-[16px] text-[#5F6B6F] font-semibold leading-[1.5] xl:leading-[26px] max-w-[340px] xl:max-w-[460px] font-sans">
                Connect with a Delaware licensed mental health professional for a online ESA
                evaluation from the comfort of your home. Our secure telehealth process follows
                Delaware regulations and federal housing guidelines.
              </p>

              <div className="pt-0.5 xl:pt-1">
                <TrustpilotBox />
              </div>
            </div>

            {/* Right Column: Form Box Card */}
            <div className="w-[44%] lg:w-[38%] xl:w-[38%] flex justify-end">
              <div className="w-full max-w-[360px] xl:max-w-[430px]">
                <EvaluationFormCard
                  formData={formData}
                  setFormData={setFormData}
                  handleSubmit={handleSubmit}
                  isSubmitted={isSubmitted}
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. TABLET VIEW (hidden sm:block lg:hidden / 640-1023px) */}
      <div className="hidden sm:block lg:hidden relative w-full aspect-[834/1774] max-w-[834px] mx-auto overflow-hidden">
        <Image
          src="/california-hero-section-tablet.png"
          alt="Delaware ESA Evaluations Tablet View"
          fill
          priority
          unoptimized
          className="object-cover object-top pointer-events-none"
          sizes="100vw"
        />

        {/* Top Centered Header & Text */}
        <div className="absolute top-0 inset-x-0 z-10 pt-8 sm:pt-10 px-6 sm:px-10">
          <div className="text-center space-y-3 max-w-[620px] mx-auto">
            <h1 className="font-heading text-[44px] font-bold text-[#1E3E47] leading-[54px] tracking-[-0.01em] text-center">
              Delaware ESA Letter
              <br />
              Evaluations by <span className="text-[#5F6B6F]">Licensed Therapists</span>
            </h1>
            <p className="font-sans text-[16px] font-semibold text-[#5F6B6F] leading-[26px] tracking-normal text-center max-w-[560px] mx-auto">
              Connect with a Delaware licensed mental health professional for a online ESA
              evaluation from the comfort of your home. Our secure telehealth process follows
              Delaware regulations and federal housing guidelines.
            </p>
          </div>
        </div>

        {/* Form Card Box */}
        <div className="absolute top-[58.5%] left-1/2 -translate-x-1/2 z-10 w-full max-w-[460px] px-6 sm:px-10">
          <EvaluationFormCard
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            isSubmitted={isSubmitted}
          />
        </div>
      </div>

      {/* 3. MOBILE VIEW (sm:hidden / < 640px) */}
      <div className="sm:hidden relative w-full aspect-[390/1298] overflow-hidden">
        <Image
          src="/california-hero-section-mobile.png"
          alt="Delaware ESA Evaluations Mobile View"
          fill
          priority
          unoptimized
          className="object-cover object-top pointer-events-none"
          sizes="100vw"
        />

        {/* Top Centered Header & Text */}
        <div className="absolute top-0 inset-x-0 z-10 pt-5 px-4">
          <div className="text-center space-y-2 pt-1 px-1 max-w-[360px] mx-auto">
            <h1 className="font-heading text-[28px] font-bold text-[#1E3E47] leading-[36px] tracking-[-0.01em] text-center">
              Delaware ESA Letter
              <br />
              Evaluations by <span className="text-[#5F6B6F]">Licensed Therapists</span>
            </h1>
            <p className="font-sans text-[14px] font-semibold text-[#5F6B6F] leading-[26px] tracking-normal text-center max-w-[330px] mx-auto">
              Connect with a Delaware licensed mental health professional for a online ESA
              evaluation from the comfort of your home. Our secure telehealth process follows
              Delaware regulations and federal housing guidelines.
            </p>
          </div>
        </div>

        {/* Form Card Box */}
        <div className="absolute top-[54.5%] left-1/2 -translate-x-1/2 z-10 w-full max-w-[340px] px-4">
          <EvaluationFormCard
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            isSubmitted={isSubmitted}
            compact
          />
        </div>
      </div>
    </section>
  );
}
