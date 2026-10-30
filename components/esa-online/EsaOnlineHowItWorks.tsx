import React from "react";
import Image from "next/image";
import { CtaButton } from "./EsaOnlineShared";

const STEPS = [
  {
    image: "/esa-renewal/esa-renewal-processworks-step1.webp",
    title: "Set Up Your Appointment",
    description:
      "Create your account and choose a time that works for you to connect with a licensed mental health professional.",
  },
  {
    image: "/esa-renewal/esa-renewal-processworks-step2.webp",
    title: "Speak With Professionals",
    description:
      "During the consultation, the professional reviews your emotional and mental health concerns and assesses whether an emotional support animal is appropriate.",
  },
  {
    image: "/esa-renewal/esa-renewal-processworks-step3.webp",
    title: "Clinical Review & Documentation",
    description:
      "Following the evaluation, if the licensed professional determines an emotional support animal is appropriate, documentation is sent directly to you.",
  },
];

function StepArrow() {
  return (
    <svg viewBox="0 0 36 16" className="hidden md:block mt-[105px] h-4 w-9 shrink-0 text-[#1A3D4F]" aria-hidden="true">
      <path d="M0 8h28" stroke="currentColor" strokeWidth="2" />
      <path d="M24 2l8 6-8 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function EsaOnlineHowItWorks() {
  return (
    <section id="how-it-works" className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-2 text-center max-w-[820px]">
          <h2 className="heading-h2 text-primary">How Does Online ESA Evaluation Work</h2>
          <p className="body-large text-body-text">
            A simple 3-step process to complete your emotional support animal letter evaluation.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-12 md:flex-row md:items-start md:justify-center md:gap-4">
          {STEPS.map((step, index) => (
            <React.Fragment key={step.title}>
              {index > 0 && <StepArrow />}
              <div className="flex w-full max-w-[300px] flex-col items-center">
                <div className="relative h-[226px] w-[228px]">
                  <div className="absolute inset-0 rounded-full bg-[#EFFFF1]/80 shadow-[0px_2px_4px_rgba(0,0,0,0.25)]" />
                  <div className="absolute left-[14px] top-[13px] h-[200px] w-[200px] overflow-hidden rounded-full">
                    <Image src={step.image} alt="" fill unoptimized className="object-cover" sizes="200px" />
                  </div>
                </div>
                <div className="mt-6 flex w-full flex-col items-center gap-2 text-center">
                  <h3 className="heading-h3 text-[#1A3D4F]">{step.title}</h3>
                  <p className="body-text text-body-text">{step.description}</p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        <CtaButton href="/pricing/" variant="accent">
          Get Started
        </CtaButton>
      </div>
    </section>
  );
}
