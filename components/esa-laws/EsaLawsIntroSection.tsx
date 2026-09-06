import React from "react";

const PARAGRAPHS = [
  "An emotional support animal (ESA) is defined by federal law as an assistance animal whose presence provides emotional support for a person's disability. It is different from a service animal, which is typically a dog or miniature horse trained to perform specific tasks related to a person's disability. An ESA is also not considered a pet. It does not require any special training, as its presence alone provides therapeutic emotional support.",
  "People with disabilities have the legal right to request an ESA in their housing as a reasonable accommodation under federal law, even in properties with pet restrictions. However, housing providers may ask for reliable documentation to confirm eligibility. This usually includes an ESA letter written by a licensed medical professional after a proper clinical evaluation. In such cases, housing providers in the US cannot deny ESAs due to a no-pet policy. They are also not allowed to charge pet fees or deposits for them, and ESAs are exempt from breed, size, and species restrictions in housing.",
  "In addition to federal law, ESA regulations can vary depending on the state and specific situation. These laws may also change over time at both the federal and state levels. There is no federal requirement to buy a certification, ID card, or “registration” for an ESA, so it’s important to be cautious of websites that claim to offer these services. In many states, a professional clinical evaluation is required, and some may also require an ongoing relationship between the healthcare provider and the individual requesting an ESA.",
];

export function EsaLawsIntroSection() {
  return (
    <section className="w-full bg-[#FAF7F2] pt-14 sm:pt-20 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1178px] mx-auto flex flex-col items-center gap-4 sm:gap-5">
        <h2 className="font-heading font-bold text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.2] lg:leading-[54px] tracking-[-0.00015em] text-[#2E5A66] text-center">
          Understanding ESA Laws
        </h2>
        <div className="flex flex-col gap-5 sm:gap-6 max-w-[1156px]">
          {PARAGRAPHS.map((p, idx) => (
            <p
              key={idx}
              className="font-sans font-semibold text-[15px] sm:text-[17px] lg:text-[18px] leading-[26px] sm:leading-[28px] lg:leading-[30px] text-center text-[#5F6B6F]"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
