export const FAQ_FILTERS = [
  "All Topics",
  "ESA",
  "ESA Laws",
  "Costs",
  "Evaluation Process",
  "Housing Rights",
  "ESA Letter",
] as const;

export type FaqFilter = (typeof FAQ_FILTERS)[number];
export type FaqCategory = Exclude<FaqFilter, "All Topics">;

export interface FaqItem {
  category: FaqCategory;
  question: string;
  answer: string;
}

export const FAQ_DATA: FaqItem[] = [

  // ESA
  {
    category: "ESA",
    question: "How Many Emotional Support Animals Can You Have?",
    answer:
      "There is no fixed federal limit on the number of ESAs a person can have. However, each animal must be individually supported by your mental health provider, and the request must be reasonable for the housing situation. If you need multiple ESAs, your provider should explain why each animal is necessary, while landlords may consider legitimate health, safety, property damage, or undue-burden concerns.",
  },
  {
    category: "ESA",
    question: "Can Cats Qualify as Emotional Support Animals?",
    answer:
      "Yes, cats can serve as emotional support animals (ESAs). Their gentle, independent nature makes them an excellent choice for individuals dealing with anxiety, depression, or other mental health conditions.",
  },
  {
    category: "ESA",
    question: "Are Emotional Support Animals Service Animals?",
    answer:
      "No. Emotional support animals (ESAs) are not service animals. Unlike service dogs, ESAs are not trained to perform specific tasks. They provide comfort and emotional stability through companionship and are not covered under the Americans with Disabilities Act (ADA).",
  },
  {
    category: "ESA",
    question: "Can Emotional Support Animals Go Anywhere?",
    answer:
      "Not everywhere. Emotional support animals are not granted the same public access rights as service animals. This means they cannot enter restaurants, malls, or planes unless the business or airline permits them. However, under the Fair Housing Act, landlords must make reasonable accommodations for ESAs, even in “no-pet” housing, provided the tenant has a valid ESA letter from a licensed professional.",
  },
  {
    category: "ESA",
    question: "What Are the Qualifications for Acquiring an Emotional Support Animal?",
    answer:
      "People may qualify for an ESA letter when a mental or emotional disability affects their daily life and an emotional support animal helps alleviate related symptoms. Conditions commonly considered include anxiety, depression, PTSD, panic disorders, bipolar disorder, and autism spectrum disorders. Eligibility depends on an individual clinical evaluation, not the diagnosis alone.",
  },
  {
    category: "ESA",
    question: "What Is the Most Popular ESA Used by People with Mental Health Problems?",
    answer:
      "Dogs remain the most popular choice due to their loyalty, high trainability, and strong emotional connection with humans. Cats are also a top ESA option for individuals seeking a calming, less demanding companion. Other animals—such as rabbits, birds, or even miniature horses—may be used depending on the individual’s needs and living environment.",
  },
  {
    category: "ESA",
    question: "What Is the ESA Registration Process?",
    answer:
      "There is no legally required registration process for emotional support animals. You simply need an ESA letter from a licensed mental health professional. ESA “registries” found online have no legal standing and are often misleading.",
  },
  {
    category: "ESA",
    question: "What Are the Differences Between a Service Animal, Therapy Animal, and Emotional Support Animal?",
    answer:
      "Service animals are specially trained to perform tasks for individuals with physical or psychiatric disabilities. Protected under the Americans with Disabilities Act (ADA), they can access public places like stores, planes, and restaurants.\n\nTherapy animals provide comfort to groups in settings like hospitals or schools. They are not trained for specific tasks and have no legal protections under federal law.\n\nEmotional Support Animals (ESAs) offer one-on-one support for mental health conditions such as anxiety, depression, or PTSD. While they aren’t task-trained or ADA-protected, ESAs are covered under the Fair Housing Act (FHA), allowing access to no-pet housing without extra fees.",
  },
  {
    category: "ESA",
    question: "What Are the Several Benefits of Having an ESA?",
    answer:
      "An Emotional Support Animal (ESA) can provide companionship and emotional support that may help people manage symptoms of conditions such as anxiety, PTSD, or depression. For eligible individuals, the Fair Housing Act may provide a reasonable accommodation to live with an ESA in housing with no-pet policies and generally waive pet fees, deposits, or surcharges. Eligibility and housing protections depend on the individual’s circumstances and applicable housing laws.",
  },
  {
    category: "ESA",
    question: "What Are Other Names for Emotional Support Animals?",
    answer:
      "Emotional support animals are also known as companion animals, support pets, or assistance animals. While these terms are sometimes used interchangeably, “emotional support animal\" is the legally recognized term under the Fair Housing Act.",
  },
  {
    category: "ESA",
    question: "How Does an ESA Help Alleviate a Person's Anxiety or Depression?",
    answer:
      "An ESA can provide consistent emotional companionship that helps stabilize mood, reduce panic attacks, and decrease feelings of loneliness. Their presence can support mental wellness by releasing feel-good hormones like oxytocin and lowering cortisol levels, especially in people dealing with anxiety, PTSD, or depression.",
  },
  {
    category: "ESA",
    question: "What Are Signs That an Emotional Support Animal Will Work for You?",
    answer:
      "If you feel emotionally overwhelmed or socially isolated, or experience symptoms of anxiety, depression, or panic attacks, and find comfort in the presence of animals, you may benefit from an ESA. A licensed mental health professional can evaluate whether an ESA is right for your mental health needs.",
  },
  {
    category: "ESA",
    question: "Can Emotional Support Animals Help Children With Learning Disabilities?",
    answer:
      "Yes. ESAs can provide emotional support, reduce anxiety, and improve focus for children with learning disabilities such as ADHD or dyslexia. While not a substitute for specialized therapies or academic support, they can help regulate emotions and improve self-esteem.",
  },
  {
    category: "ESA",
    question: "How Does an ESA Differ From a Pet?",
    answer:
      "While pets offer companionship, an ESA is a prescribed therapeutic animal for individuals with diagnosed emotional or mental health conditions. ESAs are protected under federal laws like the Fair Housing Act, allowing them to live with you even in “no pet” housing, something pets alone are not legally allowed to do.",
  },
  {
    category: "ESA",
    question: "What Types of Animals Can Qualify as an ESA?",
    answer:
      "Dogs and cats are the most common types of emotional support animals, but other domesticated animals such as birds, rabbits, guinea pigs, and even miniature horses may qualify. The key is that the animal must provide comfort and not pose a threat or burden in a housing setting.",
  },
  {
    category: "ESA",
    question: "Do ESAs Require Specific Training to Qualify?",
    answer:
      "No. Unlike service animals, ESAs do not need specialized training. Their primary role is to offer comfort and companionship that helps alleviate symptoms of a mental or emotional disability.",
  },
  {
    category: "ESA",
    question: "Can I Have More Than One ESA?",
    answer:
      "Yes, you can have multiple Emotional Support Animals if a licensed mental health professional (LMHP) confirms they are necessary for your mental health. Each ESA must be listed in a valid ESA letter, and the animals should not cause disruptions or safety concerns in housing. Landlords can only deny your request if accommodating multiple animals creates an undue burden or a fundamental alteration to the property.",
  },
  {
    category: "ESA",
    question: "Are There Any Breed or Size Restrictions for ESAs?",
    answer:
      "No, federal law does not impose breed or size restrictions on ESAs. Landlords cannot deny your ESA solely based on its breed or size. However, the animal must be manageable in a residential setting and not pose a health or safety risk.",
  },
  {
    category: "ESA",
    question: "What Documentation Do I Need to Provide to My Landlord for My ESA?",
    answer:
      "You generally need a valid ESA letter from a licensed mental health professional. The letter should include the provider’s license information, signature, contact details, and confirmation that you need an emotional support animal. Landlords generally cannot require your full medical records or diagnosis under the Fair Housing Act.",
  },
  {
    category: "ESA",
    question: "Are There Any Situations Where a Landlord Can Legally Deny My ESA?",
    answer:
      "Yes. A landlord may legally deny an ESA accommodation if the specific animal poses a direct threat to others’ health or safety, causes substantial property damage, or the accommodation would create an undue financial or administrative burden. A landlord cannot deny a valid request simply because of a no-pet policy, breed, or size alone.",
  },
  {
    category: "ESA",
    question: "Can I Travel with My ESA on Domestic Flights in the U.S.?",
    answer:
      "As of 2021, most U.S. airlines no longer recognize Emotional Support Animals under the Air Carrier Access Act. ESAs are now treated as regular pets and must fly in the cabin or cargo area according to airline pet policies. Only trained service dogs are guaranteed in-cabin access. Always check the airline’s ESA policy before booking your flight.",
  },
  {
    category: "ESA",
    question: "Are ESAs Allowed in Hotels or Other Accommodations?",
    answer:
      "Hotels, motels, Airbnbs, and other temporary lodgings are not required to accommodate ESAs, as they’re not covered under the Fair Housing Act. While some pet-friendly hotels may accept ESAs, they may still charge pet fees. Service animals are the only ones legally protected in public accommodations under the Americans with Disabilities Act (ADA).",
  },
  {
    category: "ESA",
    question: "Can I Bring My ESA to Public Places Like Restaurants or Stores?",
    answer:
      "No, Emotional Support Animals do not have public access rights under the ADA. This means you cannot take them into restaurants, malls, grocery stores, or other public establishments unless the business is pet-friendly. Only trained service animals are allowed in public spaces that typically prohibit animals.",
  },

  // ESA Laws
  {
    category: "ESA Laws",
    question: "Is There an Official Registry or Certification for ESAs?",
    answer:
      "No, there is no official federal registry or certification for emotional support animals. A valid ESA letter from a licensed mental health professional is the only legal document recognized under the Fair Housing Act.",
  },
  {
    category: "ESA Laws",
    question: "What Federal Laws Protect ESAs in the United States?",
    answer:
      "The primary federal law that protects individuals with ESAs is the Fair Housing Act (FHA). This law requires housing providers to make reasonable accommodations for individuals with emotional or mental health disabilities. While the Air Carrier Access Act (ACAA) previously offered protections for ESA travel, most major airlines now limit this to trained service animals only.",
  },
  {
    category: "ESA Laws",
    question: "How Does the Fair Housing Act (FHA) Apply to ESAs?",
    answer:
      "The FHA gives individuals with mental or emotional disabilities the right to live with their ESA in any housing covered under this federal law. A valid ESA letter from a licensed provider must be submitted, and landlords are prohibited from charging pet rent or deposits or denying housing based on the presence of an ESA.",
  },
  {
    category: "ESA Laws",
    question: "What Is the Air Carrier Access Act (ACAA), and How Does It Affect ESAs?",
    answer:
      "The ACAA ensures nondiscriminatory access to air travel for individuals with disabilities. However, as of January 2021, airlines are no longer required to accommodate ESAs. Most U.S. airlines now accept only trained service dogs in the cabin. ESAs must travel as pets, subject to carrier rules and fees.",
  },
  {
    category: "ESA Laws",
    question: "Are There State-Specific Laws for ESAs?",
    answer:
      "Yes, some states, such as California, Iowa, Montana, Louisiana, and Arkansas, require a 30-day patient-provider relationship before issuing an ESA letter. Always review your state’s specific ESA requirements, especially when applying for housing.",
  },
  {
    category: "ESA Laws",
    question: "What Is the Difference Between Federal and State ESA Regulations?",
    answer:
      "Federal ESA laws, like the FHA, apply across all states and protect your right to housing accommodations. However, state laws may impose additional requirements, such as stricter criteria for issuing ESA letters or penalties for ESA fraud. It’s essential to comply with both to ensure your ESA letter is legally valid.",
  },
  {
    category: "ESA Laws",
    question: "Are There Specific Airline Policies I Should Know About for ESAs?",
    answer:
      "Yes, airline policies for Emotional Support Animals (ESAs) vary by carrier, and it’s essential to check your airline’s current rules before flying. Most major U.S. airlines, such as American, Delta, United, and Southwest, no longer recognize ESAs as assistance animals and now treat them as standard pets. This means you’ll need to follow the airline’s pet travel guidelines, which may include carrier size requirements, additional fees, and cabin restrictions.",
  },
  {
    category: "ESA Laws",
    question: "Can a Landlord Legally Verify My ESA Letter?",
    answer:
      "Yes. A landlord may generally verify documentation supporting an ESA accommodation request when the disability-related need is not obvious. However, verification should be limited to reliable information necessary to evaluate the request and should not require unnecessary medical details.",
  },
  {
    category: "ESA Laws",
    question: "Can a Landlord Legally Ask for My Medical Records for an ESA?",
    answer:
      "Generally, no. A landlord may request reliable documentation showing that you have a disability and a disability-related need for an ESA, but generally should not require your complete medical records or detailed medical history.",
  },
  {
    category: "ESA Laws",
    question: "Can a Landlord Legally Require My ESA to Be Trained?",
    answer:
      "Generally, a landlord cannot require an ESA to have specialized task training like a service animal. However, the animal may still be subject to reasonable health, safety, licensing, and behavior requirements under applicable housing rules.",
  },
  {
    category: "ESA Laws",
    question: "Can a Landlord Legally Limit the Number of ESAs I Have?",
    answer:
      "There is no fixed federal number of ESAs allowed per household. A landlord may evaluate whether each animal is necessary because of a disability and whether accommodating multiple animals would be reasonable under the circumstances.",
  },
  {
    category: "ESA Laws",
    question: "Can a Landlord Legally Require Me to Register My ESA?",
    answer:
      "Generally, there is no federal ESA registry that tenants must use to obtain housing protection. A landlord may request appropriate documentation supporting an accommodation, but registration with an online ESA registry is not a substitute for that documentation.",
  },
  {
    category: "ESA Laws",
    question: "Can a Landlord Legally Require an ESA Letter From a Specific Provider?",
    answer:
      "Generally, a landlord cannot require you to obtain documentation from a particular therapist, doctor, or ESA-letter company. If documentation is needed, it should generally come from a reliable source who has sufficient knowledge of your disability-related need.",
  },
  {
    category: "ESA Laws",
    question: "Can a Landlord Legally Evict Me Because of My ESA?",
    answer:
      "Generally, a landlord cannot evict an eligible tenant simply because they have an ESA protected as a reasonable accommodation. However, housing protections do not prevent action for legitimate reasons, such as significant property damage, a direct threat, or other lease violations unrelated to the animal's protected status.",
  },
  {
    category: "ESA Laws",
    question: "Can a Landlord Legally Deny an ESA Because Another Tenant Has Allergies?",
    answer:
      "Not automatically. A landlord generally must consider whether the conflict can be reasonably addressed before denying an ESA accommodation. Another tenant's allergies may be relevant, but they do not automatically eliminate an otherwise valid accommodation request.",
  },

  // Costs
  {
    category: "Costs",
    question: "How Much Does an ESA Letter Typically Cost?",
    answer:
      "A legitimate ESA letter generally costs between $99 and $199, depending on the provider. Be cautious of ultra-low-cost options that skip proper evaluations; they’re often not legally valid and may be rejected by landlords. If you choose My ESA Therapist, you can get a legitimate ESA letter online for just $149.",
  },
  {
    category: "Costs",
    question: "Does My ESA Therapist Offer Refunds if My ESA Letter Is Rejected?",
    answer:
      "Our ESA letters are fully compliant with the Fair Housing Act (FHA) guidelines and are widely accepted by landlords and housing providers. However, if your landlord raises concerns, our team can step in to speak with them directly and, if needed, provide supporting documentation to clarify the legal validity of your ESA letter.",
  },
  {
    category: "Costs",
    question: "Are There Any Extra Fees for Getting an ESA Letter?",
    answer:
      "It depends on the provider. Some services charge separately for the mental health evaluation, the ESA letter, or additional documentation. Before paying, check whether the listed price covers both the evaluation and the letter.",
  },
  {
    category: "Costs",
    question: "Do I Have to Pay for an ESA Evaluation Separately?",
    answer:
      "Not always. Some providers include the clinical evaluation in the total ESA letter cost, while others charge an evaluation fee separately. With My ESA Therapist, the $149 package includes the evaluation and ESA letter if you qualify.",
  },
  {
    category: "Costs",
    question: "Is an Online ESA Letter Cheaper Than an In-Person Letter?",
    answer:
      "Not necessarily. Prices vary by provider and what is included in the service. Online evaluations may have lower costs in some cases because they do not require an in-person office visit, but you should compare the total price and services included.",
  },
  {
    category: "Costs",
    question: "Can I Get an ESA Letter Without Paying for an Evaluation?",
    answer:
      "A legitimate ESA letter requires an appropriate clinical evaluation by a qualified mental health professional. Be cautious of services offering a letter without evaluating whether an ESA is clinically appropriate.",
  },
  {
    category: "Costs",
    question: "Why Do ESA Letter Prices Vary Between Providers?",
    answer:
      "ESA letter prices vary based on factors such as the provider’s credentials, evaluation process, consultation method, and whether the letter is included in the initial fee. A higher or lower price alone does not determine whether an ESA letter is legitimate.",
  },
  {
    category: "Costs",
    question: "Do I Have to Pay Again to Renew an ESA Letter?",
    answer:
      "If you need a new or updated ESA letter, the provider may charge a new evaluation or documentation fee. Whether renewal is necessary depends on your circumstances, housing provider, state requirements, and the provider’s clinical judgment.",
  },
  {
    category: "Costs",
    question: "How Much Does It Cost to Renew an ESA Letter?",
    answer:
      "There is no standard federal renewal price for ESA letters. Renewal fees vary by provider and may depend on whether a new clinical evaluation is required. With My ESA Therapist, you can renew your ESA letter by paying $129.",
  },
  {
    category: "Costs",
    question: "Does the Price of an ESA Letter Depend on My State?",
    answer:
      "It can. Providers may set different prices based on their services and operating costs, and some states have additional requirements for ESA evaluations or provider-patient relationships. Always check both the provider’s current pricing and your state’s requirements.",
  },

  // Evaluation Process (from tab)
  {
    category: "Evaluation Process",
    question: "What Happens During an ESA Evaluation?",
    answer:
      "During an ESA evaluation, a licensed mental health professional discusses your mental health, daily functioning, and how an emotional support animal may help. The provider then determines whether an ESA is clinically appropriate based on your individual circumstances.",
  },
  {
    category: "Evaluation Process",
    question: "How Does an ESA Evaluation Work Online?",
    answer:
      "An online ESA evaluation typically involves completing an initial assessment followed by a secure video or phone consultation with a licensed mental health professional. The provider reviews your situation and determines whether you qualify for an ESA letter.",
  },
  {
    category: "Evaluation Process",
    question: "How Long Does an ESA Evaluation Take?",
    answer:
      "The length varies depending on your circumstances and the provider. Most evaluations are completed during a scheduled consultation, but the provider may need more time if they need additional information before making a clinical determination.",
  },
  {
    category: "Evaluation Process",
    question: "What Questions Will a Therapist Ask During an ESA Evaluation?",
    answer:
      "A therapist may ask about your mental health history, current symptoms, daily activities, emotional challenges, and how your animal supports you. They may also discuss your current treatment and whether an ESA could help with your symptoms.",
  },
  {
    category: "Evaluation Process",
    question: "Do I Need to Talk About My Mental Health During an ESA Evaluation?",
    answer:
      "Yes. Discussing your mental health and daily functioning is an important part of determining whether an ESA is clinically appropriate. You should provide honest and relevant information so the provider can make an informed clinical decision.",
  },
  {
    category: "Evaluation Process",
    question: "Can I Get an ESA Letter After One Evaluation?",
    answer:
      "You may receive an ESA letter after one evaluation if the licensed professional determines that you qualify. However, one consultation does not automatically guarantee a letter, as the decision depends on the provider's clinical assessment.",
  },
  {
    category: "Evaluation Process",
    question: "Do I Have to Meet With a Therapist to Get an ESA Letter?",
    answer:
      "Yes. A legitimate ESA letter should be based on an appropriate evaluation by a qualified mental health professional. Be cautious of services that offer an ESA letter without a meaningful clinical assessment.",
  },
  {
    category: "Evaluation Process",
    question: "Can an ESA Evaluation Be Done Over Video or Phone?",
    answer:
      "Yes, depending on state law and the provider's licensing and telehealth requirements. Many licensed professionals conduct ESA evaluations through secure video or, where permitted, by phone.",
  },
  {
    category: "Evaluation Process",
    question: "Can I Get an ESA Evaluation From Home?",
    answer:
      "Yes. Online telehealth evaluations allow you to speak with a licensed mental health professional from home, provided the provider is authorized to practice where you are located and telehealth is permitted.",
  },
  {
    category: "Evaluation Process",
    question: "What Should I Prepare Before My ESA Evaluation?",
    answer:
      "Be prepared to discuss your mental health history, current symptoms, daily challenges, treatment, and how your animal provides emotional support. You may also want to have relevant treatment or medication information available if the provider requests it.",
  },
  {
    category: "Evaluation Process",
    question: "Do I Need Medical Records for an ESA Evaluation?",
    answer:
      "Not necessarily. A provider may be able to conduct an evaluation without your complete medical records, but they may request relevant documentation when clinically necessary. Requirements can vary depending on your circumstances and state law.",
  },
  {
    category: "Evaluation Process",
    question: "Do I Need a Mental Health Diagnosis Before an ESA Evaluation?",
    answer:
      "No. You do not necessarily need a prior diagnosis to request an evaluation. A licensed mental health professional can assess your symptoms, functioning, and circumstances to determine whether you have a qualifying disability and whether an ESA is appropriate.",
  },
  {
    category: "Evaluation Process",
    question: "Can a Therapist Deny My ESA Letter After the Evaluation?",
    answer:
      "Yes. A therapist may decline to issue an ESA letter if they determine that you do not meet the relevant criteria or that an ESA is not clinically appropriate. An evaluation does not guarantee approval.",
  },
  {
    category: "Evaluation Process",
    question: "What Happens If I Don't Qualify for an ESA Letter?",
    answer:
      "If you do not qualify, the provider should explain the outcome and may discuss other appropriate mental health support or treatment options. A legitimate service should not issue an ESA letter simply because you paid for an evaluation.",
  },
  {
    category: "Evaluation Process",
    question: "Can I Have My ESA Evaluation With My Current Therapist?",
    answer:
      "Yes, if your current therapist is appropriately licensed and qualified to evaluate your need for an ESA. They must also be authorized to practice in your state and follow applicable professional and legal requirements.",
  },
  {
    category: "Evaluation Process",
    question: "Who Can Perform an ESA Evaluation?",
    answer:
      "An ESA evaluation should be performed by a qualified mental health professional who is licensed or otherwise authorized to practice in your state. Depending on state requirements, this may include psychologists, psychiatrists, clinical social workers, counselors, or other qualified providers.",
  },
  {
    category: "Evaluation Process",
    question: "How Do I Know If an ESA Evaluation Is Legitimate?",
    answer:
      "A legitimate evaluation involves a real clinical assessment by a qualified mental health professional. The provider should review your mental health needs rather than promise automatic approval or issue a letter without an evaluation.",
  },
  {
    category: "Evaluation Process",
    question: "Is an Online ESA Evaluation Legitimate?",
    answer:
      "Yes, an online ESA evaluation can be legitimate when it is conducted through a proper telehealth process by a licensed mental health professional authorized to practice in your state. The evaluation should involve a genuine clinical assessment, not an instant approval.",
  },
  {
    category: "Evaluation Process",
    question: "How Soon Can I Get My ESA Letter After an Evaluation?",
    answer:
      "If the provider determines that you qualify, the letter may be issued after the evaluation and completion of any required documentation. Timing varies by provider and state requirements. My ESA Therapist provides the letter by email when a client is approved.",
  },
  {
    category: "Evaluation Process",
    question: "Do I Need Another ESA Evaluation to Renew My Letter?",
    answer:
      "It depends on your circumstances, provider requirements, and applicable state or housing rules. If an updated letter is needed, a provider may require another evaluation to confirm that an ESA remains clinically appropriate.",
  },

  // Housing Rights
  {
    category: "Housing Rights",
    question: "What Are My Rights If a Landlord or Housing Provider Discriminates Against My ESA?",
    answer:
      "If your landlord denies your valid ESA letter or refuses reasonable accommodation, you can file a complaint with the U.S. Department of Housing and Urban Development (HUD). HUD investigates housing discrimination and may take legal action on your behalf. Keep records of all communication and documentation to support your claim.",
  },
  {
    category: "Housing Rights",
    question: "Can I Keep My ESA in a No-Pet Rental Property?",
    answer:
      "Generally, yes. Under the Fair Housing Act, eligible individuals may request a reasonable accommodation to keep an emotional support animal even when a rental property has a no-pet policy. The housing provider must evaluate the request under applicable FHA requirements.",
  },
  {
    category: "Housing Rights",
    question: "Can a Landlord Deny My ESA Housing Request?",
    answer:
      "A landlord may deny an ESA accommodation request only in certain circumstances allowed by housing law, such as when the specific animal poses a direct threat or would cause significant property damage or an undue burden. A no-pet policy alone is generally not enough to deny an eligible request.",
  },
  {
    category: "Housing Rights",
    question: "Can a Landlord Charge Pet Rent for an ESA in Rental Housing?",
    answer:
      "Generally, no. When an ESA is approved as a reasonable accommodation under the Fair Housing Act, the animal is not treated as a pet, so landlords generally cannot charge pet rent or pet fees for it.",
  },
  {
    category: "Housing Rights",
    question: "Can a Landlord Charge a Pet Deposit for an ESA?",
    answer:
      "Generally, landlords cannot require a pet deposit or pet fee specifically because of an approved ESA accommodation. However, tenants may still be responsible for actual damage caused by the animal under applicable housing rules.",
  },
  {
    category: "Housing Rights",
    question: "What Housing Rights Do I Have With an ESA Letter?",
    answer:
      "An eligible tenant may request a reasonable accommodation to keep an ESA in housing covered by the Fair Housing Act, including housing with no-pet policies. An ESA letter supports the request, but it does not guarantee approval in every situation.",
  },
  {
    category: "Housing Rights",
    question: "Can a Landlord Ask for an ESA Letter for Housing?",
    answer:
      "Yes. When the disability-related need for an ESA is not obvious or already known, a housing provider may generally request reliable documentation supporting the need for the animal. An ESA letter from an appropriate healthcare professional may provide that documentation.",
  },
  {
    category: "Housing Rights",
    question: "Can a Landlord Ask for My Medical Records for an ESA Housing Request?",
    answer:
      "Generally, a landlord should not need your complete medical records to evaluate an ESA accommodation request. They may request reliable information necessary to establish the disability-related need for the animal, but excessive medical information is generally not appropriate.",
  },
  {
    category: "Housing Rights",
    question: "Can a Landlord Ask About My Diagnosis When Requesting ESA Housing?",
    answer:
      "A landlord may request information needed to determine whether you have a disability and whether the ESA is necessary, but they generally should not require unnecessary details about your specific diagnosis or full medical history.",
  },
  {
    category: "Housing Rights",
    question: "Can a Landlord Reject an ESA Because of Its Breed or Size?",
    answer:
      "Not automatically. Under the Fair Housing Act, a landlord generally cannot reject an ESA simply because of its breed or size. However, the specific animal's behavior, safety risks, property damage, or other legitimate factors may be considered.",
  },
  {
    category: "Housing Rights",
    question: "Can a Landlord Limit the Number of ESAs Allowed in a Rental?",
    answer:
      "There is no fixed federal number of ESAs allowed per household. Each animal must be individually necessary for the person's disability-related needs, and the overall accommodation must be reasonable for the housing situation.",
  },
  {
    category: "Housing Rights",
    question: "Can a Landlord Require an ESA to Be Trained for Housing?",
    answer:
      "An ESA does not have to be specially trained to perform disability-related tasks like a service animal. However, the animal may still need to meet applicable health, safety, licensing, and behavior requirements.",
  },
  {
    category: "Housing Rights",
    question: "Can a Landlord Evict Me for Having an ESA?",
    answer:
      "A landlord generally cannot evict an eligible tenant simply for having an approved ESA as a reasonable accommodation. However, an ESA may be subject to action if it causes significant property damage, poses a direct threat, or the tenant violates applicable housing requirements.",
  },
  {
    category: "Housing Rights",
    question: "Can a Landlord Deny an ESA Because Another Tenant Has Allergies?",
    answer:
      "Not automatically. A landlord must consider whether the conflict can be reasonably addressed through an accommodation or other measures. The presence of another tenant's allergies does not by itself automatically eliminate an ESA housing accommodation.",
  },
  {
    category: "Housing Rights",
    question: "Do ESA Housing Rights Apply to Apartments With No-Pet Policies?",
    answer:
      "Generally, yes, if the housing is covered by the Fair Housing Act and the tenant qualifies for a reasonable accommodation. An ESA is not considered a pet for purposes of an approved disability-related accommodation.",
  },
  {
    category: "Housing Rights",
    question: "What Can I Do If My Landlord Refuses My ESA Housing Accommodation?",
    answer:
      "Ask the landlord for the reason for the denial and provide any appropriate documentation supporting your accommodation request. If you believe your housing rights have been violated, you can consider contacting HUD, a fair housing agency, or a qualified housing attorney for guidance.",
  },

  // ESA Letter
  {
    category: "ESA Letter",
    question: "Do I Need a Separate ESA Letter for Travel and Housing?",
    answer:
      "No, there is no such thing as an ESA letter for travel. A legitimate ESA letter is issued only for housing purposes to help individuals with emotional or mental health conditions live with their support animal, even in “no-pet” rental properties.",
  },
  {
    category: "ESA Letter",
    question: "If I Move to a New State, Will My ESA Letter Still Be Valid?",
    answer:
      "Yes, your ESA letter remains valid across state lines as long as it was issued by a licensed mental health professional (LMHP) and meets all requirements under the Fair Housing Act (FHA). However, some states such as California, Montana, Iowa, Louisiana, and Arkansas have additional regulations that require a 30-day patient-provider relationship before a valid ESA letter can be issued.\n\nIf you’re relocating to one of these states, it’s recommended to update or reissue your ESA letter through a provider who complies with that state’s specific guidelines to avoid any housing complications.",
  },
  {
    category: "ESA Letter",
    question: "Can a Landlord Ask for My Mental Health Diagnosis With an ESA Letter?",
    answer:
      "No, landlords cannot ask for your specific diagnosis. Under the FHA, they are only permitted to verify that you have a qualifying disability and that your ESA is part of the treatment plan, as stated in your ESA letter. Your privacy is protected by federal law.",
  },
  {
    category: "ESA Letter",
    question: "What Is an ESA Letter?",
    answer:
      "An Emotional Support Animal (ESA) letter is an official document written by a licensed mental health professional (LMHP) confirming that you have a qualifying mental or emotional disability. It legally allows you to live with your emotional support animal, even in “no-pet” housing under the Fair Housing Act (FHA).",
  },
  {
    category: "ESA Letter",
    question: "Who Can Write an ESA Letter?",
    answer:
      "An ESA letter should be issued by a licensed mental health professional who is authorized to practice in your state and qualified to assess your mental health needs. This may include licensed psychologists, psychiatrists, clinical social workers, professional counselors, and other qualified mental health providers. The provider must have a valid license and be able to make an independent clinical determination about your need for an emotional support animal.",
  },
  {
    category: "ESA Letter",
    question: "Can a Physician Write an ESA Letter?",
    answer:
      "Yes, a licensed physician (such as an MD or DO) can issue an ESA letter if they are actively treating your mental or emotional health condition. However, for quicker approval and clearer legal compliance, it’s often more effective to work with a licensed therapist or psychologist who specializes in mental health evaluations and understands ESA documentation standards.",
  },
  {
    category: "ESA Letter",
    question: "What Does an ESA Letter Look Like?",
    answer:
      "A valid ESA letter should generally include your name, confirmation that you have a qualifying mental health disability, and a recommendation for an emotional support animal based on your clinical needs. It should also include the provider’s name, license information, state of practice, date, signature, and professional letterhead. Generic or unsigned documents may not provide sufficient documentation for a housing accommodation request.",
  },
  {
    category: "ESA Letter",
    question: "What Does an ESA Letter Need to Say?",
    answer:
      "A valid ESA letter should confirm that you have a mental or emotional disability and that an emotional support animal is recommended as part of your care. It should also include the licensed provider’s name, license information, contact details, and date of issuance. The letter should provide enough information to establish your need for the ESA while generally protecting private medical details, such as your specific diagnosis.",
  },
  {
    category: "ESA Letter",
    question: "How Long Is an ESA Letter Good For?",
    answer:
      "Most ESA letters are valid for one year, especially for housing applications. After 12 months, many landlords and property managers will request an updated version to ensure your ongoing needs are current and supported by a licensed professional.",
  },
  {
    category: "ESA Letter",
    question: "How Do You Tell If an ESA Letter Is Legitimate?",
    answer:
      "A legitimate ESA letter should be issued and signed by a licensed mental health professional who is authorized to evaluate your needs. It should include the provider’s license information, state of practice, contact details, date, and a clear recommendation for an emotional support animal based on your mental health needs. The letter is typically provided on professional letterhead. Avoid services offering instant approvals without a proper clinical evaluation or consultation.",
  },
  {
    category: "ESA Letter",
    question: "How to Get an ESA Letter Online?",
    answer:
      "You can apply for an ESA letter online through My ESA Therapist by completing these steps: sign up and schedule a consultation, meet with a licensed mental health professional by video or phone, and, if clinically appropriate, receive your ESA letter by email. Processing times can vary. Some states, including California, Montana, Iowa, Arkansas, and Louisiana, may require an established provider-patient relationship before an ESA letter can be issued.",
  },
  {
    category: "ESA Letter",
    question: "What Are the Most Common Reasons for Getting an ESA Letter?",
    answer:
      "People may qualify for an ESA letter when a mental or emotional disability substantially affects their daily life and an emotional support animal helps alleviate related symptoms. Conditions commonly considered include anxiety, depression, PTSD, panic disorders, bipolar disorder, and autism spectrum disorders. Eligibility is based on an individual clinical evaluation, not the diagnosis alone.",
  },
];
