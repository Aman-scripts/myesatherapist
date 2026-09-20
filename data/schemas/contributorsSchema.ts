export const contributorsSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://myesatherapist.com/contributors/#webpage",
    "url": "https://myesatherapist.com/contributors/",
    "name": "Our Authors & Reviewers | My ESA Therapist",
    "description": "Meet the writers, researchers, and licensed reviewers behind My ESA Therapist's educational content on emotional support animals, ESA laws, and mental health resources.",
    "isPartOf": {
      "@id": "https://myesatherapist.com/#website"
    },
    "about": {
      "@id": "https://myesatherapist.com/#organization"
    },
    "hasPart": [
      {
        "@type": "ItemList",
        "name": "Authors",
        "numberOfItems": 2,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Person",
              "@id": "https://myesatherapist.com/author/allyson-valley/#person",
              "name": "Allyson Valley",
              "honorificSuffix": "Ph.D., LPC",
              "jobTitle": "Mental Health Writer & Research Contributor",
              "url": "https://myesatherapist.com/author/allyson-valley/",
              "image": "https://myesatherapist.com/images/authors/allyson-valley-profile-image.webp ",
              "sameAs": ["https://www.linkedin.com/in/allyson-valley/"],
              "description": "Mental health writer, researcher, and Licensed Professional Counselor with more than 11 years of experience in emotional wellness, counseling support, and crisis management.",
              "worksFor": { "@id": "https://myesatherapist.com/#organization" },
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Licensed Professional Counselor",
                "about": "LPC-MHSP"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Person",
              "@id": "https://myesatherapist.com/author/mohammed-ziauddin/#person",
              "name": "Mohammed Ziauddin",
              "jobTitle": "Legal Writer & Research Contributor",
              "url": "https://myesatherapist.com/author/mohammed-ziauddin/",
              "image": "https://myesatherapist.com/images/authors/mohammed-ziauddin-image.webp ",
              "sameAs": ["https://www.linkedin.com/in/physiozia/"],
              "description": "Legal researcher and writer with 12 years of experience, holding a Master of Physiotherapy in Sports and expertise in health assessment, rehabilitation, and evidence-based healthcare practices.",
              "worksFor": { "@id": "https://myesatherapist.com/#organization" },
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Master of Physiotherapy (MPT), Sports Physiotherapy",
                "about": "Jamia Hamdard University"
              }
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": "Reviewers",
        "numberOfItems": 2,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Person",
              "@id": "https://myesatherapist.com/contributors/awais-arshad/#person",
              "name": "Awais Arshad",
              "jobTitle": "Attorney at Law",
              "url": "https://myesatherapist.com/contributors/awais-arshad/",
              "sameAs": ["https://www.linkedin.com/in/awais-arshad-a51b31113/"],
              "description": "Legal & Compliance Reviewer at My ESA Therapist, reviewing ESA law and housing-rights content for legal accuracy.",
              "worksFor": { "@id": "https://myesatherapist.com/#organization" },
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Attorney at Law"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Person",
              "@id": "https://myesatherapist.com/contributors/max-phillips/#person",
              "name": "Max Phillips",
              "jobTitle": "MSW, LCSW",
              "url": "https://myesatherapist.com/contributors/max-phillips/",
              "description": "LCSW with six years of therapy experience, and ten years of experience in social work as a whole. I have experience providing individual psychotherapy, case management for those with severe and persistent mental illness, domestic violence & sexual assault crisis intervention, and management of supported living environments for those with substance use disorders and developmental disabilities. "
            }
          }
        ]
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://myesatherapist.com/author/allyson-valley/#webpage",
    "url": "https://myesatherapist.com/author/allyson-valley/",
    "name": "Allyson Valley, Ph.D., LPC | My ESA Therapist",
    "mainEntity": {
      "@id": "https://myesatherapist.com/author/allyson-valley/#person"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://myesatherapist.com/author/mohammed-ziauddin/#webpage",
    "url": "https://myesatherapist.com/author/mohammed-ziauddin/",
    "name": "Mohammed Ziauddin | My ESA Therapist",
    "mainEntity": {
      "@id": "https://myesatherapist.com/author/mohammed-ziauddin/#person"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://myesatherapist.com/contributors/awais-arshad/#webpage",
    "url": "https://myesatherapist.com/contributors/awais-arshad/",
    "name": "Awais Arshad, Attorney at Law | My ESA Therapist",
    "mainEntity": {
      "@id": "https://myesatherapist.com/contributors/awais-arshad/#person"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://myesatherapist.com/contributors/max-phillips/#webpage",
    "url": "https://myesatherapist.com/contributors/max-phillips/",
    "name": "Max Phillips | My ESA Therapist",
    "mainEntity": {
      "@id": "https://myesatherapist.com/contributors/max-phillips/#person"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://myesatherapist.com/" },
      { "@type": "ListItem", "position": 2, "name": "Contributors", "item": "https://myesatherapist.com/contributors/" }
    ]
  }
];
