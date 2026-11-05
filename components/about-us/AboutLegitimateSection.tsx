
import React from "react";
import Image from "next/image";
import { DesktopScaleWrapper } from "@/components/common/DesktopScaleWrapper";

const items = [
  {
    number: "01",
    title: "Ethical and Professional Standards",
    description:
      "We prioritize ethical ESA evaluations and adhere to industry best practices, ensuring each assessment is fair, professional, and compliant with federal and state guidelines.",
  },
  {
    number: "02",
    title: "Provider-Led Clinical Assessments",
    description:
      "All evaluations are conducted independently by licensed mental health professionals, with eligibility determined solely through professional clinical review.",
  },
  {
    number: "03",
    title: "Nationwide Coverage and Accessibility",
    description:
      "Our platform offers ESA evaluations in all 50 states, providing accessible telehealth services while ensuring evaluations meet local licensing requirements.",
  },
];

export function AboutLegitimateSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="lg:hidden w-full">
        <div className="relative w-full">
          <div className="hidden sm:block relative w-full aspect-[834/1050]">
            <Image
              quality={90}
              src="/about-us/about-us-legimatesection-tablet.webp"
              alt="Legitimate ESA Evaluations"
              fill
              className="object-cover object-top"
              sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
            />
          </div>

          <div className="block sm:hidden relative w-full aspect-[390/513]">
            <Image
              quality={90}
              src="/about-us/about-us-legimatesection-mobile.webp"
              alt="Legitimate ESA Evaluations"
              fill
              className="object-cover object-top"
              sizes="(max-width: 639px) 100vw, 1px"
            />
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-[0px_4px_16px_rgba(0,0,0,0.15)] p-3 sm:p-3.5 flex items-center justify-center z-20 border border-[#EAE5DC]">
            <Image quality={90}
              src="/about-us/about-us-legimateesasection-hearticon.webp"
              alt="Heart and Paw Icon"
              width={42}
          sizes="42px"
              height={42}
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        <div className="w-full px-5 sm:px-8 pt-10 sm:pt-14 pb-12 sm:pb-16 space-y-6 sm:space-y-8 max-w-[620px] mx-auto">
          <div className="space-y-3 sm:space-y-4 text-center">
            <h2 className="heading-h2 text-primary">
              Legitimate ESA Letter Evaluations You Can Trust
            </h2>
            <p className="body-large text-body-text">
              Our mission is to make the ESA evaluation process clear, ethical, and accessible. We connect individuals with licensed mental health professionals through a secure ESA evaluation process, with all outcomes determined solely through an independent clinical assessment by the provider.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {items.map((item) => (
              <div
                key={item.number}
                className="w-full bg-white rounded-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.12)] border border-[#EAE5DC]/60 p-3.5 sm:p-4 flex items-center gap-3.5 sm:gap-4 text-left transition-all duration-200 hover:shadow-md"
              >
                <div className="w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] rounded-full bg-[#AEBBBE]/20 flex items-center justify-center shrink-0">
                  <span className="heading-h3 leading-none text-body-text">
                    {item.number}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="heading-h3 text-color-gradient">
                    {item.title}
                  </h3>
                  <p className="body-text text-body-text mt-0.5 sm:mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DesktopScaleWrapper
        designWidth={1440}
        designHeight={938}
        className="hidden lg:block relative"
      >
        <div className="relative w-full h-[938px] flex items-center bg-white overflow-hidden">
          <div className="absolute left-[84px] top-[58px] w-[651px] flex flex-col items-start gap-10 z-10">
            <div className="w-[525px] flex flex-col items-start gap-4 text-left">
              <p className="heading-h2 text-primary">
                Legitimate ESA Letter Evaluations You Can Trust
              </p>
              <p className="body-large text-body-text">
                Our mission is to make the ESA evaluation process clear, ethical, and accessible. We connect individuals with licensed mental health professionals through a secure ESA evaluation process, with all outcomes determined solely through an independent clinical assessment by the provider.
              </p>
            </div>

            <div className="w-[651px] flex flex-col items-start gap-4">
              {items.map((item) => (
                <div
                  key={item.number}
                  className="w-[651px] min-h-[140px] bg-white rounded-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.12)] border border-[#EAE5DC]/60 px-5 py-4 flex items-center gap-4 text-left transition-all duration-200 hover:shadow-md"
                >
                  <div className="w-[59px] h-[59px] rounded-full bg-[#AEBBBE]/20 flex items-center justify-center shrink-0">
                    <span className="heading-h3 leading-none text-body-text">
                      {item.number}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="heading-h3 text-color-gradient">
                      {item.title}
                    </p>
                    <p className="body-text text-body-text mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-[737px] h-[938px] pointer-events-none z-0">
            <Image
              quality={90}
              src="/about-us/about-us-legimate-esa-section.webp"
              alt="Legitimate ESA Evaluations"
              fill
              className="object-cover object-right-top"
              sizes="737px"
            />
          </div>
        </div>
      </DesktopScaleWrapper>
    </section>
  );
}
