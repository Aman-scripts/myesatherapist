export const montanaSchema = {
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
      "@id": "https://myesatherapist.com/esa-letter-montana/#place",
      "name": "Montana",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "MT",
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
      "@id": "https://myesatherapist.com/esa-letter-montana/#webpage",
      "url": "https://myesatherapist.com/esa-letter-montana/",
      "name": "Montana ESA Letter Online | My ESA Therapist",
      "description": "Looking for a Montana ESA letter? My ESA Therapist connects you with licensed professionals for quick ESA evaluations online. Start Your ESA Evaluation.",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website"
      },
      "about": {
        "@id": "https://myesatherapist.com/esa-letter-montana/#service"
      },
      "mainEntity": {
        "@id": "https://myesatherapist.com/esa-letter-montana/#service"
      },
      "primaryImageOfPage": {
        "@id": "https://myesatherapist.com/esa-letter-montana/#primaryimage"
      },
      "image": {
        "@id": "https://myesatherapist.com/esa-letter-montana/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/esa-letter-montana/#breadcrumb"
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
          "h1"
        ]
      }
    },
    {
      "@type": "ImageObject",
      "@id": "https://myesatherapist.com/esa-letter-montana/#primaryimage",
      "url": "https://myesatherapist.com/images/states/montana-esa-letter-sample.webp",
      "contentUrl": "https://myesatherapist.com/images/states/montana-esa-letter-sample.webp",
      "caption": "ESA Letter Online Evaluations for Montana Residents"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/esa-letter-montana/#breadcrumb",
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
          "name": "ESA Letter Montana",
          "item": "https://myesatherapist.com/esa-letter-montana/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://myesatherapist.com/esa-letter-montana/#service",
      "name": "Montana ESA Letter Evaluation",
      "description": "Online Emotional Support Animal evaluations by licensed mental health professionals for Montana residents, delivered entirely via telehealth. ESA letters are issued only when clinically appropriate after an independent mental health assessment aligned with Fair Housing Act (FHA) guidelines.",
      "url": "https://myesatherapist.com/esa-letter-montana/",
      "serviceType": "Online ESA Letter Evaluation (Telehealth)",
      "image": {
        "@id": "https://myesatherapist.com/esa-letter-montana/#primaryimage"
      },
      "provider": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "areaServed": {
        "@id": "https://myesatherapist.com/esa-letter-montana/#place"
      },
      "audience": {
        "@type": "Audience",
        "@id": "https://myesatherapist.com/esa-letter-montana/#audience",
        "audienceType": "Adults in Montana seeking Emotional Support Animal evaluations"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://myesatherapist.com/esa-letter-montana/",
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
        "@id": "https://myesatherapist.com/esa-letter-montana/#offer"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ESA Letter Services - Montana",
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
      "@id": "https://myesatherapist.com/esa-letter-montana/#offer",
      "price": "149",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "eligibleRegion": {
        "@id": "https://myesatherapist.com/esa-letter-montana/#place"
      },
      "url": "https://myesatherapist.com/esa-letter-montana/",
      "itemOffered": {
        "@id": "https://myesatherapist.com/esa-letter-montana/#service"
      },
      "seller": {
        "@id": "https://myesatherapist.com/#organization"
      }
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
        "url": "https://myesatherapist.com/esa-letter-montana/"
      }
    },
    {
      "@type": "Person",
      "@id": "https://myesatherapist.com/esa-doctors/dr-robert-staaf/#person",
      "name": "Robert Staaf",
      "jobTitle": "Licensed Clinical Social Worker",
      "description": "Licensed Clinical Social Worker licensed in 30+ states specializing in psychotherapy and ESA evaluations.",
      "image": {
        "@type": "ImageObject",
        "url": "https://myesatherapist.com/images/doctors/robert-staaf-profile-image.webp"
      },
      "url": "https://myesatherapist.com/esa-doctors/dr-robert-staaf/",
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
      "@id": "https://myesatherapist.com/esa-letter-montana/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does My ESA Letter Expire in Montana?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Although there is no set expiration date set by state law, many housing providers ask for updated documentation issued within 12 months to make sure it accurately reflects your current clinical status.",
          },
        },
        {
          "@type": "Question",
          "name": "How Long Does The ESA Process Take In Montana?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under the Montana ESA law, the process cannot be completed the same day. The Montana House Bill 703 outlines that a clinician must establish at least a 30-day professional relationship before issuing an ESA letter. The total timeline depends on scheduling and the provider’s evaluation process.",
          },
        },
        {
          "@type": "Question",
          "name": "What Makes An ESA Letter Legally Valid In Montana?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Supporting information for an emotional support animal must meet applicable legal requirements. Under Montana law, when a landlord requests supporting information under the state's ESA documentation statute, the information must meet the applicable requirements for the professional's qualifications, clinical evaluation, and client-provider relationship. Other reasonable-accommodation protections under federal and state law also apply.",
          },
        },
        {
          "@type": "Question",
          "name": "How Much Does A Professionally Issued ESA Letter Cost In Montana?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Montana, ESA letter pricing varies based on the provider and the depth of the consultation process. At My ESA Therapist, the fee is $149, which includes both the evaluation and issuance of the ESA letter if you qualify.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I Have More Than One ESA In Montana?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. But it is important for a licensed mental health expert licensed in Montana to determine that each animal provides distinct therapeutic support based on the documented mental health needs. It is also important to ensure that the emotional support animals do not pose a direct threat to property or safety.",
          },
        },
        {
          "@type": "Question",
          "name": "Can A Landlord Delay Responding To My ESA Request?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Housing providers should handle reasonable accommodation requests within a reasonable timeframe. Montana law also requires a landlord to issue a written determination after receiving the supplemental information required under the applicable ESA documentation law.",
          },
        },
        {
          "@type": "Question",
          "name": "What Happens If My ESA Causes Damage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If, under any circumstances, your ESA poses a threat or causes damage to the property, you may still be financially responsible for actual harm caused by the animal, even though pet fees cannot be charged upfront.",
          },
        }
      ]
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-montana/#video-1",
      "name": "ESA Letter Montana - Client Testimonial 1",
      "description": "Client testimonial video shared by My ESA Therapist about the Montana online ESA letter evaluation experience.",
      "thumbnailUrl": [
        "https://i.ytimg.com/vi/vId0sRVPY0I/hqdefault.jpg"
      ],
      "embedUrl": "https://www.youtube.com/embed/vId0sRVPY0I",
      "contentUrl": "https://www.youtube.com/shorts/vId0sRVPY0I",
      "uploadDate": "2026-07-08T00:00:00+00:00",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      }
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-montana/#video-2",
      "name": "ESA Letter Montana - Client Testimonial 2",
      "description": "Client testimonial video shared by My ESA Therapist about the Montana online ESA letter evaluation experience.",
      "thumbnailUrl": [
        "https://i.ytimg.com/vi/gxdipq0J2No/hqdefault.jpg"
      ],
      "embedUrl": "https://www.youtube.com/embed/gxdipq0J2No",
      "contentUrl": "https://www.youtube.com/shorts/gxdipq0J2No",
      "uploadDate": "2026-06-02T00:00:00+00:00",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      }
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-montana/#video-3",
      "name": "ESA Letter Montana - Client Testimonial 3",
      "description": "Client testimonial video shared by My ESA Therapist about the Montana online ESA letter evaluation experience.",
      "thumbnailUrl": [
        "https://i.ytimg.com/vi/Mjf33Y0NvVc/hqdefault.jpg"
      ],
      "embedUrl": "https://www.youtube.com/embed/Mjf33Y0NvVc",
      "contentUrl": "https://www.youtube.com/shorts/Mjf33Y0NvVc",
      "uploadDate": "2026-06-05T00:00:00+00:00",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      }
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-montana/#video-4",
      "name": "ESA Letter Montana - Client Testimonial 4",
      "description": "Client testimonial video shared by My ESA Therapist about the Montana online ESA letter evaluation experience.",
      "thumbnailUrl": [
        "https://i.ytimg.com/vi/CybsnJUGzTM/hqdefault.jpg"
      ],
      "embedUrl": "https://www.youtube.com/embed/CybsnJUGzTM",
      "contentUrl": "https://www.youtube.com/shorts/CybsnJUGzTM",
      "uploadDate": "2026-06-03T00:00:00+00:00",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      }
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-montana/#video-5",
      "name": "ESA Letter Montana - Client Testimonial 5",
      "description": "Client testimonial video shared by My ESA Therapist about the Montana online ESA letter evaluation experience.",
      "thumbnailUrl": [
        "https://i.ytimg.com/vi/figN4V7ThbM/hqdefault.jpg"
      ],
      "embedUrl": "https://www.youtube.com/embed/figN4V7ThbM",
      "contentUrl": "https://www.youtube.com/shorts/figN4V7ThbM",
      "uploadDate": "2026-05-27T00:00:00+00:00",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      }
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-montana/#video-6",
      "name": "ESA Letter Montana - Client Testimonial 6",
      "description": "Client testimonial video shared by My ESA Therapist about the Montana online ESA letter evaluation experience.",
      "thumbnailUrl": [
        "https://i.ytimg.com/vi/TV4dghtuqak/hqdefault.jpg"
      ],
      "embedUrl": "https://www.youtube.com/embed/TV4dghtuqak",
      "contentUrl": "https://www.youtube.com/shorts/TV4dghtuqak",
      "uploadDate": "2026-05-21T00:00:00+00:00",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      }
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-montana/#video-7",
      "name": "ESA Letter Montana - Client Testimonial 7",
      "description": "Client testimonial video shared by My ESA Therapist about the Montana online ESA letter evaluation experience.",
      "thumbnailUrl": [
        "https://i.ytimg.com/vi/rPtmxr05tsc/hqdefault.jpg"
      ],
      "embedUrl": "https://www.youtube.com/embed/rPtmxr05tsc",
      "contentUrl": "https://www.youtube.com/shorts/rPtmxr05tsc",
      "uploadDate": "2026-05-14T00:00:00+00:00",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      }
    }
  ]
};
