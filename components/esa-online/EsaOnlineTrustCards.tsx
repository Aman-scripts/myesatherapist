import React from "react";
import { FeatureCard } from "./EsaOnlineShared";

const CARDS = [
  { title: "Flexible Scheduling", icon: "/ESA ICons/Icon-16.svg" },
  { title: "Licensed Evaluations", icon: "/ESA ICons/Icon-33.svg" },
  { title: "HIPAA-compliant platform", icon: "/ESA ICons/Glyph-3.svg" },
  { title: "Transparent Policies", icon: "/ESA ICons/Icon-17.svg" },
];

export function EsaOnlineTrustCards() {
  return (
    <section className="w-full bg-background pt-14 pb-8 sm:pb-12 lg:pb-16">
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
          {CARDS.map((card) => (
            <FeatureCard key={card.title} icon={card.icon} title={card.title} headingFont="lato" headingAs="h2" />
          ))}
        </div>
      </div>
    </section>
  );
}
