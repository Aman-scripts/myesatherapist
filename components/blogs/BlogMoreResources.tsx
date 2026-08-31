"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const resources = [
  {
    title: "Emotional Support Animal vs. Service Animal: What's the Difference? by DR Marcus Cole",
    description: "Explore the key differences between Emotional Support Animals, service animals, and psychiatric service dogs.",
    href: "#",
  },
  {
    title: "How an Emotional Support Animal Can Support Daily Well-Being by DR Marcus Cole",
    description: "Explore the key differences between Emotional Support Animals, service animals, and psychiatric service dogs.",
    href: "#",
  },
  {
    title: "What Makes an Emotional Support Animal Letter Legitimate? by DR Marcus Cole",
    description: "Explore the key differences between Emotional Support Animals, service animals, and psychiatric service dogs.",
    href: "#",
  },
];

export function BlogMoreResources() {
  return (
    <section className="w-full bg-[#EEEBE0] py-14 sm:py-20 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-[640px] mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#2E5A66] leading-[1.2] tracking-tight">
            More ESA Resources
          </h2>
          <p className="font-sans text-sm sm:text-base lg:text-[18px] font-semibold text-[#5F6B6F] leading-relaxed">
            Get answers to common questions about ESA letters and our service.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {resources.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] shadow-[0px_2px_12px_rgba(0,0,0,0.06)] border border-[#EAE5DC] overflow-hidden flex flex-col justify-between hover:shadow-[0_12px_32px_rgba(26,61,79,0.1)] hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Card Image */}
              <div className="relative w-full h-[220px] sm:h-[260px] overflow-hidden">
                <Image
                  src="/blog_cards.png"
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <h3 className="font-heading text-lg sm:text-[22px] font-bold text-[#2E5A66] leading-[1.3] group-hover:text-[#184F59] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm lg:text-[15px] text-[#475467] leading-[24px] font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Get Started Button */}
                <div className="pt-2">
                  <Link
                    href={item.href}
                    className="inline-flex items-center justify-between pl-6 pr-1.5 w-[160px] sm:w-[171px] h-[46px] sm:h-[48px] rounded-[30px] text-white font-sans font-semibold text-sm sm:text-base shadow-md hover:opacity-95 transition-all group"
                    style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                  >
                    <span>Get Started</span>
                    <span className="w-[34px] h-[34px] rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 shadow-sm group-hover:translate-x-0.5 transition-transform">
                      <Image
                        src="/send-icon.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="w-3.5 h-3.5 object-contain"
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
