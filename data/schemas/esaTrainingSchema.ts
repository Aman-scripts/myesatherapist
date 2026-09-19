export const esaTrainingSchema = {
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
      "@id": "https://myesatherapist.com/blog/esa-training/#category",
      "url": "https://myesatherapist.com/blog/esa-training/",
      "name": "ESA Training Guide",
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/#blog"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/esa-training/#breadcrumb",
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
          "name": "ESA Training",
          "item": "https://myesatherapist.com/esa-training/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://myesatherapist.com/esa-training/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does my ESA need a training certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. There's no federal certification requirement. A legitimate ESA letter comes from a licensed mental health professional, not a training program."
          }
        },
        {
          "@type": "Question",
          "name": "Will my landlord accept an untrained ESA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Legally, they still generally have to consider your accommodation request under the Fair Housing Act. With HUD's 2026 enforcement shift, though, a well-behaved animal and strong documentation matter more than they used to."
          }
        },
        {
          "@type": "Question",
          "name": "Can an aggressive animal qualify as an ESA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An animal can be prescribed as an ESA, but reasonable accommodation has never required landlords to tolerate genuinely dangerous or destructive behavior. Training protects both your animal and your housing rights."
          }
        },
        {
          "@type": "Question",
          "name": "How long does ESA training take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depends on the animal and the behaviors you're working on. Basic obedience can be achieved in a few weeks of consistent practice; more complex behavioral work can take several months."
          }
        }
      ]
    }
  ]
};
