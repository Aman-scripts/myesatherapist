import React from "react";
import Image from "next/image";
import { CtaButton, GoldCallout, WaveImage } from "./EsaOnlineShared";

const CONDITIONS = [
  { label: "Anxiety", icon: "/ESA ICons/Icon.svg" },
  { label: "Depression", icon: "/ESA ICons/Icon-3.svg" },
  { label: "PTSD", icon: "/ESA ICons/Icon-2.svg" },
  { label: "ADHD", icon: "/ESA ICons/Icon-5.svg" },
  { label: "Panic Disorder", icon: "/ESA ICons/Icon-1.svg" },
  { label: "Bipolar Disorder", icon: "/ESA ICons/Icon-4.svg" },
  { label: "OCD", icon: "/ESA ICons/Icon-27.svg" },
  { label: "Social Anxiety", icon: "/ESA ICons/Icon-10.svg" },
];

const FACTORS = [
  { text: "Your current emotional or mental health concerns", icon: "/ESA ICons/Icon-4.svg" },
  { text: "Whether an animal can reasonably fit into your daily routines", icon: "/ESA ICons/Icon-16.svg" },
  { text: "Your ability to care for an animal responsibly", icon: "/ESA ICons/Icon-7.svg" },
  { text: "How an ESA may support your emotional stability", icon: "/ESA ICons/Icon-12.svg" },
];

/*
 * From `lg` up, type and spacing scale with the viewport (vw) and cap at their 1440px design
 * values, so the section is a scaled copy of the 1440px design and the text never runs into
 * the artwork (which has a fixed proportional width).
 */
export function EsaOnlineEligible() {
  return (
    <section className="w-full bg-white relative overflow-hidden">
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[min(47.7%,687px)]">
        <div className="absolute left-[2%] top-[50%] z-20 w-[min(5vw,73px)] h-[min(5vw,73px)] -translate-y-1/2">
          <Image
            quality={90}
            src="/about-us/about_us-legimateesasection-hearticon.webp"
            alt=""
            width={73}
            height={73}
            className="object-contain filter drop-shadow-[0px_1px_4px_rgba(0,0,0,0.25)]"
          />
        </div>
        <Image
            quality={90}
          src="/esa-online/esa-letter-online_whatmaybeeligible.webp"
          alt="Woman reading her ESA letter with her pets beside her"
          fill
          className="object-cover object-left-bottom"
          sizes="(min-width: 1440px) 687px, 48vw"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-8 lg:pl-[min(5.56vw,80px)] lg:pr-0 pb-14 sm:pb-20 lg:py-[min(4.5vw,65px)]">
        <WaveImage
          alt="Woman reading her ESA letter with her pets beside her"
          mobile={{ src: "/esa-online/esa-online-whomaybeeligible_mobile.webp", w: 390, h: 512, crop: { x: 0, y: 99, w: 390, h: 412 } }}
          tablet={{ src: "/esa-online/esa-online-whomaybeeligible_tablet.webp", w: 834, h: 1050, crop: { x: 0, y: 209, w: 834, h: 840 } }}
        />
        <div className="w-full max-w-[628px] lg:max-w-[min(43.6vw,628px)] text-center lg:text-left flex flex-col gap-8 lg:gap-[min(2.2vw,32px)]">
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[length:min(3.06vw,44px)] font-bold text-primary leading-[1.2] lg:leading-[min(3.75vw,54px)] tracking-[-0.00015em] lg:max-w-[min(32.6vw,470px)]">
              Who May Be Eligible for an ESA Letter?
            </h2>
            <p className="font-sans text-base sm:text-[18px] lg:text-[length:min(1.25vw,18px)] text-body-text font-semibold leading-[1.67] lg:max-w-[min(39.4vw,568px)]">
              Your eligibility for an ESA letter is determined solely by a licensed mental health professional. The clinician evaluates whether an emotional support animal may be appropriate based on your individual needs. There is no automatic approval.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-2xl sm:text-[28px] lg:text-[length:min(1.94vw,28px)] font-bold text-body-text leading-9 lg:leading-[min(2.5vw,36px)]">
              Conditions Commonly Evaluated by Clinicians
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 lg:gap-x-[min(1.1vw,16px)] lg:gap-y-[min(0.83vw,12px)]">
              {CONDITIONS.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-4 lg:gap-[min(1.1vw,16px)] rounded-[14px] bg-white px-4 py-3 lg:px-[min(1.1vw,16px)] lg:py-[min(0.83vw,12px)] shadow-[0px_1px_5px_rgba(0,0,0,0.12)] border border-primary/5"
                >
                  <Image
                    src={c.icon}
                    alt=""
                    width={28}
                    height={28}
                    unoptimized
                    className="h-7 w-7 object-contain"
                  />
                  <span className="font-sans text-[16px] sm:text-[18px] lg:text-[length:min(1.25vw,18px)] font-semibold text-primary leading-[30px] lg:leading-[min(2.1vw,30px)]">
                    {c.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="font-sans text-base sm:text-[18px] lg:text-[length:min(1.25vw,18px)] text-body-text font-semibold leading-[1.67]">
              Licensed clinicians will refer to established clinical guidelines, including the Diagnostic and Statistical Manual of Mental Disorders (DSM-5), as a standard part of every individualized evaluation.
            </p>
          </div>

          <GoldCallout>
            This information has been reviewed for accuracy by a licensed mental health professional. ESA letters are issued only after a clinical evaluation and are based on criteria outlined in the DSM-5 and applicable federal housing guidelines.
          </GoldCallout>

          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-2xl sm:text-[28px] lg:text-[length:min(1.94vw,28px)] font-bold text-primary leading-9 lg:leading-[min(2.5vw,36px)]">
              Factors Considered May Include:
            </h3>
            <div className="flex flex-col gap-3 lg:gap-[min(0.83vw,12px)]">
              {FACTORS.map((factor) => (
                <div
                  key={factor.text}
                  className="flex items-center gap-4 lg:gap-[min(1.1vw,16px)] rounded-[14px] bg-white px-4 py-3 lg:px-[min(1.1vw,16px)] lg:py-[min(0.83vw,12px)] shadow-[0px_1px_5px_rgba(0,0,0,0.12)] border border-primary/5 text-left"
                >
                  <Image
                    src={factor.icon}
                    alt=""
                    width={28}
                    height={28}
                    unoptimized
                    className="h-7 w-7 object-contain shrink-0"
                  />
                  <span className="font-sans text-[16px] sm:text-[18px] lg:text-[length:min(1.25vw,18px)] font-semibold text-primary leading-[28px] lg:leading-[min(2.1vw,30px)]">
                    {factor.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start sm:gap-4">
            <CtaButton href="/pricing/" variant="accent" className="w-auto shrink-0">
              Talk With a Licensed Therapist
            </CtaButton>
            <p className="max-w-[240px] text-left font-sans text-base font-semibold leading-[26px] text-body-text">
              And receive a professional mental health evaluation.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
