"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function ContactHero() {
  const [formData, setFormData] = useState({
    fullName: "",
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
      setFormData({
        fullName: "",
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }, 4000);
  };

  const cardStyle = {
    background: "rgba(245, 166, 54, 0.26)",
    border: "1px solid rgba(245, 166, 54, 0.09)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
  };

  return (
    <section className="relative w-full bg-[#FAF7F2] overflow-hidden">
      
      {/* ---------------------------------------------------- */}
      {/* 1. MOBILE VIEW (< 640px)                             */}
      {/* ---------------------------------------------------- */}
      <div className="sm:hidden relative w-full aspect-[390/1007] overflow-hidden max-w-[480px] mx-auto">
        {/* Background Image: contact-us-hero-section-mobile.png */}
        <Image
          src="/contact-us-hero-section-mobile.png"
          alt="Contact Customer Support Mobile"
          fill
          priority
          unoptimized
          className="object-cover object-top pointer-events-none"
          sizes="100vw"
        />

        {/* Floating Request Info Overlay Card */}
        <div className="relative z-10 pt-[7%] px-4 w-full flex justify-center">
          <div
            className="w-full max-w-[340px] rounded-[30px] p-5 space-y-3.5 shadow-sm"
            style={cardStyle}
          >
            {/* Header */}
            <div className="text-center space-y-1">
              <h1 className="font-heading text-[26px] font-bold text-[#373737] leading-[32px] tracking-[-0.00015em]">
                Request Info
              </h1>
              <p className="font-sans font-semibold text-[11px] leading-[18px] text-[#5F6B6F] text-center">
                Feel Free To Connect With Us! (24×7 Available At Your Service)
              </p>
            </div>

            {submitted ? (
              <div className="bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] text-white p-5 rounded-2xl text-center space-y-2 animate-fadeIn shadow-xl">
                <div className="w-8 h-8 rounded-full bg-[#E8B92C] text-[#04161C] font-bold text-lg flex items-center justify-center mx-auto">
                  ✓
                </div>
                <h3 className="font-heading text-lg font-bold">Thank You!</h3>
                <p className="text-xs font-sans">Your message has been sent successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2.5">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="block font-sans font-semibold text-[12px] leading-[18px] text-[#5F6B6F]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="your@email.com"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full h-[38px] px-3.5 rounded-[5px] bg-[#FAF7F2]/30 border border-[#5F6B6F]/40 font-sans font-normal text-[12px] text-[#5F6B6F] placeholder-[#5F6B6F]/70 focus:outline-none focus:border-[#1A3D4F] transition-all"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label className="block font-sans font-semibold text-[12px] leading-[18px] text-[#5F6B6F]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-[38px] px-3.5 rounded-[5px] bg-[#FAF7F2]/30 border border-[#5F6B6F]/40 font-sans font-normal text-[12px] text-[#5F6B6F] placeholder-[#5F6B6F]/70 focus:outline-none focus:border-[#1A3D4F] transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="block font-sans font-semibold text-[12px] leading-[18px] text-[#5F6B6F]">
                    Message
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full min-h-[78px] p-2.5 rounded-[5px] bg-[#FAF7F2]/30 border border-[#5F6B6F]/40 font-sans font-normal text-[12px] text-[#5F6B6F] placeholder-[#5F6B6F]/70 focus:outline-none focus:border-[#1A3D4F] transition-all resize-none"
                  />
                </div>

                {/* Centered Button & Security Note */}
                <div className="pt-1 flex flex-col items-center justify-center space-y-1.5">
                  <button
                    type="submit"
                    className="w-full max-w-[210px] h-[40px] rounded-[30px] hover:opacity-95 text-white font-sans font-semibold text-[14px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
                    style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                  >
                    <span>SEND</span>
                    <ArrowRight className="w-4 h-4 text-[#FAF7F2] transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="font-sans font-semibold text-[10.5px] leading-[18px] text-[#5F6B6F] text-center">
                    Your information is 100% secure and private.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. TABLET VIEW (640px - 1023px)                      */}
      {/* ---------------------------------------------------- */}
      <div className="hidden sm:block lg:hidden relative w-full aspect-[834/1380] overflow-hidden max-w-[834px] mx-auto">
        {/* Background Image: contact_us-hero-section-tablet.png */}
        <Image
          src="/contact_us-hero-section-tablet.png"
          alt="Contact Customer Support Tablet"
          fill
          priority
          unoptimized
          className="object-cover object-top pointer-events-none"
          sizes="100vw"
        />

        {/* Floating Request Info Overlay Card */}
        <div className="relative z-10 pt-8 sm:pt-10 md:pt-12 px-6 w-full flex justify-center">
          <div
            className="w-full max-w-[500px] md:max-w-[520px] rounded-[30px] p-6 sm:p-7 md:p-8 space-y-4 sm:space-y-5 shadow-sm"
            style={cardStyle}
          >
            {/* Header */}
            <div className="text-center space-y-1.5">
              <h1 className="font-heading text-[30px] sm:text-[34px] font-bold text-[#373737] leading-[38px] sm:leading-[42px] tracking-[-0.00015em]">
                Request Info
              </h1>
              <p className="font-sans font-semibold text-[13px] sm:text-[14px] leading-[22px] sm:leading-[26px] text-[#5F6B6F] text-center">
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
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1">
                    <label className="block font-sans font-semibold text-[13px] sm:text-[14px] leading-[22px] sm:leading-[26px] text-[#5F6B6F]">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full h-[40px] sm:h-[42px] px-3.5 sm:px-4 rounded-[5px] bg-[#FAF7F2]/30 border border-[#5F6B6F]/40 font-sans font-normal text-[13px] sm:text-[14px] text-[#5F6B6F] placeholder-[#5F6B6F]/70 focus:outline-none focus:border-[#1A3D4F] transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block font-sans font-semibold text-[13px] sm:text-[14px] leading-[22px] sm:leading-[26px] text-[#5F6B6F]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full h-[40px] sm:h-[42px] px-3.5 sm:px-4 rounded-[5px] bg-[#FAF7F2]/30 border border-[#5F6B6F]/40 font-sans font-normal text-[13px] sm:text-[14px] text-[#5F6B6F] placeholder-[#5F6B6F]/70 focus:outline-none focus:border-[#1A3D4F] transition-all"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label className="block font-sans font-semibold text-[13px] sm:text-[14px] leading-[22px] sm:leading-[26px] text-[#5F6B6F]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-[40px] sm:h-[42px] px-3.5 sm:px-4 rounded-[5px] bg-[#FAF7F2]/30 border border-[#5F6B6F]/40 font-sans font-normal text-[13px] sm:text-[14px] text-[#5F6B6F] placeholder-[#5F6B6F]/70 focus:outline-none focus:border-[#1A3D4F] transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="block font-sans font-semibold text-[13px] sm:text-[14px] leading-[22px] sm:leading-[26px] text-[#5F6B6F]">
                    Message
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full min-h-[90px] sm:min-h-[100px] p-3 sm:p-3.5 rounded-[5px] bg-[#FAF7F2]/30 border border-[#5F6B6F]/40 font-sans font-normal text-[13px] sm:text-[14px] text-[#5F6B6F] placeholder-[#5F6B6F]/70 focus:outline-none focus:border-[#1A3D4F] transition-all resize-none"
                  />
                </div>

                {/* Centered Button & Security Note */}
                <div className="pt-1.5 flex flex-col items-center justify-center space-y-1.5">
                  <button
                    type="submit"
                    className="w-full max-w-[240px] h-[44px] sm:h-[46px] rounded-[30px] hover:opacity-95 text-white font-sans font-semibold text-[15px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
                    style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                  >
                    <span>SEND</span>
                    <ArrowRight className="w-4 h-4 text-[#FAF7F2] transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="font-sans font-semibold text-[11.5px] sm:text-[12px] leading-[22px] sm:leading-[26px] text-[#5F6B6F] text-center">
                    Your information is 100% secure and private.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. DESKTOP VIEW (>= 1024px)                          */}
      {/* ---------------------------------------------------- */}
      <div className="hidden lg:flex relative w-full min-h-[814px] items-center">
        {/* Background Image: contact-hero-section.png */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/contact-hero-section.png"
            alt="Customer service representative at desk"
            fill
            priority
            unoptimized
            className="object-cover object-center pointer-events-none"
            sizes="100vw"
          />
        </div>

        {/* Floating Request Info Overlay Card (Frame 1000011950) */}
        <div className="relative z-10 max-w-[1446px] mx-auto px-[79px] w-full py-[89px] flex items-center justify-start">
          <div className="w-full max-w-[611px]">
            <div
              className="w-full rounded-[30px] py-[32px] px-[24px] space-y-6 shadow-sm"
              style={cardStyle}
            >
              {/* Centered Header */}
              <div className="text-center space-y-2">
                <h1 className="font-heading text-[36px] font-bold text-[#373737] leading-[44px] tracking-[-0.00015em]">
                  Request Info
                </h1>
                <p className="font-sans font-semibold text-[14px] leading-[26px] text-[#5F6B6F] text-center">
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
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-2 gap-6">
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
                        className="w-full h-[44px] px-4 rounded-[5px] bg-[#FAF7F2]/30 border border-[#5F6B6F]/40 font-sans font-normal text-[14px] text-[#5F6B6F] placeholder-[#5F6B6F]/70 focus:outline-none focus:border-[#1A3D4F] transition-all"
                      />
                    </div>

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
                        className="w-full h-[44px] px-4 rounded-[5px] bg-[#FAF7F2]/30 border border-[#5F6B6F]/40 font-sans font-normal text-[14px] text-[#5F6B6F] placeholder-[#5F6B6F]/70 focus:outline-none focus:border-[#1A3D4F] transition-all"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
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
                      className="w-full h-[44px] px-4 rounded-[5px] bg-[#FAF7F2]/30 border border-[#5F6B6F]/40 font-sans font-normal text-[14px] text-[#5F6B6F] placeholder-[#5F6B6F]/70 focus:outline-none focus:border-[#1A3D4F] transition-all"
                    />
                  </div>

                  {/* Message */}
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
                      className="w-full min-h-[127px] p-3.5 rounded-[5px] bg-[#FAF7F2]/30 border border-[#5F6B6F]/40 font-sans font-normal text-[14px] text-[#5F6B6F] placeholder-[#5F6B6F]/70 focus:outline-none focus:border-[#1A3D4F] transition-all resize-none"
                    />
                  </div>

                  {/* Centered Button & Security Note */}
                  <div className="pt-2 flex flex-col items-center justify-center space-y-2">
                    <button
                      type="submit"
                      className="w-full max-w-[356px] h-[48px] rounded-[30px] hover:opacity-95 text-white font-sans font-semibold text-base shadow-[0px_2px_4px_rgba(0,0,0,0.15)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
                      style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                    >
                      <span>SEND</span>
                      <ArrowRight className="w-4 h-4 text-[#FAF7F2] transition-transform group-hover:translate-x-1" />
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
      </div>

    </section>
  );
}
