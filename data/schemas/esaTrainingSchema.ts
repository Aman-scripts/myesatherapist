export const esaTrainingSchemas = [
  // 1. COLLECTIONPAGE
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://myesatherapist.com/blog/esa-training/#webpage",
    "url": "https://myesatherapist.com/blog/esa-training/",
    "name": "ESA Training Guide: Tips, Rules & Resources (2026)",
    "description": "Explore our full library of ESA training guides from HUD rules and legal requirements to breed-specific tips, FAQs, and expert advice, updated for 2026.",
    "isPartOf": {
      "@id": "https://myesatherapist.com/#website"
    },
    "about": {
      "@id": "https://myesatherapist.com/#organization"
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "ESA Training Guides",
      "numberOfItems": 1,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "url": "https://myesatherapist.com/blog/esa-training/8-basic-obedience-commands-every-esa-should-know/",
          "name": "8 Basic Obedience Commands Every ESA Should Know"
        }
      ]
    }
  },

  // 2. FAQPAGE
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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
          "text": "Legally, landlords still generally have to consider an accommodation request under the Fair Housing Act. With HUD's 2026 enforcement shift, a well-behaved animal and strong documentation matter more than they used to."
        }
      },
      {
        "@type": "Question",
        "name": "Can an aggressive animal qualify as an ESA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An animal can be prescribed as an ESA, but reasonable accommodation has never required landlords to tolerate genuinely dangerous or destructive behavior. Training protects both the animal and the owner's housing rights."
        }
      },
      {
        "@type": "Question",
        "name": "How long does ESA training take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on the animal and the behaviors being worked on. Basic obedience can be achieved in a few weeks of consistent practice, while more complex behavioral work can take several months."
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
      { "@type": "ListItem", "position": 3, "name": "ESA Training", "item": "https://myesatherapist.com/blog/esa-training/" }
    ]
  }
];
