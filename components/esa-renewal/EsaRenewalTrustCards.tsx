"use client";

import React from "react";
import Image from "next/image";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

interface TrustCard {
  icon: string;
  title: string;
  subtitle: string;
}

const CARDS: TrustCard[] = [
  {
    icon: "/esa-renewal/esa-renewal-afterherosection-secure-icon.svg",
    title: "Secure & Compliant",
    subtitle: "HIPAA-Aligned Platform",
  },
  {
    icon: "/esa-renewal/esa-renewal-afterherosection-evaluation-icon.svg",
    title: "Flexible Evaluations",
    subtitle: "Phone or Video Sessions",
  },
  {
    icon: "/esa-renewal/esa-renewal-afterherosection-scheduling-icon.svg",
    title: "Fast Scheduling",
    subtitle: "Same-Day Appointments",
  },
  {
    icon: "/esa-renewal/esa-renewal-afterherosection-online-icon.svg",
    title: "Fully Online",
    subtitle: "No In-Person Visits Required",
  },
];

export function EsaRenewalTrustCards() {
  return (
    <section className="w-full bg-[#FAF7F2] pt-14 pb-8 sm:pb-12 lg:pb-16">
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
          {CARDS.map((card, idx) => (
            <div key={idx} className="relative flex w-full flex-col">
              {/* Gold accent layer (Frame 1000011684) */}
              <div className="absolute inset-x-0 top-0 bottom-2 rounded-[20px] bg-[#E8B92C] shadow-[0px_2px_4px_rgba(0,0,0,0.15)]" />

              {/* White card (Frame 1000011683) */}
              <div className="relative mt-2 flex min-h-[160px] flex-1 flex-col items-center justify-center gap-2 rounded-[20px] bg-white px-4 pt-[60px] pb-[37px] text-center shadow-[0px_2px_4px_rgba(0,0,0,0.15)]">
                <h2
                  className="font-bold text-xl xl:text-2xl leading-[29px] tracking-[-0.017em] text-transparent bg-clip-text"
                  style={{ backgroundImage: TEAL_GRADIENT, fontFamily: "var(--font-lato), Lato, sans-serif" }}
                >
                  {card.title}
                </h2>
                <p className="font-sans text-sm xl:text-base font-semibold leading-[26px] text-[#5F6B6F]">
                  {card.subtitle}
                </p>
              </div>

              {/* Floating Top Circular Badge (Frame 1000011444) */}
              <div className="absolute left-[calc(50%-37.28px-1px)] -top-8 z-10 flex h-[74.56px] w-[74.56px] items-center justify-center rounded-full bg-white shadow-[0px_1.89px_3.78px_rgba(0,0,0,0.25)]">
                <Image
            quality={90}
                  src={card.icon}
                  alt={card.title}
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
