import React from "react";
import { FeatureCard } from "./EsaOnlineShared";

const ICON = "/esa-online/esa-letter-online_esatherapistlegalstandard-allcards-icon.svg";

const CARDS = [
  {
    title: "Independent Clinical Evaluation",
    description:
      "Any ESA recommendation you receive is based solely on the clinician’s professional judgment, not automatic approval.",
  },
  {
    title: "State Authorized Professionals",
    description:
      "ESA documentation is issued only by licensed mental health professionals authorized to practice in the individual’s state.",
  },
  {
    title: "FHA and HUD Guidance",
    description:
      "Your ESA letter is issued in accordance with applicable federal law and relevant HUD guidance for housing accommodation requests under the Fair Housing Act.",
  },
];

export function EsaOnlineLegalStandards() {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl xl:text-[44px] font-bold text-[#2E5A66] leading-[1.2] xl:leading-[54px] tracking-[-0.00015em] max-w-[662px]">
            How Does My ESA Therapist Meet Legal Standards?
          </h2>
          <p className="font-sans text-base sm:text-[18px] text-[#5F6B6F] font-semibold leading-[30px] max-w-[1018px]">
            Your ESA letter is issued by a state-authorized mental health professional only after a clinically guided online evaluation, in alignment with applicable federal law. Evaluations also account for applicable state-specific requirements, which may include minimum therapeutic relationship periods in certain jurisdictions.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-14 pt-2">
          {CARDS.map((card) => (
            <FeatureCard key={card.title} icon={ICON} dark {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
