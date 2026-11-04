export const arizonaSchema = {
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
      "@id": "https://myesatherapist.com/esa-letter-arizona/#place",
      "name": "Arizona",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "AZ",
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
      "@id": "https://myesatherapist.com/esa-letter-arizona/#webpage",
      "url": "https://myesatherapist.com/esa-letter-arizona/",
      "name": "Arizona ESA Letter Online | My ESA Therapist",
      "description": "Begin a legitimate ESA Letter evaluation in Arizona with licensed therapist. Secure, HIPAA-compliant, and aligned with FHA guidelines.",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website",
      },
      "about": {
        "@id": "https://myesatherapist.com/esa-letter-arizona/#service",
      },
      "mainEntity": {
        "@id": "https://myesatherapist.com/esa-letter-arizona/#service",
      },
      "primaryImageOfPage": {
        "@id": "https://myesatherapist.com/esa-letter-arizona/#primaryimage",
      },
      "image": {
        "@id": "https://myesatherapist.com/esa-letter-arizona/#primaryimage",
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/esa-letter-arizona/#breadcrumb",
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
      "@id": "https://myesatherapist.com/esa-letter-arizona/#primaryimage",
      "url": "https://myesatherapist.com/images/states/arizona-esa-letter-sample.webp",
      "contentUrl": "https://myesatherapist.com/images/states/arizona-esa-letter-sample.webp",
      "caption": "ESA Letter Online Evaluations for Arizona Residents",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/esa-letter-arizona/#breadcrumb",
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
          "name": "ESA Letter Arizona",
          "item": "https://myesatherapist.com/esa-letter-arizona/",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://myesatherapist.com/esa-letter-arizona/#service",
      "name": "Arizona ESA Letter Evaluation",
      "description": "Online Emotional Support Animal evaluations by licensed mental health professionals for Arizona residents, delivered entirely via telehealth. ESA letters are issued only when clinically appropriate after an independent mental health assessment aligned with Fair Housing Act (FHA) guidelines.",
      "url": "https://myesatherapist.com/esa-letter-arizona/",
      "serviceType": "Online ESA Letter Evaluation (Telehealth)",
      "image": {
        "@id": "https://myesatherapist.com/esa-letter-arizona/#primaryimage",
      },
      "provider": {
        "@id": "https://myesatherapist.com/#organization",
      },
      "areaServed": {
        "@id": "https://myesatherapist.com/esa-letter-arizona/#place",
      },
      "audience": {
        "@type": "Audience",
        "@id": "https://myesatherapist.com/esa-letter-arizona/#audience",
        "audienceType": "Adults in Arizona seeking Emotional Support Animal evaluations",
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://myesatherapist.com/esa-letter-arizona/",
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
        "@id": "https://myesatherapist.com/esa-letter-arizona/#offer",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ESA Letter Services - Arizona",
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
      "@id": "https://myesatherapist.com/esa-letter-arizona/#offer",
      "price": "149",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "eligibleRegion": {
        "@id": "https://myesatherapist.com/esa-letter-arizona/#place",
      },
      "url": "https://myesatherapist.com/esa-letter-arizona/",
      "itemOffered": {
        "@id": "https://myesatherapist.com/esa-letter-arizona/#service",
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
        "url": "https://myesatherapist.com/esa-letter-arizona/"
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
      "@id": "https://myesatherapist.com/esa-letter-arizona/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What Happens to My ESA Rights When I Move to Arizona?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When you move to Arizona with your emotional support animal, your housing rights remain protected under the federal Fair Housing Act (FHA). Some housing providers may request updated ESA documentation from an Arizona-licensed mental health professional. To avoid delays, review local housing policies and update your ESA letter if needed.",
          },
        },
        {
          "@type": "Question",
          "name": "What Is The Typical Cost of an ESA Letter In Arizona?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Arizona, the cost of an ESA letter can vary based on the provider and evaluation process, but most legitimate services typically fall between $100–$300 for a licensed assessment. At My ESA Therapist, the fee is $149, which includes a professional evaluation and the ESA letter issued upon approval.",
          },
        },
        {
          "@type": "Question",
          "name": "What are the Requirements for Emotional Support Animals in Arizona?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To qualify for an emotional support animal in Arizona, you need a clinical evaluation and a valid ESA letter from a licensed mental health professional. Housing rights are protected under the federal Fair Housing Act.",
          },
        },
        {
          "@type": "Question",
          "name": "Can My Child Qualify for an ESA if They Have Anxiety?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A child with anxiety may qualify for an emotional support animal if a licensed mental health professional determines it is clinically appropriate. Parental or guardian consent is required for minors.",
          },
        },
        {
          "@type": "Question",
          "name": "If I have ADHD, Can I Get an Emotional Support Animal in Arizona?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. If you have ADHD, you may qualify for an ESA in Arizona if a licensed mental health professional determines it is clinically appropriate and provides a valid ESA letter.",
          },
        },
        {
          "@type": "Question",
          "name": "How to Spot a Fake ESA Service in Arizona?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To avoid fake ESA services in Arizona, watch for sites that promise instant approvals, sell ESA registrations or certificates, lack licensed clinician details, or skip proper mental health evaluations. Legitimate ESA letters require a real clinical assessment.",
          },
        }
      ],
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-arizona/#video-1",
      "name": "ESA Letter Arizona - Client Testimonial 1",
      "description": "Client testimonial video shared by My ESA Therapist about the Arizona online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-arizona/#video-2",
      "name": "ESA Letter Arizona - Client Testimonial 2",
      "description": "Client testimonial video shared by My ESA Therapist about the Arizona online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-arizona/#video-3",
      "name": "ESA Letter Arizona - Client Testimonial 3",
      "description": "Client testimonial video shared by My ESA Therapist about the Arizona online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-arizona/#video-4",
      "name": "ESA Letter Arizona - Client Testimonial 4",
      "description": "Client testimonial video shared by My ESA Therapist about the Arizona online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-arizona/#video-5",
      "name": "ESA Letter Arizona - Client Testimonial 5",
      "description": "Client testimonial video shared by My ESA Therapist about the Arizona online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-arizona/#video-6",
      "name": "ESA Letter Arizona - Client Testimonial 6",
      "description": "Client testimonial video shared by My ESA Therapist about the Arizona online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-arizona/#video-7",
      "name": "ESA Letter Arizona - Client Testimonial 7",
      "description": "Client testimonial video shared by My ESA Therapist about the Arizona online ESA letter evaluation experience.",
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
