import React from "react";

const PARAGRAPHS = [
  "State laws can add requirements for emotional support animals, while housing providers must also follow applicable federal fair housing protections. Under federal law, ESAs do not have the public-access rights of service animals, so businesses generally do not have to admit an ESA.",
  "In housing, a person may request an assistance animal as a reasonable accommodation. If the disability or need for the animal is not obvious, a housing provider may request reliable information supporting the request. Federal law does not require a specific ESA letter format or a particular method for submitting an accommodation request.",
  "State requirements vary. Some states, like California require a minimum 30 days provider-client relationship, specific licensing requirements, or particular evaluation standards before documentation can be issued. Some states, like Florida, also impose penalties for falsely representing a service animal, although these laws generally concern service-animal misrepresentation rather than ESA requests.",
  "Because requirements can vary and change, renters should check the current federal, state, and local rules that apply to their housing situation.",
];

export function EsaLawsIntroSection() {
  return (
    <section className="w-full bg-background pt-14 sm:pt-20 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1178px] mx-auto flex flex-col items-center gap-4 sm:gap-5">
        <h2 className="heading-h2 text-primary text-center">
          Understanding ESA Laws
        </h2>
        <div className="flex flex-col gap-5 sm:gap-6 max-w-[1156px]">
          {PARAGRAPHS.map((p, idx) => (
            <p
              key={idx}
              className="body-large text-center text-body-text"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
