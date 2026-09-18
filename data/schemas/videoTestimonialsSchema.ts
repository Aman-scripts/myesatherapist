import React from "react";

export const videoTestimonialsSchema = {
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
      "telephone": "+1-888-412-4041"
    },
    {
      "@type": "WebPage",
      "@id": "https://myesatherapist.com/video-testimonials/#webpage",
      "url": "https://myesatherapist.com/video-testimonials/",
      "name": "Client Video Testimonials | Real Stories, Real Impact | My ESA Therapist",
      "description": "Watch our clients share their personal experiences and success stories with emotional support animal therapy and legitimate ESA letters from My ESA Therapist.",
      "isPartOf": {
        "@id": "https://myesatherapist.com/#website"
      },
      "about": {
        "@id": "https://myesatherapist.com/#organization"
      }
    },
    {
      "@type": "ItemList",
      "name": "ESA Letter Customer Video Testimonials",
      "url": "https://myesatherapist.com/video-testimonials/",
      "numberOfItems": 14,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "VideoObject",
            "name": "ESA Letter Review from Sherry H",
            "description": "My ESA Therapist connected me with a licensed mental health expert who evaluated me and approved my ESA letter and trust me, it was more than just a letter.",
            "thumbnailUrl": "https://myesatherapist.com/video_testimonial/video_testimonial-videosreviewsimage.png",
            "contentUrl": "https://www.youtube.com/shorts/5sBiyUaGksg",
            "embedUrl": "https://www.youtube.com/embed/5sBiyUaGksg",
            "uploadDate": "2026-04-24T00:00:00-05:00"
          }
        }
      ]
    }
  ]
};
