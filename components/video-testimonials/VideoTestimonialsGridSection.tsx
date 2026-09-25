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
    name: "Sherry H",
    rating: 5,
    quote:
      "“My ESA Therapist connected me with a licensed mental health expert who evaluated me and approved my ESA letter and trust me, it was more than just a letter.”",
    date: "January 28, 2026",
    videoId: "5sBiyUaGksg",
    videoUrl: "https://www.youtube.com/embed/5sBiyUaGksg?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/5sBiyUaGksg/maxresdefault.jpg",
  },
  {
    id: 2,
    name: "Marianne C",
    rating: 5,
    quote:
      "“All thanks to My ESA Therapist, a telehealth platform that connected me with a mental health professional for an ESA evaluation.”",
    date: "January 31, 2026",
    videoId: "vTCV7ft0C9s",
    videoUrl: "https://www.youtube.com/embed/vTCV7ft0C9s?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/vTCV7ft0C9s/maxresdefault.jpg",
  },
  {
    id: 3,
    name: "Tetiana T",
    rating: 5,
    quote:
      "“I received my ESA recommendation through My ESA Therapist, a secure telehealth platform that connects you with licensed mental health experts. The process was simple, smooth, and fully compliant with federal guidelines.”",
    date: "February 03, 2026",
    videoId: "AniVHEkqaCk",
    videoUrl: "https://www.youtube.com/embed/AniVHEkqaCk?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/AniVHEkqaCk/maxresdefault.jpg",
  },
  {
    id: 4,
    name: "Weslynne",
    rating: 5,
    quote:
      "“Finding a trustworthy place to get my ESA evaluation was really important to me. I wanted to make sure I was doing everything the right way. That’s when I found My ESA Therapist.”",
    date: "February 23, 2026",
    videoId: "FzcTbPNUUNM",
    videoUrl: "https://www.youtube.com/embed/FzcTbPNUUNM?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/FzcTbPNUUNM/maxresdefault.jpg",
  },
  {
    id: 5,
    name: "Tiffanier",
    rating: 5,
    quote:
      "“when I submitted the documentation to my landlord, it was verified and accepted instantly without any issues, which honestly gave me so much relief.”",
    date: "February 26, 2026",
    videoId: "E1jQU196Amo",
    videoUrl: "https://www.youtube.com/embed/E1jQU196Amo?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/E1jQU196Amo/maxresdefault.jpg",
  },
  {
    id: 6,
    name: "Heather B",
    rating: 5,
    quote:
      "“I was connected with a licensed mental health professional who truly listened to me and guided me through the ESA evaluation. I’m really grateful for the support I received. Thank you, My ESA Therapist.”",
    date: "February 24, 2026",
    videoId: "rxXFfiX0M4c",
    videoUrl: "https://www.youtube.com/embed/rxXFfiX0M4c?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/rxXFfiX0M4c/maxresdefault.jpg",
  },
  {
    id: 7,
    name: "Jonathan",
    rating: 5,
    quote:
      "“I received a legitimate letter that was approved by my landlord in no time. Myla gets to stay with me, and that means everything.\nDon’t risk. Do it right. Do it with My ESA Therapist.”",
    date: "February 27, 2026",
    videoId: "-w4R3O-oF-4",
    videoUrl: "https://www.youtube.com/embed/-w4R3O-oF-4?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/-w4R3O-oF-4/maxresdefault.jpg",
  },
  {
    id: 8,
    name: "Megan G",
    rating: 5,
    quote:
      "“My ESA Therapist connected me with a licensed provider who evaluated me properly. Everything was so smooth and genuine. I am glad I chose My ESA Therapist. I’d genuinely recommend them to everyone.”",
    date: "March 10, 2026",
    videoId: "0gL8FyERXa4",
    videoUrl: "https://www.youtube.com/embed/0gL8FyERXa4?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/0gL8FyERXa4/maxresdefault.jpg",
  },
  {
    id: 9,
    name: "Jill M",
    rating: 5,
    quote:
      "“Not only was my ESA request approved, but I also felt truly understood. Today, I have my ESA letter and I’m happily living with my pet, Julie, with peace of mind and confidence”",
    date: "March 24, 2026",
    videoId: "RIqLkitZFFs",
    videoUrl: "https://www.youtube.com/embed/RIqLkitZFFs?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/RIqLkitZFFs/maxresdefault.jpg",
  },
  {
    id: 10,
    name: "Jason",
    rating: 5,
    quote:
      "“Once the assessment was complete, the provider confirmed that Murphy does qualify as my ESA. I then received the ESA letter within 24 hours. All thanks to My ESA Therapist. Highly recommended!”",
    date: "March 31, 2026",
    videoId: "rIiqLFA3_VI",
    videoUrl: "https://www.youtube.com/embed/rIiqLFA3_VI?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/rIiqLFA3_VI/maxresdefault.jpg",
  },
  {
    id: 11,
    name: "Carol Jones",
    rating: 5,
    quote:
      "“The process was simple and transparent, and I was able to speak with a real mental health professional. I finally received my ESA letter within 48 hours and felt confident it was done the right way. I’m really glad I found them.”",
    date: "April 13, 2026",
    videoId: "hAvoKepvym4",
    videoUrl: "https://www.youtube.com/embed/hAvoKepvym4?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/hAvoKepvym4/maxresdefault.jpg",
  },
  {
    id: 12,
    name: "Melodie Joy",
    rating: 5,
    quote:
      "“The process was simple, and I connected with a licensed professional from home. After a quick evaluation, I received my ESA letter. \nNow I feel supported every day and have peace of mind. My ESA Therapist made everything easy.”",
    date: "April 17, 2026",
    videoId: "fjRpV_fm_lI",
    videoUrl: "https://www.youtube.com/embed/fjRpV_fm_lI?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/fjRpV_fm_lI/maxresdefault.jpg",
  },
  {
    id: 13,
    name: "Cary S",
    rating: 5,
    quote:
      "“I had a smooth experience with My ESA Therapist. The process was straightforward, communication was clear, and I received my ESA letter without unnecessary delays.”",
    date: "April 21, 2026",
    videoId: "fwyYFwp9oFk",
    videoUrl: "https://www.youtube.com/embed/fwyYFwp9oFk?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/fwyYFwp9oFk/maxresdefault.jpg",
  },
  {
    id: 14,
    name: "Helana C",
    rating: 5,
    quote:
      "“I needed an ESA letter and got one online fast, but it was fake. No consultation, nothing legit. Then I came across My ESA Therapist. They did a proper evaluation and connected me with a licensed professional. I received a valid ESA letter that actually worked.”",
    date: "April 30, 2026",
    videoId: "ObAgbpMf4nA",
    videoUrl: "https://www.youtube.com/embed/ObAgbpMf4nA?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/ObAgbpMf4nA/maxresdefault.jpg",
  },
  {
    id: 15,
    name: "Willow",
    rating: 5,
    quote:
      "“After getting scammed by a random ESA site, I almost gave up on the whole process. Then I came across My ESA Therapist and decided to try one last time. Everything was transparent; I connected with a real licensed provider, and it finally felt genuine.”",
    date: "May 01, 2026",
    videoId: "rxQ0qQycIwI",
    videoUrl: "https://www.youtube.com/embed/rxQ0qQycIwI?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/rxQ0qQycIwI/maxresdefault.jpg",
  },
  {
    id: 16,
    name: "Anita Rivas",
    rating: 5,
    quote:
      "“Great experience with My ESA Therapist! The process was quick, simple, and fully online. I connected with a licensed therapist who was professional and understanding.”",
    date: "May 02, 2026",
    videoId: "FAs98teKzUk",
    videoUrl: "https://www.youtube.com/embed/FAs98teKzUk?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/FAs98teKzUk/maxresdefault.jpg",
  },
  {
    id: 17,
    name: "Mariah Ogles",
    rating: 5,
    quote:
      "“I was honestly struggling to find a legit ESA letter in Texas, but then I found My ESA Therapist. The whole process was super simple and completely online, no stress at all.”",
    date: "May 14, 2026",
    videoId: "rPtmxr05tsc",
    videoUrl: "https://www.youtube.com/embed/rPtmxr05tsc?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/rPtmxr05tsc/maxresdefault.jpg",
  },
  {
    id: 18,
    name: "Deana Mckay",
    rating: 5,
    quote:
      "“The platform offers an actual telehealth evaluation with a licensed mental health professional, not just some online quiz. The process was so smooth, and I got my letter emailed within 48 hours!”",
    date: "May 21, 2026",
    videoId: "TV4dghtuqak",
    videoUrl: "https://www.youtube.com/embed/TV4dghtuqak?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/TV4dghtuqak/maxresdefault.jpg",
  },
  {
    id: 19,
    name: "Sheri Mahnke",
    rating: 5,
    quote:
      "“I Just gonna give you my honest take on My ESA Therapist-  it’s legit. Real licensed therapists, real telehealth appointment, HIPAA-compliant, and they’re upfront that not everyone gets approved. That honesty is what sold me.”",
    date: "May 27, 2026",
    videoId: "figN4V7ThbM",
    videoUrl: "https://www.youtube.com/embed/figN4V7ThbM?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/figN4V7ThbM/maxresdefault.jpg",
  },
  {
    id: 20,
    name: "Jessica G",
    rating: 5,
    quote:
      "“Hi, I am Jessica. I honestly didn’t realize how complicated finding a real ESA provider could be until I started looking. Some websites looked questionable and I almost gave up. Then I came across My ESA Therapist. I liked that they focused on education too, not just selling a service.”",
    date: "June 03, 2026",
    videoId: "CybsnJUGzTM",
    videoUrl: "https://www.youtube.com/embed/CybsnJUGzTM?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/CybsnJUGzTM/maxresdefault.jpg",
  },
  {
    id: 21,
    name: "April E.",
    rating: 5,
    quote:
      "“I found My ESA Therapist and what made me stay was how clearly they explained everything: what an ESA letter is, how evaluations work, and what to watch out for online. The process felt simple, but more importantly, it felt genuine.”",
    date: "June 05, 2026",
    videoId: "Mjf33Y0NvVc",
    videoUrl: "https://www.youtube.com/embed/Mjf33Y0NvVc?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/Mjf33Y0NvVc/hqdefault.jpg",
  },
  {
    id: 22,
    name: "Leighann",
    rating: 5,
    quote:
      "“Hi, I’m Leighann from Akron, Ohio. For a long time, my dog has been a valuable source of comfort during stressful days, but I wasn’t sure how to obtain legitimate ESA letter. That’s when I found My ESA Therapist.”",
    date: "June 22, 2026",
    videoId: "gxdipq0J2No",
    videoUrl: "https://www.youtube.com/embed/gxdipq0J2No?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/gxdipq0J2No/maxresdefault.jpg",
  },
  {
    id: 23,
    name: "Constance",
    rating: 5,
    quote:
      "“I never realized how much comfort my emotional support animal could bring until I needed that support the most. Hi, I’m Constance from Houston, Texas, and getting my ESA letter through My ESA Therapist was much easier than I expected.”",
    date: "July 08, 2026",
    videoId: "vId0sRVPY0I",
    videoUrl: "https://www.youtube.com/embed/vId0sRVPY0I?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/vId0sRVPY0I/maxresdefault.jpg",
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
                  <h3 className="font-sans font-bold text-2xl sm:text-[28px] leading-[36px] text-[#2E5A66] tracking-tight">
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
