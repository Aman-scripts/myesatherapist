export const whatIsAnEsaSchema = {
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
      "@type": "Blog",
      "@id": "https://myesatherapist.com/blog/#blog",
      "url": "https://myesatherapist.com/blog/",
      "name": "ESA Blog: Emotional Support Animal Articles & Resources",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website"
      }
    },
    {
      "@type": "CollectionPage",
      "@id": "https://myesatherapist.com/blog/esa-guide/#category",
      "url": "https://myesatherapist.com/blog/esa-guide/",
      "name": "ESA Guide",
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/#blog"
      }
    },
    {
      "@type": "Person",
      "@id": "https://myesatherapist.com/author/allyson-valley/#person",
      "name": "Allyson Valley",
      "url": "https://myesatherapist.com/author/allyson-valley/",
      "jobTitle": "Mental Health Writer & Research Contributor",
      "description": "Licensed Professional Counselor (LPC-MHSP), Ph.D. in Counselor Education & Supervision, with experience across crisis services, behavioral health programs, and healthcare systems.",
      "image": "https://myesatherapist.com/images/authors/allyson-valley-image.webp",
      "sameAs": [
        "https://www.linkedin.com/in/allyson-valley/"
      ],
      "worksFor": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Licensed Professional Counselor (LPC-MHSP)"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Ph.D., Counselor Education and Supervision",
          "recognizedBy": {
            "@type": "CollegeOrUniversity",
            "name": "Capella University"
          }
        }
      ]
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
      "@type": "Person",
      "@id": "https://myesatherapist.com/esa-doctors/dr-robert-staff/#person",
      "name": "Dr. Robert Staaf",
      "url": "https://myesatherapist.com/esa-doctors/dr-robert-staff/",
      "jobTitle": "Licensed Clinical Social Worker",
      "worksFor": {
        "@id": "https://myesatherapist.com/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/blog/esa-guide/emotional-support-animal/#breadcrumb",
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
          "name": "Blog",
          "item": "https://myesatherapist.com/blog/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "ESA Guide",
          "item": "https://myesatherapist.com/blog/esa-guide/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "What is an Emotional Support Animal?",
          "item": "https://myesatherapist.com/blog/esa-guide/emotional-support-animal/"
        }
      ]
    },
    {
      "@type": "BlogPosting",
      "@id": "https://myesatherapist.com/blog/esa-guide/emotional-support-animal/#blogposting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://myesatherapist.com/blog/esa-guide/emotional-support-animal/"
      },
      "url": "https://myesatherapist.com/blog/esa-guide/emotional-support-animal/",
      "headline": "What is an Emotional Support Animal? Everything You Need to Know.",
      "description": "Learn everything about Emotional Support Animals, including ESA letters, landlord rules, and legal protections.",
      "image": "https://myesatherapist.com/images/blog/emotional-support-animal-image-400x250.webp",
      "articleSection": "ESA Guide",
      "datePublished": "2026-05-14T11:00:21+00:00",
      "dateModified": "2026-08-27T07:25:31+00:00",
      "author": {
        "@id": "https://myesatherapist.com/author/allyson-valley/#person"
      },
      "reviewedBy": {
        "@id": "https://www.linkedin.com/in/max-phillips-883485a5/#person"
      },
      "lastReviewed": "2026-08-27T07:25:31+00:00",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/#blog"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/blog/esa-guide/emotional-support-animal/#breadcrumb"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "Quotation",
      "@id": "https://myesatherapist.com/blog/esa-guide/emotional-support-animal/#quote-staaf",
      "text": "The unconditional love and non-judgmental presence of an emotional support animal can create a safe space for healing and emotional growth.",
      "creator": {
        "@id": "https://myesatherapist.com/esa-doctors/dr-robert-staff/#person"
      },
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/esa-guide/emotional-support-animal/#blogposting"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://myesatherapist.com/blog/esa-guide/emotional-support-animal/#types-of-esas",
      "name": "Types of Emotional Support Animals and Their Benefits",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Dogs",
          "description": "Provide loyalty, companionship, and emotional security; help with anxiety, depression, loneliness, and panic attacks."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Cats",
          "description": "Ideal for people who prefer a calm, low-maintenance companion; help reduce stress and loneliness."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Rabbits",
          "description": "Quiet and gentle, good for smaller spaces; help create a peaceful environment."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Birds",
          "description": "Offer emotional connection through interaction and playful behavior; help lift mood."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Small Animals",
          "description": "Hamsters, guinea pigs, and similar pets that help create emotional stability through companionship and routine."
        }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://myesatherapist.com/blog/esa-guide/emotional-support-animal/#howto",
      "name": "How to Get an Emotional Support Animal",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Assess Your Mental Health Needs",
          "text": "Check your mental health to see if you have any problems like anxiety, depression, or stress that could use some emotional support and companionship."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Speak to a Licensed Professional",
          "text": "Get in touch with a licensed therapist or mental health professional who can properly evaluate your condition and decide if an ESA is a good addition to your treatment plan."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Get Your ESA Letter",
          "text": "If you meet the requirements, the professional will write you an ESA letter, which is an official document that proves you need an emotional support animal under housing laws."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Provide It to Your Landlord",
          "text": "Even if the property has a 'no pets' policy, you can still ask for accommodation by giving your ESA letter to your landlord or housing provider."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://myesatherapist.com/blog/esa-guide/emotional-support-animal/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the rules of having an emotional support animal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Emotional support animals must be well-behaved and should not threaten others or damage property. Under the Fair Housing Act, qualified individuals have the right to keep an ESA in many no-pet housing properties."
          }
        },
        {
          "@type": "Question",
          "name": "Can a roommate refuse to live with an emotional support animal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sometimes. If a roommate has severe allergies or a medically documented animal phobia, housing providers may need to balance both individuals' needs."
          }
        },
        {
          "@type": "Question",
          "name": "Are exotic animals allowed as emotional support animals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, some exotic animals can qualify as ESAs. However, landlords may deny them if the animal creates safety, health, or property concerns."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if a landlord ignores an ESA accommodation request?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Property owners have to respond to all ESA accommodation requests within a specific time frame. Ignoring a valid ESA request may violate the Fair Housing Act. Tenants can file a housing discrimination complaint with HUD if necessary."
          }
        },
        {
          "@type": "Question",
          "name": "Are emotional support animals only for severe mental health conditions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. ESAs may help with anxiety, stress, depression, PTSD, panic disorders, and other emotional health challenges, even when symptoms are moderate."
          }
        },
        {
          "@type": "Question",
          "name": "Why do emotional support animals improve mental well-being?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Emotional support animals can reduce stress, anxiety, and feelings of loneliness since they offer emotional stability, comfort, and companionship."
          }
        }
      ]
    }
  ]
};
