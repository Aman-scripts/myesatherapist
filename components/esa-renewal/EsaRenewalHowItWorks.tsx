
import React from "react";
import Image from "next/image";
import { CtaButton } from "@/components/common/CtaButton";

const STEPS = [
  {
    image: "/esa-renewal/esa-renewal-processworks-step1.webp",
    title: "Set Up Your Appointment",
    description:
      "Create an account and choose an available appointment time to connect with a state-licensed mental health professional.",
  },
  {
    image: "/esa-renewal/esa-renewal-processworks-step2.webp",
    title: "Speak With Professionals",
    description:
      "During the evaluation, the provider discusses how your emotional support animal has been supporting you and whether continued support may still be needed.",
  },
  {
    image: "/esa-renewal/esa-renewal-processworks-step3.webp",
    title: "Clinical Determination",
    description:
      "After the evaluation, the licensed professional independently determines whether renewing the documentation may be appropriate. If issued, the updated letter is delivered electronically.",
  },
];

function StepArrow() {
  return (
    <>
      <svg viewBox="0 0 24 36" className="md:hidden h-9 w-6 shrink-0 text-primary" aria-hidden="true">
        <path d="M12 2v26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 22l8 10 8-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg viewBox="0 0 36 16" className="hidden md:block mt-[105px] h-4 w-9 shrink-0 text-primary" aria-hidden="true">
        <path d="M0 8h28" stroke="currentColor" strokeWidth="2" />
        <path d="M24 2l8 6-8 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    </>
  );
}

export function EsaRenewalHowItWorks() {
  return (
    <section id="how-it-works" className="w-full bg-background pt-16 pb-0 sm:pt-20 lg:pt-24">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-2 text-center max-w-[820px]">
          <h2 className="heading-h2 text-primary">How The ESA Letter Renewal Process Works?</h2>
          <p className="body-large text-body-text">
            Complete a simple three-step online process to request an emotional support animal letter renewal conducted by a licensed mental health professional.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-4 md:flex-row md:items-start md:justify-center md:gap-4">
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
                  <h3 className="heading-h3 text-primary">{step.title}</h3>
                  <p className="body-text text-body-text">{step.description}</p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3">
          <CtaButton href="#pricing" className="w-auto min-w-[240px]">
            Start your ESA Evaluation
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
