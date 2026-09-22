import React from "react";
import Image from "next/image";
import { CtaButton, WaveImage } from "@/components/esa-online/EsaOnlineShared";
import { SCALED_H2, SCALED_P } from "./EsaHousingShared";

export function EsaHousingCredentials() {
  return (
    <section className="w-full bg-white relative overflow-hidden lg:min-h-[min(47.4vw,682px)]">
      {/* Artwork with the curve and heart badge baked in, flush right */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[min(47.9%,690px)]">
        <Image
            quality={90}
          src="/esa-housing/esa-letter-housing_whyprofessionalcredentials.webp"
          alt="Woman with her emotional support dog at home"
          fill
          className="object-cover object-left-top"
          sizes="(min-width: 1440px) 690px, 48vw"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-8 lg:pl-[min(5.56vw,80px)] lg:pr-0 pb-14 sm:pb-20 lg:py-[min(4.5vw,65px)]">
        <WaveImage
          alt="Woman with her emotional support dog at home"
          mobile={{ src: "/esa-housing/esa-letter-housing_whycredentialsmatter-mobile.webp", w: 1254, h: 1254, crop: { x: 809, y: 61, w: 415, h: 532 } }}
          tablet={{ src: "/esa-housing/esa-letter-housing_whycredentialsmatter-tablet.webp", w: 1254, h: 1254, crop: { x: 28, y: 50, w: 742, h: 570 } }}
        />
        <div className="w-full max-w-[626px] lg:max-w-[min(43.5vw,626px)] text-center lg:text-left flex flex-col gap-8 lg:gap-[min(2.2vw,32px)]">
          <div className="flex flex-col gap-4 lg:gap-[min(1.9vw,28px)]">
            <h2 className={`${SCALED_H2} lg:max-w-[min(37.6vw,541px)]`}>Why Professional Credentials Matter?</h2>
            <p className={SCALED_P}>
              Under the Fair Housing Act, ESA protections apply only when documentation is issued by a licensed professional. Housing providers may verify licensing information, which is why letters from online registries or instant-approval sites are often rejected.
            </p>
          </div>

          <div className="flex justify-center lg:justify-start">
            <CtaButton href="/pricing/">Work with Licensed Professionals</CtaButton>
          </div>

          <div className="flex overflow-hidden text-left rounded-[20px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
            <div className="w-[10px] sm:w-[13px] shrink-0 bg-[#1D6E72]" />
            <div className="flex flex-col gap-1 px-5 py-4">
              <h3 className="font-heading font-bold text-[20px] leading-7 text-[#2E5A66]">Important</h3>
              <p className="font-sans text-[14px] font-semibold leading-[26px] text-[#5F6B6F]">
                ESA registrations, certificates, or ID cards purchased online do not replace a professional evaluation and are not considered valid documentation.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
