export const conditionsThatMayQualifySchema = {
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
      "@id": "https://myesatherapist.com/blog/qualifying-conditions/#category",
      "url": "https://myesatherapist.com/blog/qualifying-conditions/",
      "name": "Qualifying Conditions",
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
      "@id": "https://myesatherapist.com/esa-doctors/dr-leslie-k-gamble/#person",
      "name": "Leslie K. Gamble",
      "url": "https://myesatherapist.com/esa-doctors/dr-leslie-k-gamble/",
      "jobTitle": "Licensed Independent Clinical Social Worker",
      "worksFor": {
        "@id": "https://myesatherapist.com/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/blog/qualifying-conditions/conditions-that-may-qualify-for-an-esa/#breadcrumb",
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
          "name": "Qualifying Conditions",
          "item": "https://myesatherapist.com/blog/qualifying-conditions/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Which DSM-5 Conditions Qualify for an ESA?",
          "item": "https://myesatherapist.com/blog/qualifying-conditions/conditions-that-may-qualify-for-an-esa/"
        }
      ]
    },
    {
      "@type": "BlogPosting",
      "@id": "https://myesatherapist.com/blog/qualifying-conditions/conditions-that-may-qualify-for-an-esa/#blogposting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://myesatherapist.com/blog/qualifying-conditions/conditions-that-may-qualify-for-an-esa/"
      },
      "url": "https://myesatherapist.com/blog/qualifying-conditions/conditions-that-may-qualify-for-an-esa/",
      "headline": "Which DSM-5 Conditions Qualify for an ESA? A Condition-by-Condition Guide.",
      "description": "Explore which DSM-5 conditions may qualify for an ESA letter, including anxiety, depression, PTSD, ADHD, OCD, and other mental health conditions. Learn how eligibility works.",
      "image": "https://myesatherapist.com/images/blog/who-qualifing-for-emotional-support-animal-featured-image.webp",
      "articleSection": "Qualifying Conditions",
      "datePublished": "2026-07-10T07:48:39+00:00",
      "dateModified": "2026-09-01T11:49:31+00:00",
      "author": {
        "@id": "https://myesatherapist.com/author/allyson-valley/#person"
      },
      "reviewedBy": {
        "@id": "https://www.linkedin.com/in/max-phillips-883485a5/#person"
      },
      "lastReviewed": "2026-09-01T11:49:31+00:00",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/#blog"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/blog/qualifying-conditions/conditions-that-may-qualify-for-an-esa/#breadcrumb"
      },
      "inLanguage": "en-US",
      "citation": [
        "https://myesatherapist.com/blog/qualifying-conditions/esa-for-anxiety/"
      ]
    },
    {
      "@type": "Quotation",
      "@id": "https://myesatherapist.com/blog/qualifying-conditions/conditions-that-may-qualify-for-an-esa/#quote-gamble",
      "text": "The steady presence of an emotional support animal can bring comfort and stability to even the most challenging mental health conditions.",
      "creator": {
        "@id": "https://myesatherapist.com/esa-doctors/dr-leslie-k-gamble/#person"
      },
      "isPartOf": {
        "@id": "https://myesatherapist.com/blog/qualifying-conditions/conditions-that-may-qualify-for-an-esa/#blogposting"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://myesatherapist.com/blog/qualifying-conditions/conditions-that-may-qualify-for-an-esa/#condition-guide",
      "name": "Condition-by-Condition Guide",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Anxiety Disorders",
          "description": "GAD, Social Anxiety Disorder, and Panic Disorder -- among the most commonly cited qualifying conditions for an ESA letter."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Depressive Disorders",
          "description": "Major Depressive Disorder and Persistent Depressive Disorder; caring for an animal creates natural daily structure that can be therapeutic."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "PTSD and Trauma-Related Disorders",
          "description": "ESAs are well-recognized as therapeutic companions for trauma survivors."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "ADHD",
          "description": "When ADHD substantially limits major life activities, it qualifies as a disability under the Fair Housing Act."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "OCD",
          "description": "An ESA provides comfort during periods of heightened anxiety triggered by obsessive thought cycles."
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Bipolar Disorder",
          "description": "Type I and Type II; an ESA can provide a stabilizing daily routine during depressive episodes."
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Phobias and Agoraphobia",
          "description": "An ESA can make dealing with feared environments more manageable."
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Borderline Personality Disorder (BPD)",
          "description": "A steady, unconditional bond with an animal can be particularly comforting given BPD's relational instability."
        },
        {
          "@type": "ListItem",
          "position": 9,
          "name": "Schizophrenia and Other Psychotic Disorders",
          "description": "ESA eligibility is typically evaluated in close coordination with a treating psychiatrist or physician."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://myesatherapist.com/blog/qualifying-conditions/conditions-that-may-qualify-for-an-esa/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does ADHD qualify for an emotional support animal letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. ADHD is a recognized DSM-5 condition. When ADHD significantly impairs day-to-day functioning, such as focus, motivation, emotional control, or routine maintenance, it is eligible for an ESA letter. A licensed therapist determines eligibility during a confidential evaluation. Some states require a PhD-level provider or formal psychological evaluation to diagnose ADHD."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get an ESA letter for anxiety without a prior diagnosis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. No prior diagnosis is required to begin with My ESA Therapist. A licensed therapist can evaluate your symptoms and determine whether your experience with anxiety qualifies under Fair Housing Act guidelines."
          }
        },
        {
          "@type": "Question",
          "name": "Does grief or bereavement qualify for an ESA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Situational grief alone does not typically qualify. However, you might be eligible for an ESA letter if your grief has developed into a diagnosable illness, like major depressive disorder, post-traumatic stress disorder, or prolonged grief disorder."
          }
        },
        {
          "@type": "Question",
          "name": "Can more than one condition appear on an ESA letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Co-occurring conditions, such as PTSD and depression, or ADHD and anxiety can both be reflected in a single ESA letter when clinically relevant. ESA letters do not typically disclose the specific diagnosis or condition a person has but rather the symptoms they struggle with and how the ESA assists in symptom management."
          }
        }
      ]
    }
  ]
};
