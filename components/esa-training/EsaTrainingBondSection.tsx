import React from "react";
import Image from "next/image";
import { CtaButton, TEAL_GRADIENT, WaveImageFrame } from "@/components/esa-online/EsaOnlineShared";

const ART = "/esa-training/esa-traning_howtotraningstrengeth.png";
const ART_ALT = "Woman hugging her golden retriever at home";

export function EsaTrainingBondSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white lg:min-h-[46vw] xl:min-h-0 xl:h-[619px]">
      {/* Artwork with the curved edge and heart badge built in (desktop) */}
      <div className="absolute inset-y-0 right-0 hidden aspect-[1911/1857] lg:block">
        <Image src={ART} alt={ART_ALT} fill className="object-cover object-right" sizes="(min-width: 1024px) 640px, 1px" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1448px] flex-col px-4 pb-14 sm:px-8 lg:h-full lg:justify-center lg:py-[4.5vw] lg:pl-[5.8vw] lg:pr-0 xl:py-0 xl:pl-[83px]">
        {/* Artwork for mobile / tablet (curve and heart badge built in) */}
        <div className="relative -mx-4 mb-12 sm:-mx-8 lg:hidden">
          <div className="sm:hidden">
            <WaveImageFrame alt={ART_ALT} img={{ src: "/esa-training/esa-training-howtrainingstrength_mobile.png", w: 390, h: 512, crop: { x: 0, y: 144, w: 390, h: 368 } }} />
          </div>
          <div className="hidden sm:block">
            <WaveImageFrame alt={ART_ALT} img={{ src: "/esa-training/esa-training-howtrainingstrength_tablet.png", w: 834, h: 1050, crop: { x: 0, y: 124, w: 834, h: 926 } }} />
          </div>
          <Image
            src="/about-us/about_us-legimateesasection-hearticon.svg"
            alt=""
            width={64}
            height={64}
            className="absolute bottom-0 left-1/2 z-20 h-14 w-14 -translate-x-1/2 translate-y-[45%] sm:h-16 sm:w-16"
          />
        </div>

        <div className="flex w-full flex-col items-center gap-8 text-center lg:items-start lg:gap-[2.6vw] lg:text-left xl:gap-[37px]">
          <div className="flex w-full max-w-[626px] flex-col items-center gap-7 lg:max-w-[40vw] lg:items-start lg:gap-[2.6vw] xl:max-w-[626px] xl:gap-14">
            <div className="flex flex-col gap-5 lg:gap-[1.9vw] xl:gap-7">
              <h2 className="mx-auto max-w-[541px] font-heading text-[28px] font-bold leading-[36px] tracking-[-0.00015em] text-[#2E5A66] sm:text-4xl sm:leading-[46px] lg:mx-0 lg:text-[3.05vw] lg:leading-[3.75vw] xl:text-[44px] xl:leading-[54px]">
                How Training Strengthens the ESA-Owner Bond
              </h2>
              <p className="font-sans text-base font-semibold leading-[1.67] text-[#5F6B6F] sm:text-[18px] lg:text-[1.25vw] xl:text-[18px] xl:leading-[30px]">
                Teaching your animal something new, watching them learn, and building a shared language of trust deepens
                the bond in a way little else does.
              </p>
            </div>
            <CtaButton href="/esa-doctors/">Work with Licensed Professionals</CtaButton>
          </div>

          {/* Quote */}
          <div
            className="flex w-full max-w-[772px] items-stretch overflow-hidden rounded-[20px] text-left shadow-[0px_2px_4px_rgba(0,0,0,0.15)] lg:w-[54vw] lg:max-w-none xl:w-[772px]"
            style={{ backgroundImage: TEAL_GRADIENT }}
          >
            <div className="w-[13px] shrink-0 bg-[#E8B92C]" />
            <blockquote className="flex flex-1 items-center px-5 py-6 font-heading text-lg font-bold leading-7 text-white sm:px-8 sm:text-[20px] lg:px-[1.6vw] lg:py-[1.6vw] lg:text-[1.55vw] lg:leading-[2.2vw] xl:px-6 xl:py-[32px] xl:text-[20px] xl:leading-7">
              “Training sessions build more than obedience. The repetition creates routine, and routine is genuinely
              therapeutic, especially on harder days.”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
