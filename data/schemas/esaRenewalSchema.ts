export const esaRenewalSchemas = [
  {
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
        "@id": "https://myesatherapist.com/esa-letter-renewal/#breadcrumb",
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
            "name": "ESA Letter Renewal",
            "item": "https://myesatherapist.com/esa-letter-renewal/"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://myesatherapist.com/esa-letter-renewal/#webpage",
        "url": "https://myesatherapist.com/esa-letter-renewal/",
        "name": "ESA Letter Renewal Online by Licensed Therapists | My ESA Therapist",
        "description": "Need to renew your ESA letter? My ESA Therapist offers simple online renewals with licensed therapists and quick turnaround.",
        "isPartOf": {
          "@id": "https://myesatherapist.com/#website"
        },
        "about": {
          "@id": "https://myesatherapist.com/esa-letter-renewal/#renewal-service"
        },
        "mainEntity": {
          "@id": "https://myesatherapist.com/esa-letter-renewal/#renewal-service"
        },
        "primaryImageOfPage": {
          "@id": "https://myesatherapist.com/esa-letter-renewal/#primaryimage"
        },
        "image": {
          "@id": "https://myesatherapist.com/esa-letter-renewal/#primaryimage"
        },
        "breadcrumb": {
          "@id": "https://myesatherapist.com/esa-letter-renewal/#breadcrumb"
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
        "@id": "https://myesatherapist.com/esa-letter-renewal/#primaryimage",
        "url": "https://myesatherapist.com/images/pages/lady-with-her-emotional-support-dog-image.webp",
        "contentUrl": "https://myesatherapist.com/images/pages/lady-with-her-emotional-support-dog-image.webp",
        "caption": "ESA Letter Renewal Evaluation"
      },
      {
        "@type": "Service",
        "@id": "https://myesatherapist.com/esa-letter-renewal/#renewal-service",
        "name": "ESA Letter Renewal Evaluation",
        "description": "An online telehealth evaluation with a state-licensed mental health professional to review whether updated ESA documentation is clinically appropriate for individuals with an existing ESA letter that is expiring or no longer current.",
        "url": "https://myesatherapist.com/esa-letter-renewal/",
        "serviceType": "Online ESA Letter Renewal Evaluation (Telehealth)",
        "image": {
          "@id": "https://myesatherapist.com/esa-letter-renewal/#primaryimage"
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
        "offers": [
          {
            "@id": "https://myesatherapist.com/esa-letter-renewal/#offer-renewal"
          },
          {
            "@id": "https://myesatherapist.com/esa-letter-renewal/#offer-new"
          }
        ],
        "termsOfService": "https://myesatherapist.com/terms-of-use/"
      },
      {
        "@type": "Offer",
        "@id": "https://myesatherapist.com/esa-letter-renewal/#offer-renewal",
        "name": "ESA Letter Renewal",
        "description": "For individuals with an existing ESA letter. Payment provides access to a professional evaluation only. We authorize your payment first, but only charge it after your evaluation is completed and the licensed mental health professional determines whether updated documentation is appropriate. Approval is not guaranteed.",
        "price": "129",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "url": "https://myesatherapist.com/esa-letter-renewal/",
        "itemOffered": {
          "@id": "https://myesatherapist.com/esa-letter-renewal/#renewal-service"
        },
        "seller": {
          "@id": "https://myesatherapist.com/#organization"
        }
      },
      {
        "@type": "Offer",
        "@id": "https://myesatherapist.com/esa-letter-renewal/#offer-new",
        "name": "New ESA Letter",
        "description": "For first-time applicants. Payment provides access to a professional evaluation only. We authorize your payment first, but only charge it after your evaluation is completed and the licensed mental health professional determines whether updated documentation is appropriate. Approval is not guaranteed.",
        "price": "149",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "url": "https://myesatherapist.com/esa-letter-renewal/",
        "itemOffered": {
          "@id": "https://myesatherapist.com/esa-letter-online/#service"
        },
        "seller": {
          "@id": "https://myesatherapist.com/#organization"
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://myesatherapist.com/esa-letter-renewal/#renewal-features",
        "name": "What's Included: ESA Letter Renewal",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Evaluation conducted by a state-licensed mental health professional"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Scheduled phone or secure video session"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Review of your current emotional support-related needs"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Updated ESA documentation may be issued if determined appropriate by the provider"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Intended for housing accommodation requests"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Documentation is typically provided within 24-48 hours following the evaluation"
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://myesatherapist.com/esa-letter-renewal/#howto",
        "name": "How the ESA Letter Renewal Process Works",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Set Up Your Appointment",
            "text": "Create an account and choose an available appointment time to connect with a state-licensed mental health professional."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Complete Your Evaluation",
            "text": "During the evaluation, the provider discusses how your emotional support animal has been supporting you and whether continued support may still be needed."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Provider Review and Outcome",
            "text": "After the evaluation, the licensed professional independently determines whether renewing the documentation may be appropriate. If issued, the updated letter is delivered electronically."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://myesatherapist.com/esa-letter-renewal/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How recent does my ESA letter need to be for housing purposes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Many housing providers prefer a current emotional support animal letter that reflects your present situation. While federal laws do not set an official expiration date, documentation is often expected to be no older than one year, based on housing provider review practices."
            }
          },
          {
            "@type": "Question",
            "name": "How long does the ESA letter renewal process take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The renewal process is completed online and typically takes 24-48 hours after the evaluation, depending on provider availability and review time. Timing may vary based on individual circumstances and scheduling."
            }
          },
          {
            "@type": "Question",
            "name": "Will my evaluation be with the same provider every time or someone new?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Your ESA renewal evaluation is completed by a state-licensed mental health professional authorized in your state. The provider may differ from previous evaluations, but each review follows the same ethical and professional standards."
            }
          },
          {
            "@type": "Question",
            "name": "What kind of questions will the provider ask during the renewal evaluation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "During a renewal evaluation, the provider typically asks about your current emotional well-being, daily challenges, and how your emotional support animal has been helping over time."
            }
          },
          {
            "@type": "Question",
            "name": "Is renewing an ESA letter different from getting a new ESA letter?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. An ESA letter renewal focuses on reviewing your current circumstances and ongoing support needs, while a new ESA evaluation involves an initial review. Renewals are intended for individuals who previously had valid ESA documentation."
            }
          },
          {
            "@type": "Question",
            "name": "What if my situation hasn't changed much, do I still need a renewal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Even if your circumstances feel similar, housing providers may request updated ESA documentation. A renewal allows a licensed professional to confirm whether ongoing emotional support may still be appropriate based on your current situation."
            }
          },
          {
            "@type": "Question",
            "name": "Will the letter include today's date or the evaluation date?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If approved, the emotional support animal letter is issued using the evaluation date, showing that the documentation reflects a recent professional review."
            }
          },
          {
            "@type": "Question",
            "name": "Will my landlord accept the renewed documentation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Landlord acceptance is not guaranteed. However, a renewed ESA letter issued by a state-licensed professional can help support a housing accommodation request where permitted under fair housing guidelines."
            }
          }
        ]
      }
    ]
  }
];
