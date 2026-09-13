export const blogSchema = {
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
      ]
    },
    {
      "@type": "Blog",
      "@id": "https://myesatherapist.com/blog/#blog",
      "url": "https://myesatherapist.com/blog/",
      "name": "ESA Blog: Emotional Support Animal Articles & Resources",
      "description": "Explore expert-written articles covering emotional support animals, ESA housing information, therapist evaluations, mental health support, and more.",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website"
      },
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "inLanguage": "en-US",
      "breadcrumb": {
        "@id": "https://myesatherapist.com/blog/#breadcrumb"
      },
      "blogPost": [
        {
          "@id": "https://myesatherapist.com/blog/esa-guide/how-to-verify-an-esa-letter/#blogposting"
        },
        {
          "@id": "https://myesatherapist.com/blog/esa-guide/is-esa-registration-legit/#blogposting"
        },
        {
          "@id": "https://myesatherapist.com/blog/esa-guide/hud-guidance-for-emotional-support-animals/#blogposting"
        },
        {
          "@id": "https://myesatherapist.com/blog/esa-guide/can-landlords-deny-emotional-support-animals/#blogposting"
        },
        {
          "@id": "https://myesatherapist.com/blog/esa-guide/emotional-support-animal/#blogposting"
        },
        {
          "@id": "https://myesatherapist.com/blog/esa-guide/esa-letter-sample/#blogposting"
        },
        {
          "@id": "https://myesatherapist.com/blog/esa-guide/esa-for-children/#blogposting"
        },
        {
          "@id": "https://myesatherapist.com/blog/qualifying-conditions/conditions-that-may-qualify-for-an-esa/#blogposting"
        },
        {
          "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-anxiety/#blogposting"
        },
        {
          "@id": "https://myesatherapist.com/blog/esa-training/8-basic-obedience-commands-every-esa-should-know/#blogposting"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/blog/#breadcrumb",
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
        }
      ]
    },
    {
      "@type": "CollectionPage",
      "@id": "https://myesatherapist.com/blog/#webpage",
      "url": "https://myesatherapist.com/blog/",
      "name": "ESA Blog: Emotional Support Animal Articles & Resources | My ESA Therapist",
      "description": "Explore expert-written articles covering emotional support animals, ESA housing information, therapist evaluations, mental health support, and more.",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website"
      },
      "about": {
        "@id": "https://myesatherapist.com/blog/#blog"
      },
      "mainEntity": {
        "@id": "https://myesatherapist.com/blog/#blog"
      },
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "CollectionPage",
      "@id": "https://myesatherapist.com/blog/esa-guide/#category",
      "url": "https://myesatherapist.com/blog/esa-guide/",
      "name": "ESA Guide",
      "description": "Detailed information for both new and existing ESA owners, covering housing rights, the evaluation process, federal and state laws, emotional support animal letters, and common misconceptions.",
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/#blog"
      }
    },
    {
      "@type": "CollectionPage",
      "@id": "https://myesatherapist.com/blog/qualifying-conditions/#category",
      "url": "https://myesatherapist.com/blog/qualifying-conditions/",
      "name": "Qualifying Conditions",
      "description": "Educational articles discussing mental health conditions that may be evaluated by licensed mental health professionals when determining whether an ESA is clinically appropriate.",
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/#blog"
      }
    },
    {
      "@type": "CollectionPage",
      "@id": "https://myesatherapist.com/blog/esa-training/#category",
      "url": "https://myesatherapist.com/blog/esa-training/",
      "name": "ESA Training",
      "description": "Training tips, behavior management, socialization, and practical advice to help an ESA become a calm and well-mannered companion.",
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/#blog"
      }
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
      }
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
      }
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
      }
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
      }
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
      }
    },
    {
      "@type": "BlogPosting",
      "@id": "https://myesatherapist.com/blog/esa-guide/esa-letter-sample/#blogposting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://myesatherapist.com/blog/esa-guide/esa-letter-sample/"
      },
      "url": "https://myesatherapist.com/blog/esa-guide/esa-letter-sample/",
      "headline": "ESA Letter Sample: What a Legitimate ESA Letter Looks Like?",
      "image": "https://myesatherapist.com/images/blog/emotional-support-animal-letter-sample-image.webp",
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
      }
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
      "image": "https://myesatherapist.com/images/blog/Hero-Section-.webp",
      "articleSection": "ESA Guide",
      "datePublished": "2026-07-27T11:42:05+00:00",
      "dateModified": "2026-08-27T07:17:03+00:00",
      "author": {
        "@id": "https://myesatherapist.com/author/allyson-valley/#person"
      },
      "reviewedBy": {
        "@id": "https://www.linkedin.com/in/max-phillips-883485a5/#person"
      },
      "lastReviewed": "2026-08-27T07:17:03+00:00",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/#blog"
      }
    },
    {
      "@type": "BlogPosting",
      "@id": "https://myesatherapist.com/blog/qualifying-conditions/conditions-that-may-qualify-for-an-esa/#blogposting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://myesatherapist.com/blog/qualifying-conditions/conditions-that-may-qualify-for-an-esa/"
      },
      "url": "https://myesatherapist.com/blog/qualifying-conditions/conditions-that-may-qualify-for-an-esa/",
      "headline": "Which DSM-5 Conditions Qualify for an ESA? A Condition-by-Condition Guide.",
      "image": "https://myesatherapist.com/images/blog/who-qualifing-for-emotional-support-animal.webp",
      "articleSection": "Qualifying Conditions",
      "datePublished": "2026-07-10T07:48:39+00:00",
      "dateModified": "2026-09-01T11:49:31+00:00",
      "author": {
        "@id": "https://myesatherapist.com/author/allyson-valley/#person"
      },
      "reviewedBy": {
        "@id": "https://www.linkedin.com/in/max-phillips-883485a5/#person"
      },
      "lastReviewed": "2026-09-01T11:49:31+00:00",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/#blog"
      }
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
      }
    },
    {
      "@type": "BlogPosting",
      "@id": "https://myesatherapist.com/blog/esa-training/8-basic-obedience-commands-every-esa-should-know/#blogposting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://myesatherapist.com/blog/esa-training/8-basic-obedience-commands-every-esa-should-know/"
      },
      "url": "https://myesatherapist.com/blog/esa-training/8-basic-obedience-commands-every-esa-should-know/",
      "headline": "8 Basic Obedience Commands Every ESA Should Know.",
      "image": "https://myesatherapist.com/images/blog/training-an-esa-image.jpg",
      "articleSection": "ESA Training",
      "datePublished": "2026-09-11T06:59:52+00:00",
      "dateModified": "2026-09-11T06:59:54+00:00",
      "author": {
        "@id": "https://myesatherapist.com/author/allyson-valley/#person"
      },
      "reviewedBy": {
        "@id": "https://www.linkedin.com/in/max-phillips-883485a5/#person"
      },
      "lastReviewed": "2026-09-11T06:59:54+00:00",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/#blog"
      }
    }
  ]
};
