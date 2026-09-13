export const statesSchema = {
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
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/state/#breadcrumb",
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
          "name": "ESA Evaluations by State",
          "item": "https://myesatherapist.com/state/"
        }
      ]
    },
    {
      "@type": "CollectionPage",
      "@id": "https://myesatherapist.com/state/#webpage",
      "url": "https://myesatherapist.com/state/",
      "name": "ESA Evaluations by State | My ESA Therapist",
      "description": "Explore ESA evaluation options by state. Connect with licensed mental health professionals for compliant emotional support animal assessments.",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website"
      },
      "about": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/state/#breadcrumb"
      },
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "primaryImageOfPage": {
        "@id": "https://myesatherapist.com/state/#primaryimage"
      },
      "image": {
        "@id": "https://myesatherapist.com/state/#primaryimage"
      },
      "inLanguage": "en-US",
      "mainEntity": {
        "@id": "https://myesatherapist.com/state/#state-list"
      }
    },
    {
      "@type": "ImageObject",
      "@id": "https://myesatherapist.com/state/#primaryimage",
      "url": "https://myesatherapist.com/images/pages/person-with-esa-image.webp",
      "contentUrl": "https://myesatherapist.com/images/pages/person-with-esa-image.webp",
      "caption": "ESA Owner with Emotional Support Animal"
    },
    {
      "@type": "ItemList",
      "@id": "https://myesatherapist.com/state/#state-list",
      "name": "Choose Your State For ESA Evaluation",
      "description": "Learn about emotional support animal rules, evaluation requirements, and housing protections in your state.",
      "numberOfItems": 52,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "ESA Letter Alabama",
          "url": "https://myesatherapist.com/esa-letter-alabama/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "ESA Letter California",
          "url": "https://myesatherapist.com/esa-letter-california/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "ESA Letter Florida",
          "url": "https://myesatherapist.com/esa-letter-florida/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "ESA Letter Illinois",
          "url": "https://myesatherapist.com/esa-letter-illinois/"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "ESA Letter Kentucky",
          "url": "https://myesatherapist.com/esa-letter-kentucky/"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "ESA Letter Massachusetts",
          "url": "https://myesatherapist.com/esa-letter-massachusetts/"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "ESA Letter Missouri",
          "url": "https://myesatherapist.com/esa-letter-missouri/"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "ESA Letter New Hampshire",
          "url": "https://myesatherapist.com/esa-letter-new-hampshire/"
        },
        {
          "@type": "ListItem",
          "position": 9,
          "name": "ESA Letter North Carolina",
          "url": "https://myesatherapist.com/esa-letter-north-carolina/"
        },
        {
          "@type": "ListItem",
          "position": 10,
          "name": "ESA Letter Oregon",
          "url": "https://myesatherapist.com/esa-letter-oregon/"
        },
        {
          "@type": "ListItem",
          "position": 11,
          "name": "ESA Letter Tennessee",
          "url": "https://myesatherapist.com/esa-letter-tennessee/"
        },
        {
          "@type": "ListItem",
          "position": 12,
          "name": "ESA Letter Texas",
          "url": "https://myesatherapist.com/esa-letter-texas/"
        },
        {
          "@type": "ListItem",
          "position": 13,
          "name": "ESA Letter Washington",
          "url": "https://myesatherapist.com/esa-letter-washington/"
        },
        {
          "@type": "ListItem",
          "position": 14,
          "name": "ESA Letter Alaska",
          "url": "https://myesatherapist.com/esa-letter-alaska/"
        },
        {
          "@type": "ListItem",
          "position": 15,
          "name": "ESA Letter Colorado",
          "url": "https://myesatherapist.com/esa-letter-colorado/"
        },
        {
          "@type": "ListItem",
          "position": 16,
          "name": "ESA Letter Georgia",
          "url": "https://myesatherapist.com/esa-letter-georgia/"
        },
        {
          "@type": "ListItem",
          "position": 17,
          "name": "ESA Letter Indiana",
          "url": "https://myesatherapist.com/esa-letter-indiana/"
        },
        {
          "@type": "ListItem",
          "position": 18,
          "name": "ESA Letter Louisiana",
          "url": "https://myesatherapist.com/esa-letter-louisiana/"
        },
        {
          "@type": "ListItem",
          "position": 19,
          "name": "ESA Letter Michigan",
          "url": "https://myesatherapist.com/esa-letter-michigan/"
        },
        {
          "@type": "ListItem",
          "position": 20,
          "name": "ESA Letter Montana",
          "url": "https://myesatherapist.com/esa-letter-montana/"
        },
        {
          "@type": "ListItem",
          "position": 21,
          "name": "ESA Letter New Jersey",
          "url": "https://myesatherapist.com/esa-letter-new-jersey/"
        },
        {
          "@type": "ListItem",
          "position": 22,
          "name": "ESA Letter North Dakota",
          "url": "https://myesatherapist.com/esa-letter-north-dakota/"
        },
        {
          "@type": "ListItem",
          "position": 23,
          "name": "ESA Letter Pennsylvania",
          "url": "https://myesatherapist.com/esa-letter-pennsylvania/"
        },
        {
          "@type": "ListItem",
          "position": 24,
          "name": "ESA Letter Utah",
          "url": "https://myesatherapist.com/esa-letter-utah/"
        },
        {
          "@type": "ListItem",
          "position": 25,
          "name": "ESA Letter West Virginia",
          "url": "https://myesatherapist.com/esa-letter-west-virginia/"
        },
        {
          "@type": "ListItem",
          "position": 26,
          "name": "ESA Letter Wisconsin",
          "url": "https://myesatherapist.com/esa-letter-wisconsin/"
        },
        {
          "@type": "ListItem",
          "position": 27,
          "name": "ESA Letter Arizona",
          "url": "https://myesatherapist.com/esa-letter-arizona/"
        },
        {
          "@type": "ListItem",
          "position": 28,
          "name": "ESA Letter Connecticut",
          "url": "https://myesatherapist.com/esa-letter-connecticut/"
        },
        {
          "@type": "ListItem",
          "position": 29,
          "name": "ESA Letter Hawaii",
          "url": "https://myesatherapist.com/esa-letter-hawaii/"
        },
        {
          "@type": "ListItem",
          "position": 30,
          "name": "ESA Letter Iowa",
          "url": "https://myesatherapist.com/esa-letter-iowa/"
        },
        {
          "@type": "ListItem",
          "position": 31,
          "name": "ESA Letter Maine",
          "url": "https://myesatherapist.com/esa-letter-maine/"
        },
        {
          "@type": "ListItem",
          "position": 32,
          "name": "ESA Letter Minnesota",
          "url": "https://myesatherapist.com/esa-letter-minnesota/"
        },
        {
          "@type": "ListItem",
          "position": 33,
          "name": "ESA Letter Nebraska",
          "url": "https://myesatherapist.com/esa-letter-nebraska/"
        },
        {
          "@type": "ListItem",
          "position": 34,
          "name": "ESA Letter New Mexico",
          "url": "https://myesatherapist.com/esa-letter-new-mexico/"
        },
        {
          "@type": "ListItem",
          "position": 35,
          "name": "ESA Letter Ohio",
          "url": "https://myesatherapist.com/esa-letter-ohio/"
        },
        {
          "@type": "ListItem",
          "position": 36,
          "name": "ESA Letter Rhode Island",
          "url": "https://myesatherapist.com/esa-letter-rhode-island/"
        },
        {
          "@type": "ListItem",
          "position": 37,
          "name": "ESA Letter South Carolina",
          "url": "https://myesatherapist.com/esa-letter-south-carolina/"
        },
        {
          "@type": "ListItem",
          "position": 38,
          "name": "ESA Letter Vermont",
          "url": "https://myesatherapist.com/esa-letter-vermont/"
        },
        {
          "@type": "ListItem",
          "position": 39,
          "name": "ESA Letter Puerto Rico",
          "url": "https://myesatherapist.com/esa-letter-puerto-rico/"
        },
        {
          "@type": "ListItem",
          "position": 40,
          "name": "ESA Letter Arkansas",
          "url": "https://myesatherapist.com/esa-letter-arkansas/"
        },
        {
          "@type": "ListItem",
          "position": 41,
          "name": "ESA Letter Delaware",
          "url": "https://myesatherapist.com/esa-letter-delaware/"
        },
        {
          "@type": "ListItem",
          "position": 42,
          "name": "ESA Letter Idaho",
          "url": "https://myesatherapist.com/esa-letter-idaho/"
        },
        {
          "@type": "ListItem",
          "position": 43,
          "name": "ESA Letter Kansas",
          "url": "https://myesatherapist.com/esa-letter-kansas/"
        },
        {
          "@type": "ListItem",
          "position": 44,
          "name": "ESA Letter Maryland",
          "url": "https://myesatherapist.com/esa-letter-maryland/"
        },
        {
          "@type": "ListItem",
          "position": 45,
          "name": "ESA Letter Mississippi",
          "url": "https://myesatherapist.com/esa-letter-mississippi/"
        },
        {
          "@type": "ListItem",
          "position": 46,
          "name": "ESA Letter Nevada",
          "url": "https://myesatherapist.com/esa-letter-nevada/"
        },
        {
          "@type": "ListItem",
          "position": 47,
          "name": "ESA Letter New York",
          "url": "https://myesatherapist.com/esa-letter-new-york/"
        },
        {
          "@type": "ListItem",
          "position": 48,
          "name": "ESA Letter Oklahoma",
          "url": "https://myesatherapist.com/esa-letter-oklahoma/"
        },
        {
          "@type": "ListItem",
          "position": 49,
          "name": "ESA Letter South Dakota",
          "url": "https://myesatherapist.com/esa-letter-south-dakota/"
        },
        {
          "@type": "ListItem",
          "position": 50,
          "name": "ESA Letter Virginia",
          "url": "https://myesatherapist.com/esa-letter-virginia/"
        },
        {
          "@type": "ListItem",
          "position": 51,
          "name": "ESA Letter Wyoming",
          "url": "https://myesatherapist.com/esa-letter-wyoming/"
        },
        {
          "@type": "ListItem",
          "position": 52,
          "name": "ESA Letter Guam",
          "url": "https://myesatherapist.com/esa-letter-guam/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://myesatherapist.com/state/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which States Have the Strict ESA Laws?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "States like California, Montana, Arkansas, Louisiana, and Iowa require ESA owners to have at least a 30-day relationship with their mental health professional before an ESA evaluation can be conducted."
          }
        },
        {
          "@type": "Question",
          "name": "Can a Landlord Deny an ESA in Any State?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under the Fair Housing Act (FHA), landlords cannot deny an emotional support animal (ESA) as long as you have a legitimate ESA letter based on an evaluation conducted by a licensed professional."
          }
        },
        {
          "@type": "Question",
          "name": "Can an Online ESA Letter Be Valid in My State?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if the letter comes from a licensed mental health professional who conducts a legitimate telehealth evaluation. Documentation generated instantly or through automated processes without a proper clinical assessment may be rejected by housing providers."
          }
        },
        {
          "@type": "Question",
          "name": "Do ESA Owners Need Additional Documentation in Certain States?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally, a valid ESA letter is sufficient in all 50 states. However, some states require an established 30-day patient-provider relationship with the licensed mental health professional conducting the evaluation. Many states also note that ESA letters expire after 12 months and must be renewed."
          }
        },
        {
          "@type": "Question",
          "name": "Can I Use an ESA Letter From Another State?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You generally cannot use emotional support documentation issued by a professional licensed in another state. The evaluation must be completed by a mental health professional licensed in the state where you currently reside to meet state-specific requirements and Fair Housing Act (FHA) standards. States such as California, Arkansas, Iowa, Louisiana, and Montana also require an established patient-provider relationship. If you move, a new in-state evaluation is typically needed to remain compliant."
          }
        }
      ]
    }
  ]
};
