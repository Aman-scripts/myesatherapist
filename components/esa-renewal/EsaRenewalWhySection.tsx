"use client";

import React from "react";
import Image from "next/image";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

interface WhyCard {
  title: string;
  description: string;
}

const CARDS: WhyCard[] = [
  {
    title: "Legitimate Process",
    description:
      "Renewal evaluations are conducted by licensed professionals and are not issued automatically. Each provider independently reviews the information shared during the evaluation and determines whether updated documentation may be appropriate based on their professional judgment.",
  },
  {
    title: "Remote Evaluation",
    description:
      "The renewal process is completed online and is intended for individuals seeking a genuine evaluation experience. Sessions are designed to fit into everyday schedules, allowing you to participate from home rather than attending in-person appointments.",
  },
  {
    title: "Licensed Professionals",
    description:
      "Licensed mental health professionals evaluate whether an individual’s emotional or mental health condition aligns with recognized DSM standards. ESA documentation is only considered when emotional support is found clinically appropriate through professional assessment.",
  },
];

export function EsaRenewalWhySection() {
  return (
    <section className="w-full bg-white relative overflow-hidden lg:min-h-[85vw] xl:min-h-0">
      {/* Illustration: natural 681x1226 artwork, full section height, flush to the right edge (xl and up) */}
      <div className="hidden lg:block absolute inset-y-0 right-0 aspect-[681/1226]">
        {/* Floating Heart & Paw Circle Badge (Frame 1261153622) */}
        <div className="absolute left-[7%] top-[38.4%] z-20 w-[56px] h-[56px] xl:w-[73px] xl:h-[73px]">
          <Image
            src="/about-us/about_us-legimateesasection-hearticon.svg"
            alt="Compassionate verified support badge"
            width={73}
            height={73}
            className="object-contain filter drop-shadow-[0px_1px_4px_rgba(0,0,0,0.25)]"
          />
        </div>
        <Image
          src="/esa-renewal/esa-renewal-whyconsiderrenew-image.png"
          alt="Licensed emotional support animal therapist evaluation process"
          fill
          priority
          className="object-cover object-right"
          sizes="681px"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-8 lg:pl-[4.5vw] xl:pl-20 xl:pr-0 py-16 sm:py-20 lg:py-[4.5vw] xl:py-[65px]">
        {/* Left Column: Heading + Subtitle + 3 Cards (Frame 1261153773) */}
        <div className="w-full max-w-[626px] lg:max-w-[46vw] xl:max-w-[626px] flex flex-col gap-10 lg:gap-[3vw] xl:gap-14">
          {/* Header Text (Frame 1000011447) */}
          <div className="flex flex-col gap-5 lg:gap-[1.95vw] xl:gap-7">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.7vw] xl:text-[44px] font-bold text-[#2E5A66] leading-[1.2] lg:leading-[3.4vw] xl:leading-[54px] tracking-[-0.00015em] max-w-[541px]">
              Why Consider Renewing Your ESA Letter Through Our Platform
            </h2>
            <p className="font-sans text-base sm:text-[18px] lg:text-[1.25vw] xl:text-[18px] text-[#5F6B6F] font-semibold leading-[1.67]">
              Housing providers may ask for current emotional support animal letters when reviewing accommodation requests. If the document is outdated, it may no longer be accepted in certain housing situations. Our platform is designed to help individuals reconnect with a licensed mental health professional who can review their current emotional needs through an evaluation.
            </p>
          </div>

          {/* 3 Feature Cards (Frame 1261153772) */}
          <div className="flex flex-col gap-6 lg:gap-[1.6vw] xl:gap-8">
            {CARDS.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] rounded-[20px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] overflow-hidden flex items-stretch"
              >
                {/* Left 13px Teal Gradient Stripe (Frame 13) */}
                <div
                  className="w-[13px] shrink-0"
                  style={{ backgroundImage: TEAL_GRADIENT }}
                />

                {/* Card Body */}
                <div className="flex flex-1 flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-[1.7vw] xl:gap-6 py-6 lg:py-[1.8vw] xl:py-6 pl-5 sm:pl-6 lg:pl-[1.7vw] xl:pl-6 pr-5 sm:pr-8 lg:pr-[2vw] xl:pr-8">
                  {/* Circle Icon Badge (Frame 1000011444) */}
                  <div className="w-[66px] h-[66px] sm:w-[74.56px] sm:h-[74.56px] lg:w-[4.6vw] lg:h-[4.6vw] xl:w-[74.56px] xl:h-[74.56px] rounded-full bg-white shadow-[0px_1.89px_3.78px_rgba(0,0,0,0.25)] flex items-center justify-center shrink-0">
                    <Image
                      src="/esa-renewal/esa-renewal-whyconsiderrenew-allthreecards-icon.svg"
                      alt={card.title}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>

                  {/* Text Details */}
                  <div className="flex flex-col gap-1.5 flex-1">
                    <h3 className="font-heading font-bold text-lg sm:text-[20px] lg:text-[1.4vw] xl:text-[20px] text-[#2E5A66] leading-tight xl:leading-7">
                      {card.title}
                    </h3>
                    <p className="font-sans text-[13px] sm:text-[14px] lg:text-[1.1vw] xl:text-[14px] text-[#5F6B6F] font-semibold leading-[1.75] sm:leading-[26px] lg:leading-[1.8] xl:leading-[26px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Illustration for smaller screens: stacked below the content */}
        <div className="lg:hidden relative mt-10 ml-auto w-full max-w-[340px] aspect-[681/1226]">
          <Image
            src="/esa-renewal/esa-renewal-whyconsiderrenew-image.png"
            alt="Licensed emotional support animal therapist evaluation process"
            fill
            className="object-contain object-right"
            sizes="340px"
          />
        </div>
      </div>
    </section>
  );
}
