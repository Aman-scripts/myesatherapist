import React from "react";
import { IconCard, SectionHeader } from "@/components/common/BlogPageBlocks";

const ICON = "/esa-training/esa-traning_commonesatraining_allcardsicon.svg";

const MISTAKES = [
  {
    title: "Skipping socialization",
    text: "Leads to fearful or reactive behavior around people and other animals",
  },
  {
    title: "Inconsistent commands",
    text: "Different words or cues each time slow progress and confuse your animal",
  },
  {
    title: "Punishing",
    text: "Punishment tends to build anxiety, not obedience",
  },
  {
    title: "Starting too late",
    text: "Unwanted behaviors get harder to unlearn the longer they go unaddressed",
  },
];

export function EsaTrainingMistakesSection() {
  return (
    <section className="w-full bg-[#FAF7F2]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 px-4 sm:px-8 lg:gap-[3.2vw] lg:px-[4vw] xl:gap-[72px] xl:px-0">
        <SectionHeader
          title="Common ESA Training Mistakes to Avoid"
          subtitle="With the right approach, training can be simple. Discover common mistakes and learn how to create a better experience for you and your ESA."
          titleClassName="max-w-[912px]"
        />
        <div className="grid w-full grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
          {MISTAKES.map((item) => (
            <IconCard key={item.title} icon={ICON} title={item.title} text={item.text} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
