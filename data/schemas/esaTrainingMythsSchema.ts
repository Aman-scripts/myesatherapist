export const esaTrainingMythsSchema = {
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
      "@type": "ImageObject",
      "@id": "https://myesatherapist.com/blog/esa-training/esa-training-myths/#primaryimage",
      "url": "https://myesatherapist.com/images/blog/moving-in-with-a-furry-friend-image.webp",
      "contentUrl": "https://myesatherapist.com/images/blog/moving-in-with-a-furry-friend-image.webp",
      "caption": "Emotional Support Animal Training and Housing"
    },
    {
      "@type": "WebPage",
      "@id": "https://myesatherapist.com/blog/esa-training/esa-training-myths/#webpage",
      "url": "https://myesatherapist.com/blog/esa-training/esa-training-myths/",
      "name": "ESA Training Myths: What the Law Actually Requires",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://myesatherapist.com/blog/esa-training/esa-training-myths/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://myesatherapist.com/blog/esa-training/esa-training-myths/#breadcrumb"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": [
        "Article",
        "BlogPosting"
      ],
      "@id": "https://myesatherapist.com/blog/esa-training/esa-training-myths/#article",
      "mainEntityOfPage": {
        "@id": "https://myesatherapist.com/blog/esa-training/esa-training-myths/#webpage"
      },
      "headline": "ESA Training Myths: What the Law Actually Requires",
      "description": "Discover common myths about emotional support animal training and learn what the law generally requires, including the distinction between emotional support animals and trained service animals.",
      "image": {
        "@id": "https://myesatherapist.com/blog/esa-training/esa-training-myths/#primaryimage"
      },
      "author": {
        "@id": "https://myesatherapist.com/author/allyson-valley/#person"
      },
      "publisher": {
        "@id": "https://myesatherapist.com/#organization"
      },
      "articleSection": "ESA Training",
      "about": [
        {
          "@type": "Thing",
          "name": "Emotional support animal training"
        },
        {
          "@type": "Thing",
          "name": "Emotional support animal laws"
        },
        {
          "@type": "Thing",
          "name": "Service animals"
        }
      ],
      "inLanguage": "en-US"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://myesatherapist.com/blog/esa-training/esa-training-myths/#breadcrumb",
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
          "name": "ESA Training Myths: What the Law Actually Requires",
          "item": "https://myesatherapist.com/blog/esa-training/esa-training-myths/"
        }
      ]
    }
  ]
};
