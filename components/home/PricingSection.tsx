"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    description: "Ideal for small projects",
    currency: "$",
    price: "99",
    priceNote: "/per user",
    features: [
      "Phone consultation",
      "PSD letter if qualified",
      "Official clinic letterhead",
      "Licensed professional",
      "Email delivery",
    ],
    cta: "Get Started",
    secondaryNote: "or contact sales",
    highlighted: false,
  },
  {
    name: "Standard",
    description: "Ideal for small projects",
    currency: "",
    price: "149",
    priceNote: "/per user",
    features: [
      "Video consultation",
      "PSD letter if qualified",
      "Licensed professional",
      "Priority 24-hour delivery",
      "Email delivery",
    ],
    cta: "Start Consultation",
    secondaryNote: "",
    highlighted: true,
  },
];

export function PricingSection() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#EEEBE0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: heading + plan cards */}
          <div className="w-full lg:flex-1 lg:max-w-[626px]">
            <div className="text-center lg:text-left mb-10 space-y-3">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-primary leading-tight tracking-[-0.006em]">
                Plans &amp; Pricing
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg font-semibold max-w-lg mx-auto lg:mx-0">
                Choose the plan that fits your needs. All plans include essential features to get you started, with options to scale as you grow. No hidden fees and the flexibility to change anytime.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-center lg:justify-start gap-6">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative w-full max-w-[300px] rounded-[28px] flex flex-col ${
                    plan.highlighted ? "bg-[#E8B92C] pt-2.5 px-1 pb-1 shadow-[0_25px_50px_-15px_rgba(232,185,44,0.5)]" : ""
                  }`}
                >
                  {plan.highlighted && (
                    <div className="text-center text-primary text-xs font-bold tracking-[0.08em] uppercase pb-2.5">
                      Most Popular
                    </div>
                  )}
                  <div
                    className={`flex flex-col justify-between h-full rounded-[24px] bg-white px-8 pt-[30px] pb-8 shadow-[0_10px_35px_-15px_rgba(46,90,102,0.25)] ${
                      plan.highlighted ? "" : "border border-[#E1E1E1]"
                    }`}
                  >
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <h3 className="font-heading text-xl font-bold text-primary">
                            {plan.name}
                          </h3>
                          <p className="text-sm text-[#666666] font-semibold">{plan.description}</p>
                        </div>
                        <div className="flex items-baseline gap-0.5">
                          <span className="font-heading text-2xl font-bold text-primary">
                            ${plan.price}
                          </span>
                          <span className="text-sm text-muted-foreground font-semibold">
                            {plan.priceNote}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-2.5">
                        {plan.features.map((f) => (
                          <li key={f} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-[#1A1A1A] shrink-0" strokeWidth={2.5} />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 space-y-2">
                      <a
                        href="#"
                        className="block text-center py-3 rounded-full bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] text-white font-bold text-base hover:opacity-90 transition-opacity shadow-md"
                      >
                        {plan.cta}
                      </a>
                      {!plan.highlighted && (
                        <p className="text-center text-sm text-[#1A1A1A] font-medium">
                          {plan.secondaryNote}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: dog photo */}
          <div className="w-full max-w-[441px] lg:flex-1 lg:max-w-none">
            <div className="relative w-full aspect-[441/376] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/pricing-section-dog.png"
                alt="Dog giving a paw to its owner"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 441px, 90vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
