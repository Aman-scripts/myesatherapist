export const esaLetterOnlineSchema = {
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
        "https://www.consumeraffairs.com/pets/my-esa-therapist.html",
        "https://www.yelp.com/biz/my-esa-therapist-jacksonville"
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
      "@type": "Person",
      "@id": "https://www.linkedin.com/in/max-phillips-883485a5/#person",
      "name": "Max Phillips",
      "url": "https://www.linkedin.com/in/max-phillips-883485a5/",
      "jobTitle": "MSW, LCSW",
      "image": "https://myesatherapist.com/images/reviewers/max-phillips-image.webp",
      "sameAs": [
        "https://www.linkedin.com/in/max-phillips-883485a5/"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Master of Social Work (MSW)"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Licensed Clinical Social Worker (LCSW)"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/esa-letter-online/#breadcrumb",
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
          "name": "ESA Letter Online",
          "item": "https://myesatherapist.com/esa-letter-online/"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://myesatherapist.com/esa-letter-online/#webpage",
      "url": "https://myesatherapist.com/esa-letter-online/",
      "name": "ESA Letter Online From Licensed Therapist | My ESA Therapist",
      "description": "Get an ESA letter online through a confidential evaluation with a licensed mental health professional. Start your ESA evaluation securely from home with My ESA Therapist.",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website"
      },
      "about": {
        "@id": "https://myesatherapist.com/esa-letter-online/#service"
      },
      "mainEntity": {
        "@id": "https://myesatherapist.com/esa-letter-online/#service"
      },
      "primaryImageOfPage": {
        "@id": "https://myesatherapist.com/esa-letter-online/#primaryimage"
      },
      "image": {
        "@id": "https://myesatherapist.com/esa-letter-online/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/esa-letter-online/#breadcrumb"
      },
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "reviewedBy": {
        "@id": "https://www.linkedin.com/in/max-phillips-883485a5/#person"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "ImageObject",
      "@id": "https://myesatherapist.com/esa-letter-online/#primaryimage",
      "url": "https://myesatherapist.com/images/pages/esa-evaluations-online-image.webp",
      "contentUrl": "https://myesatherapist.com/images/pages/esa-evaluations-online-image.webp",
      "caption": "Online ESA Letter Evaluation"
    },
    {
      "@type": "Service",
      "@id": "https://myesatherapist.com/esa-letter-online/#service",
      "name": "Online ESA Letter Evaluation",
      "description": "A secure, HIPAA-compliant telehealth evaluation with a licensed mental health professional to determine whether an ESA letter is clinically appropriate. ESA letters are issued based solely on the clinician's independent professional judgment; approval is never guaranteed.",
      "url": "https://myesatherapist.com/esa-letter-online/",
      "serviceType": "Online ESA Letter Evaluation (Telehealth)",
      "image": {
        "@id": "https://myesatherapist.com/esa-letter-online/#primaryimage"
      },
      "provider": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
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
        "@id": "https://myesatherapist.com/esa-letter-online/#offer"
      },
      "termsOfService": "https://myesatherapist.com/terms-of-use/"
    },
    {
      "@type": "Offer",
      "@id": "https://myesatherapist.com/esa-letter-online/#offer",
      "price": "149",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "url": "https://myesatherapist.com/esa-letter-online/",
      "itemOffered": {
        "@id": "https://myesatherapist.com/esa-letter-online/#service"
      },
      "seller": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "description": "Includes a clinical evaluation conducted by a state-licensed mental health professional, telehealth platform access, and the ESA letter if clinically approved. No hidden fees; no letter is issued if not clinically appropriate."
    },
    {
      "@type": "HowTo",
      "@id": "https://myesatherapist.com/esa-letter-online/#howto",
      "name": "How Our Online ESA Letter Evaluation Works",
      "description": "A simple three-step process guided by a licensed mental health professional.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Set Up Your Appointment",
          "text": "Create your account and choose a time that works for you to connect with a state-licensed mental health professional."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Speak With Professionals",
          "text": "During your consultation, the clinician reviews your emotional and mental health concerns and discusses whether an emotional support animal may be appropriate."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Clinical Review & Documentation",
          "text": "After your evaluation, the licensed mental health professional determines whether ESA documentation is clinically appropriate. If so, the letter may be provided by email."
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://myesatherapist.com/esa-letter-online/#conditions",
      "name": "Conditions Commonly Evaluated by Clinicians",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Anxiety"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Depression"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "PTSD"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "ADHD"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Panic Disorder"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Bipolar Disorder"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "OCD"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Social Anxiety"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://myesatherapist.com/esa-letter-online/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who issues the emotional support animal letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Emotional support animal (ESA) letters are issued by a state-licensed mental health professional (LMHP), such as a psychologist, psychiatrist, licensed clinical social worker, or therapist, following a clinical evaluation. The clinician must have a therapeutic relationship with you and independently determine that an emotional support animal is necessary to help alleviate symptoms of a mental or emotional disability, in accordance with Fair Housing Act (FHA) guidelines."
          }
        },
        {
          "@type": "Question",
          "name": "Is an ESA letter guaranteed after the evaluation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. An emotional support animal recommendation is issued only if the authorized professional finds it suitable following an independent evaluation. There are no automatic approvals."
          }
        },
        {
          "@type": "Question",
          "name": "How much does an ESA letter cost, and are there any hidden fees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With My ESA Therapist, the cost of an ESA documentation is $149. This fee includes a clinical evaluation conducted by a state-licensed mental health professional, the telehealth platform fee, and the letter if clinically approved. Pricing is clearly displayed before booking, and there are no hidden fees. You are paying for a professional assessment, not a guaranteed letter. If the letter is not clinically appropriate, no document is issued."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to receive an ESA recommendation after the evaluation (if approved)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If the clinician determines that an emotional support animal is appropriate, the ESA document is typically issued shortly after the evaluation, often within 24-48 hours. Timing may vary based on the clinician and state requirements, but approved letters are sent promptly."
          }
        },
        {
          "@type": "Question",
          "name": "Is the ESA approval letter delivered digitally, and can I download or print it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. With My ESA Therapist, when the letter is issued, it is sent directly to your email in digital format. You can easily download, save, and print the document for housing accommodation requests whenever needed."
          }
        },
        {
          "@type": "Question",
          "name": "How can I tell if an ESA letter is legitimate or fake?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A legitimate document is issued only after a clinical evaluation by a licensed mental health professional and typically includes the clinician's name, signature, and license number; confirmation that the professional is authorized to practice in your state; the date of issuance; and clear language supporting an ESA accommodation under the Fair Housing Act. Be cautious of websites that promise instant approval, sell letters without an evaluation, or fail to provide verifiable clinician credentials."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between an ESA and a service animal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Emotional Support Animals (ESAs) provide comfort through companionship but are not trained to perform specific tasks, unlike service animals. Because of this, ESAs do not have the same legal access rights and are generally not allowed in public spaces like restaurants, stores, or businesses, whereas service animals are permitted under disability laws."
          }
        },
        {
          "@type": "Question",
          "name": "What does the professional consider before issuing ESA documentation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A licensed mental health professional evaluates the individual's emotional and mental health to determine whether a qualifying condition is present. They then assess whether an emotional support animal would meaningfully alleviate related symptoms and support the individual's overall treatment plan. ESA documentation is issued solely at the clinician's discretion and is never guaranteed."
          }
        }
      ]
    }
  ]
};
