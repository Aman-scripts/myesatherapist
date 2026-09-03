"use client";

import React from "react";
import Image from "next/image";

export function FederalHousingRulesSection() {
  const handleScrollToGrid = () => {
    const section = document.getElementById("choose-state-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#FAF7F2] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#EAE5DC]/60 overflow-hidden">
      {/* Frame 1000011447 */}
      <div className="max-w-[1254px] mx-auto flex flex-col items-center text-center gap-2">
        
        {/* Federal Housing Protections & State ESA Rules */}
        <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] lg:leading-[54px] tracking-[-0.00015em] text-[#2E5A66] max-w-[955px] mb-2">
          Federal Housing Protections & State ESA Rules
        </h2>

        {/* Body Description Text */}
        <div className="max-w-[1044px] flex flex-col gap-3 font-sans font-semibold text-base sm:text-[18px] leading-[30px] text-[#5F6B6F] text-center mb-8">
          <p>
            The Fair Housing Act (FHA) ensures your right to live with an emotional support animal in housing. Valid documentation must come from a licensed healthcare professional who can assess your need for an emotional support animal. Certain states have additional requirements.
          </p>
          <p>
            For instance, Arkansas, California, Iowa, Louisiana, and Montana require a minimum 30-day patient–provider relationship before a professional can provide ESA documentation.
          </p>
        </div>

        {/* Frame 1000011890: CTA Button */}
        <button
          type="button"
          onClick={handleScrollToGrid}
          className="inline-flex items-center justify-between pl-8 pr-1.5 h-[48px] min-w-[252px] rounded-[30px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] hover:opacity-95 transition-opacity cursor-pointer group"
          style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
        >
          <span className="font-sans font-semibold text-[16px] leading-[26px] text-white whitespace-nowrap mr-3">
            Learn with ESA Laws
          </span>

          {/* Ellipse 14 with Navigation Icon */}
          <span className="w-[42px] h-[42px] rounded-full bg-[#FAF7F2] shadow-[0px_3.03px_6.07px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <Image
              src="/common/send-icon.svg"
              alt="Arrow icon"
              width={22}
              height={24}
              className="w-[20px] h-[22px] object-contain"
            />
          </span>
        </button>

      </div>
    </section>
  );
}
