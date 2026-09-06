import React from "react";
import { Home, X } from "lucide-react";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

const DENIAL_REASONS = [
  "Put an unfair financial and administrative burden on the landlord (e.g., a landlord can’t insure their rental properties because of the ESA)",
  "Fundamentally change the nature of the housing",
  "Directly threaten the health and safety of others, even with reasonable accommodations put in place to reduce the threat",
  "Possibly cause major physical damage to others’ property, even with reasonable accommodations put in place to reduce the damage",
];

function CardIcon() {
  return (
    <div className="w-[57px] h-[57px] rounded-2xl flex items-center justify-center shrink-0" style={{ background: TEAL_GRADIENT }}>
      <Home className="w-6 h-6 text-white" strokeWidth={2} />
    </div>
  );
}

function LawCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex items-stretch rounded-[15px] overflow-hidden bg-[rgba(232,185,44,0.2)]">
      <div className="w-[17px] shrink-0 bg-[#E8B92C] rounded-l-[10px]" />
      <div className="flex-1 flex flex-col items-start gap-4 sm:gap-6 py-6 sm:py-8 pl-5 sm:pl-8 pr-5 sm:pr-[67px]">
        <CardIcon />
        <div className="flex flex-col gap-2.5 sm:gap-3 w-full">
          <h3 className="font-heading font-bold text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] text-[#2E5A66]">
            {title}
          </h3>
          <div className="font-sans font-semibold text-[15px] sm:text-[17px] lg:text-[18px] leading-[26px] sm:leading-[28px] lg:leading-[30px] text-[#5F6B6F] flex flex-col gap-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function EsaLawsFederalSection() {
  return (
    <section className="w-full bg-white py-14 sm:py-20 px-4 sm:px-8 lg:px-[132px]">
      <div className="max-w-[1178px] mx-auto flex flex-col items-center gap-10 sm:gap-14">
        <div className="flex flex-col items-center gap-3 sm:gap-4 max-w-[764px] text-center">
          <h2 className="font-heading font-bold text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.2] lg:leading-[54px] tracking-[-0.00015em] text-[#2E5A66]">
            Federal Laws Governing Emotional Support Animals
          </h2>
          <p className="font-sans font-semibold text-[15px] sm:text-[17px] lg:text-[18px] leading-[26px] sm:leading-[28px] lg:leading-[30px] text-[#5F6B6F] max-w-[1052px]">
            Two primary federal laws have historically governed ESA rights in the United States. Understanding their scope is essential for both ESA owners and housing providers.
          </p>
        </div>

        <div className="w-full flex flex-col gap-12 sm:gap-[72px]">
          <LawCard title="Fair Housing Act (FHA)">
            <p>
              The federal Fair Housing Act (FHA) allows individuals with disabilities to request an ESA as a reasonable accommodation, even in housing that has pet restrictions. However, the request must include reliable, disability-related documentation. This typically means providing an ESA letter issued after a clinical evaluation by a licensed mental health professional.
            </p>
            <p>
              Under the FHA, housing providers cannot deny ESAs, even if they have a no-pet policy in place. They are also not allowed to charge pet deposits or fees for ESAs. These rules apply to college housing and dormitories at public universities as well. In addition, breed, size, and species restrictions do not apply to ESAs in housing. However, ESAs do not have public access rights. Unlike service animals, they are not allowed to enter all public or business spaces.
            </p>
            <p>
              Federal ESA law does not recognize letters or certificates purchased online after a brief or superficial interview as valid proof. In most cases, a proper clinical evaluation by a licensed healthcare provider is required to determine eligibility for an ESA.
            </p>
          </LawCard>

          <LawCard title="Air Carrier Access Act (ACAA)">
            <p>
              The federal Air Carrier Access Act (ACAA) previously required airlines to allow ESAs to travel with passengers who have disabilities. However, this rule changed in 2021. ESAs are no longer protected under the ACAA and are now treated as pets on flights. Only service dogs are required to be allowed on flights.
            </p>
          </LawCard>

          <LawCard title="What Federal Law Covers vs Does Not Cover">
            <p>
              Federal ESA law protects the rights of individuals with disabilities to keep their ESAs in housing as a reasonable accommodation. This includes college housing and dorms. They are not required to pay pet fees or deposits. ESAs also do not need special training like service dogs. There is no legal requirement to register, license, or certify an ESA in an online database, even though many scam websites claim otherwise.
            </p>
            <p>
              Federal law also exempts ESAs from state or local breed, size, or species restrictions that may ban certain pets, such as pit bulls. In addition, under the Americans with Disabilities Act (ADA), individuals may request to bring their ESA into the workplace as a reasonable accommodation.
            </p>
            <p>
              However, ESAs are not considered service animals, so they do not have the same public access rights. They are not allowed to enter most public places by default. States, cities, and businesses can decide whether to allow ESAs in spaces like schools, restaurants, and hotels. ESAs are also no longer allowed to travel freely on airlines, so individuals must check and choose airlines that accept animals. If a person has multiple ESAs, they must submit a separate request for each one.
            </p>
          </LawCard>

          <LawCard title="ESA Rights vs Landlord Rights">
            <p>
              According to federal law, the only times housing providers can refuse a reasonable accommodation request for an ESA are when the ESA would:
            </p>
            <div className="flex flex-col gap-4">
              {DENIAL_REASONS.map((reason, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-[#E42529] flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-[#FAF7F2]" strokeWidth={3} />
                  </span>
                  <span>{reason}</span>
                </div>
              ))}
            </div>
            <p>
              Note: Under federal law, another person’s allergy or fear of an animal is not considered a disability that requires accommodation. It also cannot be used as a valid reason to deny someone with a service or assistance animal.
            </p>
            <p>
              Unless a landlord can clearly prove a valid exception, they are required to allow ESAs in housing as a reasonable accommodation. This applies once the request has been made and proper supporting documents are provided, such as an ESA letter issued after a clinical evaluation. Landlords are not responsible for any damage caused by an ESA. However, the individual may be held responsible if the damage goes beyond normal wear and tear, especially in cases where other residents would also be charged for similar damage. If someone is illegally denied a reasonable accommodation for their ESA or faces any form of housing discrimination, they have the right to file a complaint. This can be done with the federal Office of Fair Housing and Equal Opportunity or through their state government.
            </p>
          </LawCard>
        </div>
      </div>
    </section>
  );
}
