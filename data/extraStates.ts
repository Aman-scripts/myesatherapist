import type { StateData } from "./statesData";

const THERAPISTS_SUBTITLE =
  "We connect individuals with licensed mental health professionals who are qualified to conduct evaluations and provide recommendations when clinically appropriate.";

const LICENSURE_NOTE =
  "A Note on Licensure Levels: Depending on their state of origin, a social worker or counselor may have a variety of titles, such as Licensed Clinical Social Worker (LCSW), Licensed Independent Clinical Social Worker (LICSW), etc. These are comparable licensure levels.";

const THERAPISTS = [
  {
    name: "Robert Staaf",
    title: "Licensed Clinical Social Worker",
    bio: "LCSW with extensive psychotherapy experience. Pet owner and advocate for animal-assisted mental health treatment.",
    licensedIn: "30+ States",
    focus: "Anxiety & Stress",
  },
  {
    name: "Leslie K. Gamble",
    title: "Licensed Independent Clinical Social Worker",
    bio: "LICSW with 13 years of healthcare experience serving individuals, couples, and families with flexible, goal-focused care.",
    licensedIn: "15+ States",
    focus: "Depression & PTSD",
  },
  {
    name: "Gaurav Patel, MD",
    title: "Family Medicine Physician",
    bio: "Board-certified family medicine physician with experience providing evidence-based, patient-focused care across inpatient, urgent care, outpatient, and telemedicine settings.",
    licensedIn: "17 States",
    method: "Video or Phone",
    focus: "Chronic Conditions & Sleep Concerns",
  },
];

const PROCESS_ICONS = [
  "/states/californina-esa-evalutation_schedule.svg",
  "/states/californina-esa-evalutation_clinicalevaluation.svg",
  "/states/californina-esa-evalutation_clinicaldetermination.svg",
];

const CONDITION_ICONS = [
  "/states/whomayqualifies-california_chronicworry.svg",
  "/states/whomayqualifies-panicattack.svg",
  "/states/whomayqualifies-moodconditions.svg",
  "/states/whomayqualifies-california_posttrauma.svg",
];

const FIN_ICON = "/states/california-benefits-workplaceconsideration.svg";
const EMO_ICON = "/states/california-benefits-strongersense.svg";

const CITY_ICONS = [
  "/states/losangeles.svg",
  "/states/sanfrancisco.svg",
  "/states/losangelestwo.svg",
  "/states/sanfranciscotwo.svg",
  "/states/losangelesthree.svg",
  "/states/sanfranciscothree.svg",
  "/states/losangelesfour.svg",
  "/states/sanfranciscofour.svg",
];

function whyChoose(last: string) {
  return [
    {
      icon: "/ESA ICons/Icon-33.svg",
      title: "Licensed Professionals",
      description:
        "ESA evaluations are conducted by independent US licensed mental health professionals authorized to assess ESA eligibility.",
    },
    {
      icon: "/ESA ICons/Icon-15.svg",
      title: "Secure Telehealth Platform",
      description: "Our HIPAA-compliant systems ensure your information remains confidential and protected.",
    },
    {
      icon: "/ESA ICons/Glyph-2.svg",
      title: "Clinical Integrity First",
      description: "ESA recommendations are issued by licensed professionals based on individualized clinical evaluation.",
    },
    {
      icon: "/ESA ICons/Icon-17.svg",
      title: "Legitimate ESA Documentation",
      description:
        "When clinically appropriate, ESA letters are issued in compliance with applicable federal and state housing guidelines.",
    },
    {
      icon: "/ESA ICons/Icon-24.svg",
      title: "Nationwide Access",
      description:
        "Telehealth evaluations available for individuals across the United States, subject to clinician availability.",
    },
    {
      icon: "/ESA ICons/Icon-26.svg",
      title: "Transparent Process",
      description: last,
    },
  ];
}

function steps(rows: Array<[string, string]>) {
  return rows.map(([title, description], index) => ({
    number: String(index + 1).padStart(2, "0"),
    icon: PROCESS_ICONS[index] || PROCESS_ICONS[0],
    title,
    description,
  }));
}

function conditions(rows: Array<[string, string]>) {
  return rows.map(([title, description], index) => ({
    title,
    description,
    icon: CONDITION_ICONS[index % CONDITION_ICONS.length],
  }));
}

function benefits(rows: Array<[string, string]>, icon: string) {
  return rows.map(([title, description]) => ({ title, description, icon }));
}

function cities(rows: Array<[string, string]>) {
  return rows.map(([name, description], index) => ({
    name,
    description,
    icon: CITY_ICONS[index % CITY_ICONS.length],
  }));
}

const SHARED = {
  therapistsTitle: "Our Licensed Mental Health Professionals",
  therapistsSubtitle: THERAPISTS_SUBTITLE,
  therapistsLicensureNote: LICENSURE_NOTE,
  therapistsList: THERAPISTS,
  benefitsRefundNote: "",
  reviewsTitle: "See What Our Clients Say",
  reviewsSubtitle: "Here's what our clients say about their experience.",
};

export const EXTRA_STATES: Record<string, StateData> = {
  vermont: {
    slug: "vermont",
    name: "Vermont",
    abbreviation: "VT",
    metaTitle: "ESA Letter Evaluations by Vermont Licensed Therapists | My ESA Therapist",
    metaDescription:
      "Connect with Vermont mental health professionals for personalized ESA evaluations. Every assessment is conducted in a secure setting that prioritizes your privacy and well-being.",
    heroTitle: "ESA Letter Evaluations\nby Vermont Licensed Therapists",
    heroSubtitle:
      "Connect with Vermont mental health professionals for personalized ESA evaluations. Every assessment is conducted in a secure setting that prioritizes your privacy and well-being.",
    ...SHARED,
    whyChooseTitle: "Why Choose My ESA Therapist for ESA Letter Evaluation in Vermont?",
    whyChooseSubtitle:
      "We simplify online emotional support animal evaluations in Vermont while maintaining efficiency and legal compliance. Here's what makes us different from other providers.",
    whyChooseItems: whyChoose("Clear steps, clear expectations, and no misleading claims."),
    processTitle: "How ESA Letter Process Works in Vermont?",
    processSubtitle:
      "We help individuals living in Vermont connect with licensed mental health professionals for individualized emotional wellness assessments.",
    processSteps: steps([
      [
        "Schedule an Evaluation",
        "Choose a time that works for you to talk to a Vermont-based licensed mental health professional.",
      ],
      [
        "Complete Your Evaluation",
        "Participate in a secure meeting via a video or phone call. In order to assess whether an emotional support animal could be beneficial, the clinician goes over your mental health history and presents emotional difficulties.",
      ],
      [
        "Clinical Determination",
        "The licensed professional makes an independent decision following the evaluation. If necessary, you will receive an ESA letter Vermont via secure email.",
      ],
    ]),
    processDifferentiatorsTitle: "What Sets Our Vermont ESA Letter Process Apart?",
    processDifferentiators: [
      "No promises of automatic or instant ESA approvals.",
      "Assessments carried out by licensed mental health professionals in Vermont.",
      "Private telehealth system built to follow HIPAA privacy and security standards.",
      "ESA letters are provided only if the clinician determines there is a need for an emotional support animal.",
    ],
    whoQualifiesTitle: "Who May Qualify for an ESA Letter in Vermont?",
    whoQualifiesSubtitle:
      "All consultations take place through secure, HIPAA-compliant telehealth platforms to maintain privacy and confidentiality. During the evaluation, a licensed clinician reviews mental health concerns that may affect daily activities and overall functioning. Some examples include:",
    whoQualifiesSectionHeading: "Qualifying Conditions",
    whoQualifiesConditions: conditions([
      ["Seasonal Affective Disorder (SAD)", "Depression related to long, dark winter seasons."],
      ["Adjustment Disorder", "Emotional distress triggered by major life changes."],
      ["Depersonalization/Derealization Disorder", "Feeling detached from self or surroundings."],
      ["Selective Mutism (Adults)", "Severe anxiety causing difficulty speaking in situations."],
    ]),
    requirementsTitle: "Basic Requirements For Vermont ESA Letter",
    requirementsIntro: "In Vermont, ESA evaluations may consider the following factors:",
    requirementsItems: [
      "The individual must be 18 years or older, or a minor with consent from a parent or legal guardian.",
      "A mental or emotional health condition is identified during the professional assessment.",
      "The symptoms significantly affect one or more aspects of daily life.",
      "The clinician evaluates whether an emotional support animal could provide helpful emotional support based on the person's situation.",
      "The individual lives in Vermont or plans to move to the state.",
    ],
    requirementsNote:
      "Important: A formal assessment must be completed by a licensed mental health professional to determine whether issuing an ESA letter Vermont is appropriate for the individual's circumstances. HUD's May 22, 2026, enforcement guidance also provides updated direction on certain animal-related reasonable accommodation complaints under the Fair Housing Act. This guidance does not amend the Fair Housing Act or determine ESA eligibility.",
    benefitsTitle: "Benefits of Having an ESA Letter in Vermont",
    benefitsSubtitle:
      "Know how an emotional support letter Vermont may benefit individuals with mental health issues and lead to a happier and more self-assured life living with their companion pets.",
    financialBenefitsHeading: "Financial Benefits",
    financialBenefits: benefits(
      [
        [
          "Lower Unexpected Housing Charges",
          "By preventing unexpected pet-related fees in Vermont rentals, ESA letters enable residents to plan their finances with confidence and preserve their legal right to keep emotional support animals at home.",
        ],
        [
          "Reduced Therapy Expenses",
          "Over time, significant cost savings may result from some residents relying less on frequent therapy sessions or medication when an ESA provides daily emotional stability.",
        ],
        [
          "Easier Relocation Affordability",
          "An ESA letter can lower rental barriers when relocating within Vermont, helping individuals secure housing without additional deposits or restrictions, which can support both financial and emotional stability during transitions.",
        ],
      ],
      FIN_ICON,
    ),
    emotionalBenefitsHeading: "Mental and Emotional Support",
    emotionalBenefits: benefits(
      [
        [
          "Calms Stress in Everyday Life",
          "Even during hectic work or school schedules in Vermont, having an ESA provides steady companionship that relieves stress, lowers stress hormones, and fosters a calm home environment.",
        ],
        [
          "Promotes the Expression of Emotions",
          "Engaging with an ESA provides a safe space for residents to express their emotions, enhancing their overall emotional resilience and assisting them in processing sadness, frustration, or anxiety without passing judgment.",
        ],
        [
          "Supports Focus and Motivation",
          "Daily care routines and engagement with an ESA can boost focus, motivation, and productivity, helping Vermont residents maintain mental clarity while managing personal or professional responsibilities.",
        ],
      ],
      EMO_ICON,
    ),
    lawsTitle: "Vermont Housing Guidelines for Emotional Support Animals",
    lawsSubtitle:
      "Under the Fair Housing Act, landlords in Vermont are required to consider requests for reasonable accommodations for emotional support animals. These safeguards, which guarantee equitable housing opportunities for residents with documented needs, can be applied even in establishments with no-pet policies.",
    card1Title: "Federal Housing Guidelines",
    card1Items: [
      {
        title: "Accommodation Beyond Pet Policies",
        description:
          "Federal housing rules recognize emotional support animals as assistance animals rather than pets, meaning typical pet restrictions may not apply when a tenant presents valid ESA documentation.",
      },
      {
        title: "Individual Evaluation of Requests",
        description:
          "Housing providers are expected to review ESA accommodation requests individually. Decisions should rely on documentation and circumstances rather than policies that automatically deny assistance to animals.",
      },
      {
        title: "Privacy in the Verification Process",
        description:
          "While documentation may be requested, housing providers should avoid deep questions about medical history, respecting the resident's privacy while confirming the legitimacy of the ESA accommodation request.",
      },
    ],
    card2Title: "Housing Provider Roles & Responsibilities",
    card2Items: [
      {
        title: "Timely Response to Requests",
        description:
          "In order to avoid needless delays that might make it difficult for residents to maintain stable housing, property managers should respond to ESA accommodation requests within a suitable time frame.",
      },
      {
        title: "Identifying the Status of Assistance Animals",
        description:
          "In order to ensure that ESA requests are evaluated under accommodation policies rather than standard pet rules, housing providers must differentiate between emotional support animals and ordinary pets.",
      },
      {
        title: "Addressing Genuine Safety Concerns",
        description:
          "If an ESA poses documented safety or property risks, landlords may raise concerns; however, decisions must be based on specific evidence rather than guesswork regarding the type or size of the animal.",
      },
    ],
    legalNotice:
      "In Vermont, emotional support animals are generally permitted in housing accommodations under the Fair Housing Act as long as they have the relevant paperwork. However, ESAs usually do not have the same rights to public access as trained service animals under the Americans with Disabilities Act. Furthermore, many airlines consider emotional support animals to be regular pets and are not required by the Air Carrier Access Act to acknowledge them. It is advised to review airline policies before boarding the flight.",
    scamsTitle: "Truth vs. Myths About Emotional Support Animals in Vermont",
    scamsSubtitle:
      "Understanding the real guidelines for emotional support animals in Vermont can help people avoid common misconceptions. Knowing how ESA documentation works ensures that requests meet professional evaluation standards and housing accommodation requirements.",
    scamsWhatYouNeedTitle: "Required Details in Genuine ESA Documentation",
    scamsWhatYouNeedItems: [
      {
        title: "Professional Contact Information",
        description:
          "Authentic ESA documentation includes the clinician's full name, practice address, licensing jurisdiction, and contact information, allowing housing providers to verify the professional's credentials if necessary.",
      },
      {
        title: "Date of Issuance and Validity",
        description:
          "A genuine ESA letter Vermont clearly mentions when the document was issued, helping housing providers understand that the evaluation and recommendation are recent and professionally documented.",
      },
      {
        title: "Individualized Recommendation Statement",
        description:
          "The letter contains a statement from the clinician explaining that the emotional support animal is recommended as part of the individual's emotional wellness support plan and after a legitimate provider-patient therapeutic relationship is established.",
      },
    ],
    scamsCommonTitle: "Common ESA Scams to Watch For",
    scamsCommonSubtitle: "Be aware of platforms or services that:",
    scamsCommonItems: [
      "Claims there is an “official ESA registry” in Vermont.",
      "Offers instant ESA certificates, badges, or laminated ID cards.",
      "Promises approval without any mental health assessment.",
      "Does not connect you with a licensed mental health professional.",
      "Guarantees automatic approval for housing accommodations.",
    ],
    scamsAlertTitle: "Important: No Official ESA Certification or Database Exists",
    scamsAlertText:
      "There is no government-recognized ESA registry, certification, or mandatory identification system in Vermont or elsewhere in the United States. A licensed mental health professional can only issue valid ESA documentation after a thorough evaluation.",
    psdVsEsaTitle: "Psychiatric Service Dogs vs. Emotional Support Animals in Vermont",
    psdVsEsaSubtitle:
      "It's important to understand the differences between psychiatric service dogs (PSDs) and emotional support animals (ESAs) in Vermont. Although they both support people dealing with mental health issues, their specific tasks, training requirements, and legal protections are different.",
    esaCardBullets: [
      "Provide companionship and emotional support to individuals dealing with conditions such as anxiety, depression, PTSD, or other similar emotional or psychological challenges.",
      "No specialized task training is necessary for an ESA. Housing accommodations generally require a valid ESA letter issued by a licensed mental health professional in Vermont.",
      "Protected under the Fair Housing Act, which allows qualified individuals to keep their ESA even in housing communities that normally enforce strict no-pet policies.",
      "After housing accommodation is granted, tenants are typically not required to pay pet rent or extra pet security deposits for their emotional support animals.",
    ],
    psdCardBullets: [
      "Specially trained to carry out particular tasks that support individuals with psychiatric disabilities, such as interrupting panic episodes, grounding the handler, or reminding them to take medication.",
      "Recognized and protected under the Americans with Disabilities Act (ADA).",
      "Granted public access rights, allowing them to accompany their handler in restaurants, shops, workplaces, and other public places where pets are usually not permitted.",
    ],
    psdCalloutTitle: "Getting a Psychiatric Service Dog in Vermont",
    psdCalloutText:
      "In Vermont, a certified mental health professional's documentation confirming a psychiatric disability is typically required for anyone looking for a psychiatric service dog. The dog needs to be trained to carry out duties that directly improve the person's condition. Depending on how difficult the jobs are, training a PSD may take several months or more. According to the dog's ability level and the specific instruction needed, professional training programs can cost anywhere from $5,000 to $30,000.",
    citiesTitle: "Available Everywhere in Vermont",
    citiesSubtitle:
      "From vibrant towns near Lake Champlain to peaceful rural communities, Vermont offers a unique housing landscape across the state. Our secure telehealth platform helps eligible residents to access licensed ESA evaluations conveniently.",
    cities: cities([
      [
        "Burlington",
        "Vermont's largest city offers a mix of college life, waterfront neighborhoods, and urban housing. Eligible residents can get an ESA letter in Burlington through secure online telehealth evaluations.",
      ],
      [
        "South Burlington",
        "South Burlington provides suburban living with easy access to employment centers and local amenities. An ESA letter in South Burlington is available through convenient virtual appointments.",
      ],
      [
        "Montpelier",
        "As the nation's smallest state capital, Montpelier combines historic charm with a close-knit community. Eligible individuals can access an ESA letter in Montpelier through telehealth services.",
      ],
      [
        "Rutland",
        "Rutland serves as a regional hub for businesses, healthcare, and surrounding communities. An ESA letter in Rutland is available through our licensed online evaluations.",
      ],
      [
        "St. Albans",
        "St. Albans offers small-town living with access to northern Vermont's scenic landscapes. Eligible residents can obtain an ESA letter in St. Albans through secure telehealth appointments.",
      ],
      [
        "Brattleboro",
        "Known for its arts community and natural surroundings, Brattleboro attracts residents seeking a quieter lifestyle. An ESA letter in Brattleboro can be received online.",
      ],
      [
        "Bennington / Southern Vermont",
        "Southern Vermont communities offer historic neighborhoods and rural living options. Eligible individuals can access an ESA letter in Bennington through convenient telehealth evaluations.",
      ],
      [
        "All Other Vermont Cities",
        "Whether you're in Middlebury, Stowe, Barre, or another Vermont community, obtaining a Vermont ESA letter is simple through our statewide telehealth platform.",
      ],
    ]),
    faqTitle: "Frequently Asked Questions About ESA Letter in Vermont",
    faqSubtitle:
      "Get answers to all your queries regarding getting an emotional support animal letter in Vermont by looking at the most asked questions below!",
    faqs: [
      {
        q: "Do Vermont Housing Providers Have The Right To Verify An ESA Letter?",
        a: "Yes. A landlord may verify that the letter was issued by a licensed mental health professional, but they generally cannot request detailed medical records.",
      },
      {
        q: "Can Landlords Set Behavior Standards For Emotional Support Animals In Vermont?",
        a: "Probably. ESAs are expected to behave appropriately. Landlords may address issues such as excessive noise, property damage, or safety concerns.",
      },
      {
        q: "What is The Price Of An ESA Letter In Vermont?",
        a: "In Vermont, ESA letter pricing varies based on the provider and how detailed the mental health evaluation process is. At My ESA Therapist, the fee is $149, including the assessment and ESA letter upon approval.",
      },
      {
        q: "Are Exotic Animals Allowed As ESAs In Vermont Housing?",
        a: "Possibly, but housing providers may evaluate whether the animal is reasonable for the property and whether it could pose safety, health, or property risks.",
      },
      {
        q: "What Happens If An ESA Damages Property In A Vermont Rental?",
        a: "Tenants are generally responsible for any damage caused by their emotional support animal, just like they would be responsible for other damages in the rental unit.",
      },
      {
        q: "Can Housing Providers Request A New Vermont ESA Letter After Some Time?",
        a: "Some landlords may ask for updated documentation issued within the last 12 months if the existing ESA letter is outdated or if a new accommodation request is submitted.",
      },
    ],
    tableOfContents: [
      { id: "therapists", label: "Our Licensed Mental Health Professionals" },
      { id: "process", label: "How ESA Letter Process Works in Vermont?" },
      { id: "who-qualifies", label: "Who May Qualify for an ESA Letter in Vermont?" },
      { id: "why-choose", label: "Why Choose My ESA Therapist for ESA Letter Evaluation in Vermont?" },
      { id: "reviews", label: "See What Our Clients Say" },
      { id: "benefits", label: "Benefits of Having an ESA Letter in Vermont" },
      { id: "laws", label: "Vermont Housing Guidelines for Emotional Support Animals" },
      { id: "scams", label: "Truth vs. Myths About Emotional Support Animals in Vermont" },
      { id: "psd-vs-esa", label: "Psychiatric Service Dogs vs. Emotional Support Animals in Vermont" },
      { id: "available-cities", label: "Available Everywhere in Vermont" },
      { id: "faq", label: "Frequently Asked Questions About ESA Letter in Vermont" },
    ],
  },
  tennessee: {
    slug: "tennessee",
    name: "Tennessee",
    abbreviation: "TN",
    metaTitle: "ESA Letter Evaluations by Tennessee Licensed Therapists | My ESA Therapist",
    metaDescription:
      "Connect with licensed mental health professionals in Tennessee for personalized emotional wellness evaluations. Schedule an appointment with a licensed clinician who will thoroughly examine your situation and guide you through a safe, organized emotional support animal evaluation process.",
    heroTitle: "ESA Letter Evaluations\nby Tennessee Licensed Therapists",
    heroSubtitle:
      "Connect with licensed mental health professionals in Tennessee for personalized emotional wellness evaluations. Schedule an appointment with a licensed clinician who will thoroughly examine your situation and guide you through a safe, organized emotional support animal evaluation process.",
    ...SHARED,
    whyChooseTitle: "Why Choose My ESA Therapist for ESA Letter Evaluation in Tennessee?",
    whyChooseSubtitle:
      "We simplify online emotional support animal evaluations in Tennessee while maintaining efficiency and legal compliance. Here's what makes us different from other providers.",
    whyChooseItems: whyChoose("Clear steps, clear expectations, and no misleading claims."),
    processTitle: "How ESA Letter Process Works in Tennessee?",
    processSubtitle:
      "Tennessee residents can undergo an emotional support animal assessment via a mental health professional who holds a state license. From the first consultation to the final documents, the entire process is set up to be simple, private, and professionally directed.",
    processSteps: steps([
      [
        "Schedule an Evaluation",
        "Select a time that works for you to speak with a clinician licensed in Tennessee. Your session focuses on your unique mental health requirements and is held over a safe, private platform.",
      ],
      [
        "Complete Your Evaluation",
        "The provider thoroughly examines your past mental health history, current symptoms, and treatment goals during a private phone or video appointment. Determining whether an emotional support animal could provide significant therapeutic assistance is made easier by this conversation.",
      ],
      [
        "Clinical Determination",
        "A signed ESA letter is safely issued in accordance with federal housing requirements and professional standards if the therapist determines that an ESA is clinically acceptable.",
      ],
    ]),
    processDifferentiatorsTitle: "What Sets Our Tennessee ESA Letter Process Apart?",
    processDifferentiators: [
      "No instant approvals or generic, pre-filled ESA templates.",
      "Secure telehealth sessions conducted in compliance with state and federal privacy requirements.",
      "HIPAA-compliant technology used to safeguard your confidential health information.",
      "Evaluations completed by Tennessee-licensed mental health professionals.",
      "ESA documentation is provided only after an individualized, independent clinical assessment.",
    ],
    whoQualifiesTitle: "Who May Be Eligible for an ESA Letter Tennessee?",
    whoQualifiesSubtitle:
      "If psychological or emotional issues are seriously impairing daily responsibilities, focus, or general stability, Tennessee residents who are thinking about getting an emotional support animal need to first complete a professional mental health evaluation. Conditions commonly evaluated may include, but are not limited to:",
    whoQualifiesSectionHeading: "Qualifying Conditions",
    whoQualifiesConditions: conditions([
      ["Generalized Anxiety Disorder (GAD)", "Ongoing and excessive worry that disrupts sleep and daily decision-making."],
      ["Major Depressive Disorder (MDD)", "Persistent low mood or emotional withdrawal that interferes with routine functioning."],
      ["Post-Traumatic Stress Disorder (PTSD)", "Recurrent intrusive memories or emotional detachment impacting everyday life."],
      ["Panic Disorder", "Repeated panic attacks and anxiety that restrict mobility or social engagement."],
    ]),
    requirementsTitle: "Basic Requirements for an ESA Letter in Tennessee",
    requirementsIntro: "To be considered for an ESA letter Tennessee, several essential requirements must be satisfied:",
    requirementsItems: [
      "The applicant must be at least 18 years old. Individuals under 18 require verified consent from a parent or legal guardian.",
      "A comprehensive clinical evaluation must be completed by a mental health professional licensed to practice in Tennessee.",
      "The diagnosed emotional or psychological condition must substantially limit one or more major areas of daily living, such as employment, academics, or personal care.",
      "The clinician must assess whether the emotional support animal provides therapeutic value specific to the individual's condition.",
      "Note: The applicant must currently live in Tennessee or intend to establish residency there.",
    ],
    requirementsNote:
      "Important: Tennessee requires a comprehensive, individual evaluation by a state-licensed mental health practitioner before issuing ESA documentation. HUD's May 22, 2026, enforcement guidance also provides updated direction on certain animal-related reasonable accommodation complaints under the Fair Housing Act. This guidance does not amend the Fair Housing Act or determine ESA eligibility.",
    benefitsTitle: "Benefits of Having an ESA Letter in Tennessee",
    benefitsSubtitle:
      "Look at how an ESA letter Tennessee could support your well-being and make your daily routine with your emotional support animal manageable.",
    financialBenefitsHeading: "Financial Benefits",
    financialBenefits: benefits(
      [
        [
          "Relief from Pet Deposits and Monthly Pet Fees",
          "Qualifying individuals in Tennessee who have appropriate ESA documents are often exempt from paying pet deposits, monthly pet rent, or other fees associated with sheltering animals in approved properties.",
        ],
        [
          "Greater Access to Housing Options",
          "In housing developments with no-pet rules, people may be able to obtain reasonable accommodations with an ESA letter. By avoiding expensive “pet-friendly” apartments or the need for repeated applications and moving expenses, this increased access might ease the financial burden of having few rental options.",
        ],
        [
          "Reduced Indirect Mental Health Expenses",
          "Improved stability and daily functioning may result from an ESA's consistent emotional support. The additional support can help reduce stress-related disruptions, which may indirectly minimize expenses connected with crisis circumstances, lost work, or emergency arrangements, even though it is not a substitute for therapy.",
        ],
      ],
      FIN_ICON,
    ),
    emotionalBenefitsHeading: "Mental and Emotional Support",
    emotionalBenefits: benefits(
      [
        [
          "Reduced Feelings of Isolation & Loneliness",
          "Daily companionship from an emotional support animal can help many people in Tennessee feel less alone. Particularly during times of emotional distress, the consistent presence of an ESA could encourage a greater sense of connection and assurance, making people feel less alone in facing challenges.",
        ],
        [
          "Support During Anxiety or High-Stress Situations",
          "In times of stress or anxiety, an emotional support animal can offer reassuring comfort. Many people in Tennessee discover that regular connection, company, and physical presence help to soothe heightened emotions. This helps them focus better, regulate nervous thoughts, and confidently handle daily duties.",
        ],
        [
          "Encouragement of Healthy Emotional Routines",
          "Taking care of an ESA encourages regular daily routines like feeding, walking, and spending time together. For people in Tennessee trying to maintain healthy mental well-being, these routines can promote structure and responsibility, which may have a favorable impact on motivation, emotional resilience, and mood stability.",
        ],
      ],
      EMO_ICON,
    ),
    lawsTitle: "Housing Rights for Emotional Support Animals in Tennessee",
    lawsSubtitle:
      "In Tennessee, emotional support animal housing accommodations are recognized under the Fair Housing Act, requiring landlords to provide reasonable accommodations for qualifying tenants.",
    card1Title: "Federal Housing Guidelines",
    card1Items: [
      {
        title: "Reasonable Accommodation Requirement",
        description:
          "Housing providers in Tennessee are required by the Fair Housing Act to make reasonable accommodations for people with qualifying disabilities. This includes allowing an emotional support animal where the request is supported by the appropriate paperwork, even in locations with pet restrictions.",
      },
      {
        title: "Protection from Disability-Based Discrimination",
        description:
          "According to federal guidelines published by the U.S. Department of Housing and Urban Development, a tenant's need for an emotional support animal does not give landlords the right to refuse housing, impose breed or size limitations, or charge pet fees.",
      },
      {
        title: "Additional Safeguards in Federally Assisted Housing",
        description:
          "The Rehabilitation Act's Section 504, which forbids discrimination based on disability and emphasizes the need to fairly and individually assess ESA accommodation requests, must also be followed by properties that receive federal financial aid.",
      },
    ],
    card2Title: "Housing Provider Roles & Responsibilities",
    card2Items: [
      {
        title: "Timely Review of ESA Requests",
        description:
          "Tennessee housing providers are required to respond to Fair Housing Act accommodation requests in a timely manner. Without excessive delays, each request should be considered separately to make sure that federal housing requirements are met.",
      },
      {
        title: "Verification of Reliable Documentation",
        description:
          "Landlords might ask for the proper paperwork attesting to a qualifying need for an emotional support animal due to a handicap. U.S. Department of Housing and Urban Development guidance allows verification but forbids excessive or invasive information requests.",
      },
      {
        title: "Compliance Without Unlawful Conditions",
        description:
          "Unless the animal directly threatens people or seriously damages property, housing providers are required to make reasonable accommodation. They may not impose pet deposits, breed restrictions, or additional conditions inconsistent with federal disability housing standards.",
      },
    ],
    legalNotice:
      "As a reasonable accommodation for people with qualifying disabilities, emotional support animals are allowed in homes in Tennessee under the Fair Housing Act. ESAs are typically not allowed in restaurants, retail establishments, and other public spaces where dogs are prohibited since the Americans with Disabilities Act does not acknowledge them as service animals. Airlines that serve Tennessee airports are relieved from the requirement to register emotional support animals as service animals after the 2021 amendments to the Air Carrier Access Act. Travelers should verify individual airline policies before making flight arrangements.",
    scamsTitle: "ESA Letters in Tennessee: Facts vs. Common Misconceptions",
    scamsSubtitle:
      "Understanding how emotional support animal (ESA) rules operate under federal regulations can help citizens of Tennessee safeguard themselves against misleading promises and untrustworthy online businesses. Understanding the appropriate legal framework makes it easier to guarantee that documentation complies with the Fair Housing Act's housing standards.",
    scamsWhatYouNeedTitle: "What You Actually Need",
    scamsWhatYouNeedItems: [
      {
        title: "Evaluation by a Licensed Mental Health Professional",
        description:
          "In order to decide if a mental or emotional health condition significantly limits major life activities and supports the requirement for an ESA, a qualified provider licensed to practice in Tennessee has to carry out a clinical assessment.",
      },
      {
        title: "Legitimate Therapeutic Relationship",
        description:
          "After a legitimate provider-client relationship has been established, the ESA letter must be issued, guaranteeing that the recommendation has been established on a personalized assessment rather than a quick or automated screening procedure.",
      },
      {
        title: "Documentation Consistent with Federal Housing Standards",
        description:
          "The letter has to meet the Fair Housing Act's requirements, clearly attesting to the emotional support animal's disability-related necessity for housing accommodations.",
      },
    ],
    scamsCommonTitle: "Common ESA Scams to Watch For",
    scamsCommonSubtitle: "Be aware of platforms or services that:",
    scamsCommonItems: [
      "Claim your ESA must be “officially registered” in a Tennessee database or suggest state certification is legally required.",
      "Sell ID cards, vests, tags, or certificates as mandatory proof of ESA status.",
      "Promise instant or same-day approval without a proper clinical evaluation by a licensed Tennessee provider.",
      "Issue ESA letters without first establishing a legitimate provider-client relationship.",
      "Guarantee automatic landlord approval without an individualized assessment under federal housing guidelines.",
    ],
    scamsAlertTitle: "Important Notice: No Government-Recognized ESA Registry Exists",
    scamsAlertText:
      "There is no official database for emotional support animals maintained by any federal body, and Tennessee does not have a state-approved ESA registry. Legally binding paperwork is not offered by websites that sell identification cards, printed certificates, “registrations,” or guarantee immediate approval. After completing a thorough clinical evaluation, a certified mental health professional who is permitted to operate in Tennessee must provide a valid ESA letter. The documentation has to be in compliance with the Fair Housing Act and other federal housing regulations.",
    psdVsEsaTitle: "Psychiatric Service Dogs vs. Emotional Support Animals in Tennessee",
    psdVsEsaSubtitle:
      "It's critical to fully understand the differences between emotional support animals (ESAs) and psychiatric service dogs (PSDs) in Tennessee. Although both might help people deal with mental health issues, there are substantial differences in their legal recognition, training requirements, and access rights.",
    esaCardBullets: [
      "Provide comfort and emotional support to individuals experiencing anxiety, depression, PTSD, or related conditions.",
      "Are not required to complete specialized task-based training.",
      "Must be supported by a valid ESA letter issued by a licensed Tennessee mental health professional for housing purposes.",
      "Are protected under the Fair Housing Act, allowing qualified tenants to request reasonable housing accommodations.",
      "Do not receive public access rights beyond housing.",
    ],
    psdCardBullets: [
      "Are individually trained to perform specific tasks directly related to a psychiatric disability, such as interrupting panic attacks or providing grounding support during dissociative episodes.",
      "Are protected under the Americans with Disabilities Act.",
      "Are granted public access rights, permitting entry into workplaces, restaurants, stores, and other public spaces where pets are typically restricted.",
    ],
    psdCalloutTitle: "Getting a Psychiatric Service Dog in Tennessee",
    psdCalloutText:
      "In Tennessee, a person must have a diagnosed mental illness and a dog that has been taught to carry out actions that directly relieve associated symptoms in order to be eligible for a PSD. Training is organized, strict, and frequently lasts for several months. Depending on the trainer and the difficulty of the activity, costs can vary significantly. Psychiatric service dogs are legally entitled to full public access protections when trained in compliance with ADA requirements.",
    citiesTitle: "Available Everywhere in Tennessee",
    citiesSubtitle:
      "From vibrant music cities to scenic mountain communities, Tennessee offers diverse housing options across the state. Our secure telehealth platform makes licensed ESA evaluations accessible to eligible residents statewide.",
    cities: cities([
      [
        "Nashville",
        "Nashville's booming population and competitive housing market continue attracting new residents. Eligible individuals can obtain an ESA letter in Nashville through secure online telehealth evaluations.",
      ],
      [
        "Memphis",
        "Known for its rich musical heritage, Memphis offers diverse neighborhoods and housing opportunities. An ESA letter in Memphis is available through licensed telehealth providers for eligible residents.",
      ],
      [
        "Knoxville",
        "Nestled near the Great Smoky Mountains, Knoxville blends university life with a growing residential community. Eligible residents can access an ESA letter in Knoxville through online evaluations.",
      ],
      [
        "Chattanooga",
        "Chattanooga's downtown and outdoor lifestyle has encouraged consistent residential growth. An ESA letter in Chattanooga can be accessed through our 100% safe and secure platform.",
      ],
      [
        "Clarksville",
        "Clarksville's military presence and expanding neighborhoods continue driving housing demand. Eligible individuals can obtain an ESA letter in Clarksville through convenient telehealth services.",
      ],
      [
        "Murfreesboro",
        "One of Tennessee's fastest-growing cities, Murfreesboro offers modern neighborhoods and a thriving university community. An ESA letter in Murfreesboro is available online.",
      ],
      [
        "Johnson City / Tri-Cities",
        "Residents across the Tri-Cities region can conveniently access professional evaluations from home. An ESA letter in Johnson City is available through secure telehealth appointments.",
      ],
      [
        "All Other Tennessee Cities",
        "Whether you're in Franklin, Jackson, Cookeville, Kingsport, or another community, getting a Tennessee ESA letter is simple through our statewide telehealth platform.",
      ],
    ]),
    faqTitle: "Frequently Asked Questions About ESA Letter in Tennessee",
    faqSubtitle: "Relax while we walk you through everything you need to know about ESA letters in Tennessee.",
    faqs: [
      {
        q: "Can A Landlord In Tennessee Ask For A New ESA Letter Every Year?",
        a: "Housing providers may request updated documentation issued within the last 12 months if the disability-related need is not obvious, but repeated or excessive demands may conflict with the Fair Housing Act.",
      },
      {
        q: "Does An ESA Letter Automatically Transfer If I Move To A Different City In Tennessee?",
        a: "Yes. Since ESA protections are federal, a valid letter from a Tennessee-licensed provider generally applies statewide, from small towns to major metro areas.",
      },
      {
        q: "What Does It Typically Cost To Get An ESA Letter In Tennessee?",
        a: "In Tennessee, ESA letter pricing depends on the provider and how the evaluation is conducted, with legitimate services focusing on a licensed mental health assessment. At My ESA Therapist, the fee is $149, which includes the evaluation and ESA letter upon approval.",
      },
      {
        q: "Can Roommates Object To An ESA In Shared Housing?",
        a: "Landlords must balance accommodation requests with other tenants' rights, including documented allergies or medical conditions, through an individualized review process.",
      },
      {
        q: "Can A Tennessee Landlord Limit The Type Of Animal Approved As An ESA?",
        a: "No. Although dogs and cats are common, other domesticated animals may qualify if the accommodation is reasonable and properly supported by documentation.",
      },
      {
        q: "Can An Employer In Tennessee Require Proof Of My ESA Letter?",
        a: "Workplace accommodations differ from housing rules. ESAs are not automatically permitted at work under the Americans with Disabilities Act, and approval depends on employer policies and disability accommodation procedures.",
      },
    ],
    tableOfContents: [
      { id: "therapists", label: "Our Licensed Mental Health Professionals" },
      { id: "process", label: "How ESA Letter Process Works in Tennessee?" },
      { id: "who-qualifies", label: "Who May Be Eligible for an ESA Letter Tennessee?" },
      { id: "why-choose", label: "Why Choose My ESA Therapist for ESA Letter Evaluation in Tennessee?" },
      { id: "reviews", label: "See What Our Clients Say" },
      { id: "benefits", label: "Benefits of Having an ESA Letter in Tennessee" },
      { id: "laws", label: "Housing Rights for Emotional Support Animals in Tennessee" },
      { id: "scams", label: "ESA Letters in Tennessee: Facts vs. Common Misconceptions" },
      { id: "psd-vs-esa", label: "Psychiatric Service Dogs vs. Emotional Support Animals in Tennessee" },
      { id: "available-cities", label: "Available Everywhere in Tennessee" },
      { id: "faq", label: "Frequently Asked Questions About ESA Letter in Tennessee" },
    ],
  },
  "rhode-island": {
    slug: "rhode-island",
    name: "Rhode Island",
    abbreviation: "RI",
    metaTitle: "ESA Letter Evaluations by Rhode Island Licensed Therapist | My ESA Therapist",
    metaDescription:
      "Get in touch with licensed mental health professionals in Rhode Island for a personalized wellness checkup. Talk to a state-licensed therapist who will carefully look at your situation and guide you through a private emotional support animal (ESA) qualification process that is specific to your needs.",
    heroTitle: "ESA Letter Evaluations\nby Rhode Island Licensed Therapist",
    heroSubtitle:
      "Get in touch with licensed mental health professionals in Rhode Island for a personalized wellness checkup. Talk to a state-licensed therapist who will carefully look at your situation and guide you through a private emotional support animal (ESA) qualification process that is specific to your needs.",
    ...SHARED,
    whyChooseTitle: "Why Choose My ESA Therapist for ESA Letter Evaluation in Rhode Island?",
    whyChooseSubtitle:
      "We simplify online emotional support animal evaluations in Rhode Island while maintaining efficiency and legal compliance. Here's what makes us different from other providers.",
    whyChooseItems: whyChoose("Clear steps, clear expectations, no misleading claims."),
    processTitle: "How ESA Letter Process Works in Rhode Island?",
    processSubtitle:
      "We help Rhode Island residents connect with licensed mental health professionals for personalized emotional wellness assessments.",
    processSteps: steps([
      [
        "Schedule an Evaluation",
        "Choose a suitable time to speak with a licensed clinician licensed to practice in Rhode Island. Quick & Easy Scheduling",
      ],
      [
        "Complete Your Evaluation",
        "Join a private consultation through a secure phone or video. During the session, the clinician reviews your mental health background and current concerns to evaluate whether an emotional support animal may provide support.",
      ],
      [
        "Clinical Determination",
        "Following the assessment, the licensed professional makes an independent clinical determination. If approved, your Rhode Island ESA letter will be sent to you securely via email.",
      ],
    ]),
    processDifferentiatorsTitle: "Why Rhode Island Residents Trust Our ESA Letter Process?",
    processDifferentiators: [
      "No promises of instant or guaranteed ESA approvals.",
      "Evaluations performed by licensed Rhode Island mental health professionals.",
      "Secure telehealth platform ensuring full HIPAA-compliant privacy.",
      "ESA letters issued only when a clinician confirms a legitimate clinical need.",
    ],
    whoQualifiesTitle: "Who Can Qualify for an ESA Letter Rhode Island?",
    whoQualifiesSubtitle:
      "All consultations are conducted through secure telehealth systems that follow HIPAA rules to keep everything private. During the assessment, a licensed mental health professional examines things that could affect daily life and overall health. Some examples of these are:",
    whoQualifiesConditions: conditions([
      ["Cyclothymic Disorder", "Mild mood swings between highs and lows."],
      ["Selective Mutism", "Inability to speak in certain social settings."],
      ["Depersonalization/Derealization Disorder", "Feeling detached from self or surroundings."],
      ["Adjustment Disorder with Anxiety", "Stress-related anxiety after major life changes."],
    ]),
    whoQualifiesNote: "Note: Having any of the conditions listed above does not automatically make someone eligible for an ESA.",
    requirementsTitle: "Basic Requirements for ESA Letter Rhode Island",
    requirementsIntro:
      "The ESA evaluation process in Rhode Island requires certain criteria to be met before an official letter can be issued.",
    requirementsItems: [
      "The individual is typically 18 years or older or a minor with parent/guardian consent.",
      "A mental or emotional health condition is identified during the clinical assessment.",
      "The symptoms significantly affect daily life or overall functioning.",
      "The clinician determines whether an emotional support animal may provide therapeutic benefit.",
      "The individual lives in Rhode Island or plans to move to the state.",
    ],
    requirementsNote:
      "Important: A licensed mental health professional in Rhode Island must complete a formal evaluation to decide whether issuing an ESA letter is suitable based on the person's specific circumstances. HUD's May 22, 2026, enforcement guidance also provides updated direction on certain animal-related reasonable accommodation complaints under the Fair Housing Act. This guidance does not amend the Fair Housing Act or determine ESA eligibility.",
    benefitsTitle: "Benefits of Having an ESA Letter Rhode Island",
    benefitsSubtitle:
      "Check out how an emotional support animal letter in Rhode Island can help people with mental health problems live happier and more confident lives with their ESA.",
    financialBenefitsHeading: "Financial Benefits",
    financialBenefits: benefits(
      [
        [
          "Avoiding Pet-Related Restrictions",
          "An ESA letter can help Rhode Island tenants request housing accommodations, allowing them to live with their support animal even in properties that normally enforce strict no-pet policies.",
        ],
        [
          "Reduced Relocation Expenses",
          "With proper ESA documentation, tenants may avoid frequent moves caused by pet restrictions, saving money on deposits, moving services, application fees, and temporary housing arrangements.",
        ],
        [
          "Protection From Extra Housing Charges",
          "ESA recognition in housing settings may help residents avoid recurring pet-related surcharges, helping maintain more predictable monthly housing costs while keeping their emotional support companions.",
        ],
      ],
      FIN_ICON,
    ),
    emotionalBenefitsHeading: "Mental and Emotional Support",
    emotionalBenefits: benefits(
      [
        [
          "Greater Emotional Stability During Daily Stress",
          "Living with an emotional support animal can provide steady comfort during stressful routines, helping individuals in Rhode Island maintain emotional balance and feel less isolated at home.",
        ],
        [
          "Improved Motivation for Daily Routines",
          "Caring for an ESA often encourages consistent routines like feeding, walking, and engagement, which can gently motivate individuals experiencing mental health challenges to stay active.",
        ],
        [
          "Enhanced Sense of Security at Home",
          "For many individuals, the presence of an emotional support animal creates a calming home environment, offering reassurance during anxious moments and promoting a stronger feeling of safety.",
        ],
      ],
      EMO_ICON,
    ),
    lawsTitle: "ESA Housing Laws in Rhode Island",
    lawsSubtitle:
      "In Rhode Island, housing rights for emotional support animals are primarily governed by the federal Fair Housing Act. This legislation helps individuals with qualifying disabilities request reasonable accommodations in housing, allowing them to live with an emotional support animal without facing unfair housing discrimination.",
    card1Title: "Federal Housing Guidelines",
    card1Items: [
      {
        title: "Reasonable Housing Accommodation",
        description:
          "Under the Fair Housing Act, tenants with a verified need for an emotional support animal may request housing accommodations even in properties that normally restrict animals.",
      },
      {
        title: "Non-Pet Classification in Housing",
        description:
          "Federal guidance generally treats emotional support animals differently from regular pets when a valid ESA letter is presented during the housing accommodation process.",
      },
      {
        title: "Individual Request Evaluation",
        description:
          "Housing providers are expected to evaluate ESA accommodation requests on a case-by-case basis rather than applying blanket pet rules or restrictions.",
      },
    ],
    card2Title: "Housing Provider Roles & Responsibilities",
    card2Items: [
      {
        title: "Verification of Professional Documentation",
        description:
          "Property managers may examine the ESA letter to confirm that it was issued by a licensed mental health professional and contains legitimate provider credentials.",
      },
      {
        title: "Maintaining Property Standards",
        description:
          "Landlords may continue enforcing general property rules related to noise, sanitation, and responsible animal care as long as they do not conflict with approved accommodations.",
      },
      {
        title: "Addressing Safety or Damage Issues",
        description:
          "Housing providers may act if an animal creates a clear safety concern or causes serious property damage, consistent with fair housing guidelines.",
      },
    ],
    legalNotice:
      "Emotional support animals mainly receive housing considerations under the Fair Housing Act and do not share the same public access privileges as service animals. Access to restaurants, stores, and airlines depends on separate policies and regulations.",
    scamsTitle: "ESA Letter Rhode Island : Fake vs Reality",
    scamsSubtitle: "Understanding what is and is not required can help individuals avoid misleading services and unnecessary expenses.",
    scamsWhatYouNeedTitle: "What You Actually Need",
    scamsWhatYouNeedItems: [
      {
        title: "Licensed Professional Details",
        description:
          "A credible ESA letter normally lists the mental health provider's full name, professional title, license number, and confirmation that they are authorized to practice in Rhode Island.",
      },
      {
        title: "Statement of Clinical Evaluation",
        description:
          "The document should mention that the individual completed a mental health assessment and that the clinician determined an emotional support animal may assist their psychological or emotional health.",
      },
      {
        title: "Issue Date and Provider Authorization",
        description:
          "An authentic ESA letter typically shows the preparation date and the clinician's verified signature, often displayed on the provider's professional letterhead to strengthen authenticity and reliability.",
      },
    ],
    scamsCommonTitle: "Common ESA Scams",
    scamsCommonSubtitle: "Residents should watch out for online services that:",
    scamsCommonItems: [
      "Suggest there is an official ESA database or registration system in Rhode Island.",
      "Offer quick ESA certificates, ID badges, or pre-made identification cards for purchase.",
      "Approve ESA letters instantly without a legitimate clinical assessment.",
      "Do not connect applicants with a licensed mental health professional practicing in Rhode Island.",
      "Claim guaranteed approval for ESA housing accommodation requests regardless of evaluation results.",
    ],
    scamsAlertTitle: "Important: ESA Registries Are Not Official",
    scamsAlertText:
      "There is no government-approved ESA registration database, ID card, or certification program in Rhode Island or anywhere else in the United States. A legitimate ESA letter must come from a licensed mental health professional following a proper mental health evaluation.",
    psdVsEsaTitle: "Psychiatric Service Dogs vs. Emotional Support Animals in Rhode Island",
    psdVsEsaSubtitle:
      "In Rhode Island, it's important to know the difference between psychiatric service dogs (PSDs) and emotional support animals (ESAs). Even though both help people with mental health issues, their jobs, training requirements, and legal protections are different.",
    esaCardBullets: [
      "Provide comfort, companionship, and emotional reassurance to individuals experiencing psychological or emotional challenges.",
      "No specialized task training required; a valid ESA letter from a licensed mental health professional is typically needed for housing accommodation requests.",
      "Housing rights for ESAs are primarily supported under the Fair Housing Act.",
      "Approved housing accommodations commonly allow tenants to keep their ESA without additional pet rent or pet security deposits.",
    ],
    psdCardBullets: [
      "Specially trained dogs that perform tasks assisting individuals living with psychiatric disabilities.",
      "Recognized and protected under the Americans with Disabilities Act.",
      "Allowed public access in many places such as restaurants, stores, workplaces, and other public environments where service animals are permitted.",
    ],
    psdCalloutTitle: "Getting a Psychiatric Service Dog in Rhode Island",
    psdCalloutText:
      "To get a psychiatric service dog (PSD) in Rhode Island, people usually need proof of a diagnosed mental illness and their dog must go through special training. The training process can take anywhere from a few months to more than a year, depending on how hard the tasks are. The cost of professional service dog training programs can range from $5,000 to $30,000, depending on how much training and task specialization are needed. The Americans with Disabilities Act recognizes PSD public access rights, and documentation may be needed when asking for housing or workplace accommodations.",
    citiesTitle: "Available Everywhere in Rhode Island",
    citiesSubtitle:
      "Though it's the smallest state in the U.S., Rhode Island offers a mix of vibrant cities, coastal communities, and historic towns. Our secure telehealth platform makes licensed ESA evaluations accessible statewide.",
    cities: cities([
      [
        "Providence",
        "Providence combines historic neighborhoods, universities, and a busy rental market. Eligible residents can obtain an ESA letter in Providence through secure online telehealth evaluations.",
      ],
      [
        "Warwick",
        "Warwick offers suburban neighborhoods, waterfront living, and convenient access to Providence. An ESA letter in Warwick is available through licensed telehealth providers for eligible residents.",
      ],
      [
        "Cranston",
        "Known for its family-friendly neighborhoods, Cranston continues to attract homeowners and renters alike. Eligible individuals can get an ESA letter in Cranston through virtual evaluations.",
      ],
      [
        "Pawtucket",
        "Pawtucket's revitalized neighborhoods and growing residential communities offer diverse housing opportunities. An ESA letter in Pawtucket is available through online telehealth services.",
      ],
      [
        "East Providence",
        "East Providence provides easy access to downtown Providence while maintaining its own welcoming neighborhoods. Eligible residents can get an ESA letter in East Providence online.",
      ],
      [
        "Newport",
        "Famous for its coastal scenery and historic charm, Newport attracts year-round residents and seasonal renters. An ESA letter in Newport is available through secure telehealth appointments.",
      ],
      [
        "South County / Westerly",
        "South County communities offer coastal living with smaller residential neighborhoods. Eligible individuals can obtain an ESA letter in Westerly through convenient online evaluations.",
      ],
      [
        "All Other Rhode Island Cities & Towns",
        "Whether you're in Woonsocket, Bristol, Coventry, or another community, obtaining a Rhode Island ESA letter is simple through our statewide telehealth platform.",
      ],
    ]),
    faqTitle: "Frequently Asked Questions About ESA Letters in Rhode Island",
    faqSubtitle: "Get answers to all your queries regarding emotional support animal letters in Rhode Island!",
    faqs: [
      {
        q: "Can A Landlord In Rhode Island Ask For Additional Verification Of My ESA Letter?",
        a: "Yes. A housing provider may review the letter to confirm it was issued by a licensed mental health professional and that it supports a legitimate accommodation request.",
      },
      {
        q: "Does an ESA Letter in Rhode Island Expire After a Certain Period?",
        a: "Rhode Island ESA letters do not always have a fixed expiration date, but many housing providers prefer documentation that has been issued within the past year to confirm the most updated need for an emotional support animal.",
      },
      {
        q: "What is the Cost of an ESA Letter in Rhode Island?",
        a: "In Rhode Island, ESA letter costs depend on the provider and consultation process, with pricing reflecting the credibility and depth of the licensed evaluation. At My ESA Therapist, the fee is $149, including the assessment and ESA letter upon approval.",
      },
      {
        q: "Can More Than One Emotional Support Animal Be Approved For A Household?",
        a: "In some cases, more than one ESA may be considered if a Rhode Island-licensed mental health professional determines that multiple animals are part of the individual's support needs.",
      },
      {
        q: "Is A Digital ESA Letter Acceptable For Housing Requests?",
        a: "Many housing providers accept digital or electronically signed ESA letters, provided the document contains the clinician's credentials and contact information.",
      },
      {
        q: "What Should I Do If My ESA Accommodation Request Is Denied?",
        a: "If a request is denied, individuals may ask the housing provider for clarification, review their documentation, or explore guidance related to the Fair Housing Act.",
      },
    ],
    tableOfContents: [
      { id: "therapists", label: "Our Licensed Mental Health Professionals" },
      { id: "process", label: "How ESA Letter Process Works in Rhode Island?" },
      { id: "who-qualifies", label: "Who Can Qualify for an ESA Letter Rhode Island?" },
      { id: "why-choose", label: "Why Choose My ESA Therapist for ESA Letter Evaluation in Rhode Island?" },
      { id: "reviews", label: "See What Our Clients Say" },
      { id: "benefits", label: "Benefits of Having an ESA Letter Rhode Island" },
      { id: "laws", label: "ESA Housing Laws in Rhode Island" },
      { id: "scams", label: "ESA Letter Rhode Island : Fake vs Reality" },
      { id: "psd-vs-esa", label: "Psychiatric Service Dogs vs. Emotional Support Animals in Rhode Island" },
      { id: "available-cities", label: "Available Everywhere in Rhode Island" },
      { id: "faq", label: "Frequently Asked Questions About ESA Letters in Rhode Island" },
    ],
  },
  "washington-dc": {
    slug: "washington-dc",
    name: "Washington, DC",
    abbreviation: "DC",
    metaTitle: "ESA Letter Evaluations in the District of Columbia by Licensed Mental Health Experts | My ESA Therapist",
    metaDescription:
      "Connect with licensed mental health professionals in the District of Columbia for ESA letter evaluations. ESA documentation is provided when clinically appropriate and in line with federal housing guidelines.",
    residentsServed: "8,392+",
    heroTitle: "ESA Letter Evaluations\nin the District of Columbia\nby Licensed Mental Health Experts",
    heroSubtitle:
      "Connect with licensed mental health professionals in the District of Columbia for ESA letter evaluations. ESA documentation is provided when clinically appropriate and in line with federal housing guidelines.",
    therapistsTitle: SHARED.therapistsTitle,
    therapistsSubtitle: SHARED.therapistsSubtitle,
    therapistsLicensureNote: SHARED.therapistsLicensureNote,
    therapistsList: SHARED.therapistsList,
    benefitsRefundNote: "",
    processTitle: "How Does the ESA Letter Process Work in the District of Columbia?",
    processSubtitle:
      "We connect Washington, DC residents with licensed mental health professionals for personalized emotional wellness assessments.",
    processSteps: steps([
      [
        "Schedule an Evaluation",
        "Choose a convenient time to speak with a licensed mental health professional authorized to practice in the District of Columbia.",
      ],
      [
        "Complete Your Evaluation",
        "Join a confidential session via secure phone or video call. During the consultation, the clinician will assess your mental health history and current emotional concerns to determine whether an emotional support animal would be beneficial.",
      ],
      [
        "Clinical Determination",
        "Following the evaluation, the licensed professional renders an independent decision. If appropriate, your ESA letter will be delivered to you via secure email.",
      ],
    ]),
    processDifferentiatorsTitle: "Why District of Columbia Residents Choose Our ESA Letter Process",
    processDifferentiators: [
      "No promises of instant approvals or guaranteed ESA letters.",
      "Evaluations conducted by mental health professionals licensed to practice in the District of Columbia.",
      "Secure telehealth consultations designed to protect patient privacy and support HIPAA compliance.",
      "ESA documentation provided only when supported by an independent clinical assessment.",
    ],
    whoQualifiesTitle: "Who Can Qualify for an ESA Letter in the District of Columbia?",
    whoQualifiesSubtitle:
      "A Washington, DC-licensed mental health professional conducts an individualized evaluation through our secure, HIPAA-compliant telehealth platform. The assessment considers your mental health symptoms, their impact on daily activities, and whether an emotional support animal may provide disability-related support. Relevant conditions may include, but are not limited to:",
    whoQualifiesConditions: conditions([
      ["Adjustment Disorder", "Stress-related symptoms may interfere with daily life and functioning."],
      ["Seasonal Affective Disorder (SAD)", "Seasonal mood changes may affect energy, sleep, and motivation."],
      ["Social Anxiety Disorder", "Fear of social situations may disrupt daily interactions."],
      ["Persistent Depressive Disorder (Dysthymia)", "Long-term low mood may affect everyday activities and relationships."],
    ]),
    requirementsTitle: "Basic Requirements for a District of Columbia ESA Letter",
    requirementsIntro: "During an ESA evaluation, the following factors may be considered:",
    requirementsItems: [
      "The individual is generally 18 or older or is a minor with consent from a parent or legal guardian.",
      "A mental or emotional health condition is identified during the professional evaluation.",
      "The symptoms significantly affect one or more aspects of daily life or functioning.",
      "The clinician assesses whether an emotional support animal may provide support based on the individual's needs.",
      "The individual lives in the District of Columbia or plans to move to the area.",
    ],
    requirementsNote:
      "Important: On May 22, 2026, HUD's Office of Fair Housing and Equal Opportunity issued enforcement guidance changing its stated approach to certain assistance-animal complaints under the Fair Housing Act. The guidance prioritizes cases involving animals trained to provide disability-related assistance. It does not itself amend the Fair Housing Act or automatically determine whether an individual qualifies for an ESA housing accommodation.",
    benefitsTitle: "Benefits of Having an ESA Letter in District of Columbia",
    benefitsSubtitle:
      "An ESA letter in Washington, DC may help eligible individuals request housing accommodations for their emotional support animals and access the emotional support they need in their daily lives.",
    financialBenefitsHeading: "Financial Benefits",
    financialBenefits: benefits(
      [
        [
          "Potential Savings on Pet Fees",
          "An ESA letter may help eligible tenants request an exemption from pet fees and deposits when applicable fair housing laws require a housing accommodation.",
        ],
        [
          "Reduced Housing-Related Expenses",
          "Approved ESA accommodations may exempt eligible tenants from monthly pet rent, potentially lowering their regular housing expenses.",
        ],
        [
          "Better Housing Budget Planning",
          "An ESA letter may help eligible tenants understand their accommodation options before signing a lease, allowing them to plan housing expenses more confidently.",
        ],
      ],
      FIN_ICON,
    ),
    emotionalBenefitsHeading: "Mental & Emotional Support",
    emotionalBenefits: benefits(
      [
        [
          "Comfort During Stressful Moments",
          "An emotional support animal may provide comfort during stressful situations, helping individuals manage difficult emotions and feel less overwhelmed in everyday life.",
        ],
        [
          "Companionship and Reduced Loneliness",
          "Living with an emotional support animal may ease feelings of loneliness by offering consistent companionship, especially for individuals who spend significant time alone.",
        ],
        [
          "Support With Emotional Regulation",
          "The presence of an emotional support animal may help some individuals feel calmer during periods of anxiety or emotional distress, supporting their overall well-being.",
        ],
      ],
      EMO_ICON,
    ),
    lawsTitle: "Housing Accommodations for ESAs in District of Columbia",
    lawsSubtitle:
      "In District of Columbia, ESA housing accommodations are primarily governed by the federal Fair Housing Act (FHA), which protects eligible individuals with disabilities from housing discrimination.",
    card1Title: "ESA Housing Laws in the District of Columbia",
    card1Items: [
      {
        title: "Federal Fair Housing Act (FHA)",
        description:
          "The Fair Housing Act prohibits disability discrimination in housing and generally requires housing providers to make reasonable accommodations for qualifying emotional support animals, including exceptions to no-pet policies.",
      },
      {
        title: "D.C. Human Rights Act of 1977",
        description:
          "The Act prohibits housing discrimination based on disability and requires reasonable accommodations when necessary to provide equal access to housing. This can include allowing a qualifying emotional support animal despite a property's no-pet policy.",
      },
      {
        title: "Pets in Housing Amendment Act of 2024",
        description:
          "Effective March 21, 2025, this law amended the D.C. housing law to prohibit additional pet rent and pet security deposits for service or assistance animals required as reasonable accommodations. These specific provisions apply to residential leases beginning after October 1, 2025.",
      },
    ],
    card2Title: "Housing Provider Role & Responsibility",
    card2Items: [
      {
        title: "Consider Reasonable Accommodation Requests",
        description:
          "Housing providers must generally make exceptions to no-pet policies and other pet restrictions for qualifying ESAs when necessary to accommodate a tenant's disability.",
      },
      {
        title: "Follow Documentation and Fee Requirements",
        description:
          "Providers may request reliable disability-related documentation when the disability or need for an ESA is not apparent. They must not charge pet fees, pet rent, or pet deposits for qualifying assistance animals, subject to applicable law.",
      },
      {
        title: "Evaluate Requests Individually",
        description:
          "Housing providers must assess each request on its merits and cannot deny it solely because of a general pet restriction. A denial may be justified when legally recognized exceptions apply, such as an unmitigable direct threat, significant property damage, or an undue financial or administrative burden.",
      },
    ],
    legalNotice:
      "Under the Fair Housing Act, eligible individuals in the District of Columbia may request reasonable housing accommodations for emotional support animals. However, the Americans with Disabilities Act generally does not grant ESAs the same public access rights as service animals. Airlines are also not required to recognize ESAs as service animals under the Air Carrier Access Act.",
    scamsTitle: "District of Columbia ESA Letter: Facts and Myths",
    scamsSubtitle:
      "Knowing the facts about ESA letters in the District of Columbia can help you understand eligibility requirements, housing protections, and the legal limitations of emotional support animals.",
    scamsWhatYouNeedTitle: "What a Valid ESA Letter Should Include",
    scamsWhatYouNeedItems: [
      {
        title: "Licensed Mental Health Professional's Details",
        description:
          "A valid ESA letter should identify the mental health professional, including their name, credentials, license information, and state of practice.",
      },
      {
        title: "Statement of Clinical Recommendation",
        description:
          "The letter should reflect an individual evaluation and explain that an emotional support animal is recommended when clinically appropriate for the person's mental health needs.",
      },
      {
        title: "Official Date and Professional Signature",
        description:
          "A genuine ESA letter generally includes the issue date and the professional's signature. It may also appear on the clinician's official letterhead.",
      },
    ],
    scamsCommonTitle: "Common ESA Scams in District of Columbia",
    scamsCommonSubtitle: "Be cautious of platforms or services that:",
    scamsCommonItems: [
      "Claim to offer an official ESA registry in the District of Columbia.",
      "Sell instant ESA certificates, badges, or ID cards as proof of eligibility.",
      "Promise ESA approval without an appropriate mental health evaluation.",
      "Provide documentation without a qualified mental health professional's assessment.",
      "Guarantee automatic approval of housing accommodation requests.",
    ],
    scamsAlertTitle: "Important: ESA Registries Are Not Official",
    scamsAlertText:
      "No government agency in Washington, DC or the United States maintains an official ESA registry or issues a universal ESA registration or certification. An ESA letter should be based on an appropriate assessment by a qualified mental health professional.",
    psdVsEsaTitle: "Psychiatric Service Dogs vs. Emotional Support Animals in District of Columbia",
    psdVsEsaSubtitle:
      "Psychiatric service dogs and emotional support animals can support people with mental health conditions, but their roles, training requirements, and legal protections differ under federal law.",
    esaCardBullets: [
      "Provide emotional comfort and companionship to individuals with mental health-related needs.",
      "Do not require specialized task training, but housing accommodations may require appropriate supporting documentation.",
      "May qualify for housing protections under the Fair Housing Act.",
      "Eligible approved housing accommodations generally exempt ESAs from pet fees and deposits.",
    ],
    psdCardBullets: [
      "Trained to perform specific tasks that assist people with psychiatric disabilities.",
      "Recognized under the Americans with Disabilities Act (ADA).",
      "Generally permitted in public places such as restaurants and stores where the ADA applies.",
    ],
    psdCalloutTitle: "Getting a Psychiatric Service Dog in District of Columbia",
    psdCalloutText:
      "In the District of Columbia, a psychiatric service dog must be individually trained to perform specific tasks that assist a person with a qualifying psychiatric disability. Under the Americans with Disabilities Act (ADA), a mental health provider's letter, service dog certification, or professional training is not required for public access. Training time varies depending on the dog's abilities and the tasks involved and may take a year or longer. Professional training costs can range from approximately $5,000 to $30,000 or more, depending on the training method, program, and level of assistance provided.",
    cities: [],
    faqTitle: "Frequently Asked Questions About ESA Letters in District of Columbia",
    faqSubtitle:
      "Find answers to common questions about getting an ESA letter in District of Columbia, including eligibility, evaluation requirements, and housing protections.",
    faqs: [
      {
        q: "How can I get an ESA letter in District of Columbia?",
        a: "You can seek an ESA evaluation from a qualified mental health professional. The professional will assess your mental health needs and determine whether an emotional support animal is clinically appropriate.",
      },
      {
        q: "Are ESA letters legally recognized in the District of Columbia?",
        a: "Yes. ESA letters may support reasonable accommodation requests under the federal Fair Housing Act for individuals who meet the applicable requirements. A letter does not guarantee approval in every situation.",
      },
      {
        q: "Can a landlord in the District of Columbia charge pet rent for an ESA?",
        a: "Generally, no. When an emotional support animal qualifies as an assistance animal under fair housing law, housing providers generally cannot charge pet rent or pet fees for that animal. Certain accommodation requests may be denied under specific legal circumstances.",
      },
      {
        q: "Can I get an ESA letter online in the District of Columbia?",
        a: "Yes. You may complete an online evaluation with a qualified mental health professional authorized to practice in the District of Columbia. The professional must assess your individual circumstances before determining whether an ESA letter is appropriate.",
      },
      {
        q: "Does the District of Columbia require ESA registration or certification?",
        a: "No. There is no official government ESA registry or universal certification requirement. An online registration, ID card, or certificate alone does not establish eligibility for housing accommodations.",
      },
      {
        q: "Can I take my emotional support animal to public places in the District of Columbia?",
        a: "Not automatically. Emotional support animals do not have the same general public access rights as service animals under the Americans with Disabilities Act. Access to housing is governed by different rules under applicable fair housing laws.",
      },
    ],
    tableOfContents: [
      { id: "therapists", label: "Our Licensed Mental Health Professionals" },
      { id: "process", label: "How Does the ESA Letter Process Work in the District of Columbia?" },
      { id: "who-qualifies", label: "Who Can Qualify for an ESA Letter in the District of Columbia?" },
      { id: "benefits", label: "Benefits of Having an ESA Letter in District of Columbia" },
      { id: "laws", label: "Housing Accommodations for ESAs in District of Columbia" },
      { id: "scams", label: "District of Columbia ESA Letter: Facts and Myths" },
      { id: "psd-vs-esa", label: "Psychiatric Service Dogs vs. Emotional Support Animals in District of Columbia" },
      { id: "faq", label: "Frequently Asked Questions About ESA Letters in District of Columbia" },
    ],
  },
};
