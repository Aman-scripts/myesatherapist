import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TEAL_GRADIENT, WaveImageFrame } from "@/components/esa-online/EsaOnlineShared";

const ICON = "/esa-training/esa-traning_basicstraining-allcardsicon.svg";
const ART = "/esa-training/esa-traning_basicstraining.webp";
const ART_ALT = "Woman rewarding her golden retriever during a training session";

const BASICS = [
  {
    title: "Foundational obedience",
    text: "Sit, stay, come. The basics that make everyday life predictable.",
  },
  {
    title: "Leash manners",
    text: "No pulling, lunging, or bolting when you're out together.",
  },
  {
    title: "Calm public behavior",
    text: "No excessive barking, jumping, or aggression around others.",
  },
];

export function EsaTrainingBasicsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white lg:min-h-[54vw] xl:min-h-0 xl:h-[834px]">
      {/* Artwork with the curved edge and heart badge built in (desktop) */}
      <div className="absolute inset-y-0 right-0 hidden aspect-[2160/2502] lg:block">
        <Image
            quality={90} src={ART} alt={ART_ALT} fill className="object-cover object-right" sizes="(min-width: 1024px) 720px, 1px" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1448px] flex-col px-4 pb-14 sm:px-8 lg:h-full lg:justify-center lg:py-[4.5vw] lg:pl-[5.9vw] lg:pr-0 xl:py-0 xl:pl-[85px]">
        {/* Artwork for mobile / tablet (curve and heart badge built in) */}
        <div className="relative -mx-4 mb-12 sm:-mx-8 lg:hidden">
          <div className="sm:hidden">
            <WaveImageFrame alt={ART_ALT} img={{ src: "/esa-training/esa-training-basicstraining_mobile.webp", w: 390, h: 512, crop: { x: 0, y: 42, w: 390, h: 470 } }} />
          </div>
          <div className="hidden sm:block">
            <WaveImageFrame alt={ART_ALT} img={{ src: "/esa-training/esa-training-basicstraining_tablet.webp", w: 834, h: 1050, crop: { x: 0, y: 82, w: 834, h: 968 } }} />
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

        <div className="flex w-full max-w-[626px] flex-col gap-10 lg:max-w-[40vw] lg:gap-[3vw] xl:max-w-[626px] xl:gap-14">
          <div className="flex flex-col gap-5 text-center lg:gap-[1.9vw] lg:text-left xl:gap-7">
            <h2 className="mx-auto max-w-[541px] font-heading text-[28px] font-bold leading-[36px] tracking-[-0.00015em] text-[#2E5A66] sm:text-4xl sm:leading-[46px] lg:mx-0 lg:text-[3.05vw] lg:leading-[3.75vw] xl:text-[44px] xl:leading-[54px]">
              Basic Training Every ESA Should Have
            </h2>
            <p className="font-sans text-base font-semibold leading-[1.67] text-[#5F6B6F] sm:text-[18px] lg:text-[1.25vw] xl:text-[18px] xl:leading-[30px]">
              An ESA that barks constantly or acts aggressively gives a landlord legitimate grounds for concern, no
              matter how strong your letter is. Not legally required, but these basics protect your housing
              situation:
            </p>
          </div>

          <div className="flex flex-col gap-5 lg:gap-[1.9vw] xl:gap-8">
            {BASICS.map((item) => (
              <div
                key={item.title}
                className="flex items-stretch overflow-hidden rounded-[20px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)]"
              >
                <div className="w-[13px] shrink-0" style={{ backgroundImage: TEAL_GRADIENT }} />
                <div className="flex flex-1 items-center gap-4 py-4 pl-4 pr-4 sm:gap-6 sm:pl-6 lg:gap-[1.6vw] lg:py-[1vw] xl:gap-6 xl:py-3">
                  <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-white shadow-[0px_1.89px_3.78px_rgba(0,0,0,0.25)] sm:h-[74.56px] sm:w-[74.56px] lg:h-[5vw] lg:w-[5vw] xl:h-[74.56px] xl:w-[74.56px]">
                    <Image
            quality={90} src={ICON} alt="" width={32} height={32} className="h-6 w-6 object-contain sm:h-8 sm:w-8 lg:h-[2.2vw] lg:w-[2.2vw] xl:h-8 xl:w-8" />
                  </div>
                  <div className="flex flex-1 flex-col gap-1.5">
                    <h3 className="font-heading text-lg font-bold leading-tight text-[#2E5A66] sm:text-[20px] lg:text-[1.5vw] xl:text-[20px] xl:leading-7">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[13px] font-semibold leading-[1.6] text-[#5F6B6F] sm:text-[14px] sm:leading-[26px] lg:text-[1.1vw] lg:leading-[1.6] xl:text-[14px] xl:leading-[26px]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/blog/esa-training/8-basic-obedience-commands-every-esa-should-know/"
            className="text-center font-sans text-base font-semibold leading-[30px] text-[#5F6B6F] underline underline-offset-4 decoration-[#5F6B6F]/60 transition-colors hover:text-[#2E5A66] sm:text-[18px] lg:text-left lg:text-[1.25vw] xl:text-[18px]"
          >
            See all 8 basic obedience commands every ESA should know →
          </Link>
        </div>
      </div>
    </section>
  );
}
