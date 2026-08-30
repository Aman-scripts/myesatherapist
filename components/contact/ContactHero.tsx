"use client";

import React, { useState } from "react";
import Image from "next/image";

export function ContactHero() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section className="relative w-full min-h-[640px] sm:min-h-[720px] lg:min-h-[820px] bg-[#F7EAD6] overflow-hidden flex items-center">
      {/* Background Image: contact-hero-section.png */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/contact-hero-section.png"
          alt="Customer service representative at desk"
          fill
          priority
          className="object-cover object-right lg:object-center"
          sizes="100vw"
        />
      </div>

      {/* Floating Request Info Overlay Card (Frame 1000011950) */}
      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 w-full py-10 lg:py-16">
        <div className="max-w-[520px] sm:max-w-[540px] lg:max-w-[560px]">
          {/* Container background: #F5A63642 */}
          <div className="bg-[#F5A636]/25 backdrop-blur-md rounded-[32px] sm:rounded-[40px] p-6 sm:p-9 lg:p-10 border border-[#EAC9A0]/60 shadow-[0_20px_50px_rgba(0,0,0,0.06)] space-y-6">

            {/* Centered Header */}
            <div className="text-center space-y-2">
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1E3942] leading-tight">
                Request Info
              </h1>
              <p className="text-xs sm:text-sm text-[#263B42]/90 font-sans font-medium">
                Feel Free To Connect With Us! (24×7 Available At Your Service)
              </p>
            </div>

            {submitted ? (
              <div className="bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] text-white p-6 rounded-2xl text-center space-y-2 animate-fadeIn shadow-xl">
                <div className="w-10 h-10 rounded-full bg-[#E8B92C] text-[#04161C] font-bold text-xl flex items-center justify-center mx-auto">
                  ✓
                </div>
                <h3 className="font-heading text-xl font-bold">Thank You!</h3>
                <p className="text-sm font-sans">Your message has been sent successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-sans font-semibold text-[#1E3942]">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full h-[46px] px-4 rounded-[12px] bg-[#F5D4AA]/80 border border-[#E7C196] font-sans text-sm text-[#1E3942] placeholder-[#8E7558] focus:outline-none focus:border-[#1E3942] focus:bg-[#FAF0DD] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-sans font-semibold text-[#1E3942]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full h-[46px] px-4 rounded-[12px] bg-[#F5D4AA]/80 border border-[#E7C196] font-sans text-sm text-[#1E3942] placeholder-[#8E7558] focus:outline-none focus:border-[#1E3942] focus:bg-[#FAF0DD] transition-all"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-sans font-semibold text-[#1E3942]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-[46px] px-4 rounded-[12px] bg-[#F5D4AA]/80 border border-[#E7C196] font-sans text-sm text-[#1E3942] placeholder-[#8E7558] focus:outline-none focus:border-[#1E3942] focus:bg-[#FAF0DD] transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-sans font-semibold text-[#1E3942]">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3.5 rounded-[12px] bg-[#F5D4AA]/80 border border-[#E7C196] font-sans text-sm text-[#1E3942] placeholder-[#8E7558] focus:outline-none focus:border-[#1E3942] focus:bg-[#FAF0DD] transition-all resize-none"
                  />
                </div>

                {/* Centered Button & Security Note */}
                <div className="pt-3 flex flex-col items-center justify-center space-y-3">
                  {/* Button Spec: width 356px, height 48px, gap 8px, border-radius 30px */}
                  <button
                    type="submit"
                    className="w-full max-w-[356px] h-[48px] rounded-[30px] bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] hover:opacity-95 text-white font-sans font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-[8px] cursor-pointer"
                  >
                    <span>SEND</span>
                    <svg
                      className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>

                  <p className="text-xs text-[#263B42]/80 font-sans font-medium text-center">
                    Your information is 100% secure and private.
                  </p>
                </div>
              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
