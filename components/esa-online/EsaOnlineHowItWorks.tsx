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

export type HowItWorksStep = {
  image: string;
  title: string;
  description: string;
};

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

export function EsaOnlineHowItWorks({
  title = "How Does Our Online ESA Letter Evaluation Work?",
  subtitle = "A simple three-step process guided by a licensed mental health professional.",
  steps = STEPS,
  buttonText = "Start your ESA Evaluation",
  note = "ESA letters are provided solely when deemed clinically appropriate by the evaluating clinician.",
  paymentNote,
  showCta = true,
}: {
  title?: string;
  subtitle?: string;
  steps?: HowItWorksStep[];
  buttonText?: string;
  note?: string;
  paymentNote?: string;
  showCta?: boolean;
} = {}) {
  return (
    <section id="how-it-works" className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-2 text-center max-w-[820px]">
          <h2 className="heading-h2 text-primary">{title}</h2>
          <p className="body-large text-body-text">
            {subtitle}
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-4 md:flex-row md:items-start md:justify-center md:gap-4">
          {steps.map((step, index) => (
            <React.Fragment key={step.title}>
              {index > 0 && <StepArrow />}
              <div className="flex w-full max-w-[300px] flex-col items-center">
                <div className="flex h-[226px] w-[226px] items-center justify-center rounded-full bg-[#EFFFF1]">
                  <div className="h-[200px] w-[200px] overflow-hidden rounded-full">
                    <Image quality={90} src={step.image} alt={step.title} width={200} height={200} className="h-full w-full object-cover" />
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

        {showCta && (
          <div className={paymentNote ? "flex flex-col items-center" : "flex flex-col items-center gap-3"}>
            <CtaButton href="/pricing/" variant="accent">
              {buttonText}
            </CtaButton>
            {note && (
              <p className={paymentNote ? "body-small text-center mt-2" : "body-small text-center text-[#5F6B6F]"}>
                {note}
              </p>
            )}
            {paymentNote && (
              <div className="mt-6 inline-block max-w-[760px] bg-[rgba(252,228,220,0.4)] rounded-[8px] px-6 py-2 sm:px-8 body-small text-center border border-[#E76F51]/20">
                {paymentNote}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
