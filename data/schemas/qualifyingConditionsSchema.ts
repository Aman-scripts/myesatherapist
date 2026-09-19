export const qualifyingConditionsSchemas = [
  // 1. COLLECTIONPAGE
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://myesatherapist.com/blog/qualifying-conditions/#webpage",
    "url": "https://myesatherapist.com/blog/qualifying-conditions/",
    "name": "Qualifying Conditions for an Emotional Support Animal (ESA) Letter",
    "description": "Explore mental health conditions that may qualify for an ESA letter, including anxiety, depression, PTSD, ADHD, and panic disorder. Learn about ESA eligibility.",
    "isPartOf": {
      "@id": "https://myesatherapist.com/#website"
    },
    "about": {
      "@id": "https://myesatherapist.com/#organization"
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "ESA Qualifying Conditions Guides",
      "numberOfItems": 2,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "url": "https://myesatherapist.com/blog/qualifying-conditions/conditions-that-may-qualify-for-an-esa/",
          "name": "What DSM-5 Conditions May Qualify for an ESA?"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "url": "https://myesatherapist.com/blog/qualifying-conditions/esa-for-anxiety/",
          "name": "Can I Get an Emotional Support Animal for Anxiety?"
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
        "name": "What conditions may qualify someone for an ESA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Conditions such as anxiety, depression, PTSD, panic disorder, and other emotional or mental health challenges may qualify, depending on an individual's circumstances and professional evaluation."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a diagnosis to get an ESA letter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A licensed mental health professional must determine whether an emotional support animal is appropriate based on your mental or emotional health needs."
        }
      },
      {
        "@type": "Question",
        "name": "Can any animal be an emotional support animal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many types of animals can serve as ESAs if they provide emotional support that helps alleviate symptoms of a qualifying condition."
        }
      },
      {
        "@type": "Question",
        "name": "How do emotional support animals help people?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ESAs can provide comfort, companionship, and emotional stability, which may help reduce feelings of stress, anxiety, loneliness, or other mental health symptoms."
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
      { "@type": "ListItem", "position": 3, "name": "Qualifying Conditions", "item": "https://myesatherapist.com/blog/qualifying-conditions/" }
    ]
  }
];
