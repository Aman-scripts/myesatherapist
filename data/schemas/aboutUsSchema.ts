export const aboutUsSchema = {
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
      "description": "A telehealth platform connecting individuals with state-licensed mental health professionals for HIPAA-compliant Emotional Support Animal (ESA) evaluations across all 50 U.S. states.",
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
      "slogan": "Legitimate ESA Letter Evaluations You Can Trust",
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
      "@type": "AboutPage",
      "@id": "https://myesatherapist.com/about-us/#webpage",
      "url": "https://myesatherapist.com/about-us/",
      "name": "About My ESA Therapist | Licensed ESA Evaluations You Can Trust",
      "description": "Learn how My ESA Therapist provides legitimate, HIPAA-compliant ESA evaluations through state-licensed mental health professionals across all 50 states.",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website"
      },
      "about": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "mainEntity": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "primaryImageOfPage": {
        "@id": "https://myesatherapist.com/about-us/#primaryimage"
      },
      "image": {
        "@id": "https://myesatherapist.com/about-us/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/about-us/#breadcrumb"
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
      "@id": "https://myesatherapist.com/about-us/#primaryimage",
      "url": "https://myesatherapist.com/images/about/esa-evaluations-online-image.webp",
      "contentUrl": "https://myesatherapist.com/images/about/esa-evaluations-online-image.webp",
      "caption": "Licensed ESA Evaluation in Progress"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/about-us/#breadcrumb",
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
          "name": "About Us",
          "item": "https://myesatherapist.com/about-us/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://myesatherapist.com/#esa-service",
      "name": "ESA Letter Evaluation",
      "description": "Online Emotional Support Animal evaluations by state-licensed mental health professionals, delivered via telehealth across all 50 U.S. states. Eligibility is determined solely through independent clinical assessment.",
      "serviceType": "Online ESA Letter Evaluation (Telehealth)",
      "provider": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "audience": [
        {
          "@type": "Audience",
          "audienceType": "Renters facing housing restrictions on pets"
        },
        {
          "@type": "Audience",
          "audienceType": "Individuals with anxiety, depression, or PTSD"
        },
        {
          "@type": "Audience",
          "audienceType": "Remote or telehealth users"
        },
        {
          "@type": "Audience",
          "audienceType": "First-time and returning ESA applicants"
        },
        {
          "@type": "Audience",
          "audienceType": "Emotional wellness-focused pet owners"
        }
      ],
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
      "termsOfService": "https://myesatherapist.com/terms-of-use/"
    },
    {
      "@type": "MedicalOrganization",
      "@id": "https://myesatherapist.com/#medicalprovider",
      "name": "My ESA Therapist",
      "url": "https://myesatherapist.com/",
      "medicalSpecialty": "Psychiatric",
      "isAcceptingNewPatients": true,
      "availableService": {
        "@id": "https://myesatherapist.com/#esa-service"
      },
      "audience": {
        "@type": "MedicalAudience",
        "audienceType": "Patient",
        "requiredMinAge": 18
      }
    },
    {
      "@type": "HowTo",
      "@id": "https://myesatherapist.com/about-us/#howto",
      "name": "How ESA Letter Evaluation Works",
      "description": "A simple 3-step process to complete your emotional support animal letter evaluation.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Set Up Your Appointment",
          "text": "Create your account and choose a time that works for you to connect with a licensed mental health professional.",
          "image": "https://myesatherapist.com/images/about/set-up-your-appointment-image.webp"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Speak With Professionals",
          "text": "During the consultation, the professional reviews your emotional and mental health concerns and assesses whether an emotional support animal is appropriate.",
          "image": "https://myesatherapist.com/images/about/speak-with-lmhp-image.webp"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Clinical Determination",
          "text": "Following the professional evaluation, if deemed appropriate by the licensed professional, emotional support animal documentation is sent directly to your email. If not, no documentation is issued.",
          "image": "https://myesatherapist.com/images/about/receive-esa-letter-image.webp"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://myesatherapist.com/about-us/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is My ESA Therapist's mission?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "My ESA Therapist's mission is to make the ESA evaluation process clear, ethical, and accessible. Individuals are connected with licensed mental health professionals through a secure ESA evaluation process, with all outcomes determined solely through an independent clinical assessment by the provider."
          }
        },
        {
          "@type": "Question",
          "name": "Who conducts the ESA evaluations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All evaluations are conducted exclusively by state-licensed mental health professionals. Eligibility is determined solely through professional clinical review, with clinical conclusions made independently by the provider without platform influence."
          }
        },
        {
          "@type": "Question",
          "name": "Does My ESA Therapist provide nationwide coverage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The platform offers ESA evaluations in all 50 states, providing accessible telehealth services while ensuring evaluations meet local licensing requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Who does My ESA Therapist help?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The platform serves renters facing housing restrictions on pets, individuals with anxiety, depression, or PTSD, remote or telehealth users, first-time and returning ESA applicants, and emotional wellness-focused pet owners seeking a professional assessment of their needs."
          }
        },
        {
          "@type": "Question",
          "name": "How is My ESA Therapist different from fake ESA sites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "My ESA Therapist uses state-licensed mental health professionals, bases outcomes on professional assessment, conducts audio/video consultations on a secure platform, follows federal housing guidelines, and is confidential and HIPAA-compliant. This differs from automated approval-mill sites that often skip evaluation entirely, may lack privacy protections, and can be non-compliant with applicable guidelines."
          }
        },
        {
          "@type": "Question",
          "name": "What does the ESA evaluation process involve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The clinical process includes a comprehensive mental health screening by licensed professionals, a review of symptoms and relevant mental health history, an individualized assessment based on clinical judgment, and documentation prepared in line with applicable legal guidelines."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if a refund is needed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If a licensed mental health professional determines an ESA letter is not clinically appropriate, a refund may be provided according to the platform's refund policy."
          }
        },
        {
          "@type": "Question",
          "name": "Are there hidden fees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Pricing is upfront and transparent, with no surprise charges or recurring fees. One payment covers the complete evaluation, and all payments are processed securely through encrypted systems."
          }
        }
      ]
    }
  ]
};
