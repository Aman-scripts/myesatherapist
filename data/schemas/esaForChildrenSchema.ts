export const esaForChildrenSchema = {
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
      "@id": "https://myesatherapist.com/blog/esa-guide/esa-for-children/#breadcrumb",
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
          "name": "ESA for Children and Minors",
          "item": "https://myesatherapist.com/blog/esa-guide/esa-for-children/"
        }
      ]
    },
    {
      "@type": "BlogPosting",
      "@id": "https://myesatherapist.com/blog/esa-guide/esa-for-children/#blogposting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://myesatherapist.com/blog/esa-guide/esa-for-children/"
      },
      "url": "https://myesatherapist.com/blog/esa-guide/esa-for-children/",
      "headline": "ESA for Children and Minors: How It Works and Who Signs the Letter?",
      "description": "Learn who qualifies for an ESA for children, who signs the ESA letter, parents' role, qualifying conditions, housing rights, and the evaluation process.",
      "image": "https://myesatherapist.com/images/blog/Hero-Section-.webp",
      "articleSection": "ESA Guide",
      "datePublished": "2026-07-27T11:42:05+00:00",
      "dateModified": "2026-07-30T00:00:00+00:00",
      "author": {
        "@id": "https://myesatherapist.com/author/allyson-valley/#person"
      },
      "reviewedBy": {
        "@id": "https://www.linkedin.com/in/max-phillips-883485a5/#person"
      },
      "lastReviewed": "2026-07-30T00:00:00+00:00",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/#blog"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/blog/esa-guide/esa-for-children/#breadcrumb"
      },
      "inLanguage": "en-US",
      "audience": {
        "@type": "Audience",
        "audienceType": "Parents and legal guardians of minors"
      },
      "citation": [
        "https://myesatherapist.com/esa-letter-renewal/"
      ]
    },
    {
      "@type": "Quotation",
      "@id": "https://myesatherapist.com/blog/esa-guide/esa-for-children/#quote-gamble",
      "text": "An ESA letter reflects a proper clinical judgement, not a parent's preference or a child's attachment for an animal.",
      "creator": {
        "@id": "https://myesatherapist.com/esa-doctors/dr-leslie-k-gamble/#person"
      },
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/esa-guide/esa-for-children/#blogposting"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://myesatherapist.com/blog/esa-guide/esa-for-children/#qualifying-conditions",
      "name": "Which Childhood Mental Health Conditions Commonly Qualify?",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Anxiety Disorders",
          "description": "Generalized anxiety, social anxiety, or separation anxiety may find comfort through a trusted companion animal."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Depression and Mood-Related Challenges",
          "description": "An ESA may provide companionship, routine, and emotional connection during difficult periods."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Trauma-Related Conditions",
          "description": "Strong emotional ties to animals can help children who have gone through traumatic experiences feel safer and more secure."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "ADHD and Emotional Regulation Difficulties",
          "description": "Some children with co-occurring anxiety or emotional dysregulation may be considered during an evaluation."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Autism Spectrum Disorder",
          "description": "Some families report that animals help provide predictability, comfort, and emotional reassurance."
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://myesatherapist.com/blog/esa-guide/esa-for-children/#evaluation-checklist",
      "name": "What Parents Should Bring to the Evaluation",
      "image": "https://myesatherapist.com/images/blog/Who-Signs-the-ESA-Letter-for-a-Mino.webp",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "The Child's Mental Health History"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Current Support Systems"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "The Relationship Between the Child and the Animal"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Housing Information"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://myesatherapist.com/blog/esa-guide/esa-for-children/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can a 10-year-old have an emotional support animal letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. There is no minimum age requirement for emotional support animal eligibility. A licensed mental health professional must determine whether the animal provides support related to a qualifying mental or emotional health condition. A parent or legal guardian must also consent to the assessment and be willing to help take care of the ESA."
          }
        },
        {
          "@type": "Question",
          "name": "Does my child's ESA give them rights at school?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not automatically. ESA letters are generally used for housing accommodations, not public support or access. Schools follow different rules and policies than housing, and approval is not guaranteed."
          }
        },
        {
          "@type": "Question",
          "name": "Can my child's pediatrician write the ESA letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In some cases, a pediatrician may provide supporting documentation. However, ESA evaluations are most commonly conducted by licensed mental health professionals who assess the child's emotional or psychological needs. Whether a physician can write an ESA letter is often up to the provider's discretion as well as the policies of the organization they work for."
          }
        },
        {
          "@type": "Question",
          "name": "What happens to a child's ESA letter when they turn 18?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The need for emotional support does not automatically end at age 18. Depending on the housing provider or college, updated documentation may be requested, and the individual may need to complete a new evaluation."
          }
        }
      ]
    }
  ]
};
