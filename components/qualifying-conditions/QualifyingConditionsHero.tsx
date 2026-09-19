import React from "react";

export function QualifyingConditionsHero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-12 sm:pb-16">
        {/* Centered Heading & Introduction */}
        <div className="flex flex-col items-center">
          <h1 className="text-center text-balance font-heading font-bold text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] tracking-tight leading-[1.15] text-[#2E5A66]">
            Qualifying Conditions for an Emotional Support Animal (ESA) Letter
          </h1>

          <p className="mt-5 w-full font-sans text-base sm:text-[17px] lg:text-[18px] leading-[26px] sm:leading-[28px] lg:leading-[30px] font-medium text-[#5F6B6F]">
            If you&apos;ve ever felt calmer just having your ESA curl up beside you after a hard day, you already know how an emotional support animal can provide reliable support and comfort whenever you need it. But qualifying for an ESA isn&apos;t just about loving your dog or cat; it&apos;s a connection to a real mental or emotional health condition, like anxiety, depression, PTSD, or panic disorder, that affects your daily life.
          </p>
          <p className="mt-4 w-full font-sans text-base sm:text-[17px] lg:text-[18px] leading-[26px] sm:leading-[28px] lg:leading-[30px] font-medium text-[#5F6B6F]">
            Here&apos;s the part people often miss: having one of these conditions doesn&apos;t automatically get you an ESA letter. A diagnosis is only the beginning. What actually matters is an evaluation by a licensed mental health professional, someone who can confirm, in writing, that an ESA would genuinely support your well-being. That&apos;s what makes a letter legitimate and accepted by landlords or housing providers.
          </p>
        </div>
      </div>
    </section>
  );
}
