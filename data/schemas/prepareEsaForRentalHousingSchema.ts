export const prepareEsaForRentalHousingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://myesatherapist.com/#organization",
      "name": "My ESA Therapist",
      "url": "https://myesatherapist.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://myesatherapist.com/images/logo/my-esa-therapist-logo.webp"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://myesatherapist.com/#website",
      "url": "https://myesatherapist.com/",
      "name": "My ESA Therapist",
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "Person",
      "@id": "https://myesatherapist.com/author/allyson-valley/#person",
      "name": "Allyson Valley",
      "url": "https://myesatherapist.com/author/allyson-valley/",
      "image": {
        "@type": "ImageObject",
        "url": "https://myesatherapist.com/images/authors/allyson-valley-profile-image.webp"
      },
      "jobTitle": "Mental Health Writer & Research Contributor",
      "worksFor": {
        "@id": "https://myesatherapist.com/#organization"
      }
    },
    {
      "@type": "Person",
      "@id": "https://www.linkedin.com/in/max-phillips-883485a5/",
      "name": "Max Phillips",
      "url": "https://www.linkedin.com/in/max-phillips-883485a5/",
      "image": {
        "@type": "ImageObject",
        "url": "https://myesatherapist.com/images/authors/max-phillips-image.webp"
      },
      "honorificSuffix": "MSW, LCSW",
      "jobTitle": "Licensed Clinical Social Worker",
      "worksFor": {
        "@id": "https://myesatherapist.com/#organization"
      }
    },
    {
      "@type": "ImageObject",
      "@id": "https://myesatherapist.com/blog/esa-training/prepare-esa-for-rental-housing/#primaryimage",
      "url": "https://myesatherapist.com/images/blog/moving-in-with-a-furry-friend-image.webp",
      "contentUrl": "https://myesatherapist.com/images/blog/moving-in-with-a-furry-friend-image.webp",
      "caption": "Preparing an Emotional Support Animal for Rental Housing"
    },
    {
      "@type": "WebPage",
      "@id": "https://myesatherapist.com/blog/esa-training/prepare-esa-for-rental-housing/#webpage",
      "url": "https://myesatherapist.com/blog/esa-training/prepare-esa-for-rental-housing/",
      "name": "How to Prepare Your ESA for Rental Housing?",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://myesatherapist.com/blog/esa-training/prepare-esa-for-rental-housing/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/blog/esa-training/prepare-esa-for-rental-housing/#breadcrumb"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": [
        "Article",
        "BlogPosting"
      ],
      "@id": "https://myesatherapist.com/blog/esa-training/prepare-esa-for-rental-housing/#article",
      "mainEntityOfPage": {
        "@id": "https://myesatherapist.com/blog/esa-training/prepare-esa-for-rental-housing/#webpage"
      },
      "headline": "How to Prepare Your ESA for Rental Housing?",
      "description": "Learn how to prepare your emotional support animal for rental housing with house training, basic obedience, barking control, and strategies for helping your ESA adjust to apartment living.",
      "image": {
        "@id": "https://myesatherapist.com/blog/esa-training/prepare-esa-for-rental-housing/#primaryimage"
      },
      "author": {
        "@id": "https://myesatherapist.com/author/allyson-valley/#person"
      },
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "articleSection": "ESA Training",
      "inLanguage": "en-US",
      "about": [
        {
          "@type": "Thing",
          "name": "Emotional support animals"
        },
        {
          "@type": "Thing",
          "name": "Rental housing"
        },
        {
          "@type": "Thing",
          "name": "Animal behavior and training"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/blog/esa-training/prepare-esa-for-rental-housing/#breadcrumb",
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
          "name": "How to Prepare Your ESA for Rental Housing?",
          "item": "https://myesatherapist.com/blog/esa-training/prepare-esa-for-rental-housing/"
        }
      ]
    }
  ]
};
