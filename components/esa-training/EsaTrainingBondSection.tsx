import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

export function EsaTrainingBondSection() {
  return (
    <section className="w-full bg-[#FAF7F2] py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block rounded-full bg-[#2E5A66]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2E5A66] mb-3">
            The Human-Animal Bond
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[38px] leading-tight text-[#2E5A66]">
            How Training Strengthens the ESA-Owner Bond
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Left Column: Quote Card & Note */}
          <div className="lg:col-span-7">
            <div className="rounded-[24px] bg-white p-7 sm:p-9 shadow-[0_4px_20px_-4px_rgba(46,90,102,0.08)] border border-[#EAE5DC] border-l-[5px] border-l-[#E8B92C]">
              {/* Gold Quote Icon Badge */}
              <div className="size-11 rounded-xl bg-[#E8B92C]/15 border border-[#E8B92C]/35 flex items-center justify-center text-[#E8B92C] mb-4 shadow-2xs">
                <Quote className="size-5 text-[#E8B92C] fill-[#E8B92C]" />
              </div>

              {/* Quote Typography */}
              <blockquote className="font-heading italic font-semibold text-lg sm:text-xl lg:text-[22px] leading-[1.55] text-[#1E3E47] relative z-10">
                “Training sessions build more than obedience. The repetition creates routine, and routine is genuinely therapeutic, especially on harder days.”
              </blockquote>
            </div>

            <p className="mt-5 font-sans text-base sm:text-[17px] leading-[1.75] text-[#5F6B6F]">
              Teaching your animal something new, watching them learn, and building a shared language of trust deepens the bond in a way little else does.
            </p>
          </div>

          {/* Right Column: Companion Dog Photo */}
          <div className="lg:col-span-5 self-stretch flex">
            <div className="relative overflow-hidden rounded-[22px] shadow-md border-2 border-[#E8B92C]/40 bg-white w-full min-h-[280px]">
              <Image
                src="/esa-training/esa-training-bond.webp"
                alt="Person relaxing at home with a calm emotional support dog by their side"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 380px, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
