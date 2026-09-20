import React from "react";
import Image from "next/image";
import { CtaButton, LATO, TEAL_GRADIENT } from "./EsaOnlineShared";

const STEPS = [
  {
    stepNumber: "1",
    image: "/esa-renewal/esa-renewal-processworks-step1.png",
    title: "Set Up Your Appointment",
    description:
      "Create an account and choose an available appointment time to connect with a state-licensed mental health professional.",
  },
  {
    stepNumber: "2",
    image: "/esa-renewal/esa-renewal-processworks-step2.png",
    title: "Speak With Professionals",
    description:
      "During the evaluation, the provider discusses how your emotional support animal has been supporting you and whether continued support may still be needed.",
  },
  {
    stepNumber: "3",
    image: "/esa-renewal/esa-renewal-processworks-step3.png",
    title: "Clinical Review & Documentation",
    description:
      "After your evaluation, the licensed mental health professional determines whether ESA documentation is clinically appropriate. If so, the letter may be provided by email.",
  },
];

export function EsaOnlineHowItWorks() {
  return (
    <section id="how-it-works" className="w-full bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1054px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6">
        <div className="w-full max-w-[999px] flex flex-col items-center gap-14 lg:gap-[72px]">
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-[34px] xl:text-[44px] font-bold text-[#2E5A66] leading-tight xl:leading-[54px] tracking-[-0.00015em]">
              How the ESA Letter Renewal Process Works?
            </h2>
            <p className="font-sans text-base sm:text-[18px] font-semibold text-[#5F6B6F] leading-[30px]">
              Complete a simple three-step online process to request an emotional support animal letter renewal conducted by a licensed mental health professional.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-10 lg:gap-x-[90px] justify-items-center">
            {STEPS.map((step) => (
              <div key={step.stepNumber} className="flex w-full max-w-[273px] flex-col items-center">
                <div className="relative h-[251px] w-[228px]">
                  <div className="absolute left-0 top-0 h-[226px] w-[228px] rounded-full bg-[#EFFFF1]/80 shadow-[0px_2px_4px_rgba(0,0,0,0.25)]" />
                  <div className="absolute left-[14px] top-[13px] h-[200px] w-[200px] overflow-hidden rounded-full">
                    <Image src={step.image} alt={`Step ${step.stepNumber}: ${step.title}`} fill className="object-cover" sizes="200px" />
                  </div>
                  <div
                    className="absolute bottom-0 left-1/2 flex h-[65px] w-[65px] -translate-x-1/2 items-center justify-center rounded-full text-[#FAF7F2] font-bold text-[36px] tracking-[-0.017em]"
                    style={{ backgroundImage: TEAL_GRADIENT, fontFamily: "Helvetica, Arial, sans-serif" }}
                  >
                    {step.stepNumber}
                  </div>
                </div>

                <div className="mt-6 flex w-full flex-col items-center gap-2 text-center">
                  <h3
                    className="font-bold text-2xl lg:text-[20px] xl:text-2xl leading-[29px] tracking-[-0.017em] text-transparent bg-clip-text"
                    style={{ backgroundImage: TEAL_GRADIENT, ...LATO }}
                  >
                    {step.title}
                  </h3>
                  <p className="font-sans text-base text-[#5F6B6F] font-semibold leading-[26px]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CtaButton href="/pricing/">Connect with Professional</CtaButton>
      </div>
    </section>
  );
}
