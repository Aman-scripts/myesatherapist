import React from "react";
import { BreakpointImage } from "@/components/common/BreakpointImage";
import { CtaButton } from "@/components/esa-online/EsaOnlineShared";

const ART = "/esa-qualifying-conditions/esa-qualifyingconditions_herosection.webp";
const ART_ALT = "Woman hugging her cat, surrounded by icons for anxiety, stress, depression, PTSD and mood disorders";

export function QualifyingConditionsHero() {
  return (
    <section className="relative grid w-full grid-cols-[minmax(0,1fr)] overflow-hidden bg-[#FAF7F2] lg:block lg:min-h-[55vw] xl:min-h-[804px]">
      {/* Sizes the mobile / tablet hero to the portrait artwork */}
      <div aria-hidden="true" className="col-start-1 row-start-1 aspect-[390/782] sm:aspect-[834/1458] lg:hidden" />
      {/* Hero photo: portrait art on mobile / tablet, full-bleed on desktop */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 aspect-[390/782] sm:aspect-[834/1458] lg:hidden"
        style={{ maskImage: "linear-gradient(to bottom, transparent 0%, #000 12%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 12%)" }}
      >
        <BreakpointImage
          media="(max-width: 639px)"
            quality={90} src="/esa-qualifying-conditions/esa-qualifyingcondtions_herosection_mobile.webp" alt={ART_ALT} fill className="object-cover object-bottom sm:hidden" sizes="(max-width: 639px) 100vw, 1px" />
        <BreakpointImage
          media="(min-width: 640px) and (max-width: 1023px)"
            quality={90} src="/esa-qualifying-conditions/esa-qualifyingcondtions_herosection_tablet.webp" alt={ART_ALT} fill className="hidden object-cover object-bottom sm:block" sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px" />
      </div>
      <BreakpointImage
        media="(min-width: 1024px)"
        src={ART}
        alt={ART_ALT}
        fill
        quality={90}
        className="pointer-events-none hidden object-cover object-[right_30%] lg:block"
        sizes="(min-width: 1024px) 100vw, 1px"
      />

      <div className="relative z-10 col-start-1 row-start-1 mx-auto w-full max-w-[1440px] px-5 pb-[122vw] pt-10 sm:px-8 sm:pb-[106vw] sm:pt-14 lg:px-[5.6vw] lg:pb-[4vw] lg:pt-[6.4vw] xl:px-20 xl:pb-16 xl:pt-[100px]">
        <div className="flex w-full flex-col items-center gap-8 text-center lg:max-w-[45vw] lg:items-start lg:gap-[3.3vw] lg:text-left xl:max-w-[613px] xl:gap-12">
          <div className="flex flex-col gap-4 lg:gap-[1.6vw] xl:gap-6">
            <h1 className="font-heading text-[34px] font-bold leading-[1.15] tracking-[-0.0002em] text-[#2E5A66] sm:text-5xl lg:text-[3.9vw] lg:leading-[4.4vw] xl:text-[56px] xl:leading-[64px]">
              Qualifying Conditions for an ESA Letter
            </h1>
            <div className="flex flex-col gap-[22px] font-sans text-base font-semibold leading-[1.65] text-[#5F6B6F] sm:text-[18px] lg:gap-[2vw] lg:text-[1.25vw] lg:leading-[2.1vw] xl:gap-[30px] xl:text-[18px] xl:leading-[30px]">
              <p>
                If you’ve ever felt calmer just having your ESA curl up beside you after a hard day, you already know
                how an emotional support animal can provide reliable support and comfort whenever you need it. But
                qualifying for an ESA isn’t just about loving your dog or cat; it’s a connection to a real mental or
                emotional health condition, like anxiety, depression, PTSD, or panic disorder, that affects your daily
                life.
              </p>
              <p>
                Here’s the part people often miss: having one of these conditions doesn’t automatically get you an ESA
                letter. A diagnosis is only the beginning. What actually matters is an evaluation by a licensed mental
                health professional, someone who can confirm, in writing, that an ESA would genuinely support your
                well-being. That’s what makes a letter legitimate and accepted by landlords or housing providers.
              </p>
            </div>
          </div>
          <CtaButton href="/esa-doctors/">Explore the Team</CtaButton>
        </div>
      </div>
    </section>
  );
}
