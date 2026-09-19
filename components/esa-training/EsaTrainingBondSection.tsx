import React from "react";
import Image from "next/image";

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

        <div className="grid gap-8 lg:grid-cols-12 items-center">
          {/* Left Column: Quote & Prose */}
          <div className="lg:col-span-7">
            <blockquote className="relative rounded-[22px] bg-white p-7 sm:p-9 shadow-xs border border-[#2E5A66]/08">
              <span className="block h-7 sm:h-8 font-heading text-5xl sm:text-6xl text-[#E8B92C] leading-[0.9] mb-2 select-none">
                “
              </span>
              <p className="font-sans text-base sm:text-lg leading-relaxed text-[#2E5A66] font-medium italic">
                Training sessions build more than obedience. The repetition creates routine, and routine is genuinely therapeutic, especially on harder days.
              </p>
            </blockquote>
            <p className="mt-6 font-sans text-base sm:text-[17px] leading-[1.75] text-[#5F6B6F]">
              Teaching your animal something new, watching them learn, and building a shared language of mutual trust deepens the emotional bond in a way little else does. As your pet develops confidence in you, you gain confidence navigating your daily environment together.
            </p>
          </div>

          {/* Right Column: High Quality Image */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-[22px] shadow-md border-2 border-[#E8B92C]/40 bg-white relative h-[320px] sm:h-[360px] w-full">
              <Image
                src="/Blog Images/woman-with-emotional-support-dog.webp"
                alt="Person relaxing at home with a calm emotional support dog by their side"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
