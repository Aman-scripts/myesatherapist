export const pricingSchema = {
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
      "@id": "https://myesatherapist.com/pricing/#breadcrumb",
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
          "name": "Pricing",
          "item": "https://myesatherapist.com/pricing/"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://myesatherapist.com/pricing/#webpage",
      "url": "https://myesatherapist.com/pricing/",
      "name": "How Much Does an ESA Letter Cost in 2026? | My ESA Therapist",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/pricing/#breadcrumb"
      },
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "inLanguage": "en-US",
      "mainEntity": [
        {
          "@id": "https://myesatherapist.com/pricing/#esa-letter"
        },
        {
          "@id": "https://myesatherapist.com/pricing/#esa-letter-id"
        },
        {
          "@id": "https://myesatherapist.com/pricing/#psd-letter"
        },
        {
          "@id": "https://myesatherapist.com/pricing/#psd-letter-id"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://myesatherapist.com/pricing/#esa-letter",
      "name": "ESA Letter",
      "description": "Official ESA letter from a U.S.-licensed mental health professional, valid for housing accommodations under federal guidelines.",
      "serviceType": "Online ESA Letter Evaluation (Telehealth)",
      "provider": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "offers": {
        "@id": "https://myesatherapist.com/pricing/#offer-esa-letter"
      }
    },
    {
      "@type": "Offer",
      "@id": "https://myesatherapist.com/pricing/#offer-esa-letter",
      "name": "ESA Letter",
      "price": "149",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "url": "https://myesatherapist.com/pricing/",
      "itemOffered": {
        "@id": "https://myesatherapist.com/pricing/#esa-letter"
      },
      "seller": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "description": "Card is authorized at booking to hold the appointment slot. The charge is only collected after the telehealth evaluation is completed and the individual is approved by the licensed professional. If not approved, no charge is made."
    },
    {
      "@type": "ItemList",
      "@id": "https://myesatherapist.com/pricing/#esa-letter-features",
      "name": "What's Included: ESA Letter",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Live telehealth evaluation with licensed LMHP"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Official ESA letter emailed upon approval"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Compliant with federal housing (FHA) guidelines"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Valid across all 50 U.S. states"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "HIPAA-secure telehealth platform"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://myesatherapist.com/pricing/#esa-letter-id",
      "name": "ESA Letter + ID Card",
      "description": "Everything in the ESA Letter package, plus an official ESA ID card for easy identification of your emotional support animal.",
      "serviceType": "Online ESA Letter Evaluation (Telehealth) with ID Card",
      "provider": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "offers": {
        "@id": "https://myesatherapist.com/pricing/#offer-esa-letter-id"
      }
    },
    {
      "@type": "Offer",
      "@id": "https://myesatherapist.com/pricing/#offer-esa-letter-id",
      "name": "ESA Letter + ID Card",
      "price": "199",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "url": "https://myesatherapist.com/pricing/",
      "itemOffered": {
        "@id": "https://myesatherapist.com/pricing/#esa-letter-id"
      },
      "seller": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "description": "Card is authorized at booking to hold the appointment slot. The charge is only collected after the telehealth evaluation is completed and the individual is approved by the licensed professional. If not approved, no charge is made."
    },
    {
      "@type": "ItemList",
      "@id": "https://myesatherapist.com/pricing/#esa-letter-id-features",
      "name": "What's Included: ESA Letter + ID Card",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Everything in ESA Letter, plus:"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Official ESA ID card for your animal"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Easy identification for landlords & property managers"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "HIPAA-secure telehealth platform"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Valid across all 50 U.S. states"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://myesatherapist.com/pricing/#psd-letter",
      "name": "PSD Letter",
      "description": "Psychiatric Service Dog recommendation letter from a licensed professional, supporting broader rights under the ADA.",
      "serviceType": "Online Psychiatric Service Dog Letter Evaluation (Telehealth)",
      "provider": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "offers": {
        "@id": "https://myesatherapist.com/pricing/#offer-psd-letter"
      }
    },
    {
      "@type": "Offer",
      "@id": "https://myesatherapist.com/pricing/#offer-psd-letter",
      "name": "PSD Letter",
      "price": "149",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "url": "https://myesatherapist.com/pricing/",
      "itemOffered": {
        "@id": "https://myesatherapist.com/pricing/#psd-letter"
      },
      "seller": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "description": "Card is authorized at booking to hold the appointment slot. The charge is only collected after the telehealth evaluation is completed and the individual is approved by the licensed professional. If not approved, no charge is made."
    },
    {
      "@type": "ItemList",
      "@id": "https://myesatherapist.com/pricing/#psd-letter-features",
      "name": "What's Included: PSD Letter",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Live telehealth evaluation with licensed LMHP"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "PSD recommendation letter emailed upon approval"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "ADA-aligned documentation for task-trained dogs"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Housing & public access documentation"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "HIPAA-secure telehealth platform"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://myesatherapist.com/pricing/#psd-letter-id",
      "name": "PSD Letter + ID Card",
      "description": "Everything in the PSD Letter package, plus an official PSD ID card for clear identification of your psychiatric service dog.",
      "serviceType": "Online Psychiatric Service Dog Letter Evaluation (Telehealth) with ID Card",
      "provider": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "offers": {
        "@id": "https://myesatherapist.com/pricing/#offer-psd-letter-id"
      }
    },
    {
      "@type": "Offer",
      "@id": "https://myesatherapist.com/pricing/#offer-psd-letter-id",
      "name": "PSD Letter + ID Card",
      "price": "199",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "url": "https://myesatherapist.com/pricing/",
      "itemOffered": {
        "@id": "https://myesatherapist.com/pricing/#psd-letter-id"
      },
      "seller": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "description": "Card is authorized at booking to hold the appointment slot. The charge is only collected after the telehealth evaluation is completed and the individual is approved by the licensed professional. If not approved, no charge is made."
    },
    {
      "@type": "ItemList",
      "@id": "https://myesatherapist.com/pricing/#psd-letter-id-features",
      "name": "What's Included: PSD Letter + ID Card",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Everything in PSD Letter, plus:"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Official PSD ID card for your service dog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Easy identification in housing & public settings"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "ADA-aligned documentation"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "HIPAA-secure telehealth platform"
        }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://myesatherapist.com/pricing/#howto",
      "name": "You Only Pay After Your Evaluation",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Select Your Package",
          "text": "Choose the ESA or PSD option that fits your needs and schedule your appointment."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Card Authorization",
          "text": "Your card is authorized (not charged) to hold your appointment slot."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Attend Evaluation",
          "text": "Speak with a U.S.-licensed mental health professional via secure telehealth."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Receive Your Letter",
          "text": "If approved, payment is collected and your letter is emailed immediately."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://myesatherapist.com/pricing/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When exactly is my card charged?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your card is authorized at booking to hold your appointment slot, but the actual charge only occurs after your telehealth evaluation is completed and you are approved by the licensed professional. If not approved, no charge is made."
          }
        },
        {
          "@type": "Question",
          "name": "What is included in the ID Card?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The ID card is a supplementary identification document for your ESA or PSD. It makes it easier to identify your animal to landlords and property managers. Note that ID cards alone do not convey legal rights -- the letter remains the primary legal document."
          }
        },
        {
          "@type": "Question",
          "name": "Are there any hidden fees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The price listed is the price you pay -- no registration fees, platform fees, or additional charges beyond the selected package price."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between ESA and PSD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An Emotional Support Animal (ESA) provides comfort through companionship and is recognized under housing laws (FHA). A Psychiatric Service Dog (PSD) is trained to perform specific tasks for a psychiatric disability and has broader rights under the ADA including public access. Both require a clinical evaluation."
          }
        },
        {
          "@type": "Question",
          "name": "Can I add more than one pet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Each animal requires its own clinical evaluation and documentation. You can select the 'More than one pet' add-on during checkout to include coverage for a second or additional animal."
          }
        }
      ]
    }
  ]
};
