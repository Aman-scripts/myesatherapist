import React from "react";
import Image from "next/image";
import { CtaButton } from "@/components/esa-online/EsaOnlineShared";

const ART = "/esa-guide/esa-guide_herosection.png";
const ART_ALT = "Woman relaxing at home with her golden retriever and her cat";

export function EsaGuideHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF7F2] lg:min-h-[55vw] xl:min-h-[793px]">
      {/* Full-bleed hero photo (desktop) */}
      <Image
        src={ART}
        alt={ART_ALT}
        fill
        priority
        quality={90}
        className="pointer-events-none hidden object-cover object-[58%_center] lg:block"
        sizes="(min-width: 1024px) 100vw, 1px"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-8 pt-10 sm:px-8 sm:pt-14 lg:px-[5.6vw] lg:pb-[4vw] lg:pt-[6.4vw] xl:px-20 xl:pb-16 xl:pt-[100px]">
        <div className="flex w-full flex-col items-center gap-8 text-center lg:max-w-[46vw] lg:items-start lg:gap-[3.3vw] lg:text-left xl:max-w-[665px] xl:gap-12">
          <div className="flex flex-col gap-4 lg:gap-[1.6vw] xl:gap-6">
            <h1 className="font-heading text-[34px] font-bold leading-[1.15] tracking-[-0.0002em] text-[#2E5A66] sm:text-5xl lg:text-[3.9vw] lg:leading-[4.4vw] xl:text-[56px] xl:leading-[64px]">
              Emotional Support Animal Resource Center
            </h1>
            <div className="flex flex-col gap-[22px] font-sans text-base font-semibold leading-[1.65] text-[#5F6B6F] sm:text-[18px] lg:gap-[2vw] lg:text-[1.25vw] lg:leading-[2.1vw] xl:gap-[30px] xl:text-[18px] xl:leading-[30px]">
              <p>
                Understanding emotional support animals can feel overwhelming, especially with changing housing
                guidelines, online information, and common misconceptions surrounding ESA documentation. This resource
                center was created to help individuals explore trusted educational content related to emotional support
                animals, mental wellness support, housing accommodations, and therapist evaluations.
              </p>
              <p>
                Instead of searching through scattered articles, this page brings together important ESA topics in one
                organized location. Whether you are learning about emotional support animals for the first time or
                looking for guidance about housing accommodations and mental health support, the resources below can
                help you better understand the process and responsibilities involved.
              </p>
            </div>
          </div>
          <CtaButton href="/pricing/">Get Started</CtaButton>
        </div>
      </div>

      {/* Photo for mobile / tablet, below the content */}
      <div className="relative w-full lg:hidden">
        <Image src={ART} alt={ART_ALT} width={1983} height={793} priority className="h-auto w-full" sizes="100vw" />
      </div>
    </section>
  );
}
