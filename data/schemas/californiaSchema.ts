export const californiaSchema = {
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
      "@id": "https://myesatherapist.com/esa-letter-california/#place",
      "name": "California",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "CA",
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
      "@id": "https://myesatherapist.com/esa-letter-california/#webpage",
      "url": "https://myesatherapist.com/esa-letter-california/",
      "name": "California ESA Letter | AB 468 | My ESA Therapist",
      "description": "My ESA Therapist connects you with California-licensed therapists for ESA letter evaluations. AB 468 compliant, transparent pricing, secure platform.",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website",
      },
      "about": {
        "@id": "https://myesatherapist.com/esa-letter-california/#service",
      },
      "mainEntity": {
        "@id": "https://myesatherapist.com/esa-letter-california/#service",
      },
      "primaryImageOfPage": {
        "@id": "https://myesatherapist.com/esa-letter-california/#primaryimage",
      },
      "image": {
        "@id": "https://myesatherapist.com/esa-letter-california/#primaryimage",
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/esa-letter-california/#breadcrumb",
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
      "@id": "https://myesatherapist.com/esa-letter-california/#primaryimage",
      "url": "https://myesatherapist.com/images/states/california-esa-letter-sample.webp",
      "contentUrl": "https://myesatherapist.com/images/states/california-esa-letter-sample.webp",
      "caption": "ESA Letter Online Evaluations for California Residents",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/esa-letter-california/#breadcrumb",
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
          "name": "ESA Letter California",
          "item": "https://myesatherapist.com/esa-letter-california/",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://myesatherapist.com/esa-letter-california/#service",
      "name": "California ESA Letter Evaluation",
      "description": "Online Emotional Support Animal evaluations by licensed mental health professionals for California residents, delivered entirely via telehealth. ESA letters are issued only when clinically appropriate after an independent mental health assessment aligned with Fair Housing Act (FHA) guidelines.",
      "url": "https://myesatherapist.com/esa-letter-california/",
      "serviceType": "Online ESA Letter Evaluation (Telehealth)",
      "image": {
        "@id": "https://myesatherapist.com/esa-letter-california/#primaryimage",
      },
      "provider": {
        "@id": "https://myesatherapist.com/#organization",
      },
      "areaServed": {
        "@id": "https://myesatherapist.com/esa-letter-california/#place",
      },
      "audience": {
        "@type": "Audience",
        "@id": "https://myesatherapist.com/esa-letter-california/#audience",
        "audienceType": "Adults in California seeking Emotional Support Animal evaluations",
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://myesatherapist.com/esa-letter-california/",
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
        "@id": "https://myesatherapist.com/esa-letter-california/#offer",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ESA Letter Services - California",
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
      "@id": "https://myesatherapist.com/esa-letter-california/#offer",
      "price": "149",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "eligibleRegion": {
        "@id": "https://myesatherapist.com/esa-letter-california/#place",
      },
      "url": "https://myesatherapist.com/esa-letter-california/",
      "itemOffered": {
        "@id": "https://myesatherapist.com/esa-letter-california/#service",
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
        "url": "https://myesatherapist.com/esa-letter-california/"
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
      "@id": "https://myesatherapist.com/esa-letter-california/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the cost of an ESA letter in California?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you pursue an ESA evaluation through our platform, the fee is $149. This covers the clinical evaluation, the legally required 30-day client-provider relationship, and ESA documentation if a recommendation is made. If an ESA is not determined to be clinically appropriate, no letter is issued, and 100% refund is provided. Approval for an ESA is not guaranteed.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I Get an ESA Letter Online in California?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. California allows ESA evaluations to be conducted via telehealth, provided the professional is licensed in California, conducts a proper clinical assessment, and maintains the required 30-day therapeutic relationship before issuing any recommendation.",
          },
        },
        {
          "@type": "Question",
          "name": "How long is an ESA letter valid in California?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "California law does not establish a fixed expiration date for an ESA letter. However, a housing provider may request updated documentation when permitted under applicable housing laws and based on the circumstances of the accommodation request.",
          },
        },
        {
          "@type": "Question",
          "name": "How Many ESAs Can I Have in California?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In some cases, more than one emotional support animal may be recommended. Each animal must be individually assessed, and a licensed mental health professional must determine that each provides a distinct therapeutic benefit.",
          },
        },
        {
          "@type": "Question",
          "name": "What are the penalties for faking an ESA letter in California?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Misrepresenting an emotional support animal or using fraudulent ESA documentation may lead to housing disputes, denied accommodations, fines, or legal consequences under state laws addressing disability fraud and misrepresentation.",
          },
        },
        {
          "@type": "Question",
          "name": "Can a landlord in California deny an ESA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "California landlords may deny an ESA request in limited situations, such as insufficient documentation, undue financial burden, direct safety threats, or if the accommodation fundamentally changes housing operations.",
          },
        },
        {
          "@type": "Question",
          "name": "Can a landlord in California charge pet fees for an ESA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. In California, landlords cannot charge pet rent or pet deposits for legitimate assistance animals under state housing protections.",
          },
        },
        {
          "@type": "Question",
          "name": "Does the 30-day rule mean I wait 30 days before I start the process?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. You can begin the process immediately. California's 30-day rule generally means a licensed provider must establish a relationship with you for at least 30 days before issuing an ESA letter recommendation.",
          },
        },
        {
          "@type": "Question",
          "name": "Does an ESA letter work for HOA housing and condos in California?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oftentimes, yes. HOAs and condo associations may still have reasonable accommodation obligations under California housing laws, even if pet restrictions exist. Accommodation requests are usually evaluated individually.",
          },
        },
        {
          "@type": "Question",
          "name": "Can a college or university in California deny an ESA in student housing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Schools may review ESA requests and deny accommodations in limited circumstances. However, colleges that provide housing often must still consider reasonable accommodation requests under housing-related disability laws.",
          },
        },
        {
          "@type": "Question",
          "name": "How long does a California landlord have to respond to an ESA accommodation request?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "California law does not provide a strict deadline, but housing providers are generally expected to respond to the accommodation request within a reasonable timeframe. Long delays or nonresponses may create legal issues. Under HUD guidance, responses are generally expected to be prompt, often within about 10 business days, though timelines may vary.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I take my ESA on a plane in California?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually, no. Federal airline rules no longer obligate airlines to treat emotional support animals as service animals, so most airlines now classify ESAs as pets subject to fees and carrier restrictions.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I bring my ESA into a restaurant or store in California?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally, no. Emotional support animals do not have the same public access rights as trained service animals, meaning restaurants, retail stores, and other businesses may legally restrict access. Emotional Support Animals do not have public access rights under the Americans with Disabilities Act (ADA).",
          },
        },
        {
          "@type": "Question",
          "name": "Can a California Landlord Require Proof of Training for My Emotional Support Animal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Emotional support animals are not required to have specialized training. However, the animal should be well-behaved, under control, and not pose a significant health, safety, or property damage risk. It may be beneficial to obtain training for your ESA to ensure they do not cause property damage, as you can be held liable for these repair fees.",
          },
        },
        {
          "@type": "Question",
          "name": "Can a child or minor get an ESA letter in California?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Minors in California may qualify for an ESA letter if a licensed mental health professional determines that the animal supports the child's mental or emotional health needs. Parents or legal guardians are typically involved in the evaluation and housing accommodation process, and often must sign consents before the evaluation can proceed.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I get an ESA letter the same day in California?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. California's 30-day provider relationship requirement generally prevents legitimate providers from issuing same-day ESA letters. Most legal ESA evaluations require time to establish a provider-client relationship before documentation can be issued.",
          },
        },
        {
          "@type": "Question",
          "name": "If I move to a new apartment in California, do I need a new ESA letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually no, but your new landlord may request updated documentation during the accommodation review process. Keeping your ESA letter up to date can help avoid delays when moving into new housing.",
          },
        },
        {
          "@type": "Question",
          "name": "Does my emotional support animal need rabies vaccination or local licensing in California?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Emotional support animals must comply with the same local animal health and licensing requirements as other pets, including rabies vaccinations where required by state or local law.",
          },
        },
        {
          "@type": "Question",
          "name": "Does my ESA need to wear a vest or tag in California?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. California does not require emotional support animals to wear vests, ID cards, tags, or special markings. Housing rights are generally based on documentation, not accessories or registration products.",
          },
        },
        {
          "@type": "Question",
          "name": "Can a California Landlord Ask My Therapist Directly to Verify the ESA Letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In some cases, a landlord may seek to verify that the letter was issued by a licensed mental health professional. However, they generally cannot request detailed medical information or access to your treatment records. They cannot request the specific diagnosis to be disclosed, nor the severity of your disability.",
          },
        }
      ],
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-california/#video-1",
      "name": "ESA Letter California - Client Testimonial 1",
      "description": "Client testimonial video shared by My ESA Therapist about the California online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-california/#video-2",
      "name": "ESA Letter California - Client Testimonial 2",
      "description": "Client testimonial video shared by My ESA Therapist about the California online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-california/#video-3",
      "name": "ESA Letter California - Client Testimonial 3",
      "description": "Client testimonial video shared by My ESA Therapist about the California online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-california/#video-4",
      "name": "ESA Letter California - Client Testimonial 4",
      "description": "Client testimonial video shared by My ESA Therapist about the California online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-california/#video-5",
      "name": "ESA Letter California - Client Testimonial 5",
      "description": "Client testimonial video shared by My ESA Therapist about the California online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-california/#video-6",
      "name": "ESA Letter California - Client Testimonial 6",
      "description": "Client testimonial video shared by My ESA Therapist about the California online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-california/#video-7",
      "name": "ESA Letter California - Client Testimonial 7",
      "description": "Client testimonial video shared by My ESA Therapist about the California online ESA letter evaluation experience.",
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
