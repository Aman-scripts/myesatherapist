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
      "numberOfItems": 7,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "VideoObject",
            "name": "ESA Letter Review from Sheri Mahnke",
            "description": "Sheri Mahnke shares her experience getting a legitimate ESA letter through My ESA Therapist.",
            "thumbnailUrl": "https://img.youtube.com/vi/figN4V7ThbM/maxresdefault.jpg",
            "contentUrl": "https://www.youtube.com/shorts/figN4V7ThbM",
            "embedUrl": "https://www.youtube.com/embed/figN4V7ThbM",
            "uploadDate": "2026-05-27T10:00:25-07:00"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "VideoObject",
            "name": "ESA Letter Review from Deana M",
            "description": "Deana M shares her experience getting a legitimate ESA letter through My ESA Therapist.",
            "thumbnailUrl": "https://img.youtube.com/vi/TV4dghtuqak/maxresdefault.jpg",
            "contentUrl": "https://www.youtube.com/shorts/TV4dghtuqak",
            "embedUrl": "https://www.youtube.com/embed/TV4dghtuqak",
            "uploadDate": "2026-05-21T01:00:10-07:00"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "VideoObject",
            "name": "ESA Letter Review from Constance (Houston, Texas)",
            "description": "Constance from Houston, Texas shares her experience getting a legitimate ESA letter through My ESA Therapist.",
            "thumbnailUrl": "https://img.youtube.com/vi/vId0sRVPY0I/maxresdefault.jpg",
            "contentUrl": "https://www.youtube.com/shorts/vId0sRVPY0I",
            "embedUrl": "https://www.youtube.com/embed/vId0sRVPY0I",
            "uploadDate": "2026-07-08T09:45:17-07:00"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "VideoObject",
            "name": "ESA Letter Review from Leighann (Akron, Ohio)",
            "description": "Leighann from Akron, Ohio shares her experience getting an ESA letter through My ESA Therapist.",
            "thumbnailUrl": "https://img.youtube.com/vi/gxdipq0J2No/maxresdefault.jpg",
            "contentUrl": "https://www.youtube.com/shorts/gxdipq0J2No",
            "embedUrl": "https://www.youtube.com/embed/gxdipq0J2No",
            "uploadDate": "2026-06-22T10:00:23-07:00"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "VideoObject",
            "name": "ESA Letter Review from April E",
            "description": "April E shares her experience getting a legitimate ESA letter through My ESA Therapist.",
            "thumbnailUrl": "https://img.youtube.com/vi/Mjf33Y0NvVc/maxresdefault.jpg",
            "contentUrl": "https://www.youtube.com/shorts/Mjf33Y0NvVc",
            "embedUrl": "https://www.youtube.com/embed/Mjf33Y0NvVc",
            "uploadDate": "2026-06-05T10:00:07-07:00"
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "VideoObject",
            "name": "ESA Letter Review from Mariah Ogles",
            "description": "Mariah Ogles shares her experience getting a legitimate ESA letter through My ESA Therapist.",
            "thumbnailUrl": "https://img.youtube.com/vi/rPtmxr05tsc/maxresdefault.jpg",
            "contentUrl": "https://www.youtube.com/shorts/rPtmxr05tsc",
            "embedUrl": "https://www.youtube.com/embed/rPtmxr05tsc",
            "uploadDate": "2026-05-14T03:54:00-07:00"
          }
        },
        {
          "@type": "ListItem",
          "position": 7,
          "item": {
            "@type": "VideoObject",
            "name": "ESA Letter Review from Anita R",
            "description": "Anita R shares her experience getting an ESA letter evaluation through My ESA Therapist.",
            "thumbnailUrl": "https://img.youtube.com/vi/FAs98teKzUk/maxresdefault.jpg",
            "contentUrl": "https://www.youtube.com/shorts/FAs98teKzUk",
            "embedUrl": "https://www.youtube.com/embed/FAs98teKzUk",
            "uploadDate": "2026-05-02T10:00:15-07:00"
          }
        }
      ]
    }
  ]
};
