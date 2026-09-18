export const robertStaafSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://myesatherapist.com/esa-doctors/dr-robert-staff/#webpage",
    "url": "https://myesatherapist.com/esa-doctors/dr-robert-staff/",
    "name": "Robert Staaf, LCSW | My ESA Therapist",
    "description": "Profile of Robert Staaf, a Licensed Clinical Social Worker (LCSW) with My ESA Therapist, specializing in ESA evaluations, anxiety, and stress-related care.",
    "isPartOf": {
      "@id": "https://myesatherapist.com/#website"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://myesatherapist.com/images/doctors/robert-staaf.webp"
    },
    "mainEntity": {
      "@type": "Person",
      "@id": "https://myesatherapist.com/esa-doctors/dr-robert-staff/#person",
      "name": "Robert Staaf",
      "jobTitle": "Licensed Clinical Social Worker (LCSW)",
      "url": "https://myesatherapist.com/esa-doctors/dr-robert-staff/",
      "image": "https://myesatherapist.com/images/doctors/robert-staaf.webp",
      "sameAs": [
        "https://www.linkedin.com/in/robert-staaf-b57b53333/"
      ],
      "description": "LCSW licensed in 30+ states with extensive psychotherapy experience. Pet owner and advocate for animal-assisted mental health treatment. Focus areas: Anxiety, Stress, Emotional well-being.",
      "worksFor": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Licensed Clinical Social Worker",
        "about": "Licensed in 30+ US states"
      },
      "knowsAbout": [
        "Anxiety",
        "Stress",
        "Emotional well-being",
        "Emotional Support Animal Evaluations"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "6549",
        "bestRating": "5",
        "worstRating": "1"
      }
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
        "name": "ESA Doctors",
        "item": "https://myesatherapist.com/esa-doctors/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Dr. Robert Staaf",
        "item": "https://myesatherapist.com/esa-doctors/dr-robert-staff/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Emotional Support Animal (ESA) Evaluation",
    "name": "ESA Evaluation with Robert Staaf, LCSW",
    "url": "https://myesatherapist.com/esa-doctors/dr-robert-staff/",
    "provider": {
      "@id": "https://myesatherapist.com/esa-doctors/dr-robert-staff/#person"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://myesatherapist.videovisitmd.com/f/vshop-signIN?straitTo=schedule",
      "serviceType": "Telehealth (Video or Phone Consultation)"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What states is Robert Staaf licensed in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Robert Staaf is a Licensed Clinical Social Worker (LCSW) licensed in over 30 U.S. states."
        }
      },
      {
        "@type": "Question",
        "name": "What does Robert Staaf specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Robert Staaf focuses on anxiety, stress, and emotional well-being, with a particular interest in animal-assisted mental health treatment and ESA evaluations."
        }
      }
    ]
  }
];
