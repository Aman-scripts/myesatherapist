import React from "react";
import Image from "next/image";
import { CtaButton } from "@/components/esa-online/EsaOnlineShared";

const ART = "/esa-guide/esa-guide_herosection.png";
const ART_ALT = "Woman relaxing at home with her golden retriever and her cat";

export function EsaGuideHero() {
  return (
    <section className="relative grid w-full grid-cols-[minmax(0,1fr)] overflow-hidden bg-[#FAF7F2] lg:block lg:min-h-[55vw] xl:min-h-[793px]">
      {/* Sizes the mobile / tablet hero to the portrait artwork */}
      <div aria-hidden="true" className="col-start-1 row-start-1 aspect-[1024/1536] lg:hidden" />
      {/* Hero photo: portrait art on mobile / tablet, full-bleed on desktop */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 aspect-[1024/1536] lg:hidden"
        style={{ maskImage: "linear-gradient(to bottom, transparent 0%, #000 12%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 12%)" }}
      >
        <Image src="/esa-guide/esa-guide-herosection_mobile.png" alt={ART_ALT} fill priority className="object-cover object-bottom sm:hidden" sizes="(max-width: 639px) 100vw, 1px" />
        <Image src="/esa-guide/esa-guide-herosection_tablet.png" alt={ART_ALT} fill priority className="hidden object-cover object-bottom sm:block" sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px" />
      </div>
      <Image
        src={ART}
        alt={ART_ALT}
        fill
        priority
        quality={90}
        className="pointer-events-none hidden object-cover object-[58%_center] lg:block"
        sizes="(min-width: 1024px) 100vw, 1px"
      />

      <div className="relative z-10 col-start-1 row-start-1 mx-auto w-full max-w-[1440px] px-5 pb-[70vw] pt-10 sm:px-8 sm:pb-[64vw] sm:pt-14 lg:px-[5.6vw] lg:pb-[4vw] lg:pt-[6.4vw] xl:px-20 xl:pb-16 xl:pt-[100px]">
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
    </section>
  );
}
