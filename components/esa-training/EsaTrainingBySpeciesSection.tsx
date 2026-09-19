import React from "react";

const SPECIES_DATA = [
  {
    animal: "Dogs",
    desc: "The most common ESA and the easiest to train, given how many resources exist.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-7">
        <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.625.36 1.08.5 1.5 1.69 0 3.31.234 4.5.5-.015-.9.41-6.5 2.5-6.828z" />
        <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.625-.36 1.08-.5 1.5-1.69 0-3.31.234-4.5.5.015-.9-.41-6.5-2.5-6.828z" />
        <path d="M8 14v.5" />
        <path d="M16 14v.5" />
        <path d="M11.25 16.25h1.5L12 17z" />
        <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-3.272 8-6.444c0-1.061-.2-2.2-.42-3.309" />
      </svg>
    ),
  },
  {
    animal: "Cats",
    desc: "Trainable too. Litter box reliability, scratching post use, and calm behavior around guests are realistic goals.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-7">
        <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.26A9.06 9.06 0 0 1 12 5z" />
        <path d="M8 14v.5" />
        <path d="M16 14v.5" />
        <path d="M11.25 16.25h1.5L12 17l-.75-.75z" />
      </svg>
    ),
  },
  {
    animal: "Rabbits, birds, and other small animals",
    desc: "Training looks different here. It's more about handling, socialization, and predictable routines than commands.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-7">
        <path d="M16 7h.01" />
        <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
        <path d="m20 7 2 .5-2 .5" />
        <path d="M10 18v3" />
        <path d="M14 17.75V21" />
        <path d="M7 18a6 6 0 0 0 3.84-10.61" />
      </svg>
    ),
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
        <div className="grid gap-8 sm:grid-cols-3 pt-8">
          {SPECIES_DATA.map(({ animal, desc, icon }) => (
            <div
              key={animal}
              className="relative bg-white rounded-[24px] px-6 pb-8 pt-12 shadow-[0_4px_25px_rgba(46,90,102,0.08)] border border-[#EAE5DC] border-t-[5px] border-t-[#E8B92C] text-center flex flex-col items-center mt-6"
            >
              {/* Circular icon badge overflowing the top */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 size-14 rounded-full bg-white shadow-md border border-[#EAE5DC] flex items-center justify-center text-[#1D6E72]">
                {icon}
              </div>

              <h3 className="font-heading font-bold text-xl sm:text-[22px] text-[#1E3E47] mb-3">
                {animal}
              </h3>
              <p className="font-sans text-sm sm:text-[15px] leading-relaxed text-[#5F6B6F]">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-sans text-base sm:text-[17px] leading-relaxed text-[#5F6B6F] max-w-2xl mx-auto">
          Any animal capable of bonding and safe handling can qualify as an ESA, but dogs and cats adapt best to the structure that keeps a housing situation smooth.
        </p>
      </div>
    </section>
  );
}
