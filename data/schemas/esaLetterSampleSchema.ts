export const esaLetterSampleSchema = {
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
      "@id": "https://myesatherapist.com/blog/esa-guide/esa-letter-sample/#breadcrumb",
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
          "name": "ESA Letter Sample",
          "item": "https://myesatherapist.com/blog/esa-guide/esa-letter-sample/"
        }
      ]
    },
    {
      "@type": "BlogPosting",
      "@id": "https://myesatherapist.com/blog/esa-guide/esa-letter-sample/#blogposting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://myesatherapist.com/blog/esa-guide/esa-letter-sample/"
      },
      "url": "https://myesatherapist.com/blog/esa-guide/esa-letter-sample/",
      "headline": "ESA Letter Sample: What a Legitimate ESA Letter Looks Like in 2026",
      "description": "A legitimate ESA letter in 2026 should come from a licensed mental health professional and include essentials like provider credentials, clinical determination of a need, and a housing accommodation recommendation. This guide provides an ESA letter sample and explains what a valid ESA letter should include, along with the red flags that may indicate fake or invalid documentation.",
      "image": "https://myesatherapist.com/images/blog/emotional-support-animal-letter-sample-image.jpg",
      "articleSection": "ESA Guide",
      "datePublished": "2026-07-29T10:20:27+00:00",
      "dateModified": "2026-08-27T07:06:58+00:00",
      "author": {
        "@id": "https://myesatherapist.com/author/allyson-valley/#person"
      },
      "reviewedBy": {
        "@id": "https://www.linkedin.com/in/max-phillips-883485a5/#person"
      },
      "lastReviewed": "2026-08-27T07:06:58+00:00",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/#blog"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/blog/esa-guide/esa-letter-sample/#breadcrumb"
      },
      "inLanguage": "en-US",
      "citation": [
        "https://myesatherapist.com/blog/esa-guide/is-esa-registration-legit/",
        "https://myesatherapist.com/blog/esa-guide/how-to-verify-an-esa-letter/"
      ]
    },
    {
      "@type": "Quotation",
      "@id": "https://myesatherapist.com/blog/esa-guide/esa-letter-sample/#quote-gamble",
      "text": "The value of an ESA letter comes from the professional relationship and clinical assessment behind it, not from the appearance of the document.",
      "creator": {
        "@id": "https://myesatherapist.com/esa-doctors/dr-leslie-k-gamble/#person"
      },
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/esa-guide/esa-letter-sample/#blogposting"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://myesatherapist.com/blog/esa-guide/esa-letter-sample/#must-include",
      "name": "What Must a Legitimate ESA Letter Include?",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Licensed Mental Health Professional's Information",
          "description": "Full name, license type, license number, state of licensure, and practice contact information."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Confirmation of a Qualifying Mental or Emotional Disability",
          "description": "States that the individual has a recognized disability without disclosing the specific diagnosis."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Clinical Determination of Need",
          "description": "Explains that the ESA provides support or therapeutic benefit related to the individual's condition."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Recommendation for Housing Accommodation",
          "description": "Specifically recommends the ESA as part of the individual's treatment or symptom management plan."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Signature and Date",
          "description": "Clinician's signature, date of assessment and issuance, and professional letterhead."
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://myesatherapist.com/blog/esa-guide/esa-letter-sample/#must-not-include",
      "name": "What a Legitimate ESA Letter Does Not Include",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "ESA registration numbers"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "National ESA databases"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "ID cards or badges"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Animal certifications"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Vests or patches"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Lifetime approvals"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Instant approvals without evaluation"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://myesatherapist.com/blog/esa-guide/esa-letter-sample/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a legitimate ESA letter sample look like?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A legitimate ESA letter sample includes the licensed mental health professional's name along with license information and official letterhead stating that an emotional support animal is part of the individual's treatment plan. Every genuine ESA letter is individual specific and based on a clinical evaluation."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use an ESA sample as my official ESA letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. An ESA letter sample or template is only meant to show what a legitimate letter looks like. A valid ESA letter must be written specifically for you by a licensed mental health professional after a clinical evaluation."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between an ESA letter and an ESA certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An ESA letter is the only document generally used to support a housing accommodation request because it is issued by a licensed mental health professional. An ESA certificate or registration is not required by law and does not establish eligibility for housing accommodations and is not a replacement for a legitimate ESA letter."
          }
        },
        {
          "@type": "Question",
          "name": "What information should not appear in an ESA letter sample?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A legitimate ESA letter should not include unnecessary medical details or your complete diagnosis or sensitive treatment records. It only needs enough information to confirm that you qualify for an emotional support animal and that the letter was issued by a licensed clinician."
          }
        },
        {
          "@type": "Question",
          "name": "Does an ESA letter need to be renewed every year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Federal law does not require annual renewal of an ESA letter. However, many housing providers prefer documentation issued within the past 12 months, so keeping your letter up to date can help avoid delays during the accommodation process."
          }
        }
      ]
    }
  ]
};
