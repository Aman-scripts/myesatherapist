export const videoTestimonialsSchemas = [
  // 1. CollectionPage
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "url": "https://myesatherapist.com/video-testimonials/",
    "name": "Real Stories, Real Impact | Video Testimonials",
    "description": "Watch real customer video testimonials about their ESA letter evaluation experience with My ESA Therapist.",
    "isPartOf": {
      "@id": "https://myesatherapist.com/#website"
    },
    "about": {
      "@id": "https://myesatherapist.com/#organization"
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Client Video Testimonials",
      "numberOfItems": 23,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Sherry H — ESA Letter Review" },
        { "@type": "ListItem", "position": 2, "name": "Marianne C — ESA Letter Review" },
        { "@type": "ListItem", "position": 3, "name": "Tetiana T — ESA Letter Review" },
        { "@type": "ListItem", "position": 4, "name": "Weslynne — ESA Letter Review" },
        { "@type": "ListItem", "position": 5, "name": "Tiffanier — ESA Letter Review" },
        { "@type": "ListItem", "position": 6, "name": "Heather B — ESA Letter Review" },
        { "@type": "ListItem", "position": 7, "name": "Jonathan — ESA Letter Review" },
        { "@type": "ListItem", "position": 8, "name": "Megan G — ESA Letter Review" },
        { "@type": "ListItem", "position": 9, "name": "Jill M — ESA Letter Review" },
        { "@type": "ListItem", "position": 10, "name": "Jason — ESA Letter Review" },
        { "@type": "ListItem", "position": 11, "name": "Carol Jones — ESA Letter Review" },
        { "@type": "ListItem", "position": 12, "name": "Melodie Joy — ESA Letter Review" },
        { "@type": "ListItem", "position": 13, "name": "Cary S — ESA Letter Review" },
        { "@type": "ListItem", "position": 14, "name": "Helana C — ESA Letter Review" },
        { "@type": "ListItem", "position": 15, "name": "Willow — ESA Letter Review" },
        { "@type": "ListItem", "position": 16, "name": "Anita Rivas — ESA Letter Review" },
        { "@type": "ListItem", "position": 17, "name": "Mariah Ogles — ESA Letter Review" },
        { "@type": "ListItem", "position": 18, "name": "Deana Mckay — ESA Letter Review" },
        { "@type": "ListItem", "position": 19, "name": "Sheri Mahnke — ESA Letter Review" },
        { "@type": "ListItem", "position": 20, "name": "Jessica G — ESA Letter Review" },
        { "@type": "ListItem", "position": 21, "name": "April E. — ESA Letter Review" },
        { "@type": "ListItem", "position": 22, "name": "Leighann — ESA Letter Review" },
        { "@type": "ListItem", "position": 23, "name": "Constance — ESA Letter Review" }
      ]
    }
  },
  // 2. WEBPAGE + SCHEDULEACTION (booking CTA on this page)
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://myesatherapist.com/video-testimonials/#action",
    "url": "https://myesatherapist.com/video-testimonials/",
    "potentialAction": {
      "@type": "ScheduleAction",
      "name": "Start Your ESA Evaluation",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://myesatherapist.videovisitmd.com/f/vshop-signIN?straitTo=schedule",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      }
    }
  },
  // 3. VIDEOOBJECT + nested Review — all 23, with confirmed upload dates
  [
    { "@context": "https://schema.org", "@type": "VideoObject", "name": "Sherry H — ESA Letter Review", "description": "Sherry H shares her experience getting connected with a licensed mental health expert and approved for her ESA letter through My ESA Therapist.", "thumbnailUrl": "https://i.ytimg.com/vi/5sBiyUaGksg/hqdefault.jpg", "embedUrl": "https://www.youtube.com/embed/5sBiyUaGksg", "uploadDate": "2026-01-28T00:00:00-05:00", "review": { "@type": "Review", "author": { "@type": "Person", "name": "Sherry H" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "publisher": { "@id": "https://myesatherapist.com/#organization" } } },
    { "@context": "https://schema.org", "@type": "VideoObject", "name": "Marianne C — ESA Letter Review", "description": "Marianne C describes being connected with a mental health professional for her ESA evaluation through My ESA Therapist.", "thumbnailUrl": "https://i.ytimg.com/vi/vTCV7ft0C9s/hqdefault.jpg", "embedUrl": "https://www.youtube.com/embed/vTCV7ft0C9s", "uploadDate": "2026-01-31T00:00:00-05:00", "review": { "@type": "Review", "author": { "@type": "Person", "name": "Marianne C" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "publisher": { "@id": "https://myesatherapist.com/#organization" } } },
    { "@context": "https://schema.org", "@type": "VideoObject", "name": "Tetiana T — ESA Letter Review", "description": "Tetiana T describes receiving her ESA recommendation through My ESA Therapist's secure telehealth platform.", "thumbnailUrl": "https://i.ytimg.com/vi/AniVHEkqaCk/hqdefault.jpg", "embedUrl": "https://www.youtube.com/embed/AniVHEkqaCk", "uploadDate": "2026-02-03T00:00:00-05:00", "review": { "@type": "Review", "author": { "@type": "Person", "name": "Tetiana T" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "publisher": { "@id": "https://myesatherapist.com/#organization" } } },
    { "@context": "https://schema.org", "@type": "VideoObject", "name": "Weslynne — ESA Letter Review", "description": "Weslynne explains why she chose My ESA Therapist to find a trustworthy path to her ESA evaluation.", "thumbnailUrl": "https://i.ytimg.com/vi/FzcTbPNUUNM/hqdefault.jpg", "embedUrl": "https://www.youtube.com/embed/FzcTbPNUUNM", "uploadDate": "2026-02-23T00:00:00-05:00", "review": { "@type": "Review", "author": { "@type": "Person", "name": "Weslynne" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "publisher": { "@id": "https://myesatherapist.com/#organization" } } },
    { "@context": "https://schema.org", "@type": "VideoObject", "name": "Tiffanier — ESA Letter Review", "description": "Tiffanier shares how her landlord verified and accepted her ESA documentation instantly.", "thumbnailUrl": "https://i.ytimg.com/vi/E1jQU196Amo/hqdefault.jpg", "embedUrl": "https://www.youtube.com/embed/E1jQU196Amo", "uploadDate": "2026-02-26T00:00:00-05:00", "review": { "@type": "Review", "author": { "@type": "Person", "name": "Tiffanier" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "publisher": { "@id": "https://myesatherapist.com/#organization" } } },
    { "@context": "https://schema.org", "@type": "VideoObject", "name": "Heather B — ESA Letter Review", "description": "Heather B describes feeling heard and guided through her ESA evaluation by a licensed mental health professional.", "thumbnailUrl": "https://i.ytimg.com/vi/rxXFfiX0M4c/hqdefault.jpg", "embedUrl": "https://www.youtube.com/embed/rxXFfiX0M4c", "uploadDate": "2026-02-24T00:00:00-05:00", "review": { "@type": "Review", "author": { "@type": "Person", "name": "Heather B" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "publisher": { "@id": "https://myesatherapist.com/#organization" } } },
    { "@context": "https://schema.org", "@type": "VideoObject", "name": "Jonathan — ESA Letter Review", "description": "Jonathan shares how his ESA letter was approved quickly by his landlord, letting his pet stay with him.", "thumbnailUrl": "https://i.ytimg.com/vi/-w4R3O-oF-4/hqdefault.jpg", "embedUrl": "https://www.youtube.com/embed/-w4R3O-oF-4", "uploadDate": "2026-02-27T00:00:00-05:00", "review": { "@type": "Review", "author": { "@type": "Person", "name": "Jonathan" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "publisher": { "@id": "https://myesatherapist.com/#organization" } } },
    { "@context": "https://schema.org", "@type": "VideoObject", "name": "Megan G — ESA Letter Review", "description": "Megan G describes a smooth, genuine evaluation experience with a licensed provider through My ESA Therapist.", "thumbnailUrl": "https://i.ytimg.com/vi/0gL8FyERXa4/hqdefault.jpg", "embedUrl": "https://www.youtube.com/embed/0gL8FyERXa4", "uploadDate": "2026-03-10T00:00:00-05:00", "review": { "@type": "Review", "author": { "@type": "Person", "name": "Megan G" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "publisher": { "@id": "https://myesatherapist.com/#organization" } } },
    { "@context": "https://schema.org", "@type": "VideoObject", "name": "Jill M — ESA Letter Review", "description": "Jill M shares how her ESA request was approved and she now lives with her pet with peace of mind.", "thumbnailUrl": "https://i.ytimg.com/vi/RIqLkitZFFs/hqdefault.jpg", "embedUrl": "https://www.youtube.com/embed/RIqLkitZFFs", "uploadDate": "2026-03-24T00:00:00-05:00", "review": { "@type": "Review", "author": { "@type": "Person", "name": "Jill M" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "publisher": { "@id": "https://myesatherapist.com/#organization" } } },
    { "@context": "https://schema.org", "@type": "VideoObject", "name": "Jason — ESA Letter Review", "description": "Jason describes how his pet was confirmed to qualify as his ESA and he received his letter within 24 hours.", "thumbnailUrl": "https://i.ytimg.com/vi/rIiqLFA3_VI/hqdefault.jpg", "embedUrl": "https://www.youtube.com/embed/rIiqLFA3_VI", "uploadDate": "2026-03-31T00:00:00-05:00", "review": { "@type": "Review", "author": { "@type": "Person", "name": "Jason" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "publisher": { "@id": "https://myesatherapist.com/#organization" } } },
    { "@context": "https://schema.org", "@type": "VideoObject", "name": "Carol Jones — ESA Letter Review", "description": "Carol Jones shares her transparent, straightforward experience and receiving her ESA letter within 48 hours.", "thumbnailUrl": "https://i.ytimg.com/vi/hAvoKepvym4/hqdefault.jpg", "embedUrl": "https://www.youtube.com/embed/hAvoKepvym4", "uploadDate": "2026-04-13T00:00:00-05:00", "review": { "@type": "Review", "author": { "@type": "Person", "name": "Carol Jones" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "publisher": { "@id": "https://myesatherapist.com/#organization" } } },
    { "@context": "https://schema.org", "@type": "VideoObject", "name": "Melodie Joy — ESA Letter Review", "description": "Melodie Joy describes a simple evaluation process and how her ESA letter brought her peace of mind.", "thumbnailUrl": "https://i.ytimg.com/vi/fjRpV_fm_lI/hqdefault.jpg", "embedUrl": "https://www.youtube.com/embed/fjRpV_fm_lI", "uploadDate": "2026-04-17T00:00:00-05:00", "review": { "@type": "Review", "author": { "@type": "Person", "name": "Melodie Joy" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "publisher": { "@id": "https://myesatherapist.com/#organization" } } },
    { "@context": "https://schema.org", "@type": "VideoObject", "name": "Cary S — ESA Letter Review", "description": "Cary S describes a smooth, well-communicated experience receiving an ESA letter without unnecessary delays.", "thumbnailUrl": "https://i.ytimg.com/vi/fwyYFwp9oFk/hqdefault.jpg", "embedUrl": "https://www.youtube.com/embed/fwyYFwp9oFk", "uploadDate": "2026-04-21T00:00:00-05:00", "review": { "@type": "Review", "author": { "@type": "Person", "name": "Cary S" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "publisher": { "@id": "https://myesatherapist.com/#organization" } } },
    { "@context": "https://schema.org", "@type": "VideoObject", "name": "Helana C — ESA Letter Review", "description": "Helana C shares how, after a prior fake ESA letter experience elsewhere, My ESA Therapist provided a proper evaluation and a valid letter.", "thumbnailUrl": "https://i.ytimg.com/vi/ObAgbpMf4nA/hqdefault.jpg", "embedUrl": "https://www.youtube.com/embed/ObAgbpMf4nA", "uploadDate": "2026-04-30T00:00:00-05:00", "review": { "@type": "Review", "author": { "@type": "Person", "name": "Helana C" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "publisher": { "@id": "https://myesatherapist.com/#organization" } } },
    { "@context": "https://schema.org", "@type": "VideoObject", "name": "Willow — ESA Letter Review", "description": "Willow describes finding a genuine, transparent evaluation with a real licensed provider after a previous scam experience.", "thumbnailUrl": "https://i.ytimg.com/vi/rxQ0qQycIwI/hqdefault.jpg", "embedUrl": "https://www.youtube.com/embed/rxQ0qQycIwI", "uploadDate": "2026-05-01T00:00:00-05:00", "review": { "@type": "Review", "author": { "@type": "Person", "name": "Willow" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "publisher": { "@id": "https://myesatherapist.com/#organization" } } },
    { "@context": "https://schema.org", "@type": "VideoObject", "name": "Anita Rivas — ESA Letter Review", "description": "Anita Rivas describes a quick, simple, fully online process connecting her with a professional and understanding licensed therapist.", "thumbnailUrl": "https://i.ytimg.com/vi/FAs98teKzUk/hqdefault.jpg", "embedUrl": "https://www.youtube.com/embed/FAs98teKzUk", "uploadDate": "2026-05-02T00:00:00-05:00", "review": { "@type": "Review", "author": { "@type": "Person", "name": "Anita Rivas" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "publisher": { "@id": "https://myesatherapist.com/#organization" } } },
    { "@context": "https://schema.org", "@type": "VideoObject", "name": "Mariah Ogles — ESA Letter Review", "description": "Mariah Ogles shares how she found a legitimate, fully online ESA letter process in Texas through My ESA Therapist.", "thumbnailUrl": "https://i.ytimg.com/vi/rPtmxr05tsc/hqdefault.jpg", "embedUrl": "https://www.youtube.com/embed/rPtmxr05tsc", "uploadDate": "2026-05-14T00:00:00-05:00", "review": { "@type": "Review", "author": { "@type": "Person", "name": "Mariah Ogles" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "publisher": { "@id": "https://myesatherapist.com/#organization" } } },
    { "@context": "https://schema.org", "@type": "VideoObject", "name": "Deana Mckay — ESA Letter Review", "description": "Deana Mckay describes a real telehealth evaluation with a licensed professional and receiving her letter within 48 hours.", "thumbnailUrl": "https://i.ytimg.com/vi/TV4dghtuqak/hqdefault.jpg", "embedUrl": "https://www.youtube.com/embed/TV4dghtuqak", "uploadDate": "2026-05-21T00:00:00-05:00", "review": { "@type": "Review", "author": { "@type": "Person", "name": "Deana Mckay" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "publisher": { "@id": "https://myesatherapist.com/#organization" } } },
    { "@context": "https://schema.org", "@type": "VideoObject", "name": "Sheri Mahnke — ESA Letter Review", "description": "Sheri Mahnke describes real licensed therapists, real telehealth appointments, and HIPAA-compliant, transparent service.", "thumbnailUrl": "https://i.ytimg.com/vi/figN4V7ThbM/hqdefault.jpg", "embedUrl": "https://www.youtube.com/embed/figN4V7ThbM", "uploadDate": "2026-05-27T00:00:00-05:00", "review": { "@type": "Review", "author": { "@type": "Person", "name": "Sheri Mahnke" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "publisher": { "@id": "https://myesatherapist.com/#organization" } } },
    { "@context": "https://schema.org", "@type": "VideoObject", "name": "Jessica G — ESA Letter Review", "description": "Jessica G shares how My ESA Therapist stood out by focusing on education, not just selling a service.", "thumbnailUrl": "https://i.ytimg.com/vi/CybsnJUGzTM/hqdefault.jpg", "embedUrl": "https://www.youtube.com/embed/CybsnJUGzTM", "uploadDate": "2026-06-03T00:00:00-05:00", "review": { "@type": "Review", "author": { "@type": "Person", "name": "Jessica G" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "publisher": { "@id": "https://myesatherapist.com/#organization" } } },
    { "@context": "https://schema.org", "@type": "VideoObject", "name": "April E. — ESA Letter Review", "description": "April E. describes clear explanations of the ESA letter process and what to watch out for online.", "thumbnailUrl": "https://i.ytimg.com/vi/Mjf33Y0NvVc/hqdefault.jpg", "embedUrl": "https://www.youtube.com/embed/Mjf33Y0NvVc", "uploadDate": "2026-06-05T00:00:00-05:00", "review": { "@type": "Review", "author": { "@type": "Person", "name": "April E." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "publisher": { "@id": "https://myesatherapist.com/#organization" } } },
    { "@context": "https://schema.org", "@type": "VideoObject", "name": "Leighann — ESA Letter Review", "description": "Leighann, from Akron, Ohio, shares how she found a legitimate path to her ESA letter through My ESA Therapist.", "thumbnailUrl": "https://i.ytimg.com/vi/gxdipq0J2No/hqdefault.jpg", "embedUrl": "https://www.youtube.com/embed/gxdipq0J2No", "uploadDate": "2026-06-22T00:00:00-05:00", "review": { "@type": "Review", "author": { "@type": "Person", "name": "Leighann" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "publisher": { "@id": "https://myesatherapist.com/#organization" } } },
    { "@context": "https://schema.org", "@type": "VideoObject", "name": "Constance — ESA Letter Review", "description": "Constance, from Houston, Texas, shares how getting her ESA letter through My ESA Therapist was easier than expected.", "thumbnailUrl": "https://i.ytimg.com/vi/vId0sRVPY0I/hqdefault.jpg", "embedUrl": "https://www.youtube.com/embed/vId0sRVPY0I", "uploadDate": "2026-07-08T00:00:00-05:00", "review": { "@type": "Review", "author": { "@type": "Person", "name": "Constance" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "publisher": { "@id": "https://myesatherapist.com/#organization" } } }
  ],
  // 4. BREADCRUMBLIST
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://myesatherapist.com/" },
      { "@type": "ListItem", "position": 2, "name": "Video Testimonials", "item": "https://myesatherapist.com/video-testimonials/" }
    ]
  }
];

export const videoTestimonialsSchema = videoTestimonialsSchemas;
