import React from "react";
import Image from "next/image";
import { GoldPill, SectionHeader } from "@/components/common/BlogPageBlocks";

const ANIMALS = [
  {
    title: "Dogs",
    text: "The most common ESA and the easiest to train, given how many resources exist.",
    image: "/esa-training/esa-traning_byanimamals-dogs.webp",
    alt: "Woman training her golden retriever",
  },
  {
    title: "Cats",
    text: "Trainable too. Litter box reliability, scratching post use, and calm behavior around guests are realistic goals.",
    image: "/esa-training/esa-traning_byanimamals-cats.webp",
    alt: "Woman playing with her cat",
  },
  {
    title: "Rabbits, birds, and others",
    text: "Training looks different here. It's more about handling, socialization, and predictable routines than commands.",
    image: "/esa-training/esa-traning_byanimamals-rabbitsbirds.webp",
    alt: "Woman with a rabbit, a bird and a guinea pig",
  },
];

export function EsaTrainingBySpeciesSection() {
  return (
    <section className="w-full bg-[#FAF7F2]">
      <div className="mx-auto flex w-full max-w-[1448px] flex-col items-center gap-10 px-4 sm:px-8 lg:gap-[2.8vw] lg:px-[5vw] xl:gap-10 xl:px-0">
        <div className="flex w-full flex-col items-center gap-10 lg:gap-[4.4vw] xl:gap-16">
          <SectionHeader
            title="Training by Animal Type"
            subtitle="ESAs and service dogs are often confused, but they differ in legal status, training requirements, and public access rights."
            subtitleFont="lato"
          />

          <div className="grid w-full max-w-[1146px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ANIMALS.map((animal, index) => (
              <div
                key={animal.title}
                className={`flex flex-col overflow-hidden rounded-[30px] bg-white pb-[17px] shadow-[0px_1px_4px_rgba(0,0,0,0.1)] ${
                  index === 2 ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-12px)] lg:col-span-1 lg:mx-0 lg:w-auto" : ""
                }`}
              >
                <div className="relative aspect-[364/221] w-full overflow-hidden">
                  <Image
            quality={90} src={animal.image} alt={animal.alt} fill className="object-cover object-center" sizes="(min-width: 1280px) 366px, (min-width: 640px) 50vw, 100vw" />
                </div>
                <div className="flex flex-col gap-2.5 px-6 pt-4 lg:px-[1.6vw] xl:pl-[23px] xl:pr-2">
                  <h3 className="font-heading text-[26px] font-bold leading-[34px] text-[#2E5A66] lg:text-[1.95vw] lg:leading-[2.5vw] xl:whitespace-nowrap xl:text-[28px] xl:leading-9">
                    {animal.title}
                  </h3>
                  <p className="font-sans text-sm font-semibold leading-[26px] text-[#5F6B6F] lg:text-[0.97vw] lg:leading-[1.8vw] xl:text-sm xl:leading-[26px]">
                    {animal.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <GoldPill>
          Any animal capable of bonding and safe handling can qualify as an ESA, but dogs and cats adapt best to the
          structure that keeps a housing situation smooth.
        </GoldPill>
      </div>
    </section>
  );
}
