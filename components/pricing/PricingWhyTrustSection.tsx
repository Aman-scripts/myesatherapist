"use client";

import React from "react";
import Image from "next/image";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

const TRUST_FEATURES = [
  {
    title: "Licensed Professionals",
    description: "All evaluations by independent U.S.-licensed mental health professionals.",
    icon: "/pricing/pricingsection_whyesatrust_us-licensed-icon.svg",
  },
  {
    title: "No Guarantee Policy",
    description: "Recommendations follow clinical judgment — never sales pressure or guarantees.",
    icon: "/pricing/pricingsection_whyesatrust_us-nopolicy-icon.svg",
  },
  {
    title: "HIPAA Secure",
    description: "Your health information is protected on our fully HIPAA-compliant platform.",
    icon: "/pricing/pricingsection_whyesatrust_us-hippasecure-icon.svg",
  },
  {
    title: "Serving Since 2019",
    description: "Thousands of clients helped nationwide with a transparent, ethical process.",
    icon: "/pricing/pricingsection_whyesatrust_us-serving-icon.svg",
  },
];

export function PricingWhyTrustSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 sm:py-20 xl:py-[70px] overflow-visible">
      <div className="max-w-[1446px] mx-auto px-4 sm:px-8 xl:px-[80px]">
        {/* Frame 1261153637: Section Heading */}
        <div className="text-center max-w-[854px] mx-auto mb-16 sm:mb-20 space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl xl:text-[44px] font-bold text-[#2E5A66] leading-tight xl:leading-[54px] tracking-[-0.00015em]">
            Why ESA owners Trust Us
          </h2>
          <p className="font-sans font-semibold text-sm sm:text-base xl:text-[18px] text-[#5F6B6F] leading-relaxed xl:leading-[30px] max-w-[854px] mx-auto">
            We stand apart by providing legitimate, professional ESA evaluations conducted by licensed clinicians.
          </p>
        </div>

        {/* Frame 1261153636: 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 lg:gap-6 max-w-[1286px] mx-auto pt-2">
          {TRUST_FEATURES.map((item, index) => (
            <div
              key={index}
              className="relative w-full sm:max-w-[302px] mx-auto h-[190px] rounded-[20px] bg-[#E8B92C] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex flex-col justify-end"
            >
              {/* Frame 1000011444: Floating Top Circular Badge with Icon */}
              <div className="absolute -top-[32px] left-1/2 -translate-x-1/2 w-[74.56px] h-[74.56px] rounded-full bg-white shadow-[0px_1.88955px_3.7791px_rgba(0,0,0,0.25)] flex items-center justify-center p-3 z-20">
                <div className="w-[32px] h-[32px] relative flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={32}
                    height={32}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              {/* Frame 1000011683: White Inner Card Body */}
              <div className="w-full h-[183px] bg-white rounded-[20px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] pt-11 pb-4 px-4 flex flex-col items-center justify-center text-center">
                {/* Frame 1000011458: Title with Teal Gradient */}
                <h3
                  className="font-[family-name:var(--font-lato)] font-bold text-[20px] sm:text-[22px] xl:text-[24px] leading-[29px] tracking-[-0.017em] bg-clip-text text-transparent mb-2 whitespace-nowrap"
                  style={{ backgroundImage: TEAL_GRADIENT }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-sans font-semibold text-[13px] sm:text-[14px] xl:text-[16px] leading-[22px] xl:leading-[26px] text-[#5F6B6F] max-w-[237px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
