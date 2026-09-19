import React from "react";
import Link from "next/link";

const BASIC_COMMANDS = [
  {
    num: "01",
    title: "Foundational obedience",
    desc: "Sit, stay, come. The basics that make everyday life predictable.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-7">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Leash manners",
    desc: "No pulling, lunging, or bolting when you're out together.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-7">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Calm public behavior",
    desc: "No excessive barking, jumping, or aggression around others.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-7">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
];

export function EsaTrainingBasicsSection() {
  return (
    <section className="w-full bg-[#FAF7F2] py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block rounded-full bg-[#2E5A66]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2E5A66] mb-3">
            Recommended Basics
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[38px] leading-tight text-[#2E5A66]">
            Basic Training Every ESA Should Have
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-[#5F6B6F] max-w-2xl mx-auto leading-relaxed">
            An ESA that barks constantly or acts aggressively gives a landlord legitimate grounds for concern, no matter how strong your letter is. Not legally required, but these basics protect your housing situation:
          </p>
        </div>

        {/* 3 Numbered Cards */}
        <div className="grid gap-8 sm:grid-cols-3 pt-8">
          {BASIC_COMMANDS.map(({ num, title, desc, icon }) => (
            <div
              key={num}
              className="relative bg-white rounded-[24px] px-6 pb-8 pt-12 shadow-[0_4px_25px_rgba(46,90,102,0.08)] border border-[#EAE5DC] border-t-[5px] border-t-[#E8B92C] text-center flex flex-col items-center mt-6"
            >
              {/* Circular icon badge overflowing the top */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 size-14 rounded-full bg-white shadow-md border border-[#EAE5DC] flex items-center justify-center text-[#1D6E72]">
                {icon}
              </div>

              <h3 className="font-heading font-bold text-xl sm:text-[22px] text-[#1E3E47] mb-3">
                {title}
              </h3>
              <p className="font-sans text-sm sm:text-[15px] leading-relaxed text-[#5F6B6F]">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Link to 8 basic obedience commands blog */}
        <div className="mt-10 text-center">
          <Link
            href="/blog/esa-training/8-basic-obedience-commands-every-esa-should-know/"
            className="inline-flex items-center gap-1 font-sans font-bold text-sm sm:text-base text-[#2E5A66] underline underline-offset-4 decoration-[#E8B92C] decoration-2 hover:text-[#E8B92C] transition-colors"
          >
            See all 8 basic obedience commands every ESA should know &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
