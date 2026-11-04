export const texasSchema = {
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
      "@id": "https://myesatherapist.com/esa-letter-texas/#place",
      "name": "Texas",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "TX",
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
      "@id": "https://myesatherapist.com/esa-letter-texas/#webpage",
      "url": "https://myesatherapist.com/esa-letter-texas/",
      "name": "Texas ESA Letter Online | My ESA Therapist",
      "description": "Get evaluated for texas ESA letter by licensed therapists. Secure online assessments with compliant housing documentation.",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website"
      },
      "about": {
        "@id": "https://myesatherapist.com/esa-letter-texas/#service"
      },
      "mainEntity": {
        "@id": "https://myesatherapist.com/esa-letter-texas/#service"
      },
      "primaryImageOfPage": {
        "@id": "https://myesatherapist.com/esa-letter-texas/#primaryimage"
      },
      "image": {
        "@id": "https://myesatherapist.com/esa-letter-texas/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/esa-letter-texas/#breadcrumb"
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
      "@id": "https://myesatherapist.com/esa-letter-texas/#primaryimage",
      "url": "https://myesatherapist.com/images/states/texas-esa-letter-sample.webp",
      "contentUrl": "https://myesatherapist.com/images/states/texas-esa-letter-sample.webp",
      "caption": "ESA Letter Online Evaluations for Texas Residents"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/esa-letter-texas/#breadcrumb",
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
          "name": "ESA Letter Texas",
          "item": "https://myesatherapist.com/esa-letter-texas/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://myesatherapist.com/esa-letter-texas/#service",
      "name": "Texas ESA Letter Evaluation",
      "description": "Online Emotional Support Animal evaluations by licensed mental health professionals for Texas residents, delivered entirely via telehealth. ESA letters are issued only when clinically appropriate after an independent mental health assessment aligned with Fair Housing Act (FHA) guidelines.",
      "url": "https://myesatherapist.com/esa-letter-texas/",
      "serviceType": "Online ESA Letter Evaluation (Telehealth)",
      "image": {
        "@id": "https://myesatherapist.com/esa-letter-texas/#primaryimage"
      },
      "provider": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "areaServed": {
        "@id": "https://myesatherapist.com/esa-letter-texas/#place"
      },
      "audience": {
        "@type": "Audience",
        "@id": "https://myesatherapist.com/esa-letter-texas/#audience",
        "audienceType": "Adults in Texas seeking Emotional Support Animal evaluations"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://myesatherapist.com/esa-letter-texas/",
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
        "@id": "https://myesatherapist.com/esa-letter-texas/#offer"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ESA Letter Services - Texas",
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
      "@id": "https://myesatherapist.com/esa-letter-texas/#offer",
      "price": "149",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "eligibleRegion": {
        "@id": "https://myesatherapist.com/esa-letter-texas/#place"
      },
      "url": "https://myesatherapist.com/esa-letter-texas/",
      "itemOffered": {
        "@id": "https://myesatherapist.com/esa-letter-texas/#service"
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
        "url": "https://myesatherapist.com/esa-letter-texas/"
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
      "@id": "https://myesatherapist.com/esa-letter-texas/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How Much Does an ESA Letter Evaluation Cost in Texas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At My ESA Therapist, the ESA evaluation costs $149. This includes a secure telehealth evaluation with a Texas-licensed professional and the platform fees. You are not paying for an ESA letter. An emotional support animal letter is provided only if the clinical evaluation supports the need for an emotional support animal.",
          },
        },
        {
          "@type": "Question",
          "name": "Are Online ESA Letters Valid in Texas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Online ESA letters are legally valid in Texas as long as they are issued by a state-licensed mental health professional who conducts a proper mental health evaluation before approval.",
          },
        },
        {
          "@type": "Question",
          "name": "How Long is ESA Documentation Typically Valid in Texas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There is no universal annual renewal requirement for ESA documentation under federal housing law. A housing provider may request relevant updated information when reasonably necessary to evaluate a particular accommodation request, subject to applicable law.",
          },
        },
        {
          "@type": "Question",
          "name": "When Can a Landlord Legally Reject an ESA in Texas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Texas housing providers must assess ESA requests individually under fair housing law. Requests may be denied if legal requirements are unmet, the accommodation creates an undue burden, or the animal poses an unmitigable direct threat or risk of significant property damage. Breed or size alone is insufficient, and HUD’s May 2026 memo narrows its federal enforcement approach.",
          },
        },
        {
          "@type": "Question",
          "name": "Is There a Specific ESA Sample Letter for Texas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. There’s no official ESA letter template in Texas. What matters is that your ESA letter is written by a licensed Texas mental health professional and includes all legally required details for Fair Housing Act (FHA) compliance.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I Have More Than One Emotional Support Animal in Texas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, more than one ESA may be permitted in Texas when supported by a professional evaluation. A Texas-licensed clinician must determine that multiple animals are necessary to address the individual’s mental or emotional health needs. Housing providers may review whether accommodating more than one animal is reasonable for the specific housing situation.",
          },
        },
        {
          "@type": "Question",
          "name": "What Types of Animals Can Qualify as an ESA in Texas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dogs and cats are common ESAs. Other animal species may be considered in housing accommodation requests, depending on the circumstances and applicable law. HUD’s May 22, 2026, memorandum focuses its federal enforcement approach on animals trained to provide disability-related assistance, including trained animals other than dogs.",
          },
        },
        {
          "@type": "Question",
          "name": "Does My ESA Need To Be Trained Or Certified In Texas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, Texas does not require emotional support animals to be certified or registered. However, under HUD’s 2026 guidance, housing providers may consider whether an assistance animal is well-behaved, under control, and does not pose a significant health, safety, or property damage risk. While specialized ESA training is generally not required, responsible behavior remains important for housing accommodations.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I Get An ESA Letter For The Dog In Texas I Already Own?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You can get an ESA letter for a dog you already have if a licensed mental health professional confirms that the animal helps manage symptoms of a legitimate emotional or mental health condition.",
          },
        },
        {
          "@type": "Question",
          "name": "What Information is Included In A Texas ESA Letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Texas ESA letter includes the mental health professional’s license details, confirmation that you have a qualifying condition, and a statement stating that an emotional support animal is part of your treatment or support plan. It should be signed and dated by the provider.",
          },
        },
        {
          "@type": "Question",
          "name": "Can A Minor Under 18 Get An ESA Letter In Texas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A minor may qualify for an ESA letter in Texas when a licensed mental health professional determines that an emotional support animal can benefit their mental or emotional well-being. A parent or legal guardian is usually involved in the process.",
          },
        },
        {
          "@type": "Question",
          "name": "Will My ESA Letter Be Accepted Outside Of Texas If I Move?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends. As long as the ESA letter is issued by a licensed mental health professional authorized to practice within the United States, an ESA letter is considered legitimate. However, some states may have strict housing policies and laws, so it is advised to cross-check before moving to another state from Texas.",
          },
        },
        {
          "@type": "Question",
          "name": "Can My HOA (Homeowners Association) Deny My ESA in Texas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An HOA generally cannot deny a valid emotional support animal request when federal fair housing protections apply. However, residents may still need to provide appropriate documentation, and certain exceptions may apply in limited situations.",
          },
        },
        {
          "@type": "Question",
          "name": "Does My ESA Have The Same Rights In University Or College Housing In Texas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the Fair Housing Act covers most university and college housing in Texas, so students can live with an ESA in campus dorms and apartments even under no-pet policies. Submit your valid ESA letter to your school’s disability services office for approval before move-in. However, ESA access is limited to your housing unit; it does not extend to classrooms, libraries, or other campus buildings.",
          },
        }
      ]
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-texas/#video-1",
      "name": "ESA Letter Texas - Client Testimonial 1",
      "description": "Client testimonial video shared by My ESA Therapist about the Texas online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-texas/#video-2",
      "name": "ESA Letter Texas - Client Testimonial 2",
      "description": "Client testimonial video shared by My ESA Therapist about the Texas online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-texas/#video-3",
      "name": "ESA Letter Texas - Client Testimonial 3",
      "description": "Client testimonial video shared by My ESA Therapist about the Texas online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-texas/#video-4",
      "name": "ESA Letter Texas - Client Testimonial 4",
      "description": "Client testimonial video shared by My ESA Therapist about the Texas online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-texas/#video-5",
      "name": "ESA Letter Texas - Client Testimonial 5",
      "description": "Client testimonial video shared by My ESA Therapist about the Texas online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-texas/#video-6",
      "name": "ESA Letter Texas - Client Testimonial 6",
      "description": "Client testimonial video shared by My ESA Therapist about the Texas online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-texas/#video-7",
      "name": "ESA Letter Texas - Client Testimonial 7",
      "description": "Client testimonial video shared by My ESA Therapist about the Texas online ESA letter evaluation experience.",
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
