import React from "react";
import Image from "next/image";

const DENIAL_REASONS = [
  "Situations creating financial burdens: Landlords can deny an ESA housing request in situations where the animal would possibly create an undue financial or administrative burden that would fundamentally alter the nature of the housing provider’s operations.",
  "ESAs posing a direct threat to health or safety: A landlord may deny an ESA if the specific animal poses a documented direct threat to others that cannot be reduced through reasonable measures.",
  "Risk involving physical damage: Landlords can also deny an ESA housing request if there is solid evidence stating that the animal would damage the property in the future and it cannot be prevented.",
];

function CardIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-[57px] h-[57px] rounded-full bg-white flex items-center justify-center shrink-0 shadow-[0px_2px_4px_rgba(0,0,0,0.08)]">
      <Image src={src} alt={alt} width={32} height={32} unoptimized loading="lazy" className="w-8 h-8 object-contain" />
    </div>
  );
}

function LawCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex items-stretch rounded-[15px] overflow-hidden bg-[rgba(232,185,44,0.2)] [content-visibility:auto] [contain-intrinsic-size:1px_350px]">
      <div className="w-[17px] shrink-0 bg-accent rounded-l-[10px]" />
      <div className="flex-1 flex flex-col items-start gap-4 sm:gap-6 py-6 sm:py-8 pl-5 sm:pl-8 pr-5 sm:pr-[67px]">
        <CardIcon src={icon} alt={title} />
        <div className="flex flex-col gap-2.5 sm:gap-3 w-full">
          <h3 className="heading-h4 text-primary">
            {title}
          </h3>
          <div className="body-large text-body-text flex flex-col gap-4">
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
          <h2 className="heading-h2 text-primary">
            Federal Laws Governing Emotional Support Animals
          </h2>
          <p className="body-large text-body-text max-w-[1052px]">
            Emotional support animals are not governed by one standalone federal law. Different federal laws apply depending on the situation, with the Fair Housing Act (FHA) being the key framework for housing.
          </p>
        </div>

        <div className="w-full flex flex-col gap-12 sm:gap-[72px]">
          <LawCard title="Fair Housing Act (FHA), 42 U.S.C. § 3604" icon="/ESA ICons/Icon-24.svg">
            <p>
              The Fair Housing Act (FHA), 42 U.S.C. § 3604, is the primary federal law governing emotional support animals in housing. It prohibits disability discrimination and requires reasonable accommodations when necessary for a person with a disability to use and enjoy their home. Its implementing regulation, 24 C.F.R. § 100.204, remains in effect and continues to address reasonable accommodation requests.
            </p>
            <p>
              The federal ESA landscape has changed in recent years. HUD withdrew its 2013 and 2020 assistance-animal guidance effective September 17, 2025. On May 22, 2026, HUD&apos;s Office of Fair Housing and Equal Opportunity (FHEO) issued new internal enforcement guidance for animal-accommodation complaints. The memorandum directs FHEO to apply a trained-animal standard when determining reasonable cause and recommending charges in certain cases.
            </p>
            <p>
              Importantly, the 2026 memorandum did not amend or repeal the FHA. The FHA remains federal law, and 24 C.F.R. § 100.204 remains in effect. However, HUD&apos;s current enforcement approach differs from its earlier assistance-animal guidance, so older ESA housing information may not fully reflect the agency&apos;s current position.
            </p>
          </LawCard>

          <LawCard title="Americans with Disabilities Act (ADA)" icon="/ESA ICons/Icon-33.svg">
            <p>
              The Americans with Disabilities Act (ADA) doesn&apos;t give emotional support animals the same public-access rights that qualifying service animals get. Under the ADA, a service animal is usually a dog that&apos;s been individually trained to do work or perform tasks tied directly to a person&apos;s disability. Offering emotional support, comfort, or companionship on its own doesn&apos;t count as a service-animal task.
            </p>
            <p>
              So an ESA doesn&apos;t automatically get to go into restaurants, stores, workplaces, or other public places just because it helps with someone&apos;s emotional needs. The ADA&apos;s service-animal rules and the FHA&apos;s housing rules cover different situations. That means an ESA letter meant for housing doesn&apos;t turn the animal into a service animal under the ADA.
            </p>
          </LawCard>

          <LawCard title="Air Carrier Access Act (ACAA), 49 U.S.C. § 41705" icon="/ESA ICons/Icon-17.svg">
            <p>
              The Air Carrier Access Act (49 U.S.C. § 41705) bans disability discrimination in air travel, but under its current regulations, emotional support animals no longer count as service animals for flying. Under 14 C.F.R. Part 382, airlines have to recognize service dogs that have been individually trained to do work or perform tasks related to a person&apos;s disability.
            </p>
            <p>
              So having an ESA letter doesn&apos;t give your animal a federal right to fly in the cabin as a service animal. Before you travel, check your airline&apos;s current policy, because the rules for pets and other animals can be different from the federal rules for service animals.
            </p>
          </LawCard>

          <LawCard title="What Federal Laws Mean in 2026" icon="/ESA ICons/Icon-18.svg">
            <p>
              There&apos;s no single federal law you can point to and call the &quot;ESA law.&quot; What exists instead is several federal laws, each covering a different situation involving animals. The FHA mainly applies to housing, the ADA covers service-animal access in public places, the ACAA applies to air travel, and Section 504 can apply to certain federally funded programs.
            </p>
            <p>
              If you own an ESA, this matters because rights in one setting don&apos;t automatically carry over to another. On May 22, 2026, HUD issued internal enforcement guidance that changes how FHEO handles certain animal-accommodation complaints, including the use of a trained-animal standard during enforcement. That guidance didn&apos;t repeal or amend the FHA or 24 C.F.R. § 100.204, so the underlying federal housing laws are still in place.
            </p>
          </LawCard>

          <LawCard title="What Federal Law Covers vs. Does Not Cover" icon="/ESA ICons/Glyph-3.svg">
            <p>
              The Fair Housing Act (FHA) protects people with disabilities from housing discrimination and may require reasonable accommodations involving assistance animals. This can include qualifying requests for emotional support animals in housing, including some college and university housing. However, HUD changed its enforcement guidance on May 22, 2026, withdrawing its prior ESA guidance. The FHA itself remains in effect, but HUD’s current enforcement approach places greater emphasis on animals individually trained to perform disability-related work or tasks.
            </p>
            <p>
              Federal law does not require an ESA to be registered, licensed, certified, or listed in an online database. An ESA also does not have the same public access rights as a service animal under the Americans with Disabilities Act (ADA). Businesses, restaurants, schools, and other public places generally do not have to admit an ESA unless another law or policy provides access. The ADA also does not automatically give employees a right to bring an ESA to work, although an animal may be requested as a disability-related workplace accommodation.
            </p>
            <p>
              For air travel, the Air Carrier Access Act (ACAA) no longer requires airlines to recognize emotional support animals as service animals. Airlines may have their own policies for transporting ESAs, so travelers should check with the carrier before flying.
            </p>
          </LawCard>

          <LawCard title="ESA Rights vs. Landlord Rights" icon="/ESA ICons/Icon-18.svg">
            <p>
              Under the Fair Housing Act (FHA), housing providers must consider reasonable accommodation requests related to disabilities. But there are some situations where a landlord has the complete right to deny an ESA for a housing request. These include:
            </p>
            <div className="flex flex-col gap-4">
              {DENIAL_REASONS.map((reason) => (
                <div key={reason} className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
            <p>
              However, the federal enforcement landscape for emotional support animals changed in 2026. On May 22, 2026, HUD’s Office of Fair Housing and Equal Opportunity issued an internal enforcement memorandum permanently rescinding its previous assistance-animal guidance. Under the new enforcement approach, HUD says it will generally find reasonable cause in animal-accommodation complaints only when the animal has been individually trained to perform work or tasks directly related to a person’s disability. Requests involving untrained ESAs are no longer treated as presumptively reasonable by HUD.
            </p>
            <p>
              Importantly, the May 22 memorandum is an internal HUD enforcement policy. It does not amend the FHA or automatically eliminate protections that may exist under state or local fair housing laws. Some states continue to recognize broader protections for assistance animals, including untrained ESAs.
            </p>
            <p>
              If a tenant believes they have experienced unlawful housing discrimination, they can file a complaint with HUD’s Office of Fair Housing and Equal Opportunity (FHEO). State or local fair housing agencies may also provide additional remedies.
            </p>
          </LawCard>
        </div>
      </div>
    </section>
  );
}
