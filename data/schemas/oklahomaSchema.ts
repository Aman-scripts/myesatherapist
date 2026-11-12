export const oklahomaSchema = {
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
      "@id": "https://myesatherapist.com/esa-letter-oklahoma/#place",
      "name": "Oklahoma",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "OK",
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
      "@id": "https://myesatherapist.com/esa-letter-oklahoma/#webpage",
      "url": "https://myesatherapist.com/esa-letter-oklahoma/",
      "name": "Oklahoma ESA Letter Online | My ESA Therapist",
      "description": "Start your Oklahoma ESA letter evaluation with My ESA Therapist by connecting with licensed mental health professionals through a secure online process.",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website"
      },
      "about": {
        "@id": "https://myesatherapist.com/esa-letter-oklahoma/#service"
      },
      "mainEntity": {
        "@id": "https://myesatherapist.com/esa-letter-oklahoma/#service"
      },
      "primaryImageOfPage": {
        "@id": "https://myesatherapist.com/esa-letter-oklahoma/#primaryimage"
      },
      "image": {
        "@id": "https://myesatherapist.com/esa-letter-oklahoma/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/esa-letter-oklahoma/#breadcrumb"
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
      "@id": "https://myesatherapist.com/esa-letter-oklahoma/#primaryimage",
      "url": "https://myesatherapist.com/images/states/oklahoma-esa-letter-sample.webp",
      "contentUrl": "https://myesatherapist.com/images/states/oklahoma-esa-letter-sample.webp",
      "caption": "ESA Letter Online Evaluations for Oklahoma Residents"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/esa-letter-oklahoma/#breadcrumb",
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
          "name": "ESA Letter Oklahoma",
          "item": "https://myesatherapist.com/esa-letter-oklahoma/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://myesatherapist.com/esa-letter-oklahoma/#service",
      "name": "Oklahoma ESA Letter Evaluation",
      "description": "Online Emotional Support Animal evaluations by licensed mental health professionals for Oklahoma residents, delivered entirely via telehealth. ESA letters are issued only when clinically appropriate after an independent mental health assessment aligned with Fair Housing Act (FHA) guidelines.",
      "url": "https://myesatherapist.com/esa-letter-oklahoma/",
      "serviceType": "Online ESA Letter Evaluation (Telehealth)",
      "image": {
        "@id": "https://myesatherapist.com/esa-letter-oklahoma/#primaryimage"
      },
      "provider": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "areaServed": {
        "@id": "https://myesatherapist.com/esa-letter-oklahoma/#place"
      },
      "audience": {
        "@type": "Audience",
        "@id": "https://myesatherapist.com/esa-letter-oklahoma/#audience",
        "audienceType": "Adults in Oklahoma seeking Emotional Support Animal evaluations"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://myesatherapist.com/esa-letter-oklahoma/",
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
        "@id": "https://myesatherapist.com/esa-letter-oklahoma/#offer"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ESA Letter Services - Oklahoma",
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
      "@id": "https://myesatherapist.com/esa-letter-oklahoma/#offer",
      "price": "99",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "eligibleRegion": {
        "@id": "https://myesatherapist.com/esa-letter-oklahoma/#place"
      },
      "url": "https://myesatherapist.com/esa-letter-oklahoma/",
      "itemOffered": {
        "@id": "https://myesatherapist.com/esa-letter-oklahoma/#service"
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
        "url": "https://myesatherapist.com/esa-letter-oklahoma/"
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
      "@id": "https://myesatherapist.com/esa-letter-oklahoma/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can My Oklahoma Landlord Request A New ESA Letter Every Time I Renew My Lease?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A landlord may request updated reliable information when permitted by law and reasonably necessary to assess an accommodation request. There is no universal federal rule requiring ESA letters to be renewed every 12 months. Whether an update is appropriate depends on the circumstances and information already available.",
          },
        },
        {
          "@type": "Question",
          "name": "Does My ESA Letter Need To Mention My Specific Diagnosis In Oklahoma?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A housing provider generally does not need your specific diagnosis or detailed medical records when sufficient reliable information establishes your disability-related need for an assistance animal. The information needed depends on the circumstances and applicable law.",
          },
        },
        {
          "@type": "Question",
          "name": "How Much Does An ESA Letter Typically Cost In Oklahoma?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Oklahoma, ESA letter pricing can vary by provider, but legitimate services generally involve a paid consultation with a licensed professional before approval. At My ESA Therapist, the fee is $99, which includes a licensed evaluation and the ESA letter if approved.",
          },
        },
        {
          "@type": "Question",
          "name": "If My ESA Causes Minor Damage, Can My Oklahoma Landlord Revoke The Accommodation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally speaking, minor issues or normal wear and tear do not cancel a granted accommodation. But serious property damage or safety issues may call for a review of the agreement.",
          },
        },
        {
          "@type": "Question",
          "name": "What If My Oklahoma Landlord Says My ESA Is “Too Large” For The Apartment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Size alone is not an automatic ground for denial. The landlord would have to prove that the particular animal is a real safety hazard or would seriously damage the property, not just that it exceeds typical pet limits.",
          },
        },
        {
          "@type": "Question",
          "name": "If I Got My ESA Letter Online, Will Oklahoma Landlords Reject It?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Online evaluations are valid if conducted by a properly licensed Oklahoma clinician who performs a genuine assessment and maintains a legitimate therapeutic relationship. However, letters from ‘registry-only’ websites without clinical evaluation are often rejected.",
          },
        }
      ]
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-oklahoma/#video-1",
      "name": "ESA Letter Oklahoma - Client Testimonial 1",
      "description": "Client testimonial video shared by My ESA Therapist about the Oklahoma online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-oklahoma/#video-2",
      "name": "ESA Letter Oklahoma - Client Testimonial 2",
      "description": "Client testimonial video shared by My ESA Therapist about the Oklahoma online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-oklahoma/#video-3",
      "name": "ESA Letter Oklahoma - Client Testimonial 3",
      "description": "Client testimonial video shared by My ESA Therapist about the Oklahoma online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-oklahoma/#video-4",
      "name": "ESA Letter Oklahoma - Client Testimonial 4",
      "description": "Client testimonial video shared by My ESA Therapist about the Oklahoma online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-oklahoma/#video-5",
      "name": "ESA Letter Oklahoma - Client Testimonial 5",
      "description": "Client testimonial video shared by My ESA Therapist about the Oklahoma online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-oklahoma/#video-6",
      "name": "ESA Letter Oklahoma - Client Testimonial 6",
      "description": "Client testimonial video shared by My ESA Therapist about the Oklahoma online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-oklahoma/#video-7",
      "name": "ESA Letter Oklahoma - Client Testimonial 7",
      "description": "Client testimonial video shared by My ESA Therapist about the Oklahoma online ESA letter evaluation experience.",
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
