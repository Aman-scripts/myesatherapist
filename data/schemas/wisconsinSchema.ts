export const wisconsinSchema = {
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
      "@id": "https://myesatherapist.com/esa-letter-wisconsin/#place",
      "name": "Wisconsin",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "WI",
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
      "@id": "https://myesatherapist.com/esa-letter-wisconsin/#webpage",
      "url": "https://myesatherapist.com/esa-letter-wisconsin/",
      "name": "Wisconsin ESA Letter Online | My ESA Therapist",
      "description": "Need an ESA letter in Wisconsin? My ESA Therapist connects you with licensed mental health professionals for a secure and simple online ESA evaluation.",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website"
      },
      "about": {
        "@id": "https://myesatherapist.com/esa-letter-wisconsin/#service"
      },
      "mainEntity": {
        "@id": "https://myesatherapist.com/esa-letter-wisconsin/#service"
      },
      "primaryImageOfPage": {
        "@id": "https://myesatherapist.com/esa-letter-wisconsin/#primaryimage"
      },
      "image": {
        "@id": "https://myesatherapist.com/esa-letter-wisconsin/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/esa-letter-wisconsin/#breadcrumb"
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
      "@id": "https://myesatherapist.com/esa-letter-wisconsin/#primaryimage",
      "url": "https://myesatherapist.com/images/states/wisconsin-esa-letter-sample.webp",
      "contentUrl": "https://myesatherapist.com/images/states/wisconsin-esa-letter-sample.webp",
      "caption": "ESA Letter Online Evaluations for Wisconsin Residents"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/esa-letter-wisconsin/#breadcrumb",
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
          "name": "ESA Letter Wisconsin",
          "item": "https://myesatherapist.com/esa-letter-wisconsin/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://myesatherapist.com/esa-letter-wisconsin/#service",
      "name": "Wisconsin ESA Letter Evaluation",
      "description": "Online Emotional Support Animal evaluations by licensed mental health professionals for Wisconsin residents, delivered entirely via telehealth. ESA letters are issued only when clinically appropriate after an independent mental health assessment aligned with Fair Housing Act (FHA) guidelines.",
      "url": "https://myesatherapist.com/esa-letter-wisconsin/",
      "serviceType": "Online ESA Letter Evaluation (Telehealth)",
      "image": {
        "@id": "https://myesatherapist.com/esa-letter-wisconsin/#primaryimage"
      },
      "provider": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "areaServed": {
        "@id": "https://myesatherapist.com/esa-letter-wisconsin/#place"
      },
      "audience": {
        "@type": "Audience",
        "@id": "https://myesatherapist.com/esa-letter-wisconsin/#audience",
        "audienceType": "Adults in Wisconsin seeking Emotional Support Animal evaluations"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://myesatherapist.com/esa-letter-wisconsin/",
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
        "@id": "https://myesatherapist.com/esa-letter-wisconsin/#offer"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ESA Letter Services - Wisconsin",
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
      "@id": "https://myesatherapist.com/esa-letter-wisconsin/#offer",
      "price": "149",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "eligibleRegion": {
        "@id": "https://myesatherapist.com/esa-letter-wisconsin/#place"
      },
      "url": "https://myesatherapist.com/esa-letter-wisconsin/",
      "itemOffered": {
        "@id": "https://myesatherapist.com/esa-letter-wisconsin/#service"
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
        "url": "https://myesatherapist.com/esa-letter-wisconsin/"
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
      "@id": "https://myesatherapist.com/esa-letter-wisconsin/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can My ESA Be A Non-Traditional Animal In Wisconsin, Like A Miniature Pig Or Bird?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. An animal may qualify as an ESA when the applicable legal requirements are met and the animal addresses a disability-related need. Housing providers may assess requests involving the specific animal and may deny an accommodation on legally recognized grounds, including an undue burden, a fundamental alteration, an unmitigable direct threat, or substantial property damage.",
          },
        },
        {
          "@type": "Question",
          "name": "What Happens If A Wisconsin Landlord Violates My ESA Letter Rights?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can file a complaint with HUD or pursue legal action in Wisconsin courts. Violations include refusing reasonable accommodations or charging illegal fees.",
          },
        },
        {
          "@type": "Question",
          "name": "What is The Cost Of An ESA Letter In Wisconsin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Wisconsin, ESA letter pricing varies depending on the service and consultation process, ensuring compliance through a licensed mental health assessment. The $149 fee at My ESA Therapist covers both the evaluation and, if you are eligible, the issuance of the ESA letter.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I Need To Renew My ESA Letter In Wisconsin Each Year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. While not legally required, many landlords request an updated ESA letter annually to confirm ongoing need. It helps avoid disputes and ensures your housing rights remain protected.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I Have More Than One ESA In Wisconsin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "More than one emotional support animal may be covered when each animal is supported by a disability-related need. Housing providers may assess the request for each animal under applicable law and consider legally recognized grounds for denial. There is no blanket rule requiring approval of every request for multiple animals.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I Use My Wisconsin ESA Letter In Other U.S. States?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An ESA letter may support a housing accommodation request after a move to another state. The new housing provider may assess the request under applicable law and request reliable supporting information when legally necessary. Federal law does not universally require a new ESA letter solely because someone relocates.",
          },
        }
      ]
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-wisconsin/#video-1",
      "name": "ESA Letter Wisconsin - Client Testimonial 1",
      "description": "Client testimonial video shared by My ESA Therapist about the Wisconsin online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-wisconsin/#video-2",
      "name": "ESA Letter Wisconsin - Client Testimonial 2",
      "description": "Client testimonial video shared by My ESA Therapist about the Wisconsin online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-wisconsin/#video-3",
      "name": "ESA Letter Wisconsin - Client Testimonial 3",
      "description": "Client testimonial video shared by My ESA Therapist about the Wisconsin online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-wisconsin/#video-4",
      "name": "ESA Letter Wisconsin - Client Testimonial 4",
      "description": "Client testimonial video shared by My ESA Therapist about the Wisconsin online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-wisconsin/#video-5",
      "name": "ESA Letter Wisconsin - Client Testimonial 5",
      "description": "Client testimonial video shared by My ESA Therapist about the Wisconsin online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-wisconsin/#video-6",
      "name": "ESA Letter Wisconsin - Client Testimonial 6",
      "description": "Client testimonial video shared by My ESA Therapist about the Wisconsin online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-wisconsin/#video-7",
      "name": "ESA Letter Wisconsin - Client Testimonial 7",
      "description": "Client testimonial video shared by My ESA Therapist about the Wisconsin online ESA letter evaluation experience.",
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
}
