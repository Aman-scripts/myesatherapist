import React from "react";
import { EsaOnlineHowItWorks } from "@/components/esa-online/EsaOnlineHowItWorks";

const STEPS = [
  {
    image: "/esa-renewal/esa-renewal-processworks-step1.webp",
    title: "Set Up Your Appointment",
    description:
      "Create your account and choose a time that works for you to connect with a licensed mental health professional.",
  },
  {
    image: "/esa-renewal/esa-renewal-processworks-step2.webp",
    title: "Speak With Professionals",
    description:
      "During the consultation, the professional reviews your emotional and mental health concerns and assesses whether an emotional support animal is appropriate.",
  },
  {
    image: "/esa-renewal/esa-renewal-processworks-step3.webp",
    title: "Clinical Determination",
    description:
      "Following the professional evaluation, if deemed appropriate by the licensed professional, emotional support animal documentation is sent directly to your email. If not, no documentation is issued.",
  },
];

export function EsaHousingHowItWorks() {
  return (
    <EsaOnlineHowItWorks
      title="How an Emotional Support Animal (ESA) Evaluation Works"
      subtitle="A simple 3-step process to complete your housing esa letter evaluation"
      steps={STEPS}
      buttonText="Get Started"
      note="If not approved after your evaluation? You get a full refund."
      paymentNote="We authorize your payment first, but we will only charge it after your evaluation is completed."
    />
  );
}
