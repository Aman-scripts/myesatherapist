"use client";

import React from "react";
import Image from "next/image";

const benefitsData = [
  {
    icon: "/psd-letter/whobenefits-section-backupdocumentation.svg",
    title: "HIPAA-Compliant Online Process",
    description: "Complete your PSD letter evaluation through a secure telehealth platform built to protect your personal information and privacy.",
  },
  {
    icon: "/psd-letter/whobenefits-section-newservicedog.svg",
    title: "Licensed Mental Health Professionals",
    description: "Connect with qualified, state-licensed professionals (LCSWs, LICSWs, LPCs) who assess your needs and determine whether a PSD letter is clinically appropriate.",
  },
  {
    icon: "/psd-letter/whobenefits-section-frequentflayers.svg",
    title: "Convenient Virtual Evaluations",
    description: "Schedule your evaluation online and speak with a licensed professional without taking time out to visit an office.",
  },
  {
    icon: "/psd-letter/whobenefits-section-upgradingform.svg",
    title: "Transparent Pricing",
    description: "With no hidden fees or surprise charges, you’ll know the entire cost upfront before starting your PSD letter evaluation.",
  },
  {
    icon: "/psd-letter/whobenefits-section-livingnopet.svg",
    title: "Private and Confidential Care",
    description: "Discuss your mental health needs in a confidential setting designed to make your online PSD evaluation comfortable and secure.",
  },
  {
    icon: "/psd-letter/whobenefits-section-veteranspsd.svg",
    title: "Serving All 50 U.S. States",
    description: "Get connected with a professional licensed in your state, making PSD evaluations accessible to individuals nationwide.",
  },
];

const TEAL_GRADIENT = "var(--color-gradient)";

export function WhoBenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-white w-full pt-0 pb-8 sm:pb-12 lg:py-0">
      {/* Mobile Image (< 640px) - Rendered FIRST above text */}
      <div className="sm:hidden w-full">
        <div className="relative w-full">
          <Image
            quality={90}
            src="/psd-letter/whobenefits-section-mobile.webp"
            alt="Why Choose My ESA Therapist for Your Online PSD Letter"
            width={390}
            height={652}
            className="w-full h-auto block"
          />
          {/* Centered Heart-Paw Badge Icon directly on Dark Green Curved Line (95.1% from top) */}
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-[95.1%] w-[54px] h-[54px] z-30 pointer-events-none">
            <Image
              src="/psd-letter/whobenefits-section-icon.svg"
              alt="Heart Paw Badge"
              width={73}
              height={73}
              unoptimized
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Tablet Image (640px to 1023px) - Rendered FIRST above text */}
      <div className="hidden sm:block lg:hidden w-full">
        <div className="relative w-full">
          <Image
            quality={90}
            src="/psd-letter/whobenefits-section-tablet.webp"
            alt="Why Choose My ESA Therapist for Your Online PSD Letter"
            width={833}
            height={1140}
            className="w-full h-auto block"
          />
          {/* Centered Heart-Paw Badge Icon directly on Dark Green Curved Line (93.9% from top) */}
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-[93.9%] w-[68px] h-[68px] z-30 pointer-events-none">
            <Image
              src="/psd-letter/whobenefits-section-icon.svg"
              alt="Heart Paw Badge"
              width={73}
              height={73}
              unoptimized
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Text Content Container (Renders AFTER image on Mobile/Tablet) */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-6 sm:py-8 lg:py-10 xl:py-16">
        <div className="w-full lg:w-[52%] xl:w-[55%] max-w-[660px]">

          {/* Header */}
          <div className="mb-5 sm:mb-8 text-left">
            <h2 className="heading-h2 capitalize mb-2 sm:mb-3">
              Why Choose My ESA Therapist <br className="hidden sm:inline" />
              for Your Online PSD Letter
            </h2>
            <p className="body-large">
              Get your PSD evaluation online with licensed professionals, clear pricing, secure consultations, and support throughout the process.
            </p>
          </div>

          {/* 6 Benefit Cards (2 Columns Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-2.5 xl:gap-[15px] max-w-[630px] lg:max-w-[490px] xl:max-w-[630px]">
            {benefitsData.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[10px] p-3 lg:p-2.5 xl:pt-[15px] xl:pr-[20px] xl:pb-[15px] xl:pl-[20px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex flex-col justify-center min-h-[92px] lg:min-h-[88px] xl:min-h-[110px]"
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  {/* Circular Icon Container */}
                  <div className="w-[34px] h-[34px] xl:w-[38px] xl:h-[38px] rounded-full bg-[#AEBBBE33] flex items-center justify-center shrink-0">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={18}
                      height={18}
                      unoptimized
                      className="object-contain"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>

                  <h3 className="heading-h4 text-color-gradient flex-1">
                    {item.title}
                  </h3>
                </div>

                <p className="body-small">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Desktop Image Frame (1024px and up) */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 h-full w-[42%] xl:w-[45%] max-w-[567px] pointer-events-none z-10">
        <div className="relative w-full h-full">
          {/* 1. Main Photo */}
          <div className="absolute right-0 top-0 bottom-0 w-full h-full z-10">
            <Image
              quality={90}
              src="/psd-letter/whobenefits-section-image.webp"
              alt="Why Choose My ESA Therapist for Your Online PSD Letter"
              fill
              className="object-cover object-right h-full w-full"
              sizes="(max-width: 1280px) 42vw, 567px"
            />
          </div>

          {/* 2. Dark Green Decorative Curve Line SVG */}
          <div className="absolute left-[-20px] top-0 bottom-0 w-[35%] max-w-[200px] h-full z-20 pointer-events-none">
            <Image
              src="/psd-letter/whobenefits-section-line.svg"
              alt=""
              width={200}
              height={701}
              unoptimized
              className="object-contain w-full h-full object-left"
            />
          </div>

          {/* 3. Floating Heart-Paw Badge Icon - Centered in curve dip at 6.7% width, 50% height */}
          <div className="absolute left-[6.7%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[52px] h-[52px] xl:w-[73px] xl:h-[73px] z-30 pointer-events-none">
            <Image
              src="/psd-letter/whobenefits-section-icon.svg"
              alt="Heart Paw Badge"
              width={73}
              height={73}
              unoptimized
              className="object-contain w-full h-full drop-shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
