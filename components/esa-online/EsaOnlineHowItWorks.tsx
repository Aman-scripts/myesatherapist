import React from "react";
import Image from "next/image";
import { CtaButton } from "./EsaOnlineShared";

const STEPS = [
  {
    image: "/esa-renewal/esa-renewal-processworks-step1.webp",
    title: "Set Up Your Appointment",
    description:
      "Create your account and choose a time that works for you to connect with a state-licensed mental health professional.",
  },
  {
    image: "/esa-renewal/esa-renewal-processworks-step2.webp",
    title: "Speak With Professionals",
    description:
      "During your consultation, the clinician reviews your emotional and mental health concerns and discusses whether an emotional support animal may be appropriate.",
  },
  {
    image: "/esa-renewal/esa-renewal-processworks-step3.webp",
    title: "Clinical Review & Documentation",
    description:
      "After your evaluation, the licensed mental health professional determines whether ESA documentation is clinically appropriate. If so, the letter may be provided by email.",
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
          <h2 className="heading-h2 text-primary">How Does Our Online ESA Letter Evaluation Work?</h2>
          <p className="body-large text-body-text">
            A simple three-step process guided by a licensed mental health professional.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-12 md:flex-row md:items-start md:justify-center md:gap-4">
          {STEPS.map((step, index) => (
            <React.Fragment key={step.title}>
              {index > 0 && <StepArrow />}
              <div className="flex w-full max-w-[300px] flex-col items-center">
                <div className="flex h-[226px] w-[226px] items-center justify-center rounded-full bg-[#EFFFF1]">
                  <div className="h-[200px] w-[200px] overflow-hidden rounded-full">
                    <Image src={step.image} alt={step.title} width={200} height={200} className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="mt-6 flex w-full flex-col items-center gap-2 text-center">
                  <h3 className="font-heading text-[22px] font-bold leading-7 text-[#1A3D4F] sm:text-[24px]">{step.title}</h3>
                  <p className="body-text text-body-text">{step.description}</p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3">
          <CtaButton href="/pricing/" variant="accent">
            Get Started
          </CtaButton>
          <p className="text-center font-sans text-[14px] font-medium leading-[22px] text-[#5F6B6F]">
            ESA letters are provided solely when deemed clinically appropriate by the evaluating clinician.
          </p>
        </div>
      </div>
    </section>
  );
}
