export interface EsaLawStateEntry {
  slug: string;
  name: string;
  abbr: string;
  bullets: string[];
}

/** States from the Resources doc that were not already on the ESA Laws page. */
export const EXTRA_STATE_LAWS: EsaLawStateEntry[] = [
  {
    slug: "alaska",
    name: "Alaska",
    abbr: "AK",
    bullets: [
      "Alaska-specific ESA law: Alaska does not have a standalone ESA registration or certification statute. Alaska Stat. § 18.80.240 prohibits discrimination in the sale or rental of real property because of physical or mental disability, supporting reasonable-accommodation rights alongside the federal FHA.",
      "Penalty for misrepresentation: Alaska does not appear to have a specific state penalty for falsely representing an ESA as an assistance animal for housing purposes. The state's animal-related laws distinguish service animals from other animals, but the available Alaska provisions do not establish a standalone ESA-misrepresentation fine or misdemeanor.",
      "HUD update and Alaska impact: HUD withdrew its previous 2013 and 2020 assistance-animal guidance on May 22, 2026, but the underlying FHA reasonable-accommodation requirements remain. In Alaska, qualifying tenants can still request an assistance animal as a reasonable accommodation, while housing providers can request reliable disability-related information when the disability or need is not apparent.",
    ],
  },
  {
    slug: "arizona",
    name: "Arizona",
    abbr: "AZ",
    bullets: [
      "Arizona-specific ESA law: HB 2068 establishes Arizona-specific rules for assistance-animal requests in rental housing, including when a landlord may request supporting documentation. It works alongside the FHA for reasonable accommodations. Arizona also has separate laws addressing fraudulent service-animal representations.",
      "Penalty for misrepresentation: Arizona's specific penalty applies to fraudulently representing an animal as a service animal, not simply claiming an ESA. Under A.R.S. § 11-1024(K), a person may face a civil penalty of up to $250 for each violation. A separate false statement made for a service-animal license can carry a fine of up to $50 under A.R.S. § 9-500.32.",
      "HUD update and Arizona impact: HUD withdrew its 2013 and 2020 assistance-animal guidance, meaning those documents should no longer be treated as authoritative guidance. The withdrawal does not repeal the FHA itself. Arizona housing providers must still evaluate qualifying assistance-animal requests under the FHA and applicable Arizona law, including reasonable-accommodation requirements and the ability to request reliable disability-related information when the need is not apparent.",
    ],
  },
  {
    slug: "arkansas",
    name: "Arkansas",
    abbr: "AR",
    bullets: [
      "Arkansas-specific ESA law: Arkansas regulates ESAs under Ark. Code §§ 20-14-1001 through 20-14-1005 (Act 268 of 2023; updated by Act 819 of 2025), which works alongside the federal FHA. Arkansas does not require ESA registration or certification. For ESA dogs, documentation requires a licensed provider, a client-provider relationship of at least 30 days (except for people verified as homeless), and a yearly clinical evaluation.",
      "Penalty for misrepresentation: Under § 20-14-310, misrepresenting an animal as a service animal to a public accommodation can bring a civil penalty of up to $250 per violation. Under § 20-14-1004, knowingly and fraudulently representing or selling an ESA dog as having service-animal rights carries civil penalties of $500 for a first violation, $1,000 for a second, and $2,500 for a third or later violation. These penalties target fraud, not a genuine ESA request.",
      "HUD update and Arkansas impact: HUD withdrew its 2013 and 2020 assistance-animal guidance (notice dated September 17, 2025) and followed up with a May 22, 2026 memo. Neither changes the FHA itself, so Arkansas housing providers must still follow the FHA's reasonable-accommodation requirements.",
    ],
  },
  {
    slug: "connecticut",
    name: "Connecticut",
    abbr: "CT",
    bullets: [
      "Connecticut-specific ESA law: Connecticut has no standalone ESA statute. ESA housing requests are handled under the state fair housing law (Conn. Gen. Stat. § 46a-64c), which requires reasonable accommodations for people with disabilities, alongside the federal FHA. Complaints go to the Commission on Human Rights and Opportunities (CHRO). Connecticut does not require ESA registration or certification.",
      "Penalty for misrepresentation: Connecticut does not appear to have a specific penalty for misrepresenting an animal as an ESA or service animal. Service-animal statutes (§§ 22-345 and 46a-44, as amended by PA 24-18) address access rights, not fraud.",
      "HUD update and Connecticut impact: HUD withdrew its 2013 and 2020 assistance-animal guidance (notice dated September 17, 2025) and followed up with a May 22, 2026 memo. Neither changes the FHA itself, so Connecticut housing providers must still follow federal and state reasonable-accommodation requirements.",
    ],
  },
  {
    slug: "delaware",
    name: "Delaware",
    abbr: "DE",
    bullets: [
      "Delaware-specific ESA law: Delaware has no standalone ESA statute or registration requirement. ESA housing requests fall under the Delaware Fair Housing Act (6 Del. C. Chapter 46), which prohibits disability discrimination in housing and works alongside the federal FHA.",
      "Penalty for misrepresentation: Delaware does not appear to have a specific penalty for misrepresenting an animal as an ESA or assistance animal. SB 219 (2024) proposed a $500 civil penalty for a first offense and a misdemeanor after that, but it never left committee and died when the session ended.",
      "HUD update and Delaware impact: HUD withdrew its 2013 and 2020 assistance-animal guidance (notice dated September 17, 2025) and followed up with a May 22, 2026 memo. Neither changes the FHA itself, so Delaware housing providers must still follow federal and state reasonable-accommodation requirements.",
    ],
  },
  {
    slug: "georgia",
    name: "Georgia",
    abbr: "GA",
    bullets: [
      "Georgia-specific ESA law: Georgia has no standalone ESA statute or registration requirement. ESA housing requests fall under the Georgia Fair Housing Act (O.C.G.A. § 8-3-200 et seq.), enforced by the Georgia Commission on Equal Opportunity, alongside the federal FHA. The state's service-dog laws (O.C.G.A. Title 30, Chapter 4, updated by HB 668) cover service dogs, not ESAs.",
      "Penalty for misrepresentation: Georgia's HB 668 (the \"Mara Jade Act,\" effective July 1, 2026) makes it a misdemeanor, punishable by a fine and/or imprisonment, to deliberately misrepresent oneself as qualified to use a service dog or as a service-dog trainer to get accommodations. It targets service-dog fraud, and emotional support animals are not covered by its protections. Georgia has no specific ESA-misrepresentation penalty.",
      "HUD update and Georgia impact: HUD withdrew its 2013 and 2020 assistance-animal guidance (notice dated September 17, 2025) and followed up with a May 22, 2026 memo. Neither changes the FHA itself, so Georgia housing providers must still follow the FHA's reasonable-accommodation requirements.",
    ],
  },
  {
    slug: "idaho",
    name: "Idaho",
    abbr: "ID",
    bullets: [
      "Idaho-specific ESA law: Idaho has no standalone ESA statute or registration requirement. ESA housing requests are handled under the federal FHA, backed by the Idaho Human Rights Act (Idaho Code Title 67, Chapter 59), which also prohibits disability discrimination in housing.",
      "Penalty for misrepresentation: Idaho does not appear to have a specific penalty for misrepresenting an ESA. Idaho's service-animal provisions (Idaho Code Title 56, Chapter 7, and § 18-5811A) address service animals, and § 18-5811A is reported to make misrepresenting a service animal a misdemeanor.",
      "HUD update and Idaho impact: HUD withdrew its 2013 and 2020 assistance-animal guidance (notice dated September 17, 2025) and followed up with a May 22, 2026 memo. Neither changes the FHA itself, so Idaho housing providers must still follow the FHA's reasonable-accommodation requirements.",
    ],
  },
  {
    slug: "iowa",
    name: "Iowa",
    abbr: "IA",
    bullets: [
      "Iowa-specific ESA law: Iowa Code § 216.8B, along with § 216.8C, governs assistance animals in housing. A person with a disability and disability-related need may request an assistance animal as a reasonable accommodation. If the disability or need is not readily apparent, the landlord may request supporting information but cannot require a diagnosis, severity information, or medical records. Iowa also states that ESA/service-animal registrations, ID cards, patches, or certificates are not sufficient proof by themselves.",
      "Penalty for misrepresentation: Iowa Code § 216.8B does not currently establish a specific criminal penalty for falsely claiming an ESA. The current 2026 provision instead makes a person who knowingly denies or interferes with a protected disability-related housing right guilty of a simple misdemeanor upon conviction. Earlier proposals included a simple-misdemeanor penalty for knowingly misrepresenting an assistance or service animal, but that language is not part of the current 2026 code, so it should not be presented as current Iowa law.",
      "HUD update and Iowa impact: HUD withdrew its 2013 and 2020 assistance-animal guidance in September 2025 and stated that those documents should no longer be relied on as authoritative. The withdrawal did not repeal the FHA, and Iowa's § 216.8B expressly preserves existing federal reasonable-accommodation rights. Therefore, Iowa housing providers must continue to evaluate qualifying assistance-animal requests under the FHA and Iowa law, while Iowa's own documentation and accommodation requirements remain applicable.",
    ],
  },
  {
    slug: "kansas",
    name: "Kansas",
    abbr: "KS",
    bullets: [
      "Kansas-specific ESA law: Kansas has no enacted standalone ESA housing law. ESA housing protections primarily come from the Kansas Act Against Discrimination, K.S.A. § 44-1001 et seq., and the federal FHA.",
      "Penalty for misrepresentation: K.S.A. § 39-1112 makes certain false claims involving assistance dogs a Class A nonperson misdemeanor. This applies to assistance-dog access/acquisition claims, not specifically to falsely claiming an ESA for housing.",
      "HUD update and Kansas impact: HUD withdrew its 2013 and 2020 assistance-animal guidance, but the FHA itself remains in effect. Kansas housing providers therefore continue to apply federal FHA protections and applicable Kansas fair-housing law to qualifying ESA accommodation requests.",
    ],
  },
  {
    slug: "maryland",
    name: "Maryland",
    abbr: "MD",
    bullets: [
      "Maryland-specific ESA law: Md. Code, State Government § 20-706 prohibits housing discrimination based on disability and requires reasonable accommodations. Maryland's statute distinguishes service dogs from animals providing only emotional support, so ESA housing protections primarily operate through the FHA.",
      "Penalty for misrepresentation: Maryland does not appear to have a specific state penalty for falsely claiming an ESA for housing. Its separate service-animal law, Md. Code, Human Services § 7-705, provides a fine of up to $500 for unlawfully denying or interfering with a service animal, but that is not an ESA-misrepresentation penalty.",
      "HUD update and Maryland impact: HUD withdrew its 2013 and 2020 assistance-animal guidance, but the FHA's reasonable-accommodation requirements remain. Maryland housing providers therefore continue to evaluate qualifying assistance-animal requests under the FHA and applicable Maryland fair-housing law.",
    ],
  },
  {
    slug: "mississippi",
    name: "Mississippi",
    abbr: "MS",
    bullets: [
      "Mississippi-specific ESA law: Mississippi does not appear to have a separate state statute specifically governing emotional support animals in housing. The federal Fair Housing Act remains the primary framework for disability-related housing accommodations. Mississippi's Support Animal Act, Miss. Code §§ 43-6-151–155, primarily addresses trained support animals and access to public places rather than untrained ESAs used for housing.",
      "Penalty for misrepresentation: Mississippi does not appear to have a specific state statute creating a separate criminal penalty for falsely claiming an emotional support animal for housing. General fraud laws may apply in circumstances involving fraudulent claims for government-funded benefits or services, but they should not be presented as an ESA-specific penalty.",
      "HUD update and Mississippi impact: HUD withdrew its 2013 and 2020 assistance-animal guidance, but the Fair Housing Act remains in effect. Because Mississippi has no separate ESA housing statute, federal fair-housing requirements remain important when evaluating disability-related requests for an assistance animal in housing.",
    ],
  },
  {
    slug: "nevada",
    name: "Nevada",
    abbr: "NV",
    bullets: [
      "Nevada-specific ESA law: Nevada law protects certain housing rights for people with disabilities who need assistance animals. Under Nev. Rev. Stat. § 118.105, landlords generally cannot refuse housing solely because a tenant with a disability needs an assistance animal. Nevada's Fair Housing Law also requires reasonable accommodations when necessary for a person with a disability to use and enjoy a dwelling.",
      "Penalty for misrepresentation: Under NRS § 426.805, fraudulently misrepresenting a service animal is a misdemeanor punishable by a fine of up to $500. This provision concerns service animals, not ESAs specifically, and should not be presented as an ESA misrepresentation penalty.",
      "HUD update and Nevada impact: The federal Fair Housing Act continues to protect qualifying requests for reasonable housing accommodations for assistance animals, including ESAs. Nevada's housing laws provide additional protections. Changes to HUD guidance do not, by themselves, repeal federal or state fair housing laws.",
    ],
  },
  {
    slug: "new-hampshire",
    name: "New Hampshire",
    abbr: "NH",
    bullets: [
      "New Hampshire-specific ESA law: New Hampshire does not have a separate state statute specifically governing emotional support animals (ESAs) in housing. However, the federal Fair Housing Act requires reasonable accommodations for qualifying assistance animals, including ESAs, when necessary for a person with a disability to use and enjoy their home. New Hampshire's state law specifically addresses service animals rather than ESAs.",
      "Penalty for misrepresentation: New Hampshire law prohibits falsely representing an animal as a service animal. Violations may result in misdemeanor penalties. These provisions apply to service animals and should not be presented as specific penalties for misrepresenting an ESA in a housing request.",
      "HUD update and New Hampshire impact: The federal Fair Housing Act continues to provide housing protections for qualifying assistance-animal requests, including ESAs. Changes to HUD guidance do not, by themselves, repeal the Act. New Hampshire's service-animal laws should be distinguished from federal housing protections for ESAs.",
    ],
  },
  {
    slug: "new-jersey",
    name: "New Jersey",
    abbr: "NJ",
    bullets: [
      "New Jersey-specific ESA law: New Jersey's Law Against Discrimination (N.J.S.A. 10:5-12) requires housing providers to consider reasonable accommodation requests for emotional support animals when necessary for a person with a disability to use and enjoy their home. Landlords generally cannot deny a qualifying request solely because of a no-pet policy or impose pet fees for an approved assistance animal.",
      "Penalty for misrepresentation: New Jersey law provides penalties for certain forms of service-animal misrepresentation under N.J.S.A. 10:5-29.5. However, this provision concerns guide and service animals, not specifically ESAs in housing. It should not be presented as a general ESA misrepresentation penalty.",
      "HUD update and New Jersey impact: The federal Fair Housing Act continues to protect qualifying requests for assistance animals in housing. New Jersey's Law Against Discrimination also provides state-level protections for people with disabilities requesting ESAs as a reasonable accommodation. Changes to HUD guidance do not, by themselves, repeal these laws.",
    ],
  },
  {
    slug: "new-mexico",
    name: "New Mexico",
    abbr: "NM",
    bullets: [
      "New Mexico-specific ESA law: New Mexico does not have a separate state statute specifically governing ESAs in housing. However, the federal Fair Housing Act requires reasonable accommodations for qualifying assistance animals when necessary for a person with a disability to use and enjoy their home. New Mexico's Service Animal Act specifically distinguishes ESAs from trained service animals.",
      "Penalty for misrepresentation: Under N.M. Stat. § 28-11-6, knowingly misrepresenting an animal as a qualified service animal is a misdemeanor. This law applies to service animals, not specifically to ESAs in housing, so it should not be presented as an ESA misrepresentation penalty.",
      "HUD update and New Mexico impact: The federal Fair Housing Act continues to protect qualifying requests for assistance animals, including ESAs, as reasonable housing accommodations. Changes to HUD guidance do not, by themselves, repeal the Act. New Mexico's service-animal laws should be distinguished from federal housing protections for ESAs.",
    ],
  },
  {
    slug: "new-york",
    name: "New York",
    abbr: "NY",
    bullets: [
      "New York-specific ESA law: New York's Human Rights Law, under N.Y. Executive Law § 296(18)(2), requires reasonable accommodations in housing for people with disabilities, including allowing an assistance animal when necessary to alleviate disability-related symptoms. Landlords must consider qualifying requests, even when their properties have no-pet policies.",
      "Penalty for misrepresentation: New York Senate Bill S9086, introduced in 2026, proposes penalties for intentionally misrepresenting an animal to obtain housing accommodations, including a misdemeanor, a fine of up to $500, and community service. However, the bill remains in committee and has not become law. These proposed penalties should not be presented as current law.",
      "HUD update and New York impact: The federal Fair Housing Act continues to protect qualifying requests for reasonable housing accommodations for assistance animals, including ESAs. New York's Human Rights Law provides additional state-level housing protections. Changes to HUD guidance do not, by themselves, repeal federal or state fair housing laws.",
    ],
  },
  {
    slug: "north-carolina",
    name: "North Carolina",
    abbr: "NC",
    bullets: [
      "North Carolina-specific ESA law: North Carolina does not currently have a separate state statute specifically governing emotional support animals (ESAs) in housing. However, the federal Fair Housing Act requires reasonable accommodations for qualifying assistance animals when necessary for a person with a disability to use and enjoy their home. A proposed state bill that would have established specific protections and requirements for support animals did not become law.",
      "Penalty for misrepresentation: Under N.C. Gen. Stat. § 168-4.5, disguising an animal as a service animal or a service animal in training is a Class 3 misdemeanor. This provision applies to service animals, not specifically to ESAs in housing. A separate proposal addressing misrepresentation of support animals in rental housing also did not become law.",
      "HUD update and North Carolina impact: The federal Fair Housing Act continues to protect qualifying requests for reasonable housing accommodations for assistance animals, including ESAs. Changes to HUD guidance do not, by themselves, repeal the Act. North Carolina's service-animal laws should be distinguished from federal housing protections for ESAs.",
    ],
  },
  {
    slug: "north-dakota",
    name: "North Dakota",
    abbr: "ND",
    bullets: [
      "North Dakota-specific ESA law: North Dakota does not have a separate comprehensive ESA law, but N.D. Cent. Code § 47-16-07.5 addresses documentation for service and assistance animals in rental housing. Federal Fair Housing Act protections require reasonable accommodations for qualifying ESAs when necessary for a person with a disability to use and enjoy their home.",
      "Penalty for misrepresentation: Under N.D. Cent. Code § 47-16-07.6, knowingly making a false disability claim or providing fraudulent documentation to obtain a housing accommodation for a service or assistance animal is an infraction. A violation may also lead to eviction and a damage fee of up to $1,000.",
      "HUD update and North Dakota impact: The federal Fair Housing Act continues to protect qualifying requests for assistance animals, including ESAs, as reasonable housing accommodations. Changes to HUD guidance do not, by themselves, repeal the Act. North Dakota's housing provisions concerning assistance animals should be considered alongside applicable federal fair housing protections.",
    ],
  },
  {
    slug: "ohio",
    name: "Ohio",
    abbr: "OH",
    bullets: [
      "Ohio-specific ESA law: Ohio does not have a separate statewide statute specifically governing emotional support animals (ESAs) in housing. However, the federal Fair Housing Act and Ohio's fair housing law under Ohio Rev. Code § 4112.02(H) require reasonable accommodations for qualifying assistance-animal requests when necessary for a person with a disability to use and enjoy their home.",
      "Penalty for misrepresentation: Ohio law addresses access rights for trained assistance dogs, but these provisions should not be interpreted as establishing a specific criminal penalty for misrepresenting an ESA in a housing request. Do not list a specific ESA misrepresentation fine or misdemeanor without verifying an applicable enacted law.",
      "HUD update and Ohio impact: The federal Fair Housing Act continues to protect qualifying requests for assistance animals, including ESAs, as reasonable housing accommodations. Changes to HUD guidance do not, by themselves, repeal the Act. Ohio's fair housing protections should be considered alongside applicable federal law.",
    ],
  },
  {
    slug: "oklahoma",
    name: "Oklahoma",
    abbr: "OK",
    bullets: [
      "Oklahoma-specific ESA law: Oklahoma has a specific statute addressing assistance animals in rental housing. Under Okla. Stat. tit. 41, § 113.2, tenants with disabilities may request reasonable accommodations for assistance animals, including ESAs. Landlords may request reliable supporting documentation when the disability-related need is not readily apparent.",
      "Penalty for misrepresentation: Under Okla. Stat. tit. 41, § 113.2(D), knowingly making a false disability claim or providing fraudulent documentation to obtain an assistance-animal accommodation may result in eviction proceedings. A landlord who prevails in an eviction action may also be awarded court costs, fees, and damages of up to $1,000.",
      "HUD update and Oklahoma impact: The federal Fair Housing Act continues to provide protections for qualifying assistance-animal accommodation requests in housing. Oklahoma's § 113.2 also expressly recognizes emotional support animals and establishes requirements for housing accommodation requests. Changes to HUD guidance do not, by themselves, repeal federal or state housing laws.",
    ],
  },
  {
    slug: "oregon",
    name: "Oregon",
    abbr: "OR",
    bullets: [
      "Oregon-specific ESA law: Oregon law recognizes assistance animals in housing. Under ORS § 90.300(4), landlords generally cannot charge a pet security deposit for an assistance animal required as a reasonable accommodation under fair housing laws. The federal Fair Housing Act also requires reasonable accommodations for qualifying ESAs when necessary for a person with a disability to use and enjoy their home.",
      "Penalty for misrepresentation: Oregon does not have a general enacted state penalty specifically for misrepresenting an ESA in a housing request. A 2019 proposal, HB 2758, sought to penalize misrepresenting an animal as an assistance animal, but it did not become law. Service-animal rules should not be presented as ESA-specific housing penalties.",
      "HUD update and Oregon impact: The federal Fair Housing Act continues to protect qualifying requests for assistance animals, including ESAs, as reasonable housing accommodations. Changes to HUD guidance do not, by themselves, repeal the Act. Oregon's housing protections operate alongside applicable federal fair housing law.",
    ],
  },
  {
    slug: "rhode-island",
    name: "Rhode Island",
    abbr: "RI",
    bullets: [
      "Rhode Island-specific ESA law: Rhode Island's Fair Housing Practices Act, under R.I. Gen. Laws § 34-37-4(e), requires housing providers to consider reasonable accommodation requests for assistance animals, including ESAs, when necessary for a person with a disability to use and enjoy their home. Landlords generally cannot charge extra fees for qualifying assistance animals, although tenants remain responsible for property damage.",
      "Penalty for misrepresentation: Under R.I. Gen. Laws § 40-9.1-3.1, falsely representing an animal as a service animal to gain access to a public area is a civil violation punishable by up to 30 hours of community service. This law concerns service animals in public places, not ESA misrepresentation in housing.",
      "HUD update and Rhode Island impact: The federal Fair Housing Act continues to protect qualifying requests for reasonable housing accommodations for assistance animals, including ESAs. Rhode Island's Fair Housing Practices Act provides additional state-level protections. Changes to HUD guidance do not, by themselves, repeal federal or state fair housing laws.",
    ],
  },
  {
    slug: "south-carolina",
    name: "South Carolina",
    abbr: "SC",
    bullets: [
      "South Carolina-specific ESA law: South Carolina's Fair Housing Law, under S.C. Code Ann. § 31-21-70(N), allows landlords to request information confirming a tenant's disability and disability-related need for an assistance animal, including an ESA. Documentation must establish that the animal provides disability-related assistance or emotional support. Qualifying requests must be considered as reasonable accommodations.",
      "Penalty for misrepresentation: Under S.C. Code Ann. § 47-3-980, intentionally misrepresenting an animal as a service animal is unlawful. Penalties include fines of up to $250 for a first offense, $500 for a second offense, and $1,000 for a third or subsequent offense. These penalties apply to service-animal misrepresentation, not specifically to ESAs in housing.",
      "HUD update and South Carolina impact: In 2026, HUD changed its enforcement approach to assistance-animal complaints and withdrew its earlier ESA guidance. However, the South Carolina Human Affairs Commission confirmed that the state's fair housing protections remain in effect. South Carolina continues to recognize qualifying ESA accommodation requests under its state law, regardless of changes to HUD's federal enforcement policy.",
    ],
  },
  {
    slug: "texas",
    name: "Texas",
    abbr: "TX",
    bullets: [
      "Texas-specific ESA law: Texas does not have a separate comprehensive state statute specifically governing emotional support animals (ESAs) in housing. However, the federal Fair Housing Act requires reasonable accommodations for qualifying assistance animals when necessary for a person with a disability to use and enjoy their home. Landlords may request reliable documentation when the disability-related need is not readily apparent.",
      "Penalty for misrepresentation: Under Texas Human Resources Code § 121.006, intentionally or knowingly misrepresenting an animal as an assistance or service animal when it is not specially trained to help a person with a disability is a misdemeanor punishable by a fine of up to $1,000 and 30 hours of community service. This provision concerns trained assistance and service animals and should not be presented as a specific penalty for misrepresenting an ESA in a housing request.",
      "HUD update and Texas impact: The federal Fair Housing Act continues to protect qualifying requests for reasonable housing accommodations for assistance animals, including ESAs. Changes to HUD guidance do not, by themselves, repeal the Act. Texas's laws concerning trained assistance animals should be distinguished from federal housing protections for ESAs.",
    ],
  },
  {
    slug: "utah",
    name: "Utah",
    abbr: "UT",
    bullets: [
      "Utah-specific ESA law: Utah law explicitly recognizes support animals in housing. Under Utah Code § 26B-6-803, landlords cannot discriminate against tenants with disabilities because they have a service or support animal, or charge additional fees or deposits for the animal. Tenants remain responsible for damage caused by their animals. Reasonable accommodation requests are also governed by Utah and federal fair housing laws.",
      "Penalty for misrepresentation: Under Utah Code § 26B-6-805, intentionally and knowingly falsely representing an animal as a service or support animal, or misrepresenting material facts to obtain supporting documentation, is a Class C misdemeanor.",
      "HUD update and Utah impact: The federal Fair Housing Act continues to protect qualifying requests for assistance animals, including ESAs, as reasonable housing accommodations. Utah law provides additional protections for support animals in housing. Changes to HUD guidance do not, by themselves, repeal federal or state fair housing laws.",
    ],
  },
  {
    slug: "vermont",
    name: "Vermont",
    abbr: "VT",
    bullets: [
      "Vermont-specific ESA law: Vermont's Fair Housing Act, under 9 V.S.A. § 4503(a)(9), protects people with disabilities who need assistance animals, including ESAs, in housing. Landlords must consider reasonable accommodation requests and generally cannot charge pet deposits for qualifying assistance animals. Tenants remain responsible for damage caused by their animals.",
      "Penalty for misrepresentation: Vermont does not have a specific statewide criminal penalty for misrepresenting an ESA in a housing request. However, providing false information to obtain an accommodation may affect the request's validity. Vermont's service-animal access laws apply separately and should not be presented as ESA-specific housing penalties.",
      "HUD update and Vermont impact: The federal Fair Housing Act continues to protect qualifying requests for assistance animals, including ESAs, as reasonable housing accommodations. Vermont's Fair Housing Act also provides state-level protections. Changes to HUD guidance do not, by themselves, repeal federal or state fair housing laws.",
    ],
  },
  {
    slug: "wisconsin",
    name: "Wisconsin",
    abbr: "WI",
    bullets: [
      "Wisconsin-specific ESA law: Wisconsin's Open Housing Law, under Wis. Stat. § 106.50(2r)(br), protects people with disabilities who need emotional support animals in housing. Landlords generally cannot refuse housing, evict tenants, or charge extra compensation because of a qualifying ESA. They may request reliable documentation of the disability-related need.",
      "Penalty for misrepresentation: Under Wis. Stat. § 106.50(2r)(br)5, intentionally misrepresenting a disability or the need for an ESA to obtain housing may result in a forfeiture of at least $500. A separate provision also penalizes licensed health professionals who intentionally misrepresent a patient's disability-related need. Proposed changes under AB 366 did not become law.",
      "HUD update and Wisconsin impact: The federal Fair Housing Act continues to protect qualifying requests for assistance animals, including ESAs, as reasonable housing accommodations. Wisconsin's Open Housing Law provides additional state-level protections. Changes to HUD guidance do not, by themselves, repeal federal or state fair housing laws.",
    ],
  },
];
