import React from "react";
import Image from "next/image";

interface StateLawEntry {
  slug: string;
  name: string;
  icon: string;
  bullets: string[];
}

const STATE_LAWS: StateLawEntry[] = [
  {
    slug: "alabama",
    name: "Alabama",
    icon: "/esa-laws/esalaws_albama.png",
    bullets: [
      "Federal ESA law protects the rights of individuals with disabilities to keep their ESAs in housing as a reasonable accommodation. This includes college housing and dorms. They are not required to pay pet fees or deposits. ESAs also do not need special training like service dogs. There is no legal requirement to register, license, or certify an ESA in an online database, even though many scam websites claim otherwise.",
      "Federal law also exempts ESAs from state or local breed, size, or species restrictions that may ban certain pets, such as pit bulls. In addition, under the Americans with Disabilities Act (ADA), individuals may request to bring their ESA into the workplace as a reasonable accommodation.",
      "However, ESAs are not considered service animals, so they do not have the same public access rights. They are not allowed to enter most public places by default. States, cities, and businesses can decide whether to allow ESAs in spaces like schools, restaurants, and hotels. ESAs are also no longer allowed to travel freely on airlines, so individuals must check and choose airlines that accept animals. If a person has multiple ESAs, they must submit a separate request for each one.",
    ],
  },
  {
    slug: "california",
    name: "California",
    icon: "/esa-laws/esalaws_california.png",
    bullets: [
      "In California, reliable documentation for an ESA request can include a person's own statement or proof of receiving disability benefits.",
      "ESA letters can also be provided by a third party who is familiar with the individual's clinical needs. This may include healthcare providers, non-medical service providers, or family members. The reliability of such third parties is evaluated on a case-by-case basis.",
      "If the documentation provided is not sufficient, a housing provider cannot deny the request right away. The individual must be given a chance to submit additional reliable documentation.",
      "Under California law, a licensed healthcare professional can conduct an online, individualized assessment to determine a person's need for an ESA and issue an ESA letter.",
      "Individuals may have more than one ESA.",
    ],
  },
  {
    slug: "colorado",
    name: "Colorado",
    icon: "/esa-laws/esalaws-colarado.png",
    bullets: [
      "Under Colorado law, it is illegal to knowingly misrepresent an ESA, companion, or assistance animal. This includes doing so to avoid pet fees or to keep an animal in housing that does not otherwise allow pets.",
    ],
  },
  {
    slug: "florida",
    name: "Florida",
    icon: "/esa-laws/esalaws_florida.png",
    bullets: [
      "In Florida, ESA letters must clearly identify the therapeutic emotional support provided by the specific animal. They must be issued by a Florida-licensed healthcare practitioner, a telehealth provider, or a qualified licensed professional from another state who has personal knowledge of the individual's disability.",
      "Individuals may also be asked to provide proof of their ESA's vaccination and local licensing.",
      "Providing false or fraudulent ESA letters, or falsely claiming a disability-related need for an ESA, is a second-degree misdemeanor in Florida. It may result in penalties such as a minimum of 60 days in jail and 30 hours of community service.",
    ],
  },
  {
    slug: "hawaii",
    name: "Hawai‘i",
    icon: "/esa-laws/esalaws_hawaii.png",
    bullets: [
      "Hawai‘i has a quarantine law impacting animals brought in from locales that are not rabies-free.",
    ],
  },
  {
    slug: "illinois",
    name: "Illinois",
    icon: "/esa-laws/esalaws-state-illinois.png",
    bullets: [
      "Illinois allows ESA letters from individuals who have a therapeutic relationship with the person and have completed a meaningful clinical evaluation. This can include a physician or medical professional, a mental health service provider, a non-medical service agency, or a reliable third party who is in a position to understand the individual's disability.",
      "If the initial ESA letter does not meet state requirements, a housing provider may request additional documentation. This can include proof of the individual's disability, their clinical eligibility for an ESA, or evidence of a professional therapeutic relationship with the person who issued the letter.",
    ],
  },
  {
    slug: "indiana",
    name: "Indiana",
    icon: "/esa-laws/esalaws-state-indiana.png",
    bullets: [
      "Requests for ESAs as a reasonable accommodation can be made in any way that works best for the individual. However, submitting the request in writing is generally recommended.",
      "ESA letters in Indiana should come from a medical provider who has recently seen or treated the individual with a disability.",
      "Housing providers may require ESAs in common areas to be leashed, well-behaved, and properly supervised. Certain areas within the housing may also be designated as off-limits to ESAs.",
    ],
  },
  {
    slug: "kentucky",
    name: "Kentucky",
    icon: "/esa-laws/esalaws-state-kentucky.png",
    bullets: [
      "ESA letters can be issued by Kentucky-licensed and Kentucky-resident professionals who have a therapeutic relationship with the individual. This includes licensed clinical social workers, professional counselors, advanced practice registered nurses, psychologists, and physicians.",
      "Individuals who have recently moved to Kentucky may still use ESA letters from healthcare providers licensed in their previous state, as long as they maintain an ongoing therapeutic relationship with them.",
      "ESA letters are not considered valid if they come from providers whose primary service is simply creating documentation for a fee for ESA requests.",
      "Falsely claiming a disability, providing misleading information to obtain an ESA letter, or using false documents or identification for an ESA are all considered offenses in Kentucky. Misrepresentation of an ESA can lead to penalties, including fines of up to $1,000.",
    ],
  },
  {
    slug: "louisiana",
    name: "Louisiana",
    icon: "/esa-laws/esalaws-state-louisiana.png",
    bullets: [
      "In Louisiana, a meaningful assessment of a person's eligibility for an ESA must be conducted by a healthcare professional who has had a therapeutic relationship with the individual for at least 30 days. This must include a minimum of two in-person or remote sessions before an ESA letter is issued. ESA letters or certifications provided without a proper clinical evaluation are not considered valid.",
      "Healthcare professionals issuing ESA letters must be licensed in Louisiana or hold a license in a healthcare field that qualifies them to perform disability evaluations.",
      "Violating ESA laws in Louisiana can lead to penalties. Fines may be up to $500 for a first offense, $1,000 for a second offense, and up to $2,500 for additional offenses.",
    ],
  },
  {
    slug: "maine",
    name: "Maine",
    icon: "/esa-laws/esalaws-state-maine.png",
    bullets: [
      "In Maine, individuals cannot have both a service animal and an ESA in the same housing.",
      "ESAs are defined as assistance animals that help reduce the effects of a person's disability. This must be determined by a qualified professional, such as a physician, psychologist, physician assistant, nurse practitioner, licensed social worker, or licensed professional counselor. The professional should also understand the individual's disability-related need for an ESA.",
      "Knowingly misrepresenting an animal as an ESA is considered a civil violation. This includes creating false documents or identification, and it may result in a fine of up to $1,000.",
    ],
  },
  {
    slug: "massachusetts",
    name: "Massachusetts",
    icon: "/esa-laws/esalaws-state-massachusetts.png",
    bullets: [
      "In Massachusetts, ESA letters can be provided by a healthcare professional, but this is not strictly required. Other sources may include non-medical service agencies, peer support groups, or reliable third parties who can verify the individual's need.",
      "A housing provider is not allowed to contact the author of the ESA letter, except to confirm its authenticity and signature.",
      "The state recommends that the clinician writing the ESA letter consider the individual's preference when deciding the type of animal. If the person already has an animal, it can be specifically mentioned in the letter.",
      "All dogs, including ESAs and other assistance animals, must be locally registered in Massachusetts. However, there is no official registry for ESAs. Online certifications, licenses, or ID cards obtained without a proper clinical evaluation are not considered valid documentation.",
    ],
  },
  {
    slug: "michigan",
    name: "Michigan",
    icon: "/esa-laws/esalaws-state-michigan.png",
    bullets: [
      "In Michigan, all animals, including ESAs and service animals, must follow local rules for vaccination, registration, or certification based on city or town requirements.",
      "Healthcare providers who issue ESA letters must be licensed in Michigan or another state. If licensed in another state, they must have treated the individual for at least 180 days.",
      "Providers are not allowed to charge a fee solely for determining ESA eligibility. ESA letters issued under such conditions are considered invalid.",
    ],
  },
  {
    slug: "minnesota",
    name: "Minnesota",
    icon: "/esa-laws/esalaws-state-minnesota.png",
    bullets: [
      "If a person has requested an ESA but does not yet have the animal, they are generally expected to choose one that meets their housing provider's size or breed restrictions. However, this does not apply if there is a valid disability-related reason for needing a specific size or breed.",
      "ESAs should be licensed and vaccinated as locally required. Wild or exotic animals locally prohibited on public health grounds cannot be used as ESAs.",
      "Businesses and government offices in Minnesota are not required to allow ESAs but can choose to do so.",
    ],
  },
  {
    slug: "missouri",
    name: "Missouri",
    icon: "/esa-laws/esalaws-state-missouri.png",
    bullets: [
      "In Missouri, it is a crime to knowingly misrepresent an animal as an ESA or assistance animal in housing. A first offense is treated as a Class C misdemeanor, while additional offenses may be charged as a Class B misdemeanor.",
      "Individuals may also be held civilly liable for any damages resulting from such misrepresentation.",
    ],
  },
  {
    slug: "montana",
    name: "Montana",
    icon: "/esa-laws/esalaws-state-montana.png",
    bullets: [
      "In Montana, ESA letters must include proof that the animal is locally licensed and vaccinated.",
      "Healthcare professionals issuing ESA letters must be licensed in Montana. They must also have a client-provider relationship with the individual for at least 30 days and conduct a proper clinical evaluation before writing the letter.",
      "Submitting an ESA letter does not automatically require a housing provider or business to allow the ESA beyond what is required under federal law.",
    ],
  },
  {
    slug: "nebraska",
    name: "Nebraska",
    icon: "/esa-laws/esalaws-state-nebraska.png",
    bullets: [
      "ESAs are not recognized or protected in Nebraska beyond what is required for housing by federal law. ESAs may need to be licensed and immunized to comply with local regulations.",
    ],
  },
  {
    slug: "pennsylvania",
    name: "Pennsylvania",
    icon: "/esa-laws/esalaws-state-pennsylvania.png",
    bullets: [
      "As of December 2025, the Pennsylvania Human Relations Commission is asking for public input on issues regarding ESAs, particularly their public access rights. However, under current PA law at the time of writing, ESAs do not yet have public access rights.",
      "It is a third-degree misdemeanor in Pennsylvania to misrepresent one's eligibility for an ESA in housing or to make false statements in order to obtain an ESA letter.",
      "In Pennsylvania, it is a summary offense to intentionally create or provide false documents or identification that misrepresent an animal as an ESA for housing. This can result in a fine of up to $1,000.",
    ],
  },
  {
    slug: "south-dakota",
    name: "South Dakota",
    icon: "/esa-laws/esalaws-state-south-dakota.png",
    bullets: [
      "Knowingly making a false claim for an ESA as a housing accommodation or providing false supporting documents can lead to eviction.",
      "It may also result in a damage fee of up to $1,000 payable to the housing provider.",
    ],
  },
  {
    slug: "tennessee",
    name: "Tennessee",
    icon: "/esa-laws/esalaws-state-tennessee.png",
    bullets: [
      "In Tennessee, it is an offense to knowingly make a false claim of eligibility for an ESA or to provide false documentation identifying an animal as an ESA. This is considered misrepresentation and is classified as a Class B misdemeanor.",
      "Such misrepresentation can also allow a housing provider to evict the tenant and recover damages, including legal fees.",
      "ESA letters in Tennessee must be written documentation from a qualified source. This can include a healthcare provider, a Tennessee-licensed mental health professional, or a caregiver. It may also include a reliable third party or a government entity that knows about the individual's disability.",
    ],
  },
  {
    slug: "virginia",
    name: "Virginia",
    icon: "/esa-laws/esalaws-state-virginia.png",
    bullets: [
      "In Virginia, ESA letters can be provided by individuals from whom the requester currently receives or has previously received medical or personal care.",
      "This may include a licensed mental health provider, a state-licensed disability service, or a peer support group member who does not charge fees. It can also include a caregiver, a reliable third party, or a government entity with direct knowledge of the individual's disability.",
      "Providing fraudulent supporting ESA documentation to an individual is legally prohibited and punishable in Virginia.",
    ],
  },
  {
    slug: "washington",
    name: "Washington",
    icon: "/esa-laws/esalaws-state-washington.png",
    bullets: [
      "Only Washington state licensed mental health professionals (LMHP) can issue ESA letters in Washington.",
      "Vaccination and local licensing/registering of animals are required in most jurisdictions of Washington.",
    ],
  },
  {
    slug: "west-virginia",
    name: "West Virginia",
    icon: "/esa-laws/esalaws-state-west-virginia.png",
    bullets: [
      "Animals weighing more than one hundred and fifty pounds cannot be ESAs or service animals in West Virginia.",
    ],
  },
  {
    slug: "wyoming",
    name: "Wyoming",
    icon: "/esa-laws/esalaws-state-wyoming.png",
    bullets: [
      "In Wyoming, knowingly and intentionally misrepresenting an animal as an ESA to receive housing accommodations is a misdemeanor.",
      "This can result in a fine of up to $750.",
    ],
  },
];

function StateCard({ entry }: { entry: StateLawEntry }) {
  return (
    <div className="w-full flex items-stretch rounded-[15px] overflow-hidden bg-[rgba(232,185,44,0.2)]">
      <div className="w-[17px] shrink-0 bg-[#E8B92C] rounded-l-[10px]" />
      <div className="flex-1 flex flex-col items-start gap-4 sm:gap-6 py-6 sm:py-8 pl-5 sm:pl-8 pr-5 sm:pr-[67px]">
        <div className="relative w-[57px] h-[57px] shrink-0">
          <Image src={entry.icon} alt={`${entry.name} state map`} fill unoptimized className="object-contain" sizes="57px" />
        </div>
        <div className="flex flex-col gap-2.5 sm:gap-3 w-full">
          <h3 className="font-heading font-bold text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] text-[#2E5A66]">
            {entry.name}
          </h3>
          <ul className="flex flex-col gap-2.5 sm:gap-3">
            {entry.bullets.map((bullet, idx) => (
              <li
                key={idx}
                className="relative pl-5 font-sans font-semibold text-[15px] sm:text-[17px] lg:text-[18px] leading-[26px] sm:leading-[28px] lg:leading-[30px] text-[#5F6B6F] before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#2E5A66]"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function EsaLawsStateSection() {
  return (
    <section className="w-full bg-[#FAF7F2] py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1178px] mx-auto flex flex-col items-center gap-14 sm:gap-[72px]">
        <div className="flex flex-col items-center gap-4 sm:gap-5 max-w-[1178px] text-center">
          <h2 className="font-heading font-bold text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.2] lg:leading-[54px] tracking-[-0.00015em] text-[#2E5A66]">
            ESA Laws by State
          </h2>
          <p className="font-sans font-semibold text-[15px] sm:text-[17px] lg:text-[18px] leading-[26px] sm:leading-[28px] lg:leading-[30px] text-[#5F6B6F] max-w-[1156px]">
            Some states have additional ESA-specific laws, but all states must still follow federal rules that allow ESA accommodations in housing. Under federal law, ESAs do not have public access rights, so businesses are not required to allow them inside. An ESA letter must clearly explain the individual's clinical eligibility for an ESA as a housing accommodation. Housing providers also cannot require a specific form or method for submitting an ESA request. In some states, a 30-day or longer clinical relationship between the mental health professional and the person requesting the ESA letter is required. Other states require the provider to be licensed or based in the same state as the individual. A few states have penalties for falsely claiming an animal as a service animal. These penalties can include eviction or financial liability for damages. Since ESA laws can change at both state and federal levels, it is important to stay updated on current requirements.
          </p>
        </div>

        <div className="w-full flex flex-col items-center gap-10 sm:gap-14">
          <h3 className="font-heading font-bold text-[22px] sm:text-[28px] leading-[1.3] text-[#2E5A66] text-center">
            Additional ESA laws by state include
          </h3>
          <div className="w-full grid grid-cols-1 gap-6 sm:gap-8">
            {STATE_LAWS.map((entry) => (
              <StateCard key={entry.slug} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
