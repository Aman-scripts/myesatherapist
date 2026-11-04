export const delawareSchema = {
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
      "@id": "https://myesatherapist.com/esa-letter-delaware/#place",
      "name": "Delaware",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "DE",
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
      "@id": "https://myesatherapist.com/esa-letter-delaware/#webpage",
      "url": "https://myesatherapist.com/esa-letter-delaware/",
      "name": "Delaware ESA Letter Online | My ESA Therapist",
      "description": "Looking for an ESA letter in Delaware? My ESA Therapist helps you connect with licensed mental health professionals for a convenient online ESA evaluation.",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website",
      },
      "about": {
        "@id": "https://myesatherapist.com/esa-letter-delaware/#service",
      },
      "mainEntity": {
        "@id": "https://myesatherapist.com/esa-letter-delaware/#service",
      },
      "primaryImageOfPage": {
        "@id": "https://myesatherapist.com/esa-letter-delaware/#primaryimage",
      },
      "image": {
        "@id": "https://myesatherapist.com/esa-letter-delaware/#primaryimage",
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/esa-letter-delaware/#breadcrumb",
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
      "@id": "https://myesatherapist.com/esa-letter-delaware/#primaryimage",
      "url": "https://myesatherapist.com/images/states/delaware-esa-letter-sample.webp",
      "contentUrl": "https://myesatherapist.com/images/states/delaware-esa-letter-sample.webp",
      "caption": "ESA Letter Online Evaluations for Delaware Residents",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/esa-letter-delaware/#breadcrumb",
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
          "name": "ESA Letter Delaware",
          "item": "https://myesatherapist.com/esa-letter-delaware/",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://myesatherapist.com/esa-letter-delaware/#service",
      "name": "Delaware ESA Letter Evaluation",
      "description": "Online Emotional Support Animal evaluations by licensed mental health professionals for Delaware residents, delivered entirely via telehealth. ESA letters are issued only when clinically appropriate after an independent mental health assessment aligned with Fair Housing Act (FHA) guidelines.",
      "url": "https://myesatherapist.com/esa-letter-delaware/",
      "serviceType": "Online ESA Letter Evaluation (Telehealth)",
      "image": {
        "@id": "https://myesatherapist.com/esa-letter-delaware/#primaryimage",
      },
      "provider": {
        "@id": "https://myesatherapist.com/#organization",
      },
      "areaServed": {
        "@id": "https://myesatherapist.com/esa-letter-delaware/#place",
      },
      "audience": {
        "@type": "Audience",
        "@id": "https://myesatherapist.com/esa-letter-delaware/#audience",
        "audienceType": "Adults in Delaware seeking Emotional Support Animal evaluations",
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://myesatherapist.com/esa-letter-delaware/",
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
        "@id": "https://myesatherapist.com/esa-letter-delaware/#offer",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ESA Letter Services - Delaware",
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
      "@id": "https://myesatherapist.com/esa-letter-delaware/#offer",
      "price": "149",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "eligibleRegion": {
        "@id": "https://myesatherapist.com/esa-letter-delaware/#place",
      },
      "url": "https://myesatherapist.com/esa-letter-delaware/",
      "itemOffered": {
        "@id": "https://myesatherapist.com/esa-letter-delaware/#service",
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
        "url": "https://myesatherapist.com/esa-letter-delaware/"
      },
    },
    {
      "@type": "Person",
      "@id": "https://myesatherapist.com/esa-doctors/dr-robert-staaf/#person",
      "name": "Robert Staaf",
      "jobTitle": "Licensed Clinical Social Worker",
      "description": "Licensed Clinical Social Worker licensed in 30+ states specializing in psychotherapy and ESA evaluations.",
      "image": {
        "@type": "ImageObject",
        "url": "https://myesatherapist.com/images/doctors/robert-staaf-profile-image.webp",
      },
      "url": "https://myesatherapist.com/esa-doctors/dr-robert-staaf/",
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
      "@id": "https://myesatherapist.com/esa-letter-delaware/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does an ESA Letter Need to Be Renewed Every Year in Delaware?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Although annual renewal is not universally required by law, a housing provider may request updated documentation when permitted under applicable fair housing laws and when reasonably necessary to evaluate an accommodation request.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the Cost of Getting an ESA Letter in Delaware?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Delaware, ESA letter pricing depends on the provider and consultation process, but most reliable services generally fall between $100 to $200 for a licensed evaluation. At My ESA Therapist, the fee is $149, covering the evaluation and issuance of the ESA letter if you qualify.",
          },
        },
        {
          "@type": "Question",
          "name": "What Makes An ESA Letter Legally Valid In Delaware?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ESA documentation should identify the qualified professional, include appropriate contact and licensing information, and provide reliable information supporting the disability-related need for the assistance animal when such information is necessary.",
          },
        },
        {
          "@type": "Question",
          "name": "What Qualifies As “Reliable Documentation” For An ESA In Delaware?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reliable documentation must come from a Delaware-licensed healthcare or mental health professional who has personal knowledge of your condition and has evaluated you in a clinical setting. Generic online certificates or instant approvals do not meet this standard.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I Need To Register My Emotional Support Animal In Delaware?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Delaware does not recognize any official ESA registry. Online registrations, ID cards, or certificates have no legal value without a valid ESA letter.",
          },
        },
        {
          "@type": "Question",
          "name": "Can Landlords Charge Pet Fees For ESAs In Delaware?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. ESAs are not considered pets under the FHA, so landlords generally cannot charge pet rent, pet deposits, or enforce breed or size restrictions.",
          },
        }
      ],
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-delaware/#video-1",
      "name": "ESA Letter Delaware - Client Testimonial 1",
      "description": "Client testimonial video shared by My ESA Therapist about the Delaware online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-delaware/#video-2",
      "name": "ESA Letter Delaware - Client Testimonial 2",
      "description": "Client testimonial video shared by My ESA Therapist about the Delaware online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-delaware/#video-3",
      "name": "ESA Letter Delaware - Client Testimonial 3",
      "description": "Client testimonial video shared by My ESA Therapist about the Delaware online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-delaware/#video-4",
      "name": "ESA Letter Delaware - Client Testimonial 4",
      "description": "Client testimonial video shared by My ESA Therapist about the Delaware online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-delaware/#video-5",
      "name": "ESA Letter Delaware - Client Testimonial 5",
      "description": "Client testimonial video shared by My ESA Therapist about the Delaware online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-delaware/#video-6",
      "name": "ESA Letter Delaware - Client Testimonial 6",
      "description": "Client testimonial video shared by My ESA Therapist about the Delaware online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-delaware/#video-7",
      "name": "ESA Letter Delaware - Client Testimonial 7",
      "description": "Client testimonial video shared by My ESA Therapist about the Delaware online ESA letter evaluation experience.",
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
