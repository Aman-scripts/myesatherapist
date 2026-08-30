"use client";

import React from "react";
import Image from "next/image";

export function ContactInfoCards() {
  const cards = [
    {
      title: "CALL US AT:",
      detail: "+1 (888) 412-4041",
      icon: "/contact_us-call-icon.svg",
      href: "tel:+18884124041",
      isLink: true,
    },
    {
      title: "EMAIL US AT:",
      detail: "info@myesatherapist.com",
      icon: "/contact_us-call-message-icon.svg",
      href: "mailto:info@myesatherapist.com",
      isLink: true,
    },
    {
      title: "REACH US AT:",
      line1: "780 Lynnhaven Pkwy",
      line2: "#400, Virginia Beach, VA",
      icon: "/contact_us-map-icon.svg",
      href: "#map",
      isLink: false,
    },
    {
      title: "OPEN HOURS:",
      detail: "Mon–Fri · 8am – 8pm ET",
      icon: "/footer-clock-icon.svg",
      href: "#hours",
      isLink: false,
    },
  ];

  return (
    <section className="w-full bg-[#EEEBE0] py-8 sm:py-10 lg:py-14">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Responsive Grid: 1 col on mobile, 2 cols on tablet/1024px (md/lg), 4 cols on desktop (xl) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
          {cards.map((card, idx) => {
            const Content = (
              <>
                {/* Left Icon Circle with Linear Gradient Background */}
                <div className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] xl:w-[56px] xl:h-[56px] rounded-full bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={24}
                    height={24}
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain filter brightness-0 invert"
                  />
                </div>

                {/* Right Text Content Stack */}
                <div className="min-w-0 flex-1 space-y-0.5 overflow-hidden">
                  {/* Heading: Manrope 600, responsive text sizing */}
                  <div className="font-sans font-semibold text-[15px] sm:text-[16px] xl:text-[18px] leading-[22px] sm:leading-[26px] xl:leading-[30px] bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent uppercase tracking-tight truncate">
                    {card.title}
                  </div>

                  {/* Description: Manrope 600, color #5F6B6F */}
                  {card.line1 ? (
                    <div className="font-sans font-semibold text-[13px] sm:text-[14px] xl:text-[16px] leading-[20px] sm:leading-[22px] xl:leading-[26px] text-[#5F6B6F] break-words">
                      <div>{card.line1}</div>
                      <div>{card.line2}</div>
                    </div>
                  ) : (
                    <div
                      className={`font-sans font-semibold text-[13px] sm:text-[14px] xl:text-[16px] leading-[20px] sm:leading-[22px] xl:leading-[26px] text-[#5F6B6F] break-words ${
                        card.isLink ? "underline underline-offset-2 decoration-1" : ""
                      }`}
                    >
                      {card.detail}
                    </div>
                  )}
                </div>
              </>
            );

            return card.isLink ? (
              <a
                key={idx}
                href={card.href}
                className="bg-white rounded-[20px] sm:rounded-[24px] px-4 sm:px-5 xl:px-6 py-4 sm:py-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[#E8E3DA] hover:shadow-md hover:border-[#1D6E72] transition-all group flex items-center gap-3 sm:gap-4"
              >
                {Content}
              </a>
            ) : (
              <div
                key={idx}
                className="bg-white rounded-[20px] sm:rounded-[24px] px-4 sm:px-5 xl:px-6 py-4 sm:py-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[#E8E3DA] transition-all group flex items-center gap-3 sm:gap-4"
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
