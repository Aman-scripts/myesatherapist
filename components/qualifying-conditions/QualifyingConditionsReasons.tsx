import React from "react";
import Image from "next/image";

const ART = "/esa-qualifying-conditions/esa-qualifyingconditions_commonreason.png";
const ART_ALT = "Woman relaxing on her sofa with a fluffy white dog and a black cat";

export function QualifyingConditionsReasons() {
  return (
    <section className="relative w-full overflow-hidden bg-white lg:min-h-[42vw] xl:min-h-0 xl:h-[549px]">
      {/* Artwork with the curved edge and heart badge built in (desktop) */}
      <div className="absolute inset-y-0 right-0 hidden aspect-[1908/1647] lg:block">
        <Image src={ART} alt={ART_ALT} fill className="object-cover object-right" sizes="(min-width: 1024px) 636px, 1px" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1448px] flex-col px-4 pb-14 sm:px-8 lg:h-full lg:justify-center lg:py-[4vw] lg:pl-[5.8vw] lg:pr-0 xl:py-0 xl:pl-[83px]">
        {/* Artwork for mobile / tablet */}
        <div className="-mx-4 mb-8 sm:-mx-8 lg:hidden">
          <Image src={ART} alt={ART_ALT} width={1908} height={1647} className="mx-auto h-auto w-full max-w-[520px]" sizes="100vw" />
        </div>

        <div className="flex w-full max-w-[626px] flex-col gap-5 text-center lg:max-w-[42vw] lg:gap-[1.9vw] lg:text-left xl:max-w-[626px] xl:gap-7">
          <h2 className="mx-auto max-w-[541px] font-heading text-[28px] font-bold leading-[36px] tracking-[-0.00015em] text-[#2E5A66] sm:text-4xl sm:leading-[46px] lg:mx-0 lg:text-[3.05vw] lg:leading-[3.75vw] xl:text-[44px] xl:leading-[54px]">
            Common Reasons People Explore ESAs
          </h2>
          <div className="flex flex-col gap-[22px] font-sans text-base font-semibold leading-[1.67] text-[#5F6B6F] sm:text-[18px] lg:gap-[2vw] lg:text-[1.25vw] xl:gap-[30px] xl:text-[18px] xl:leading-[30px]">
            <p>
              People often explore emotional support animals to understand whether the companionship of an animal may
              provide meaningful emotional support during periods of stress, anxiety, loneliness, or other mental
              health challenges.
            </p>
            <p>
              Some are looking for additional support while managing conditions such as anxiety, depression, PTSD, or
              panic disorders, while others want to learn about ESA eligibility requirements, professional
              evaluations, and housing accommodations to better understand the process and their rights as tenants
              with an emotional support animal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
