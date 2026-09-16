export const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://myesatherapist.com/#organization",
      "name": "My ESA Therapist",
      "alternateName": "MyESATherapist",
      "url": "https://myesatherapist.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://myesatherapist.com/images/logo/my-esa-therapist-logo.webp"
      },
      "image": "https://myesatherapist.com/images/logo/my-esa-therapist-logo.webp",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "780 Lynnhaven Pkwy #400",
        "addressLocality": "Virginia Beach",
        "addressRegion": "VA",
        "postalCode": "23452",
        "addressCountry": "US"
      },
      "description": "A platform providing emotional support animal (ESA) evaluations conducted by U.S. licensed mental health professionals through secure telehealth, serving individuals nationwide since 2019.",
      "foundingDate": "2019",
      "email": "info@myesatherapist.com",
      "telephone": "+1-888-412-4041",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "10894",
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        "https://www.facebook.com/myesatherapy",
        "https://x.com/myesatherapist",
        "https://www.instagram.com/myesatherapist/",
        "https://www.youtube.com/@myesatherapist",
        "https://www.linkedin.com/company/myesatherapist/"
      ],
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
      ],
      "subjectOf": [
        {
          "@type": "CreativeWork",
          "name": "My ESA Therapist Simplifies Process to Get Online ESA Letter",
          "url": "https://natlawreview.com/press-releases/my-esa-therapist-simplifies-process-get-online-esa-letter-2026",
          "publisher": { "@type": "Organization", "name": "National Law Review" }
        },
        {
          "@type": "CreativeWork",
          "name": "Top 5 Trusted Online ESA Letter Providers",
          "url": "https://www.legalreader.com/top-5-trusted-online-esa-letter-providers-in-2026/",
          "publisher": { "@type": "Organization", "name": "Legal Reader" }
        },
        {
          "@type": "CreativeWork",
          "name": "The Pet Rent Trap: A Housing Cost Breakdown",
          "url": "https://www.rentdeals.com/blog/the-pet-rent-trap-a-housing-cost-breakdown-with-insights-from-my-esa-therapist/",
          "publisher": { "@type": "Organization", "name": "rentDEALS.com" }
        },
        {
          "@type": "CreativeWork",
          "name": "ESA Therapist Highlights Growing Demand",
          "url": "https://finance.yahoo.com/sectors/healthcare/articles/esa-therapist-highlights-growing-demand-165000890.html",
          "publisher": { "@type": "Organization", "name": "Yahoo Finance" }
        },
        {
          "@type": "CreativeWork",
          "name": "Can Veterinarians Write an ESA Letter?",
          "url": "https://www.dvm360.com/view/can-veterinarians-write-an-esa-letter-",
          "publisher": { "@type": "Organization", "name": "DVM360" }
        },
        {
          "@type": "CreativeWork",
          "name": "My ESA Therapist Highlights Growing Demand for Ethical ESA Evaluations Among Gen Z",
          "url": "https://www.financialcontent.com/article/accwirecq-2026-3-27-my-esa-therapist-highlights-growing-demand-for-ethical-esa-evaluations-among-gen-z",
          "publisher": { "@type": "Organization", "name": "Financial Content" }
        },
        {
          "@type": "CreativeWork",
          "name": "My ESA Therapist Simplifies the Process to Get an Online ESA Letter",
          "url": "https://www.americarealestateonline.com/article/905468413-my-esa-therapist-simplifies-the-process-to-get-an-online-esa-letter-in-2026",
          "publisher": { "@type": "Organization", "name": "America Real Estate Online" }
        },
        {
          "@type": "CreativeWork",
          "name": "When Your Arizona ESA Letter Expires: Rights and Renewal Explained",
          "url": "https://azbigmedia.com/business/law/when-your-arizona-esa-letter-expires-rights-and-renewal-explained/",
          "publisher": { "@type": "Organization", "name": "AZ Big Media" }
        },
        {
          "@type": "CreativeWork",
          "name": "How to Get a Legit ESA Letter in New York",
          "url": "https://www.fingerlakes1.com/2026/04/17/my-esa-therapist-explains-how-to-get-a-legit-esa-letter-in-new-york/",
          "publisher": { "@type": "Organization", "name": "FingerLakes1" }
        }
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
      "inLanguage": "en-US",
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
      "@type": "SiteNavigationElement",
      "name": [
        "Home",
        "ESA by State",
        "About Us",
        "Contact Us",
        "Start ESA Evaluation"
      ],
      "url": [
        "https://myesatherapist.com/",
        "https://myesatherapist.com/state/",
        "https://myesatherapist.com/about-us/",
        "https://myesatherapist.com/contact-us/",
        "https://myesatherapist.videovisitmd.com/f/vshop-signIN?straitTo=schedule"
      ]
    },
    {
      "@type": "Service",
      "serviceType": "Emotional Support Animal (ESA) Evaluation",
      "name": "Online ESA Evaluation",
      "description": "Telehealth-based emotional support animal evaluations conducted by U.S. licensed mental health professionals, aligned with federal housing guidelines.",
      "provider": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://myesatherapist.com/",
        "serviceType": "Telehealth (Video or Phone Consultation)"
      },
      "termsOfService": "https://myesatherapist.com/terms-of-use/",
      "audience": {
        "@type": "Audience",
        "audienceType": "Individuals seeking ESA housing accommodation under the Fair Housing Act"
      },
      "offers": {
        "@type": "Offer",
        "price": "149",
        "priceCurrency": "USD",
        "url": "https://myesatherapist.com/pricing/",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-12-31",
        "eligibleRegion": {
          "@type": "Country",
          "name": "United States"
        }
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is My ESA Therapist Legitimate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. My ESA Therapist connects individuals with U.S.-licensed mental health professionals who are licensed in the client's state. All evaluations follow recognized clinical standards and applicable federal housing guidelines."
          }
        },
        {
          "@type": "Question",
          "name": "How Does My ESA Therapist Work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "My ESA Therapist is a telehealth platform that facilitates emotional support animal (ESA) evaluations with licensed mental health professionals. If, after a clinical evaluation, a professional determines that an emotional support animal may be appropriate, they may issue documentation that supports housing accommodation requests under applicable federal housing laws."
          }
        },
        {
          "@type": "Question",
          "name": "Does My ESA Therapist Comply With HUD and Fair Housing Act guidelines?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Evaluations and documentation are designed to align with current HUD guidance and Fair Housing Act (FHA) requirements, as applicable to each individual's circumstances."
          }
        },
        {
          "@type": "Question",
          "name": "Does My ESA Therapist Offer Support if My Landlord Asks For Verification?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. With the client's written authorization, licensed professionals or support staff can help clarify evaluation details or documentation when requested by a housing provider."
          }
        },
        {
          "@type": "Question",
          "name": "Is My Information Safe With My ESA Therapist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All consultations and records are handled securely and in accordance with HIPAA privacy and data protection standards."
          }
        },
        {
          "@type": "Question",
          "name": "What If I Already Have A Therapist? Can I Still Use Your Service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Even if you already have a therapist, you can still use My ESA Therapist for an online ESA evaluation. Our licensed mental health professionals will evaluate your situation independently and determine whether an ESA letter is clinically appropriate or not."
          }
        },
        {
          "@type": "Question",
          "name": "Does My ESA Therapist Offer Renewal Reminders?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Users may receive reminders when updated documentation could be requested by a housing provider, depending on their situation."
          }
        },
        {
          "@type": "Question",
          "name": "Is The Consultation Done By Video or Phone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both video and phone consultations are available, depending on provider availability and client preference."
          }
        },
        {
          "@type": "Question",
          "name": "What Payment Methods Does My ESA Therapist Accept?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Major credit cards are accepted."
          }
        },
        {
          "@type": "Question",
          "name": "What if My Landlord Requires a Specific Form or Documentation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If a housing provider requests specific documentation, assistance may be available depending on the request. Additional administrative fees may apply."
          }
        },
        {
          "@type": "Question",
          "name": "What Does the ESA Evaluation Timeline Look Like?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evaluation length and timelines vary based on individual circumstances and state requirements. After completing an evaluation, if a licensed mental health professional determines that an emotional support animal may be clinically appropriate, documentation may be issued within a reasonable timeframe consistent with applicable state and federal laws."
          }
        },
        {
          "@type": "Question",
          "name": "How Long Does It Take To Receive My ESA Letter After The Evaluation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you meet the criteria, your ESA letter is typically issued via mail shortly after your evaluation is completed and approved by a licensed mental health professional. Processing times may vary depending on your state and individual circumstances."
          }
        },
        {
          "@type": "Question",
          "name": "What Happens If I'm Not Approved After My Evaluation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If a licensed professional determines that an emotional support animal may not be clinically appropriate, no documentation is issued. All outcomes are based solely on professional clinical judgment."
          }
        },
        {
          "@type": "Question",
          "name": "Can I Change or Reschedule My Consultation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Consultations may be changed or rescheduled according to provider availability."
          }
        },
        {
          "@type": "Question",
          "name": "Does My ESA Therapist Provide Letters For Dorms or University Housing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When applicable under the Fair Housing Act or related housing regulations, ESA documentation issued following a clinical evaluation may be used to request housing accommodations in university or dorm settings."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How Online ESA Evaluation Works",
      "description": "A simple 3-step process to complete your emotional support animal letter evaluation.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Set Up Your Appointment",
          "text": "Create your account and choose a time that works for you to connect with a licensed mental health professional."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Speak With Professionals",
          "text": "During the consultation, the professional reviews your emotional and mental health concerns and assesses whether an emotional support animal is appropriate."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Clinical Determination",
          "text": "Following the professional evaluation, if deemed appropriate by the licensed professional, emotional support animal documentation is sent directly to your email. If not, no documentation is issued."
        }
      ]
    },
    {
      "@type": "Person",
      "name": "Robert Staaf",
      "jobTitle": "Licensed Clinical Social Worker (LCSW)",
      "url": "https://myesatherapist.com/esa-doctors/dr-robert-staff/",
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
      }
    },
    {
      "@type": "Person",
      "name": "Leslie K. Gamble",
      "jobTitle": "Licensed Independent Clinical Social Worker (LICSW)",
      "url": "https://myesatherapist.com/esa-doctors/dr-leslie-k-gamble/",
      "sameAs": [
        "https://www.linkedin.com/in/leslie-gamble-727571366"
      ],
      "description": "Licensed therapist with 13 years of healthcare experience serving individuals, couples, and families with flexible, goal-focused care. Focus areas: Anxiety, Depression, PTSD, ESA Evaluations.",
      "worksFor": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Licensed Independent Clinical Social Worker",
        "about": "Licensed in 15+ US states"
      }
    },
    {
      "@type": "ItemList",
      "name": "ESA Letter Customer Testimonials",
      "url": "https://myesatherapist.com/video-testimonials/",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "VideoObject",
            "name": "Tetiana's ESA Letter Review",
            "description": "I received my ESA recommendation through My ESA Therapist, a secure telehealth platform that connects you with licensed mental health experts. The process was simple, smooth, and fully compliant with federal guidelines.",
            "thumbnailUrl": "https://i.ytimg.com/vi/AniVHEkqaCk/hqdefault.jpg",
            "contentUrl": "https://www.youtube.com/shorts/Zd3Sit6Sw-U",
            "embedUrl": "https://www.youtube.com/embed/Zd3Sit6Sw-U",
            "uploadDate": "2026-02-03T00:00:00-05:00"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "VideoObject",
            "name": "ESA Letter Review from Marianne C",
            "description": "All thanks to My ESA Therapist, a telehealth platform that connected me with a mental health professional for an ESA evaluation.",
            "thumbnailUrl": "https://i.ytimg.com/vi/vTCV7ft0C9s/hqdefault.jpg",
            "contentUrl": "https://www.youtube.com/shorts/vTCV7ft0C9s",
            "embedUrl": "https://www.youtube.com/embed/vTCV7ft0C9s",
            "uploadDate": "2026-01-31T00:00:00-05:00"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "VideoObject",
            "name": "ESA Letter Review from Sherry H",
            "description": "My ESA Therapist connected me with a licensed mental health expert who evaluated me and approved my ESA letter and trust me, it was more than just a letter.",
            "thumbnailUrl": "https://i.ytimg.com/vi/5sBiyUaGksg/hqdefault.jpg",
            "contentUrl": "https://www.youtube.com/shorts/5sBiyUaGksg",
            "embedUrl": "https://www.youtube.com/embed/5sBiyUaGksg",
            "uploadDate": "2026-01-28T00:00:00-05:00"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "VideoObject",
            "name": "Weslynne's ESA Letter Review",
            "description": "Finding a trustworthy place to get my ESA evaluation was really important to me. I wanted to make sure I was doing everything the right way. That's when I found My ESA Therapist.",
            "thumbnailUrl": "https://i.ytimg.com/vi/FzcTbPNUUNM/hqdefault.jpg",
            "contentUrl": "https://www.youtube.com/shorts/FzcTbPNUUNM",
            "embedUrl": "https://www.youtube.com/embed/FzcTbPNUUNM",
            "uploadDate": "2026-02-23T00:00:00-05:00"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "VideoObject",
            "name": "ESA Letter Review from Heather B",
            "description": "I was connected with a licensed mental health professional who truly listened to me and guided me through the ESA evaluation. I'm really grateful for the support I received. Thank you, My ESA Therapist.",
            "thumbnailUrl": "https://i.ytimg.com/vi/rxXFfiX0M4c/hqdefault.jpg",
            "contentUrl": "https://www.youtube.com/shorts/rxXFfiX0M4c",
            "embedUrl": "https://www.youtube.com/embed/rxXFfiX0M4c",
            "uploadDate": "2026-02-24T00:00:00-05:00"
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "VideoObject",
            "name": "ESA Letter Review from Tiffanier",
            "description": "When I submitted the documentation to my landlord, it was verified and accepted instantly without any issues, which honestly gave me so much relief.",
            "thumbnailUrl": "https://i.ytimg.com/vi/E1jQU196Amo/hqdefault.jpg",
            "contentUrl": "https://www.youtube.com/shorts/E1jQU196Amo",
            "embedUrl": "https://www.youtube.com/embed/E1jQU196Amo",
            "uploadDate": "2026-02-26T00:00:00-05:00"
          }
        },
        {
          "@type": "ListItem",
          "position": 7,
          "item": {
            "@type": "VideoObject",
            "name": "ESA Letter Review from Jonathan",
            "description": "I received a legitimate letter that was approved by my landlord in no time. My pet gets to stay with me, and that means everything. Don't risk it, do it right with My ESA Therapist.",
            "thumbnailUrl": "https://i.ytimg.com/vi/-w4R3O-oF-4/hqdefault.jpg",
            "contentUrl": "https://www.youtube.com/shorts/-w4R3O-oF-4",
            "embedUrl": "https://www.youtube.com/embed/-w4R3O-oF-4",
            "uploadDate": "2026-02-27T00:00:00-05:00"
          }
        },
        {
          "@type": "ListItem",
          "position": 8,
          "item": {
            "@type": "VideoObject",
            "name": "ESA Letter Review from Megan G",
            "description": "My ESA Therapist connected me with a licensed provider who evaluated me properly. Everything was so smooth and genuine. I am glad I chose My ESA Therapist and would recommend them to everyone.",
            "thumbnailUrl": "https://i.ytimg.com/vi/0gL8FyERXa4/hqdefault.jpg",
            "contentUrl": "https://www.youtube.com/shorts/0gL8FyERXa4",
            "embedUrl": "https://www.youtube.com/embed/0gL8FyERXa4",
            "uploadDate": "2026-03-10T00:00:00-05:00"
          }
        },
        {
          "@type": "ListItem",
          "position": 9,
          "item": {
            "@type": "VideoObject",
            "name": "ESA Letter Review from Jason",
            "description": "Once the assessment was complete, the provider confirmed that my pet qualifies as my ESA. I then received the ESA letter within 24 hours, all thanks to My ESA Therapist.",
            "thumbnailUrl": "https://i.ytimg.com/vi/rIiqLFA3_VI/hqdefault.jpg",
            "contentUrl": "https://www.youtube.com/shorts/rIiqLFA3_VI",
            "embedUrl": "https://www.youtube.com/embed/rIiqLFA3_VI",
            "uploadDate": "2026-03-31T00:00:00-05:00"
          }
        },
        {
          "@type": "ListItem",
          "position": 10,
          "item": {
            "@type": "VideoObject",
            "name": "ESA Letter Review from Carol Jones",
            "description": "The process was simple and transparent, and I was able to speak with a real mental health professional. I finally received my ESA letter within 48 hours and felt confident it was done the right way.",
            "thumbnailUrl": "https://i.ytimg.com/vi/hAvoKepvym4/hqdefault.jpg",
            "contentUrl": "https://www.youtube.com/shorts/hAvoKepvym4",
            "embedUrl": "https://www.youtube.com/embed/hAvoKepvym4",
            "uploadDate": "2026-04-13T00:00:00-05:00"
          }
        }
      ]
    }
  ]
};
