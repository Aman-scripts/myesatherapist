import React from "react";
import Image from "next/image";
import { CtaButton, GoldCallout } from "./EsaOnlineShared";

const POINTS = [
  {
    title: "Reasonable Accommodation Requests",
    description:
      "Housing providers are required to consider ESA accommodation requests under applicable federal housing laws.",
  },
  {
    title: "Save on Pet Fees",
    description:
      "When an ESA letter is accepted, pet deposits and monthly pet rent typically do not apply, subject to provider review.",
  },
  {
    title: "Breed or Weight Restrictions Waived",
    description:
      "When an ESA accommodation request is granted, ESAs are generally exempt from breed and size limitations, consistent with fair housing guidelines.",
  },
];

function CheckCircle() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mt-[5px] shrink-0" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="#1D6E72" />
      <path d="M5.7 10.2l3 3 5.6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function EsaOnlineHousingRights() {
  return (
    <section className="w-full bg-[#FAF7F2] py-14 sm:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12">
        <div className="w-full max-w-[850px] overflow-hidden rounded-[30px] bg-white shadow-[0px_2px_6px_rgba(0,0,0,0.08)]">
          <div className="relative w-full aspect-[1536/1024] sm:aspect-[850/460]">
            <Image
            quality={90}
              src="/esa-online/esa-letter-online_yourhousingright.webp"
              alt="Gavel and model house representing housing rights"
              fill
              className="object-cover"
              sizes="(min-width: 900px) 850px, 100vw"
            />
          </div>

          <div className="flex flex-col items-center gap-6 px-5 sm:px-10 pt-8 pb-10">
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#2E5A66] leading-[1.2] sm:leading-[44px] text-center">
              Your Housing Rights With an ESA Letter
            </h2>

            <ul className="w-full max-w-[712px] flex flex-col gap-5">
              {POINTS.map((p) => (
                <li key={p.title} className="flex items-start gap-3">
                  <CheckCircle />
                  <div className="flex flex-col">
                    <h3 className="font-sans font-semibold text-base sm:text-[18px] leading-[30px] text-[#2E5A66]">{p.title}</h3>
                    <p className="font-sans font-semibold text-[13px] sm:text-[14px] leading-[26px] text-[#5F6B6F]">{p.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <CtaButton href="/pricing/">Schedule your ESA Assessment</CtaButton>
          </div>
        </div>

        <GoldCallout title="Important" className="max-w-[849px]">
          All information regarding therapist qualifications and legal standards has been reviewed by licensed clinicians and aligns with current federal guidance, including Fair Housing Act requirements.
        </GoldCallout>
      </div>
    </section>
  );
}
