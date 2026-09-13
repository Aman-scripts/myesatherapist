export const reviewsSchema = {
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
      "@type": "CollectionPage",
      "@id": "https://myesatherapist.com/reviews/#webpage",
      "url": "https://myesatherapist.com/reviews/",
      "name": "My ESA Therapist Reviews | Real Customer Experiences & Ratings",
      "description": "Read verified My ESA Therapist reviews from real customers. See ratings, experiences, and why clients trust our fast, legitimate ESA letter services.",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website"
      },
      "about": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "mainEntity": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/reviews/#breadcrumb"
      },
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/reviews/#breadcrumb",
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
          "name": "Reviews",
          "item": "https://myesatherapist.com/reviews/"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.trustpilot.com/review/myesatherapist.com#externalreviewpage",
      "url": "https://www.trustpilot.com/review/myesatherapist.com",
      "name": "My ESA Therapist on Trustpilot",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Trustpilot",
        "url": "https://www.trustpilot.com/"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.consumeraffairs.com/pets/my-esa-therapist.html#externalreviewpage",
      "url": "https://www.consumeraffairs.com/pets/my-esa-therapist.html",
      "name": "My ESA Therapist on ConsumerAffairs",
      "isPartOf": {
        "@type": "WebSite",
        "name": "ConsumerAffairs",
        "url": "https://www.consumeraffairs.com/"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.yelp.com/biz/my-esa-therapist-jacksonville#externalreviewpage",
      "url": "https://www.yelp.com/biz/my-esa-therapist-jacksonville",
      "name": "My ESA Therapist on Yelp",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Yelp",
        "url": "https://www.yelp.com/"
      }
    }
  ]
};
