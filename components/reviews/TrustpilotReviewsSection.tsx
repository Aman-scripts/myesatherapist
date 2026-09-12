"use client";

import React from "react";
import Image from "next/image";

const TRUSTPILOT_REVIEWS = [
  {
    id: 1,
    name: "Jason T., Texas",
    state: "Texas",
    avatar: "/about-us/about_us-trusted-section-one.jpg",
    quote:
      "“Finally, a legitimate ESA service! My therapist was professional and understanding. Got my letter in under 24 hours and my landlord accepted it immediately.”",
  },
  {
    id: 2,
    name: "Sarah M., California",
    state: "California",
    avatar: "/about-us/about_us-trusted-section-two.jpg",
    quote:
      "“The video consultation was smooth and respectful. The therapist listened to all my anxiety concerns and provided an official letter that answered every landlord requirement.”",
  },
  {
    id: 3,
    name: "David K., Florida",
    state: "Florida",
    avatar: "/about-us/about_us-trusted-section-one.jpg",
    quote:
      "“Extremely transparent and HIPAA compliant. No hidden fees or fake ID card upselling like other sites. Truly professional healthcare service!”",
  },
  {
    id: 4,
    name: "Emily R., New York",
    state: "New York",
    avatar: "/about-us/about_us-trusted-section-two.jpg",
    quote:
      "“My housing provider accepted the recommendation letter right away and waived the pet deposit without any issues. Super grateful!”",
  },
  {
    id: 5,
    name: "Michael B., Illinois",
    state: "Illinois",
    avatar: "/about-us/about_us-trusted-section-one.jpg",
    quote:
      "“Fast, legitimate, and stress-free process from start to finish. Having my ESA letter gave me real peace of mind in my apartment.”",
  },
];

function GoogleLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
        fill="#4285F4"
      />
      <path
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.26 21.36 7.36 24 12 24z"
        fill="#34A853"
      />
      <path
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.94 0 12s.46 3.84 1.26 5.42l4.02-3.15z"
        fill="#FBBC05"
      />
      <path
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
        fill="#EA4335"
      />
    </svg>
  );
}

function StarRating() {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2, 3].map((i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FDD264" className="shrink-0">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
        </svg>
      ))}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFEEC1" className="shrink-0">
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
      </svg>
    </div>
  );
}

export function TrustpilotReviewsSection() {
  const rowOne = TRUSTPILOT_REVIEWS.slice(0, 3);
  const rowTwo = TRUSTPILOT_REVIEWS.slice(3, 5);

  return (
    <section id="trustpilot-reviews" className="w-full bg-[#FAF7F2] py-16 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] leading-tight lg:leading-[54px] font-bold text-[#2E5A66] tracking-[-0.00015em]">
            Trustpilot Reviews
          </h2>
        </div>

        {/* Reviews Cards: Matches Figma Frame 1261153766 */}
        <div className="flex flex-col items-center gap-10 lg:gap-[68px]">
          {/* Row 1: 3 cards on desktop, responsive wrap */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-[24px] w-full max-w-[1281px] justify-items-center">
            {rowOne.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* Row 2: 2 cards centered on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6 xl:gap-[24px] w-full max-w-[846px] justify-items-center">
            {rowTwo.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  review,
}: {
  review: {
    id: number;
    name: string;
    state: string;
    avatar: string;
    quote: string;
  };
}) {
  return (
    <div className="flex flex-col items-start gap-5 sm:gap-6 w-full max-w-[411px]">
      {/* Speech Bubble Box */}
      <div className="relative w-full">
        <div
          className="w-full rounded-[20px] p-6 flex flex-col gap-3 min-h-[222px] shadow-[0px_4px_10px_rgba(82,82,82,0.1)] transition-all duration-200 hover:shadow-lg"
          style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
        >
          {/* Top row: Google / source logo + 5 Stars */}
          <div className="flex items-center gap-3 h-[24px]">
            <GoogleLogo className="w-[24px] h-[21px] shrink-0" />
            <StarRating />
          </div>

          {/* Quote Text */}
          <p className="font-sans font-semibold text-[15px] sm:text-[16px] text-[#FAF7F2] leading-[26px]">
            {review.quote}
          </p>
        </div>

        {/* Speech Bubble Tail pointing down towards avatar at left: 42px */}
        <div className="absolute -bottom-[12px] left-[42px] w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[14px] border-t-[#1D6E72]" />
      </div>

      {/* Avatar + Name + State */}
      <div className="flex items-center gap-4 pl-1">
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative shadow-sm border-2 border-white/80 shrink-0 bg-[#E8F0F1]">
          <Image
            src={review.avatar}
            alt={review.name}
            fill
            className="object-cover"
            sizes="60px"
          />
        </div>
        <div className="flex flex-col justify-center gap-0.5">
          <h3 className="font-heading font-bold text-[19px] sm:text-[20px] leading-[26px] sm:leading-[28px] text-[#2C2C2C]">
            {review.name}
          </h3>
          <span className="font-sans text-[14px] sm:text-[16px] leading-[20px] text-[#777777]">
            {review.state}
          </span>
        </div>
      </div>
    </div>
  );
}
