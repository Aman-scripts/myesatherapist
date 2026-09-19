import React from "react";
import Image from "next/image";

const SPECIES_DATA = [
  {
    animal: "Dogs",
    tag: "Most Common",
    desc: "The most common ESA and the easiest to train, given how many structured training resources, methods, and classes exist. Routine leash walking and basic commands help them thrive in apartments.",
  },
  {
    animal: "Cats",
    tag: "Indoor Routine",
    desc: "Trainable too. Litter box reliability, consistent scratching post use, gentle carrier acclimation, and calm behavior around guests are all practical and realistic goals.",
  },
  {
    animal: "Rabbits, birds, & small animals",
    tag: "Specialized Bond",
    desc: "Training looks different here. It's more focused on gentle handling, cage socialization, safe environmental enrichment, and calm predictable routines rather than verbal commands.",
  },
];

export function EsaTrainingBySpeciesSection() {
  return (
    <section className="w-full bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block rounded-full bg-[#2E5A66]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2E5A66] mb-3">
            By Species
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[38px] leading-tight text-[#2E5A66]">
            Training by Animal Type
          </h2>
        </div>

        {/* 3 Species Cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          {SPECIES_DATA.map(({ animal, tag, desc }) => (
            <div
              key={animal}
              className="rounded-[20px] bg-[#FAF7F2] border border-[#2E5A66]/10 p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#E8B92C]/25 text-[#1E3E47] mb-4">
                  {tag}
                </span>
                <h3 className="font-heading font-bold text-xl text-[#2E5A66] mb-3">
                  {animal}
                </h3>
                <p className="font-sans text-sm sm:text-[15px] leading-relaxed text-[#5F6B6F]">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center font-sans text-base sm:text-[17px] leading-relaxed text-[#5F6B6F] max-w-2xl mx-auto">
          Any domesticated animal capable of bonding and safe handling can qualify as an ESA, but dogs and cats adapt best to the structure that keeps a residential housing situation smooth.
        </p>
      </div>
    </section>
  );
}
