import React from "react";
import Image from "next/image";
import { CtaButton } from "@/components/esa-online/EsaOnlineShared";

const POINTS = [
  "No pet fees for a legitimate ESA. That hasn't changed.",
  "HUD shifted enforcement on May 22, 2026 toward trained, task-specific animals.",
  "A current letter from a licensed professional still holds legal footing.",
];

export function EsaTrainingHero() {
  return (
    <section className="relative grid w-full grid-cols-[minmax(0,1fr)] overflow-hidden bg-[#FAF7F2] lg:flex lg:min-h-[46vw] lg:items-center xl:min-h-[654px]">
      {/* Sizes the mobile / tablet hero to the portrait artwork */}
      <div aria-hidden="true" className="col-start-1 row-start-1 aspect-[941/1672] lg:hidden" />
      {/* Hero photo: portrait art on mobile / tablet, full-bleed on desktop */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 aspect-[941/1672] lg:hidden"
        style={{ maskImage: "linear-gradient(to bottom, transparent 0%, #000 14%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 14%)" }}
      >
        <Image src="/esa-training/esa-training-herosection_mobile.png" alt="Woman sitting on the floor at home holding her cat" fill priority className="object-cover object-bottom sm:hidden" sizes="(max-width: 639px) 100vw, 1px" />
        <Image src="/esa-training/esa-training-herosection_tablet.png" alt="Woman sitting on the floor at home holding her cat" fill priority className="hidden object-cover object-bottom sm:block" sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px" />
      </div>
      <Image
        src="/esa-training/esa-traning_herosection.png"
        alt="Woman sitting on the floor at home holding her cat"
        fill
        priority
        quality={90}
        className="pointer-events-none hidden object-cover object-[29%_center] lg:block"
        sizes="(min-width: 1024px) 100vw, 1px"
      />

      <div className="relative z-10 col-start-1 row-start-1 mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-5 pb-[90vw] pt-10 sm:pb-[90vw] sm:px-8 sm:pt-14 lg:flex-row lg:items-center lg:justify-between lg:gap-[2vw] lg:px-[5.6vw] lg:pb-[3vw] lg:pt-[3vw] xl:gap-8 xl:px-20 xl:py-[64px]">
        {/* Left: heading, text, button */}
        <div className="flex w-full flex-col items-center gap-6 text-center lg:w-[45%] lg:items-start lg:gap-[1.7vw] lg:text-left xl:w-[549px] xl:gap-[33px]">
          <div className="flex flex-col items-center gap-4 lg:items-start lg:gap-[1.6vw] xl:gap-6">
            <h1 className="font-heading text-[34px] font-bold leading-[1.15] tracking-[-0.0002em] text-[#2E5A66] sm:text-5xl lg:text-[3.9vw] lg:leading-[4.4vw] xl:max-w-[462px] xl:text-[56px] xl:leading-[64px]">
              Does Your ESA Actually Need Training?
            </h1>
            <p className="max-w-[520px] font-sans text-base font-semibold leading-[1.65] text-[#5F6B6F] sm:text-[18px] lg:max-w-[26vw] lg:text-[1.25vw] lg:leading-[2.1vw] xl:max-w-[364px] xl:text-[18px] xl:leading-[30px]">
              Wondering whether your emotional support animal needs training? Here&apos;s the honest, complete answer,
              including what changed in 2026 and what it means for your housing rights.
            </p>
          </div>
          <CtaButton href="/esa-doctors/">Explore the Team</CtaButton>
        </div>

        {/* Right: frosted key-takeaway card */}
        <div className="mx-auto flex w-full max-w-[407px] justify-center rounded-[30px] border border-[#F5A636]/[0.09] bg-[#F5A636]/[0.26] px-3 py-8 backdrop-blur-[18px] sm:max-w-[440px] lg:mx-0 lg:w-[30vw] lg:max-w-none lg:px-[0.9vw] lg:py-[2.2vw] xl:w-[407px] xl:px-3 xl:py-8">
          <div className="flex w-full max-w-[360px] flex-col items-center gap-8 lg:max-w-none lg:gap-[2.2vw] xl:max-w-[360px] xl:gap-8">
            <div className="flex w-full flex-col items-center gap-2">
              <h2 className="w-full font-heading text-[28px] font-bold leading-[36px] tracking-[-0.00015em] text-[#373737] sm:text-[32px] sm:leading-10 lg:text-[2.45vw] lg:leading-[3vw] xl:text-[36px] xl:leading-[44px]">
                No. Training isn&apos;t legally required.
              </h2>
              <p className="w-full font-sans text-sm font-semibold leading-[26px] text-[#5F6B6F] lg:text-[1vw] lg:leading-[1.8vw] xl:text-sm xl:leading-[26px]">
                The Fair Housing Act has never required ESAs to be trained. But behavior, documentation, and a current
                letter matter more than ever since HUD&apos;s 2026 enforcement shift.
              </p>
            </div>

            <ul className="flex w-full flex-col gap-4 lg:gap-[1.5vw] xl:gap-6">
              {POINTS.map((point) => (
                <li
                  key={point}
                  className="relative flex min-h-[60px] items-center overflow-hidden rounded-[10px] bg-white py-2 pl-7 pr-5 lg:min-h-[4vw] lg:pl-[1.9vw] lg:pr-[1vw] xl:min-h-[60px] xl:pl-7 xl:pr-7"
                >
                  <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[9px] bg-[#E8B92C]" />
                  <span className="font-sans text-sm font-semibold leading-[22px] text-[#5F6B6F] lg:text-[0.95vw] lg:leading-[1.55vw] xl:text-sm xl:leading-[22px]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
