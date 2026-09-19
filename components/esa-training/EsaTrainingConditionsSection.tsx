import React from "react";

const CONDITIONS = [
  {
    condition: "Anxiety and Panic Attacks",
    desc: "Teaching your animal to settle calmly beside you, which can help regulate your own breathing and heart rate",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-7">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    condition: "Depression",
    desc: "Building routine around feeding, walking, and care, giving structure to days that might otherwise feel shapeless",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-7">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 15h8" />
        <path d="M9 9h.01" />
        <path d="M15 9h.01" />
      </svg>
    ),
  },
  {
    condition: "PTSD",
    desc: "Establishing a routine, stress-free setting where your pet's presence serves as a grounding signal",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export function EsaTrainingConditionsSection() {
  return (
    <section className="w-full bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block rounded-full bg-[#2E5A66]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2E5A66] mb-3">
            Condition-Specific Support
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[38px] leading-tight text-[#2E5A66]">
            ESA Training for Specific Mental Health Conditions
          </h2>
        </div>

        {/* 3 Condition Cards */}
        <div className="grid gap-8 sm:grid-cols-3 pt-8">
          {CONDITIONS.map(({ condition, desc, icon }) => (
            <div
              key={condition}
              className="relative bg-white rounded-[24px] px-6 pb-8 pt-12 shadow-[0_4px_25px_rgba(46,90,102,0.08)] border border-[#EAE5DC] border-t-[5px] border-t-[#E8B92C] text-center flex flex-col items-center mt-6"
            >
              {/* Circular icon badge overflowing the top */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 size-14 rounded-full bg-white shadow-md border border-[#EAE5DC] flex items-center justify-center text-[#1D6E72]">
                {icon}
              </div>

              <h3 className="font-heading font-bold text-xl sm:text-[22px] text-[#1E3E47] mb-3">
                {condition}
              </h3>
              <p className="font-sans text-sm sm:text-[15px] leading-relaxed text-[#5F6B6F]">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-sans text-sm sm:text-base leading-relaxed text-[#5F6B6F] max-w-2xl mx-auto">
          This isn&apos;t task-specific training. It&apos;s shaping everyday habits around the support your animal already provides.
        </p>
      </div>
    </section>
  );
}
