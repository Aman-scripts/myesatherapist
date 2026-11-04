export const alaskaSchema = {
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
      "@id": "https://myesatherapist.com/esa-letter-alaska/#place",
      "name": "Alaska",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "AK",
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
      "@id": "https://myesatherapist.com/esa-letter-alaska/#webpage",
      "url": "https://myesatherapist.com/esa-letter-alaska/",
      "name": "Alaska ESA Letter Online | My ESA Therapist",
      "description": "Connect with Alaska licensed therapists for ESA letter evaluations through a secure telehealth platform. Private, professional, and supportive care.",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website",
      },
      "about": {
        "@id": "https://myesatherapist.com/esa-letter-alaska/#service",
      },
      "mainEntity": {
        "@id": "https://myesatherapist.com/esa-letter-alaska/#service",
      },
      "primaryImageOfPage": {
        "@id": "https://myesatherapist.com/esa-letter-alaska/#primaryimage",
      },
      "image": {
        "@id": "https://myesatherapist.com/esa-letter-alaska/#primaryimage",
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/esa-letter-alaska/#breadcrumb",
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
      "@id": "https://myesatherapist.com/esa-letter-alaska/#primaryimage",
      "url": "https://myesatherapist.com/images/states/alaska-esa-letter-sample.webp",
      "contentUrl": "https://myesatherapist.com/images/states/alaska-esa-letter-sample.webp",
      "caption": "ESA Letter Online Evaluations for Alaska Residents",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/esa-letter-alaska/#breadcrumb",
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
          "name": "ESA Letter Alaska",
          "item": "https://myesatherapist.com/esa-letter-alaska/",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://myesatherapist.com/esa-letter-alaska/#service",
      "name": "Alaska ESA Letter Evaluation",
      "description": "Online Emotional Support Animal evaluations by licensed mental health professionals for Alaska residents, delivered entirely via telehealth. ESA letters are issued only when clinically appropriate after an independent mental health assessment aligned with Fair Housing Act (FHA) guidelines.",
      "url": "https://myesatherapist.com/esa-letter-alaska/",
      "serviceType": "Online ESA Letter Evaluation (Telehealth)",
      "image": {
        "@id": "https://myesatherapist.com/esa-letter-alaska/#primaryimage",
      },
      "provider": {
        "@id": "https://myesatherapist.com/#organization",
      },
      "areaServed": {
        "@id": "https://myesatherapist.com/esa-letter-alaska/#place",
      },
      "audience": {
        "@type": "Audience",
        "@id": "https://myesatherapist.com/esa-letter-alaska/#audience",
        "audienceType": "Adults in Alaska seeking Emotional Support Animal evaluations",
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://myesatherapist.com/esa-letter-alaska/",
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
        "@id": "https://myesatherapist.com/esa-letter-alaska/#offer",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ESA Letter Services - Alaska",
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
      "@id": "https://myesatherapist.com/esa-letter-alaska/#offer",
      "price": "149",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "eligibleRegion": {
        "@id": "https://myesatherapist.com/esa-letter-alaska/#place",
      },
      "url": "https://myesatherapist.com/esa-letter-alaska/",
      "itemOffered": {
        "@id": "https://myesatherapist.com/esa-letter-alaska/#service",
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
        "url": "https://myesatherapist.com/esa-letter-alaska/"
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
      "@id": "https://myesatherapist.com/esa-letter-alaska/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I Take My ESA on an Airline in Alaska?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Most U.S. airlines, including flights to or within Alaska, do not recognize emotional support animals. ESAs usually travel under standard pet policies. Only trained psychiatric service dogs may qualify for in-cabin access. Check your airline's current requirements before traveling.",
          },
        },
        {
          "@type": "Question",
          "name": "How Much Does an ESA Letter Cost in Alaska?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At My ESA Therapist, the cost of an ESA letter in Alaska starts at $149, which includes a professional evaluation and ESA documentation when the clinician determines that a recommendation is appropriate.",
          },
        },
        {
          "@type": "Question",
          "name": "Does an ESA Letter Override All Breed Rules?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, an ESA letter does not automatically override housing rules. Under FHA, an assistance-animal request must be evaluated under the applicable reasonable-accommodation requirements. Housing providers may consider relevant, objective concerns when assessing a request, rather than relying only on general assumptions about an animal.",
          },
        },
        {
          "@type": "Question",
          "name": "Does My ESA Have to Be a Dog or Cat in Alaska?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Emotional support animals are not limited to dogs or cats. Other animals may qualify if the accommodation request is reasonable and does not create health, safety, or property concerns.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I Have More Than One ESA in Alaska?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Possibly yes. Multiple ESAs may be considered if each animal is supported by a documented, disability-related need and the request is reasonable under Fair Housing Act guidelines.",
          },
        },
        {
          "@type": "Question",
          "name": "Can a Landlord in Alaska Require My ESA to Be Spayed or Neutered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends. Requirements involving an assistance animal can vary based on the circumstances, housing rules, and applicable law. An ESA accommodation does not eliminate reasonable requirements related to health, safety, animal control, or property protection. If a housing provider imposes a specific requirement, review the request in light of applicable fair housing rules.",
          },
        }
      ],
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-alaska/#video-1",
      "name": "ESA Letter Alaska - Client Testimonial 1",
      "description": "Client testimonial video shared by My ESA Therapist about the Alaska online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-alaska/#video-2",
      "name": "ESA Letter Alaska - Client Testimonial 2",
      "description": "Client testimonial video shared by My ESA Therapist about the Alaska online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-alaska/#video-3",
      "name": "ESA Letter Alaska - Client Testimonial 3",
      "description": "Client testimonial video shared by My ESA Therapist about the Alaska online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-alaska/#video-4",
      "name": "ESA Letter Alaska - Client Testimonial 4",
      "description": "Client testimonial video shared by My ESA Therapist about the Alaska online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-alaska/#video-5",
      "name": "ESA Letter Alaska - Client Testimonial 5",
      "description": "Client testimonial video shared by My ESA Therapist about the Alaska online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-alaska/#video-6",
      "name": "ESA Letter Alaska - Client Testimonial 6",
      "description": "Client testimonial video shared by My ESA Therapist about the Alaska online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-alaska/#video-7",
      "name": "ESA Letter Alaska - Client Testimonial 7",
      "description": "Client testimonial video shared by My ESA Therapist about the Alaska online ESA letter evaluation experience.",
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
