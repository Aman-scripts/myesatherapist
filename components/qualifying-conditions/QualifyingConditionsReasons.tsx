import React from "react";
import Image from "next/image";
import { WaveImageFrame } from "@/components/esa-online/EsaOnlineShared";

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
        {/* Artwork for mobile / tablet (curve built in, heart badge added) */}
        <div className="relative -mx-4 mb-12 sm:-mx-8 lg:hidden">
          <div className="sm:hidden">
            <WaveImageFrame alt={ART_ALT} img={{ src: "/esa-qualifying-conditions/esa-qualifyingcondtions_commonreasons_mobile.png", w: 390, h: 512, crop: { x: 0, y: 42, w: 390, h: 470 } }} />
          </div>
          <div className="hidden sm:block">
            <WaveImageFrame alt={ART_ALT} img={{ src: "/esa-qualifying-conditions/esa-qualifyingcondtions_commonreasons_tablet.png", w: 834, h: 1049, crop: { x: 0, y: 197, w: 834, h: 852 } }} />
          </div>
          <Image
            src="/about-us/about_us-legimateesasection-hearticon.svg"
            alt=""
            width={64}
            height={64}
            className="absolute bottom-0 left-1/2 z-20 h-14 w-14 -translate-x-1/2 translate-y-[45%] sm:h-16 sm:w-16"
          />
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
