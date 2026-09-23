import React from "react";
import { FeatureCard } from "./EsaOnlineShared";

const ICON = "/esa-online/esa-letter-online_afterherosection4cards-icon.svg";
const CARDS = ["Flexible Scheduling", "Licensed Evaluations", "HIPAA-compliant platform", "Transparent Policies"];

export function EsaOnlineTrustCards() {
  return (
    <section className="w-full bg-[#FAF7F2] pt-14 pb-8 sm:pb-12 lg:pb-16">
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
          {CARDS.map((title) => (
            <FeatureCard key={title} icon={ICON} title={title} headingFont="lato" headingAs="h2" />
          ))}
        </div>
      </div>
    </section>
  );
}
