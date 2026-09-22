import React from "react";
import Image from "next/image";
import { WaveImageFrame } from "@/components/esa-online/EsaOnlineShared";

const ART = "/esa-guide/esa-guide-whydopeopleresearch.webp";
const ART_ALT = "Woman resting on the floor with her fluffy dog";

export function EsaGuideWhyResearch() {
  return (
    <section className="relative w-full overflow-hidden bg-white lg:min-h-[36vw] xl:min-h-0 xl:h-[486px]">
      {/* Artwork with the curved edge and heart badge built in (desktop) */}
      <div className="absolute inset-y-0 right-0 hidden aspect-[1911/1458] lg:block">
        <Image
            quality={90} src={ART} alt={ART_ALT} fill className="object-cover object-right" sizes="(min-width: 1024px) 637px, 1px" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1448px] flex-col px-4 pb-14 sm:px-8 lg:h-full lg:justify-center lg:py-[4vw] lg:pl-[5.8vw] lg:pr-0 xl:py-0 xl:pl-[83px]">
        {/* Artwork for mobile / tablet (curve built in, heart badge added) */}
        <div className="relative -mx-4 mb-12 sm:-mx-8 lg:hidden">
          <div className="sm:hidden">
            <WaveImageFrame alt={ART_ALT} img={{ src: "/esa-guide/esa-guide-whypeopleresearch_mobile.webp", w: 390, h: 512, crop: { x: 0, y: 68, w: 390, h: 444 } }} />
          </div>
          <div className="hidden sm:block">
            <WaveImageFrame alt={ART_ALT} img={{ src: "/esa-guide/esa-guide-whypeopleresearch_tablet.webp", w: 834, h: 1050, crop: { x: 0, y: 197, w: 834, h: 853 } }} />
          </div>
          <Image
            quality={90}
            src="/about-us/about_us-legimateesasection-hearticon.svg"
            alt=""
            width={64}
            height={64}
            className="absolute bottom-0 left-1/2 z-20 h-14 w-14 -translate-x-1/2 translate-y-[45%] sm:h-16 sm:w-16"
          />
        </div>

        <div className="flex w-full max-w-[626px] flex-col gap-5 text-center lg:max-w-[42vw] lg:gap-[1.9vw] lg:text-left xl:max-w-[626px] xl:gap-7">
          <h2 className="mx-auto max-w-[626px] font-heading text-[28px] font-bold leading-[36px] tracking-[-0.00015em] text-[#2E5A66] sm:text-4xl sm:leading-[46px] lg:mx-0 lg:text-[3.05vw] lg:leading-[3.75vw] xl:text-[44px] xl:leading-[54px]">
            Why People Research Emotional Support Animals?
          </h2>
          <p className="font-sans text-base font-semibold leading-[1.67] text-[#5F6B6F] sm:text-[18px] lg:text-[1.25vw] xl:text-[18px] xl:leading-[30px]">
            People explore emotional support animal resources for many different reasons. Some individuals are seeking
            information about housing accommodations, while others are interested in learning how emotional companionship
            may support emotional well-being. Educational ESA content can help people make informed decisions while
            encouraging responsible ownership and professional guidance.
          </p>
        </div>
      </div>
    </section>
  );
}
