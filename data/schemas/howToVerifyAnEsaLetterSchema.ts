export const howToVerifyAnEsaLetterSchema = {
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
      "@id": "https://myesatherapist.com/esa-doctors/dr-leslie-k-gamble/#person",
      "name": "Leslie K. Gamble",
      "url": "https://myesatherapist.com/esa-doctors/dr-leslie-k-gamble/",
      "jobTitle": "Licensed Independent Clinical Social Worker",
      "worksFor": {
        "@id": "https://myesatherapist.com/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/blog/esa-guide/how-to-verify-an-esa-letter/#breadcrumb",
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
          "name": "How to Verify If an ESA Letter Is Legitimate",
          "item": "https://myesatherapist.com/blog/esa-guide/how-to-verify-an-esa-letter/"
        }
      ]
    },
    {
      "@type": "BlogPosting",
      "@id": "https://myesatherapist.com/blog/esa-guide/how-to-verify-an-esa-letter/#blogposting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://myesatherapist.com/blog/esa-guide/how-to-verify-an-esa-letter/"
      },
      "url": "https://myesatherapist.com/blog/esa-guide/how-to-verify-an-esa-letter/",
      "headline": "How to Verify If an ESA Letter Is Legitimate: A Landlord & Tenant Checklist.",
      "description": "Not sure if an ESA letter is valid? Use this step-by-step checklist to verify ESA documentation, identify warning signs, and understand housing compliance requirements.",
      "image": "https://myesatherapist.com/images/blog/happily-living-with-emotional-support-animal-image-400x250.webp",
      "articleSection": "ESA Guide",
      "datePublished": "2026-06-19T09:08:36+00:00",
      "dateModified": "2026-08-17T11:50:31+00:00",
      "author": {
        "@id": "https://myesatherapist.com/author/allyson-valley/#person"
      },
      "reviewedBy": {
        "@id": "https://www.linkedin.com/in/max-phillips-883485a5/#person"
      },
      "lastReviewed": "2026-08-17T11:50:31+00:00",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/#blog"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/blog/esa-guide/how-to-verify-an-esa-letter/#breadcrumb"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "Quotation",
      "@id": "https://myesatherapist.com/blog/esa-guide/how-to-verify-an-esa-letter/#quote-gamble",
      "text": "The value of an ESA letter comes from the professional relationship and clinical assessment behind it, not from the appearance of the document.",
      "creator": {
        "@id": "https://myesatherapist.com/esa-doctors/dr-leslie-k-gamble/#person"
      },
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/esa-guide/how-to-verify-an-esa-letter/#blogposting"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://myesatherapist.com/blog/esa-guide/how-to-verify-an-esa-letter/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What Makes an ESA Letter Legitimate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A licensed mental health professional issues a legitimate ESA letter after a proper clinical evaluation. It should include the provider's license information, signature, date, and confirmation that the individual has a disability-related need for an emotional support animal."
          }
        },
        {
          "@type": "Question",
          "name": "Can a Landlord Verify an ESA Letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A landlord can verify that the letter was issued by a licensed mental health professional and that the documentation appears genuine. However, landlords cannot demand detailed medical records or personal information about a tenant's diagnosis."
          }
        },
        {
          "@type": "Question",
          "name": "Are ESA Registration Certificates and ID Cards Legally Valid?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. ESA registrations, certificates, or ID cards do not hold a person's legal need for an emotional support animal. Housing providers typically rely on legitimate ESA letters rather than online certifications or purchased documentation."
          }
        },
        {
          "@type": "Question",
          "name": "Do ESA Letters Need to Be Renewed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While there is no fixed 'expiration date' for an emotional support animal letter, landlords usually ask for current documentation issued within the last 12 months to confirm the updated needs for an ESA. Keeping your ESA letter updated helps prevent any accommodation delays."
          }
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://myesatherapist.com/blog/esa-guide/how-to-verify-an-esa-letter/#tenant-checklist",
      "name": "Tenant Checklist: How to Ensure Your ESA Letter Is Legitimate",
      "image": "https://myesatherapist.com/images/blog/tenant-checklist-to-verify-esa-letter-image.webp",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Confirm the Provider Is Licensed"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Verify the Letter Includes Professional Information"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Ensure the Letter Is Personalized"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Watch for Instant Approvals"
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://myesatherapist.com/blog/esa-guide/how-to-verify-an-esa-letter/#landlord-checklist",
      "name": "Landlord Checklist: How to Verify an ESA Letter?",
      "image": "https://myesatherapist.com/images/blog/landlord-checklist-to-verify-esa-letter-image.webp",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Review the Letterhead and Licensing Information"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Verify the License"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Confirm the Provider Exists"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Check for Individualized Language"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Understand What Landlords Cannot Request"
        }
      ]
    }
  ]
};
