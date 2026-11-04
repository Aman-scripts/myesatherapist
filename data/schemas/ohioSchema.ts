export const ohioSchema = {
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
      "@id": "https://myesatherapist.com/esa-letter-ohio/#place",
      "name": "Ohio",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "OH",
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
      "@id": "https://myesatherapist.com/esa-letter-ohio/#webpage",
      "url": "https://myesatherapist.com/esa-letter-ohio/",
      "name": "Ohio ESA Letter Online | My ESA Therapist",
      "description": "Looking for an ESA letter in Ohio? My ESA Therapist helps you begin your evaluation by connecting you with licensed professionals online.",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website"
      },
      "about": {
        "@id": "https://myesatherapist.com/esa-letter-ohio/#service"
      },
      "mainEntity": {
        "@id": "https://myesatherapist.com/esa-letter-ohio/#service"
      },
      "primaryImageOfPage": {
        "@id": "https://myesatherapist.com/esa-letter-ohio/#primaryimage"
      },
      "image": {
        "@id": "https://myesatherapist.com/esa-letter-ohio/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/esa-letter-ohio/#breadcrumb"
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
      "@id": "https://myesatherapist.com/esa-letter-ohio/#primaryimage",
      "url": "https://myesatherapist.com/images/states/ohio-esa-letter-sample.webp",
      "contentUrl": "https://myesatherapist.com/images/states/ohio-esa-letter-sample.webp",
      "caption": "ESA Letter Online Evaluations for Ohio Residents"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/esa-letter-ohio/#breadcrumb",
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
          "name": "ESA Letter Ohio",
          "item": "https://myesatherapist.com/esa-letter-ohio/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://myesatherapist.com/esa-letter-ohio/#service",
      "name": "Ohio ESA Letter Evaluation",
      "description": "Online Emotional Support Animal evaluations by licensed mental health professionals for Ohio residents, delivered entirely via telehealth. ESA letters are issued only when clinically appropriate after an independent mental health assessment aligned with Fair Housing Act (FHA) guidelines.",
      "url": "https://myesatherapist.com/esa-letter-ohio/",
      "serviceType": "Online ESA Letter Evaluation (Telehealth)",
      "image": {
        "@id": "https://myesatherapist.com/esa-letter-ohio/#primaryimage"
      },
      "provider": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "areaServed": {
        "@id": "https://myesatherapist.com/esa-letter-ohio/#place"
      },
      "audience": {
        "@type": "Audience",
        "@id": "https://myesatherapist.com/esa-letter-ohio/#audience",
        "audienceType": "Adults in Ohio seeking Emotional Support Animal evaluations"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://myesatherapist.com/esa-letter-ohio/",
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
        "@id": "https://myesatherapist.com/esa-letter-ohio/#offer"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ESA Letter Services - Ohio",
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
      "@id": "https://myesatherapist.com/esa-letter-ohio/#offer",
      "price": "149",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "eligibleRegion": {
        "@id": "https://myesatherapist.com/esa-letter-ohio/#place"
      },
      "url": "https://myesatherapist.com/esa-letter-ohio/",
      "itemOffered": {
        "@id": "https://myesatherapist.com/esa-letter-ohio/#service"
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
        "url": "https://myesatherapist.com/esa-letter-ohio/"
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
      "@id": "https://myesatherapist.com/esa-letter-ohio/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does My ESA Letter Need To Be Renewed Every Year In Ohio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Federal law does not impose a universal annual renewal requirement for ESA letters. A housing provider may request updated reliable information when permitted by law and reasonably necessary to assess an accommodation request. Whether an update is appropriate depends on the circumstances and the information already available.",
          },
        },
        {
          "@type": "Question",
          "name": "How Much Does It Cost To Get An ESA Letter In Ohio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Ohio, ESA letter costs depend on the provider and how the evaluation is conducted, with legitimate services focusing on a verified mental health assessment. At My ESA Therapist, the fee is $149, including the evaluation and ESA letter upon approval.",
          },
        },
        {
          "@type": "Question",
          "name": "Can A Landlord In Ohio Verify My Therapist’s License Number?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Housing providers may request reliable supporting information when permitted by law and when the disability-related need is not apparent or already known. They generally should not require detailed medical records or unnecessary disclosure of a specific diagnosis. Any verification request should be limited to information reasonably necessary to assess the accommodation.",
          },
        },
        {
          "@type": "Question",
          "name": "What Happens If My ESA Letter Was Issued By An Out-Of-State Provider?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Housing providers may assess whether supporting documentation is reliable and whether the professional was appropriately qualified and authorized to provide the service. An out-of-state license alone does not automatically invalidate documentation, but applicable professional licensing requirements and the circumstances of the assessment may matter.",
          },
        },
        {
          "@type": "Question",
          "name": "If I Work From Home, Can My Landlord Argue That I “Don’t Need” An ESA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Working from home does not automatically disqualify someone from requesting an assistance-animal accommodation. Housing providers may assess the request and any necessary supporting information under applicable law. They should not deny a request based solely on assumptions about the person’s condition or living arrangements.",
          },
        },
        {
          "@type": "Question",
          "name": "Can A Landlord In Ohio Require Me To Use A Specific ESA Verification Form?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A housing provider may offer an accommodation request form, but the request should be assessed under applicable fair housing requirements rather than rejected solely because a particular form was not used. The provider may request reliable supporting information when legally permitted and reasonably necessary.",
          },
        }
      ]
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-ohio/#video-1",
      "name": "ESA Letter Ohio - Client Testimonial 1",
      "description": "Client testimonial video shared by My ESA Therapist about the Ohio online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-ohio/#video-2",
      "name": "ESA Letter Ohio - Client Testimonial 2",
      "description": "Client testimonial video shared by My ESA Therapist about the Ohio online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-ohio/#video-3",
      "name": "ESA Letter Ohio - Client Testimonial 3",
      "description": "Client testimonial video shared by My ESA Therapist about the Ohio online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-ohio/#video-4",
      "name": "ESA Letter Ohio - Client Testimonial 4",
      "description": "Client testimonial video shared by My ESA Therapist about the Ohio online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-ohio/#video-5",
      "name": "ESA Letter Ohio - Client Testimonial 5",
      "description": "Client testimonial video shared by My ESA Therapist about the Ohio online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-ohio/#video-6",
      "name": "ESA Letter Ohio - Client Testimonial 6",
      "description": "Client testimonial video shared by My ESA Therapist about the Ohio online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-ohio/#video-7",
      "name": "ESA Letter Ohio - Client Testimonial 7",
      "description": "Client testimonial video shared by My ESA Therapist about the Ohio online ESA letter evaluation experience.",
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
