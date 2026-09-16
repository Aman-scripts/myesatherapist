export const canLandlordsDenyEsaSchema = {
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
      "@id": "https://www.linkedin.com/in/awais-arshad-a51b31113/#person",
      "name": "Awais Arshad",
      "url": "https://www.linkedin.com/in/awais-arshad-a51b31113/",
      "jobTitle": "Attorney at Law",
      "image": "https://myesatherapist.com/images/reviewers/awais-arshad-image.webp",
      "sameAs": [
        "https://www.linkedin.com/in/awais-arshad-a51b31113/"
      ],
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Juris Doctor / Licensed Attorney"
      }
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
      "@id": "https://myesatherapist.com/blog/esa-guide/can-landlords-deny-emotional-support-animals/#breadcrumb",
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
          "name": "Can a Landlord Deny an Emotional Support Animal?",
          "item": "https://myesatherapist.com/blog/esa-guide/can-landlords-deny-emotional-support-animals/"
        }
      ]
    },
    {
      "@type": "BlogPosting",
      "@id": "https://myesatherapist.com/blog/esa-guide/can-landlords-deny-emotional-support-animals/#blogposting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://myesatherapist.com/blog/esa-guide/can-landlords-deny-emotional-support-animals/"
      },
      "url": "https://myesatherapist.com/blog/esa-guide/can-landlords-deny-emotional-support-animals/",
      "headline": "Can a Landlord Deny an Emotional Support Animal? Know What the Law Says",
      "description": "Can a landlord legally deny your emotional support animal? Learn the exceptions under the Fair Housing Act, the 2026 HUD update, and what to do if you're denied.",
      "image": "https://myesatherapist.com/images/blog/can-landlords-reject-esas-image.webp",
      "articleSection": "ESA Guide",
      "datePublished": "2026-05-27T10:04:41+00:00",
      "dateModified": "2026-08-17T11:53:24+00:00",
      "author": {
        "@id": "https://myesatherapist.com/author/allyson-valley/#person"
      },
      "reviewedBy": {
        "@id": "https://www.linkedin.com/in/awais-arshad-a51b31113/#person"
      },
      "lastReviewed": "2026-08-17T11:53:24+00:00",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/#blog"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/blog/esa-guide/can-landlords-deny-emotional-support-animals/#breadcrumb"
      },
      "inLanguage": "en-US",
      "citation": [
        "https://myesatherapist.com/blog/esa-guide/hud-guidance-for-emotional-support-animals/"
      ]
    },
    {
      "@type": "Quotation",
      "@id": "https://myesatherapist.com/blog/esa-guide/can-landlords-deny-emotional-support-animals/#quote-staaf",
      "text": "An emotional support animal is not just a pet; for many people, it is part of their emotional well-being and daily stability.",
      "creator": {
        "@id": "https://myesatherapist.com/esa-doctors/dr-robert-staff/#person"
      },
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/esa-guide/can-landlords-deny-emotional-support-animals/#blogposting"
      }
    },
    {
      "@type": "Quotation",
      "@id": "https://myesatherapist.com/blog/esa-guide/can-landlords-deny-emotional-support-animals/#quote-housing-attorney",
      "text": "Under the Fair Housing Act, a landlord's 'no pets' policy cannot override a tenant's right to a reasonable accommodation for a documented disability. However, disputes often arise when tenants submit weak or unverifiable ESA documentation. A valid ESA letter from a licensed mental health professional is one of the most important factors in protecting housing rights.",
      "creditText": "Housing rights attorney, Fair Housing advocacy practice",
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/esa-guide/can-landlords-deny-emotional-support-animals/#blogposting"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://myesatherapist.com/blog/esa-guide/can-landlords-deny-emotional-support-animals/#rights-table",
      "name": "Know Your Rights: When a Landlord Can and Cannot Deny an ESA",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "May deny: documentation is unreliable or insufficient"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "May deny: the animal poses a direct threat to others"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "May deny: the property qualifies for a Fair Housing Act exemption"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "May deny: accommodation would create an undue financial or administrative burden"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "May deny: the animal has a documented history of serious property damage or aggression"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Cannot deny solely because: the property has a 'no pets' policy"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Cannot deny solely because: the animal is a dog, cat, rabbit, or another common ESA species"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Cannot deny solely because: the landlord prefers not to allow emotional support animals"
        },
        {
          "@type": "ListItem",
          "position": 9,
          "name": "Cannot deny solely because: the tenant has a disability and provides valid supporting documentation"
        },
        {
          "@type": "ListItem",
          "position": 10,
          "name": "Cannot deny solely because: the landlord charges pet rent or pet fees for an approved ESA"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://myesatherapist.com/blog/esa-guide/can-landlords-deny-emotional-support-animals/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can a landlord deny an emotional support animal because of a no-pets policy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. In many cases, a no-pets policy does not override a tenant's right to request a reasonable accommodation for an emotional support animal under the Fair Housing Act."
          }
        },
        {
          "@type": "Question",
          "name": "Can landlords charge pet rent or pet fees for an ESA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally, approved emotional support animals are not considered pets under the Fair Housing Act, so landlords typically cannot charge pet rent or pet deposits. However, tenants may still be responsible for damage caused by the animal."
          }
        },
        {
          "@type": "Question",
          "name": "Is an online ESA letter legally valid?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if it is issued by a licensed mental health professional after a legitimate clinical evaluation and complies with applicable state and federal requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Can a landlord verify my ESA letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A landlord may verify that the documentation was issued by a licensed mental health professional but generally cannot request your diagnosis, therapy notes, or complete medical records."
          }
        },
        {
          "@type": "Question",
          "name": "What types of housing are exempt from ESA accommodation rules?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some owner-occupied buildings with four or fewer units and certain single-family homes rented without a broker may qualify for exemptions under the Fair Housing Act."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if my landlord refuses to consider my ESA request?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ask for the reason in writing, review whether the denial is legally justified, gather any additional documentation if needed, and consider filing a complaint with HUD, your state fair housing agency, or consulting a fair housing attorney if you believe your rights have been violated."
          }
        }
      ]
    }
  ]
};
