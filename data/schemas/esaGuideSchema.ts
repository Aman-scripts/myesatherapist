export const esaGuideSchema = {
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
          "@type": "ContactPoint",
          "telephone": "+1-888-412-4041",
          "email": "info@myesatherapist.com",
          "contactType": "customer service",
          "areaServed": "US",
          "availableLanguage": ["English"]
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
        "https://www.consumeraffairs.com/pets/my-esa-therapist.html"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://myesatherapist.com/#website",
      "url": "https://myesatherapist.com/",
      "name": "My ESA Therapist",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      }
    },
    {
      "@type": "CollectionPage",
      "@id": "https://myesatherapist.com/esa-guide/#webpage",
      "url": "https://myesatherapist.com/esa-guide/",
      "name": "ESA Guide: Emotional Support Animal Information & Resources | My ESA Therapist",
      "description": "Explore emotional support animal laws, housing rights, ESA benefits, therapist evaluations, and expert guidance in one complete ESA resource center.",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website"
      },
      "about": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "mainEntity": {
        "@type": "ItemList",
        "name": "Featured ESA Guides and Educational Resources",
        "numberOfItems": 7,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ESA Letter Sample: What Does a Legitimate ESA Letter Look Like?",
            "url": "https://myesatherapist.com/blog/esa-guide/esa-letter-sample/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "ESA for Children and Minors: How It Works and Who Signs the Letter?",
            "url": "https://myesatherapist.com/blog/esa-guide/esa-for-children/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Is ESA Registration Legit or Required? The Truth About ESA Registration.",
            "url": "https://myesatherapist.com/blog/esa-guide/is-esa-registration-legit/"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "How to Verify If an ESA Letter Is Legitimate: A Landlord & Tenant Checklist",
            "url": "https://myesatherapist.com/blog/esa-guide/how-to-verify-an-esa-letter/"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "HUD ESA Guidance 2026: What Changed for Emotional Support Animal Housing?",
            "url": "https://myesatherapist.com/blog/esa-guide/hud-guidance-for-emotional-support-animals/"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Can a Landlord Deny an Emotional Support Animal? Know What the Law Says",
            "url": "https://myesatherapist.com/blog/esa-guide/can-landlords-deny-emotional-support-animals/"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "What is an Emotional Support Animal? Everything You Need to Know.",
            "url": "https://myesatherapist.com/blog/esa-guide/emotional-support-animal/"
          }
        ]
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/esa-guide/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/esa-guide/#breadcrumb",
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
          "name": "Resources",
          "item": "https://myesatherapist.com/blog/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "ESA Guide",
          "item": "https://myesatherapist.com/esa-guide/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://myesatherapist.com/esa-guide/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why do people have emotional support animals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many individuals find comfort, companionship, and emotional reassurance through their relationship with an emotional support animal. Companion animals may help support emotional wellness routines and reduce feelings of isolation for some individuals."
          }
        },
        {
          "@type": "Question",
          "name": "Are emotional support animals considered pets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Although emotional support animals are companion animals, certain housing accommodations may apply when an individual has valid documentation from a licensed professional."
          }
        },
        {
          "@type": "Question",
          "name": "Can emotional support animals help with emotional wellness?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some individuals report that emotional support animals help create emotional stability, routine, and companionship during stressful or emotionally difficult periods."
          }
        },
        {
          "@type": "Question",
          "name": "Do emotional support animals require specialized training?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike service animals, emotional support animals are not required to complete task-specific training programs."
          }
        }
      ]
    }
  ]
};
