export const minnesotaSchema = {
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
        "caption": "My ESA Therapist Logo"
      },
      "image": {
        "@id": "https://myesatherapist.com/#logo"
      },
      "email": "info@myesatherapist.com",
      "telephone": "+1-888-412-4041",
      "contactPoint": [
        {
          "@id": "https://myesatherapist.com/#contactpoint"
        }
      ],
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "sameAs": [
        "https://www.facebook.com/myesatherapy",
        "https://www.instagram.com/myesatherapist/",
        "https://x.com/myesatherapist",
        "https://www.youtube.com/@myesatherapist",
        "https://www.linkedin.com/company/myesatherapist/"
      ]
    },
    {
      "@type": "ContactPoint",
      "@id": "https://myesatherapist.com/#contactpoint",
      "telephone": "+1-888-412-4041",
      "email": "info@myesatherapist.com",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": [
        "English"
      ]
    },
    {
      "@type": "Place",
      "@id": "https://myesatherapist.com/esa-letter-minnesota/#place",
      "name": "Minnesota",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "MN",
        "addressCountry": "US"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://myesatherapist.com/#website",
      "url": "https://myesatherapist.com/",
      "name": "My ESA Therapist",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://myesatherapist.com/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://myesatherapist.com/esa-letter-minnesota/#webpage",
      "url": "https://myesatherapist.com/esa-letter-minnesota/",
      "name": "Legitimate Minnesota ESA Letter Online: Quick & Seamless Process",
      "description": "Start your ESA letter evaluation online with a licensed therapist. Secure telehealth process and reliable ESA documentation for Minnesota residents.",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website"
      },
      "about": {
        "@id": "https://myesatherapist.com/esa-letter-minnesota/#service"
      },
      "mainEntity": {
        "@id": "https://myesatherapist.com/esa-letter-minnesota/#service"
      },
      "primaryImageOfPage": {
        "@id": "https://myesatherapist.com/esa-letter-minnesota/#primaryimage"
      },
      "image": {
        "@id": "https://myesatherapist.com/esa-letter-minnesota/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/esa-letter-minnesota/#breadcrumb"
      },
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "datePublished": "2021-12-20T10:19:17+00:00",
      "dateModified": "2026-09-12T00:00:00+00:00",
      "inLanguage": "en-US",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          "h1",
          ".meta-description"
        ]
      }
    },
    {
      "@type": "ImageObject",
      "@id": "https://myesatherapist.com/esa-letter-minnesota/#primaryimage",
      "url": "https://myesatherapist.com/images/states/minnesota-esa-letter-sample.webp",
      "contentUrl": "https://myesatherapist.com/images/states/minnesota-esa-letter-sample.webp",
      "caption": "ESA Letter Online Evaluations for Minnesota Residents"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/esa-letter-minnesota/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://myesatherapist.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "ESA by State",
          "item": "https://myesatherapist.com/state/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "ESA Letter Minnesota",
          "item": "https://myesatherapist.com/esa-letter-minnesota/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://myesatherapist.com/esa-letter-minnesota/#service",
      "name": "Minnesota ESA Letter Evaluation",
      "description": "Online Emotional Support Animal evaluations by licensed mental health professionals for Minnesota residents, delivered entirely via telehealth. ESA letters are issued only when clinically appropriate after an independent mental health assessment aligned with Fair Housing Act (FHA) guidelines.",
      "url": "https://myesatherapist.com/esa-letter-minnesota/",
      "serviceType": "Online ESA Letter Evaluation (Telehealth)",
      "image": {
        "@id": "https://myesatherapist.com/esa-letter-minnesota/#primaryimage"
      },
      "provider": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "areaServed": {
        "@id": "https://myesatherapist.com/esa-letter-minnesota/#place"
      },
      "audience": {
        "@type": "Audience",
        "@id": "https://myesatherapist.com/esa-letter-minnesota/#audience",
        "audienceType": "Adults in Minnesota seeking Emotional Support Animal evaluations"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://myesatherapist.com/esa-letter-minnesota/",
        "servicePhone": "+1-888-412-4041",
        "availableLanguage": [
          "English"
        ],
        "processingTime": "P1D"
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
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "offers": {
        "@id": "https://myesatherapist.com/esa-letter-minnesota/#offer"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ESA Letter Services - Minnesota",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Online ESA Letter Evaluation"
            }
          }
        ]
      },
      "termsOfService": "https://myesatherapist.com/terms-of-use/"
    },
    {
      "@type": "Offer",
      "@id": "https://myesatherapist.com/esa-letter-minnesota/#offer",
      "price": "149",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "eligibleRegion": {
        "@id": "https://myesatherapist.com/esa-letter-minnesota/#place"
      },
      "url": "https://myesatherapist.com/esa-letter-minnesota/",
      "itemOffered": {
        "@id": "https://myesatherapist.com/esa-letter-minnesota/#service"
      },
      "seller": {
        "@id": "https://myesatherapist.com/#organization"
      }
    },
    {
      "@type": "MedicalOrganization",
      "@id": "https://myesatherapist.com/#medicalprovider",
      "name": "My ESA Therapist",
      "url": "https://myesatherapist.com/",
      "medicalSpecialty": "Psychiatric",
      "isAcceptingNewPatients": true,
      "availableService": {
        "@id": "https://myesatherapist.com/esa-letter-minnesota/#service"
      },
      "audience": {
        "@type": "MedicalAudience",
        "audienceType": "Patient",
        "requiredMinAge": 18
      }
    },
    {
      "@type": "Person",
      "@id": "https://myesatherapist.com/esa-doctors/dr-robert-staff/#person",
      "name": "Robert Staaf",
      "jobTitle": "Licensed Clinical Social Worker",
      "description": "Licensed Clinical Social Worker licensed in 30+ states specializing in psychotherapy and ESA evaluations.",
      "image": {
        "@type": "ImageObject",
        "url": "https://myesatherapist.com/images/doctors/robert-staaf-profile-image.webp"
      },
      "url": "https://myesatherapist.com/esa-doctors/dr-robert-staff/",
      "sameAs": [
        "https://www.linkedin.com/in/robert-staaf-b57b53333/"
      ],
      "worksFor": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "knowsAbout": [
        "Emotional Support Animal Evaluations",
        "Psychotherapy",
        "Anxiety",
        "Stress Management",
        "Emotional Well-being"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://myesatherapist.com/esa-doctors/dr-leslie-k-gamble/#person",
      "name": "Leslie K. Gamble",
      "jobTitle": "Licensed Independent Clinical Social Worker",
      "description": "Licensed Independent Clinical Social Worker with 13+ years of experience providing behavioral health care and ESA evaluations.",
      "image": {
        "@type": "ImageObject",
        "url": "https://myesatherapist.com/images/doctors/leslie-k.-gamble-licsw-image.webp"
      },
      "url": "https://myesatherapist.com/esa-doctors/dr-leslie-k-gamble/",
      "sameAs": [
        "https://www.linkedin.com/in/leslie-gamble-727571366"
      ],
      "worksFor": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "knowsAbout": [
        "Emotional Support Animal Evaluations",
        "Behavioral Health Care",
        "Anxiety",
        "Depression",
        "PTSD"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://myesatherapist.com/esa-doctors/dr-gaurav-patel/#person",
      "name": "Gaurav Patel, MD",
      "jobTitle": "Family Medicine Physician",
      "description": "Board-certified family medicine physician with experience providing evidence-based, patient-focused care across inpatient, urgent care, outpatient, and telemedicine settings.",
      "image": {
        "@type": "ImageObject",
        "url": "https://myesatherapist.com/images/doctors/dr-gaurav-patel-image.webp"
      },
      "url": "https://myesatherapist.com/esa-doctors/dr-gaurav-patel/",
      "sameAs": [
        "https://www.linkedin.com/in/gaurav-patel-m-d-b5565916"
      ],
      "worksFor": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "knowsAbout": [
        "Emotional Support Animal Evaluations",
        "Depression",
        "Anxiety",
        "Chronic Conditions",
        "Sleep Concerns"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://myesatherapist.com/esa-letter-minnesota/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What questions are asked during an ESA evaluation in Minnesota?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "During an online ESA evaluation for Minnesota residents, clinicians typically ask about your mental health history, current symptoms, daily functioning, housing situation, and how an animal may provide emotional support. Questions focus on clinical need, not pet ownership preferences."
          }
        },
        {
          "@type": "Question",
          "name": "How Much Does an ESA Letter Cost in Minnesota?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of an ESA letter for Minnesota residents varies by provider and evaluation method. Typically, it ranges around $100–$200 for a proper assessment by a licensed professional. At My ESA Therapist, the fee is $149, which includes the online evaluation and issuance of the ESA letter if you qualify."
          }
        },
        {
          "@type": "Question",
          "name": "Can any doctor write an ESA letter for Minnesota residents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, not every doctor can write an ESA letter. The letter must be issued by a licensed healthcare professional authorized to assess mental health and establish a therapeutic relationship remotely, such as a licensed therapist, psychologist, psychiatrist, or other qualified healthcare professional authorized to practice telehealth for Minnesota residents."
          }
        },
        {
          "@type": "Question",
          "name": "Can working professionals in Minnesota qualify for an emotional support animal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, working professionals in Minnesota may qualify for an ESA if they have a mental health condition that affects daily functioning. Employment status does not impact eligibility, as ESA evaluations are based on clinical need, not occupation or income."
          }
        },
        {
          "@type": "Question",
          "name": "Is a single online ESA appointment enough for Minnesota residents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A single online ESA appointment may be sufficient only if it includes a legitimate clinical evaluation and establishes a therapeutic relationship. Instant or cursory visits without proper assessment typically do not meet ethical or professional standards for ESA recommendations."
          }
        },
        {
          "@type": "Question",
          "name": "Does a condition need to be severe to qualify for an ESA in Minnesota?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, a condition does not need to be severe to qualify for an ESA in Minnesota. Eligibility is based on whether a mental health condition substantially affects daily functioning and whether an emotional support animal is clinically appropriate, as determined through a licensed professional's online evaluation."
          }
        }
      ]
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-minnesota/#video-1",
      "name": "ESA Letter Minnesota - Client Testimonial 1",
      "description": "Client testimonial video shared by My ESA Therapist about the Minnesota online ESA letter evaluation experience.",
      "thumbnailUrl": [
        "https://i.ytimg.com/vi/vId0sRVPY0I/hqdefault.jpg"
      ],
      "embedUrl": "https://www.youtube.com/embed/vId0sRVPY0I",
      "contentUrl": "https://www.youtube.com/shorts/vId0sRVPY0I",
      "uploadDate": "2026-07-08T00:00:00+00:00",
      "uploader": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      }
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-minnesota/#video-2",
      "name": "ESA Letter Minnesota - Client Testimonial 2",
      "description": "Client testimonial video shared by My ESA Therapist about the Minnesota online ESA letter evaluation experience.",
      "thumbnailUrl": [
        "https://i.ytimg.com/vi/gxdipq0J2No/hqdefault.jpg"
      ],
      "embedUrl": "https://www.youtube.com/embed/gxdipq0J2No",
      "contentUrl": "https://www.youtube.com/shorts/gxdipq0J2No",
      "uploadDate": "2026-06-02T00:00:00+00:00",
      "uploader": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      }
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-minnesota/#video-3",
      "name": "ESA Letter Minnesota - Client Testimonial 3",
      "description": "Client testimonial video shared by My ESA Therapist about the Minnesota online ESA letter evaluation experience.",
      "thumbnailUrl": [
        "https://i.ytimg.com/vi/Mjf33Y0NvVc/hqdefault.jpg"
      ],
      "embedUrl": "https://www.youtube.com/embed/Mjf33Y0NvVc",
      "contentUrl": "https://www.youtube.com/shorts/Mjf33Y0NvVc",
      "uploadDate": "2026-06-05T00:00:00+00:00",
      "uploader": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      }
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-minnesota/#video-4",
      "name": "ESA Letter Minnesota - Client Testimonial 4",
      "description": "Client testimonial video shared by My ESA Therapist about the Minnesota online ESA letter evaluation experience.",
      "thumbnailUrl": [
        "https://i.ytimg.com/vi/CybsnJUGzTM/hqdefault.jpg"
      ],
      "embedUrl": "https://www.youtube.com/embed/CybsnJUGzTM",
      "contentUrl": "https://www.youtube.com/shorts/CybsnJUGzTM",
      "uploadDate": "2026-06-03T00:00:00+00:00",
      "uploader": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      }
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-minnesota/#video-5",
      "name": "ESA Letter Minnesota - Client Testimonial 5",
      "description": "Client testimonial video shared by My ESA Therapist about the Minnesota online ESA letter evaluation experience.",
      "thumbnailUrl": [
        "https://i.ytimg.com/vi/figN4V7ThbM/hqdefault.jpg"
      ],
      "embedUrl": "https://www.youtube.com/embed/figN4V7ThbM",
      "contentUrl": "https://www.youtube.com/shorts/figN4V7ThbM",
      "uploadDate": "2026-05-27T00:00:00+00:00",
      "uploader": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      }
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-minnesota/#video-6",
      "name": "ESA Letter Minnesota - Client Testimonial 6",
      "description": "Client testimonial video shared by My ESA Therapist about the Minnesota online ESA letter evaluation experience.",
      "thumbnailUrl": [
        "https://i.ytimg.com/vi/TV4dghtuqak/hqdefault.jpg"
      ],
      "embedUrl": "https://www.youtube.com/embed/TV4dghtuqak",
      "contentUrl": "https://www.youtube.com/shorts/TV4dghtuqak",
      "uploadDate": "2026-05-21T00:00:00+00:00",
      "uploader": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      }
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-minnesota/#video-7",
      "name": "ESA Letter Minnesota - Client Testimonial 7",
      "description": "Client testimonial video shared by My ESA Therapist about the Minnesota online ESA letter evaluation experience.",
      "thumbnailUrl": [
        "https://i.ytimg.com/vi/rPtmxr05tsc/hqdefault.jpg"
      ],
      "embedUrl": "https://www.youtube.com/embed/rPtmxr05tsc",
      "contentUrl": "https://www.youtube.com/shorts/rPtmxr05tsc",
      "uploadDate": "2026-05-14T00:00:00+00:00",
      "uploader": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      }
    }
  ]
};
