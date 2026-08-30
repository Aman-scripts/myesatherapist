"use client";

import React, { useState } from "react";
import Image from "next/image";

export function ContactSection() {
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

  const contactCards = [
    {
      title: "CALL US AT:",
      detail: "+1 (888) 412-4041",
      icon: "/contact_us-call-icon.svg",
      href: "tel:+18884124041",
    },
    {
      title: "EMAIL US AT:",
      detail: "info@myesatherapist.com",
      icon: "/contact_us-call-message-icon.svg",
      href: "mailto:info@myesatherapist.com",
    },
    {
      title: "REACH US AT:",
      detail: "780 Lynnhaven Pkwy #400, Virginia Beach, VA",
      icon: "/contact_us-map-icon.svg",
      href: "#map",
    },
    {
      title: "OPEN HOURS:",
      detail: "Mon–Fri · 8am – 8pm ET",
      icon: "/footer-clock-icon.svg",
      href: "#hours",
    },
  ];

  return (
    <div className="w-full bg-[#FAF7F2]">
      {/* 1. HERO SECTION WITH FIGMA BACKGROUND & OVERLAY CARD (Frame 1261153618) */}
      <section className="relative w-full min-h-[640px] sm:min-h-[720px] lg:min-h-[780px] bg-[#F7EAD6] overflow-hidden flex items-center">
        {/* Background Image: contact_us_hero-section.png */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/contact_us_hero-section.png"
            alt="Customer service representative at desk"
            fill
            priority
            className="object-cover object-right lg:object-center"
            sizes="100vw"
          />
        </div>

        {/* Floating Card & Content Layer */}
        <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 w-full py-12 lg:py-16">
          <div className="max-w-[580px]">
            {/* Request Info Card (Frame 1000011950) */}
            <div className="bg-[#F8DFBE]/95 backdrop-blur-sm rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 border border-[#EAC9A0]/60 shadow-2xl space-y-6">
              
              {/* Header Title & Subtitle (Centered) */}
              <div className="text-center space-y-2">
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1E3942] leading-tight">
                  Request Info
                </h1>
                <p className="text-xs sm:text-sm text-[#263B42]/90 font-sans font-medium">
                  Feel Free To Connect With Us! (24×7 Available At Your Service)
                </p>
              </div>

              {submitted ? (
                <div className="bg-[#1D6E72] text-white p-6 rounded-2xl text-center space-y-2 animate-fadeIn">
                  <div className="w-10 h-10 rounded-full bg-[#E8B92C] text-[#04161C] font-bold text-xl flex items-center justify-center mx-auto">
                    ✓
                  </div>
                  <h3 className="font-heading text-xl font-bold">Thank You!</h3>
                  <p className="text-sm font-sans">Your message has been sent successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
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
                        className="w-full h-[46px] sm:h-[50px] px-4 rounded-[12px] bg-[#F5D8B4]/80 border border-[#E5C49B] font-sans text-sm sm:text-base text-[#1E3942] placeholder-[#A68C6D] focus:outline-none focus:border-[#1E3942] focus:bg-[#FAF0DD] transition-all"
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
                        className="w-full h-[46px] sm:h-[50px] px-4 rounded-[12px] bg-[#F5D8B4]/80 border border-[#E5C49B] font-sans text-sm sm:text-base text-[#1E3942] placeholder-[#A68C6D] focus:outline-none focus:border-[#1E3942] focus:bg-[#FAF0DD] transition-all"
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
                      className="w-full h-[46px] sm:h-[50px] px-4 rounded-[12px] bg-[#F5D8B4]/80 border border-[#E5C49B] font-sans text-sm sm:text-base text-[#1E3942] placeholder-[#A68C6D] focus:outline-none focus:border-[#1E3942] focus:bg-[#FAF0DD] transition-all"
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
                      className="w-full p-4 rounded-[12px] bg-[#F5D8B4]/80 border border-[#E5C49B] font-sans text-sm sm:text-base text-[#1E3942] placeholder-[#A68C6D] focus:outline-none focus:border-[#1E3942] focus:bg-[#FAF0DD] transition-all resize-none"
                    />
                  </div>

                  {/* Centered Button & Security Note */}
                  <div className="pt-2 flex flex-col items-center justify-center space-y-3">
                    <button
                      type="submit"
                      className="w-[200px] sm:w-[240px] h-[52px] rounded-full bg-[#1D6E72] hover:bg-[#165559] text-white font-sans font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <span>SEND</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
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

      {/* 2. CONTACT INFO CARDS SECTION (4 Cards Grid) */}
      <section className="w-full py-12 sm:py-16 bg-[#FAF7F2]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, idx) => (
              <a
                key={idx}
                href={card.href}
                className="bg-white rounded-[24px] p-6 shadow-sm border border-[#2E5A66]/10 hover:shadow-md hover:border-[#E8B92C] transition-all group flex flex-col items-center text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-[#FAF7F2] border border-[#2E5A66]/15 flex items-center justify-center group-hover:bg-[#E8B92C]/20 group-hover:border-[#E8B92C] transition-all shrink-0">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={24}
                    height={24}
                    className="object-contain"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>

                <div>
                  <div className="text-xs font-sans font-bold text-[#E8B92C] tracking-wider uppercase mb-1">
                    {card.title}
                  </div>
                  <div className="text-base font-sans font-bold text-[#1E3942] group-hover:text-[#1D6E72] transition-colors leading-snug">
                    {card.detail}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* 3. INTERACTIVE MAP CONTAINER */}
          <div id="map" className="mt-12 w-full rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-lg border border-[#2E5A66]/10 h-[360px] sm:h-[450px] relative">
            <iframe
              title="Office Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.215579976378!2d-76.0825!3d36.8189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89bae9415444a7ab%3A0x2424b52b22f4cf00!2s780%20Lynnhaven%20Pkwy%20%23400%2C%20Virginia%20Beach%2C%20VA%2023452!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
