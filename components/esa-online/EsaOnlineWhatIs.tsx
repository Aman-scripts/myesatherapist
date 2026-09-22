import React from "react";
import Image from "next/image";
import { CtaButton, WaveImage } from "./EsaOnlineShared";

/*
 * From `lg` up, type and spacing scale with the viewport (vw) and cap at their 1440px design
 * values, so the section is a scaled copy of the 1440px design. That keeps the text column and
 * the artwork (fixed proportional width) from overlapping at any width.
 */
const H2 =
  "font-heading text-3xl sm:text-4xl lg:text-[length:min(3.06vw,44px)] font-bold text-[#2E5A66] leading-[1.2] lg:leading-[min(3.75vw,54px)] tracking-[-0.00015em] lg:max-w-[min(28.4vw,409px)]";
const P =
  "font-sans text-base sm:text-[18px] lg:text-[length:min(1.25vw,18px)] text-[#5F6B6F] font-semibold leading-[1.67]";

export function EsaOnlineWhatIs() {
  return (
    <section className="w-full bg-white relative overflow-hidden">
      {/* Illustration (curve built into the artwork), flush right */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[min(50.7%,730px)]">
        {/* The artwork's curved bottom edge ends ~14% above its last row, so it is scaled up
            and the empty strip overflows the section (clipped) — no gap under the image. */}
        <div className="absolute inset-x-0 top-0 h-[116.6%]">
          <Image
            quality={90}
            src="/esa-online/esa-letter-online_whatisanesaletter.webp"
            alt="Woman hugging her emotional support dog"
            fill
            className="object-cover object-left-top"
            sizes="(min-width: 1440px) 730px, 51vw"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-8 lg:pl-[min(5.56vw,80px)] lg:pr-0 pb-14 sm:pb-20 lg:py-[min(4.86vw,70px)]">
        <WaveImage
          alt="Woman hugging her emotional support dog"
          badge={false}
          mobile={{ src: "/esa-online/esa-online-whatisesa_mobile.webp", w: 390, h: 425, crop: { x: 3, y: 3, w: 384, h: 415 } }}
          tablet={{ src: "/esa-online/esa-online-whatisesa_tablet.webp", w: 834, h: 521, crop: { x: 14, y: 14, w: 806, h: 502 } }}
        />
        <div className="w-full max-w-[737px] lg:max-w-[min(42.4vw,610px)] text-center lg:text-left flex flex-col gap-10 lg:gap-[min(3.75vw,54px)]">
          <div className="flex flex-col gap-4">
            <h2 className={H2}>What is an ESA Letter?</h2>
            <p className={P}>
              An Emotional Support Animal (ESA) letter is a written recommendation from a licensed mental health professional stating that an emotional support animal may help support a person’s mental or emotional well-being. The recommendation is based on an individual evaluation and is provided when clinically appropriate.
              <br />
              An ESA letter may be used to support a request for reasonable accommodation in housing under applicable fair housing laws. When a housing accommodation is approved, a tenant may be able to live with an emotional support animal without being subject to certain pet-related restrictions or fees that normally apply to pets. Specific rights and requirements can vary depending on the housing situation and applicable laws.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className={H2}>What Does an ESA Letter Do?</h2>
            <p className={P}>
              An ESA letter provides documentation supporting the need for an emotional support animal as part of a person’s mental or emotional health care. It is not an ESA registration, certification, or ID card, and simply owning an animal does not make it an emotional support animal.
              <br />
              For housing, an ESA letter may be used when requesting a reasonable accommodation from a housing provider. The accommodation process may require additional information depending on the circumstances.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="/blog/esa-guide/emotional-support-animal/"
              className="inline-flex h-12 items-center rounded-[30px] bg-[#FAF7F2] px-8 font-sans font-semibold text-base text-[#2E5A66] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] hover:bg-[#f1ece2] transition-colors"
            >
              Learn about ESA’s
            </a>
            <CtaButton href="/pricing/">Get Started</CtaButton>
          </div>
        </div>

      </div>
    </section>
  );
}
