"use client";

import React from "react";
import Image from "next/image";


const steps = [
  {
    number: "1",
    image: "/howworks-section-one.png",
    title: "Set Up Your Appointment",
    description:
      "Create your account and choose a time that works for you to connect with a licensed mental health professional.",
  },
  {
    number: "2",
    image: "/howworks-section-two.png",
    title: "Speak With Professionals",
    description:
      "During the consultation, the professional reviews your emotional and mental health concerns and assesses whether an emotional support animal is appropriate.",
  },
  {
    number: "3",
    image: "/howworks-section-three.png",
    title: "Clinical Determination",
    description:
      "Following the professional evaluation, if deemed appropriate by the licensed professional, emotional support animal documentation is sent directly to your email. If not, no documentation is issued.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-14 sm:py-16 lg:py-20 bg-[#EEEBE0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[20px] shadow-[0_20px_60px_-15px_rgba(46,90,102,0.15)] px-6 py-10 sm:px-10 sm:py-14 lg:px-[142px] lg:py-[60px]">
          {/* Heading */}
          <div className="text-center mb-10 lg:mb-[72px] space-y-2">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-primary leading-tight tracking-[-0.006em]">
              How Online ESA Evaluation Works?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg font-semibold max-w-xl mx-auto">
              A simple 3-step process to complete your emotional support animal letter evaluation
            </p>
          </div>

          {/* 3 Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-11 gap-y-12">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center">
                {/* Circular Image with number badge */}
                <div className="relative w-[228px] h-[226px] shrink-0 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-[#EFFFF1] shadow-[0_10px_30px_-8px_rgba(46,90,102,0.25)]" />
                  <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                  {/* Number badge */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[65px] h-[65px] rounded-full bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] text-[#FAF7F2] font-bold text-3xl flex items-center justify-center shadow-md">
                    {step.number}
                  </div>
                </div>

                {/* Text */}
                <div className="space-y-2 pt-6 max-w-[273px]">
                  <h3 className="font-[family-name:var(--font-lato)] text-xl sm:text-2xl font-bold bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent tracking-[-0.017em]">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Get Started Button — matches HeroSection exactly */}
          <div className="flex justify-center mt-10 lg:mt-12">
            <a
              href="#"
              className="flex items-center gap-3 pl-6 pr-2 py-2 rounded-[30px] text-white font-semibold text-sm sm:text-[16px] transition-opacity hover:opacity-90 min-h-[44px] sm:h-[48px] shadow-md"
              style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
            >
              Get Started
              <span className="w-[42px] h-[42px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image src="/send-icon.svg" alt="" width={18} height={20} />
              </span>
            </a>
          </div>

          {/* Payment note */}
          <div className="mt-6 flex justify-center">
            <div className="inline-block bg-[#FCE4DC] rounded-lg px-6 py-2 sm:px-8 sm:py-2 text-sm font-semibold text-[#475467] border border-[#E76F51] text-center">
              We authorize your payment first, but only charge it after your evaluation is completed.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
