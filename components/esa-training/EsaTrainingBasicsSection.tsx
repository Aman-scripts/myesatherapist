import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const BASIC_COMMANDS = [
  {
    num: "01",
    title: "Foundational obedience",
    desc: "Sit, stay, come. The core foundational commands that make everyday life and transitions predictable and safe.",
  },
  {
    num: "02",
    title: "Leash manners",
    desc: "No pulling, lunging, or bolting when walking through common residential areas, hallways, or elevators.",
  },
  {
    num: "03",
    title: "Calm public behavior",
    desc: "No excessive barking, jumping, or reactivity around neighbors, visitors, or other animals in the building.",
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
            An ESA that barks constantly or acts aggressively gives a landlord legitimate grounds for concern, no matter how strong your letter is. Not legally required, but these basics protect your housing accommodation:
          </p>
        </div>

        {/* 3 Numbered Cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          {BASIC_COMMANDS.map(({ num, title, desc }) => (
            <article
              key={num}
              className="relative overflow-hidden rounded-[20px] bg-white p-7 shadow-xs border border-[#2E5A66]/08 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <span className="absolute top-0 left-0 right-0 h-1 bg-[#E8B92C]" />
              <div>
                <span className="flex size-10 items-center justify-center rounded-full bg-[#2E5A66] text-[#E8B92C] text-sm font-extrabold mb-5 shadow-xs">
                  {num}
                </span>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-[#2E5A66] mb-2.5">
                  {title}
                </h3>
                <p className="font-sans text-sm sm:text-[15px] leading-relaxed text-[#5F6B6F]">
                  {desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Link to 8 basic obedience commands blog */}
        <div className="mt-8 text-center">
          <Link
            href="/blog/esa-training/8-basic-obedience-commands-every-esa-should-know/"
            className="inline-flex items-center gap-1.5 font-sans font-bold text-sm sm:text-base text-[#2E5A66] underline underline-offset-4 decoration-[#E8B92C] decoration-2 hover:text-[#E8B92C] transition-colors"
          >
            See all 8 basic obedience commands every ESA should know <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
