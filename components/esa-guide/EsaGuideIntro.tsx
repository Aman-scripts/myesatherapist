import React from "react";
import { SectionHeader } from "@/components/common/BlogPageBlocks";

const TOPICS = [
  "Emotional support animal basics",
  "Mental wellness support",
  "Emotional companionship",
  "ESA misconceptions",
];

export function EsaGuideIntro() {
  return (
    <section className="w-full bg-[#FAF7F2]">
      <div className="mx-auto flex w-full max-w-[1288px] flex-col items-center gap-10 px-4 sm:px-8 lg:gap-[4.2vw] lg:px-[5vw] xl:gap-[72px] xl:px-0">
        <SectionHeader
          title="Explore ESA Educational Resources"
          subtitle="Emotional support animals provide comfort and companionship that may help individuals manage emotional or mental health challenges. Many people researching ESAs are looking for clear information about how emotional support animals differ from pets, how ESA evaluations work, and what role licensed mental health professionals play in the process."
          subtitleMaxWidth="max-w-[1288px]"
          titleClassName="max-w-[912px]"
          className="gap-4 lg:gap-[1.1vw] xl:gap-4"
        />

        <div className="flex w-full flex-col items-center gap-8 lg:gap-[2.8vw] xl:gap-10">
          <h3 className="text-center font-heading text-[22px] font-bold leading-8 text-[#2E5A66] sm:text-2xl lg:text-[1.67vw] lg:leading-[2.2vw] xl:text-[24px] xl:leading-8">
            Topics Covered
          </h3>
          <ul className="grid w-full grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {TOPICS.map((topic) => (
              <li key={topic} className="relative">
                <span className="absolute inset-x-0 top-0 bottom-0 rounded-[20px] bg-[#E8B92C] shadow-[0px_2px_4px_rgba(0,0,0,0.15)]" aria-hidden="true" />
                <span className="relative mt-1.5 flex min-h-[75px] items-center justify-center rounded-[20px] bg-white px-4 py-4 text-center font-sans text-base font-semibold leading-[26px] text-[#5F6B6F] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] lg:min-h-[5.2vw] lg:px-[1vw] lg:text-[1.1vw] lg:leading-[1.8vw] xl:min-h-[75px] xl:text-base xl:leading-[26px]">
                  {topic}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
