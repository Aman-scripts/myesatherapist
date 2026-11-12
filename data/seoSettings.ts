import type { Metadata } from "next";

export type SheetRobots = "image" | "full";
export type SheetOgType = "website" | "article";

export type SheetSeo = {
  title: string;
  description: string;
  robots: SheetRobots;
  ogType: SheetOgType;
};

export const SEO_SETTINGS: Record<string, SheetSeo> = {
  "/": {
    "title": "ESA Evaluations by Licensed Therapists- My ESA Therapist",
    "description": "Connect with state licensed mental health professionals for legitimate ESA Letter evaluations conducted through secure telehealth.",
    "robots": "image",
    "ogType": "website"
  },
  "/esa-letter-texas/": {
    "title": "Texas ESA Letter Evaluations by Licensed Therapists - My ESA Therapist",
    "description": "Get evaluated for texas ESA letter by licensed therapists. Secure online assessments with compliant housing documentation.",
    "robots": "full",
    "ogType": "website"
  },
  "/refund-policy/": {
    "title": "Refund & Cancellation Policy | My ESA Therapist",
    "description": "Review the refund policy of My ESA Therapist. Learn about eligibility, conditions, and how refunds are handled for ESA letter evaluations and services.",
    "robots": "image",
    "ogType": "article"
  },
  "/reviews/": {
    "title": "My ESA Therapist Reviews | Real Customer Experiences & Ratings",
    "description": "Read verified My ESA Therapist reviews from real customers. See ratings, experiences, and why clients trust our fast, legitimate ESA letter services.",
    "robots": "full",
    "ogType": "website"
  },
  "/blog/": {
    "title": "ESA Blog: Emotional Support Animal Articles & Resources | My ESA Therapist",
    "description": "Explore expert-written articles covering emotional support animals, ESA housing information, therapist evaluations, mental health support, and more.",
    "robots": "image",
    "ogType": "article"
  },
  "/esa-letter-for-housing/": {
    "title": "ESA Letter for Housing Online | Licensed & FHA-Compliant - My ESA Therapist",
    "description": "Facing 'no-pet' housing rules? Get an FHA-compliant ESA letter for housing online from a licensed therapist. Secure, confidential and pay only if approved.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-new-york/": {
    "title": "ESA Letter Evaluations in New York by Licensed Therapists - My ESA Therapist",
    "description": "My ESA Therapist offers ESA letter evaluations in New York by licensed therapists. Secure online assessments and HUD-compliant ESA letters for housing accommodations.",
    "robots": "image",
    "ogType": "website"
  },
  "/blog/esa-guide/": {
    "title": "ESA Guide: Emotional Support Animal Information & Resources | My ESA Therapist",
    "description": "Explore emotional support animal laws, housing rights, ESA benefits, therapist evaluations, and expert guidance in one complete ESA resource center.",
    "robots": "image",
    "ogType": "article"
  },
  "/esa-letter-california/": {
    "title": "California ESA Letter Evaluations by Licensed Therapists | My ESA Therapist",
    "description": "My ESA Therapist connects you with California-licensed therapists for ESA letter evaluations. AB 468 compliant, transparent pricing, secure platform.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-online/": {
    "title": "ESA Letter Online From Licensed Therapist | My ESA Therapist",
    "description": "Get an ESA letter online through a confidential evaluation with a licensed mental health professional. Start your ESA evaluation securely from home with My ESA Therapist.",
    "robots": "full",
    "ogType": "website"
  },
  "/contact-us/": {
    "title": "Connect With Our Customer Support Team | My ESA Therapist",
    "description": "Have a question? Our Customer Support team is ready to help you! Feel free to call us at (888) 412-4041 email us at contact@myesatherapist.com",
    "robots": "image",
    "ogType": "website"
  },
  "/psd-letter/": {
    "title": "Psychiatric Service Dog (PSD) Letter Online | My ESA Therapist",
    "description": "Need a Psychiatric Service Dog letter? My ESA Therapist connects you with licensed mental health professionals for confidential evaluations and legitimate PSD letters.",
    "robots": "full",
    "ogType": "website"
  },
  "/video-testimonials/": {
    "title": "ESA Letter Reviews - Video Reviews | My ESA Therapist",
    "description": "Watch real customer video testimonials about their ESA letter experience with My ESA Therapist. See how our process helps you get started quickly and easily.",
    "robots": "full",
    "ogType": "website"
  },
  "/privacy-policy/": {
    "title": "Privacy Policy | My ESA Therapist Data Protection & Security",
    "description": "Read the Privacy Policy of My ESA Therapist to learn how we collect, use, and protect your personal and health information with secure data practices.",
    "robots": "image",
    "ogType": "article"
  },
  "/esa-doctors/": {
    "title": "Licensed Therapists for ESA Letters | My ESA Therapist",
    "description": "Browse our network of licensed ESA doctors and therapists. Get evaluated online and receive a legally valid emotional support animal letter securely.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-illinois/": {
    "title": "Illinois ESA Letter Evaluation by Licensed Professionals | My ESA Therapist",
    "description": "Connect with Illinois licensed therapist for ESA evaluations. HIPAA-compliant telehealth. ESA letters in Illinois issued only when clinically appropriate.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-renewal/": {
    "title": "ESA Letter Renewal Online by Licensed Therapists | My ESA Therapist",
    "description": "Need to renew your ESA letter? My ESA Therapist offers simple online renewals with licensed therapists and quick turnaround.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-colorado/": {
    "title": "Colorado ESA Letter Evaluation by Licensed Therapists - My ESA Therapist",
    "description": "Get connected with licensed therapists in Colorado for a online ESA letter evaluation. Start your emotional support animal assessment today.",
    "robots": "image",
    "ogType": "website"
  },
  "/terms-of-use/": {
    "title": "Terms of Use | My ESA Therapist Legal & Service Policies",
    "description": "Read the Terms of Use for My ESA Therapist, including service policies, user responsibilities, payments, and ESA evaluation guidelines.",
    "robots": "image",
    "ogType": "article"
  },
  "/esa-laws/": {
    "title": "ESA Laws 2026: Federal & State Rules | My ESA Therapist",
    "description": "Complete guide to ESA laws in the U.S. Covers housing rights, landlord rules, ESA letters, state regulations, and what federal law does and doesn't allow.",
    "robots": "full",
    "ogType": "website"
  },
  "/state/": {
    "title": "ESA Evaluations by State | My ESA Therapist",
    "description": "Explore ESA evaluation options by state. Connect with licensed mental health professionals for compliant emotional support animal assessments.",
    "robots": "full",
    "ogType": "website"
  },
  "/blog/esa-guide/emotional-support-animal/": {
    "title": "What is an Emotional Support Animal? Benefits & Rights Guide | My ESA Therapist",
    "description": "Learn everything about Emotional Support Animals, including ESA letters, landlord rules, and legal protections.",
    "robots": "full",
    "ogType": "article"
  },
  "/hipaa-compliance/": {
    "title": "HIPAA Compliance & Data Privacy | My ESA Therapist",
    "description": "My ESA Therapist follows HIPAA-aligned standards to protect your data during ESA evaluations conducted by licensed mental health professionals.",
    "robots": "image",
    "ogType": "article"
  },
  "/about-us/": {
    "title": "About My ESA Therapist | Licensed ESA Evaluations You Can Trust",
    "description": "Learn how My ESA Therapist provides legitimate, HIPAA-compliant ESA evaluations through state-licensed mental health professionals across all 50 states.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-florida/": {
    "title": "Florida ESA Letter Evaluations by Licensed Therapists | My ESA Therapist",
    "description": "Get evaluated for a Florida ESA Letter online by licensed therapists. Confidential assessments for qualified individuals. Get evaluated today.",
    "robots": "full",
    "ogType": "website"
  },
  "/pricing/": {
    "title": "How Much Does an ESA Letter Cost in 2026? | My ESA Therapist",
    "description": "Discover ESA letter pricing, what's included, and how the evaluation works. Transparent costs with licensed professionals no hidden fees.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-washington/": {
    "title": "Washington ESA Letter from Licensed Therapists | My ESA Therapist",
    "description": "Need an ESA letter in Washington? My ESA Therapist connects you with licensed mental health professionals in Washington for online ESA letter evaluation.",
    "robots": "image",
    "ogType": "website"
  },
  "/esa-doctors/dr-robert-staff/": {
    "title": "Robert Staaf - Licensed Clinical Social Worker | My ESA Therapist",
    "description": "Consult Robert Staaf, a licensed therapist and animal advocate. Fast, secure ESA evaluations online with experienced mental health support.",
    "robots": "full",
    "ogType": "website"
  },
  "/blog/esa-guide/hud-guidance-for-emotional-support-animals/": {
    "title": "HUD ESA Guidelines 2026: What Changed for ESA Housing | My ESA Therapist",
    "description": "Learn what HUD's 2026 guidance changes mean for ESA housing requests, supporting documents, and Fair Housing Act protections.",
    "robots": "full",
    "ogType": "article"
  },
  "/blog/qualifying-conditions/conditions-that-may-qualify-for-an-esa/": {
    "title": "Which DSM-5 Conditions May Qualifies for an ESA Letter? My ESA Therapist",
    "description": "Explore which DSM-5 conditions may qualify for an ESA letter, including anxiety, depression, PTSD, ADHD, OCD, and other mental health conditions. Learn how eligibility works.",
    "robots": "full",
    "ogType": "article"
  },
  "/blog/qualifying-conditions/": {
    "title": "ESA Qualifying Conditions: What Conditions May Qualify? | My ESA Therapist",
    "description": "Explore mental health conditions that may qualify for an ESA letter, including anxiety, depression, PTSD, ADHD, and panic disorder. Learn about ESA eligibility.",
    "robots": "full",
    "ogType": "article"
  },
  "/blog/qualifying-conditions/esa-for-anxiety/": {
    "title": "ESA for Anxiety: Eligibility, Benefits & How to Qualify | My ESA Therapist",
    "description": "Wondering if anxiety qualifies for an ESA? Explore eligibility requirements, potential benefits, housing protections, and what you need to qualify.",
    "robots": "image",
    "ogType": "article"
  },
  "/blog/esa-guide/can-landlords-deny-emotional-support-animals/": {
    "title": "Can a Landlord Deny an Emotional Support Animal? | My ESA Therapist",
    "description": "Can a landlord legally deny your emotional support animal? Learn the exceptions under the Fair Housing Act, the 2026 HUD update, and what to do if you're denied.",
    "robots": "image",
    "ogType": "article"
  },
  "/blog/esa-guide/is-esa-registration-legit/": {
    "title": "ESA Registration: Is It Legit & Required? | My ESA Therapist",
    "description": "Is ESA registration required or legitimate? Learn the truth about ESA registries, ID cards, certificates, and what documentation actually matters for housing.",
    "robots": "full",
    "ogType": "article"
  },
  "/blog/esa-guide/esa-letter-sample/": {
    "title": "ESA Letter Sample: What a Legitimate ESA Letter Looks Like? | My ESA Therapist",
    "description": "Looking for an ESA letter sample? See what a legitimate ESA letter looks like, what it should include, and what landlords can verify.",
    "robots": "full",
    "ogType": "article"
  },
  "/blog/esa-guide/how-to-verify-an-esa-letter/": {
    "title": "ESA Letter Verification Checklist for Landlords and Tenants | My ESA Therapist",
    "description": "Not sure if an ESA letter is valid? Use this step-by-step checklist to verify ESA documentation, identify warning signs, and understand housing compliance requirements.",
    "robots": "image",
    "ogType": "article"
  },
  "/blog/esa-guide/esa-for-children/": {
    "title": "ESA for Children: Who Qualifies & Who Signs the Letter",
    "description": "Learn who qualifies for an ESA for children, who signs the ESA letter, parents' role, qualifying conditions, housing rights, and the evaluation process.",
    "robots": "full",
    "ogType": "article"
  },
  "/author/allyson-valley/": {
    "title": "Allyson Valley | My ESA Therapist",
    "description": "I'm a Licensed Professional Counselor (LPC-MHSP), Ph.D. in Counselor Education & Supervision, with over six years of experience leading and delivering care across crisis services, behavioral health programs, and healthcare systems.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-virginia/": {
    "title": "Virginia ESA Letter Evaluations by Licensed Therapists - My ESA Therapist",
    "description": "Connect with Virginia licensed therapists for ESA Letter evaluations. HIPAA-compliant telehealth. Virginia ESA letters issued only when clinically appropriate.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-minnesota/": {
    "title": "Minnesota ESA Letter Evaluation Online | My ESA Therapist",
    "description": "Looking for an ESA letter in Minnesota? My ESA Therapist offers online emotional support animal evaluations by licensed professionals.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-delaware/": {
    "title": "Delaware ESA Letter From Licensed Professionals | My ESA Therapist",
    "description": "Looking for an ESA letter in Delaware? My ESA Therapist helps you connect with licensed mental health professionals for a convenient online ESA evaluation.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-montana/": {
    "title": "Montana ESA Letter From Licensed Therapist | My ESA Therapist",
    "description": "Looking for a Montana ESA letter? My ESA Therapist connects you with licensed professionals for quick ESA evaluations online. Start Your ESA Evaluation Today.",
    "robots": "image",
    "ogType": "website"
  },
  "/esa-letter-oklahoma/": {
    "title": "ESA Letter Oklahoma – Secure Online Evaluation | My ESA Therapist",
    "description": "Start your Oklahoma ESA letter evaluation with My ESA Therapist by connecting with licensed mental health professionals through a secure online process.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-south-carolina/": {
    "title": "South Carolina ESA Letter Evaluation | My ESA Therapist",
    "description": "Need an ESA letter in South Carolina? My ESA Therapist connects you with licensed mental health professionals for a secure and simple online ESA evaluation.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-tennessee/": {
    "title": "Tennessee ESA Letter From Licensed Professional | My ESA Therapist",
    "description": "Need an ESA letter in Tennessee? My ESA Therapist connects you with licensed professionals for a secure and easy online ESA evaluation.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-idaho/": {
    "title": "Idaho ESA Letter Evaluation Online | My ESA Therapist",
    "description": "Need an ESA letter in Idaho? My ESA Therapist connects you with licensed mental health professionals for a secure online ESA Letter evaluation.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-west-virginia/": {
    "title": "West Virginia ESA Letter from Licensed Therapists | My ESA Therapist",
    "description": "Need an ESA letter in West Virginia? My ESA Therapist connects you with licensed mental health professionals in West Virginia for online ESA letter evaluation.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-maine/": {
    "title": "Maine ESA Letter from Licensed Therapists | My ESA Therapist",
    "description": "Need an ESA letter in Maine? My ESA Therapist connects you with licensed mental health professionals in Maine for a secure conline ESA Letter evaluation.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-kentucky/": {
    "title": "Kentucky ESA Letter from Licensed Therapists | My ESA Therapist",
    "description": "Looking for an ESA letter in Kentucky? My ESA Therapist connects you with licensed professionals in Kentucky for a secure online esa letter evaluation process.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-wyoming/": {
    "title": "Wyoming ESA Letter from Licensed Therapists | My ESA Therapist",
    "description": "Need an ESA letter in Wyoming? My ESA Therapist connects you with licensed mental health professionals for a secure and simple online ESA Letter evaluation.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-new-mexico/": {
    "title": "New Mexico ESA Letter From Licensed Therapist | My ESA Therapist",
    "description": "Need an ESA letter in New Mexico? My ESA Therapist connects you with licensed mental health professionals for a secure and simple online ESA evaluation.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-rhode-island/": {
    "title": "Rhode Island ESA Letter Evaluation | My ESA Therapist",
    "description": "Looking for an ESA letter in Rhode Island? My ESA Therapist helps you connect with licensed mental health professionals for esa letter evaluation.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-georgia/": {
    "title": "Georgia ESA Letter Evaluations by Licensed Therapists | My ESA Therapist",
    "description": "Georgia ESA Letter evaluations conducted by licensed therapists. Transparent pricing, secure telehealth, and compliant ESA documentation.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-kansas/": {
    "title": "Kansas ESA Letter from Licensed Therapists | My ESA Therapist",
    "description": "Need an ESA letter in Kansas? My ESA Therapist connects you with licensed mental health professionals for a secure and simple online ESA Letter evaluation.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-nevada/": {
    "title": "Nevada ESA Letter Evaluation Online | My ESA Therapist",
    "description": "Looking for an ESA letter in Nevada? Start your ESA evaluation by connecting with licensed professionals through My ESA Therapist.",
    "robots": "image",
    "ogType": "website"
  },
  "/esa-letter-michigan/": {
    "title": "Michigan ESA Letter Online From Licensed Professionals | My ESA Therapist",
    "description": "Need an ESA letter in Michigan? My ESA Therapist connects you with licensed mental health professionals for a secure online ESA evaluation. Apply today.",
    "robots": "image",
    "ogType": "website"
  },
  "/esa-letter-arizona/": {
    "title": "Arizona ESA Letter Evaluations by Licensed Therapists - My ESA Therapist",
    "description": "Begin a legitimate ESA Letter evaluation in Arizona with licensed therapist. Secure, HIPAA-compliant, and aligned with FHA guidelines.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-arkansas/": {
    "title": "Arkansas ESA Letter Evaluation by Licensed Therapists - My ESA Therapist",
    "description": "Connect with Arkansas licensed therapists for ESA letter evaluations. HIPAA-compliant telehealth. Arkansas ESA letters issued only when clinically appropriate.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-nebraska/": {
    "title": "Nebraska ESA Letter From Licensed Therapist | My ESA Therapist",
    "description": "Need an ESA letter in Nebraska? My ESA Therapist connects you with licensed mental health professionals for a secure and simple online ESA evaluation.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-oregon/": {
    "title": "ESA Letter Oregon From Licensed Therapists | My ESA Therapist",
    "description": "Looking for an ESA letter in Oregon? Get evaluated by a state-licensed therapist online. Transparent pricing, no hidden fees.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-south-dakota/": {
    "title": "South Dakota ESA Letter from Licensed Therapists | My ESA Therapist",
    "description": "Need an ESA letter in South Dakota? My ESA Therapist connects you with licensed mental health professionals for a secure and simple online ESA Letter evaluation.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-massachusetts/": {
    "title": "Massachusetts ESA Letter from Licensed Therapists | My ESA Therapist",
    "description": "Need an ESA letter in Massachusetts? My ESA Therapist connects you with licensed mental health professionals for a secure and simple online ESA evaluation.",
    "robots": "image",
    "ogType": "website"
  },
  "/esa-letter-utah/": {
    "title": "Utah ESA Letter From Licensed Therapist | My ESA Therapist",
    "description": "Looking for an ESA letter in Utah? My ESA Therapist helps you connect with licensed mental health professionals for online esa letter evaluation in Utah.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-vermont/": {
    "title": "Vermont ESA Letter From Licensed Therapists | My ESA Therapist",
    "description": "Need an ESA letter in Vermont? My ESA Therapist connects you with licensed mental health professionals for a secure and simple online ESA letter evaluation.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-missouri/": {
    "title": "Missouri ESA Letter Online From Licensed Therapist | My ESA Therapist",
    "description": "Looking for a Missouri ESA letter? My ESA Therapist connects you with licensed professionals for quick ESA evaluations online. Start your application today.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-connecticut/": {
    "title": "Connecticut ESA Letter Evaluation by Licensed Therapist- My ESA Therapist",
    "description": "Connect with licensed therapist for ESA letter evaluations. HIPAA-compliant telehealth. ESA letter Connecticut issued only when clinically appropriate.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-north-carolina/": {
    "title": "North Carolina ESA Letter From Licensed Therapist | My ESA Therapist",
    "description": "Need an ESA letter in North Carolina? My ESA Therapist connects you with licensed mental health professionals for a secure online ESA letter evaluation.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-alaska/": {
    "title": "Alaska ESA Letter by Licensed Professionals | My ESA Therapist",
    "description": "Connect with Alaska licensed therapists for ESA letter evaluations through a secure telehealth platform. Private, professional, and supportive care.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-new-jersey/": {
    "title": "New Jersey ESA Letter From Licensed Therapist | My ESA Therapist",
    "description": "Need an ESA letter in New Jersey? My ESA Therapist connects you with licensed mental health professionals for a secure and convenient ESA Letter evaluation online.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-wisconsin/": {
    "title": "Wisconsin ESA Letter from Licensed Professionals | My ESA Therapist",
    "description": "Need an ESA letter in Wisconsin? My ESA Therapist connects you with licensed mental health professionals for a secure and simple online ESA evaluation.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-hawaii/": {
    "title": "Hawaii ESA Letter from Licensed Therapists | My ESA Therapist",
    "description": "Need an ESA letter in Hawaii? My ESA Therapist connects you with licensed mental health professionals for a secure online ESA Letter evaluation.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-north-dakota/": {
    "title": "North Dakota ESA Letter from Licensed Therapists | My ESA Therapist",
    "description": "Looking for an ESA letter in North Dakota? My ESA Therapist helps you connect with licensed mental health professionals for online esa letter evaluation.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-doctors/dr-leslie-k-gamble/": {
    "title": "ESA Evaluations by Leslie K. Gamble, LICSW | My ESA Therapist",
    "description": "Get evaluated by Leslie K. Gamble, LICSW, an experienced therapist offering ESA assessments and compassionate mental wellness care.",
    "robots": "image",
    "ogType": "website"
  },
  "/esa-doctors/dr-gaurav-patel/": {
    "title": "Dr. Gaurav Patel, MD | Family Medicine Physician | My ESA Therapist",
    "description": "Consult Dr. Gaurav Patel, MD, a Family Medicine Physician offering professional medical guidance and compassionate support through secure online consultations.",
    "robots": "image",
    "ogType": "website"
  },
  "/esa-laws/alabama/": {
    "title": "Alabama ESA Laws: Rules for Tenants & Landlords | My ESA Therapist",
    "description": "Learn Alabama ESA laws, FHA housing protections, ESA letter requirements, tenant rights, landlord rules, fees, and assistance animal regulations.",
    "robots": "image",
    "ogType": "website"
  },
  "/author/kiera-conrad/": {
    "title": "Kiera Conrad | My ESA Therapist",
    "description": "Kiera Conrad is a writer, editor, and educator from the US. She splits her time between the US and Ireland.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-alabama/": {
    "title": "ESA Letter in Alabama From Licensed Therapists | My ESA Therapist",
    "description": "Start your ESA letter evaluation with licensed therapist. Secure telehealth process and reliable ESA documentation in Alabama for housing needs.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-puerto-rico/": {
    "title": "Get Your Legitimate ESA Letter Online in Puerto Rico: Fast & Easy - My ESA Therapist",
    "description": "Follow our three-step process to get your ESA letter in Puerto Rico at $99 only. Fill in the form and get evaluated by licensed practitioners on the same day.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-iowa/": {
    "title": "Iowa ESA Letter From Licensed Professionals | My ESA Therapist",
    "description": "Need an ESA letter in Iowa? My ESA Therapist connects you with licensed mental health professionals for emotional support animal evaluation online.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-mississippi/": {
    "title": "Mississippi ESA Letter From Licensed Therapist | My ESA Therapist",
    "description": "Searching for an ESA letter in Mississippi? My ESA Therapist connects you with licensed mental health professionals for online esa letter evaluation.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-louisiana/": {
    "title": "Louisiana ESA Letter From Licensed Professionals | My ESA Therapist",
    "description": "Need an ESA letter in Louisiana? My ESA Therapist connects you with licensed therapists for a secure online ESA evaluation. Start your evaluation today.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-maryland/": {
    "title": "Maryland ESA Letter Evaluations by Licensed Professionals | My ESA Therapist",
    "description": "My ESA Therapist connects Maryland residents with licensed mental health professionals for a simple and secure online ESA letter evaluation. Apply your maryland esa letter today!",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-guam/": {
    "title": "Guam ESA Letter: Legitimate and Online Process | My ESA Therapist",
    "description": "Get a legitimate Guam ESA letter online with My ESA Therapist. Quick, secure process to protect your housing rights and emotional well-being.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-pennsylvania/": {
    "title": "Pennsylvania ESA Letter Evaluation by Licensed Therapists | My ESA Therapist",
    "description": "Start your Pennsylvania ESA Letter evaluation with licensed therapists. Easy online process, secure platform, and valid ESA letters for housing accommodation.",
    "robots": "image",
    "ogType": "website"
  },
  "/esa-letter-ohio/": {
    "title": "Ohio ESA Letter From Licensed Professionals | My ESA Therapist",
    "description": "Looking for an ESA letter in Ohio? My ESA Therapist helps you begin your evaluation by connecting you with licensed professionals online.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-new-hampshire/": {
    "title": "New Hampshire ESA Letter from Licensed Therapists | My ESA Therapist",
    "description": "Need an ESA letter in New Hampshire? My ESA Therapist connects you with licensed mental health professionals for a secure online ESA Letter evaluation.",
    "robots": "full",
    "ogType": "website"
  },
  "/esa-letter-indiana/": {
    "title": "Indiana ESA Letter Evaluations by Licensed Therapists | My ESA Therapist",
    "description": "My ESA Therapist offers a convenient way for Indiana residents to complete ESA Letter evaluations with licensed mental health professionals online.",
    "robots": "full",
    "ogType": "website"
  },
  "/author/mohammed-ziauddin/": {
    "title": "Mohammed Ziauddin | My ESA Therapist",
    "description": "Meet Mohammed Ziauddin, My ESA Therapist’s health writer and medical researcher covering ESA guidance, mental health, and wellness.",
    "robots": "full",
    "ogType": "website"
  },
  "/author/myesatherapist/": {
    "title": "Robert Staaf | My ESA Therapist",
    "description": "",
    "robots": "full",
    "ogType": "website"
  },
  "/blog/esa-training/8-basic-obedience-commands-every-esa-should-know/": {
    "title": "8 Basic Obedience Commands Every ESA Should Know | My ESA Therapist",
    "description": "Explore 8 basic commands to help train your emotional support animal, improve behavior, and make everyday interactions easier and more predictable.",
    "robots": "image",
    "ogType": "article"
  },
  "/consent-for-telehealth/": {
    "title": "Consent for Telehealth | My ESA Therapist",
    "description": "Review My ESA Therapist’s telehealth consent information, including virtual care, communication, privacy, and important considerations before receiving services online.",
    "robots": "image",
    "ogType": "website"
  },
  "/accessibility-statement/": {
    "title": "Accessibility Statement | My ESA Therapist",
    "description": "Learn about My ESA Therapist’s commitment to digital accessibility and efforts to provide an accessible, inclusive online experience for all visitors.",
    "robots": "image",
    "ogType": "website"
  },
  "/disclaimer/": {
    "title": "Disclaimer | My ESA Therapist",
    "description": "Review the My ESA Therapist disclaimer covering website information, educational content, professional services, and important limitations of information provided online.",
    "robots": "image",
    "ogType": "website"
  },
  "/editorial-policy/": {
    "title": "Editorial Policy | My ESA Therapist",
    "description": "Learn how My ESA Therapist creates, reviews, updates, and maintains accurate, trustworthy, and helpful educational content about emotional support animals and mental health.",
    "robots": "image",
    "ogType": "website"
  },
  "/contributors/awais-arshad/": {
    "title": "Awais Arshad – Legal Reviewer | My ESA Therapist",
    "description": "Meet Awais Arshad, Legal Reviewer at My ESA Therapist. Learn about his role in reviewing legal and housing-related content concerning emotional support animals and ESA laws.",
    "robots": "image",
    "ogType": "website"
  },
  "/contributors/max-phillips/": {
    "title": "Max Phillips – Medical Reviewer | My ESA Therapist",
    "description": "Meet Max Phillips, Medical Reviewer at My ESA Therapist. Learn about his role in reviewing health and mental health content related to emotional support animals and ESA evaluations.",
    "robots": "image",
    "ogType": "website"
  },
  "/blog/esa-training/": {
    "title": "ESA Training: Commands, Tips & Guides | My ESA Therapist",
    "description": "Explore our full library of ESA training guides from HUD rules and legal requirements to breed-specific tips, FAQs, and expert advice, updated for 2026.",
    "robots": "image",
    "ogType": "article"
  },
  "/frequently-asked-questions/": {
    "title": "Frequently Asked Questions About ESA Letters | My ESA Therapist",
    "description": "Find answers to frequently asked questions about ESA letters, eligibility, the evaluation process, housing accommodations, and emotional support animals.",
    "robots": "image",
    "ogType": "website"
  },
  "/contributors/": {
    "title": "My ESA Therapist Contributors: Authors & Reviewers",
    "description": "Meet the authors, medical reviewers, and legal reviewers who contribute to My ESA Therapist’s educational content about emotional support animals, ESA letters, and housing.",
    "robots": "image",
    "ogType": "website"
  },
  "/blog/qualifying-conditions/esa-for-ptsd/": {
    "title": "ESA for PTSD: Eligibility, Benefits & Housing Protections | My ESA Therapist",
    "description": "Wondering if PTSD qualifies for an ESA? Explore how eligibility is determined, how an emotional support animal may help, and what housing protections may be available.",
    "robots": "image",
    "ogType": "article"
  },
  "/blog/qualifying-conditions/esa-for-depression/": {
    "title": "ESA for Depression: Eligibility & How to Qualify | My ESA Therapist",
    "description": "Learn how to qualify for an ESA for depression, who can evaluate your eligibility, and how emotional support animals may help with daily life.",
    "robots": "image",
    "ogType": "article"
  },
  "/blog/esa-training/prepare-esa-for-rental-housing/": {
    "title": "How to Prepare Your ESA for Rental Housing? - My ESA Therapist",
    "description": "Learn how to prepare your ESA for rental housing with basic obedience, house training, barking control, calm behavior, vaccinations, and proper ESA documentation.",
    "robots": "image",
    "ogType": "article"
  },
  "/blog/esa-training/esa-training-myths/": {
    "title": "ESA Training Myths: What the Law Actually Requires | My ESA Therapist",
    "description": "Learn whether ESA training is legally required, what the Fair Housing Act says, and how documentation and animal behavior affect housing accommodations.",
    "robots": "image",
    "ogType": "article"
  },
};

export function sheetRobots(kind: SheetRobots): Metadata["robots"] {
  return {
    index: true,
    follow: true,
    "max-image-preview": "large",
    ...(kind === "full"
      ? { "max-snippet": -1 as const, "max-video-preview": -1 as const }
      : {}),
  };
}
