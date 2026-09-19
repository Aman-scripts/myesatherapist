export const esaGuideSchemas = [
  // 1. COLLECTIONPAGE
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://myesatherapist.com/blog/esa-guide/#webpage",
    "url": "https://myesatherapist.com/blog/esa-guide/",
    "name": "ESA Guide: Emotional Support Animal Information & Resources",
    "description": "Explore emotional support animal laws, housing rights, ESA benefits, therapist evaluations, and expert guidance in one complete ESA resource center.",
    "isPartOf": {
      "@id": "https://myesatherapist.com/#website"
    },
    "about": {
      "@id": "https://myesatherapist.com/#organization"
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "ESA Educational Resources",
      "numberOfItems": 7,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "url": "https://myesatherapist.com/blog/esa-guide/esa-letter-sample/",
          "name": "ESA Letter Sample: What Does a Legitimate ESA Letter Look Like?"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "url": "https://myesatherapist.com/blog/esa-guide/esa-for-children/",
          "name": "ESA for Children and Minors: How It Works and Who Signs the Letter?"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "url": "https://myesatherapist.com/blog/esa-guide/is-esa-registration-legit/",
          "name": "Is ESA Registration Legit or Required? The Truth About ESA Registration."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "How to Verify If an ESA Letter Is Legitimate: A Landlord & Tenant Checklist.",
          "url": "https://myesatherapist.com/blog/esa-guide/how-to-verify-an-esa-letter/"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "url": "https://myesatherapist.com/blog/esa-guide/hud-guidance-for-emotional-support-animals/",
          "name": "HUD ESA Guidance 2026: What Changed for Emotional Support Animal Housing?"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Can Landlords Deny Emotional Support Animals? Here's the Truth",
          "url": "https://myesatherapist.com/blog/esa-guide/can-landlords-deny-emotional-support-animals/"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "url": "https://myesatherapist.com/blog/esa-guide/emotional-support-animal/",
          "name": "What is an Emotional Support Animal? Everything You Need to Know."
        }
      ]
    }
  },
  // 2. FAQPAGE — matches the visible "Frequently Asked Questions" section
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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
  },
  // 3. BREADCRUMBLIST
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://myesatherapist.com/" },
      { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://myesatherapist.com/blog/" },
      { "@type": "ListItem", "position": 3, "name": "ESA Guide", "item": "https://myesatherapist.com/blog/esa-guide/" }
    ]
  },
];
