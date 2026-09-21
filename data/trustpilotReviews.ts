export type ReviewSource = "trustpilot" | "consumeraffairs";

export interface CustomerReview {
  id: number;
  source: ReviewSource;
  /** Reviewer name exactly as shown on the review site. */
  name: string;
  /** Location line shown on the review site. */
  location: string;
  /** Review text exactly as written by the reviewer. */
  quote: string;
  /** Review date shown on the review site. */
  date: string;
  /** Star rating out of 5. */
  rating: number;
}

/** @deprecated use CustomerReview */
export type TrustpilotReview = CustomerReview;

// Real reviews from https://www.trustpilot.com/review/myesatherapist.com
export const TRUSTPILOT_REVIEWS: CustomerReview[] = [
  {
    id: 1,
    source: "trustpilot",
    name: "Laura Peterson",
    location: "US",
    date: "Aug 20, 2026",
    rating: 5,
    quote: "“Quick consultation, professional licensed therapist, and my landlord accepted the letter immediately.”",
  },
  {
    id: 2,
    source: "trustpilot",
    name: "Charles Allen",
    location: "US",
    date: "Aug 18, 2026",
    rating: 5,
    quote: "“Everything was pretty simple and easy to understand. Had a good experience overall.”",
  },
  {
    id: 3,
    source: "trustpilot",
    name: "Harry willians",
    location: "US",
    date: "Aug 18, 2026",
    rating: 5,
    quote:
      "“The whole experience was pretty smooth and straightforward. Communication was clear, and everything was handled without any unnecessary hassle. Overall, I had a good experience.”",
  },
  {
    id: 4,
    source: "trustpilot",
    name: "Martin Charles",
    location: "US",
    date: "Aug 17, 2026",
    rating: 5,
    quote:
      "“Professional service that makes getting an ESA letter completely hassle-free, the virtual evaluation is seamless, and customer support makes property manager verifications completely stress-free.”",
  },
  {
    id: 5,
    source: "trustpilot",
    name: "Ethan",
    location: "US",
    date: "Aug 12, 2026",
    rating: 5,
    quote: "“I communicated with Leslie! Amazing experience! Very understanding and clear throughout the process!”",
  },
  {
    id: 6,
    source: "trustpilot",
    name: "Grace Duncan",
    location: "US",
    date: "Jun 9, 2026",
    rating: 5,
    quote: "“Got my esa letter had some complications on double charged but was able to fix it immediately”",
  },
];

// Real reviews from https://www.consumeraffairs.com/pets/my-esa-therapist.html
export const CONSUMERAFFAIRS_REVIEWS: CustomerReview[] = [
  {
    id: 101,
    source: "consumeraffairs",
    name: "Tracey",
    location: "Jacksonville, FL",
    date: "Sept. 14, 2026",
    rating: 5,
    quote:
      "“I was pretty unsure about the whole ESA letter process at first, especially with so much conflicting information online. The consultation was straightforward, and I appreciated that everything was explained clearly without making unrealistic promises. The process felt professional and easy to understand from start to finish.”",
  },
  {
    id: 102,
    source: "consumeraffairs",
    name: "Edward",
    location: "Vernon Rockville, CT",
    date: "Aug. 26, 2026",
    rating: 4,
    quote:
      "“I had a smooth experience with My ESA Therapist. The evaluation was comfortable, and I was able to openly explain how my pet supports me emotionally. Everything was clearly explained, and the ESA Letter process was straightforward. I appreciated how professional and respectful the whole experience felt.”",
  },
  {
    id: 103,
    source: "consumeraffairs",
    name: "Bryan",
    location: "Plymouth, MA",
    date: "Aug. 24, 2026",
    rating: 5,
    quote:
      "“I had a really good experience with My ESA Therapist. The evaluation was straightforward, and I felt comfortable discussing my situation with the therapist. Everything was explained clearly, and I never felt rushed or pressured. The whole process was simple and professional, which made things much easier for me.”",
  },
  {
    id: 104,
    source: "consumeraffairs",
    name: "Kerry",
    location: "Decatur, IL",
    date: "Aug. 19, 2026",
    rating: 5,
    quote:
      "“I had a pretty straightforward experience with an ESA evaluation. The process was explained clearly, and I was able to speak with a mental health professional and ask questions before moving forward. I appreciated that there weren’t unrealistic promises or pressure. Overall, everything felt professional and easier than I expected.”",
  },
  {
    id: 105,
    source: "consumeraffairs",
    name: "Jimmy",
    location: "Newport, PA",
    date: "July 14, 2026",
    rating: 5,
    quote:
      "“I was a bit unsure of what to expect, I was really nervous about the process of getting an ESA letter, but the therapist I dealt with was incredibly kind and helpful. The whole thing was sorted out quickly and without hassle.”",
  },
  {
    id: 106,
    source: "consumeraffairs",
    name: "Mario",
    location: "Saint Cloud, MN",
    date: "Sept. 21, 2026",
    rating: 5,
    quote:
      "“I checked that the therapist was licensed before starting. The appointment was easy to schedule, and the whole process was pretty straightforward.”",
  },
];

/** Both sources interleaved, for sliders that show one review at a time. */
export const ALL_REVIEWS: CustomerReview[] = TRUSTPILOT_REVIEWS.flatMap((t, i) =>
  CONSUMERAFFAIRS_REVIEWS[i] ? [t, CONSUMERAFFAIRS_REVIEWS[i]] : [t],
);
