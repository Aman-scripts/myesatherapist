"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface VideoReviewItem {
  id: number;
  name: string;
  rating: number;
  quote: string;
  date: string;
  videoId: string;
  videoUrl: string;
  thumbnail: string;
}

const VIDEO_REVIEWS: VideoReviewItem[] = [
  {
    id: 1,
    name: "Sheri Mahnke",
    rating: 5,
    quote:
      "“My ESA Therapist connected me with a licensed mental health expert who evaluated me and approved my ESA letter and trust me, it was more than just a letter.“",
    date: "May 27, 2026",
    videoId: "figN4V7ThbM",
    videoUrl: "https://www.youtube.com/embed/figN4V7ThbM?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/figN4V7ThbM/maxresdefault.jpg",
  },
  {
    id: 2,
    name: "Deana M",
    rating: 5,
    quote:
      "“The evaluation was respectful, quick, and thorough. Having a legitimate ESA letter has brought immense peace of mind for me and my companion animal.“",
    date: "May 21, 2026",
    videoId: "TV4dghtuqak",
    videoUrl: "https://www.youtube.com/embed/TV4dghtuqak?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/TV4dghtuqak/maxresdefault.jpg",
  },
  {
    id: 3,
    name: "Constance",
    rating: 5,
    quote:
      "“Looking for an ESA letter in Houston was stressful until I found My ESA Therapist. The process was fast, legitimate, and helped keep my emotional support dog with me.“",
    date: "July 08, 2026",
    videoId: "vId0sRVPY0I",
    videoUrl: "https://www.youtube.com/embed/vId0sRVPY0I?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/vId0sRVPY0I/maxresdefault.jpg",
  },
  {
    id: 4,
    name: "Leighann",
    rating: 5,
    quote:
      "“The doctor was so kind, patient, and understanding during my consultation. The entire experience was smooth, legitimate, and completely stress-free.“",
    date: "June 22, 2026",
    videoId: "gxdipq0J2No",
    videoUrl: "https://www.youtube.com/embed/gxdipq0J2No?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/gxdipq0J2No/maxresdefault.jpg",
  },
  {
    id: 5,
    name: "April E",
    rating: 5,
    quote:
      "“Customer service was responsive from the very start. The consultation was authentic, licensed, and completed quickly without any hassle.“",
    date: "June 05, 2026",
    videoId: "Mjf33Y0NvVc",
    videoUrl: "https://www.youtube.com/embed/Mjf33Y0NvVc?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/Mjf33Y0NvVc/maxresdefault.jpg",
  },
  {
    id: 6,
    name: "Mariah Ogles",
    rating: 5,
    quote:
      "“I was hesitant at first, but My ESA Therapist exceeded all expectations. The therapist was truly compassionate and my housing accepted the letter with zero issues.“",
    date: "May 14, 2026",
    videoId: "rPtmxr05tsc",
    videoUrl: "https://www.youtube.com/embed/rPtmxr05tsc?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/rPtmxr05tsc/maxresdefault.jpg",
  },
  {
    id: 7,
    name: "Anita R",
    rating: 5,
    quote:
      "“My experience was wonderful. The consultation was easy to schedule, completely confidential, and answered every question I had about my ESA rights.“",
    date: "May 02, 2026",
    videoId: "FAs98teKzUk",
    videoUrl: "https://www.youtube.com/embed/FAs98teKzUk?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/FAs98teKzUk/maxresdefault.jpg",
  },
];

export function VideoTestimonialsGridSection() {
  const [activeVideo, setActiveVideo] = useState<VideoReviewItem | null>(null);

  return (
    <section className="relative w-full bg-[#FAF7F2] pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-24 lg:pb-32">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-[820px] mx-auto mb-10 sm:mb-14">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] leading-tight sm:leading-[54px] text-[#2E5A66] tracking-[-0.00015em] mb-3 sm:mb-4">
            Client Video Testimonials
          </h2>
          <p className="font-sans font-semibold text-base sm:text-lg lg:text-[18px] leading-relaxed sm:leading-[30px] text-[#5F6B6F]">
            Watch our clients share their personal experiences and success stories
          </p>
        </div>

        {/* 7 Cards Grid: 2 Columns on desktop with 7th card centered */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1256px] mx-auto">
          {VIDEO_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white shadow-[0px_1px_4px_rgba(0,0,0,0.15)] rounded-[20px] overflow-hidden flex flex-col sm:flex-row items-center transition-transform hover:-translate-y-1 duration-200 lg:last:col-span-2 lg:last:max-w-[616px] lg:last:w-full lg:last:mx-auto"
            >
              {/* Left Video Thumbnail (301px x 370px) */}
              <div
                onClick={() => setActiveVideo(review)}
                className="w-full sm:w-[301px] h-[340px] sm:h-[370px] relative shrink-0 cursor-pointer group overflow-hidden bg-slate-900"
                role="button"
                tabIndex={0}
                aria-label={`Play testimonial video from ${review.name}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveVideo(review);
                  }
                }}
              >
                <Image
            quality={90}
                  src={review.thumbnail}
                  alt={`${review.name} Video Testimonial`}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, 301px"
                />

                {/* Subtle dark gradient overlay for contrast */}
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors" />

                {/* YouTube Red Play Button Badge */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[58px] h-[40px] rounded-xl bg-[#FF0000] text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#E60000] transition-all duration-200">
                    <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Content Panel (273px width on desktop) */}
              <div className="flex-1 w-full p-6 sm:py-9 sm:pr-7 sm:pl-[18px] flex flex-col justify-between h-full min-h-[290px] sm:min-h-[350px]">
                {/* Name & Stars */}
                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-2xl sm:text-[28px] leading-[36px] text-[#2E5A66] tracking-[-0.00015em]">
                    {review.name}
                  </h3>

                  {/* 5 Accent Gold Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 sm:w-6 h-5 sm:h-6 text-[#E8B92C] fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Review Quote */}
                <p className="font-sans font-semibold text-[15px] sm:text-[16px] leading-[25px] sm:leading-[26px] text-[#5F6B6F] my-4">
                  {review.quote}
                </p>

                {/* Date */}
                <div className="text-right pt-2 border-t border-slate-100 sm:border-0">
                  <span className="font-sans font-semibold text-xs sm:text-[14px] leading-[26px] text-[#5F6B6F]">
                    {review.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Popup */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-[420px] bg-black rounded-2xl overflow-hidden shadow-2xl aspect-[9/16] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Embedded Video */}
            <iframe
              src={activeVideo.videoUrl}
              title={`${activeVideo.name} Testimonial Video`}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
