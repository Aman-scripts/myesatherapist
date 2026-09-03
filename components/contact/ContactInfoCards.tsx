"use client";

import React from "react";
import Image from "next/image";

export function ContactInfoCards() {
  const cards = [
    {
      title: "CALL US AT:",
      detail: "+1 (888) 412-4041",
      icon: "/contact/contact_us-call-icon.svg",
      href: "tel:+18884124041",
      isLink: true,
    },
    {
      title: "EMAIL US AT:",
      detail: "info@myesatherapist.com",
      icon: "/contact/contact_us-call-message-icon.svg",
      href: "mailto:info@myesatherapist.com",
      isLink: true,
    },
    {
      title: "REACH US AT:",
      detail: "780 Lynnhaven Pkwy #400, Virginia Beach,VA",
      icon: "/contact/contact_us-map-icon.svg",
      href: "#map",
      isLink: false,
    },
    {
      title: "OPEN HOURS:",
      detail: "Mon–Fri · 8am – 8pm ET",
      icon: "/common/footer-clock-icon.svg",
      href: "#hours",
      isLink: false,
    },
  ];

  return (
    <section className="w-full bg-[#FAF7F2] py-8 sm:py-10 lg:py-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Frame 1000011803: Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {cards.map((card, idx) => {
            const Content = (
              <>
                {/* Frame 13: Left Icon Circle */}
                <div className="w-[45px] h-[45px] rounded-full bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={20}
                    height={20}
                    className="w-4 h-4 sm:w-[18px] sm:h-[18px] object-contain filter brightness-0 invert"
                  />
                </div>

                {/* Frame 1000011796: Right Text Content Stack */}
                <div className="min-w-0 flex-1 flex flex-col justify-center">
                  {/* Title: Manrope 600 18px/30px with Teal Gradient text */}
                  <div className="font-sans font-semibold text-[16px] sm:text-[18px] leading-[26px] sm:leading-[30px] bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent uppercase tracking-tight truncate">
                    {card.title}
                  </div>

                  {/* Detail: Manrope 600 16px/26px #5F6B6F */}
                  <div
                    className={`font-sans font-semibold text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-[#5F6B6F] ${
                      card.isLink ? "underline underline-offset-2" : ""
                    }`}
                  >
                    {card.detail}
                  </div>
                </div>
              </>
            );

            return card.isLink ? (
              <a
                key={idx}
                href={card.href}
                className="bg-white rounded-[20px] px-5 py-4 min-h-[88px] shadow-[0px_1px_4px_rgba(0,0,0,0.25)] hover:shadow-md transition-all group flex items-center gap-3.5"
              >
                {Content}
              </a>
            ) : (
              <div
                key={idx}
                className="bg-white rounded-[20px] px-5 py-4 min-h-[88px] shadow-[0px_1px_4px_rgba(0,0,0,0.25)] transition-all group flex items-center gap-3.5"
              >
                {Content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
