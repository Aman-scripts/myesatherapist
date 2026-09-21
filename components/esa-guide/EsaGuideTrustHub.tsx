import React from "react";
import { IconCard, SectionHeader } from "@/components/common/BlogPageBlocks";

const ICON = "/esa-guide/esa-guide-youtrustedesa_allcardsicon.svg";

const TRUST_PILLARS = [
  {
    title: "Clinician-informed content",
    text: "Every guide is grounded in current federal law and reviewed for accuracy by licensed mental health professionals.",
  },
  {
    title: "No legal jargon",
    text: "We translate complex housing laws and ESA regulations into plain language anyone can understand and act on.",
  },
  {
    title: "Regularly updated",
    text: "ESA laws and policies evolve. Our resources are kept current so you always have reliable, up-to-date guidance.",
  },
];

export function EsaGuideTrustHub() {
  return (
    <section className="w-full bg-[#FAF7F2]">
      <div className="mx-auto flex w-full max-w-[1288px] flex-col items-center gap-10 px-4 sm:px-8 lg:gap-[3.2vw] lg:px-[5vw] xl:gap-[72px] xl:px-0">
        <SectionHeader
          title="Your Trusted ESA Resource Hub"
          subtitle="Our guides are written to give you clear, accurate information about emotional support animals — without the confusion, misinformation, or unnecessary upsells that are common in this space."
          titleClassName="max-w-[912px]"
        />
        <div className="grid w-full max-w-[1281px] grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_PILLARS.map((item, index) => (
            <div
              key={item.title}
              className={`h-full ${index === 2 ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-12px)] lg:col-span-1 lg:mx-0 lg:w-full" : ""}`}
            >
              <IconCard icon={ICON} title={item.title} text={item.text} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
