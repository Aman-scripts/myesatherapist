export interface StateLawCard {
  title: string;
  items: Array<{ title: string; description: string }>;
}

export interface StateData {
  slug: string;
  name: string;
  abbreviation: string;
  metaTitle: string;
  metaDescription: string;
  residentsServed?: string;
  trustStat5?: { value: string; label: string };
  heroTitle?: string;
  heroSubtitle?: string;
  therapistsTitle?: string;
  therapistsSubtitle?: string;
  therapistsLicensureNote?: string;
  therapistsList?: Array<{
    id?: number | string;
    name: string;
    title: string;
    bio: string;
    licensedIn: string;
    method?: string;
    focus: string;
  }>;
  processTitle?: string;
  processSubtitle?: string;
  processSteps?: Array<{
    number: string;
    icon: string;
    title: string;
    description: string;
  }>;
  processDifferentiatorsTitle?: string;
  processDifferentiators?: string[];
  processNote?: string;
  whoQualifiesTitle?: string;
  whoQualifiesSubtitle?: string;
  whoQualifiesSectionHeading?: string;
  whoQualifiesConditions?: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  requirementsTitle?: string;
  requirementsIntro?: string;
  requirementsItems?: string[];
  requirementsNote?: string;
  whyChooseTitle?: string;
  whyChooseSubtitle?: string;
  whyChooseItems?: Array<{
    icon?: string;
    title: string;
    description: string;
  }>;
  reviewsTitle?: string;
  reviewsSubtitle?: string;
  benefitsTitle?: string;
  benefitsSubtitle?: string;
  financialBenefitsHeading?: string;
  financialBenefits?: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  emotionalBenefitsHeading?: string;
  emotionalBenefits?: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  lawsTitle?: string;
  lawsSubtitle?: string;
  card1Title?: string;
  card1Items?: Array<{ title: string; description: string }>;
  card2Title?: string;
  card2Items?: Array<{ title: string; description: string }>;
  legalNotice?: string;
  scamsTitle?: string;
  scamsSubtitle?: string;
  scamsAlertTitle?: string;
  scamsAlertText?: string;
  scamsWhatYouNeedTitle?: string;
  scamsWhatYouNeedItems?: Array<{ title: string; description: string }>;
  scamsCommonTitle?: string;
  scamsCommonSubtitle?: string;
  scamsCommonItems?: string[];
  psdVsEsaTitle?: string;
  psdVsEsaSubtitle?: string;
  esaCardTitle?: string;
  esaCardBullets?: string[];
  psdCardTitle?: string;
  psdCardBullets?: string[];
  psdCalloutTitle?: string;
  psdCalloutText?: string;
  benefitsImage?: string;
  benefitsImageMobile?: string;
  benefitsImageTablet?: string;
  whoQualifiesImage?: string;
  whoQualifiesAspect?: string;
  whoQualifiesImageMobile?: string;
  whoQualifiesImageTablet?: string;
  citiesTitle?: string;
  citiesSubtitle?: string;
  cities: Array<{ name: string; description?: string; icon: string }>;
  faqTitle?: string;
  faqSubtitle?: string;
  faqs?: Array<{ q: string; a: string }>;
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaNote?: string;
  tableOfContents?: Array<{ id: string; label: string }>;
  trustedReviewsTitle?: string;
  trustedReviewsSubtitle?: string;
  trustedReviews?: Array<{ name: string; quote: string; avatar?: string }>;
  pricingTitle?: string;
  pricingSubtitle?: string;
  pricingPlan1Title?: string;
  pricingPlan1Description?: string;
  pricingPlan1Price?: string;
  pricingPlan1Features?: string[];
  pricingPlan2Title?: string;
  pricingPlan2Description?: string;
  pricingPlan2Price?: string;
  pricingPlan2Features?: string[];
}

export const STATES_DATA: Record<string, StateData> = {
  alabama: {
    slug: "alabama",
    name: "Alabama",
    residentsServed: "6,400+",
    abbreviation: "AL",
    metaTitle: "Alabama ESA Letter Evaluations by Licensed Therapists - My ESA Therapist",
    metaDescription: "Connect with a licensed mental health professional for an Alabama ESA letter evaluation based on FHA housing guidelines. Letters are issued solely at the evaluating clinician’s discretion.",
    heroTitle: "Alabama ESA Letter Evaluations by Licensed Therapists",
    heroSubtitle: "Connect with a licensed mental health professional for an Alabama ESA letter evaluation based on FHA housing guidelines. Letters are issued solely at the evaluating clinician’s discretion.",
    therapistsTitle: "Our Licensed Mental Health Professionals",
    therapistsSubtitle: "We connect individuals with licensed mental health professionals who are qualified to conduct evaluations and provide recommendations when clinically appropriate.",
    therapistsLicensureNote: "A Note on Licensure Levels: Depending on their state of origin, a social worker or counselor may have a variety of titles, such as Licensed Clinical Social Worker (LCSW), Licensed Independent Clinical Social Worker (LICSW), etc. These are comparable licensure levels.",
    therapistsList: [
      {
        id: 1,
        name: "Robert Staaf",
        title: "Licensed Clinical Social Worker",
        bio: "LCSW with extensive psychotherapy experience. Pet owner and advocate for animal-assisted mental health treatment.",
        licensedIn: "30+ States",
        method: "Video or Phone",
        focus: "Anxiety & Stress",
      },
      {
        id: 2,
        name: "Leslie K. Gamble",
        title: "Licensed Independent Clinical Social Worker",
        bio: "Licensed therapist with 13 years of healthcare experience serving individuals, couples, and families with flexible, goal-focused care.",
        licensedIn: "15+ States",
        method: "Video or Phone",
        focus: "Depression & PTSD",
      },
      {
        id: 3,
        name: "Gaurav Patel, MD",
        title: "Family Medicine Physician",
        bio: "Board-certified family medicine physician with experience providing evidence-based, patient-focused care across inpatient, urgent care, outpatient, and telemedicine settings.",
        licensedIn: "17 States",
        method: "Video or Phone",
        focus: "Chronic Conditions & Sleep Concerns",
      },
    ],
    processTitle: "How Does an ESA Evaluation Work in Alabama?",
    processSubtitle: "Our simple 3-step process helps Alabama residents to connect with a licensed mental health professional through our HIPAA-compliant platform.",
    processSteps: [
      {
        number: "01",
        icon: "/states/californina-esa-evalutation_schedule.svg",
        title: "Book Your Appointment",
        description: "Create an account, choose a convenient date, and complete the intake form to schedule your appointment with a clinician.",
      },
      {
        number: "02",
        icon: "/states/californina-esa-evalutation_clinicalevaluation.svg",
        title: "Connect With a Clinician",
        description: "Meet securely with a licensed mental health professional via audio or video call to discuss your health concerns and ESA eligibility.",
      },
      {
        number: "03",
        icon: "/states/californina-esa-evalutation_clinicaldetermination.svg",
        title: "ESA Letter (If Clinically Appropriate)",
        description: "If you are found clinically eligible after a complete evaluation, your ESA recommendation will be securely emailed on official letterhead, including the clinician’s license number and signature.",
      },
    ],
    processDifferentiatorsTitle: "Why Our Alabama ESA Evaluation Process is Unique",
    processDifferentiators: [
      "Evaluations conducted by LMHPs authorized to practice in Alabama.",
      "Platform aligned with HIPAA compliance and high privacy standards.",
      "Ethical ESA letters are accepted throughout Alabama, subject to approval.",
      "ESA letters are not issued instantly, and approval is never guaranteed",
    ],
    processNote: "Note: A valid ESA letter must be written by a licensed mental health professional following a formal mental health evaluation. These audio-visual assessments must be conducted on a HIPAA-compliant platform. This is not an instant-approval process; the ESA letter must be uniquely tailored to you and your disability. While your ESA letter writer does not need to disclose your specific diagnosis in the letter; they do need to affirm that you have an applicable diagnosis.",
    whoQualifiesTitle: "Who May Qualify For an ESA Letter in Alabama?",
    whoQualifiesSubtitle: "Mental health conditions that substantially impact daily functioning may be considered during an ESA evaluation. As part of the assessment, clinicians may reference [DSM-5-TR](https://www.psychiatry.org/getmedia/b68a5776-f88c-45c7-9535-fd219d7aa5cb/APA-DSM5TR-Update-September-2025.pdf) diagnostic criteria.",
    whoQualifiesSectionHeading: "Qualifying Mental Health Conditions",
    whoQualifiesConditions: [
      {
        title: "Mood Disorders",
        description: "Conditions that primarily affect emotional state, such as persistent feelings of sadness, low mood, or mood instability that impact daily functioning. An ESA may offer comfort, emotional support, and help with managing stress linked to mood disorders.",
        icon: "/states/whomayqualifies-moodconditions.svg",
      },
      {
        title: "Generalized Anxiety Disorders",
        description: "A condition marked by ongoing, excessive worry and tension that can interfere with everyday activities and focus. An ESA can offer a sense of comfort and stability while helping individuals cope with ongoing anxiety and everyday stress.",
        icon: "/states/whomayqualifies-california_chronicworry.svg",
      },
      {
        title: "Obsessive-Compulsive Personality Disorder (OCPD)",
        description: "A personality pattern characterized by rigid perfectionism, a strong need for control, and difficulty with flexibility in daily life. An ESA may provide a calming presence and emotional reassurance, helping individuals manage stress and navigate daily routines.",
        icon: "/states/whomayqualifies-panicattack.svg",
      },
      {
        title: "Binge Eating Disorder",
        description: "An eating disorder involving recurring episodes of excessive food intake accompanied by a sense of loss of control and emotional distress. An ESA can offer companionship and emotional comfort, which may help individuals cope with stress and difficult emotions.",
        icon: "/states/whomayqualifies-california_posttrauma.svg",
      },
    ],
    requirementsTitle: "ESA Letter Requirements in Alabama",
    requirementsIntro: "To be considered for an ESA recommendation in Alabama, clinicians typically review the following factors as part of the evaluation process:",
    requirementsItems: [
      "Individuals must be 18 or older to provide consent. For minors, a parent or legal guardian must participate in the evaluation and provide approval.",
      "The individual must currently reside in Alabama or be planning to establish residency, as evaluations must be conducted by a mental health professional licensed to practice in Alabama at the time of evaluation.",
      "A qualifying mental health condition that impacts daily functioning must be identified during the assessment.",
      "The role of the animal in providing emotional support is evaluated on a case-by-case basis.",
      "The individual must demonstrate the ability to care for the animal safely and responsibly.",
    ],
    requirementsNote: "Important Note: A mental health condition alone does not guarantee ESA approval. ESA letters are issued only after an Alabama-licensed mental health professional completes a full evaluation and determines eligibility.",
    whyChooseTitle: "Why Choose My ESA Therapist for ESA Letter Evaluation in Alabama?",
    whyChooseSubtitle: "We simplify online emotional support animal evaluations while maintaining efficiency and legal compliance. Here’s what makes us different from other providers.",
    whyChooseItems: [
      {
        icon: "/home/whychoose-section-license-professional.svg",
        title: "Licensed Professionals",
        description: "Alabama ESA evaluations are conducted by independent US licensed mental health professionals authorized to assess ESA eligibility.",
      },
      {
        icon: "/home/whychoose-section-secure-thealth.svg",
        title: "Secure Telehealth Platform",
        description: "Our HIPAA-compliant systems ensure your information remains confidential and protected.",
      },
      {
        icon: "/home/whychoose-section-clinical-integrity.svg",
        title: "Clinical Integrity First",
        description: "Alabama ESA letter recommendations are issued by licensed professionals based on individualized clinical evaluation.",
      },
      {
        icon: "/home/whychoose-section-legimate-documentation.svg",
        title: "Legitimate ESA Documentation",
        description: "When clinically appropriate, ESA letters in Alabama are issued in compliance with applicable federal and state housing guidelines.",
      },
      {
        icon: "/home/whychoose-section-nationwide-access.svg",
        title: "Nationwide Access",
        description: "Telehealth evaluations available for individuals across the United States, subject to clinician availability.",
      },
      {
        icon: "/home/whychoose-section-transparent-process.svg",
        title: "Transparent Process",
        description: "Our Alabama ESA evaluation process helps you understand each stage, from the initial assessment to the clinician’s final decision.",
      },
    ],
    reviewsTitle: "What People Say About Their ESA Letter Journey",
    reviewsSubtitle: "Sometimes, having the right support can make everyday life feel a little easier. Here’s what our clients have to say about their experience with MY ESA Therapist.",
    benefitsTitle: "Benefits of an ESA Letter in Alabama",
    benefitsSubtitle: "Understand how an ESA letter may help you stay with your pet for emotional well-being, with no added financial burden.",
    financialBenefitsHeading: "Financial and Housing Benefits",
    financialBenefits: [
      {
        title: "Equal Housing Opportunity",
        description: "An ESA is not considered a pet under fair housing laws, helping individuals with qualifying mental health conditions access reasonable accommodation without discrimination.",
        icon: "/states/whomayqualifies-california_chronicworry.svg",
      },
      {
        title: "More Housing Options",
        description: "An ESA letter may allow individuals to live in housing that otherwise has a “no pets” policy, subject to applicable rules and approval.",
        icon: "/states/california-benefits-workplaceconsideration.svg",
      },
      {
        title: "Protection During Lease Renewal",
        description: "An approved ESA accommodation generally carries forward during lease renewals, provided circumstances remain unchanged.",
        icon: "/states/california-benefits-workplaceconsideration.svg",
      },
    ],
    emotionalBenefitsHeading: "Mental Health Benefits",
    emotionalBenefits: [
      {
        title: "Emotional Grounding in Daily Life",
        description: "ESAs may help provide a steady sense of comfort and routine, which can support emotional well-being during day-to-day activities.",
        icon: "/states/whomayqualifies-panicattack.svg",
      },
      {
        title: "Support During Periods of Heightened Stress",
        description: "The presence of an ESA may help individuals feel calmer and more supported during stressful situations, transitions, or emotionally challenging moments.",
        icon: "/states/california-benefits-strongersense.svg",
      },
      {
        title: "Improved Emotional Awareness and Regulation",
        description: "Caring for and interacting with an ESA can encourage mindfulness, emotional connection, and healthier coping responses over time.",
        icon: "/states/california-benefits-strongersense.svg",
      },
    ],
    lawsTitle: "ESA Laws for Tenants and Landlords in Alabama",
    lawsSubtitle: "Understand how federal housing regulations apply to ESAs in Alabama and the legal rights and responsibilities of ESA owners and landlords.",
    card1Title: "Tenant Protection and Rights",
    card1Items: [
      {
        title: "Legal Recognition Under the FHA",
        description: "Under the Fair Housing Act, emotional support animals may be recognized as a reasonable housing accommodation when linked to a documented mental health need.",
      },
      {
        title: "Standardized Evaluation Framework",
        description: "ESA housing protections are applied using uniform federal guidelines, ensuring consistency in how eligibility is reviewed across covered housing.",
      },
      {
        title: "Defined Scope of Protection",
        description: "Federal protections apply specifically to housing-related needs and do not extend to public access rights or non-housing settings.",
      },
    ],
    card2Title: "Landlords' Rights and Responsibilities",
    card2Items: [
      {
        title: "Request Review Authority",
        description: "Housing providers may review ESA accommodation requests to ensure they meet Fair Housing Act requirements.",
      },
      {
        title: "Health and Safety Standards",
        description: "Providers may consider objective, current health, safety, and property-related concerns specific to the animal when evaluating an accommodation, not assumptions or general policies.",
      },
      {
        title: "Defined Legal Limits",
        description: "The FHA allows accommodation requests to be limited when they pose a direct safety risk, cause significant property damage, or qualify for a legal exemption.",
      },
    ],
    legalNotice: "ESAs do not have public-access rights. This means entry to stores, restaurants, and airlines depends on individual policies, so always cross-verify before visiting or traveling.",
    scamsTitle: "ESA Scams in Alabama: Real vs. Fake ESA Service",
    scamsSubtitle: "Protecting yourself from ESA scams starts with understanding the difference between legitimate ESA evaluations and online services that promise instant or guaranteed letters in Alabama.",
    scamsAlertTitle: "Important: No Official ESA Registry Exists",
    scamsAlertText: "There is no official ESA registry or government-issued certification in Alabama or any other U.S. state. Only a valid ESA letter from a licensed provider is recognized for housing accommodation requests.",
    scamsWhatYouNeedTitle: "What You Actually Need",
    scamsWhatYouNeedItems: [
      {
        title: "Mental Health Evaluation",
        description: "A proper clinical assessment to determine whether an emotional support animal is appropriate based on your emotional and psychological needs.",
      },
      {
        title: "ESA Letter from a Licensed Therapist",
        description: "Your ESA recommendation must be issued by an Alabama-licensed mental health professional and include valid license details and required information.",
      },
      {
        title: "Ongoing Therapeutic Relationship",
        description: "A legitimate provider conducts a real evaluation and maintains professional responsibility for their clinical decision rather than issuing one-time, instant approvals.",
      },
    ],
    scamsCommonTitle: "Common ESA Scams in Alabama",
    scamsCommonSubtitle: "Be cautious of services that may claim:",
    scamsCommonItems: [
      "Instant or guaranteed ESA letters without a clinical evaluation",
      "Claims of ESA “certification” or “registration,” which are not legally recognized",
      "Promises of housing approval, which no service can guarantee",
      "ESA letters missing a licensed clinician’s signature or license number",
    ],
    psdVsEsaTitle: "Psychiatric Service Dogs vs. Emotional Support Animals in Alabama",
    psdVsEsaSubtitle: "Understanding the difference between psychiatric service dogs (PSDs) and ESA is important. This helps you to select the right choice for your mental health.",
    esaCardTitle: "Emotional Support Animals",
    esaCardBullets: [
      "Provide therapeutic emotional support related to a documented mental health condition, based on a clinical evaluation.",
      "Recognized under federal housing law as a reasonable accommodation, but not granted public access rights.",
      "Do not require task-specific training, as eligibility is determined by clinical need rather than training standards.",
    ],
    psdCardTitle: "Psychiatric Service Dogs",
    psdCardBullets: [
      "Individually trained to perform specific tasks that directly mitigate a diagnosed psychiatric disability",
      "Protected under disability laws with public access rights in most public spaces",
      "Require documented, disability-related task training that goes beyond emotional comfort alone",
    ],
    psdCalloutTitle: "Getting a Psychiatric Service Dog in Alabama",
    psdCalloutText: "Eligibility for a psychiatric service dog in Alabama requires a documented psychiatric disability and a dog trained to perform disability-related tasks. We connect you with a licensed professional for a PSD evaluation.\nThere is no official certification or registration requirement for psychiatric service dogs under the Americans with Disabilities Act (ADA).",
    citiesTitle: "Available Everywhere in Alabama",
    citiesSubtitle: "From Alabama's largest cities to smaller communities across the state, renters often encounter pet restrictions and housing policies. Our secure telehealth platform makes ESA evaluations in Alabama accessible wherever you live.",
    cities: [
      {
        name: "Birmingham",
        description: "Many rental communities enforce pet restrictions. A Birmingham ESA letter helps support housing accommodation requests.",
        icon: "/states/losangeles.svg",
      },
      {
        name: "Huntsville",
        description: "As one of Alabama's fastest-growing cities, renters may face competitive housing and pet policies. A Huntsville ESA letter helps support accommodation requests.",
        icon: "/states/losangelestwo.svg",
      },
      {
        name: "Mobile",
        description: "From downtown apartments to coastal-area rentals, pet restrictions are common. A Mobile ESA letter can help support your request.",
        icon: "/states/losangelesfour.svg",
      },
      {
        name: "Montgomery",
        description: "Many Montgomery landlords and property managers maintain pet rules. A Montgomery ESA letter helps you stay prepared.",
        icon: "/states/sanfrancisco.svg",
      },
      {
        name: "Tuscaloosa",
        description: "Student housing and rental properties throughout Tuscaloosa often have pet limitations. A Tuscaloosa ESA letter provides added support.",
        icon: "/states/losangelesthree.svg",
      },
      {
        name: "Dothan / Southeast Alabama",
        description: "Rental policies vary across Southeast Alabama. ESA documentation can help when pet restrictions affect housing options.",
        icon: "/states/sanfranciscofour.svg",
      },
      {
        name: "Hoover",
        description: "HOA communities and apartment complexes in Hoover may enforce pet restrictions. An ESA letter in Hoover helps navigate them.",
        icon: "/states/sanfranciscotwo.svg",
      },
      {
        name: "All Other Alabama Cities",
        description: "From Auburn and Decatur to Florence and Gadsden, our telehealth ESA services are available statewide.",
        icon: "/states/sanfranciscothree.svg",
      },
    ],
    faqTitle: "Frequently Asked Questions About ESA Letter Alabama",
    faqSubtitle: "This section addresses common questions about emotional support animals, housing considerations, and the evaluation process in Alabama.",
    faqs: [
      {
        q: "What questions are asked during an ESA evaluation in Alabama?",
        a: "During an ESA evaluation in Alabama, clinicians typically ask about your mental health history, current symptoms, daily functioning, housing situation, and how an animal may provide emotional support. Questions focus on clinical need, not pet ownership preferences.",
      },
      {
        q: "How Much Does an ESA Letter Cost in Alabama?",
        a: "The cost of an ESA letter in Alabama varies by provider and evaluation method. Typically, it ranges around $100–$200 for a proper assessment by a licensed professional. At My ESA Therapist, the fee is $149, which includes the evaluation and issuance of the ESA letter if you qualify.",
      },
      {
        q: "Can Any Doctor Write an ESA Letter in Alabama?",
        a: "No, not every doctor can write an ESA letter in Alabama. The letter must be issued by a licensed healthcare professional authorized to assess mental health and establish a therapeutic relationship, such as a licensed therapist, psychologist, psychiatrist, or other qualified healthcare professional authorized to assess mental health.",
      },
      {
        q: "Can Working Professionals in Alabama Qualify for an Emotional Support Animal?",
        a: "Yes, working professionals in Alabama may qualify for an ESA if they have a mental health condition that affects daily functioning. Employment status does not impact eligibility, as ESA evaluations are based on clinical need, not occupation or income.",
      },
      {
        q: "Is a Single ESA Appointment Enough in Alabama?",
        a: "A single ESA appointment in Alabama may be sufficient only if it includes a legitimate clinical evaluation and establishes a therapeutic relationship. Instant or cursory visits without proper assessment typically do not meet ethical or professional standards for ESA recommendations.",
      },
      {
        q: "Does a Condition Need to Be Severe to Qualify for an ESA in Alabama?",
        a: "No, a condition does not need to be severe to qualify for an ESA in Alabama. Eligibility is based on whether a mental health condition substantially affects daily functioning and whether an emotional support animal is clinically appropriate, as determined through a licensed professional’s evaluation.",
      },
    ],
    ctaTitle: "Ready to Start Your ESA Evaluation?",
    ctaSubtitle: "If you believe an emotional support animal may be appropriate for your situation, you can begin a professional evaluation today.",
    trustedReviewsTitle: "What People Say About Their ESA Letter Journey",
    trustedReviewsSubtitle: "Sometimes, having the right support can make everyday life feel a little easier. Here’s what our clients have to say about their experience with MY ESA Therapist.",
    trustedReviews: [
      {
        name: "Stewart, Oakland, CA",
        quote: "“The process with My ESA Therapist was straightforward and comfortable. I was able to speak with a licensed professional, and everything was explained clearly without feeling rushed. Overall, it was a smooth experience and I’m glad I went through with it.”",
        avatar: "/about-us/about_us-trusted-section-one.jpg",
      },
      {
        name: "Edward, Vernon Rockville, CT",
        quote: "“I had a smooth experience with My ESA Therapist. The evaluation was comfortable, and I was able to openly explain how my pet supports me emotionally. Everything was clearly explained, and the ESA Letter process was straightforward. I appreciated how professional and respectful the whole experience felt.”",
        avatar: "/about-us/about_us-trusted-section-two.jpg",
      },
      {
        name: "Bryan, Plymouth, MA",
        quote: "“I had a really good experience with My ESA Therapist. The evaluation was straightforward, and I felt comfortable discussing my situation with the therapist. Everything was explained clearly, and I never felt rushed or pressured. The whole process was simple and professional, which made things much easier for me.”",
        avatar: "/about-us/about_us-trusted-section-one.jpg",
      },
      {
        name: "Kerry, Decatur, IL",
        quote: "“I had a pretty straightforward experience with an ESA evaluation. The process was explained clearly, and I was able to speak with a mental health professional and ask questions before moving forward. I appreciated that there weren’t unrealistic promises or pressure. Overall, everything felt professional and easier than I expected.”",
        avatar: "/about-us/about_us-trusted-section-two.jpg",
      },
      {
        name: "Jimmy, Newport, PA",
        quote: "“I was a bit unsure of what to expect, I was really nervous about the process of getting an ESA letter, but the therapist I dealt with was incredibly kind and helpful. The whole thing was sorted out quickly and without hassle.”",
        avatar: "/about-us/about_us-trusted-section-one.jpg",
      },
      {
        name: "Todd, San Francisco, CA",
        quote: "“What stood out to me was how comfortable the conversation felt. I didn’t feel like I had to explain everything perfectly, which made the whole experience much easier for me.”",
        avatar: "/about-us/about_us-trusted-section-two.jpg",
      },
    ],
    pricingTitle: "The Cost of an ESA Letter in Alabama",
    pricingSubtitle: "Different needs can call for different levels of support. Compare our two ESA letter plans and choose the option that gives you the right fit, clarity, and professional support for your ESA journey.",
    pricingPlan1Title: "ESA Letter",
    pricingPlan1Description: "Professional ESA documentation for qualified individuals, provided after an evaluation with a licensed mental health professional in Alabama.",
    pricingPlan1Price: "$149",
    pricingPlan1Features: [
      "Live telehealth evaluation with a licensed LMHP",
      "Official ESA letter delivered by email",
      "Documentation for housing accommodation requests",
      "Coverage for all 50 U.S. states",
      "HIPAA-secure telehealth experience",
    ],
    pricingPlan2Title: "ESA Letter + ID Card",
    pricingPlan2Description: "Everything in the ESA Letter package, plus an official ESA ID card for added convenience when identifying your emotional support animal.",
    pricingPlan2Price: "$199",
    pricingPlan2Features: [
      "Everything included with the ESA letter",
      "Official ESA ID card for your animal",
      "Convenient physical identification",
      "Priority 24-hour delivery",
      "Coverage for all 50 U.S. states",
      "HIPAA-secure telehealth experience",
    ],
    tableOfContents: [
      { id: "therapists", label: "Who Conducts My ESA Evaluation?" },
      { id: "process", label: "How to Get an ESA Letter in Alabama?" },
      { id: "who-qualifies", label: "Can I Qualify for an ESA in Alabama?" },
      { id: "why-choose", label: "Why Do I Choose My ESA Therapist?" },
      { id: "reviews", label: "What Do ESA Owners Say About Their Experience?" },
      { id: "benefits", label: "What Benefits Can I Get From an ESA Letter in Alabama?" },
      { id: "laws", label: "What Are My ESA Housing Rights in Alabama?" },
      { id: "scams", label: "What Should I Avoid When Applying for an ESA Letter?" },
      { id: "psd-vs-esa", label: "Psychiatric Service Dogs vs. Emotional Support Animals in Alabama" },
      { id: "trusted-reviews", label: "Trusted by Thousands of ESA Owners in Alabama" },
      { id: "pricing", label: "How Much Will an ESA Letter Cost Me in Alabama?" },
      { id: "available-cities", label: "Is My ESA Therapist Available All Across Alabama?" },
      { id: "faq", label: "Frequently Asked Questions" },
      { id: "cta", label: "Start My ESA Evaluation Now!" },
    ],
  },
  alaska: {
    slug: "alaska",
    name: "Alaska",
    residentsServed: "3,400+",
    abbreviation: "AK",
    metaTitle: "Alaska ESA Letter by Licensed Professionals | My ESA Therapist",
    metaDescription: "Alaska ESA Letter evaluations conducted by licensed therapists. Transparent pricing, secure telehealth, and compliant ESA documentation under FHA.",
    heroTitle: "ESA Letter\nEvaluations by Alaska\nLicensed Professionals",
    heroSubtitle: "Connect with a licensed mental health professional for a secure emotional support animal evaluation. ESA letters are issued only when clinically appropriate and aligned with the Fair Housing Act (FHA).",
    therapistsTitle: "Our Licensed Mental Health Professionals",
    therapistsSubtitle: "We connect individuals with licensed mental health professionals who are qualified to conduct evaluations and provide recommendations when clinically appropriate.",
    therapistsLicensureNote: "A Note on Licensure Levels: Depending on their state of origin, a social worker or counselor may have a variety of titles, such as Licensed Clinical Social Worker (LCSW), Licensed Independent Clinical Social Worker (LICSW), etc. These are comparable licensure levels.",
    therapistsList: [
      {
        id: 1,
        name: "Robert Staaf",
        title: "Licensed Clinical Social Worker",
        bio: "LCSW with extensive psychotherapy experience. Pet owner and advocate for animal-assisted mental health treatment.",
        licensedIn: "30+ States",
        method: "Video or Phone",
        focus: "Anxiety & Stress",
      },
      {
        id: 2,
        name: "Leslie K. Gamble",
        title: "Licensed Independent Clinical Social Worker",
        bio: "Licensed therapist with 13 years of healthcare experience serving individuals, couples, and families with flexible, goal-focused care.",
        licensedIn: "15+ States",
        method: "Video or Phone",
        focus: "Depression & PTSD",
      },
      {
        id: 3,
        name: "Gaurav Patel, MD",
        title: "Family Medicine Physician",
        bio: "Board-certified family medicine physician with experience providing evidence-based, patient-focused care across inpatient, urgent care, outpatient, and telemedicine settings.",
        licensedIn: "17 States",
        method: "Video or Phone",
        focus: "Chronic Conditions & Sleep Concerns",
      },
    ],
    processTitle: "How ESA Evaluation Works in Alaska",
    processSubtitle: "Our simple 3-step approach helps connect you with a licensed mental health professional.",
    processSteps: [
      {
        number: "01",
        icon: "/states/californina-esa-evalutation_schedule.svg",
        title: "Schedule a Consultation",
        description: "Sign up, choose a convenient date and time, and complete an intake form for a confidential evaluation with a licensed professional.",
      },
      {
        number: "02",
        icon: "/states/californina-esa-evalutation_clinicalevaluation.svg",
        title: "Evaluation by a Licensed Clinician",
        description: "Meet with a licensed mental health professional via video or audio call to discuss your mental health and potential ESA eligibility.",
      },
      {
        number: "03",
        icon: "/states/californina-esa-evalutation_clinicaldetermination.svg",
        title: "Clinical Determination",
        description: "If deemed clinically appropriate, you’ll receive an ESA letter on official letterhead, signed by the professional and securely delivered to your email.",
      },
    ],
    processDifferentiatorsTitle: "What Makes Our Alaska ESA Evaluation Process Unique?",
    processDifferentiators: [
      "No instant or automated approvals",
      "Evaluations conducted exclusively by Alaska-based licensed mental health professionals",
      "HIPAA-compliant, secure online platform",
      "ESA letters are issued only when clinically appropriate",
    ],
    processNote: "Note: A valid ESA letter must be written by a licensed mental health professional following a formal mental health evaluation. These audio-visual assessments must be conducted on a HIPAA-compliant platform. This is not an instant-approval process; the ESA letter must be uniquely tailored to you and your disability. While your ESA letter writer does not need to disclose your specific diagnosis in the letter; they do need to affirm that you have an applicable diagnosis.",
    whoQualifiesTitle: "Who May Qualify for an Emotional Support Animal in Alaska?",
    whoQualifiesSubtitle: "Individuals suffering from mental health conditions that may impact day-to-day activities may qualify for an ESA evaluation. Clinicians determine eligibility aligned with [DSM-5-TR](https://www.psychiatry.org/getmedia/b68a5776-f88c-45c7-9535-fd219d7aa5cb/APA-DSM5TR-Update-September-2025.pdf) criteria and federal housing guidelines.",
    whoQualifiesSectionHeading: "Qualifying Mental Health Conditions",
    whoQualifiesConditions: [
      {
        title: "Anxiety Disorders",
        description: "A group of conditions characterized by excessive and persistent fear or worry that may interfere with daily functioning. An ESA may offer reassurance and companionship, helping individuals feel more grounded when managing anxiety and emotional stress.",
        icon: "/states/whomayqualifies-california_chronicworry.svg",
      },
      {
        title: "Major Depressive Disorder",
        description: "A mood disorder marked by persistent feelings of sadness, loss of interest, or low motivation that can impact daily activities and overall well-being. An ESA can provide companionship and emotional reassurance, offering comfort during periods of low mood and emotional distress.",
        icon: "/states/whomayqualifies-moodconditions.svg",
      },
      {
        title: "Schizophrenia",
        description: "A serious mental health condition that may affect thought processes, perception, emotional responsiveness, and behavior, potentially interfering with daily functioning. An ESA may provide a steady source of companionship and comfort, supporting emotional well-being during daily challenges.",
        icon: "/states/whomayqualifies-panicattack.svg",
      },
      {
        title: "Other Mental Health Conditions",
        description: "Additional mental health conditions may be considered during an evaluation when symptoms substantially affect daily functioning and an ESA is deemed clinically appropriate.",
        icon: "/states/whomayqualifies-california_posttrauma.svg",
      },
    ],
    requirementsTitle: "Basic Requirements for ESA Letter Alaska",
    requirementsIntro: "To be considered for an emotional support animal (ESA) evaluation in Alaska, the following criteria are typically reviewed by the evaluating clinician:",
    requirementsItems: [
      "You must be 18 years or older. For minors, a parent or legal guardian must participate in the evaluation and provide consent.",
      "You must currently reside in Alaska or be planning to establish residency.",
      "A mental health condition that impacts daily functioning must be identified during the clinical assessment.",
      "You must demonstrate the ability to care for the animal safely and responsibly.",
    ],
    requirementsNote: "Important: ESA eligibility is determined solely by the licensed provider following a professional evaluation.",
    whyChooseTitle: "Why Choose My ESA Therapist for ESA Letter Evaluation?",
    whyChooseSubtitle: "We simplify online emotional support animal evaluations while maintaining efficiency and legal compliance. Here’s what makes us different from other providers.",
    whyChooseItems: [
      {
        title: "Licensed Professionals",
        description: "ESA evaluations are conducted by independent US licensed mental health professionals authorized to assess ESA eligibility.",
      },
      {
        title: "Secure Telehealth Platform",
        description: "Our HIPAA-compliant systems ensure your information remains confidential and protected.",
      },
      {
        title: "Clinical Integrity First",
        description: "ESA recommendations are issued by licensed professionals based on individualized clinical evaluation.",
      },
      {
        title: "Legitimate ESA Documentation",
        description: "When clinically appropriate, ESA letters are issued in compliance with applicable federal and state housing guidelines.",
      },
      {
        title: "Nationwide Access",
        description: "Telehealth evaluations available for individuals across the United States, subject to clinician availability.",
      },
      {
        title: "Transparent Process",
        description: "Clear steps, clear expectations, no misleading claims.",
      },
    ],
    reviewsTitle: "See What Our Clients Say",
    reviewsSubtitle: "Here’s what our clients say about their experience.",
    benefitsTitle: "Benefits Of a Legitimate ESA Letter in Alaska",
    benefitsSubtitle: "A valid ESA letter in Alaska may support a housing accommodation request under the Fair Housing Act when reviewed by a housing provider.",
    financialBenefitsHeading: "Housing Benefits",
    financialBenefits: [
      {
        title: "Remote Housing Access",
        description: "May support accommodation requests in Alaska’s limited or remote housing markets, when applicable under Fair Housing Act guidelines.",
      },
      {
        title: "Policy Exceptions",
        description: "May allow approved exceptions to “no-pet,” breed, or size restrictions in qualifying housing when reviewed and approved under Fair Housing Act guidelines.",
      },
      {
        title: "Housing Stability",
        description: "Approved ESA accommodations generally carry forward during lease renewals if circumstances remain unchanged.",
      },
    ],
    emotionalBenefitsHeading: "Mental Health Benefits",
    emotionalBenefits: [
      {
        title: "Social Ease",
        description: "The presence of an ESA may help some individuals feel more emotionally at ease in everyday environments and interactions.",
      },
      {
        title: "Reduced Isolation",
        description: "The presence of an ESA may help individuals feel less emotionally isolated during extended time at home.",
      },
      {
        title: "Daily Anchoring",
        description: "Having an ESA can help anchor daily routines and provide consistency during emotionally uncertain periods.",
      },
    ],
    lawsTitle: "Alaska ESA Laws for Tenants and Landlords",
    lawsSubtitle: "Explore how federal housing regulations apply to ESAs in Alaska and what protections may be available when an ESA is recommended as part of a documented emotional need.",
    card1Title: "Fair Housing Act (FHA)",
    card1Items: [
      {
        title: "Housing Accommodations for ESAs",
        description: "Under FHA, housing providers in Alaska may be required to consider ESA accommodation requests based on appropriate documentation, without relying solely on breed, size, or weight.",
      },
      {
        title: "No Extra Fees for ESAs",
        description: "When approved as a reasonable accommodation under the FHA, an ESA is not treated as a pet. Housing providers may not charge pet rent, pet fees, or pet deposits. However, tenants remain responsible for any damage caused by the animal.",
      },
      {
        title: "Scope of FHA Protections",
        description: "FHA protections apply specifically to housing-related accommodations. Emotional support animals do not have public access rights and are not permitted in places such as restaurants, stores, or workplaces unless separately allowed by policy.",
      },
    ],
    card2Title: "Landlords Rights and Responsibilities",
    card2Items: [
      {
        title: "Documentation Review",
        description: "Landlords may request reliable documentation supporting the emotional need for an animal and cross verify the authenticity of an ESA letter.",
      },
      {
        title: "Legal Exemptions",
        description: "Certain housing providers may be exempt from FHA requirements, such as owner-occupied buildings with four or fewer units or single-family homes rented without a broker.",
      },
      {
        title: "Reasonable Limits",
        description: "An ESA accommodation may be denied if the animal poses a direct threat to others, causes substantial property damage, or creates an undue financial or administrative burden.",
      },
    ],
    legalNotice: "Unlike psychiatric service dogs, ESAs are generally not permitted in public places such as restaurants and on airlines. Public access entirely depends on their respective policies. Therefore always confirm rules before visiting or traveling.",
    scamsTitle: "Alaska ESA Scams: Fake vs. Legitimate ESA Service",
    scamsSubtitle: "Knowing the difference between real and fake ESA providers helps to stay safe from misleading ESA service providers.",
    scamsAlertTitle: "Important: No Official ESA Registry Exists",
    scamsAlertText: "There is no government approved ESA registry or certification system in Alaska or anywhere in the U.S. Only a valid ESA letter from a licensed provider is recognized for housing accommodation requests.",
    scamsWhatYouNeedTitle: "What You Actually Need",
    scamsWhatYouNeedItems: [
      {
        title: "ESA Evaluation From a Licensed Clinician",
        description: "A clinical assessment is conducted by a mental health professional licensed to practice in Alaska.",
      },
      {
        title: "Legitimate ESA Letter in Alaska",
        description: "An ESA letter is issued only when clinically appropriate and is formally written and signed by an LMHP.",
      },
      {
        title: "Therapeutic Relationship",
        description: "An appropriate therapeutic relationship is established as part of the clinical evaluation prior to any ESA recommendation.",
      },
    ],
    scamsCommonTitle: "Common ESA Scams in Alaska",
    scamsCommonSubtitle: "Be cautious of websites that offer:",
    scamsCommonItems: [
      "Instant ESA letters",
      "Approval without a clinical evaluation",
      "Promises of guaranteed housing approval",
      "Claims of ESA registries, ID cards, or certificates, which are not legally recognized",
    ],
    psdVsEsaTitle: "Psychiatric Service Dogs vs. Emotional Support Animals in Alaska",
    psdVsEsaSubtitle: "Understanding the difference helps you to select the right choice based on your needs.",
    esaCardTitle: "Emotional Support Animal",
    esaCardBullets: [
      "Provide comfort and emotional support that may contribute to improved emotional and mental well-being.",
      "Protected under the Fair Housing Act (FHA) and are not considered regular pets for housing purposes.",
      "ESAs have housing-related rights only and do not have public access to places such as stores or restaurants.",
    ],
    psdCardTitle: "Psychiatric Service Dog",
    psdCardBullets: [
      "Specially trained service dogs that perform specific tasks for individuals with a diagnosed psychiatric disability.",
      "Protected under the Americans with Disabilities Act (ADA) and permitted to accompany their handler in most public spaces.",
      "Tasks may include interrupting harmful behaviors, providing grounding support, or assisting with daily functional reminders.",
    ],
    citiesTitle: "Available Everywhere in Alaska",
    citiesSubtitle: "From larger population centers to remote communities across the Last Frontier, renters throughout Alaska may encounter pet restrictions and housing policies. Our secure telehealth platform makes Alaska ESA letter evaluations accessible statewide, including rural and hard-to-reach areas.",
    cities: [
      {
        name: "Anchorage",
        description: "Many apartments, condos, and rental communities maintain pet restrictions and breed policies. An Anchorage ESA letter can help support housing accommodation requests.",
        icon: "/states/losangeles.svg",
      },
      {
        name: "Fairbanks",
        description: "From university housing to family rentals, pet policies are common throughout the city. A Fairbanks ESA letter helps you deal with housing requirements with confidence.",
        icon: "/states/sanfrancisco.svg",
      },
      {
        name: "Juneau",
        description: "As Alaska's capital city continues to grow, renters may encounter pet limitations in apartment complexes and rental properties. A Juneau ESA letter provides additional housing support.",
        icon: "/states/losangelestwo.svg",
      },
      {
        name: "Wasilla / Mat-Su Valley",
        description: "Across Wasilla and the Mat-Su Valley, many landlords and property managers enforce pet restrictions. An ESA letter in Wasilla can help simplify the accommodation process.",
        icon: "/states/losangelesfour.svg",
      },
      {
        name: "Kenai Peninsula",
        description: "From Kenai and Soldotna to surrounding communities, rental properties often have varying pet policies. A Kenai Peninsula ESA letter helps support your housing needs.",
        icon: "/states/losangelesthree.svg",
      },
      {
        name: "Ketchikan",
        description: "Housing options in the city can be limited, and many rentals maintain pet rules or restrictions. An ESA letter in Ketchikan can help expand your housing opportunities.",
        icon: "/states/sanfranciscofour.svg",
      },
      {
        name: "Remote Communities & Interior Alaska",
        description: "Many residents in remote Alaskan communities and Interior Alaska face unique housing challenges and limited rental availability. Our telehealth ESA evaluations make access to legitimate ESA documentation available regardless of location.",
        icon: "/states/sanfranciscotwo.svg",
      },
      {
        name: "All Other Alaska Cities",
        description: "From Sitka and Kodiak to Bethel and Palmer, our telehealth ESA services are available throughout Alaska, ensuring statewide access to licensed mental health professionals.",
        icon: "/states/sanfranciscothree.svg",
      },
    ],
    faqTitle: "Frequently Asked Questions About ESA Letter Alaska",
    faqSubtitle: "This section addresses common questions about emotional support animals, housing considerations, and the evaluation process in Alaska.",
    faqs: [
      {
        q: "Can I Take My ESA on an Airline in Alaska?",
        a: "No. Most U.S. airlines, including flights to or within Alaska, do not recognize emotional support animals. ESAs usually travel under standard pet policies. Only trained psychiatric service dogs may qualify for in-cabin access.",
      },
      {
        q: "How Much Does an ESA Letter Cost in Alaska?",
        a: "The cost of an ESA letter in Alaska depends on the provider and evaluation process, with most reputable services typically charging between $100–$200 for a licensed assessment. At My ESA Therapist, the fee is $149, which includes a professional evaluation along with the ESA letter upon approval.",
      },
      {
        q: "Does an ESA Letter Override All Breed Rules?",
        a: "No. An ESA letter does not override the law, but under the Fair Housing Act, housing providers cannot deny an ESA solely based on breed, size, or weight. Requests are reviewed on a case-by-case basis.",
      },
      {
        q: "Does My ESA Have to Be a Dog or Cat in Alaska?",
        a: "No. Emotional support animals are not limited to dogs or cats. Other animals may qualify if the accommodation request is reasonable and does not create health, safety, or property concerns.",
      },
      {
        q: "Can I Have More Than One ESA in Alaska?",
        a: "Possibly yes. Multiple ESAs may be considered if each animal is supported by a documented, disability-related need and the request is reasonable under Fair Housing Act guidelines.",
      },
      {
        q: "Can a Landlord in Alaska Require My ESA to Be Spayed or Neutered?",
        a: "Generally, no. Landlords typically cannot require spaying or neutering as a condition for ESA approval, though tenants remain responsible for preventing health, safety, or nuisance issues.",
      },
    ],
    ctaTitle: "Ready to Start Your ESA Evaluation?",
    ctaSubtitle: "If you believe an emotional support animal may be appropriate for your situation, you can begin a professional evaluation today.",
  },
  arizona: {
    slug: "arizona",
    name: "Arizona",
    residentsServed: "8,200+",
    abbreviation: "AZ",
    metaTitle: "Arizona ESA Letter Evaluations by Licensed Therapists - My ESA Therapist",
    metaDescription: "Get a legitimate Arizona ESA Letter from licensed healthcare professionals. Compliant with Fair Housing Act guidelines and state rules.",
    cities: [
      { name: "Phoenix", icon: "/states/losangeles.svg" },
      { name: "Tucson", icon: "/states/sanfrancisco.svg" },
      { name: "Mesa", icon: "/states/losangelestwo.svg" },
      { name: "Chandler", icon: "/states/losangelesfour.svg" },
      { name: "Scottsdale", icon: "/states/losangelesthree.svg" },
      { name: "Glendale", icon: "/states/sanfranciscotwo.svg" },
      { name: "Gilbert", icon: "/states/sanfranciscothree.svg" },
      { name: "Tempe", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  arkansas: {
    slug: "arkansas",
    name: "Arkansas",
    residentsServed: "5,200+",
    abbreviation: "AR",
    metaTitle: "Arkansas ESA Letter Evaluations by Licensed Professionals | My ESA Therapist",
    metaDescription: "Arkansas ESA Letter evaluations conducted by licensed therapists. Fast, secure telehealth assessments for FHA housing protections.",
    cities: [
      { name: "Little Rock", icon: "/states/losangeles.svg" },
      { name: "Fayetteville", icon: "/states/sanfrancisco.svg" },
      { name: "Fort Smith", icon: "/states/losangelestwo.svg" },
      { name: "Springdale", icon: "/states/losangelesfour.svg" },
      { name: "Jonesboro", icon: "/states/losangelesthree.svg" },
      { name: "Rogers", icon: "/states/sanfranciscotwo.svg" },
      { name: "Conway", icon: "/states/sanfranciscothree.svg" },
      { name: "Bentonville", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  california: {
    slug: "california",
    name: "California",
    residentsServed: "6,000+",
    abbreviation: "CA",
    metaTitle: "California ESA Letter Online with Licensed Therapist | My ESA Therapist",
    metaDescription: "Get an official California ESA Letter online from state-licensed mental health professionals. 100% compliant with California AB 468 and the federal Fair Housing Act.",
    trustStat5: {
      value: "30 Day",
      label: "AB 468 Compliance Practice",
    },
    cities: [
      { name: "Los Angeles", icon: "/states/losangeles.svg" },
      { name: "San Francisco", icon: "/states/sanfrancisco.svg" },
      { name: "San Diego", icon: "/states/losangelestwo.svg" },
      { name: "San Jose", icon: "/states/losangelesfour.svg" },
      { name: "Sacramento", icon: "/states/losangelesthree.svg" },
      { name: "Fresno", icon: "/states/sanfranciscotwo.svg" },
      { name: "Long Beach", icon: "/states/sanfranciscothree.svg" },
      { name: "Oakland", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  colorado: {
    slug: "colorado",
    name: "Colorado",
    residentsServed: "7,000+",
    abbreviation: "CO",
    metaTitle: "Colorado ESA Letter Evaluation by Licensed Therapists - My ESA Therapist",
    metaDescription: "Connect with Colorado-licensed mental health professionals for an official ESA evaluation. 100% compliant with Colorado housing laws and federal regulations.",
    cities: [
      { name: "Denver", icon: "/states/losangeles.svg" },
      { name: "Colorado Springs", icon: "/states/sanfrancisco.svg" },
      { name: "Aurora", icon: "/states/losangelestwo.svg" },
      { name: "Fort Collins", icon: "/states/losangelesfour.svg" },
      { name: "Lakewood", icon: "/states/losangelesthree.svg" },
      { name: "Thornton", icon: "/states/sanfranciscotwo.svg" },
      { name: "Arvada", icon: "/states/sanfranciscothree.svg" },
      { name: "Pueblo", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  connecticut: {
    slug: "connecticut",
    name: "Connecticut",
    residentsServed: "4,600+",
    abbreviation: "CT",
    metaTitle: "Connecticut ESA Letter Evaluations by Licensed Professionals - My ESA Therapist",
    metaDescription: "Connecticut ESA Letter evaluations by state-licensed mental health professionals. Reliable telehealth assessments for Fair Housing Act compliance.",
    cities: [
      { name: "Bridgeport", icon: "/states/losangeles.svg" },
      { name: "Stamford", icon: "/states/sanfrancisco.svg" },
      { name: "New Haven", icon: "/states/losangelestwo.svg" },
      { name: "Hartford", icon: "/states/losangelesfour.svg" },
      { name: "Waterbury", icon: "/states/losangelesthree.svg" },
      { name: "Norwalk", icon: "/states/sanfranciscotwo.svg" },
      { name: "Danbury", icon: "/states/sanfranciscothree.svg" },
      { name: "New Britain", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  delaware: {
    slug: "delaware",
    name: "Delaware",
    residentsServed: "4,600+",
    abbreviation: "DE",
    metaTitle: "Delaware ESA Letter Evaluations by Licensed Professionals - My ESA Therapist",
    metaDescription: "Get a legitimate Delaware ESA Letter from licensed healthcare professionals. Fully compliant with Fair Housing Act guidelines and state regulations.",
    cities: [
      { name: "Wilmington", icon: "/states/losangeles.svg" },
      { name: "Dover", icon: "/states/sanfrancisco.svg" },
      { name: "Newark", icon: "/states/losangelestwo.svg" },
      { name: "Middletown", icon: "/states/losangelesfour.svg" },
      { name: "Smyrna", icon: "/states/losangelesthree.svg" },
      { name: "Milford", icon: "/states/sanfranciscotwo.svg" },
      { name: "Seaford", icon: "/states/sanfranciscothree.svg" },
      { name: "Georgetown", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  florida: {
    slug: "florida",
    name: "Florida",
    residentsServed: "9,450+",
    abbreviation: "FL",
    metaTitle: "Florida ESA Letter Online with Licensed Therapist | My ESA Therapist",
    metaDescription: "Official Florida ESA Letter online evaluations with state-licensed therapists. Fully compliant with Florida Senate Bill 1084 and FHA housing protections.",
    benefitsImage: "/states/statewhobenefits-florida.png",
    benefitsImageMobile: "/states/statewhobenefits-florida_mobile.png",
    benefitsImageTablet: "/states/statewhobenefits-florida_tablet.png",
    whoQualifiesImage: "/states/statewhoqualifies-florida.png",
    whoQualifiesAspect: "699/1053",
    whoQualifiesImageMobile: "/states/statewhoqualifies-florida_mobile.png",
    whoQualifiesImageTablet: "/states/statewhoqualifies-florida_tablet.png",
    cities: [
      { name: "Miami", icon: "/states/losangeles.svg" },
      { name: "Orlando", icon: "/states/sanfrancisco.svg" },
      { name: "Tampa", icon: "/states/losangelestwo.svg" },
      { name: "Jacksonville", icon: "/states/losangelesfour.svg" },
      { name: "Fort Lauderdale", icon: "/states/losangelesthree.svg" },
      { name: "St. Petersburg", icon: "/states/sanfranciscotwo.svg" },
      { name: "Tallahassee", icon: "/states/sanfranciscothree.svg" },
      { name: "Port St. Lucie", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  georgia: {
    slug: "georgia",
    name: "Georgia",
    residentsServed: "6,000+",
    abbreviation: "GA",
    metaTitle: "Georgia ESA Letter Evaluations by Licensed Therapists | My ESA Therapist",
    metaDescription: "Georgia ESA Letter evaluations conducted by licensed therapists. Transparent pricing, secure telehealth, and compliant ESA documentation.",
    cities: [
      { name: "Atlanta", icon: "/states/losangeles.svg" },
      { name: "Augusta", icon: "/states/sanfrancisco.svg" },
      { name: "Columbus", icon: "/states/losangelestwo.svg" },
      { name: "Macon", icon: "/states/losangelesfour.svg" },
      { name: "Savannah", icon: "/states/losangelesthree.svg" },
      { name: "Athens", icon: "/states/sanfranciscotwo.svg" },
      { name: "Sandy Springs", icon: "/states/sanfranciscothree.svg" },
      { name: "Roswell", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  hawaii: {
    slug: "hawaii",
    name: "Hawaii",
    residentsServed: "6,500+",
    abbreviation: "HI",
    metaTitle: "Hawaii ESA Letter from Licensed Therapists | My ESA Therapist",
    metaDescription: "Hawaii ESA Letter evaluations conducted by licensed therapists. Secure telehealth consultation for legitimate housing accommodation documentation.",
    cities: [
      { name: "Honolulu", icon: "/states/losangeles.svg" },
      { name: "Hilo", icon: "/states/sanfrancisco.svg" },
      { name: "Kailua", icon: "/states/losangelestwo.svg" },
      { name: "Kaneohe", icon: "/states/losangelesfour.svg" },
      { name: "Waipahu", icon: "/states/losangelesthree.svg" },
      { name: "Pearl City", icon: "/states/sanfranciscotwo.svg" },
      { name: "Kahului", icon: "/states/sanfranciscothree.svg" },
      { name: "Kapolei", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  idaho: {
    slug: "idaho",
    name: "Idaho",
    residentsServed: "6,000+",
    abbreviation: "ID",
    metaTitle: "Idaho ESA Letter Evaluations by Licensed Therapists | My ESA Therapist",
    metaDescription: "Idaho ESA Letter evaluations by state-licensed mental health professionals. Secure telehealth process aligned with federal housing guidelines.",
    cities: [
      { name: "Boise", icon: "/states/losangeles.svg" },
      { name: "Meridian", icon: "/states/sanfrancisco.svg" },
      { name: "Nampa", icon: "/states/losangelestwo.svg" },
      { name: "Idaho Falls", icon: "/states/losangelesfour.svg" },
      { name: "Caldwell", icon: "/states/losangelesthree.svg" },
      { name: "Pocatello", icon: "/states/sanfranciscotwo.svg" },
      { name: "Coeur d'Alene", icon: "/states/sanfranciscothree.svg" },
      { name: "Twin Falls", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  illinois: {
    slug: "illinois",
    name: "Illinois",
    residentsServed: "5,700+",
    abbreviation: "IL",
    metaTitle: "Illinois ESA Letter Evaluation by Licensed Professionals | My ESA Therapist",
    metaDescription: "Illinois ESA Letter evaluations conducted by licensed mental health professionals. Fast telehealth consultation for FHA housing protections.",
    cities: [
      { name: "Chicago", icon: "/states/losangeles.svg" },
      { name: "Aurora", icon: "/states/sanfrancisco.svg" },
      { name: "Joliet", icon: "/states/losangelestwo.svg" },
      { name: "Naperville", icon: "/states/losangelesfour.svg" },
      { name: "Rockford", icon: "/states/losangelesthree.svg" },
      { name: "Elgin", icon: "/states/sanfranciscotwo.svg" },
      { name: "Springfield", icon: "/states/sanfranciscothree.svg" },
      { name: "Peoria", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  indiana: {
    slug: "indiana",
    name: "Indiana",
    residentsServed: "6,500+",
    abbreviation: "IN",
    metaTitle: "Indiana ESA Letter Evaluations by Licensed Therapists | My ESA Therapist",
    metaDescription: "Indiana ESA Letter evaluations conducted by licensed therapists. Transparent pricing, secure telehealth, and compliant ESA documentation.",
    cities: [
      { name: "Indianapolis", icon: "/states/losangeles.svg" },
      { name: "Fort Wayne", icon: "/states/sanfrancisco.svg" },
      { name: "Evansville", icon: "/states/losangelestwo.svg" },
      { name: "South Bend", icon: "/states/losangelesfour.svg" },
      { name: "Carmel", icon: "/states/losangelesthree.svg" },
      { name: "Fishers", icon: "/states/sanfranciscotwo.svg" },
      { name: "Bloomington", icon: "/states/sanfranciscothree.svg" },
      { name: "Hammond", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  iowa: {
    slug: "iowa",
    name: "Iowa",
    residentsServed: "4,000+",
    abbreviation: "IA",
    metaTitle: "Iowa ESA Letter Evaluations by Licensed Therapists | My ESA Therapist",
    metaDescription: "Iowa ESA Letter evaluations conducted by licensed therapists. Secure telehealth consultation for FHA housing protections.",
    cities: [
      { name: "Des Moines", icon: "/states/losangeles.svg" },
      { name: "Cedar Rapids", icon: "/states/sanfrancisco.svg" },
      { name: "Davenport", icon: "/states/losangelestwo.svg" },
      { name: "Sioux City", icon: "/states/losangelesfour.svg" },
      { name: "Iowa City", icon: "/states/losangelesthree.svg" },
      { name: "Waterloo", icon: "/states/sanfranciscotwo.svg" },
      { name: "Ames", icon: "/states/sanfranciscothree.svg" },
      { name: "Council Bluffs", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  kansas: {
    slug: "kansas",
    name: "Kansas",
    residentsServed: "5,000+",
    abbreviation: "KS",
    metaTitle: "Kansas ESA Letter Evaluations by Licensed Therapists | My ESA Therapist",
    metaDescription: "Kansas ESA Letter evaluations conducted by state-licensed mental health professionals. Secure telehealth process for FHA compliance.",
    cities: [
      { name: "Wichita", icon: "/states/losangeles.svg" },
      { name: "Overland Park", icon: "/states/sanfrancisco.svg" },
      { name: "Kansas City", icon: "/states/losangelestwo.svg" },
      { name: "Olathe", icon: "/states/losangelesfour.svg" },
      { name: "Topeka", icon: "/states/losangelesthree.svg" },
      { name: "Lawrence", icon: "/states/sanfranciscotwo.svg" },
      { name: "Shawnee", icon: "/states/sanfranciscothree.svg" },
      { name: "Manhattan", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  kentucky: {
    slug: "kentucky",
    name: "Kentucky",
    residentsServed: "6,000+",
    abbreviation: "KY",
    metaTitle: "Kentucky ESA Letter From Licensed Professionals | My ESA Therapist",
    metaDescription: "Get an official Kentucky ESA Letter online from state-licensed healthcare providers. Compliant with Fair Housing Act guidelines.",
    cities: [
      { name: "Louisville", icon: "/states/losangeles.svg" },
      { name: "Lexington", icon: "/states/sanfrancisco.svg" },
      { name: "Bowling Green", icon: "/states/losangelestwo.svg" },
      { name: "Owensboro", icon: "/states/losangelesfour.svg" },
      { name: "Covington", icon: "/states/losangelesthree.svg" },
      { name: "Georgetown", icon: "/states/sanfranciscotwo.svg" },
      { name: "Richmond", icon: "/states/sanfranciscothree.svg" },
      { name: "Florence", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  louisiana: {
    slug: "louisiana",
    name: "Louisiana",
    residentsServed: "7,300+",
    abbreviation: "LA",
    metaTitle: "Louisiana ESA Letter From Licensed Professionals | My ESA Therapist",
    metaDescription: "Louisiana ESA Letter evaluations conducted by licensed therapists. Fast, secure telehealth assessments for FHA housing protections.",
    cities: [
      { name: "New Orleans", icon: "/states/losangeles.svg" },
      { name: "Baton Rouge", icon: "/states/sanfrancisco.svg" },
      { name: "Shreveport", icon: "/states/losangelestwo.svg" },
      { name: "Lafayette", icon: "/states/losangelesfour.svg" },
      { name: "Lake Charles", icon: "/states/losangelesthree.svg" },
      { name: "Kenner", icon: "/states/sanfranciscotwo.svg" },
      { name: "Bossier City", icon: "/states/sanfranciscothree.svg" },
      { name: "Monroe", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  maine: {
    slug: "maine",
    name: "Maine",
    residentsServed: "6,000+",
    abbreviation: "ME",
    metaTitle: "Maine ESA Letter From Licensed Professionals | My ESA Therapist",
    metaDescription: "Maine ESA Letter evaluations conducted by licensed mental health professionals. Secure telehealth consultation for housing accommodations.",
    cities: [
      { name: "Portland", icon: "/states/losangeles.svg" },
      { name: "Lewiston", icon: "/states/sanfrancisco.svg" },
      { name: "Bangor", icon: "/states/losangelestwo.svg" },
      { name: "South Portland", icon: "/states/losangelesfour.svg" },
      { name: "Auburn", icon: "/states/losangelesthree.svg" },
      { name: "Biddeford", icon: "/states/sanfranciscotwo.svg" },
      { name: "Sanford", icon: "/states/sanfranciscothree.svg" },
      { name: "Augusta", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  maryland: {
    slug: "maryland",
    name: "Maryland",
    residentsServed: "6,000+",
    abbreviation: "MD",
    metaTitle: "Maryland ESA Letter From Licensed Professionals | My ESA Therapist",
    metaDescription: "Maryland ESA Letter evaluations by state-licensed healthcare providers. Secure telehealth process for FHA compliance.",
    cities: [
      { name: "Baltimore", icon: "/states/losangeles.svg" },
      { name: "Frederick", icon: "/states/sanfrancisco.svg" },
      { name: "Rockville", icon: "/states/losangelestwo.svg" },
      { name: "Gaithersburg", icon: "/states/losangelesfour.svg" },
      { name: "Bowie", icon: "/states/losangelesthree.svg" },
      { name: "Hagerstown", icon: "/states/sanfranciscotwo.svg" },
      { name: "Annapolis", icon: "/states/sanfranciscothree.svg" },
      { name: "College Park", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  massachusetts: {
    slug: "massachusetts",
    name: "Massachusetts",
    residentsServed: "7,356+",
    abbreviation: "MA",
    metaTitle: "Massachusetts ESA Letter from Licensed Therapists | My ESA Therapist",
    metaDescription: "Massachusetts ESA Letter evaluations conducted by licensed therapists. Transparent pricing, secure telehealth, and compliant ESA documentation.",
    cities: [
      { name: "Boston", icon: "/states/losangeles.svg" },
      { name: "Worcester", icon: "/states/sanfrancisco.svg" },
      { name: "Springfield", icon: "/states/losangelestwo.svg" },
      { name: "Cambridge", icon: "/states/losangelesfour.svg" },
      { name: "Lowell", icon: "/states/losangelesthree.svg" },
      { name: "Brockton", icon: "/states/sanfranciscotwo.svg" },
      { name: "New Bedford", icon: "/states/sanfranciscothree.svg" },
      { name: "Quincy", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  michigan: {
    slug: "michigan",
    name: "Michigan",
    residentsServed: "7,412+",
    abbreviation: "MI",
    metaTitle: "Michigan ESA Letter Online From Licensed Professionals | My ESA Therapist",
    metaDescription: "Michigan ESA Letter evaluations conducted by licensed mental health professionals. Secure telehealth assessments for FHA housing protections.",
    cities: [
      { name: "Detroit", icon: "/states/losangeles.svg" },
      { name: "Grand Rapids", icon: "/states/sanfrancisco.svg" },
      { name: "Warren", icon: "/states/losangelestwo.svg" },
      { name: "Sterling Heights", icon: "/states/losangelesfour.svg" },
      { name: "Ann Arbor", icon: "/states/losangelesthree.svg" },
      { name: "Lansing", icon: "/states/sanfranciscotwo.svg" },
      { name: "Dearborn", icon: "/states/sanfranciscothree.svg" },
      { name: "Clinton Township", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  minnesota: {
    slug: "minnesota",
    name: "Minnesota",
    residentsServed: "7,421+",
    abbreviation: "MN",
    metaTitle: "Minnesota ESA Letter Online From Licensed Professionals | My ESA Therapist",
    metaDescription: "Minnesota ESA Letter evaluations conducted by licensed therapists. Transparent pricing, secure telehealth, and compliant ESA documentation.",
    cities: [
      { name: "Minneapolis", icon: "/states/losangeles.svg" },
      { name: "St. Paul", icon: "/states/sanfrancisco.svg" },
      { name: "Rochester", icon: "/states/losangelestwo.svg" },
      { name: "Duluth", icon: "/states/losangelesfour.svg" },
      { name: "Bloomington", icon: "/states/losangelesthree.svg" },
      { name: "Brooklyn Park", icon: "/states/sanfranciscotwo.svg" },
      { name: "Plymouth", icon: "/states/sanfranciscothree.svg" },
      { name: "Woodbury", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  mississippi: {
    slug: "mississippi",
    name: "Mississippi",
    residentsServed: "6,261+",
    abbreviation: "MS",
    metaTitle: "Mississippi ESA Letter Online From Licensed Professionals | My ESA Therapist",
    metaDescription: "Mississippi ESA Letter evaluations conducted by licensed therapists. Secure telehealth consultation for housing accommodations.",
    cities: [
      { name: "Jackson", icon: "/states/losangeles.svg" },
      { name: "Gulfport", icon: "/states/sanfrancisco.svg" },
      { name: "Southaven", icon: "/states/losangelestwo.svg" },
      { name: "Biloxi", icon: "/states/losangelesfour.svg" },
      { name: "Hattiesburg", icon: "/states/losangelesthree.svg" },
      { name: "Olive Branch", icon: "/states/sanfranciscotwo.svg" },
      { name: "Tupelo", icon: "/states/sanfranciscothree.svg" },
      { name: "Meridian", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  missouri: {
    slug: "missouri",
    name: "Missouri",
    residentsServed: "6,736+",
    abbreviation: "MO",
    metaTitle: "Missouri ESA Letter Online From Licensed Professionals | My ESA Therapist",
    metaDescription: "Missouri ESA Letter evaluations conducted by licensed therapists. Transparent pricing, secure telehealth, and compliant ESA documentation.",
    cities: [
      { name: "Kansas City", icon: "/states/losangeles.svg" },
      { name: "St. Louis", icon: "/states/sanfrancisco.svg" },
      { name: "Springfield", icon: "/states/losangelestwo.svg" },
      { name: "Columbia", icon: "/states/losangelesfour.svg" },
      { name: "Independence", icon: "/states/losangelesthree.svg" },
      { name: "Lee's Summit", icon: "/states/sanfranciscotwo.svg" },
      { name: "O'Fallon", icon: "/states/sanfranciscothree.svg" },
      { name: "St. Charles", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  montana: {
    slug: "montana",
    name: "Montana",
    residentsServed: "7,395+",
    abbreviation: "MT",
    metaTitle: "Official Montana ESA Letter Online | Licensed Therapists | My ESA Therapist",
    metaDescription: "Montana ESA Letter evaluations by state-licensed mental health professionals. Secure telehealth process aligned with federal housing guidelines.",
    cities: [
      { name: "Billings", icon: "/states/losangeles.svg" },
      { name: "Missoula", icon: "/states/sanfrancisco.svg" },
      { name: "Great Falls", icon: "/states/losangelestwo.svg" },
      { name: "Bozeman", icon: "/states/losangelesfour.svg" },
      { name: "Helena", icon: "/states/losangelesthree.svg" },
      { name: "Kalispell", icon: "/states/sanfranciscotwo.svg" },
      { name: "Butte", icon: "/states/sanfranciscothree.svg" },
      { name: "Belgrade", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  nebraska: {
    slug: "nebraska",
    name: "Nebraska",
    residentsServed: "7,410+",
    abbreviation: "NE",
    metaTitle: "Official Nebraska ESA Letter Online | Licensed Therapists | My ESA Therapist",
    metaDescription: "Nebraska ESA Letter evaluations conducted by licensed therapists. Transparent pricing, secure telehealth, and compliant ESA documentation.",
    cities: [
      { name: "Omaha", icon: "/states/losangeles.svg" },
      { name: "Lincoln", icon: "/states/sanfrancisco.svg" },
      { name: "Bellevue", icon: "/states/losangelestwo.svg" },
      { name: "Grand Island", icon: "/states/losangelesfour.svg" },
      { name: "Kearney", icon: "/states/losangelesthree.svg" },
      { name: "Fremont", icon: "/states/sanfranciscotwo.svg" },
      { name: "Hastings", icon: "/states/sanfranciscothree.svg" },
      { name: "Norfolk", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  nevada: {
    slug: "nevada",
    name: "Nevada",
    residentsServed: "7,450+",
    abbreviation: "NV",
    metaTitle: "Official Nevada ESA Letter Online | Licensed Therapists | My ESA Therapist",
    metaDescription: "Nevada ESA Letter evaluations conducted by licensed mental health professionals. Fast telehealth consultation for FHA housing protections.",
    cities: [
      { name: "Las Vegas", icon: "/states/losangeles.svg" },
      { name: "Henderson", icon: "/states/sanfrancisco.svg" },
      { name: "Reno", icon: "/states/losangelestwo.svg" },
      { name: "North Las Vegas", icon: "/states/losangelesfour.svg" },
      { name: "Sparks", icon: "/states/losangelesthree.svg" },
      { name: "Carson City", icon: "/states/sanfranciscotwo.svg" },
      { name: "Fernley", icon: "/states/sanfranciscothree.svg" },
      { name: "Elko", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  "new-york": {
    slug: "new-york",
    name: "New York",
    residentsServed: "7,890+",
    abbreviation: "NY",
    metaTitle: "New York ESA Letter Online with Licensed Therapist | My ESA Therapist",
    metaDescription: "Official New York ESA Letter online evaluations with state-licensed therapists. Fully compliant with New York state regulations and federal Fair Housing Act.",
    benefitsImage: "/states/statewhobenefits-newyork.png",
    benefitsImageMobile: "/states/statewhobenefits-newyork_mobile.png",
    benefitsImageTablet: "/states/statewhobenefits-newyork_tablet.png",
    whoQualifiesImage: "/states/statewhoqualifies-newyork.png",
    whoQualifiesAspect: "699/1053",
    whoQualifiesImageMobile: "/states/statewhoqualifies-newyork_mobile.png",
    whoQualifiesImageTablet: "/states/statewhoqualifies-newyork_tablet.png",
    cities: [
      { name: "New York City", icon: "/states/losangeles.svg" },
      { name: "Buffalo", icon: "/states/sanfrancisco.svg" },
      { name: "Rochester", icon: "/states/losangelestwo.svg" },
      { name: "Yonkers", icon: "/states/losangelesfour.svg" },
      { name: "Syracuse", icon: "/states/losangelesthree.svg" },
      { name: "Albany", icon: "/states/sanfranciscotwo.svg" },
      { name: "New Rochelle", icon: "/states/sanfranciscothree.svg" },
      { name: "Mount Vernon", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  texas: {
    slug: "texas",
    name: "Texas",
    residentsServed: "8,940+",
    abbreviation: "TX",
    metaTitle: "Texas ESA Letter Online with Licensed Therapist | My ESA Therapist",
    metaDescription: "Get an official Texas ESA Letter online from state-licensed mental health professionals. 100% compliant with Texas Property Code and the federal Fair Housing Act.",
    benefitsImage: "/states/statewhobenefits-texas.png",
    benefitsImageMobile: "/states/statewhobenefits-texas_mobile.png",
    benefitsImageTablet: "/states/statewhobenefits-texas_tablet.png",
    whoQualifiesImage: "/states/statewhoqualifies-texas.png",
    whoQualifiesAspect: "712/886",
    whoQualifiesImageMobile: "/states/statewhoqualifies-texas_mobile.png",
    whoQualifiesImageTablet: "/states/statewhoqualifies-texas_tablet.png",
    cities: [
      { name: "Houston", icon: "/states/losangeles.svg" },
      { name: "San Antonio", icon: "/states/sanfrancisco.svg" },
      { name: "Dallas", icon: "/states/losangelestwo.svg" },
      { name: "Austin", icon: "/states/losangelesfour.svg" },
      { name: "Fort Worth", icon: "/states/losangelesthree.svg" },
      { name: "El Paso", icon: "/states/sanfranciscotwo.svg" },
      { name: "Arlington", icon: "/states/sanfranciscothree.svg" },
      { name: "Corpus Christi", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  washington: {
    slug: "washington",
    name: "Washington",
    residentsServed: "7,395+",
    abbreviation: "WA",
    metaTitle: "Washington ESA Letter Online with Licensed Therapist | My ESA Therapist",
    metaDescription: "Get an official Washington ESA Letter online from state-licensed mental health professionals. 100% compliant with Washington law and the federal Fair Housing Act.",
    benefitsImage: "/states/statewhobenefits-washington.png",
    benefitsImageMobile: "/states/statewhobenefits-washington_mobile.png",
    benefitsImageTablet: "/states/statewhobenefits-washington_tablet.png",
    whoQualifiesImage: "/states/statewhoqualifies-washington.png",
    whoQualifiesAspect: "697/827",
    whoQualifiesImageMobile: "/states/statewhoqualifies-washington_mobile.png",
    whoQualifiesImageTablet: "/states/statewhoqualifies-washington_tablet.png",
    cities: [
      { name: "Seattle", icon: "/states/losangeles.svg" },
      { name: "Spokane", icon: "/states/sanfrancisco.svg" },
      { name: "Tacoma", icon: "/states/losangelestwo.svg" },
      { name: "Vancouver", icon: "/states/losangelesfour.svg" },
      { name: "Bellevue", icon: "/states/losangelesthree.svg" },
      { name: "Everett", icon: "/states/sanfranciscotwo.svg" },
      { name: "Kent", icon: "/states/sanfranciscothree.svg" },
      { name: "Renton", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  wisconsin: {
    slug: "wisconsin",
    name: "Wisconsin",
    residentsServed: "7,395+",
    abbreviation: "WI",
    metaTitle: "Wisconsin ESA Letter Online with Licensed Therapist | My ESA Therapist",
    metaDescription: "Wisconsin ESA Letter evaluations conducted by licensed therapists. Transparent pricing, secure telehealth, and compliant ESA documentation.",
    benefitsImage: "/states/statewhobenefits-wisconsin.png",
    benefitsImageMobile: "/states/statewhobenefits-wisconsin_mobile.png",
    benefitsImageTablet: "/states/statewhobenefits-wisconsin_tablet.png",
    whoQualifiesImage: "/states/statewhoqualifies-wisconsin.png",
    whoQualifiesAspect: "698/827",
    whoQualifiesImageMobile: "/states/statewhoqualifies-wisconsin_mobile.png",
    whoQualifiesImageTablet: "/states/statewhoqualifies-wisconsin_tablet.png",
    cities: [
      { name: "Milwaukee", icon: "/states/losangeles.svg" },
      { name: "Madison", icon: "/states/sanfrancisco.svg" },
      { name: "Green Bay", icon: "/states/losangelestwo.svg" },
      { name: "Kenosha", icon: "/states/losangelesfour.svg" },
      { name: "Racine", icon: "/states/losangelesthree.svg" },
      { name: "Appleton", icon: "/states/sanfranciscotwo.svg" },
      { name: "Waukesha", icon: "/states/sanfranciscothree.svg" },
      { name: "Oshkosh", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  wyoming: {
    slug: "wyoming",
    name: "Wyoming",
    residentsServed: "6,537+",
    abbreviation: "WY",
    metaTitle: "Wyoming ESA Letter Online with Licensed Therapist | My ESA Therapist",
    metaDescription: "Get an official Wyoming ESA Letter online from state-licensed healthcare providers. Compliant with Fair Housing Act guidelines and state rules.",
    benefitsImage: "/states/statewhobenefits-wyoming.png",
    benefitsImageMobile: "/states/statewhobenefits-wyoming_mobile.png",
    benefitsImageTablet: "/states/statewhobenefits-wyoming_tablet.png",
    whoQualifiesImage: "/states/statewhoqualifies-wyoming.png",
    whoQualifiesAspect: "704/915",
    whoQualifiesImageMobile: "/states/statewhoqualifies-wyoming_mobile.png",
    whoQualifiesImageTablet: "/states/statewhoqualifies-wyoming_tablet.png",
    cities: [
      { name: "Cheyenne", icon: "/states/losangeles.svg" },
      { name: "Casper", icon: "/states/sanfrancisco.svg" },
      { name: "Laramie", icon: "/states/losangelestwo.svg" },
      { name: "Gillette", icon: "/states/losangelesfour.svg" },
      { name: "Rock Springs", icon: "/states/losangelesthree.svg" },
      { name: "Sheridan", icon: "/states/sanfranciscotwo.svg" },
      { name: "Green River", icon: "/states/sanfranciscothree.svg" },
      { name: "Evanston", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  "new-hampshire": {
    slug: "new-hampshire",
    name: "New Hampshire",
    residentsServed: "6,200+",
    abbreviation: "NH",
    metaTitle: "New Hampshire ESA Letter Evaluations by Licensed Professionals | My ESA Therapist",
    metaDescription: "Connect with licensed mental health professionals in New Hampshire for legitimate, FHA-compliant Emotional Support Animal (ESA) letters. Quick telehealth evaluations.",
    cities: [
      { name: "Manchester", icon: "/states/losangeles.svg" },
      { name: "Nashua", icon: "/states/sanfrancisco.svg" },
      { name: "Concord", icon: "/states/losangelestwo.svg" },
      { name: "Dover", icon: "/states/losangelesfour.svg" },
      { name: "Rochester", icon: "/states/losangelesthree.svg" },
      { name: "Keene", icon: "/states/sanfranciscotwo.svg" },
      { name: "Portsmouth", icon: "/states/sanfranciscothree.svg" },
      { name: "Laconia", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  "new-jersey": {
    slug: "new-jersey",
    name: "New Jersey",
    residentsServed: "8,150+",
    abbreviation: "NJ",
    metaTitle: "New Jersey ESA Letter Evaluations by Licensed Professionals | My ESA Therapist",
    metaDescription: "New Jersey ESA Letter evaluations by state-licensed mental health professionals. Reliable telehealth assessments for Fair Housing Act compliance.",
    cities: [
      { name: "Newark", icon: "/states/losangeles.svg" },
      { name: "Jersey City", icon: "/states/sanfrancisco.svg" },
      { name: "Paterson", icon: "/states/losangelestwo.svg" },
      { name: "Elizabeth", icon: "/states/losangelesfour.svg" },
      { name: "Lakewood", icon: "/states/losangelesthree.svg" },
      { name: "Edison", icon: "/states/sanfranciscotwo.svg" },
      { name: "Woodbridge", icon: "/states/sanfranciscothree.svg" },
      { name: "Toms River", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  "new-mexico": {
    slug: "new-mexico",
    name: "New Mexico",
    residentsServed: "5,800+",
    abbreviation: "NM",
    metaTitle: "New Mexico ESA Letter From Licensed Professionals | My ESA Therapist",
    metaDescription: "Get an official New Mexico ESA Letter online from state-licensed healthcare providers. Compliant with Fair Housing Act guidelines.",
    cities: [
      { name: "Albuquerque", icon: "/states/losangeles.svg" },
      { name: "Las Cruces", icon: "/states/sanfrancisco.svg" },
      { name: "Rio Rancho", icon: "/states/losangelestwo.svg" },
      { name: "Santa Fe", icon: "/states/losangelesfour.svg" },
      { name: "Roswell", icon: "/states/losangelesthree.svg" },
      { name: "Farmington", icon: "/states/sanfranciscotwo.svg" },
      { name: "Hobbs", icon: "/states/sanfranciscothree.svg" },
      { name: "Clovis", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  "north-carolina": {
    slug: "north-carolina",
    name: "North Carolina",
    residentsServed: "8,640+",
    abbreviation: "NC",
    metaTitle: "North Carolina ESA Letter From Licensed Therapist | My ESA Therapist",
    metaDescription: "North Carolina ESA Letter evaluations conducted by licensed therapists. Transparent pricing, secure telehealth, and compliant ESA documentation.",
    cities: [
      { name: "Charlotte", icon: "/states/losangeles.svg" },
      { name: "Raleigh", icon: "/states/sanfrancisco.svg" },
      { name: "Greensboro", icon: "/states/losangelestwo.svg" },
      { name: "Durham", icon: "/states/losangelesfour.svg" },
      { name: "Winston-Salem", icon: "/states/losangelesthree.svg" },
      { name: "Fayetteville", icon: "/states/sanfranciscotwo.svg" },
      { name: "Cary", icon: "/states/sanfranciscothree.svg" },
      { name: "Wilmington", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  "north-dakota": {
    slug: "north-dakota",
    name: "North Dakota",
    residentsServed: "4,800+",
    abbreviation: "ND",
    metaTitle: "North Dakota ESA Letter Evaluations by Licensed Professionals | My ESA Therapist",
    metaDescription: "Connect with North Dakota-licensed mental health professionals for a legitimate, FHA-compliant Emotional Support Animal (ESA) letter evaluation online.",
    cities: [
      { name: "Fargo", icon: "/states/losangeles.svg" },
      { name: "Bismarck", icon: "/states/sanfrancisco.svg" },
      { name: "Grand Forks", icon: "/states/losangelestwo.svg" },
      { name: "Minot", icon: "/states/losangelesfour.svg" },
      { name: "West Fargo", icon: "/states/losangelesthree.svg" },
      { name: "Williston", icon: "/states/sanfranciscotwo.svg" },
      { name: "Dickinson", icon: "/states/sanfranciscothree.svg" },
      { name: "Mandan", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  ohio: {
    slug: "ohio",
    name: "Ohio",
    residentsServed: "8,920+",
    abbreviation: "OH",
    metaTitle: "Ohio ESA Letter Online with Licensed Therapist | My ESA Therapist",
    metaDescription: "Get an official Ohio ESA Letter online from state-licensed healthcare providers. Fully compliant with Ohio Civil Rights Commission guidelines and FHA regulations.",
    cities: [
      { name: "Columbus", icon: "/states/losangeles.svg" },
      { name: "Cleveland", icon: "/states/sanfrancisco.svg" },
      { name: "Cincinnati", icon: "/states/losangelestwo.svg" },
      { name: "Toledo", icon: "/states/losangelesfour.svg" },
      { name: "Akron", icon: "/states/losangelesthree.svg" },
      { name: "Dayton", icon: "/states/sanfranciscotwo.svg" },
      { name: "Parma", icon: "/states/sanfranciscothree.svg" },
      { name: "Canton", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  oklahoma: {
    slug: "oklahoma",
    name: "Oklahoma",
    residentsServed: "5,950+",
    abbreviation: "OK",
    metaTitle: "Oklahoma ESA Letter Evaluations by Licensed Therapists | My ESA Therapist",
    metaDescription: "Oklahoma ESA Letter evaluations conducted by state-licensed mental health professionals. Secure telehealth process for FHA housing compliance.",
    cities: [
      { name: "Oklahoma City", icon: "/states/losangeles.svg" },
      { name: "Tulsa", icon: "/states/sanfrancisco.svg" },
      { name: "Norman", icon: "/states/losangelestwo.svg" },
      { name: "Broken Arrow", icon: "/states/losangelesfour.svg" },
      { name: "Edmond", icon: "/states/losangelesthree.svg" },
      { name: "Lawton", icon: "/states/sanfranciscotwo.svg" },
      { name: "Moore", icon: "/states/sanfranciscothree.svg" },
      { name: "Midwest City", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  oregon: {
    slug: "oregon",
    name: "Oregon",
    residentsServed: "7,120+",
    abbreviation: "OR",
    metaTitle: "Oregon ESA Letter Online with Licensed Therapist | My ESA Therapist",
    metaDescription: "Connect with Oregon-licensed mental health professionals for an official ESA evaluation. 100% compliant with Oregon housing laws and federal regulations.",
    cities: [
      { name: "Portland", icon: "/states/losangeles.svg" },
      { name: "Eugene", icon: "/states/sanfrancisco.svg" },
      { name: "Salem", icon: "/states/losangelestwo.svg" },
      { name: "Gresham", icon: "/states/losangelesfour.svg" },
      { name: "Hillsboro", icon: "/states/losangelesthree.svg" },
      { name: "Beaverton", icon: "/states/sanfranciscotwo.svg" },
      { name: "Bend", icon: "/states/sanfranciscothree.svg" },
      { name: "Medford", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  pennsylvania: {
    slug: "pennsylvania",
    name: "Pennsylvania",
    residentsServed: "8,430+",
    abbreviation: "PA",
    metaTitle: "Pennsylvania ESA Letter Online with Licensed Therapist | My ESA Therapist",
    metaDescription: "Official Pennsylvania ESA Letter online evaluations with state-licensed therapists. Fully compliant with Pennsylvania Human Relations Act and FHA protections.",
    cities: [
      { name: "Philadelphia", icon: "/states/losangeles.svg" },
      { name: "Pittsburgh", icon: "/states/sanfrancisco.svg" },
      { name: "Allentown", icon: "/states/losangelestwo.svg" },
      { name: "Reading", icon: "/states/losangelesfour.svg" },
      { name: "Erie", icon: "/states/losangelesthree.svg" },
      { name: "Upper Darby", icon: "/states/sanfranciscotwo.svg" },
      { name: "Scranton", icon: "/states/sanfranciscothree.svg" },
      { name: "Lancaster", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  "south-dakota": {
    slug: "south-dakota",
    name: "South Dakota",
    residentsServed: "4,250+",
    abbreviation: "SD",
    metaTitle: "South Dakota ESA Letter Evaluations by Licensed Therapists | My ESA Therapist",
    metaDescription: "South Dakota ESA Letter evaluations conducted by licensed therapists. Transparent pricing, secure telehealth, and compliant ESA documentation.",
    benefitsImage: "/states/statewhobenefits-southdakota.png",
    benefitsImageMobile: "/states/statewhobenefits-southdakota_mobile.png",
    benefitsImageTablet: "/states/statewhobenefits-southdakota_tablet.png",
    whoQualifiesImage: "/states/statewhoqualifies-southdakota.png",
    whoQualifiesAspect: "699/1053",
    whoQualifiesImageMobile: "/states/statewhoqualifies-southdakota_mobile.png",
    whoQualifiesImageTablet: "/states/statewhoqualifies-southdakota_tablet.png",
    cities: [
      { name: "Sioux Falls", icon: "/states/losangeles.svg" },
      { name: "Rapid City", icon: "/states/sanfrancisco.svg" },
      { name: "Aberdeen", icon: "/states/losangelestwo.svg" },
      { name: "Brookings", icon: "/states/losangelesfour.svg" },
      { name: "Watertown", icon: "/states/losangelesthree.svg" },
      { name: "Mitchell", icon: "/states/sanfranciscotwo.svg" },
      { name: "Yankton", icon: "/states/sanfranciscothree.svg" },
      { name: "Pierre", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  utah: {
    slug: "utah",
    name: "Utah",
    residentsServed: "5,400+",
    abbreviation: "UT",
    metaTitle: "Utah ESA Letter Evaluations by Licensed Professionals | My ESA Therapist",
    metaDescription: "Connect with Utah-licensed mental health professionals for an official ESA evaluation. 100% compliant with Utah housing laws and federal regulations.",
    benefitsImage: "/states/statewhobenefits-uttah.png",
    benefitsImageMobile: "/states/statewhobenefits-uttah_mobile.png",
    benefitsImageTablet: "/states/statewhobenefits-uttah_tablet.png",
    whoQualifiesImage: "/states/statewhoqualifies-uttah.png",
    whoQualifiesAspect: "699/1053",
    whoQualifiesImageMobile: "/states/statewhoqualifies-uttah_mobile.png",
    whoQualifiesImageTablet: "/states/statewhoqualifies-uttah_tablet.png",
    cities: [
      { name: "Salt Lake City", icon: "/states/losangeles.svg" },
      { name: "West Valley City", icon: "/states/sanfrancisco.svg" },
      { name: "Provo", icon: "/states/losangelestwo.svg" },
      { name: "West Jordan", icon: "/states/losangelesfour.svg" },
      { name: "Orem", icon: "/states/losangelesthree.svg" },
      { name: "Sandy", icon: "/states/sanfranciscotwo.svg" },
      { name: "Ogden", icon: "/states/sanfranciscothree.svg" },
      { name: "St. George", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  "south-carolina": {
    slug: "south-carolina",
    name: "South Carolina",
    residentsServed: "6,800+",
    abbreviation: "SC",
    metaTitle: "South Carolina ESA Letter Online with Licensed Therapist | My ESA Therapist",
    metaDescription: "South Carolina ESA Letter evaluations conducted by licensed therapists. Transparent pricing, secure telehealth, and compliant ESA documentation under FHA.",
    benefitsImage: "/states/statewhobenefits-southcarolina.png",
    benefitsImageMobile: "/states/statewhobenefits-southcarolina_mobile.png",
    benefitsImageTablet: "/states/statewhobenefits-southcarolina_tablet.png",
    whoQualifiesImage: "/states/statewhoqualifies-southcarolina.png",
    whoQualifiesAspect: "699/1053",
    whoQualifiesImageMobile: "/states/statewhoqualifies-southcarolina_mobile.png",
    whoQualifiesImageTablet: "/states/statewhoqualifies-southcarolina_tablet.png",
    cities: [
      { name: "Charleston", icon: "/states/losangeles.svg" },
      { name: "Columbia", icon: "/states/sanfrancisco.svg" },
      { name: "North Charleston", icon: "/states/losangelestwo.svg" },
      { name: "Mount Pleasant", icon: "/states/losangelesfour.svg" },
      { name: "Rock Hill", icon: "/states/losangelesthree.svg" },
      { name: "Greenville", icon: "/states/sanfranciscotwo.svg" },
      { name: "Summerville", icon: "/states/sanfranciscothree.svg" },
      { name: "Goose Creek", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  virginia: {
    slug: "virginia",
    name: "Virginia",
    residentsServed: "8,100+",
    abbreviation: "VA",
    metaTitle: "Virginia ESA Letter Online with Licensed Therapist | My ESA Therapist",
    metaDescription: "Official Virginia ESA Letter online evaluations with state-licensed therapists. Fully compliant with Virginia Fair Housing Law and federal regulations.",
    benefitsImage: "/states/statewhobenefits-virginia.png",
    benefitsImageMobile: "/states/statewhobenefits-virginia_mobile.png",
    benefitsImageTablet: "/states/statewhobenefits-virginia_tablet.png",
    whoQualifiesImage: "/states/statewhoqualifies-virginia.png",
    whoQualifiesAspect: "699/1053",
    whoQualifiesImageMobile: "/states/statewhoqualifies-virginia_mobile.png",
    whoQualifiesImageTablet: "/states/statewhoqualifies-virginia_tablet.png",
    cities: [
      { name: "Virginia Beach", icon: "/states/losangeles.svg" },
      { name: "Chesapeake", icon: "/states/sanfrancisco.svg" },
      { name: "Norfolk", icon: "/states/losangelestwo.svg" },
      { name: "Richmond", icon: "/states/losangelesfour.svg" },
      { name: "Newport News", icon: "/states/losangelesthree.svg" },
      { name: "Alexandria", icon: "/states/sanfranciscotwo.svg" },
      { name: "Hampton", icon: "/states/sanfranciscothree.svg" },
      { name: "Roanoke", icon: "/states/sanfranciscofour.svg" },
    ],
  },
  "west-virginia": {
    slug: "west-virginia",
    name: "West Virginia",
    residentsServed: "3,900+",
    abbreviation: "WV",
    metaTitle: "West Virginia ESA Letter Evaluations by Licensed Therapists | My ESA Therapist",
    metaDescription: "West Virginia ESA Letter evaluations conducted by state-licensed mental health professionals. Secure telehealth process for FHA housing compliance.",
    benefitsImage: "/states/statewhobenefits-westvirginia.png",
    benefitsImageMobile: "/states/statewhobenefits-westvirginia_mobile.png",
    benefitsImageTablet: "/states/statewhobenefits-westvirginia_tablet.png",
    whoQualifiesImage: "/states/statewhoqualifies-westvirginia.png",
    whoQualifiesAspect: "699/1053",
    whoQualifiesImageMobile: "/states/statewhoqualifies-westvirginia_mobile.png",
    whoQualifiesImageTablet: "/states/statewhoqualifies-westvirginia_tablet.png",
    cities: [
      { name: "Charleston", icon: "/states/losangeles.svg" },
      { name: "Huntington", icon: "/states/sanfrancisco.svg" },
      { name: "Morgantown", icon: "/states/losangelestwo.svg" },
      { name: "Parkersburg", icon: "/states/losangelesfour.svg" },
      { name: "Wheeling", icon: "/states/losangelesthree.svg" },
      { name: "Martinsburg", icon: "/states/sanfranciscotwo.svg" },
      { name: "Weirton", icon: "/states/sanfranciscothree.svg" },
      { name: "Fairmont", icon: "/states/sanfranciscofour.svg" },
    ],
  },
};

export function getStateSlug(rawSlug?: string): string {
  if (!rawSlug || typeof rawSlug !== "string") return "";
  const normalized = rawSlug.toLowerCase().replace(/^(esa-letter-|esa-)/, "");
  return normalized;
}

export function getStateData(slug: string): StateData | undefined {
  const normalizedSlug = getStateSlug(slug);
  return STATES_DATA[normalizedSlug];
}
