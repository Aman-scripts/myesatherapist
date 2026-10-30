"use client";

import React from "react";
import Image from "next/image";

const benefitsData = [
  {
    title: "Individuals with Psychiatric Disabilities",
    description: "People whose mental health condition substantially affects daily activities and who benefit from a trained service dog.",
    icon: "/ESA ICons/Icon-20.svg",
  },
  {
    title: "Renters & Housing Applicants",
    description: "Those seeking housing accommodations for a psychiatric service dog.",
    icon: "/ESA ICons/Icon-29.svg",
  },
  {
    title: "Frequent Travelers",
    description: "People who regularly travel with a psychiatric service dog and may need professional documentation related to their PSD.",
    icon: "/ESA ICons/Icon-28.svg",
  },
  {
    title: "Existing Service Dog Handlers",
    description: "People who already work with a trained psychiatric service dog and need professional documentation related to their disability.",
    icon: "/ESA ICons/Icon-30.svg",
  },
  {
    title: "Individuals With Functional Limitations",
    description: "People whose psychiatric disability makes certain everyday activities more difficult and may require task-based assistance.",
    icon: "/ESA ICons/Icon-40.svg",
  },
  {
    title: "People Seeking Professional Guidance",
    description: "Individuals who want a licensed mental health professional to assess whether a psychiatric service dog may be appropriate for their needs.",
    icon: "/ESA ICons/Icon-17.svg",
  },
  {
    title: "People Seeking Workplace Support",
    description: "Individuals who may need professional PSD documentation when discussing disability-related accommodations with an employer.",
    icon: "/ESA ICons/Icon-12.svg",
  },
];

export function WhoBenefitsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-16 sm:pt-20 lg:pt-24">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 space-y-3 text-center sm:mb-12 lg:mb-14">
          <h2 className="heading-h2 text-primary">
            People Who Benefit Most From a PSD Letter
          </h2>
          <p className="body-large mx-auto max-w-[760px]">
            See how a PSD letter can support different needs, from managing daily challenges to documenting the role of a psychiatric service dog.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {benefitsData.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-start gap-3 rounded-[16px] border border-[#EFEAE3] bg-white px-5 py-5 shadow-[0px_2px_8px_rgba(0,0,0,0.06)] sm:px-6 sm:py-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F5EFE6]">
                <Image
                  src={item.icon}
                  alt=""
                  width={24}
                  height={24}
                  unoptimized
                  className="icon-md object-contain"
                />
              </div>
              <div className="flex flex-col items-start gap-1.5">
                <h3 className="heading-h3 text-primary">
                  {item.title.split("\n").map((line, index) => (
                    <React.Fragment key={line}>
                      {index > 0 && <br />}
                      {line}
                    </React.Fragment>
                  ))}
                </h3>
                <p className="body-text text-body-text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-12 w-full sm:mt-16 lg:mt-20">
        <div className="relative mx-auto aspect-[1440/620] w-full max-w-[1440px]">
          <Image
            src="/psd-letter/psd_letter_benefits_Section.webp"
            alt="Woman resting her head against her cat"
            fill
            quality={85}
            loading="lazy"
            className="object-cover object-center"
            sizes="(min-width: 1440px) 1440px, 100vw"
          />
          <div className="absolute left-[26.4%] top-[12.1%] z-20 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-16 sm:w-16 lg:h-[73px] lg:w-[73px]">
            <Image
              src="/psd-letter/whobenefits-section-icon.webp"
              alt=""
              width={73}
              height={73}
              unoptimized
              className="h-full w-full object-contain drop-shadow-[0px_2px_6px_rgba(0,0,0,0.18)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
