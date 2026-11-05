export const isEsaRegistrationLegitSchema = {
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
      "@id": "https://myesatherapist.com/blog/esa-guide/is-esa-registration-legit/#breadcrumb",
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
          "name": "Is ESA Registration Legit or Required?",
          "item": "https://myesatherapist.com/blog/esa-guide/is-esa-registration-legit/"
        }
      ]
    },
    {
      "@type": "BlogPosting",
      "@id": "https://myesatherapist.com/blog/esa-guide/is-esa-registration-legit/#blogposting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://myesatherapist.com/blog/esa-guide/is-esa-registration-legit/"
      },
      "url": "https://myesatherapist.com/blog/esa-guide/is-esa-registration-legit/",
      "headline": "Is ESA Registration Legit or Required? The Truth About ESA Registration.",
      "description": "Is ESA registration required or legitimate? Learn the truth about ESA registries, ID cards, certificates, and what documentation actually matters for housing.",
      "image": "https://myesatherapist.com/images/blog/woman-with-emotional-support-dog.webp",
      "articleSection": "ESA Guide",
      "datePublished": "2026-07-21T12:49:25+00:00",
      "dateModified": "2026-08-27T07:18:26+00:00",
      "author": {
        "@id": "https://myesatherapist.com/author/allyson-valley/#person"
      },
      "reviewedBy": {
        "@id": "https://www.linkedin.com/in/max-phillips-883485a5/#person"
      },
      "lastReviewed": "2026-08-27T07:18:26+00:00",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/#blog"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/blog/esa-guide/is-esa-registration-legit/#breadcrumb"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "Quotation",
      "@id": "https://myesatherapist.com/blog/esa-guide/is-esa-registration-legit/#quote-gamble",
      "text": "ESA registration is often misunderstood as a legal requirement, when the true foundation is proper clinical evaluation and documentation from a licensed professional.",
      "creator": {
        "@id": "https://myesatherapist.com/esa-doctors/dr-leslie-k-gamble/#person"
      },
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/esa-guide/is-esa-registration-legit/#blogposting"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://myesatherapist.com/blog/esa-guide/is-esa-registration-legit/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do I Need to Register My Emotional Support Animal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, no federal or state law requires you to register an emotional support animal. What typically matters for housing accommodations is having proper documentation from a licensed mental health professional, not a registration certificate or database listing. Individual landlords may contract with or have their own registry that tracks their residents with ESAs; this is not the same as a federal or state registry."
          }
        },
        {
          "@type": "Question",
          "name": "Is An ESA Certificate Enough?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not usually. While an ESA certificate may look official, it generally does not prove that you have a disability-related need for the animal. Instead of using online-purchased certificates, housing providers frequently rely on valid supporting documentation. Documentation must be uniquely tailored to the owner of the ESA and their disability needs."
          }
        },
        {
          "@type": "Question",
          "name": "Are Online ESA Registries Legitimate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most online ESA registries are private businesses that maintain their own databases. While they may provide certificates, ID cards, or registration numbers, they are not recognized as official government registries and do not automatically grant legal protections."
          }
        },
        {
          "@type": "Question",
          "name": "Is There a Government ESA Database?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. There is no official database, government-issued ESA certification system, or federal ESA registry for emotional support animals in the United States. Any website claiming to offer government registration should be evaluated carefully."
          }
        },
        {
          "@type": "Question",
          "name": "Why Do ESA Registration Websites Exist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ESA registration websites primarily sell products such as certificates, ID cards, registry listings, and vests. Many people purchase these items believing they create legal ESA status, even though registration itself generally does not determine whether an animal qualifies as an emotional support animal."
          }
        },
        {
          "@type": "Question",
          "name": "Can I Buy an ESA ID Card Instead of Getting an ESA Letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An ESA ID card can help identify your animal, but it does not replace proper documentation supporting your need for an emotional support animal. In most situations, an ID card alone is unlikely to satisfy housing accommodation requirements."
          }
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://myesatherapist.com/blog/esa-guide/is-esa-registration-legit/#not-legal-proof",
      "name": "ESA Registration, ID Cards & Certificates: What Counts as Legal Proof?",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "ESA Certificates",
          "description": "May look professional but does not prove legal eligibility on its own."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "ESA ID Cards",
          "description": "No federal requirement for ESAs to carry ID cards; not official identification."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "ESA Vests",
          "description": "An accessory, not legal documentation; grants no public access protection."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Registration Numbers",
          "description": "Confirms inclusion in a private company's database only, not legal eligibility."
        }
      ]
    }
  ]
};
