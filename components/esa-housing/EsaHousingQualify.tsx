import React from "react";
import { GoldCallout } from "@/components/esa-online/EsaOnlineShared";
import { SectionHeader } from "./EsaHousingShared";

export function EsaHousingQualify() {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12">
        <SectionHeader title="How Do I Know If I May Qualify?" leadMax="max-w-[938px]">
          The most reliable way to determine whether an Emotional Support Animal may be appropriate is through an evaluation by a licensed mental health professional. During this process, the professional considers your emotional and mental health needs, personal history, functional challenges, and whether an ESA may reasonably support your well-being. If the professional determines that an ESA is appropriate based on the evaluation, housing-related documentation may be issued at their discretion. If not, no documentation is provided.
        </SectionHeader>

        <GoldCallout title="Important" className="max-w-[1050px]">
          There are no special tests or certifications required to request an ESA evaluation. Self-diagnosis alone is not sufficient, as eligibility must be determined through an assessment by a licensed mental health professional. Typically, you will need basic personal information and your state of residence so the evaluation can follow applicable licensing requirements.
        </GoldCallout>
      </div>
    </section>
  );
}
