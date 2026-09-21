import React from "react";
import { IconCard, SectionHeader } from "@/components/common/BlogPageBlocks";

const ICON = "/esa-training/esa-traning_esaforspecific-allcardsicon.svg";

const CONDITIONS = [
  {
    title: "Anxiety and Panic Attacks",
    text: "Teaching your animal to settle calmly beside you, which can help regulate your own breathing and heart rate",
  },
  {
    title: "Depression",
    text: "Building routine around feeding, walking, and care, giving structure to days that might otherwise feel shapeless",
  },
  {
    title: "PTSD",
    text: "Establishing a routine, stress-free setting where your pet's presence serves as a grounding signal",
  },
];

export function EsaTrainingConditionsSection() {
  return (
    <section className="w-full bg-[#FAF7F2]">
      <div className="mx-auto flex w-full max-w-[1439px] flex-col items-center gap-10 px-4 sm:px-8 lg:gap-[3.2vw] lg:px-[5vw] xl:gap-[72px] xl:px-0">
        <SectionHeader
          title="ESA Training for Specific Mental Health Conditions"
          subtitle="This isn't task-specific training. It's shaping everyday habits around the support your animal already provides."
          titleClassName="max-w-[912px]"
        />
        <div className="grid w-full max-w-[1281px] grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          {CONDITIONS.map((item, index) => (
            <div key={item.title} className={`h-full ${index === 2 ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-12px)] lg:col-span-1 lg:mx-0 lg:w-full" : ""}`}>
              <IconCard icon={ICON} title={item.title} text={item.text} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
