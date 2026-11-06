export const floridaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://myesatherapist.com/#organization",
      "name": "My ESA Therapist",
      "url": "https://myesatherapist.com/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://myesatherapist.com/#logo",
        "url": "https://myesatherapist.com/images/logo/my-esa-therapist-logo.webp",
        "contentUrl": "https://myesatherapist.com/images/logo/my-esa-therapist-logo.webp",
        "caption": "My ESA Therapist Logo",
      },
      "image": {
        "@id": "https://myesatherapist.com/#logo",
      },
      "email": "info@myesatherapist.com",
      "telephone": "+1-888-412-4041",
      "contactPoint": [
        {
          "@id": "https://myesatherapist.com/#contactpoint",
        },
      ],
      "areaServed": {
        "@type": "Country",
        "name": "United States",
      },
      "sameAs": [
        "https://www.facebook.com/myesatherapy",
        "https://www.instagram.com/myesatherapist/",
        "https://x.com/myesatherapist",
        "https://www.youtube.com/@myesatherapist",
        "https://www.linkedin.com/company/myesatherapist/",
      ],
    },
    {
      "@type": "ContactPoint",
      "@id": "https://myesatherapist.com/#contactpoint",
      "telephone": "+1-888-412-4041",
      "email": "info@myesatherapist.com",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": ["English"],
    },
    {
      "@type": "Place",
      "@id": "https://myesatherapist.com/esa-letter-florida/#place",
      "name": "Florida",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "FL",
        "addressCountry": "US",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://myesatherapist.com/#website",
      "url": "https://myesatherapist.com/",
      "name": "My ESA Therapist",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization",
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://myesatherapist.com/?s={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://myesatherapist.com/esa-letter-florida/#webpage",
      "url": "https://myesatherapist.com/esa-letter-florida/",
      "name": "Florida ESA Letter Online | My ESA Therapist",
      "description": "Get evaluated for a Florida ESA Letter online by licensed therapists. Confidential assessments for qualified individuals. Get evaluated today.",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website",
      },
      "about": {
        "@id": "https://myesatherapist.com/esa-letter-florida/#service",
      },
      "mainEntity": {
        "@id": "https://myesatherapist.com/esa-letter-florida/#service",
      },
      "primaryImageOfPage": {
        "@id": "https://myesatherapist.com/esa-letter-florida/#primaryimage",
      },
      "image": {
        "@id": "https://myesatherapist.com/esa-letter-florida/#primaryimage",
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/esa-letter-florida/#breadcrumb",
      },
      "publisher": {
        "@id": "https://myesatherapist.com/#organization",
      },
      "datePublished": "2021-12-20T10:19:17+00:00",
      "dateModified": "2026-09-12T00:00:00+00:00",
      "inLanguage": "en-US",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1"],
      },
    },
    {
      "@type": "ImageObject",
      "@id": "https://myesatherapist.com/esa-letter-florida/#primaryimage",
      "url": "https://myesatherapist.com/images/states/florida-esa-letter-sample.webp",
      "contentUrl": "https://myesatherapist.com/images/states/florida-esa-letter-sample.webp",
      "caption": "ESA Letter Online Evaluations for Florida Residents",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/esa-letter-florida/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://myesatherapist.com/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "ESA by State",
          "item": "https://myesatherapist.com/state/",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "ESA Letter Florida",
          "item": "https://myesatherapist.com/esa-letter-florida/",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://myesatherapist.com/esa-letter-florida/#service",
      "name": "Florida ESA Letter Evaluation",
      "description": "Online Emotional Support Animal evaluations by licensed mental health professionals for Florida residents, delivered entirely via telehealth. ESA letters are issued only when clinically appropriate after an independent mental health assessment aligned with Fair Housing Act (FHA) guidelines.",
      "url": "https://myesatherapist.com/esa-letter-florida/",
      "serviceType": "Online ESA Letter Evaluation (Telehealth)",
      "image": {
        "@id": "https://myesatherapist.com/esa-letter-florida/#primaryimage",
      },
      "provider": {
        "@id": "https://myesatherapist.com/#organization",
      },
      "areaServed": {
        "@id": "https://myesatherapist.com/esa-letter-florida/#place",
      },
      "audience": {
        "@type": "Audience",
        "@id": "https://myesatherapist.com/esa-letter-florida/#audience",
        "audienceType": "Adults in Florida seeking Emotional Support Animal evaluations",
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://myesatherapist.com/esa-letter-florida/",
        "servicePhone": "+1-888-412-4041",
        "availableLanguage": ["English"],
        "processingTime": "P1D",
      },
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        "opens": "00:00",
        "closes": "23:59",
      },
      "offers": {
        "@id": "https://myesatherapist.com/esa-letter-florida/#offer",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ESA Letter Services - Florida",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Online ESA Letter Evaluation",
            },
          },
        ],
      },
      "termsOfService": "https://myesatherapist.com/terms-of-use/",
    },
    {
      "@type": "Offer",
      "@id": "https://myesatherapist.com/esa-letter-florida/#offer",
      "price": "99",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "eligibleRegion": {
        "@id": "https://myesatherapist.com/esa-letter-florida/#place",
      },
      "url": "https://myesatherapist.com/esa-letter-florida/",
      "itemOffered": {
        "@id": "https://myesatherapist.com/esa-letter-florida/#service",
      },
      "seller": {
        "@id": "https://myesatherapist.com/#organization",
      },
    },
    {
      "@type": "MedicalClinic",
      "@id": "https://myesatherapist.com/#medicalprovider",
      "name": "My ESA Therapist",
      "url": "https://myesatherapist.com/",
      "medicalSpecialty": "Psychiatric",
      "isAcceptingNewPatients": true,
      "availableService": {
        "@type": "MedicalTherapy",
        "name": "Online ESA Letter Evaluation",
        "url": "https://myesatherapist.com/esa-letter-florida/"
      },
    },
    {
      "@type": "Person",
      "@id": "https://myesatherapist.com/esa-doctors/dr-robert-staff/#person",
      "name": "Robert Staaf",
      "jobTitle": "Licensed Clinical Social Worker",
      "description": "Licensed Clinical Social Worker licensed in 30+ states specializing in psychotherapy and ESA evaluations.",
      "image": {
        "@type": "ImageObject",
        "url": "https://myesatherapist.com/images/doctors/robert-staaf-profile-image.webp",
      },
      "url": "https://myesatherapist.com/esa-doctors/dr-robert-staff/",
      "sameAs": ["https://www.linkedin.com/in/robert-staaf-b57b53333/"],
      "worksFor": {
        "@id": "https://myesatherapist.com/#organization",
      },
      "knowsAbout": [
        "Emotional Support Animal Evaluations",
        "Psychotherapy",
        "Anxiety",
        "Stress Management",
        "Emotional Well-being",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://myesatherapist.com/esa-doctors/dr-leslie-k-gamble/#person",
      "name": "Leslie K. Gamble",
      "jobTitle": "Licensed Independent Clinical Social Worker",
      "description": "Licensed Independent Clinical Social Worker with 13+ years of experience providing behavioral health care and ESA evaluations.",
      "image": {
        "@type": "ImageObject",
        "url": "https://myesatherapist.com/images/doctors/leslie-k.-gamble-licsw-image.webp",
      },
      "url": "https://myesatherapist.com/esa-doctors/dr-leslie-k-gamble/",
      "sameAs": ["https://www.linkedin.com/in/leslie-gamble-727571366"],
      "worksFor": {
        "@id": "https://myesatherapist.com/#organization",
      },
      "knowsAbout": [
        "Emotional Support Animal Evaluations",
        "Behavioral Health Care",
        "Anxiety",
        "Depression",
        "PTSD",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://myesatherapist.com/esa-doctors/dr-gaurav-patel/#person",
      "name": "Gaurav Patel, MD",
      "jobTitle": "Family Medicine Physician",
      "description": "Board-certified family medicine physician with experience providing evidence-based, patient-focused care across inpatient, urgent care, outpatient, and telemedicine settings.",
      "image": {
        "@type": "ImageObject",
        "url": "https://myesatherapist.com/images/doctors/dr-gaurav-patel-image.webp",
      },
      "url": "https://myesatherapist.com/esa-doctors/dr-gaurav-patel/",
      "sameAs": ["https://www.linkedin.com/in/gaurav-patel-m-d-b5565916"],
      "worksFor": {
        "@id": "https://myesatherapist.com/#organization",
      },
      "knowsAbout": [
        "Emotional Support Animal Evaluations",
        "Depression",
        "Anxiety",
        "Chronic Conditions",
        "Sleep Concerns",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://myesatherapist.com/esa-letter-florida/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are online ESA letters valid in Florida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An emotional support animal recommendation obtained through a telehealth ESA evaluation may be valid in Florida when it is issued by a state-licensed mental health provider following a proper clinical assessment. Online evaluations are permitted as long as federal housing guidance and professional standards are followed.",
          },
        },
        {
          "@type": "Question",
          "name": "In Florida, does having an ESA remove all animal-related costs and charges in housing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When an ESA is approved as a reasonable accommodation, housing providers generally cannot charge pet deposits, pet rent, or pet-related fees. However, tenants remain responsible for any actual damage caused by the animal.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does an ESA letter cost in Florida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Costs for ESA letters in Florida vary depending on the provider and evaluation process. At My ESA Therapist, we charge $99, which includes a licensed professional assessment and an ESA letter upon approval. Approval for an ESA is not guaranteed.",
          },
        },
        {
          "@type": "Question",
          "name": "Can an emotional support animal letter allow my animal in restaurants or public places in Florida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Emotional Support Animals do not have public access rights under the Americans with Disabilities Act (ADA). Restaurants, stores, and private businesses in Florida can restrict ESAs, as ADA protections apply only to service animals.",
          },
        },
        {
          "@type": "Question",
          "name": "Does an ESA letter make public transportation free in Florida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, an ESA approval letter does not provide free or automatic access to public transportation. Transportation providers follow their standard pet policies, as ESA access is not covered under ADA transportation regulations.",
          },
        },
        {
          "@type": "Question",
          "name": "Can a landlord take time to review my ESA request in Florida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Landlords may take a reasonable amount of time to review and verify ESA documentation. Under HUD guidance, responses are generally expected to be prompt, often within about 10 business days, though timelines may vary.",
          },
        },
        {
          "@type": "Question",
          "name": "Who is responsible if an emotional support animal causes damage in Florida housing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Florida, individuals approved for an emotional support animal are responsible for any damage their animal causes to the housing unit or to persons on the premises. While housing providers cannot charge pet fees or deposits for an ESA, they may recover reasonable repair or cleaning costs consistent with Florida Statutes section 760.27. This can include repairs to carpet, wood, walls, etc. if animal damage is evident.",
          },
        },
        {
          "@type": "Question",
          "name": "Are there penalties for misrepresenting an ESA in Florida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Florida law penalizes knowingly providing false or fraudulent information related to an Emotional Support Animal request. Misrepresentation may result in fines, community service requirements, or misdemeanor charges. Health care practitioners may also face professional discipline if ESA documentation is issued without proper evaluation or personal knowledge of the patient.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I use an ESA letter from an out-of-state provider in Florida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Florida may accept ESA documentation from an out-of-state health care practitioner if the provider is in good standing and meets Florida’s legal requirements. Under Florida law, out-of-state providers must have conducted at least one in-person evaluation with the individual. ESA letters issued without a qualifying evaluation or based solely on online questionnaires may be rejected by housing providers.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I Get an ESA Letter in Florida for a Child or Dependent Under 18?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A licensed mental health professional may determine that an emotional support animal benefits a minor's mental or emotional health. Parents or legal guardians are typically involved in the evaluation process, and often must sign consents before the evaluation can proceed.",
          },
        },
        {
          "@type": "Question",
          "name": "Can a Florida Landlord Require Proof of Training for My Emotional Support Animal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Emotional support animals are not required to have specialized training. However, the animal should be well-behaved, under control, and not pose a significant health, safety, or property damage risk. It may be beneficial to obtain training for your ESA to ensure they do not cause property damage, as you can be held liable for these repair fees.",
          },
        },
        {
          "@type": "Question",
          "name": "Can a Florida Landlord Ask My Therapist Directly to Verify the ESA Letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In some cases, a landlord may seek to verify that the letter was issued by a licensed mental health professional. However, they generally cannot request detailed medical information or access to your treatment records. They cannot request the specific diagnosis to be disclosed, nor the severity of your disability.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I get a Florida ESA letter if I already have one from another state?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but a Florida housing provider may request documentation that meets current Florida and federal requirements. If your existing ESA letter is outdated or does not comply with Florida law, obtaining a new evaluation may be necessary.",
          },
        },
        {
          "@type": "Question",
          "name": "Does my emotional support animal need rabies vaccination or local licensing in Florida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Emotional support animals must comply with the same local animal health and licensing requirements as other pets, including rabies vaccinations where required by state or local law.",
          },
        },
        {
          "@type": "Question",
          "name": "Do emotional support animals need any registration, vest, or ID tag in Florida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Florida does not require emotional support animals to be registered, wear a vest, or carry an ID card. A valid ESA letter from a licensed mental health professional is the primary documentation used for housing accommodations. Be wary of any sites selling vests, certificates, or ID cards, as these do not provide any legal housing protections.",
          },
        },
        {
          "@type": "Question",
          "name": "Can a Florida HOA or condo association deny my ESA even if my landlord approves it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In many cases, no. HOAs and condo associations may also be subject to fair housing laws and must generally consider reasonable accommodation requests for qualified emotional support animals.",
          },
        },
        {
          "@type": "Question",
          "name": "How Long Is a Florida ESA Letter Valid Before It Needs Renewal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Florida law does not establish a fixed expiration date for an ESA letter. However, a housing provider may request updated reliable information when permitted under applicable fair housing requirements and based on the circumstances of the accommodation request.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I Have More Than One Emotional Support Animal in Florida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if each animal is necessary for your disability-related needs and supported by appropriate documentation. Housing providers may evaluate whether the request is reasonable under fair housing laws.",
          },
        },
        {
          "@type": "Question",
          "name": "Can My Florida Landlord Ask to Meet My ESA or Require Specific Breed/Size Documentation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A landlord may request information necessary to evaluate an accommodation request, but they generally cannot deny an ESA solely because of breed, weight, or size. However, an animal that poses a direct threat or causes substantial property damage may not be protected.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Florida Law Require My Therapist to Have Met Me in Person Before Issuing an ESA Letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the provider’s licensing status. Florida law requires an out-of-state practitioner providing supporting information to have provided in-person care or services to the tenant on at least one occasion. Requirements may differ for Florida-licensed practitioners, who must still conduct an appropriate clinical evaluation within their scope of practice.",
          },
        },
        {
          "@type": "Question",
          "name": "What Should I Do if a Florida Landlord Asks for My Medical Records to Approve My ESA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You generally do not need to provide detailed medical records. A valid ESA letter typically confirms the disability-related need for the animal while protecting your private health information.",
          },
        },
        {
          "@type": "Question",
          "name": "Is a Florida ESA Letter Accepted if I'm Subleasing or Renting a Room (Not the Full Unit)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the housing arrangement and whether fair housing laws apply. Some shared housing situations and owner-occupied properties may qualify for exemptions under federal housing rules.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Florida Recognize Emotional Support Animals Other Than Dogs and Cats (Birds, Rabbits, etc.)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Emotional support animals are not limited to dogs or cats. Other domesticated animals may qualify if they provide disability-related emotional support and are reasonable for the housing situation.",
          },
        }
      ],
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-florida/#video-1",
      "name": "ESA Letter Florida - Client Testimonial 1",
      "description": "Client testimonial video shared by My ESA Therapist about the Florida online ESA letter evaluation experience.",
      "thumbnailUrl": [
        "https://i.ytimg.com/vi/vId0sRVPY0I/hqdefault.jpg",
      ],
      "embedUrl": "https://www.youtube.com/embed/vId0sRVPY0I",
      "contentUrl": "https://www.youtube.com/shorts/vId0sRVPY0I",
      "uploadDate": "2026-07-08T00:00:00+00:00",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization",
      },
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-florida/#video-2",
      "name": "ESA Letter Florida - Client Testimonial 2",
      "description": "Client testimonial video shared by My ESA Therapist about the Florida online ESA letter evaluation experience.",
      "thumbnailUrl": [
        "https://i.ytimg.com/vi/gxdipq0J2No/hqdefault.jpg",
      ],
      "embedUrl": "https://www.youtube.com/embed/gxdipq0J2No",
      "contentUrl": "https://www.youtube.com/shorts/gxdipq0J2No",
      "uploadDate": "2026-06-02T00:00:00+00:00",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization",
      },
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-florida/#video-3",
      "name": "ESA Letter Florida - Client Testimonial 3",
      "description": "Client testimonial video shared by My ESA Therapist about the Florida online ESA letter evaluation experience.",
      "thumbnailUrl": [
        "https://i.ytimg.com/vi/Mjf33Y0NvVc/hqdefault.jpg",
      ],
      "embedUrl": "https://www.youtube.com/embed/Mjf33Y0NvVc",
      "contentUrl": "https://www.youtube.com/shorts/Mjf33Y0NvVc",
      "uploadDate": "2026-06-05T00:00:00+00:00",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization",
      },
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-florida/#video-4",
      "name": "ESA Letter Florida - Client Testimonial 4",
      "description": "Client testimonial video shared by My ESA Therapist about the Florida online ESA letter evaluation experience.",
      "thumbnailUrl": [
        "https://i.ytimg.com/vi/CybsnJUGzTM/hqdefault.jpg",
      ],
      "embedUrl": "https://www.youtube.com/embed/CybsnJUGzTM",
      "contentUrl": "https://www.youtube.com/shorts/CybsnJUGzTM",
      "uploadDate": "2026-06-03T00:00:00+00:00",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization",
      },
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-florida/#video-5",
      "name": "ESA Letter Florida - Client Testimonial 5",
      "description": "Client testimonial video shared by My ESA Therapist about the Florida online ESA letter evaluation experience.",
      "thumbnailUrl": [
        "https://i.ytimg.com/vi/figN4V7ThbM/hqdefault.jpg",
      ],
      "embedUrl": "https://www.youtube.com/embed/figN4V7ThbM",
      "contentUrl": "https://www.youtube.com/shorts/figN4V7ThbM",
      "uploadDate": "2026-05-27T00:00:00+00:00",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization",
      },
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-florida/#video-6",
      "name": "ESA Letter Florida - Client Testimonial 6",
      "description": "Client testimonial video shared by My ESA Therapist about the Florida online ESA letter evaluation experience.",
      "thumbnailUrl": [
        "https://i.ytimg.com/vi/TV4dghtuqak/hqdefault.jpg",
      ],
      "embedUrl": "https://www.youtube.com/embed/TV4dghtuqak",
      "contentUrl": "https://www.youtube.com/shorts/TV4dghtuqak",
      "uploadDate": "2026-05-21T00:00:00+00:00",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization",
      },
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-florida/#video-7",
      "name": "ESA Letter Florida - Client Testimonial 7",
      "description": "Client testimonial video shared by My ESA Therapist about the Florida online ESA letter evaluation experience.",
      "thumbnailUrl": [
        "https://i.ytimg.com/vi/rPtmxr05tsc/hqdefault.jpg",
      ],
      "embedUrl": "https://www.youtube.com/embed/rPtmxr05tsc",
      "contentUrl": "https://www.youtube.com/shorts/rPtmxr05tsc",
      "uploadDate": "2026-05-14T00:00:00+00:00",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization",
      },
    },
  ],
};
