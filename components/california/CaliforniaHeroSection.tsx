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

export function CaliforniaHeroSection() {
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
      {/* ======================================================== */}
      {/* 1. DESKTOP & TABLET VIEW (md and up)                     */}
      {/* Full-width exact background image with overlaid content */}
      {/* ======================================================== */}
      <div className="hidden md:block relative w-full aspect-[4320/2439] min-h-[680px] lg:min-h-[760px] xl:min-h-[820px]">
        {/* Background Image: public/california-hero-section.png */}
        <Image
          src="/california-hero-section.png"
          alt="California ESA Evaluations with Licensed Therapists"
          fill
          priority
          unoptimized
          className="object-cover object-top pointer-events-none"
          sizes="100vw"
        />

        {/* Content Container Overlay */}
        <div className="absolute inset-0 z-10">
          <div className="max-w-[1360px] mx-auto h-full px-6 lg:px-10 flex items-start justify-between pt-8 sm:pt-10 lg:pt-12 xl:pt-14">
            
            {/* Left Content Column */}
            <div className="w-[46%] lg:w-[44%] xl:w-[42%] space-y-5 lg:space-y-6 pt-1">
              {/* Heading (Exact Figma 56px / 64px line height) */}
              <h1 className="font-heading text-3xl md:text-4xl lg:text-[48px] xl:text-[56px] font-bold text-[#1E3E47] leading-[1.14] xl:leading-[64px] tracking-[-0.011em]">
                California ESA Letter
                <br />
                Evaluations by
                <br />
                Licensed Therapists
              </h1>

              {/* Subtitle (Exact Figma 16px / 26px line height Manrope) */}
              <p className="text-[14px] lg:text-[15px] xl:text-[16px] text-[#5F6B6F] font-semibold leading-[1.62] xl:leading-[26px] max-w-[460px] font-sans">
                Connect with a California licensed mental health professional for a online ESA
                evaluation from the comfort of your home. Our secure telehealth process follows
                California&apos;s AB 468 requirements and federal housing guidelines.
              </p>

              {/* Trustpilot Widget */}
              <div className="pt-1">
                <TrustpilotBox />
              </div>
            </div>

            {/* Right Form Card Column (Exact Match to Figma Screenshot & Node Parameters) */}
            <div className="w-[44%] lg:w-[40%] xl:w-[38%] flex justify-end">
              <div className="w-full max-w-[430px] bg-[#F5E5D0]/85 backdrop-blur-md rounded-[28px] lg:rounded-[32px] px-6 sm:px-8 py-6 sm:py-8 border border-[#DECDBB]/60 shadow-[0_16px_40px_rgba(26,61,79,0.06)]">
                
                {/* Header */}
                <div className="text-center mb-6">
                  <h2 className="font-heading text-[28px] sm:text-[32px] lg:text-[36px] font-bold text-[#1E3E47] leading-tight lg:leading-[44px] tracking-[-0.005em]">
                    Start Your Evaluation
                  </h2>
                  <p className="text-[13px] sm:text-[14px] text-[#5F6B6F] font-medium mt-1 font-sans">
                    Free consultation - takes less than 5 minutes.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-10 text-center space-y-3 animate-fadeIn">
                    <div className="w-12 h-12 rounded-full bg-[#184F59] text-white flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-7 h-7 text-[#E8B92C]" />
                    </div>
                    <div className="font-heading text-lg font-bold text-[#1E3E47]">
                      Evaluation Request Received!
                    </div>
                    <p className="text-xs text-[#5F6B6F] font-medium">
                      Our California intake specialist is reviewing your submission.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* First & Last Name */}
                    <div className="grid grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[13px] font-semibold text-[#4F5E63] mb-1.5 font-sans">
                          First Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full h-[46px] px-3.5 rounded-[10px] border border-[#DFCBA8] bg-[#F1DECA]/70 text-[14px] text-[#1E3E47] placeholder:text-[#9A897B] focus:outline-none focus:ring-2 focus:ring-[#184F59]/25 focus:border-[#184F59] transition-all font-sans"
                        />
                      </div>
                      <div>
                        <label className="block text-[13px] font-semibold text-[#4F5E63] mb-1.5 font-sans">
                          Last Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full h-[46px] px-3.5 rounded-[10px] border border-[#DFCBA8] bg-[#F1DECA]/70 text-[14px] text-[#1E3E47] placeholder:text-[#9A897B] focus:outline-none focus:ring-2 focus:ring-[#184F59]/25 focus:border-[#184F59] transition-all font-sans"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-[13px] font-semibold text-[#4F5E63] mb-1.5 font-sans">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-[46px] px-3.5 rounded-[10px] border border-[#DFCBA8] bg-[#F1DECA]/70 text-[14px] text-[#1E3E47] placeholder:text-[#9A897B] focus:outline-none focus:ring-2 focus:ring-[#184F59]/25 focus:border-[#184F59] transition-all font-sans"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-[13px] font-semibold text-[#4F5E63] mb-1.5 font-sans">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full h-[46px] px-3.5 rounded-[10px] border border-[#DFCBA8] bg-[#F1DECA]/70 text-[14px] text-[#1E3E47] placeholder:text-[#9A897B] focus:outline-none focus:ring-2 focus:ring-[#184F59]/25 focus:border-[#184F59] transition-all font-sans"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full h-[50px] rounded-full bg-[#184F59] hover:bg-[#133F47] text-white font-bold text-[15px] sm:text-[16px] shadow-[0_6px_20px_rgba(24,79,89,0.22)] transition-all flex items-center justify-center gap-2 group"
                      >
                        <span>Start your Free Evaluation</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>

                    {/* Subtext */}
                    <p className="text-center text-[12px] text-[#5F6B6F] font-medium pt-1 font-sans">
                      Your information is 100% secure and private.
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. MOBILE VIEW (< md / < 768px)                          */}
      {/* Clean stacked layout ensuring perfect legibility         */}
      {/* ======================================================== */}
      <div className="block md:hidden px-4 py-8 space-y-6">
        {/* Heading */}
        <div className="text-center space-y-3">
          <h1 className="font-heading text-3xl font-bold text-[#1E3E47] leading-tight">
            California ESA Letter
            <br />
            Evaluations by
            <br />
            Licensed Therapists
          </h1>

          <p className="text-xs sm:text-sm text-[#5F6B6F] font-medium leading-relaxed max-w-sm mx-auto">
            Connect with a California licensed mental health professional for a online ESA evaluation
            from the comfort of your home. Compliant with California AB 468 &amp; Fair Housing Act.
          </p>
        </div>

        {/* Hero image visual */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
          <Image
            src="/california-hero-section.png"
            alt="California ESA Consultation"
            fill
            priority
            unoptimized
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Mobile Form Card */}
        <div className="bg-[#F5E5D0] rounded-[28px] p-6 border border-[#DECDBB]/60 shadow-md max-w-md mx-auto">
          <div className="text-center mb-5">
            <h2 className="font-heading text-[28px] font-bold text-[#1E3E47] leading-tight">
              Start Your Evaluation
            </h2>
            <p className="text-xs text-[#5F6B6F] mt-1 font-sans">
              Free consultation - takes less than 5 minutes.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="block text-xs font-semibold text-[#4F5E63] mb-1 font-sans">First Name</label>
                <input
                  type="text"
                  required
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full h-11 px-3 rounded-[10px] border border-[#DFCBA8] bg-[#F1DECA]/70 text-xs text-[#1E3E47] placeholder:text-[#9A897B]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#4F5E63] mb-1 font-sans">Last Name</label>
                <input
                  type="text"
                  required
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full h-11 px-3 rounded-[10px] border border-[#DFCBA8] bg-[#F1DECA]/70 text-xs text-[#1E3E47] placeholder:text-[#9A897B]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#4F5E63] mb-1 font-sans">Email Address</label>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full h-11 px-3 rounded-[10px] border border-[#DFCBA8] bg-[#F1DECA]/70 text-xs text-[#1E3E47] placeholder:text-[#9A897B]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#4F5E63] mb-1 font-sans">Phone Number</label>
              <input
                type="tel"
                required
                placeholder="(555) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full h-11 px-3 rounded-[10px] border border-[#DFCBA8] bg-[#F1DECA]/70 text-xs text-[#1E3E47] placeholder:text-[#9A897B]"
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-full bg-[#184F59] text-white font-bold text-sm flex items-center justify-center gap-2 mt-2 shadow-sm"
            >
              <span>Start your Free Evaluation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-[11px] text-[#5F6B6F] font-medium pt-0.5 font-sans">
              Your information is 100% secure and private.
            </p>
          </form>
        </div>

        {/* Trustpilot Centered on Mobile */}
        <div className="flex justify-center pt-2">
          <TrustpilotBox />
        </div>
      </div>
    </section>
  );
}
