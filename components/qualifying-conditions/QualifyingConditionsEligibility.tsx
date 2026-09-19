import React from "react";
import { Activity, HeartHandshake, Stethoscope, FileSearch } from "lucide-react";

const FACTORS = [
  {
    title: "Functional Limitations",
    desc: "Professionals assess how a condition affects daily functioning, including work performance, relationships, sleep, and the ability to manage routine tasks. Conditions that significantly interfere with daily life are more likely to support ESA eligibility.",
    Icon: Activity,
  },
  {
    title: "Emotional Support Benefits",
    desc: "The evaluation also considers whether an animal provides a measurable emotional or therapeutic benefit, such as reducing anxiety, easing panic symptoms, or offering comfort during periods of emotional distress. This benefit must be directly relevant to the individual's diagnosed condition.",
    Icon: HeartHandshake,
  },
  {
    title: "Clinical Evaluation",
    desc: "A proper ESA recommendation involves a clinical conversation or session with a licensed mental health professional, not a same-day form submission. The professional reviews the individual's mental health history and current symptoms before making a recommendation.",
    Icon: Stethoscope,
  },
  {
    title: "Individualized Assessment",
    desc: "Each case is evaluated independently. Eligibility is based on the specific circumstances of the individual rather than a generic set of criteria, which is what makes a legitimate ESA letter valid and recognized by landlords and housing providers.",
    Icon: FileSearch,
  },
];

export function QualifyingConditionsEligibility() {
  return (
    <section className="w-full bg-[#FAF7F2]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[38px] leading-tight text-[#2E5A66]">
            How Mental Health Professionals Determine Eligibility?
          </h2>
          <p className="mt-5 font-sans text-base sm:text-[17px] leading-[26px] sm:leading-[28px] font-medium text-[#5F6B6F]">
            ESA eligibility is not determined through a simple checklist or self-assessment; it requires a genuine evaluation by a licensed mental health professional. This evaluation typically considers the following factors:
          </p>
        </div>

        <div className="mt-14 sm:mt-16 grid gap-x-6 gap-y-14 sm:gap-x-8 sm:grid-cols-2">
          {FACTORS.map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="relative flex flex-col items-center rounded-[24px] bg-white border border-[#EAE5DC] border-t-[5px] border-t-[#E8B92C] px-6 pb-8 pt-12 text-center shadow-[0_4px_25px_rgba(46,90,102,0.08)]"
            >
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex size-14 items-center justify-center rounded-full bg-white border border-[#EAE5DC] shadow-md text-[#1D6E72]">
                <Icon className="size-7" strokeWidth={1.75} />
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-[22px] text-[#1E3E47] mb-3">
                {title}
              </h3>
              <p className="font-sans text-sm sm:text-[15px] leading-relaxed text-[#5F6B6F]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
