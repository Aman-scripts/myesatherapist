import React from "react";
import Image from "next/image";
import { GoldCallout, WaveImage } from "./EsaOnlineShared";

const P = "/esa-online/esa-letter-online_whatmaybeeligible-";

const CONDITIONS = [
  { label: "Anxiety", icon: `${P}anxiety-icon.svg` },
  { label: "Depression", icon: `${P}depression-icon.svg` },
  { label: "PTSD", icon: `${P}ptsd-icon.svg` },
  { label: "ADHD", icon: `${P}adhd-icon.svg` },
  { label: "Panic Disorder", icon: `${P}panicdisorder-icon.svg` },
  { label: "Bipolar Disorder", icon: `${P}bipolar-icon.svg` },
  { label: "OCD", icon: `${P}ocd-icon.svg` },
  { label: "Social Anxiety", icon: `${P}socialanxiety-icon.svg` },
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
            src="/about-us/about_us-legimateesasection-hearticon.svg"
            alt=""
            width={73}
            height={73}
            className="object-contain filter drop-shadow-[0px_1px_4px_rgba(0,0,0,0.25)]"
          />
        </div>
        <Image
          src="/esa-online/esa-letter-online_whatmaybeeligible.png"
          alt="Woman reading her ESA letter with her pets beside her"
          fill
          className="object-cover object-left-bottom"
          sizes="(min-width: 1440px) 687px, 48vw"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-8 lg:pl-[min(5.56vw,80px)] lg:pr-0 pb-14 sm:pb-20 lg:py-[min(4.5vw,65px)]">
        <WaveImage
          alt="Woman reading her ESA letter with her pets beside her"
          mobile={{ src: "/esa-online/esa-online-whomaybeeligible_mobile.png", w: 390, h: 512, crop: { x: 0, y: 99, w: 390, h: 412 } }}
          tablet={{ src: "/esa-online/esa-online-whomaybeeligible_tablet.png", w: 834, h: 1050, crop: { x: 0, y: 209, w: 834, h: 840 } }}
        />
        <div className="w-full max-w-[628px] lg:max-w-[min(43.6vw,628px)] text-center lg:text-left flex flex-col gap-8 lg:gap-[min(2.2vw,32px)]">
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[length:min(3.06vw,44px)] font-bold text-[#2E5A66] leading-[1.2] lg:leading-[min(3.75vw,54px)] tracking-[-0.00015em] lg:max-w-[min(32.6vw,470px)]">
              Who May Be Eligible for an ESA Letter?
            </h2>
            <p className="font-sans text-base sm:text-[18px] lg:text-[length:min(1.25vw,18px)] text-[#5F6B6F] font-semibold leading-[1.67] lg:max-w-[min(39.4vw,568px)]">
              Your eligibility for an ESA letter is determined solely by a licensed mental health professional. The clinician evaluates whether an emotional support animal may be appropriate based on your individual needs. There is no automatic approval.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-2xl sm:text-[28px] lg:text-[length:min(1.94vw,28px)] font-bold text-[#5F6B6F] leading-9 lg:leading-[min(2.5vw,36px)]">
              Qualifying Conditions :
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 lg:gap-x-[min(1.1vw,16px)] lg:gap-y-[min(0.83vw,12px)]">
              {CONDITIONS.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-4 lg:gap-[min(1.1vw,16px)] rounded-[14px] bg-white px-4 py-3 lg:px-[min(1.1vw,16px)] lg:py-[min(0.83vw,12px)] shadow-[0px_1px_5px_rgba(0,0,0,0.12)] border border-[#2E5A66]/5"
                >
                  <Image
                    src={c.icon}
                    alt=""
                    width={30}
                    height={30}
                    className="h-[30px] w-[30px] lg:h-[min(2.1vw,30px)] lg:w-[min(2.1vw,30px)] object-contain"
                  />
                  <span className="font-sans text-[16px] sm:text-[18px] lg:text-[length:min(1.25vw,18px)] font-semibold text-[#2E5A66] leading-[30px] lg:leading-[min(2.1vw,30px)]">
                    {c.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <GoldCallout>
            This information has been reviewed for accuracy by a licensed mental health professional. ESA letters are issued only after a clinical evaluation and are based on criteria outlined in the DSM-5 and applicable federal housing guidelines.
          </GoldCallout>
        </div>

      </div>
    </section>
  );
}
