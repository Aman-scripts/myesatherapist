import React from "react";
import Image from "next/image";
import { WaveImage } from "@/components/esa-online/EsaOnlineShared";
import { SCALED_H2 } from "./EsaHousingShared";

const ICON = "/esa-housing/esa-letter-housing_housinglawssection-allcards-icon.svg";

const STEPS = [
  {
    title: "File a Complaint",
    description:
      "You may submit a complaint to the U.S. Department of Housing and Urban Development (HUD) if you believe your rights under the Fair Housing Act were violated.",
  },
  {
    title: "Seek Legal Guidance",
    description:
      "An attorney familiar with fair housing or ESA-related matters can help you assess your situation and advise you on appropriate next steps.",
  },
  {
    title: "Provide Written Clarification",
    description:
      "A clear, written explanation to your landlord can help resolve misunderstandings and support your accommodation request.",
  },
];

export function EsaHousingDenied() {
  return (
    <section className="w-full bg-white relative overflow-hidden lg:min-h-[min(57.8vw,832px)]">
      {/* Artwork with the curve and heart badge baked in, flush right */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[min(51.7%,745px)]">
        <Image
          src="/esa-housing/esa-letter-housing_esaisdenied.png"
          alt="Woman looking worried at an ESA denied notice with legal books beside her"
          fill
          className="object-cover object-left-top"
          sizes="(min-width: 1440px) 745px, 52vw"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-8 lg:pl-[min(5.56vw,80px)] lg:pr-0 pb-14 sm:pb-20 lg:py-[min(4.5vw,65px)] lg:flex lg:items-center lg:min-h-[inherit]">
        <div className="lg:hidden">
          <WaveImage
            alt="Woman looking worried at an ESA denied notice with legal books beside her"
            mobile={{ src: "/esa-housing/esa-letter-housing_ifesadeniend_mobile.png", w: 390, h: 512, crop: { x: 0, y: 165, w: 390, h: 346 } }}
            tablet={{ src: "/esa-housing/esa-letter-housing_ifesadeniend_tablet.png", w: 834, h: 1049, crop: { x: 0, y: 211, w: 834, h: 838 } }}
          />
        </div>
        <div className="w-full max-w-[626px] lg:max-w-[min(41vw,590px)] flex flex-col gap-8 lg:gap-[min(2.5vw,36px)]">
          <h2 className={`${SCALED_H2} text-center lg:text-left lg:max-w-[min(43.5vw,626px)]`}>What to Do If Your ESA Is Denied Without a Valid Reason?</h2>

          <div className="flex flex-col gap-5 lg:gap-[min(1.5vw,22px)]">
            {STEPS.map((s) => (
              <div key={s.title} className="flex overflow-hidden rounded-[20px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.12)]">
                <div className="w-[10px] sm:w-[13px] shrink-0 bg-[#1D6E72]" />
                <div className="flex items-center gap-4 sm:gap-6 lg:gap-[min(1.7vw,24px)] py-5 lg:py-[min(1.3vw,18px)] pl-4 sm:pl-6 lg:pl-[min(1.7vw,24px)] pr-5 lg:pr-[min(1.4vw,20px)]">
                  <div className="flex h-[60px] w-[60px] sm:h-[74px] sm:w-[74px] lg:h-[min(5.2vw,74px)] lg:w-[min(5.2vw,74px)] shrink-0 items-center justify-center rounded-full bg-white shadow-[0px_1.89px_3.78px_rgba(0,0,0,0.25)]">
                    <Image src={ICON} alt="" width={32} height={32} className="h-8 w-8 lg:h-[min(2.2vw,32px)] lg:w-[min(2.2vw,32px)] object-contain" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-heading font-bold text-[20px] lg:text-[length:min(1.39vw,20px)] leading-7 lg:leading-[min(1.94vw,28px)] text-[#2E5A66]">{s.title}</h3>
                    <p className="font-sans text-[13px] sm:text-[14px] lg:text-[length:min(0.97vw,14px)] font-semibold leading-[26px] lg:leading-[min(1.8vw,26px)] text-[#5F6B6F]">{s.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
