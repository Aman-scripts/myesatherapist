export const esaForDepressionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://myesatherapist.com/#organization",
      "name": "My ESA Therapist",
      "url": "https://myesatherapist.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://myesatherapist.com/images/logo/my-esa-therapist-logo.webp"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://myesatherapist.com/#website",
      "url": "https://myesatherapist.com/",
      "name": "My ESA Therapist",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "Person",
      "@id": "https://myesatherapist.com/author/allyson-valley/#person",
      "name": "Allyson Valley",
      "url": "https://myesatherapist.com/author/allyson-valley/",
      "image": {
        "@type": "ImageObject",
        "url": "https://myesatherapist.com/images/authors/allyson-valley-profile-image.webp"
      },
      "jobTitle": "Mental Health Writer & Research Contributor",
      "worksFor": {
        "@id": "https://myesatherapist.com/#organization"
      }
    },
    {
      "@type": "Person",
      "@id": "https://www.linkedin.com/in/max-phillips-883485a5/",
      "name": "Max Phillips",
      "url": "https://www.linkedin.com/in/max-phillips-883485a5/",
      "image": {
        "@type": "ImageObject",
        "url": "https://myesatherapist.com/images/authors/max-phillips-image.webp"
      },
      "honorificSuffix": "MSW, LCSW",
      "jobTitle": "Licensed Clinical Social Worker",
      "worksFor": {
        "@id": "https://myesatherapist.com/#organization"
      }
    },
    {
      "@type": "ImageObject",
      "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-depression/#primaryimage",
      "url": "https://myesatherapist.com/images/blog/emotional-support-through-canine-companionship-image.webp",
      "contentUrl": "https://myesatherapist.com/images/blog/emotional-support-through-canine-companionship-image.webp",
      "caption": "Emotional Support Through Canine Companionship"
    },
    {
      "@type": "WebPage",
      "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-depression/#webpage",
      "url": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-depression/",
      "name": "ESA for Depression: Can You Qualify for an Emotional Support Animal?",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-depression/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-depression/#breadcrumb"
      },
      "inLanguage": "en-US",
      "datePublished": "2026-10-13",
      "dateModified": "2026-10-13"
    },
    {
      "@type": "MedicalWebPage",
      "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-depression/#medicalwebpage",
      "url": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-depression/",
      "name": "ESA for Depression: Can You Qualify for an Emotional Support Animal?",
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-depression/#webpage"
      },
      "about": {
        "@type": "MedicalCondition",
        "name": "Depression"
      },
      "lastReviewed": "2026-10-13",
      "reviewedBy": {
        "@id": "https://www.linkedin.com/in/max-phillips-883485a5/"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": [
        "Article",
        "BlogPosting"
      ],
      "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-depression/#article",
      "mainEntityOfPage": {
        "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-depression/#webpage"
      },
      "headline": "ESA for Depression: Can You Qualify for an Emotional Support Animal?",
      "description": "Learn how an emotional support animal may help someone experiencing depression, who may qualify for an ESA, and how a licensed mental health professional evaluates eligibility.",
      "image": {
        "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-depression/#primaryimage"
      },
      "author": {
        "@id": "https://myesatherapist.com/author/allyson-valley/#person"
      },
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "datePublished": "2026-10-13",
      "dateModified": "2026-10-13",
      "inLanguage": "en-US",
      "articleSection": "Qualifying Conditions",
      "about": {
        "@type": "MedicalCondition",
        "name": "Depression"
      },
      "reviewedBy": {
        "@id": "https://www.linkedin.com/in/max-phillips-883485a5/"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-depression/#breadcrumb",
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
          "name": "ESA for Depression: Can You Qualify for an Emotional Support Animal?",
          "item": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-depression/"
        }
      ]
    }
  ]
};
