import React from "react";
import { AlertTriangle } from "lucide-react";

const MISTAKES = [
  {
    title: "Skipping socialization",
    desc: "Keeping an animal sheltered from normal stimuli leads to fearful, anxious, or reactive behavior around hallway noises, neighbors, and other animals.",
  },
  {
    title: "Inconsistent commands",
    desc: "Using different words, varied gestures, or lax boundaries each time significantly slows progress and confuses your animal's understanding.",
  },
  {
    title: "Punishing instead of redirecting",
    desc: "Harsh corrections or shouting tend to build underlying anxiety and distrust rather than true cooperative obedience and emotional calm.",
  },
  {
    title: "Starting training too late",
    desc: "Habitual nuisance behaviors like jumping or incessant barking become substantially harder to unlearn the longer they go unaddressed in housing.",
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
          <p className="mt-4 font-sans text-base sm:text-lg text-[#5F6B6F] max-w-2xl mx-auto">
            Steering clear of these common pitfalls ensures a calmer learning journey and protects your residential tenancy.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {MISTAKES.map(({ title, desc }) => (
            <div
              key={title}
              className="rounded-[20px] bg-[#FAF7F2] border border-[#2E5A66]/10 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <span className="size-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <AlertTriangle className="size-4" />
                </span>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-[#2E5A66]">
                  {title}
                </h3>
              </div>
              <p className="font-sans text-sm sm:text-[15px] leading-relaxed text-[#5F6B6F] pl-11">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
