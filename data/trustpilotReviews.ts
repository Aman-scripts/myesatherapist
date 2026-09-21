export interface TrustpilotReview {
  id: number;
  /** Reviewer name exactly as shown on Trustpilot. */
  name: string;
  /** Location line shown on Trustpilot. */
  location: string;
  /** Review text exactly as written by the reviewer. */
  quote: string;
  /** Review date shown on Trustpilot. */
  date: string;
  rating: 5;
}

// Real reviews from https://www.trustpilot.com/review/myesatherapist.com
export const TRUSTPILOT_REVIEWS: TrustpilotReview[] = [
  {
    id: 1,
    name: "Laura Peterson",
    location: "US",
    date: "Aug 20, 2026",
    rating: 5,
    quote: "“Quick consultation, professional licensed therapist, and my landlord accepted the letter immediately.”",
  },
  {
    id: 2,
    name: "Charles Allen",
    location: "US",
    date: "Aug 18, 2026",
    rating: 5,
    quote: "“Everything was pretty simple and easy to understand. Had a good experience overall.”",
  },
  {
    id: 3,
    name: "Harry willians",
    location: "US",
    date: "Aug 18, 2026",
    rating: 5,
    quote:
      "“The whole experience was pretty smooth and straightforward. Communication was clear, and everything was handled without any unnecessary hassle. Overall, I had a good experience.”",
  },
  {
    id: 4,
    name: "Martin Charles",
    location: "US",
    date: "Aug 17, 2026",
    rating: 5,
    quote:
      "“Professional service that makes getting an ESA letter completely hassle-free, the virtual evaluation is seamless, and customer support makes property manager verifications completely stress-free.”",
  },
  {
    id: 5,
    name: "Ethan",
    location: "US",
    date: "Aug 12, 2026",
    rating: 5,
    quote: "“I communicated with Leslie! Amazing experience! Very understanding and clear throughout the process!”",
  },
  {
    id: 6,
    name: "Grace Duncan",
    location: "US",
    date: "Jun 9, 2026",
    rating: 5,
    quote: "“Got my esa letter had some complications on double charged but was able to fix it immediately”",
  },
];
