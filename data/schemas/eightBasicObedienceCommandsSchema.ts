export const eightBasicObedienceCommandsSchema = {
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
      "@type": "Blog",
      "@id": "https://myesatherapist.com/blog/#blog",
      "url": "https://myesatherapist.com/blog/",
      "name": "ESA Blog: Emotional Support Animal Articles & Resources",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website"
      }
    },
    {
      "@type": "CollectionPage",
      "@id": "https://myesatherapist.com/blog/esa-training/#category",
      "url": "https://myesatherapist.com/blog/esa-training/",
      "name": "ESA Training",
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/#blog"
      }
    },
    {
      "@type": "Person",
      "@id": "https://myesatherapist.com/author/allyson-valley/#person",
      "name": "Allyson Valley",
      "url": "https://myesatherapist.com/author/allyson-valley/",
      "jobTitle": "Mental Health Writer & Research Contributor",
      "description": "Licensed Professional Counselor (LPC-MHSP), Ph.D. in Counselor Education & Supervision, with experience across crisis services, behavioral health programs, and healthcare systems.",
      "image": "https://myesatherapist.com/images/authors/allyson-valley-image.webp",
      "sameAs": [
        "https://www.linkedin.com/in/allyson-valley/"
      ],
      "worksFor": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Licensed Professional Counselor (LPC-MHSP)"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Ph.D., Counselor Education and Supervision",
          "recognizedBy": {
            "@type": "CollegeOrUniversity",
            "name": "Capella University"
          }
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.linkedin.com/in/max-phillips-883485a5/#person",
      "name": "Max Phillips",
      "url": "https://www.linkedin.com/in/max-phillips-883485a5/",
      "jobTitle": "MSW, LCSW",
      "image": "https://myesatherapist.com/images/reviewers/max-phillips-image.webp",
      "sameAs": [
        "https://www.linkedin.com/in/max-phillips-883485a5/"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Master of Social Work (MSW)"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Licensed Clinical Social Worker (LCSW)"
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://myesatherapist.com/esa-doctors/dr-gaurav-patel/#person",
      "name": "Gaurav Patel, MD",
      "url": "https://myesatherapist.com/esa-doctors/dr-gaurav-patel/",
      "jobTitle": "Family Medicine Physician",
      "worksFor": {
        "@id": "https://myesatherapist.com/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/blog/esa-training/8-basic-obedience-commands-every-esa-should-know/#breadcrumb",
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
          "name": "Blog",
          "item": "https://myesatherapist.com/blog/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "ESA Training",
          "item": "https://myesatherapist.com/blog/esa-training/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "8 Basic Obedience Commands Every ESA Should Know",
          "item": "https://myesatherapist.com/blog/esa-training/8-basic-obedience-commands-every-esa-should-know/"
        }
      ]
    },
    {
      "@type": "BlogPosting",
      "@id": "https://myesatherapist.com/blog/esa-training/8-basic-obedience-commands-every-esa-should-know/#blogposting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://myesatherapist.com/blog/esa-training/8-basic-obedience-commands-every-esa-should-know/"
      },
      "url": "https://myesatherapist.com/blog/esa-training/8-basic-obedience-commands-every-esa-should-know/",
      "headline": "8 Basic Obedience Commands Every ESA Should Know.",
      "description": "Explore 8 basic commands to help train your emotional support animal, improve behavior, and make everyday interactions easier and more predictable.",
      "image": "https://myesatherapist.com/images/blog/training-an-esa-image.jpg",
      "articleSection": "ESA Training",
      "datePublished": "2026-09-11T06:59:52+00:00",
      "dateModified": "2026-09-11T06:59:54+00:00",
      "author": {
        "@id": "https://myesatherapist.com/author/allyson-valley/#person"
      },
      "reviewedBy": {
        "@id": "https://www.linkedin.com/in/max-phillips-883485a5/#person"
      },
      "lastReviewed": "2026-09-11T06:59:54+00:00",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/#blog"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/blog/esa-training/8-basic-obedience-commands-every-esa-should-know/#breadcrumb"
      },
      "inLanguage": "en-US",
      "keywords": "esa behavior"
    },
    {
      "@type": "Quotation",
      "@id": "https://myesatherapist.com/blog/esa-training/8-basic-obedience-commands-every-esa-should-know/#quote-patel",
      "text": "A well-trained emotional support animal can be easier to manage during stressful moments, giving owners greater confidence and helping create a calmer environment when they need support most.",
      "creator": {
        "@id": "https://myesatherapist.com/esa-doctors/dr-gaurav-patel/#person"
      },
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/esa-training/8-basic-obedience-commands-every-esa-should-know/#blogposting"
      }
    },
    {
      "@type": "HowTo",
      "@id": "https://myesatherapist.com/blog/esa-training/8-basic-obedience-commands-every-esa-should-know/#howto",
      "name": "8 Basic Obedience Commands Every ESA Should Know",
      "description": "Sit, stay, come, down, leave it, quiet, place, and heel are eight foundational commands that can help make an emotional support animal calmer, safer, and easier to manage.",
      "image": "https://myesatherapist.com/images/blog/basic-commands-for-esas-image.jpg",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Sit",
          "text": "Handy for guests at the door, waiting rooms, or getting your animal to settle into a new place. Most animals pick it up within a few sessions with treats."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Stay",
          "text": "Builds on sit by adding further self-control. Useful in elevators or waiting rooms. Start with a few seconds and stretch it out over time."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Come",
          "text": "Matters most in an emergency, such as a slipped leash or an open door. Practice somewhere quiet first before trying it in a busier spot."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Down",
          "text": "Puts the animal into a low, relaxed posture for longer waits, and doubles as a signal to calm down during distress."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Leave It",
          "text": "Teaches the ESA to ignore food, other animals, or anything it shouldn't be near or chew."
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Quiet",
          "text": "Non-negotiable if barking is an issue, especially in an apartment, and helps when relying on Fair Housing Act protections."
        },
        {
          "@type": "HowToStep",
          "position": 7,
          "name": "Place (or Settle)",
          "text": "Sends the animal to a specific spot and keeps it there until told otherwise -- useful when guests come over or during meals."
        },
        {
          "@type": "HowToStep",
          "position": 8,
          "name": "Heel",
          "text": "Calm, focused walking without pulling or lunging, making outings less stressful."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://myesatherapist.com/blog/esa-training/8-basic-obedience-commands-every-esa-should-know/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does An ESA Need To Be Trained Like A Service Animal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. ESAs do not have the same task-training requirements as service animals. However, basic obedience training can make everyday life safer and easier."
          }
        },
        {
          "@type": "Question",
          "name": "How Long Should I Train My ESA Each Day?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Short sessions of about five to ten minutes can be effective. Consistent practice, positive reinforcement, and gradual exposure to distractions can help build reliable behavior."
          }
        },
        {
          "@type": "Question",
          "name": "What Are The Most Important Commands For An ESA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sit, stay, come, down, leave it, quiet, place, and heel are useful foundational commands. They can help your ESA remain calm and manageable in different situations."
          }
        },
        {
          "@type": "Question",
          "name": "Should I Hire A Professional To Train My ESA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Many basic commands can be taught at home with patience and positive reinforcement. A certified trainer or behaviorist may help when training becomes difficult or your animal has specific behavioral concerns."
          }
        },
        {
          "@type": "Question",
          "name": "Can Training Make An ESA More Helpful During Stressful Situations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A well-trained animal may respond more reliably to commands when you are stressed. Calm, predictable behavior can also make the human-animal bond easier to maintain."
          }
        }
      ]
    }
  ]
};
