export const esaLawsSchema = {
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
      "@id": "https://myesatherapist.com/author/kiera-conrad/#person",
      "name": "Kiera Conrad",
      "url": "https://myesatherapist.com/author/kiera-conrad/",
      "jobTitle": "Content Lead & Research Contributor",
      "description": "Writer, editor, and educator focused on emotional support animal evaluations, mental health awareness, and accessibility-focused education. Not a licensed mental health, medical, or legal professional.",
      "image": "https://myesatherapist.com/images/authors/kiera-conrad-image.webp",
      "sameAs": [
        "https://www.linkedin.com/in/kiera-conrad/"
      ],
      "affiliation": {
        "@id": "https://myesatherapist.com/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/esa-laws/#breadcrumb",
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
          "name": "ESA Laws",
          "item": "https://myesatherapist.com/esa-laws/"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://myesatherapist.com/esa-laws/#webpage",
      "url": "https://myesatherapist.com/esa-laws/",
      "name": "ESA Laws 2026: Federal & State Rules | My ESA Therapist",
      "description": "Complete guide to ESA laws in the U.S. Covers housing rights, landlord rules, ESA letters, state regulations, and what federal law does and doesn't allow.",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website"
      },
      "author": {
        "@id": "https://myesatherapist.com/author/kiera-conrad/#person"
      },
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/esa-laws/#breadcrumb"
      },
      "inLanguage": "en-US",
      "image": "https://myesatherapist.com/images/pages/esa-laws-federal-state-guide.webp",
      "mainEntity": {
        "@id": "https://myesatherapist.com/esa-laws/#faq"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://myesatherapist.com/esa-laws/#federal-laws",
      "name": "Federal Laws Governing Emotional Support Animals",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Fair Housing Act (FHA)",
          "description": "Allows individuals with disabilities to request an ESA as a reasonable accommodation, even in housing with pet restrictions. Housing providers cannot charge pet fees or deposits for ESAs."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Air Carrier Access Act (ACAA)",
          "description": "Previously required airlines to allow ESAs to travel with passengers who have disabilities. As of 2021, ESAs are no longer protected under the ACAA and are treated as pets on flights."
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://myesatherapist.com/esa-laws/#state-laws",
      "name": "ESA Laws by State",
      "description": "State-specific ESA laws and requirements in addition to federal Fair Housing Act protections.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Alabama ESA Laws",
          "url": "https://myesatherapist.com/esa-laws/alabama/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "California ESA Laws"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Colorado ESA Laws"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Florida ESA Laws"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Hawai‘i ESA Laws"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Illinois ESA Laws"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Indiana ESA Laws"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Kentucky ESA Laws"
        },
        {
          "@type": "ListItem",
          "position": 9,
          "name": "Louisiana ESA Laws"
        },
        {
          "@type": "ListItem",
          "position": 10,
          "name": "Maine ESA Laws"
        },
        {
          "@type": "ListItem",
          "position": 11,
          "name": "Massachusetts ESA Laws"
        },
        {
          "@type": "ListItem",
          "position": 12,
          "name": "Michigan ESA Laws"
        },
        {
          "@type": "ListItem",
          "position": 13,
          "name": "Minnesota ESA Laws"
        },
        {
          "@type": "ListItem",
          "position": 14,
          "name": "Missouri ESA Laws"
        },
        {
          "@type": "ListItem",
          "position": 15,
          "name": "Montana ESA Laws"
        },
        {
          "@type": "ListItem",
          "position": 16,
          "name": "Nebraska ESA Laws"
        },
        {
          "@type": "ListItem",
          "position": 17,
          "name": "Pennsylvania ESA Laws"
        },
        {
          "@type": "ListItem",
          "position": 18,
          "name": "South Dakota ESA Laws"
        },
        {
          "@type": "ListItem",
          "position": 19,
          "name": "Tennessee ESA Laws"
        },
        {
          "@type": "ListItem",
          "position": 20,
          "name": "Virginia ESA Laws"
        },
        {
          "@type": "ListItem",
          "position": 21,
          "name": "Washington ESA Laws"
        },
        {
          "@type": "ListItem",
          "position": 22,
          "name": "West Virginia ESA Laws"
        },
        {
          "@type": "ListItem",
          "position": 23,
          "name": "Wyoming ESA Laws"
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://myesatherapist.com/esa-laws/#by-situation",
      "name": "ESA Laws by Situation",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "ESA Laws for Apartments & Rentals"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "ESA Laws for Colleges & Dorms"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "ESA Laws for Landlords"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "ESA Laws for Tenants"
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://myesatherapist.com/esa-laws/#animal-classifications",
      "name": "ESA Laws vs Other Working Animal Classifications",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Emotional Support Animals",
          "description": "Provide emotional support based on clinical evaluation; not pets; no training or registration required; no public access rights."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Service Animals",
          "description": "Dogs or miniature horses trained to perform specific disability-related tasks; universal public access rights."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Therapy Animals",
          "description": "Trained to provide healing contact to people, usually in institutional or clinical settings; not a companion animal."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Comfort Animals",
          "description": "Trained to offer calming distraction to people impacted by an ongoing disaster or emergency; not a companion animal."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://myesatherapist.com/esa-laws/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are ESA Letters Legally Required?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under federal ESA law, housing providers can ask for reliable documentation when someone requests an ESA. In most cases, this is an ESA letter from a licensed medical professional issued after a clinical evaluation of the individual, their disability, and their need for an ESA."
          }
        },
        {
          "@type": "Question",
          "name": "Can Landlords Deny ESAs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Landlords generally cannot deny ESAs under federal law. However, they can refuse a request if they can prove the ESA would cause major property damage, create an undue financial or administrative burden, or directly threaten health and safety, or if the accommodation would fundamentally change the nature of the housing."
          }
        },
        {
          "@type": "Question",
          "name": "Do ESA Laws Apply Nationwide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Federal ESA laws apply across all fifty states, including the Fair Housing Act. Some states have additional rules, such as requiring an ongoing relationship of 30 days or more between the individual and a licensed mental health professional before issuing an ESA letter."
          }
        },
        {
          "@type": "Question",
          "name": "Are Online ESA Evaluations Legal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Online ESA evaluations are legal if conducted by a licensed healthcare professional through a HIPAA-compliant telehealth platform following state guidelines. Instant or guaranteed approvals after a short online questionnaire are not valid, nor are registrations, certificates, or IDs purchased without a proper clinical evaluation."
          }
        }
      ]
    }
  ]
};
