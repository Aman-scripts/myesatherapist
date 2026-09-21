import React from "react";
import Image from "next/image";
import { CtaButton } from "@/components/esa-online/EsaOnlineShared";

const ART = "/esa-qualifying-conditions/esa-qualifyingconditions_herosection.png";
const ART_ALT = "Woman hugging her cat, surrounded by icons for anxiety, stress, depression, PTSD and mood disorders";

export function QualifyingConditionsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF7F2] lg:min-h-[55vw] xl:min-h-[804px]">
      {/* Full-bleed hero photo (desktop) */}
      <Image
        src={ART}
        alt={ART_ALT}
        fill
        priority
        quality={90}
        className="pointer-events-none hidden object-cover object-[right_30%] lg:block"
        sizes="(min-width: 1024px) 100vw, 1px"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-8 pt-10 sm:px-8 sm:pt-14 lg:px-[5.6vw] lg:pb-[4vw] lg:pt-[6.4vw] xl:px-20 xl:pb-16 xl:pt-[100px]">
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

      {/* Photo for mobile / tablet, below the content */}
      <div className="relative w-full lg:hidden">
        <Image src={ART} alt={ART_ALT} width={1568} height={1003} priority className="h-auto w-full" sizes="100vw" />
      </div>
    </section>
  );
}
