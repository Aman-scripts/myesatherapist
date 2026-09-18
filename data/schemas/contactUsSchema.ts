export const contactUsSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://myesatherapist.com/contact-us/#webpage",
    "url": "https://myesatherapist.com/contact-us/",
    "name": "Contact My ESA Therapist",
    "description": "Get in touch with My ESA Therapist for questions about ESA evaluations, appointments, or existing ESA letters.",
    "isPartOf": {
      "@id": "https://myesatherapist.com/#website"
    },
    "about": {
      "@id": "https://myesatherapist.com/#organization"
    },
    "mainEntity": {
      "@type": "Organization",
      "@id": "https://myesatherapist.com/#organization",
      "name": "My ESA Therapist",
      "url": "https://myesatherapist.com/",
      "email": "info@myesatherapist.com",
      "telephone": "+1-888-412-4041",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "780 Lynnhaven Pkwy #400",
        "addressLocality": "Virginia Beach",
        "addressRegion": "VA",
        "postalCode": "23452",
        "addressCountry": "US"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-888-412-4041",
          "email": "info@myesatherapist.com",
          "contactType": "customer service",
          "areaServed": "US",
          "availableLanguage": ["English"],
          "hoursAvailable": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "18:00"
            }
          ]
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        "name": "Contact Us",
        "item": "https://myesatherapist.com/contact-us/"
      }
    ]
  }
];
