export const esaDoctorsSchema = {
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
      "@id": "https://myesatherapist.com/esa-doctors/#webpage",
      "url": "https://myesatherapist.com/esa-doctors/",
      "name": "Licensed Therapists for ESA Letters | My ESA Therapist",
      "description": "Browse our network of licensed ESA doctors and therapists. Get evaluated online and receive a legally valid emotional support animal letter securely.",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website"
      },
      "about": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/esa-doctors/#breadcrumb"
      },
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "inLanguage": "en-US",
      "mainEntity": {
        "@id": "https://myesatherapist.com/esa-doctors/#provider-list"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/esa-doctors/#breadcrumb",
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
          "name": "Our Therapists",
          "item": "https://myesatherapist.com/esa-doctors/"
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://myesatherapist.com/esa-doctors/dr-robert-staff/#person",
      "name": "Robert Staaf",
      "jobTitle": "Licensed Clinical Social Worker",
      "description": "Robert Staaf, LCSW is an Independent Clinical Social Worker and Therapist, currently licensed to practice at the clinical level in over 30 states. He has extensive experience in psychotherapy and child and family welfare, and is an advocate for highlighting how animals can be utilized in mental health treatment.",
      "image": {
        "@type": "ImageObject",
        "url": "https://myesatherapist.com/images/doctors/Robert_Staff_Dr.webp"
      },
      "url": "https://myesatherapist.com/esa-doctors/dr-robert-staff/",
      "sameAs": [
        "https://www.linkedin.com/in/robert-staaf-b57b53333/"
      ],
      "affiliation": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "knowsAbout": [
        "Emotional Support Animal Evaluations",
        "Psychotherapy",
        "Anxiety",
        "Stress-related concerns",
        "Emotional well-being"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://myesatherapist.com/esa-doctors/dr-leslie-k-gamble/#person",
      "name": "Leslie K. Gamble",
      "jobTitle": "Licensed Independent Clinical Social Worker",
      "description": "Leslie Gamble is a licensed therapist with 13 years of experience primarily in the healthcare field, working with individuals of all ages as well as couples and families. She values flexible, patient-focused care and implements practical homework assignments to help clients continue progress outside of sessions.",
      "image": {
        "@type": "ImageObject",
        "url": "https://myesatherapist.com/images/doctors/Leslie_kgamble_Dr.webp"
      },
      "url": "https://myesatherapist.com/esa-doctors/dr-leslie-k-gamble/",
      "sameAs": [
        "https://www.linkedin.com/in/leslie-gamble-727571366"
      ],
      "affiliation": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "knowsAbout": [
        "Emotional Support Animal Evaluations",
        "Anxiety",
        "Depression",
        "PTSD"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://myesatherapist.com/esa-doctors/dr-gaurav-patel/#person",
      "name": "Gaurav Patel, MD",
      "jobTitle": "Family Medicine Physician",
      "description": "Dr. Gaurav Patel is a board-certified family medicine physician with experience providing evidence-based care across inpatient, urgent care, outpatient, and telemedicine settings, combining clinical assessment, diagnostic expertise, and patient education.",
      "image": {
        "@type": "ImageObject",
        "url": "https://myesatherapist.com/images/doctors/Gaurav_patel_Dr.webp"
      },
      "url": "https://myesatherapist.com/esa-doctors/dr-gaurav-patel/",
      "sameAs": [
        "https://www.linkedin.com/in/gaurav-patel-m-d-b5565916"
      ],
      "affiliation": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "knowsAbout": [
        "Depressive Disorders",
        "Anxiety-Related Conditions",
        "Chronic Health Conditions"
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://myesatherapist.com/esa-doctors/#provider-list",
      "name": "Our Licensed Mental Health Professionals",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": "https://myesatherapist.com/esa-doctors/dr-robert-staff/#person"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@id": "https://myesatherapist.com/esa-doctors/dr-leslie-k-gamble/#person"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://myesatherapist.com/esa-doctors/dr-gaurav-patel/#person"
          }
        }
      ]
    }
  ]
};
