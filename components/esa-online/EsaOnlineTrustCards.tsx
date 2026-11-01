import React from "react";
import Image from "next/image";

const CARDS = [
  { title: "Secure & Compliant", subtitle: "HIPAA-Aligned Platform", icon: "/ESA ICons/Glyph-3.svg" },
  { title: "Flexible Evaluations", subtitle: "Phone or Video Sessions", icon: "/ESA ICons/Icon-18.svg" },
  { title: "Fast Scheduling", subtitle: "Same-Day Appointments", icon: "/ESA ICons/Icon-16.svg" },
  { title: "Fully Online", subtitle: "No In-Person Visits Required", icon: "/ESA ICons/Icon-15.svg" },
];

export function EsaOnlineTrustCards() {
  return (
    <section className="w-full bg-background pt-16 pb-8 sm:pt-20 sm:pb-12 lg:pb-16">
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-[760px] text-center lg:mb-20">
          <h2 className="heading-h2 text-primary">Why ESA Owners Trust Us</h2>
          <p className="body-large mx-auto mt-3 max-w-[640px] text-body-text">
            We stand apart by providing legitimate, professional ESA evaluations conducted by licensed clinicians.
          </p>
        </div>
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
          {CARDS.map((card) => (
            <div key={card.title} className="relative flex w-full flex-col">
              <div className="absolute inset-x-0 top-0 bottom-2 rounded-[20px] bg-accent shadow-[0px_2px_4px_rgba(0,0,0,0.15)]" />
              <div className="relative mt-2 flex min-h-[160px] flex-1 flex-col items-center justify-center gap-2 rounded-[20px] bg-white px-4 pt-[60px] pb-[37px] text-center shadow-[0px_2px_4px_rgba(0,0,0,0.15)]">
                <h3 className="heading-h4 text-color-gradient">{card.title}</h3>
                <p className="body-small">{card.subtitle}</p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 -top-8 z-10 flex h-[74px] w-[74px] items-center justify-center rounded-full bg-white shadow-[0px_1.89px_3.78px_rgba(0,0,0,0.25)]">
                <Image src={card.icon} alt={card.title} width={32} height={32} unoptimized className="h-8 w-8 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
