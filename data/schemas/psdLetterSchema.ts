export const psdLetterSchema = {
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
        "https://www.linkedin.com/company/myesatherapist/",
        "https://www.trustpilot.com/review/myesatherapist.com",
        "https://www.consumeraffairs.com/pets/my-esa-therapist.html"
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
      ],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
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
      "@id": "https://myesatherapist.com/psd-letter/#webpage",
      "url": "https://myesatherapist.com/psd-letter/",
      "name": "Psychiatric Service Dog (PSD) Letter Online | My ESA Therapist",
      "description": "Need a Psychiatric Service Dog letter? My ESA Therapist connects you with licensed mental health professionals for confidential evaluations and legitimate PSD letters.",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website"
      },
      "about": {
        "@id": "https://myesatherapist.com/psd-letter/#service"
      },
      "mainEntity": {
        "@id": "https://myesatherapist.com/psd-letter/#service"
      },
      "primaryImageOfPage": {
        "@id": "https://myesatherapist.com/psd-letter/#primaryimage"
      },
      "image": {
        "@id": "https://myesatherapist.com/psd-letter/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/psd-letter/#breadcrumb"
      },
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
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
      "@id": "https://myesatherapist.com/psd-letter/#primaryimage",
      "url": "https://myesatherapist.com/images/psd/psd-letter-consultation-hero.webp",
      "contentUrl": "https://myesatherapist.com/images/psd/psd-letter-consultation-hero.webp",
      "caption": "Psychiatric Service Dog Letter Consultation"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/psd-letter/#breadcrumb",
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
          "name": "PSD Letter",
          "item": "https://myesatherapist.com/psd-letter/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://myesatherapist.com/psd-letter/#service",
      "name": "Psychiatric Service Dog (PSD) Letter Evaluation",
      "description": "Online consultations with state-licensed mental health professionals to determine whether a Psychiatric Service Dog (PSD) letter is clinically appropriate. Delivered entirely via telehealth; letters are issued only after an independent evaluation confirming an ADA-eligible mental health condition.",
      "url": "https://myesatherapist.com/psd-letter/",
      "serviceType": "Online Psychiatric Service Dog Letter Evaluation (Telehealth)",
      "image": {
        "@id": "https://myesatherapist.com/psd-letter/#primaryimage"
      },
      "provider": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "audience": {
        "@type": "Audience",
        "@id": "https://myesatherapist.com/psd-letter/#audience",
        "audienceType": "Adults in the United States seeking Psychiatric Service Dog letter evaluations"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://myesatherapist.com/psd-letter/",
        "servicePhone": "+1-888-412-4041",
        "availableLanguage": [
          "English"
        ],
        "processingTime": "P3D"
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
        "@id": "https://myesatherapist.com/psd-letter/#offer"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "PSD Letter Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Online PSD Letter Evaluation"
            }
          }
        ]
      },
      "termsOfService": "https://myesatherapist.com/terms-of-use/"
    },
    {
      "@type": "Offer",
      "@id": "https://myesatherapist.com/psd-letter/#offer",
      "price": "149",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "url": "https://myesatherapist.com/psd-letter/",
      "itemOffered": {
        "@id": "https://myesatherapist.com/psd-letter/#service"
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
        "@id": "https://myesatherapist.com/psd-letter/#service"
      },
      "audience": {
        "@type": "MedicalAudience",
        "audienceType": "Patient",
        "requiredMinAge": 18
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://myesatherapist.com/psd-letter/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a Psychiatric Service Dog (PSD) Letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A PSD letter is an official document from a licensed mental health professional confirming you have a qualifying mental health condition under the ADA. It serves as backup documentation for your psychiatric service dog and includes the provider's license details, signature, and date of issue."
          }
        },
        {
          "@type": "Question",
          "name": "Is a PSD letter required by law?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under the ADA, a PSD letter is not legally required for public access. However, it is highly recommended as backup documentation and is often requested by airlines, landlords, and housing providers to verify your legitimate need for a service dog."
          }
        },
        {
          "@type": "Question",
          "name": "What conditions qualify for a PSD letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common qualifying conditions include anxiety disorders, depression, PTSD, panic disorder, and other mental health conditions recognized under the ADA. A licensed mental health professional will make the determination during your consultation based on your individual circumstances."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to get my PSD letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you qualify, you may receive your PSD letter within 24-72 hours after your consultation, delivered via secure email. Timelines may vary based on therapist availability and the complexity of your case."
          }
        },
        {
          "@type": "Question",
          "name": "What's included in the PSD letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your letter will include a statement confirming you have an ADA-eligible mental health condition, the date of issue, the provider's signature, their license number, contact information, and clinic letterhead for easy verification."
          }
        },
        {
          "@type": "Question",
          "name": "Can my PSD letter help with housing and air travel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your letter may support your needs for housing under the Fair Housing Act (subject to landlord approval) and may assist with air travel documentation requirements (subject to current airline policies). Always verify specific requirements with your housing provider or airline."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to have a service dog already?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, you do not need to have a service dog already. The PSD letter establishes that you have a qualifying disability, which is the first step toward obtaining and using a psychiatric service dog. Training and certification of the dog itself is a separate process."
          }
        },
        {
          "@type": "Question",
          "name": "Is my consultation confidential?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all consultations are 100% HIPAA-compliant and confidential. Your information is protected under federal privacy laws and is only shared with your assigned licensed mental health professional."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://myesatherapist.com/psd-letter/#howto",
      "name": "How to Get a Psychiatric Service Dog Letter",
      "description": "A simple, secure, three-step process from consultation to letter delivery, entirely online.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Schedule Consultation",
          "text": "Complete our simple online form to request a consultation with a licensed mental health professional in your state."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Meet Your Therapist",
          "text": "Connect with a licensed professional via secure video or phone. They'll assess whether a PSD letter may be appropriate for you."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Letter if Qualified",
          "text": "If you qualify, you may receive your PSD letter within 24-72 hours via email, signed by your licensed professional."
        }
      ]
    }
  ]
};
