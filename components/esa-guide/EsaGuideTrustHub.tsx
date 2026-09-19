import React from "react";
import { CheckCircle2, Info, RefreshCw } from "lucide-react";

const TRUST_PILLARS = [
  {
    icon: CheckCircle2,
    title: "Clinician-informed content",
    text: "Every guide is grounded in current federal law and reviewed for accuracy by licensed mental health professionals.",
  },
  {
    icon: Info,
    title: "No legal jargon",
    text: "We translate complex housing laws and ESA regulations into plain language anyone can understand and act on.",
  },
  {
    icon: RefreshCw,
    title: "Regularly updated",
    text: "ESA laws and policies evolve. Our resources are kept current so you always have reliable, up-to-date guidance.",
  },
];

export function EsaGuideTrustHub() {
  return (
    <section className="w-full bg-[#FAF7F2]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="max-w-2xl">
          <span className="text-xs sm:text-sm font-sans font-bold uppercase tracking-wider text-[#2E5A66]">
            Your trusted ESA resource hub
          </span>
          <h2 className="mt-3 text-balance font-heading font-bold text-2xl sm:text-3xl lg:text-[38px] leading-tight text-[#2E5A66]">
            Your Trusted ESA Resource Hub
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg leading-relaxed text-[#5F6B6F]">
            Our guides are written to give you clear, accurate information about emotional support animals — without the confusion, misinformation, or unnecessary upsells that are common in this space.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {TRUST_PILLARS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="border-t-2 border-[#2E5A66] pt-5">
              <Icon className="size-6 text-[#2E5A66]" />
              <h3 className="mt-4 font-heading font-bold text-xl text-[#2E5A66]">
                {title}
              </h3>
              <p className="mt-2 font-sans text-sm sm:text-base leading-relaxed text-[#5F6B6F]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
