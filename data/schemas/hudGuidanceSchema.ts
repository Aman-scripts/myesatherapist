export const hudGuidanceSchema = {
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
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/blog/esa-guide/hud-guidance-for-emotional-support-animals/#breadcrumb",
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
          "name": "HUD ESA Guidance 2026",
          "item": "https://myesatherapist.com/blog/esa-guide/hud-guidance-for-emotional-support-animals/"
        }
      ]
    },
    {
      "@type": "BlogPosting",
      "@id": "https://myesatherapist.com/blog/esa-guide/hud-guidance-for-emotional-support-animals/#blogposting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://myesatherapist.com/blog/esa-guide/hud-guidance-for-emotional-support-animals/"
      },
      "url": "https://myesatherapist.com/blog/esa-guide/hud-guidance-for-emotional-support-animals/",
      "headline": "HUD ESA Guidance 2026: What Changed for Emotional Support Animal Housing?",
      "description": "Learn what HUD's 2026 guidance changes mean for ESA housing requests, supporting documents, and Fair Housing Act protections.",
      "image": "https://myesatherapist.com/images/blog/living-with-an-esa-in-rental-housing-image.webp",
      "articleSection": "ESA Guide",
      "datePublished": "2026-06-09T10:22:44+00:00",
      "dateModified": "2026-08-27T07:22:01+00:00",
      "author": {
        "@id": "https://myesatherapist.com/author/allyson-valley/#person"
      },
      "reviewedBy": {
        "@id": "https://www.linkedin.com/in/max-phillips-883485a5/#person"
      },
      "lastReviewed": "2026-08-27T07:22:01+00:00",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/#blog"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/blog/esa-guide/hud-guidance-for-emotional-support-animals/#breadcrumb"
      },
      "inLanguage": "en-US",
      "citation": [
        "https://dredf.org/huds-esa-policy-reversal/"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://myesatherapist.com/blog/esa-guide/hud-guidance-for-emotional-support-animals/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does HUD require ESA registration or certification?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. HUD's 2026 guidance does not create any federal ESA registration or certification requirement. Instead, housing providers are likely to focus more on legitimate documentation from a licensed mental health professional and evidence supporting a disability-related accommodation need."
          }
        },
        {
          "@type": "Question",
          "name": "Can a landlord require ESA training certificates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally, emotional support animals were not required to have specialized training. However, under the recent HUD May 2026 guidance, landlords may now review whether an ESA performs a specific trained task, making documentation from a licensed professional more important than before."
          }
        },
        {
          "@type": "Question",
          "name": "Can a landlord limit the size or weight of an ESA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There is no federal FHA rule that automatically allows landlords to deny an ESA based solely on size, weight, or breed. However, accommodation requests may face increased review under the new guidance, and outcomes could vary depending on state laws, property-specific circumstances, and whether the animal creates a valid safety concern."
          }
        },
        {
          "@type": "Question",
          "name": "Has the Fair Housing Act changed in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The Fair Housing Act itself has not been amended. HUD's 2026 guidance changes how the agency enforces and investigates certain ESA-related housing complaints. However, FHA's reasonable accommodation requirements remain in place, and state housing protections may still provide additional rights."
          }
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://myesatherapist.com/blog/esa-guide/hud-guidance-for-emotional-support-animals/#what-has-not-changed",
      "name": "What Has Not Changed Under HUD's 2026 Guidance",
      "image": "https://myesatherapist.com/images/blog/hud-esa-guidance-what-has-not-changed-image.webp",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "State laws still matter",
          "description": "Many states maintain housing protections that operate independently of HUD enforcement."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Private legal options remain available",
          "description": "Courts can still review housing discrimination claims."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Existing approvals usually stay intact",
          "description": "If an accommodation was already approved, this guidance does not automatically revoke it."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "The Fair Housing Act still exists",
          "description": "Disability accommodation requirements have not been removed; Congress has not changed the law."
        }
      ]
    }
  ]
};
