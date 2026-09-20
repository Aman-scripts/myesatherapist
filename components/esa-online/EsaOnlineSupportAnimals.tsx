import React from "react";
import Image from "next/image";
import { CtaButton } from "./EsaOnlineShared";

const ANIMALS = [
  {
    image: "/esa-online/esa-letter-online_esaletterdiffernt-emotinalsupportdog.png",
    alt: "Woman with her emotional support dog",
    title: "Emotional Support Dog Letter",
    description:
      "Request a professional consultation to determine whether a dog is suitable for your emotional and mental health needs. When appropriate, a letter may be issued to support your housing accommodation request.",
  },
  {
    image: "/esa-online/esa-letter-online_esaletterdiffernt-emotionalsupportcat.png",
    alt: "Woman with her emotional support cat",
    title: "Emotional Support Cat Letter",
    description:
      "Undergo a professional consultation to determine whether a cat may be appropriate for your emotional and mental health needs. When appropriate, documentation may be issued in support of your housing accommodation request.",
  },
];

export function EsaOnlineSupportAnimals() {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl xl:text-[44px] font-bold text-[#2E5A66] leading-[1.2] xl:leading-[54px] tracking-[-0.00015em] max-w-[1000px]">
            ESA Letters For Different Support Animals
          </h2>
          <p className="font-sans text-base sm:text-[18px] text-[#5F6B6F] font-semibold leading-[30px] max-w-[795px]">
            Your ESA recommendation letter may be issued for various animals when a licensed professional finds it appropriate based on your needs and safety considerations.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          {ANIMALS.map((a) => (
            <div key={a.title} className="flex flex-col sm:flex-row overflow-hidden rounded-[20px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
              <div className="relative w-full sm:w-[34%] shrink-0 aspect-[4/3] sm:aspect-auto sm:min-h-[260px]">
                <Image src={a.image} alt={a.alt} fill className="object-cover" sizes="(min-width: 640px) 200px, 100vw" />
              </div>
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left justify-center gap-4 p-5 sm:p-6 xl:p-8">
                <h3 className="font-heading text-2xl lg:text-[24px] xl:text-[28px] font-bold text-[#2E5A66] leading-8 xl:leading-9 max-w-[300px]">{a.title}</h3>
                <p className="font-sans text-[14px] font-semibold leading-[26px] text-[#5F6B6F]">{a.description}</p>
                <CtaButton href="/pricing/">Apply your ESA Now</CtaButton>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full max-w-[970px] flex flex-col items-center text-center sm:items-start sm:text-left gap-4 rounded-[20px] bg-[#FAF7F2] p-6 sm:p-8 shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
          <h3 className="font-heading text-2xl sm:text-[28px] font-bold text-[#2E5A66] leading-9">Have a Different Type of Support Animal?</h3>
          <p className="font-sans text-[14px] font-semibold leading-[26px] text-[#5F6B6F]">
            Emotional support animal letters are not limited to dogs and cats. A licensed mental health professional may consider other animals, such as rabbits, birds, or guinea pigs, on a case-by-case basis when appropriate.
          </p>
          <CtaButton href="/pricing/">Begin with ESA Letter Process</CtaButton>
        </div>
      </div>
    </section>
  );
}
