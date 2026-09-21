import React from "react";
import { IconCard, SectionHeader } from "@/components/common/BlogPageBlocks";

const ICON = "/esa-qualifying-conditions/esa-qualifyingconditions_mentalhealthallcardsicon.svg";

const FACTORS = [
  {
    title: "Functional Limitations",
    text: "Professionals assess how a condition affects daily functioning, including work performance, relationships, sleep, and the ability to manage routine tasks. Conditions that significantly interfere with daily life are more likely to support ESA eligibility.",
  },
  {
    title: "Emotional Support",
    text: "The evaluation also considers whether an animal provides a measurable emotional or therapeutic benefit, such as reducing anxiety, easing panic symptoms, or offering comfort during periods of emotional distress. This benefit must be directly relevant to the individual’s diagnosed condition.",
  },
  {
    title: "Clinical Evaluation",
    text: "A proper ESA recommendation involves a clinical conversation or session with a licensed mental health professional, not a same-day form submission. The professional reviews the individual’s mental health history and current symptoms before making a recommendation.",
  },
  {
    title: "Individualized Assessment",
    text: "Each case is evaluated independently. Eligibility is based on the specific circumstances of the individual rather than a generic set of criteria, which is what makes a legitimate ESA letter valid and recognized by landlords and housing providers.",
  },
];

export function QualifyingConditionsEligibility() {
  return (
    <section className="w-full bg-[#FAF7F2]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 px-4 sm:px-8 lg:gap-[3.2vw] lg:px-[4vw] xl:gap-[72px] xl:px-0">
        <SectionHeader
          title="How Mental Health Professionals Determine Eligibility?"
          subtitle="ESA eligibility is not determined through a simple checklist or self-assessment; it requires a genuine evaluation by a licensed mental health professional. This evaluation typically considers the following factors:"
          subtitleMaxWidth="max-w-[1065px]"
          titleClassName="max-w-[809px]"
          className="gap-8 lg:gap-[2.4vw] xl:gap-8"
        />
        <div className="grid w-full grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
          {FACTORS.map((item) => (
            <IconCard key={item.title} icon={ICON} title={item.title} text={item.text} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
