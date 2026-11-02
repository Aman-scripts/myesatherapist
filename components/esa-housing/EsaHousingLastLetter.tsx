import React from "react";
import { CtaButton } from "@/components/esa-online/EsaOnlineShared";
import { CheckCircle, SECTION_H2, SECTION_LEAD } from "./EsaHousingShared";

const REASONS = [
  "Paid for an “instant” letter with no real evaluation",
  "Letter not issued by a licensed professional",
  "Generic, copy-and-paste letter that a landlord questioned",
  "Sold a “registry” or certificate you never needed",
  "Questions or refund requests that went unanswered",
  "Unsure whether your current letter is even valid",
];

const MARKS = ["Licensed professionals", "Real clinical evaluation", "HIPAA compliant"];

export function EsaHousingLastLetter() {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <p className="font-sans text-[14px] font-bold uppercase tracking-wide text-accent">A Common Story</p>
          <h2 className={SECTION_H2}>
            Why your last ESA letter <span className="italic">didn’t work.</span>
          </h2>
          <p className={SECTION_LEAD}>
            Many websites sell an “instant ESA letter” with no real evaluation behind it. You pay, receive a generic document, and only find out there is a problem when a landlord or housing provider starts asking questions. <strong>If that happened to you, it wasn’t your fault.</strong>
          </p>
          <p className={SECTION_LEAD}>
            Our approach is built to hold up: a real consultation with a U.S.-licensed mental health professional, a clinical assessment of whether an emotional support animal is appropriate for you, and documentation based on your individual situation. Approval is never guaranteed, and it is always the professional’s decision.
          </p>
          <ul className="flex flex-wrap justify-center lg:justify-start gap-2">
            {MARKS.map((mark) => (
              <li key={mark} className="rounded-full bg-background px-4 py-2 font-sans text-[14px] font-semibold leading-[22px] text-primary">
                {mark}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5 rounded-[30px] bg-background px-6 py-8 sm:px-10 shadow-[0px_2px_4px_rgba(0,0,0,0.08)]">
          <p className="font-sans text-[14px] font-bold uppercase tracking-wide text-[#CC191D]">Declined</p>
          <div className="flex flex-col gap-1">
            <h3 className="heading-h3 text-primary">Sound familiar?</h3>
            <p className="body-text text-body-text">What usually brings people here</p>
          </div>
          <ul className="flex flex-col gap-3">
            {REASONS.map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <CheckCircle />
                <span className="font-sans font-semibold text-base leading-[26px] text-primary">{reason}</span>
              </li>
            ))}
          </ul>
          <p className="body-text text-body-text">
            If two or more of these sound familiar, a conversation with a licensed professional may be worth your time.
          </p>
          <div className="flex flex-col items-start gap-2">
            <CtaButton href="/pricing/">Start Your ESA Evaluation</CtaButton>
            <p className="font-sans text-[14px] font-medium leading-[22px] text-body-text">
              You are charged only after your evaluation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
