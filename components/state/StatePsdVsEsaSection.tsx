
import React from "react";
import Image from "next/image";
import { StateData } from "@/data/statesData";

export function StatePsdVsEsaSection({ data }: { data: StateData }) {
  const stateName = data.name;

  const defaultEsaBullets = [
    "Provide emotional comfort and support for conditions such as anxiety, depression, PTSD, and related mental health challenges.",
    `Do not need specialized task training, but housing protections require a valid ESA letter from an ${stateName}-licensed mental health professional.`,
    "Protected under the Fair Housing Act (FHA), which allows approved individuals to reside with their ESA in housing that normally limits pets.",
    "Not subject to standard pet fees, such as pet rent or deposits, once the accommodation is properly approved.",
  ];

  const defaultPsdBullets = [
    "Specially trained to perform certain tasks, such as stopping panic attacks or reminding handlers to take medication.",
    "Safeguarded by the Americans with Disabilities Act (ADA).",
    "Entitled to full public access rights, including to places of employment, stores, and other public spaces where dogs are normally forbidden.",
  ];

  const title = data.psdVsEsaTitle || `Psychiatric Service Dogs vs. Emotional Support Animals in ${stateName}`;
  const subtitle = data.psdVsEsaSubtitle || `Understanding the differences between Psychiatric Service Dogs (PSDs) and Emotional Support Animals (ESAs) will help you select the support that best meets your mental health needs in ${stateName}.`;
  const esaTitle = data.esaCardTitle || "Emotional Support Animals";
  const esaBullets = data.esaCardBullets && data.esaCardBullets.length > 0
    ? data.esaCardBullets
    : defaultEsaBullets;
  const psdTitle = data.psdCardTitle || "Psychiatric Service Dogs (PSD)";
  const psdBullets = data.psdCardBullets && data.psdCardBullets.length > 0
    ? data.psdCardBullets
    : defaultPsdBullets;
  const calloutTitle = data.psdCalloutTitle;
  const calloutText = data.psdCalloutText;
  const note = data.psdVsEsaNote;

  const cards = [
    {
      image: "/states/psdvsesa-esasection.png",
      alt: esaTitle,
      title: esaTitle,
      bullets: esaBullets,
      tags: ["Housing Rights", "No Pet Fees", "Emotional Support"],
    },
    {
      image: "/states/psdvsesa-psdsection.png",
      alt: psdTitle,
      title: psdTitle,
      bullets: psdBullets,
      tags: ["Full Public Access", "Trained Tasks", "ADA Protected"],
    },
  ];

  return (
    <section className="w-full bg-background py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1060px]">
        <div className="text-center max-w-[840px] mx-auto mb-10 sm:mb-12 lg:mb-14">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[38px] xl:text-[44px] font-bold text-primary leading-[1.2] tracking-tight">
            {title}
          </h2>
          <p className="body-large text-body-text mt-3 max-w-[760px] mx-auto">
            {subtitle}
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 ${note ? "" : "mb-10 lg:mb-12"}`}>
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-[22px] sm:rounded-[26px] border border-[#EAE5DC] shadow-[0_4px_20px_rgba(0,0,0,0.025)] flex flex-col overflow-hidden"
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden shrink-0">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  quality={90}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6 lg:p-7">
                <h3 className="font-heading text-xl sm:text-2xl lg:text-[23px] xl:text-[28px] font-bold text-primary mb-4 sm:mb-5 leading-snug">
                  {card.title}
                </h3>
                <ul className="space-y-3 mb-5">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-body-text" />
                      <span className="body-text text-body-text">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap items-center gap-1.5">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="body-small text-primary bg-[#E7F5EE] px-2.5 py-1 rounded-full whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {note && (
          <p className="body-text text-body-text mx-auto mt-6 max-w-[820px] text-center sm:mt-8">
            {note}
          </p>
        )}

        {/* Frame 1000012004: Bottom Callout Box (Only if provided in data) */}
        {calloutTitle && calloutText && (
          <div className="relative w-full max-w-[959px] mx-auto rounded-[30px] bg-[rgba(232,185,44,0.1)] overflow-hidden flex flex-row items-center pr-4 sm:pr-8 md:pr-[67px] gap-3 sm:gap-[24px]">
            {/* Rectangle 25: Left Accent */}
            <div className="w-[14px] sm:w-[19px] self-stretch min-h-[140px] sm:min-h-[181px] bg-accent shrink-0 rounded-l-[10px]" />

            {/* Frame 1000012015: Content Area */}
            <div className="py-5 sm:py-8 flex flex-col justify-center items-start gap-1.5 max-w-[849px] flex-1">
              <h3 className="font-heading font-bold text-[18px] sm:text-[20px] leading-[26px] sm:leading-[28px] text-primary">
                {calloutTitle}
              </h3>
              <p className="font-sans font-medium text-[13px] sm:text-[14px] leading-[20px] sm:leading-[22px] text-body-text whitespace-pre-line">
                {calloutText}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
