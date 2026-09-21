import React from "react";
import Image from "next/image";
import { TEAL_GRADIENT } from "@/components/esa-online/EsaOnlineShared";
import { SectionHeader } from "@/components/common/BlogPageBlocks";

const CARDS = [
  {
    title: "Tips for DIY training",
    image: "/esa-training/esa-traning_canyoutrain_tipstodiy.png",
    alt: "Woman teaching her golden retriever a new trick at home",
    items: [
      "Keep sessions short, five to ten minutes, so neither of you gets frustrated",
      "Use positive reinforcement (treats, praise, play), not punishment",
      "Stay consistent with commands and cues",
      "Practice in low-distraction spaces before moving to busier ones",
    ],
  },
  {
    title: "When to hire a professional",
    image: "/esa-training/esa-traning_canyoutrain_whentohireprofess.png",
    alt: "Professional trainer working with a golden retriever and its owner",
    items: [
      "If your animal shows anxiety or aggression, or progress has stalled. Costs vary by location and format (group classes vs. private sessions), so it's worth comparing a few local options.",
    ],
  },
];

function Check() {
  return (
    <span
      className="mt-[5px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full lg:mt-[0.3vw] lg:h-[1.4vw] lg:w-[1.4vw] xl:mt-[5px] xl:h-5 xl:w-5"
      style={{ backgroundImage: TEAL_GRADIENT }}
    >
      <svg viewBox="0 0 12 12" fill="none" className="h-[55%] w-[55%]" aria-hidden="true">
        <path d="M2.5 6.4l2.3 2.3 4.7-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function EsaTrainingDiySection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-[5vw] xl:py-[72px]">
      <div className="mx-auto flex w-full max-w-[1293px] flex-col items-center gap-10 px-4 sm:px-8 lg:gap-[3.9vw] lg:px-[5vw] xl:gap-14 xl:px-0">
        <SectionHeader title="Can You Train Your ESA Yourself?" subtitle="Yes. Many owners do it themselves." />

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-[30px] bg-[#FAF7F2] shadow-[0px_1px_4px_rgba(0,0,0,0.1)] lg:min-h-[48vw] xl:h-[696px] xl:min-h-0"
            >
              <div className="relative aspect-[626/273] w-full overflow-hidden">
                <Image src={card.image} alt={card.alt} fill className="object-cover object-center" sizes="(min-width: 1280px) 626px, (min-width: 1024px) 45vw, 100vw" />
              </div>
              <div className="mx-auto flex w-full max-w-[498px] flex-col items-center gap-8 px-6 pb-10 pt-8 sm:px-8 lg:max-w-none lg:gap-[2.8vw] lg:px-[4.6vw] lg:pt-[2.6vw] xl:max-w-[498px] xl:gap-10 xl:px-0 xl:pt-[37px]">
                <h3 className="text-center font-heading text-[24px] font-bold leading-[32px] text-[#2E5A66] sm:text-[28px] sm:leading-9 lg:text-[2vw] lg:leading-[2.5vw] xl:text-[28px] xl:leading-9">
                  {card.title}
                </h3>
                <ul className="flex w-full flex-col gap-5 lg:gap-[1.7vw] xl:gap-6">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-[18px] lg:gap-[1.2vw] xl:gap-[18px]">
                      <Check />
                      <span className="font-sans text-base font-semibold leading-[1.65] text-[#1E3E47] sm:text-[18px] lg:text-[1.25vw] xl:text-[18px] xl:leading-[30px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
