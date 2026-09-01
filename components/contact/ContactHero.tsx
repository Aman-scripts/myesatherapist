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
    <section className="relative w-full min-h-[640px] sm:min-h-[720px] lg:min-h-[814px] bg-[#FAF7F2] overflow-hidden flex items-center">
      {/* Background Image: contact-hero-section.png */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/contact-hero-section.png"
          alt="Customer service representative at desk"
          fill
          priority
          className="object-cover object-right lg:object-center pointer-events-none"
          sizes="100vw"
        />
      </div>

      {/* Floating Request Info Overlay Card (Frame 1000011950) */}
      <div className="relative z-10 max-w-[1446px] mx-auto px-4 sm:px-8 lg:px-[79px] w-full py-12 lg:py-[89px] flex items-center justify-start">
        <div className="w-full max-w-[611px]">
          {/* Frame 1000011950 */}
          <div
            className="w-full rounded-[30px] p-6 sm:p-8 lg:py-[32px] lg:px-[24px] space-y-6 shadow-sm"
            style={{
              background: "rgba(245, 166, 54, 0.26)",
              border: "1px solid rgba(245, 166, 54, 0.09)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
            }}
          >

            {/* Frame 1000011951: Centered Header */}
            <div className="text-center space-y-2">
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-[36px] font-bold text-[#373737] leading-[44px] tracking-[-0.00015em]">
                Request Info
              </h1>
              <p className="font-sans font-semibold text-xs sm:text-[14px] leading-[26px] text-[#5F6B6F] text-center">
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
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* Frame 1000011958: First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-6">
                  {/* Frame 1000011954: First Name */}
                  <div className="space-y-1">
                    <label className="block font-sans font-semibold text-[14px] leading-[26px] text-[#5F6B6F]">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full h-[44px] px-4 rounded-[5px] bg-[#FAF7F2]/30 border border-[#5F6B6F]/40 font-sans font-normal text-[14px] leading-[26px] text-[#5F6B6F] placeholder-[#5F6B6F]/70 focus:outline-none focus:border-[#1A3D4F] transition-all"
                    />
                  </div>

                  {/* Frame 1000011955: Last Name */}
                  <div className="space-y-1">
                    <label className="block font-sans font-semibold text-[14px] leading-[26px] text-[#5F6B6F]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full h-[44px] px-4 rounded-[5px] bg-[#FAF7F2]/30 border border-[#5F6B6F]/40 font-sans font-normal text-[14px] leading-[26px] text-[#5F6B6F] placeholder-[#5F6B6F]/70 focus:outline-none focus:border-[#1A3D4F] transition-all"
                    />
                  </div>
                </div>

                {/* Frame 1000011956: Email Address */}
                <div className="space-y-1">
                  <label className="block font-sans font-semibold text-[14px] leading-[26px] text-[#5F6B6F]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-[44px] px-4 rounded-[5px] bg-[#FAF7F2]/30 border border-[#5F6B6F]/40 font-sans font-normal text-[14px] leading-[26px] text-[#5F6B6F] placeholder-[#5F6B6F]/70 focus:outline-none focus:border-[#1A3D4F] transition-all"
                  />
                </div>

                {/* Frame 1000011957: Message */}
                <div className="space-y-1">
                  <label className="block font-sans font-semibold text-[14px] leading-[26px] text-[#5F6B6F]">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full min-h-[110px] sm:min-h-[127px] p-3.5 rounded-[5px] bg-[#FAF7F2]/30 border border-[#5F6B6F]/40 font-sans font-normal text-[14px] leading-[26px] text-[#5F6B6F] placeholder-[#5F6B6F]/70 focus:outline-none focus:border-[#1A3D4F] transition-all resize-none"
                  />
                </div>

                {/* Frame 1000011961: Centered Button & Security Note */}
                <div className="pt-2 flex flex-col items-center justify-center space-y-2">
                  {/* Frame 1000011891 */}
                  <button
                    type="submit"
                    className="w-full max-w-[356px] h-[48px] rounded-[30px] hover:opacity-95 text-white font-sans font-semibold text-base shadow-[0px_2px_4px_rgba(0,0,0,0.15)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
                    style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                  >
                    <span>Get Started</span>
                    <svg
                      className="w-4 h-4 text-[#FAF7F2] transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>

                  <p className="font-sans font-semibold text-[12px] leading-[26px] text-[#5F6B6F] text-center">
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
