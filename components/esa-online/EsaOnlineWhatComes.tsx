import React from "react";
import { FeatureCard, GoldCallout } from "./EsaOnlineShared";

const P = "/esa-online/esa-letter-online_whatcomewithesa-";

const CARDS = [
  {
    icon: `${P}statelicensed-icon.svg`,
    title: "State Licensed Clinician Signature",
    description:
      "Each document is issued on the clinician’s professional letterhead and signed by a mental health professional authorized to practice in your state.",
  },
  {
    icon: `${P}hudcompliance-icon.svg`,
    title: "HUD Compliance",
    description:
      "You receive general guidance on ESA-related housing accommodations consistent with federal fair housing laws.",
  },
  {
    icon: `${P}housingguidance-icon.svg`,
    title: "Housing Guidance",
    description:
      "You’re provided with helpful information on how ESA accommodations typically work for housing providers.",
  },
  {
    icon: `${P}renewalreminders-icon.svg`,
    title: "Renewal Reminders",
    description: "You receive notifications to help keep your ESA documentation current.",
  },
  {
    icon: `${P}clinicalcontact-icon.svg`,
    title: "Clinician Contact Information",
    description:
      "Your letter includes the clinician’s credentials and state license details for verification purposes.",
  },
  {
    icon: `${P}professionalverification-icon.svg`,
    title: "Professional Verification Statement",
    description:
      "Your documentation confirms it was issued by an authorized professional following a clinical consultation.",
  },
];

export function EsaOnlineWhatComes() {
  return (
    <section className="w-full bg-[#FAF7F2] py-14 sm:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-3 text-center max-w-[714px]">
          <h2 className="font-heading text-3xl sm:text-4xl xl:text-[44px] font-bold text-[#2E5A66] leading-[1.2] xl:leading-[54px] tracking-[-0.00015em]">
            What Comes With Your ESA Recommendation Letter?
          </h2>
          <p className="font-sans text-base sm:text-[18px] text-[#5F6B6F] font-semibold leading-[30px] max-w-[661px]">
            When issued, the letter provides you with the professional details typically requested by housing providers.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 pt-2">
          {CARDS.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>

        <GoldCallout title="Important" className="max-w-[849px]">
          This information has been reviewed for accuracy by a licensed mental health professional. ESA recommendation letters are issued only after a clinical evaluation and are based on criteria outlined in the DSM-5 and applicable federal housing guidelines.
        </GoldCallout>
      </div>
    </section>
  );
}
