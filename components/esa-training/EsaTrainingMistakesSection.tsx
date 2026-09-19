import React from "react";

const MISTAKES = [
  {
    title: "Skipping socialization",
    desc: "Leads to fearful or reactive behavior around people and other animals",
  },
  {
    title: "Inconsistent commands",
    desc: "Different words or cues each time slow progress and confuse your animal",
  },
  {
    title: "Punishing instead of redirecting",
    desc: "Punishment tends to build anxiety, not obedience",
  },
  {
    title: "Starting too late",
    desc: "Unwanted behaviors get harder to unlearn the longer they go unaddressed",
  },
];

export function EsaTrainingMistakesSection() {
  return (
    <section className="w-full bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block rounded-full bg-[#2E5A66]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2E5A66] mb-3">
            Avoid These Pitfalls
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[38px] leading-tight text-[#2E5A66]">
            Common ESA Training Mistakes to Avoid
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {MISTAKES.map(({ title, desc }) => (
            <div
              key={title}
              className="rounded-[20px] bg-white border border-[#EAE5DC] border-l-[5px] border-l-[#E8B92C] p-6 sm:p-7 shadow-[0_4px_25px_rgba(46,90,102,0.08)] hover:shadow-md transition-all duration-300 flex flex-col justify-start"
            >
              <h3 className="font-heading font-bold text-lg sm:text-xl text-[#1E3E47] mb-2">
                {title}
              </h3>
              <p className="font-sans text-sm sm:text-[15px] leading-relaxed text-[#1E3E47]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
