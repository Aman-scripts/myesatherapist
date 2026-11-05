export const esaForPtsdSchema = {
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
        "contentUrl": "https://myesatherapist.com/images/logo/my-esa-therapist-logo.webp"
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
      "jobTitle": "Licensed Clinical Social Worker"
    },
    {
      "@type": "ImageObject",
      "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-ptsd/#primaryimage",
      "url": "https://myesatherapist.com/images/blog/esa-for-ptsd-image.webp",
      "contentUrl": "https://myesatherapist.com/images/blog/esa-for-ptsd-image.webp",
      "caption": "Emotional Support Through Canine Companionship"
    },
    {
      "@type": "WebPage",
      "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-ptsd/#webpage",
      "url": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-ptsd/",
      "name": "ESA for PTSD: Eligibility, Benefits & Housing Protections",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-ptsd/#primaryimage"
      },
      "mainEntity": {
        "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-ptsd/#article"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-ptsd/#breadcrumb"
      },
      "datePublished": "2026-10-13",
      "dateModified": "2026-10-13",
      "inLanguage": "en-US"
    },
    {
      "@type": "MedicalWebPage",
      "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-ptsd/#medicalpage",
      "url": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-ptsd/",
      "name": "ESA for PTSD: Eligibility, Benefits & Housing Protections",
      "about": {
        "@type": "MedicalCondition",
        "name": "Post-traumatic stress disorder",
        "alternateName": "PTSD"
      },
      "lastReviewed": "2026-10-13",
      "reviewedBy": {
        "@id": "https://www.linkedin.com/in/max-phillips-883485a5/"
      },
      "author": {
        "@id": "https://myesatherapist.com/author/allyson-valley/#person"
      },
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website"
      },
      "mainEntity": {
        "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-ptsd/#article"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": [
        "Article",
        "BlogPosting"
      ],
      "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-ptsd/#article",
      "url": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-ptsd/",
      "mainEntityOfPage": {
        "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-ptsd/#webpage"
      },
      "headline": "ESA for PTSD: Eligibility, Benefits & Housing Protections",
      "description": "Learn about emotional support animals for people with PTSD, eligibility considerations, potential benefits, and housing accommodation protections.",
      "image": {
        "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-ptsd/#primaryimage"
      },
      "datePublished": "2026-10-13",
      "dateModified": "2026-10-13",
      "author": {
        "@id": "https://myesatherapist.com/author/allyson-valley/#person"
      },
      "reviewedBy": {
        "@id": "https://www.linkedin.com/in/max-phillips-883485a5/"
      },
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "articleSection": "Qualifying Conditions",
      "about": [
        {
          "@type": "MedicalCondition",
          "name": "Post-traumatic stress disorder",
          "alternateName": "PTSD"
        },
        {
          "@type": "Thing",
          "name": "Emotional support animals"
        },
        {
          "@type": "Thing",
          "name": "Housing accommodations"
        }
      ],
      "inLanguage": "en-US",
      "isAccessibleForFree": true
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-ptsd/#breadcrumb",
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
          "name": "ESA for PTSD",
          "item": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-ptsd/"
        }
      ]
    }
  ]
};
