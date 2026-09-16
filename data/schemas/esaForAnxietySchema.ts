export const esaForAnxietySchema = {
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
      "@id": "https://myesatherapist.com/blog/qualifying-conditions/#category",
      "url": "https://myesatherapist.com/blog/qualifying-conditions/",
      "name": "Qualifying Conditions",
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
      "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-anxiety/#breadcrumb",
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
          "name": "Qualifying Conditions",
          "item": "https://myesatherapist.com/blog/qualifying-conditions/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "ESA for Anxiety",
          "item": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-anxiety/"
        }
      ]
    },
    {
      "@type": "BlogPosting",
      "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-anxiety/#blogposting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-anxiety/"
      },
      "url": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-anxiety/",
      "headline": "ESA for Anxiety: Eligibility, Benefits, and How to Qualify?",
      "description": "Wondering if anxiety qualifies for an ESA? Explore eligibility requirements, potential benefits, housing protections, and what you need to qualify.",
      "image": "https://myesatherapist.com/images/blog/how-can-esa-support-with-anxity-image.webp",
      "articleSection": "Qualifying Conditions",
      "datePublished": "2026-08-26T09:42:01+00:00",
      "dateModified": "2026-08-27T07:28:42+00:00",
      "author": {
        "@id": "https://myesatherapist.com/author/allyson-valley/#person"
      },
      "reviewedBy": {
        "@id": "https://www.linkedin.com/in/max-phillips-883485a5/#person"
      },
      "lastReviewed": "2026-08-27T07:28:42+00:00",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/#blog"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-anxiety/#breadcrumb"
      },
      "inLanguage": "en-US",
      "citation": [
        "https://myesatherapist.com/blog/qualifying-conditions/conditions-that-may-qualify-for-an-esa/",
        "https://myesatherapist.com/blog/esa-guide/emotional-support-animal/"
      ]
    },
    {
      "@type": "Quotation",
      "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-anxiety/#quote-staaf",
      "text": "The consistent companionship of an emotional support animal can be a valuable source of comfort for individuals whose anxiety affects their daily emotional well-being.",
      "creator": {
        "@id": "https://myesatherapist.com/esa-doctors/dr-robert-staff/#person"
      },
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-anxiety/#blogposting"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-anxiety/#how-esa-helps",
      "name": "How Can an ESA Support People With Anxiety?",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "A Calming Presence During Stressful Moments",
          "description": "An animal's presence provides reassurance during periods of increased anxiety."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Encourages Healthy Daily Habits",
          "description": "Animal care creates structure through regular activities like feeding and keeping routines."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Provides Consistent Companionship",
          "description": "An ESA offers a constant companion that can help reduce feelings of loneliness during challenging times."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Supports Emotional Regulation",
          "description": "The comfort of a familiar animal can create a feeling of safety and stability."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-anxiety/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I Have More Than One ESA For Anxiety?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You may have more than one ESA for anxiety if each animal provides support for your mental health needs. A licensed mental health professional must determine whether multiple ESAs are required for you."
          }
        },
        {
          "@type": "Question",
          "name": "Can Children With Anxiety Qualify For An ESA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Children or minors below 18 years of age are eligible for an ESA with their parent or guardian's consent. A licensed mental health professional should evaluate the child and determine whether an ESA could provide meaningful emotional support."
          }
        },
        {
          "@type": "Question",
          "name": "What Happens During An ESA Evaluation For Anxiety?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "During an ESA evaluation for anxiety, a mental health professional reviews your anxiety symptoms, their impact on daily life, and your current mental health needs. They then determine whether an ESA is clinically appropriate and whether an ESA letter is necessary or not."
          }
        },
        {
          "@type": "Question",
          "name": "Is An ESA Letter Recommended For Everyone With Anxiety?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Having anxiety does not automatically mean an ESA is appropriate. A licensed mental health professional considers the severity of symptoms, daily functioning, and whether an ESA could provide meaningful emotional support."
          }
        },
        {
          "@type": "Question",
          "name": "How Long Does An ESA Letter For Anxiety Stay Valid?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There is no fixed expiry date for an ESA letter for anxiety. However, most landlords ask for updated documentation issued within the last 12 months to ensure the most current need for an ESA."
          }
        }
      ]
    }
  ]
};
