import React from "react";
import Link from "next/link";

const COMPARISON_ROWS = [
  {
    feature: "Legal framework",
    esa: "Fair Housing Act (FHA)",
    service: "Americans with Disabilities Act (ADA)",
  },
  {
    feature: "Training required",
    esa: "No specialized training required",
    service: "Yes, individually trained for specific tasks",
  },
  {
    feature: "Public access rights",
    esa: "Housing only (no public places or air travel)",
    service: "Nearly everywhere the public is permitted",
  },
  {
    feature: "Primary role",
    esa: "Comfort & stability through companionship",
    service: "Performs specific disability-related tasks",
  },
];

export function EsaTrainingVsServiceDog() {
  return (
    <section className="w-full bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block rounded-full bg-[#2E5A66]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2E5A66] mb-3">
            Know the Difference
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[38px] leading-tight text-[#2E5A66]">
            ESA Training vs. Service Dog Training
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-[#5F6B6F] max-w-2xl mx-auto leading-relaxed">
            ESAs and service dogs are often confused, but they differ fundamentally in legal status, training requirements, and public access rights.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-[20px] shadow-sm border border-[#2E5A66]/12 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left min-w-[540px]">
              <thead>
                <tr className="bg-[#2E5A66] text-white">
                  <th className="px-6 py-4.5 font-heading font-bold text-sm sm:text-base w-[30%]">
                    Category
                  </th>
                  <th className="px-6 py-4.5 font-heading font-bold text-sm sm:text-base w-[35%]">
                    Emotional Support Animal (ESA)
                  </th>
                  <th className="px-6 py-4.5 font-heading font-bold text-sm sm:text-base w-[35%]">
                    Service Dog
                  </th>
                </tr>
              </thead>
              <tbody className="font-sans text-sm sm:text-[15px] divide-y divide-[#2E5A66]/08">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={idx % 2 === 0 ? "bg-[#FAF7F2]/60" : "bg-white"}
                  >
                    <th className="px-6 py-4 font-semibold text-[#2E5A66] bg-[#2E5A66]/04">
                      {row.feature}
                    </th>
                    <td className="px-6 py-4 text-[#5F6B6F] font-medium">
                      {row.esa}
                    </td>
                    <td className="px-6 py-4 text-[#2E5A66] font-semibold">
                      {row.service}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Explanatory Paragraphs */}
        <div className="mt-10 space-y-4 font-sans text-base sm:text-[17px] leading-[1.75] text-[#5F6B6F] max-w-3xl mx-auto">
          <p>
            An ESA's support comes from companionship and presence, not a performed skill. Service dogs are trained to assist with a disability-related need. ESAs simply need to be there, calming and stabilizing, which doesn't require specialized task training.
          </p>
          <p>
            If your needs go beyond comfort into needing an animal that performs a specific job, like interrupting a panic attack or reminding you to take medication, that's worth discussing with your mental health provider as a possible{" "}
            <Link
              href="/psd-letter"
              className="font-semibold text-[#2E5A66] underline decoration-[#E8B92C] underline-offset-2 hover:text-[#E8B92C] transition-colors"
            >
              psychiatric service dog (PSD)
            </Link>{" "}
            path.
          </p>
        </div>
      </div>
    </section>
  );
}
