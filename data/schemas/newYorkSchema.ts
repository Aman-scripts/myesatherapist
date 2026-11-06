export const newYorkSchema = {
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
      "@id": "https://myesatherapist.com/esa-letter-new-york/#place",
      "name": "New York",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "NY",
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
      "@id": "https://myesatherapist.com/esa-letter-new-york/#webpage",
      "url": "https://myesatherapist.com/esa-letter-new-york/",
      "name": "New York ESA Letter Online | My ESA Therapist",
      "description": "My ESA Therapist offers ESA letter evaluations in New York by licensed therapists. Secure online assessments and HUD-compliant ESA letters for housing.",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website"
      },
      "about": {
        "@id": "https://myesatherapist.com/esa-letter-new-york/#service"
      },
      "mainEntity": {
        "@id": "https://myesatherapist.com/esa-letter-new-york/#service"
      },
      "primaryImageOfPage": {
        "@id": "https://myesatherapist.com/esa-letter-new-york/#primaryimage"
      },
      "image": {
        "@id": "https://myesatherapist.com/esa-letter-new-york/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/esa-letter-new-york/#breadcrumb"
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
      "@id": "https://myesatherapist.com/esa-letter-new-york/#primaryimage",
      "url": "https://myesatherapist.com/images/states/new-york-esa-letter-sample.webp",
      "contentUrl": "https://myesatherapist.com/images/states/new-york-esa-letter-sample.webp",
      "caption": "ESA Letter Online Evaluations for New York Residents"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/esa-letter-new-york/#breadcrumb",
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
          "name": "ESA Letter New York",
          "item": "https://myesatherapist.com/esa-letter-new-york/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://myesatherapist.com/esa-letter-new-york/#service",
      "name": "New York ESA Letter Evaluation",
      "description": "Online Emotional Support Animal evaluations by licensed mental health professionals for New York residents, delivered entirely via telehealth. ESA letters are issued only when clinically appropriate after an independent mental health assessment aligned with Fair Housing Act (FHA) guidelines.",
      "url": "https://myesatherapist.com/esa-letter-new-york/",
      "serviceType": "Online ESA Letter Evaluation (Telehealth)",
      "image": {
        "@id": "https://myesatherapist.com/esa-letter-new-york/#primaryimage"
      },
      "provider": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "areaServed": {
        "@id": "https://myesatherapist.com/esa-letter-new-york/#place"
      },
      "audience": {
        "@type": "Audience",
        "@id": "https://myesatherapist.com/esa-letter-new-york/#audience",
        "audienceType": "Adults in New York seeking Emotional Support Animal evaluations"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://myesatherapist.com/esa-letter-new-york/",
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
        "@id": "https://myesatherapist.com/esa-letter-new-york/#offer"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ESA Letter Services - New York",
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
      "@id": "https://myesatherapist.com/esa-letter-new-york/#offer",
      "price": "99",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "eligibleRegion": {
        "@id": "https://myesatherapist.com/esa-letter-new-york/#place"
      },
      "url": "https://myesatherapist.com/esa-letter-new-york/",
      "itemOffered": {
        "@id": "https://myesatherapist.com/esa-letter-new-york/#service"
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
        "url": "https://myesatherapist.com/esa-letter-new-york/"
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
      "@id": "https://myesatherapist.com/esa-letter-new-york/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How Long Does an ESA Evaluation Letter Remain Valid in New York?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An ESA evaluation letter doesn’t expire automatically, but most housing providers prefer documentation based on a recent evaluation, typically within the past 12 months. Regularly updating your ESA evaluation helps ensure that your documentation reflects your current mental and emotional health needs.",
          },
        },
        {
          "@type": "Question",
          "name": "What Is The Average Price Of An ESA Letter In New York?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In New York, ESA letter costs typically align with national pricing trends, where licensed evaluations and documentation are commonly offered within a moderate price range, depending on the provider. At My ESA Therapist, the fee is $99, which includes a licensed professional evaluation and the ESA letter if approved.",
          },
        },
        {
          "@type": "Question",
          "name": "Is ESA documentation valid across all of New York?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. ESA documentation may be used to support housing accommodation requests across New York when the applicable federal, state, and local requirements are met. Housing providers may review reliable documentation supporting the disability-related need for an assistance animal when that need is not apparent.",
          },
        },
        {
          "@type": "Question",
          "name": "Can landlords in New York verify the provider who conducted the ESA evaluation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Housing providers may check the credentials and license of the mental health professional who performed your ESA evaluation. They cannot request medical records or details of your specific condition, only verification of the evaluation and licensing.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I use an out-of-state licensed professional for my ESA evaluation in NY?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends. Licensure requirements vary based on where the professional and patient are located and the applicable telehealth rules. For evaluations conducted for individuals located in New York, the professional should be authorized to practice in New York.",
          },
        },
        {
          "@type": "Question",
          "name": "Does New York allow ESAs in college dorms or university housing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Students may request an ESA accommodation through their college or university's disability accommodation process. The institution will review the request under applicable disability and housing requirements, which may include documentation and reasonable restrictions.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I have more than one ESA in NY?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A licensed professional may determine during the evaluation that multiple animals provide distinct emotional support benefits. If so, each animal’s role should be clearly outlined in the evaluation-based documentation to ensure full recognition by housing providers.",
          },
        },
        {
          "@type": "Question",
          "name": "Can A New York Co-Op Board Deny My ESA Accommodation Request?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A co-op board generally must consider reasonable accommodation requests under fair housing laws. However, a request may be denied if the ESA poses a direct threat, causes substantial property damage, or if the housing is not covered by applicable housing laws.",
          },
        },
        {
          "@type": "Question",
          "name": "Does My ESA Letter Protect Me In NYC Rent-Stabilized Or Rent-Controlled Apartments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if your housing is covered under Fair Housing Act or applicable state and local laws, a valid ESA letter may support your request for reasonable accommodation regardless of whether the apartment is rent-stabilized or rent-controlled.",
          },
        },
        {
          "@type": "Question",
          "name": "What Happens If My New York Landlord Ignores Or Delays My ESA Accommodation Request?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Landlords are expected to respond to accommodation requests within a reasonable timeframe. Unnecessary delays or failure to engage in the accommodation process could potentially be considered a violation of fair housing requirements.",
          },
        },
        {
          "@type": "Question",
          "name": "Can My HOA (Homeowners Association) In New York Deny My ESA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HOAs and condominium associations could be required to provide reasonable accommodations for emotional support animals. They generally cannot enforce pet restrictions against a qualifying ESA unless a valid legal exception applies. It is always advised to check beforehand.",
          },
        },
        {
          "@type": "Question",
          "name": "Does My ESA Need To Be Vaccinated Or Licensed By The City In New York?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. While ESA status does not create special exemptions from animal health and safety laws, dogs must generally comply with applicable local licensing and vaccination requirements, including rabies vaccination rules.",
          },
        },
        {
          "@type": "Question",
          "name": "Who Is Responsible If My ESA Causes Damage To The Rental Property?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ESA owners remain responsible for any damage their animal causes. While landlords cannot typically charge pet fees for an approved ESA, they may seek reimbursement for actual property damage.",
          },
        },
        {
          "@type": "Question",
          "name": "Can The Same ESA Letter Be Used For Both Housing And College Dorms In New York?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In many cases, yes. Colleges often review ESA requests through their disability accommodation process, and a valid ESA letter may support both housing and dormitory accommodation requests, subject to the institution's requirements.",
          },
        },
        {
          "@type": "Question",
          "name": "What Specific Information Should A Valid New York ESA Letter Include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ESA documentation should identify the licensed professional providing the documentation and explain the professional's recommendation regarding the individual's need for an assistance animal. The specific information included may vary depending on the applicable housing requirements and circumstances.",
          },
        },
        {
          "@type": "Question",
          "name": "Does New York State Have Any Additional ESA Protections Beyond The Federal Fair Housing Act?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. New York's human rights laws may provide additional housing-related protections against disability discrimination, which can complement federal fair housing protections in certain situations.",
          },
        },
        {
          "@type": "Question",
          "name": "What Are The Penalties For A New York Landlord Who Illegally Denies An ESA Accommodation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A landlord who unlawfully denies a valid accommodation request may face fair housing complaints, investigations, monetary damages, civil penalties, and orders requiring compliance with housing laws.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I Get An ESA Letter The Same Day In New York?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Possibly. Some licensed mental health professionals offer same-day evaluations when clinically appropriate. However, the legitimacy of the letter depends on the professional assessment, not how quickly it is issued.",
          },
        }
      ]
    },
    {
      "@type": "VideoObject",
      "@id": "https://myesatherapist.com/esa-letter-new-york/#video-1",
      "name": "ESA Letter New York - Client Testimonial 1",
      "description": "Client testimonial video shared by My ESA Therapist about the New York online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-new-york/#video-2",
      "name": "ESA Letter New York - Client Testimonial 2",
      "description": "Client testimonial video shared by My ESA Therapist about the New York online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-new-york/#video-3",
      "name": "ESA Letter New York - Client Testimonial 3",
      "description": "Client testimonial video shared by My ESA Therapist about the New York online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-new-york/#video-4",
      "name": "ESA Letter New York - Client Testimonial 4",
      "description": "Client testimonial video shared by My ESA Therapist about the New York online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-new-york/#video-5",
      "name": "ESA Letter New York - Client Testimonial 5",
      "description": "Client testimonial video shared by My ESA Therapist about the New York online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-new-york/#video-6",
      "name": "ESA Letter New York - Client Testimonial 6",
      "description": "Client testimonial video shared by My ESA Therapist about the New York online ESA letter evaluation experience.",
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
      "@id": "https://myesatherapist.com/esa-letter-new-york/#video-7",
      "name": "ESA Letter New York - Client Testimonial 7",
      "description": "Client testimonial video shared by My ESA Therapist about the New York online ESA letter evaluation experience.",
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
