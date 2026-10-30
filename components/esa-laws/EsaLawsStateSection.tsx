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
    icon: "/esa-laws/esalaws_albama.webp",
    bullets: [
      "Alabama-specific ESA law: Alabama’s Assistance and Service Animal Integrity in Housing Act, Ala. Code §§ 24-8A-1 through 24-8A-5, works alongside the federal FHA to address assistance-animal accommodations in housing. Alabama does not require ESA registration, certification, or an ID card.",
      "Penalty for misrepresentation: Under Ala. Code §§ 24-8A-4 and 24-8A-5 (Act 2018-235), intentionally misrepresenting a disability-related need for an assistance animal in housing, falsifying documentation, or providing a false document can bring a $500 civil penalty or a Class C misdemeanor for a first offense, and a Class B misdemeanor for later offenses.",
      "HUD update and Alabama impact: HUD withdrew its prior 2013 and 2020 assistance-animal guidance on May 22, 2026. This does not eliminate FHA housing protections in Alabama. Alabama housing providers must still apply the FHA’s reasonable-accommodation requirements, while the state’s assistance-animal law continues to address documentation and misrepresentation issues.",
    ],
  },
  {
    slug: "california",
    name: "California",
    icon: "/esa-laws/esalaws_california.webp",
    bullets: [
      "California-specific ESA law: California regulates ESAs under Health & Safety Code §§ 122317 through 122319.5 (AB 468, effective January 1, 2022), which works alongside the federal FHA and state housing law. California does not require ESA registration, training, or certification. For ESA dogs, a licensed health care practitioner may only provide documentation if the practitioner holds a valid license in the jurisdiction where the documentation is provided, has had a client-provider relationship with the person for at least 30 days, completes a clinical evaluation, and gives notice about the misrepresentation penalty.",
      "Penalty for misrepresentation: Knowingly and fraudulently representing oneself as the owner or trainer of a guide, signal, or service dog is a misdemeanor under Penal Code § 365.7, punishable by up to 6 months in jail, a fine of up to $1,000, or both. Separately, under § 122319, knowingly and fraudulently representing or selling an ESA dog as having service dog rights, or violating the required written notices when selling ESA dogs or ESA items such as vests and tags, carries civil penalties of $500, $1,000, and $2,500 (first, second, and third or later violation). Practitioners who violate § 122318 can also face licensing board discipline. These penalties target fraud, not a genuine ESA request.",
      "HUD update and California impact: HUD withdrew its 2013 and 2020 assistance-animal guidance (notice dated September 17, 2025) and followed up with a May 22, 2026 memo. Neither changes the FHA, and California's law expressly preserves housing rights under FEHA, the Unruh Civil Rights Act, and the Disabled Persons Act, so California housing providers must still evaluate ESA requests under those laws.",
    ],
  },
  {
    slug: "colorado",
    name: "Colorado",
    icon: "/esa-laws/esalaws-colarado.webp",
    bullets: [
      "Colorado-specific ESA law: Colorado's HB 26-1045 (signed May 28, 2026) adds definitions of \"assistance animal\" and \"emotional support animal\" to the Colorado Anti-Discrimination Act and sets housing-accommodation rules alongside the federal FHA. Licensed providers must also make a written finding on disability and need when asked for a housing accommodation (C.R.S. §§ 12-240-144, 12-245-229, 12-255-133). Colorado has no state ESA registration or certification requirement.",
      "Penalty for misrepresentation: Under C.R.S. § 18-13-107.3 (HB 16-1426), knowingly misrepresenting entitlement to an assistance animal for housing, after a prior warning, is a civil infraction with fines of $25 (first offense), $50 to $200 (second), and $100 to $500 (third or later). A provider's written finding is an affirmative defense.",
      "HUD update and Colorado impact: HUD withdrew its 2013 and 2020 assistance-animal guidance (notice dated September 17, 2025) and followed up with a May 22, 2026 memo. Neither changes the FHA itself, so Colorado housing providers must still follow its reasonable-accommodation requirements, and HB 26-1045 now backs this up in state law.",
    ],
  },
  {
    slug: "florida",
    name: "Florida",
    icon: "/esa-laws/esalaws_florida.webp",
    bullets: [
      "Florida-specific ESA law: Florida's Fla. Stat. § 760.27 (2020 law, effective July 1, 2020) works alongside the federal FHA. It lets a housing provider request reliable information supporting the need for the specific ESA when the need isn't readily apparent. Providers (including telehealth providers) count as reliable only if they have personal knowledge of the person's disability and act within their scope of practice. Florida does not require ESA registration or certification.",
      "Penalty for misrepresentation: Under Fla. Stat. § 817.265, falsifying ESA documentation, knowingly providing fraudulent documentation, or knowingly misrepresenting a disability or disability-related need for an ESA is a second-degree misdemeanor, plus 30 hours of community service within 6 months of conviction. Under § 456.072, health professionals who provide ESA documentation without personal knowledge of the person's disability or need are subject to discipline.",
      "HUD update and Florida impact: HUD withdrew its 2013 and 2020 assistance-animal guidance (notice dated September 17, 2025) and followed up with a May 22, 2026 memo. Neither changes the FHA or Florida's own statute, so Florida housing providers must still follow § 760.27 and the FHA.",
    ],
  },
  {
    slug: "hawaii",
    name: "Hawai‘i",
    icon: "/esa-laws/esalaws_hawaii.webp",
    bullets: [
      "Hawaii-specific ESA law: Hawaii has no standalone ESA statute or registration requirement. ESA housing requests fall under Hawaii's fair housing law (HRS Chapter 515, § 515-3), enforced by the Hawaii Civil Rights Commission, alongside the federal FHA. The Commission has said reasonable accommodation under fair housing law can include \"assistance animals\" such as support animals, not just service animals.",
      "Penalty for misrepresentation: Under HRS § 347-2.6 (Act 217 of 2018), knowingly misrepresenting an animal as a service animal carries a civil fine of $100 to $250 for a first violation and at least $500 for each later one, on clear and convincing evidence. This covers service-animal fraud only, and Hawaii has no specific penalty for misrepresenting an ESA.",
      "HUD update and Hawaii impact: HUD withdrew its 2013 and 2020 assistance-animal guidance (notice dated September 17, 2025) and followed up with a May 22, 2026 memo. Neither changes the FHA itself, so Hawaii housing providers must still follow the FHA's reasonable-accommodation requirements and Chapter 515.",
    ],
  },
  {
    slug: "illinois",
    name: "Illinois",
    icon: "/esa-laws/esalaws-state-illinois.webp",
    bullets: [
      "Illinois-specific ESA law: Illinois has no standalone ESA statute or registration requirement. ESA housing requests are handled under the Illinois Human Rights Act, which prohibits disability discrimination in housing (775 ILCS 5/3-102), alongside the federal FHA. Illinois's service-animal access provisions (720 ILCS 5/48-8) cover service animals, not ESAs.",
      "Penalty for misrepresentation: Illinois does not appear to have an enacted penalty for misrepresenting an animal as an ESA or service animal. Bills have been introduced over the years, including \"Gander's Law\" and the Assistance and Service Animal Integrity Act, but I found no enacted version.",
      "HUD update and Illinois impact: HUD withdrew its 2013 and 2020 assistance-animal guidance (notice dated September 17, 2025) and followed up with a May 22, 2026 memo. Neither changes the FHA itself, so Illinois housing providers must still follow the FHA's reasonable-accommodation requirements and the Illinois Human Rights Act.",
    ],
  },
  {
    slug: "indiana",
    name: "Indiana",
    icon: "/esa-laws/esalaws-state-indiana.webp",
    bullets: [
      "Indiana-specific ESA law: Indiana regulates ESA housing requests under Ind. Code Chapter 22-9-7 (SB 240, P.L. 162-2018, effective July 1, 2018), alongside the federal FHA and Indiana's fair housing law (IC 22-9.5). An ESA needs no specific training, but the person needs a verifiable disability. Indiana does not require ESA registration or certification.",
      "Penalty for misrepresentation: Under IC § 22-9-7-12, it is a Class A infraction to misrepresent a disability or disability-related need to a housing provider, to make a materially false statement to get documentation, to give a landlord a document that misrepresents an animal as an ESA, or to fit a non-ESA with an ESA vest, collar, or sign. The same section applies to health service providers who verify need without adequate professional knowledge or who charge a fee for verification and provide no other service.",
      "HUD update and Indiana impact: HUD withdrew its 2013 and 2020 assistance-animal guidance (notice dated September 17, 2025) and followed up with a May 22, 2026 memo. Neither changes the FHA itself, so Indiana housing providers must still follow the FHA's reasonable-accommodation requirements and Indiana Code Chapter 22-9-7.",
    ],
  },
  {
    slug: "kentucky",
    name: "Kentucky",
    icon: "/esa-laws/esalaws-state-kentucky.webp",
    bullets: [
      "Kentucky-specific ESA law: KRS § 383.085 specifically governs assistance animals in housing, including ESAs. It allows reasonable accommodation requests, permits reliable disability-related documentation when the need is not apparent, and prohibits pet fees, deposits, or additional rent for an approved assistance animal.",
      "Penalty for misrepresentation: Under KRS § 383.085(6)-(7), knowingly misrepresenting a disability or need, providing false ESA documentation, or falsely identifying a pet as an assistance animal for housing is a violation punishable by a fine of up to $1,000.",
      "HUD update and Kentucky impact: HUD withdrew its prior assistance-animal guidance, but the FHA itself remains in effect. Kentucky's specific KRS § 383.085 continues to provide its own housing-accommodation framework, including documentation rules and protection from pet fees for approved assistance animals.",
    ],
  },
  {
    slug: "louisiana",
    name: "Louisiana",
    icon: "/esa-laws/esalaws-state-louisiana.webp",
    bullets: [
      "Louisiana-specific ESA law: La. Rev. Stat. §§ 46:1971–1978, enacted by Act 558 of 2024, regulates support animals and documentation. Healthcare providers must meet specific licensing, evaluation, and therapeutic-relationship requirements before issuing support-animal documentation.",
      "Penalty for misrepresentation: Under La. Rev. Stat. § 46:1977, violations of the Support and Service Animal Integrity Act can result in fines of up to $500 for a first offense, $1,000 for a second, and $2,500 for a third or subsequent offense. This includes prohibited misrepresentations involving support or service animals.",
      "HUD update and Louisiana impact: HUD withdrew its 2013 and 2020 assistance-animal guidance, but the FHA remains in effect. Louisiana's Act 558 also expressly preserves existing federal and state rights to reasonable accommodation and equal access to housing, so qualifying ESA requests remain subject to applicable fair-housing law.",
    ],
  },
  {
    slug: "maine",
    name: "Maine",
    icon: "/esa-laws/esalaws-state-maine.webp",
    bullets: [
      "Maine-specific ESA law: 5 M.R.S. §§ 4553(1-H) and 4582-A recognize assistance animals, including animals needed to mitigate a physical or mental disability, and protect their use in housing. Landlords generally cannot charge a fee or security deposit for an approved assistance animal.",
      "Penalty for misrepresentation: Under 17 M.R.S. § 1314-A, knowingly misrepresenting an animal as an assistance animal, including through false documents, is a civil violation punishable by a fine of up to $1,000 per occurrence.",
      "HUD update and Maine impact: HUD withdrew its prior assistance-animal guidance, but the FHA itself remains in effect. Maine's own assistance-animal housing protections continue to apply, so qualifying requests remain subject to both federal fair-housing requirements and Maine law.",
    ],
  },
  {
    slug: "massachusetts",
    name: "Massachusetts",
    icon: "/esa-laws/esalaws-state-massachusetts.webp",
    bullets: [
      "Massachusetts-specific ESA law: M.G.L. c. 151B protects people with disabilities who need assistance animals as a reasonable housing accommodation. Massachusetts specifically recognizes ESAs and allows housing providers to request supporting documentation when the disability-related need is not apparent.",
      "Penalty for misrepresentation: Massachusetts does not currently appear to have a specific state fine or criminal penalty for falsely claiming an ESA for housing. A 2025–26 bill, H.1534, is studying ESA fraud and potential future legislation, but it remains pending.",
      "HUD update and Massachusetts impact: HUD withdrew its 2013 and 2020 assistance-animal guidance, but Massachusetts confirmed in July 2026 that the federal change does not modify or limit protections under M.G.L. c. 151B. Massachusetts housing providers must therefore continue applying the state's assistance-animal protections alongside applicable federal law.",
    ],
  },
  {
    slug: "michigan",
    name: "Michigan",
    icon: "/esa-laws/esalaws-state-michigan.webp",
    bullets: [
      "Michigan-specific ESA law: Michigan has no enacted standalone ESA certification law. Housing protections come primarily from the Persons with Disabilities Civil Rights Act and FHA; Michigan guidance recognizes support animals as reasonable accommodations in housing.",
      "Penalty for misrepresentation: Michigan's proposed Emotional Support Animal Act (HB 4910), which would have created specific ESA misrepresentation rules, was vetoed in 2020. Therefore, Michigan currently has no enacted ESA-specific misrepresentation penalty under that proposal.",
      "HUD update and Michigan impact: HUD withdrew its prior assistance-animal guidance, but the FHA remains in effect. Michigan continues to recognize reasonable accommodations for support animals, and a July 2026 Michigan Civil Rights Commission ruling reaffirmed protections for tenants requesting ESAs.",
    ],
  },
  {
    slug: "minnesota",
    name: "Minnesota",
    icon: "/esa-laws/esalaws-state-minnesota.webp",
    bullets: [
      "Minnesota-specific ESA law: Minn. Stat. § 504B.113 defines a “support animal” and governs housing accommodations. Landlords may request documentation from a licensed professional when the disability-related need is not apparent, but cannot require medical records.",
      "Penalty for misrepresentation: Under § 504B.113(4)-(5), knowingly misrepresenting a disability-related need or submitting fraudulent documentation can lead to denial of the rental application or animal request, and may support eviction for a lease violation. Minnesota’s separate § 609.833 makes intentional service-animal misrepresentation a petty misdemeanor, with repeat violations classified as a misdemeanor, but it applies to public accommodations.",
      "HUD update and Minnesota impact: HUD withdrew its earlier assistance-animal guidance, but the FHA remains in effect. Minnesota’s § 504B.113 expressly ties housing accommodations to the FHA, so state protections and reasonable-accommodation requirements continue to apply.",
    ],
  },
  {
    slug: "missouri",
    name: "Missouri",
    icon: "/esa-laws/esalaws-state-missouri.webp",
    bullets: [
      "Missouri-specific ESA law: Missouri Rev. Stat. § 209.204(3) defines an “assistance animal” to include an animal that provides emotional support that alleviates one or more identified effects of a person’s disability. Documentation for an assistance animal must come from a qualified professional as permitted under the FHA or Rehabilitation Act.",
      "Penalty for misrepresentation: Under § 209.204(3), knowingly misrepresenting an animal as an assistance animal, creating or providing fraudulent documentation, or intentionally misrepresenting a material fact to obtain documentation is a Class C misdemeanor, with civil liability for actual damages. A second or subsequent violation is a Class B misdemeanor.",
      "HUD update and Missouri impact: HUD withdrew its 2013 and 2020 assistance-animal guidance, but the FHA remains in effect. Missouri’s § 209.204 expressly addresses assistance animals under the FHA and Rehabilitation Act, including documentation and misrepresentation rules.",
    ],
  },
  {
    slug: "montana",
    name: "Montana",
    icon: "/esa-laws/esalaws-state-montana.webp",
    bullets: [
      "Montana-specific ESA law: Montana Code Ann. § 70-24-114 specifically governs emotional support animals in housing. If the disability-related need is not readily apparent, a landlord may request supporting information from a qualified health care practitioner, but may not require the tenant’s diagnosis, disability severity, or medical records. Montana also requires the practitioner to have an established client-provider relationship of at least 30 days and complete a clinical evaluation.",
      "Penalty for misrepresentation: Under § 70-24-114, an ESA registration, ID card, patch, certificate, or similar registration is not by itself sufficient to establish a disability-related need. The statute does not create a separate criminal penalty for a tenant's ESA misrepresentation, but a health care practitioner may face licensing-board discipline for violating the section.",
      "HUD update and Montana impact: HUD withdrew its earlier assistance-animal guidance, but the Fair Housing Act remains in effect. Montana’s § 70-24-114 expressly preserves federal and state reasonable-accommodation rights while setting specific state rules for ESA documentation in housing.",
    ],
  },
  {
    slug: "nebraska",
    name: "Nebraska",
    icon: "/esa-laws/esalaws-state-nebraska.webp",
    bullets: [
      "Nebraska-specific ESA law: Nebraska does not currently have a separate statute specifically regulating emotional support animals in housing. The Nebraska Fair Housing Act, including Neb. Rev. Stat. § 20-319(2)(b), prohibits disability discrimination and requires reasonable accommodations in housing when necessary for a person with a disability to use and enjoy a dwelling.",
      "Penalty for misrepresentation: Nebraska law prohibits intentionally misrepresenting a disability or disability-related need for an assistance animal, providing unreliable documentation, or falsely representing an animal as an assistance animal. The enacted provisions would classify a first offense as a Class III misdemeanor and a second or subsequent offense as a Class II misdemeanor. However, LB 309 was indefinitely postponed and did not become law, so these penalties should not be presented as current Nebraska law.",
      "HUD update and Nebraska impact: HUD withdrew its earlier assistance-animal guidance, but the Fair Housing Act remains in effect, and HUD's current assistance-animal page continues to recognize reasonable accommodations for assistance animals in housing. Nebraska's Fair Housing Act also addresses disability-related housing discrimination, while its specific state housing statute, § 20-131.04, expressly addresses service animals rather than ESAs.",
    ],
  },
  {
    slug: "pennsylvania",
    name: "Pennsylvania",
    icon: "/esa-laws/esalaws-state-pennsylvania.webp",
    bullets: [
      "Pennsylvania-specific ESA law: Pennsylvania's Assistance and Service Animal Integrity Act (Act 118 of 2018) recognizes emotional support animals as assistance animals when they qualify as reasonable accommodations under fair housing laws. Landlords may request reliable written documentation of a disability-related need when it is not readily apparent.",
      "Penalty for misrepresentation: Under Pennsylvania's Assistance and Service Animal Integrity Act, intentionally misrepresenting a disability-related need for an assistance animal in housing is a third-degree misdemeanor. Intentionally creating or providing false assistance-animal documentation for housing is a summary offense punishable by a fine of up to $1,000.",
      "HUD update and Pennsylvania impact: The federal Fair Housing Act continues to protect qualifying requests for assistance animals, including ESAs, as reasonable housing accommodations. Pennsylvania's state law also establishes documentation requirements and penalties for certain forms of misrepresentation in housing. Changes to HUD guidance do not, by themselves, repeal federal or state fair housing laws.",
    ],
  },
  {
    slug: "south-dakota",
    name: "South Dakota",
    icon: "/esa-laws/esalaws-state-south-dakota.webp",
    bullets: [
      "South Dakota-specific ESA law: South Dakota has specific housing laws addressing assistance animals, including ESAs. Under S.D. Codified Laws §§ 43-32-33 to 43-32-35, landlords may request reliable documentation of a disability-related need for an assistance animal when that need is not readily apparent. Documentation must come from a licensed healthcare provider who does not operate in the state solely to certify assistance animals.",
      "Penalty for misrepresentation: Under S.D. Codified Laws § 43-32-36, knowingly making a false disability claim or providing fraudulent documentation to obtain an assistance-animal accommodation may result in eviction. Landlords may also charge a damage fee of up to $1,000 for fraudulent disability documentation.",
      "HUD update and South Dakota impact: The federal Fair Housing Act continues to protect qualifying requests for assistance animals, including ESAs, as reasonable housing accommodations. South Dakota's housing laws provide additional requirements for documentation and penalties for fraudulent claims. Changes to HUD guidance do not, by themselves, repeal federal or state fair housing laws.",
    ],
  },
  {
    slug: "tennessee",
    name: "Tennessee",
    icon: "/esa-laws/esalaws-state-tennessee.webp",
    bullets: [
      "Tennessee-specific ESA law: Tennessee law specifically addresses support animals in rental housing. Under Tenn. Code Ann. § 66-28-406, tenants with disabilities may request reasonable accommodations for ESAs, including exceptions to no-pet policies and pet fees. Landlords may request reliable documentation of the disability-related need when it is not readily apparent.",
      "Penalty for misrepresentation: Under Tenn. Code Ann. § 39-16-304, knowingly misrepresenting a disability-related need for a support animal or providing false documentation to a landlord is a Class B misdemeanor. A landlord may also terminate the tenancy and seek damages, including reasonable attorney's fees, under § 66-28-406.",
      "HUD update and Tennessee impact: The federal Fair Housing Act continues to protect qualifying requests for assistance animals, including ESAs, as reasonable housing accommodations. Tennessee law provides additional rules for housing requests and penalties for misrepresentation. Changes to HUD guidance do not, by themselves, repeal federal or state fair housing laws.",
    ],
  },
  {
    slug: "virginia",
    name: "Virginia",
    icon: "/esa-laws/esalaws-state-virginia.webp",
    bullets: [
      "Virginia-specific ESA law: Virginia has a specific law protecting assistance animals in housing. Under Va. Code § 36-96.3:1, landlords must consider reasonable accommodation requests for ESAs when necessary for a person with a disability to use and enjoy their home. Landlords cannot charge pet fees, deposits, or additional rent for qualifying assistance animals, although tenants remain responsible for property damage.",
      "Penalty for misrepresentation: Virginia law prohibits knowingly providing fraudulent documentation to support an assistance-animal housing request. Under Va. Code § 36-96.3:1(F), violations may be treated as prohibited practices under the Virginia Consumer Protection Act. Separately, Va. Code § 51.5-44.1 makes fraudulent representation of a service dog to gain public access a Class 4 misdemeanor. This criminal provision concerns service dogs, not ESAs in housing.",
      "HUD update and Virginia impact: The federal Fair Housing Act continues to protect qualifying requests for assistance animals, including ESAs, as reasonable housing accommodations. Virginia's Fair Housing Law provides additional state-level protections. Changes to HUD guidance do not, by themselves, repeal federal or state fair housing laws.",
    ],
  },
  {
    slug: "washington",
    name: "Washington",
    icon: "/esa-laws/esalaws-state-washington.webp",
    bullets: [
      "Washington-specific ESA law: Washington's Law Against Discrimination, under RCW § 49.60.222, prohibits disability discrimination in housing. Landlords must consider reasonable accommodation requests for assistance animals, including ESAs, when necessary for a person with a disability to use and enjoy their home. Qualifying assistance animals are generally exempt from pet fees and deposits.",
      "Penalty for misrepresentation: Under RCW § 49.60.214, knowingly or negligently misrepresenting an animal as a service animal or service animal trainee is a civil infraction. The penalty can be up to $500. This provision concerns service animals and public access, not specifically ESA misrepresentation in housing.",
      "HUD update and Washington impact: The federal Fair Housing Act continues to protect qualifying requests for assistance animals, including ESAs, as reasonable housing accommodations. Washington's Law Against Discrimination provides additional state-level housing protections. Changes to HUD guidance do not, by themselves, repeal federal or state fair housing laws.",
    ],
  },
  {
    slug: "west-virginia",
    name: "West Virginia",
    icon: "/esa-laws/esalaws-state-west-virginia.webp",
    bullets: [
      "West Virginia-specific ESA law: West Virginia's Human Rights Act, under W. Va. Code § 5-11A-5(f)(3)(B), requires reasonable accommodations for assistance animals in housing, including ESAs, when necessary for a person with a disability to use and enjoy their home. Landlords generally cannot charge additional pet fees or deposits for qualifying assistance animals.",
      "Penalty for misrepresentation: Under W. Va. Code § 5-15-9, falsely representing an animal as a service animal to obtain public-access rights is a misdemeanor punishable by a fine of up to $200, up to 10 days in jail, or both. Repeat offenses carry higher penalties. This provision concerns service animals in public settings, not ESA misrepresentation in housing.",
      "HUD update and West Virginia impact: The federal Fair Housing Act continues to protect qualifying requests for assistance animals, including ESAs, as reasonable housing accommodations. West Virginia's Human Rights Act also provides state-level housing protections. Changes to HUD guidance do not, by themselves, repeal federal or state fair housing laws.",
    ],
  },
  {
    slug: "wyoming",
    name: "Wyoming",
    icon: "/esa-laws/esalaws-state-wyoming.webp",
    bullets: [
      "Wyoming-specific ESA law: Wyoming does not have a separate state statute specifically governing emotional support animals (ESAs) in housing. However, the federal Fair Housing Act requires landlords to consider reasonable accommodation requests for qualifying assistance animals when necessary for a person with a disability to use and enjoy their home. Landlords generally cannot charge pet fees for approved assistance animals.",
      "Penalty for misrepresentation: Wyoming law addresses the fraudulent representation of service animals under Wyo. Stat. § 35-13-202. However, this provision concerns service animals and should not be presented as a specific criminal penalty for misrepresenting an ESA in a housing request.",
      "HUD update and Wyoming impact: The federal Fair Housing Act continues to protect qualifying requests for assistance animals, including ESAs, as reasonable housing accommodations. Changes to HUD guidance do not, by themselves, repeal the Act. Wyoming's service-animal laws should be distinguished from federal housing protections for ESAs.",
    ],
  },
];

function StateCard({ entry }: { entry: StateLawEntry }) {
  return (
    <div className="w-full flex items-stretch rounded-[15px] overflow-hidden bg-[rgba(232,185,44,0.2)]">
      <div className="w-[17px] shrink-0 bg-accent rounded-l-[10px]" />
      <div className="flex-1 flex flex-col items-start gap-4 sm:gap-6 py-6 sm:py-8 pl-5 sm:pl-8 pr-5 sm:pr-[67px]">
        <div className="relative w-[57px] h-[57px] shrink-0">
          <Image
            quality={75} loading="lazy" src={entry.icon} alt={`${entry.name} state map`} fill className="object-contain" sizes="57px" />
        </div>
        <div className="flex flex-col gap-2.5 sm:gap-3 w-full">
          <h3 className="font-heading font-bold text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] text-primary">
            {entry.name}
          </h3>
          <ul className="flex flex-col gap-2.5 sm:gap-3">
            {entry.bullets.map((bullet, idx) => (
              <li
                key={idx}
                className="relative pl-5 font-sans font-semibold text-[15px] sm:text-[17px] lg:text-[18px] leading-[26px] sm:leading-[28px] lg:leading-[30px] text-body-text before:content-['•'] before:absolute before:left-0 before:top-0 before:text-primary"
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
    <section className="w-full bg-background py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1178px] mx-auto flex flex-col items-center gap-14 sm:gap-[72px]">
        <div className="flex flex-col items-center gap-4 sm:gap-5 max-w-[1178px] text-center">
          <h2 className="font-heading font-bold text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.2] lg:leading-[54px] tracking-[-0.00015em] text-primary">
            ESA Laws by State
          </h2>
          <p className="font-sans font-semibold text-[15px] sm:text-[17px] lg:text-[18px] leading-[26px] sm:leading-[28px] lg:leading-[30px] text-body-text max-w-[1156px]">
            State laws can add requirements for emotional support animals, while housing providers must also follow applicable federal fair housing protections. Under federal law, ESAs do not have the public-access rights of service animals, so businesses generally do not have to admit an ESA. In housing, a person may request an assistance animal as a reasonable accommodation. If the disability or need for the animal is not obvious, a housing provider may request reliable information supporting the request. Federal law does not require a specific ESA letter format or a particular method for submitting an accommodation request. State requirements vary. Some states, like California require a minimum 30 days provider-client relationship, specific licensing requirements, or particular evaluation standards before documentation can be issued. Some states, like Florida, also impose penalties for falsely representing a service animal, although these laws generally concern service-animal misrepresentation rather than ESA requests. Because requirements can vary and change, renters should check the current federal, state, and local rules that apply to their housing situation.
          </p>
        </div>

        <div className="w-full flex flex-col items-center gap-10 sm:gap-14">
          <h3 className="font-heading font-bold text-[22px] sm:text-[28px] leading-[1.3] text-primary text-center">
            State-Specific ESA Laws and Requirements
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
