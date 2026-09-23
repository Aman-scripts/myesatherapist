import React from "react";
import Image from "next/image";
import { CtaButton, LATO, TEAL_GRADIENT } from "@/components/esa-online/EsaOnlineShared";
import { SectionHeader } from "@/components/common/BlogPageBlocks";

const ICON = "/esa-training/esa-traning_esatrainingvsbasicstraining-allcardsicon.svg";

const ROWS = [
  { feature: "Legal framework", esa: "Fair Housing Act", dog: "ADA" },
  { feature: "Training required", esa: "No", dog: "Yes, task-specific" },
  { feature: "Public access rights", esa: "Housing only", dog: "Nearly everywhere" },
  { feature: "Role", esa: "Comfort through presence", dog: "Performs a specific trained task" },
];

const ROW_H = "lg:h-[5.2vw] xl:h-[61px]";
const HEAD_H = "lg:h-[6.2vw] xl:h-[74px]";

export function EsaTrainingVsServiceDog() {
  return (
    <>
      <section className="w-full bg-white py-12 sm:py-16 lg:py-[4.7vw] xl:py-[68px]">
        <div className="mx-auto flex w-full max-w-[1254px] flex-col items-center gap-10 px-4 sm:px-8 lg:gap-[4.5vw] lg:px-[5vw] xl:gap-[60px] xl:px-0">
          <SectionHeader
            title="ESA Training vs. Service Dog Training"
            subtitle="ESAs and service dogs are often confused, but they differ in legal status, training requirements, and public access rights."
            subtitleFont="lato"
          />

          {/* Desktop table (lg and up) */}
          <div className="relative hidden w-full max-w-[1061px] rounded-[20px] bg-[#FAF7F2] shadow-[0px_2px_5.2px_rgba(0,0,0,0.15)] lg:block">
            {/* Raised teal column for the ESA */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-[17px] -top-[17px] left-1/2 z-0 w-[33.1%] -translate-x-1/2 rounded-[20px] shadow-[3px_3px_47.6px_1px_rgba(0,0,0,0.1)]"
              style={{ backgroundImage: TEAL_GRADIENT }}
            />
            <div className="relative z-10 grid grid-cols-[1fr_33.1%_1fr] pb-[1.8vw] xl:pb-[26px]" style={LATO}>
              {/* Header row */}
              <div className={`flex items-center justify-center text-[1.75vw] font-bold leading-8 text-[#2E5A66] xl:text-[24px] ${HEAD_H}`}>
                FEATURES
              </div>
              <div className={`flex items-center justify-center px-2 text-center text-[1.75vw] font-bold leading-8 text-white xl:text-[24px] ${HEAD_H}`}>
                Emotional Support Animal
              </div>
              <div className={`flex items-center justify-center text-[1.75vw] font-bold leading-8 text-[#2E5A66] xl:text-[24px] ${HEAD_H}`}>
                Service Dog
              </div>

              {ROWS.map((row) => (
                <React.Fragment key={row.feature}>
                  <div className={`flex items-center gap-[2.3vw] border-t border-[#C8B9A7]/50 pl-[2vw] xl:gap-[34px] xl:pl-[30px] ${ROW_H}`}>
                    <span className="flex h-[2.5vw] w-[2.5vw] shrink-0 items-center justify-center rounded-full bg-white shadow-[0px_0.76px_1.52px_rgba(0,0,0,0.25)] xl:h-9 xl:w-9">
                      <Image
            quality={90} src={ICON} alt="" width={19} height={19} className="h-[52%] w-[52%] object-contain" />
                    </span>
                    <span className="text-[1.4vw] font-bold leading-8 text-[#2E5A66] xl:text-[20px]">{row.feature}</span>
                  </div>
                  <div className={`flex items-center border-t border-white/15 pl-[5vw] text-[1.25vw] italic leading-8 text-white xl:pl-[85px] xl:text-[18px] ${ROW_H}`}>
                    {row.esa}
                  </div>
                  <div className={`flex items-center border-t border-[#C8B9A7]/50 pl-[4.6vw] pr-3 text-[1.25vw] italic leading-8 text-[#5F6B6F] xl:pl-[73px] xl:text-[18px] ${ROW_H}`}>
                    {row.dog}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Mobile & tablet: stacked comparison cards */}
          <div className="flex w-full max-w-[640px] flex-col gap-4 lg:hidden">
            {ROWS.map((row) => (
              <div key={row.feature} className="overflow-hidden rounded-[20px] bg-[#FAF7F2] shadow-[0px_2px_5.2px_rgba(0,0,0,0.15)]">
                <div className="flex items-center gap-3 px-5 py-3.5" style={LATO}>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-[0px_0.76px_1.52px_rgba(0,0,0,0.25)]">
                    <Image
            quality={90} src={ICON} alt="" width={19} height={19} className="h-[19px] w-[19px]" />
                  </span>
                  <span className="text-lg font-bold text-[#2E5A66]">{row.feature}</span>
                </div>
                <div className="grid grid-cols-2 text-[15px] leading-6" style={LATO}>
                  <div className="px-5 py-3.5 text-white" style={{ backgroundImage: TEAL_GRADIENT }}>
                    <span className="block text-xs font-bold uppercase tracking-wide text-white/70 not-italic">ESA</span>
                    <span className="italic">{row.esa}</span>
                  </div>
                  <div className="px-5 py-3.5 text-[#5F6B6F]">
                    <span className="block text-xs font-bold uppercase tracking-wide text-[#2E5A66] not-italic">Service Dog</span>
                    <span className="italic">{row.dog}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing note + CTA */}
      <section className="w-full bg-[#FAF7F2]">
        <div className="mx-auto flex w-full max-w-[1222px] flex-col items-center gap-4 px-4 text-center sm:px-8 lg:px-[4vw] xl:px-0">
          <div className="flex flex-col gap-6 text-base leading-7 text-[#5F6B6F] sm:text-[20px] sm:leading-8 lg:gap-8 lg:text-[1.4vw] lg:leading-[2.2vw] xl:text-[20px] xl:leading-8" style={LATO}>
            <p>
              An ESA&apos;s support comes from companionship and presence, not a performed skill. Service dogs are
              trained to assist with a disability-related need. ESAs simply need to be there, calming and stabilizing,
              which doesn&apos;t require specialized task training.
            </p>
            <p>
              If your needs go beyond comfort into needing an animal that performs a specific job, like interrupting a
              panic attack or reminding you to take medication, that&apos;s worth discussing with your mental health
              provider as a possible psychiatric service dog path.
            </p>
          </div>
          <CtaButton href="/pricing/">Get Started</CtaButton>
        </div>
      </section>
    </>
  );
}
