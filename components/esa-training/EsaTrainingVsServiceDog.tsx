import React from "react";
import Link from "next/link";

const COMPARISON_ROWS = [
  {
    feature: "Legal framework",
    esa: "Fair Housing Act",
    service: "ADA",
  },
  {
    feature: "Training required",
    esa: "No",
    service: "Yes, task-specific",
  },
  {
    feature: "Public access rights",
    esa: "Housing only",
    service: "Nearly everywhere",
  },
  {
    feature: "Role",
    esa: "Comfort through presence",
    service: "Performs a specific trained task",
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
            ESAs and service dogs are often confused, but they differ in legal status, training requirements, and public access rights.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-[20px] shadow-sm border border-[#2E5A66]/12 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left min-w-[500px]">
              <thead>
                <tr className="bg-[#2E5A66] text-white">
                  <th scope="col" className="px-6 py-4.5 font-heading font-bold text-sm sm:text-base w-[28%]" />
                  <th scope="col" className="px-6 py-4.5 font-heading font-bold text-sm sm:text-base w-[36%]">
                    Emotional Support Animal
                  </th>
                  <th scope="col" className="px-6 py-4.5 font-heading font-bold text-sm sm:text-base w-[36%]">
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
                    <th scope="row" className="px-6 py-4 font-bold text-[#2E5A66] bg-[#2E5A66]/04">
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

        {/* Explanatory Callout Box */}
        <div className="mt-10 rounded-[20px] bg-[#FAF7F2] border border-[#EAE5DC] border-l-[5px] border-l-[#E8B92C] p-6 sm:p-8 max-w-3xl mx-auto shadow-[0_2px_16px_rgba(46,90,102,0.06)] space-y-3 font-sans text-base sm:text-[17px] leading-[1.75] text-[#5F6B6F]">
          <p>
            An ESA&apos;s support comes from companionship and presence, not a performed skill. Service dogs are trained to assist with a disability-related need. ESAs simply need to be there, calming and stabilizing, which doesn&apos;t require specialized task training.
          </p>
          <p>
            If your needs go beyond comfort into needing an animal that performs a specific job, like interrupting a panic attack or reminding you to take medication, that&apos;s worth discussing with your mental health provider as a possible psychiatric service dog path.
          </p>
        </div>
      </div>
    </section>
  );
}
