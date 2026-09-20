export const esaLetterForHousingSchemas = [
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
        "@id": "https://myesatherapist.com/esa-letter-for-housing/#breadcrumb",
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
            "name": "ESA Letter for Housing",
            "item": "https://myesatherapist.com/esa-letter-for-housing/"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://myesatherapist.com/esa-letter-for-housing/#webpage",
        "url": "https://myesatherapist.com/esa-letter-for-housing/",
        "name": "ESA Letter for Housing Online | Licensed & FHA-Compliant - My ESA Therapist",
        "description": "Facing 'no-pet' housing rules? Get an FHA-compliant ESA letter for housing online from a licensed therapist. Secure, confidential and pay only if approved.",
        "isPartOf": {
          "@id": "https://myesatherapist.com/#website"
        },
        "about": {
          "@id": "https://myesatherapist.com/esa-letter-for-housing/#service"
        },
        "mainEntity": {
          "@id": "https://myesatherapist.com/esa-letter-for-housing/#service"
        },
        "primaryImageOfPage": {
          "@id": "https://myesatherapist.com/esa-letter-for-housing/#primaryimage"
        },
        "image": {
          "@id": "https://myesatherapist.com/esa-letter-for-housing/#primaryimage"
        },
        "breadcrumb": {
          "@id": "https://myesatherapist.com/esa-letter-for-housing/#breadcrumb"
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
        "@id": "https://myesatherapist.com/esa-letter-for-housing/#primaryimage",
        "url": "https://myesatherapist.com/images/pages/emotional-support-animal-letter-image.webp",
        "contentUrl": "https://myesatherapist.com/images/pages/emotional-support-animal-letter-image.webp",
        "caption": "Emotional Support Animal Letter for Housing"
      },
      {
        "@type": "Service",
        "@id": "https://myesatherapist.com/esa-letter-for-housing/#service",
        "name": "ESA Letter for Housing Evaluation",
        "description": "An online telehealth evaluation with a licensed mental health professional to determine whether ESA documentation may be appropriate to support a housing-related reasonable accommodation request under the Fair Housing Act.",
        "url": "https://myesatherapist.com/esa-letter-for-housing/",
        "serviceType": "Online ESA Letter for Housing Evaluation (Telehealth)",
        "image": {
          "@id": "https://myesatherapist.com/esa-letter-for-housing/#primaryimage"
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
          "@id": "https://myesatherapist.com/esa-letter-for-housing/#offer"
        },
        "termsOfService": "https://myesatherapist.com/terms-of-use/"
      },
      {
        "@type": "Offer",
        "@id": "https://myesatherapist.com/esa-letter-for-housing/#offer",
        "price": "149",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "url": "https://myesatherapist.com/esa-letter-for-housing/",
        "itemOffered": {
          "@id": "https://myesatherapist.com/esa-letter-for-housing/#service"
        },
        "seller": {
          "@id": "https://myesatherapist.com/#organization"
        },
        "description": "One-time fee, no hidden costs. Payment is authorized at booking but only charged after the evaluation is completed. An ID card add-on is available for $199 total."
      },
      {
        "@type": "Quotation",
        "@id": "https://myesatherapist.com/esa-letter-for-housing/#quote-hud",
        "text": "Housing providers cannot refuse to make reasonable accommodations in rules, policies, practices, or services when such accommodations may be necessary to afford a person with a disability the equal opportunity to use and enjoy a dwelling.",
        "creator": {
          "@type": "GovernmentOrganization",
          "name": "U.S. Department of Housing and Urban Development"
        },
        "isPartOf": {
          "@id": "https://myesatherapist.com/esa-letter-for-housing/#webpage"
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://myesatherapist.com/esa-letter-for-housing/#tenant-rights",
        "name": "Your Rights",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Live with your ESA in no-pet buildings"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "No pet deposits or monthly pet rent"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "No breed, size, or weight restrictions"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Protected from housing discrimination"
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://myesatherapist.com/esa-letter-for-housing/#landlord-obligations",
        "name": "Your Landlord's Obligatory Rights",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Must allow housing regardless of pet policies"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Must not require special training, certification, or licensing for your ESA"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Must not deny housing because your ESA is an emotional support animal"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Must respect privacy and cannot demand detailed medical records beyond a valid ESA letter"
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://myesatherapist.com/esa-letter-for-housing/#howto",
        "name": "How an Emotional Support Animal (ESA) Evaluation Works",
        "description": "A simple 3-step process to complete your housing ESA letter evaluation.",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Set Up Your Appointment",
            "text": "Create your account and choose a time that works for you to connect with a licensed mental health professional."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Speak With Professionals",
            "text": "During the consultation, the professional reviews your emotional and mental health concerns and assesses whether an emotional support animal is appropriate."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Clinical Determination",
            "text": "Following the professional evaluation, if deemed appropriate by the licensed professional, emotional support animal documentation is sent directly to your email. If not, no documentation is issued."
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://myesatherapist.com/esa-letter-for-housing/#conditions",
        "name": "Conditions Commonly Considered During an ESA Evaluation",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Anxiety Disorders"
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
            "name": "Bipolar Disorder"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "OCD"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Panic Disorders"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "ADHD"
          },
          {
            "@type": "ListItem",
            "position": 8,
            "name": "Social Anxiety"
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://myesatherapist.com/esa-letter-for-housing/#issuing-professionals",
        "name": "Who Can Issue an ESA Letter for Housing?",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Licensed Psychiatrist (MD or DO)",
            "description": "Medical doctors trained in mental health who can evaluate emotional or psychiatric conditions."
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Licensed Psychologist (PhD or PsyD)",
            "description": "Doctoral-level professionals who assess mental and emotional health through clinical evaluation."
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Licensed Therapist (LMFT or LCSW)",
            "description": "Master's-level clinicians who provide counseling and assess emotional or behavioral concerns."
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Licensed Professional Counselor (LPC / LCPC)",
            "description": "State-licensed mental health counselors trained to evaluate emotional challenges."
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Licensed Clinical Social Worker (LCSW)",
            "description": "Professionals with advanced training in mental health assessment and counseling."
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Psychiatric Mental Health Nurse (PMHN / PMHNP)",
            "description": "Advanced practice nurses specializing in mental health who can evaluate psychiatric conditions."
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://myesatherapist.com/esa-letter-for-housing/#denial-reasons",
        "name": "When Can a Landlord Refuse Your ESA?",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Invalid or Unverifiable ESA Documentation",
            "description": "The letter is fraudulent, outdated, or issued by an unlicensed provider."
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Health or Safety Conflicts",
            "description": "Another resident has a documented medical condition that could be significantly affected."
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Behavior or Safety Concerns",
            "description": "The ESA displays aggressive behavior, causes repeated disturbances, or poses a genuine safety risk."
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Lack of Reasonable Accommodation",
            "description": "Accommodating the ESA would impose an undue burden due to space, structural, or operational limitations."
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Property Damage Responsibility",
            "description": "Pet deposits cannot be charged for ESAs, but tenants remain responsible for actual damage caused by their animal."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://myesatherapist.com/esa-letter-for-housing/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What should I do if my landlord asks for additional documents?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A valid ESA letter from a licensed mental health professional is generally sufficient. A landlord may verify the professional's license or contact information, but they cannot request medical records, pet deposits, or proof of specialized training."
            }
          },
          {
            "@type": "Question",
            "name": "Which housing arrangements fall outside the protections of the Fair Housing Act?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Some types of housing are not subject to all Fair Housing Act requirements. These may include certain small, owner-occupied properties, select privately rented single-family homes, and housing operated by religious organizations or private clubs for their members. Limited exemptions may also apply to qualifying age-restricted housing that meets specific legal criteria."
            }
          },
          {
            "@type": "Question",
            "name": "Can a landlord say no to an ESA because it's too difficult to accommodate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In limited situations, yes. A landlord may deny an ESA request if accommodating the animal would create an undue burden, such as significant operational difficulty or expense. However, inconvenience alone is not enough -- there must be a legitimate, well-supported reason tied to the property or its operation."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get an ESA letter for housing online at no cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Legitimate ESA letters require an evaluation by a licensed mental health professional, which involves time and professional oversight. Services offering free or instant letters are often not valid for housing purposes."
            }
          },
          {
            "@type": "Question",
            "name": "How long should a landlord take to respond to an ESA request?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Housing providers are expected to respond to reasonable accommodation requests within a reasonable timeframe, often around 10-14 days. Delays without explanation may warrant a written follow-up."
            }
          },
          {
            "@type": "Question",
            "name": "Should I submit my ESA letter before or after moving?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It's generally best to submit your ESA letter before moving in or as soon as the need arises. Providing documentation early helps avoid delays or misunderstandings, but housing providers must still consider reasonable accommodation requests even after tenancy has begun."
            }
          },
          {
            "@type": "Question",
            "name": "Can my landlord charge cleaning or wear-and-tear fees upfront?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Upfront pet or cleaning fees are not allowed for ESAs. However, tenants remain responsible for actual damage beyond normal wear."
            }
          },
          {
            "@type": "Question",
            "name": "Can my landlord deny my ESA because the building is furnished or newly renovated?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Concern about potential damage does not justify denial. Tenants are responsible for any actual damage caused, but that risk cannot be assumed in advance."
            }
          }
        ]
      }
    ]
  }
];
