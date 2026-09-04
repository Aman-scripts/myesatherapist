"use client";

import React, { useState } from "react";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

export interface FaqItem {
  num: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    num: "01.",
    question: "What Is an ESA Letter?",
    answer:
      "An Emotional Support Animal (ESA) letter is an official document written and signed by a licensed mental health professional (LMHP). It verifies that you have a qualifying mental or emotional health condition (such as anxiety, depression, PTSD, or chronic stress) and that the companionship of your animal provides therapeutic benefits that alleviate one or more symptoms of your condition. Under the Fair Housing Act (FHA), this letter grants you the legal right to live with your support animal in housing that otherwise has 'no-pet' policies, without paying pet fees, pet rent, or pet security deposits.",
  },
  {
    num: "02.",
    question: "Who Can Write an ESA Letter?",
    answer:
      "A valid ESA letter must be issued by a state-licensed mental health professional (LMHP) or licensed healthcare provider who is authorized to practice in your state. This includes Licensed Clinical Social Workers (LCSWs), Licensed Professional Counselors (LPCs), Licensed Marriage and Family Therapists (LMFTs), Clinical Psychologists (PsyD/PhD), Psychiatrists (MD/DO), Psychiatric Mental Health Nurse Practitioners (PMHNPs), and in some cases, Primary Care Physicians.",
  },
  {
    num: "03.",
    question: "Can a Physician Write an ESA Letter?",
    answer:
      "Yes, primary care physicians and general medical doctors can legally write an ESA letter if they are treating you for a mental or emotional health condition. However, many general physicians do not feel equipped to conduct formal psychiatric assessments and typically refer patients to licensed mental health specialists (like therapists, psychologists, or psychiatrists) who specialize in emotional wellness evaluations.",
  },
  {
    num: "04.",
    question: "What Does an ESA Letter Look Like?",
    answer:
      "An authentic ESA letter is written on the clinician's official professional letterhead. It includes the provider's full name, clinical license type, state of licensure, license number, National Provider Identifier (NPI), official contact information, the date of evaluation, the clinician's signature, and a clear clinical recommendation stating that an emotional support animal is a necessary accommodation for your well-being.",
  },
  {
    num: "05.",
    question: "What Does an ESA Letter Need to Say?",
    answer:
      "Under HUD and Fair Housing Act guidelines, an ESA letter must state that: 1) You are a patient under the provider's care; 2) You have a mental or emotional impairment that substantially limits one or more major life activities; 3) The presence of your emotional support animal provides therapeutic relief that alleviates your symptoms. Crucially, the letter does NOT need to disclose your specific medical diagnosis or detailed treatment notes, protecting your medical privacy.",
  },
  {
    num: "06.",
    question: "How Long Is an ESA Letter Good For?",
    answer:
      "ESA letters for housing are typically valid for one full year (12 months) from the date of issuance. Landlords and property management companies have the legal right to request an annual renewal to verify that you are still actively consulting with a licensed healthcare provider and that your need for an accommodation continues.",
  },
  {
    num: "07.",
    question: "How Do You Tell If an ESA Letter Is Legitimate?",
    answer:
      "A legitimate ESA letter always comes from a verified, state-licensed clinician after a clinical evaluation. Red flags of fake ESA letters include: instant approval without a consultation, generic certificates or registration IDs (there is no official government ESA registry), lifetime validity promises, missing clinician license numbers, and services selling downloadable badge/vest kits without clinician involvement.",
  },
  {
    num: "08.",
    question: "How to Get an ESA Letter Online?",
    answer:
      "Getting an ESA letter online with My ESA Therapist is straightforward and 100% legal: 1) Complete our simple, confidential pre-screening questionnaire; 2) Connect with a licensed therapist in your state for a telehealth evaluation; 3) If qualified, your therapist will issue your official, signed ESA letter delivered directly to your email within 24 to 48 hours.",
  },
  {
    num: "09.",
    question: "How Many Emotional Support Animals Can You Have?",
    answer:
      "There is no strict federal limit on the number of ESAs an individual can have under the Fair Housing Act, as long as each animal serves a distinct therapeutic need and your licensed clinician certifies the necessity for each animal in separate or combined evaluations. However, accommodation requests must still remain reasonable given the size and nature of the dwelling.",
  },
  {
    num: "10.",
    question: "Can Cats Qualify as Emotional Support Animals?",
    answer:
      "Yes! Cats are among the most common and effective emotional support animals. Unlike service animals (which under the ADA are restricted to dogs and miniature horses), any domesticated companion animal—including cats, dogs, rabbits, birds, and small pets—can qualify as an Emotional Support Animal under the Fair Housing Act.",
  },
  {
    num: "11.",
    question: "Are Emotional Support Animals Service Animals?",
    answer:
      "No, ESAs and Service Animals have distinct legal definitions. Service Animals (specifically trained dogs) are covered under the Americans with Disabilities Act (ADA) and are trained to perform specific physical tasks for individuals with disabilities (such as guiding the blind or alerting to seizures), granting them access to all public places. ESAs provide comfort and emotional support through their presence alone and have legal protections in housing under the Fair Housing Act, but not automatic public access to restaurants or stores.",
  },
  {
    num: "12.",
    question: "Can Emotional Support Animals Go Anywhere?",
    answer:
      "No. ESAs have federally protected rights in residential housing under the Fair Housing Act (FHA), allowing them to live in 'no-pet' housing without fees. However, ESAs do not have public access rights under the ADA, meaning businesses, grocery stores, restaurants, and hotels are not legally required to allow ESAs on their premises unless they have pet-friendly policies.",
  },
  {
    num: "13.",
    question: "What Are the Most Common Reasons for Getting an ESA Letter?",
    answer:
      "The most common conditions for which clinicians recommend ESAs include Generalized Anxiety Disorder (GAD), Major Depressive Disorder (MDD), Post-Traumatic Stress Disorder (PTSD), Social Anxiety, Panic Disorder, Chronic Stress, Bipolar Disorder, Insomnia, and grief or trauma-related emotional distress.",
  },
  {
    num: "14.",
    question: "What Are the Qualifications for Acquiring an Emotional Support Animal?",
    answer:
      "To qualify, you must be evaluated by a licensed mental health professional who determines that you have an emotional or mental health condition that impacts your daily life, and that having a companion animal provides measurable therapeutic support that mitigates your symptoms.",
  },
  {
    num: "15.",
    question: "What Is the Most Popular ESA Used by People with Mental Health Problems?",
    answer:
      "Dogs and cats are by far the most popular emotional support animals, accounting for over 90% of ESA accommodations due to their deep emotional bonding, responsive behavior, and soothing presence. Other animals such as rabbits, birds, and guinea pigs are also common.",
  },
  {
    num: "16.",
    question: "What Is the ESA Registration Process?",
    answer:
      "It is important to understand that there is NO official government or federal registry for emotional support animals. Any website claiming to 'register' or 'certify' your pet into a national database is selling an unnecessary certificate. The ONLY legally recognized document under HUD and the Fair Housing Act is an official ESA Letter signed by a state-licensed healthcare provider.",
  },
  {
    num: "17.",
    question: "What Are the Differences Between a Service Animal, Therapy Animal, and Emotional Support Animal?",
    answer:
      "• Service Animals: Specially trained dogs that perform specific tasks for individuals with disabilities. Protected under the ADA with full public access rights.\n• Emotional Support Animals (ESAs): Companion animals that provide comfort and companionship to relieve mental health symptoms. Protected in housing under the FHA, but without public access rights.\n• Therapy Animals: Animals trained to provide comfort and affection to people in clinical settings like hospitals, nursing homes, and schools. They do not have special housing or public access protections for their personal handlers.",
  },
  {
    num: "18.",
    question: "When Does One Utilize the Help of a Service Dog?",
    answer:
      "Service dogs are utilized when an individual has a physical, sensory, psychiatric, or intellectual disability that requires a dog specifically trained to perform tasks the person cannot easily perform themselves—such as guide work for visual impairment, mobility assistance, diabetic alert, psychiatric task interruption (deep pressure therapy, panic attack grounding), or seizure response.",
  },
  {
    num: "19.",
    question: "How Do You Benefit from a Therapy Animal?",
    answer:
      "Therapy animals typically visit healthcare facilities, schools, and disaster zones to reduce patient stress, lower blood pressure, alleviate feelings of loneliness, and enhance emotional healing in group or community therapeutic settings.",
  },
  {
    num: "20.",
    question: "What Are the Several Benefits of Having an ESA?",
    answer:
      "Key benefits include:\n• Clinical & Emotional: Reduced anxiety and panic, lower depression levels, calming sensory stimulation, unconditional emotional companionship, and structured daily routine.\n• Legal & Financial: Complete exemption from landlord 'no-pet' restrictions, waiver of monthly pet rent and non-refundable pet deposits, and protection against breed and weight limitations under the federal Fair Housing Act.",
  },
];

export function FaqAccordionSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq-list" className="w-full bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-[1016px] mx-auto space-y-4 sm:space-y-6">
        {FAQ_DATA.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={faq.num}
              className="w-full rounded-[20px] overflow-hidden shadow-sm transition-all duration-200"
            >
              {/* Accordion Trigger Header */}
              <button
                type="button"
                onClick={() => toggleAccordion(idx)}
                className="w-full min-h-[64px] sm:min-h-[74px] flex items-stretch text-left rounded-[20px] overflow-hidden transition-all duration-200 relative cursor-pointer group"
                style={{ backgroundImage: TEAL_GRADIENT }}
                aria-expanded={isOpen}
              >
                {/* Gold Number Badge (Frame 1000011949: #E8B92C) */}
                <div className="w-[60px] sm:w-[74px] xl:w-[78px] shrink-0 bg-[#E8B92C] flex items-center justify-center font-sans font-extrabold text-xl sm:text-2xl xl:text-[28px] text-[#2E5A66] leading-none rounded-l-[20px] self-stretch">
                  {faq.num}
                </div>

                {/* Question Title & Plus/Minus Icon */}
                <div className="flex-1 py-3 sm:py-4 px-4 sm:px-6 xl:px-7 flex items-center justify-between gap-3 sm:gap-4">
                  <span className="font-sans font-semibold text-sm sm:text-base xl:text-[18px] text-white leading-snug sm:leading-[26px] xl:leading-[30px] pr-2">
                    {faq.question}
                  </span>

                  {/* Plus Icon (+) with smooth rotate */}
                  <span
                    className={`w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 3V15M3 9H15"
                        stroke="#FAF7F2"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </button>

              {/* Accordion Body */}
              {isOpen && (
                <div className="bg-[#FAF7F2] px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-[16px] text-[#5F6B6F] font-sans font-medium leading-[26px] sm:leading-[28px] border border-[#2E5A66]/15 border-t-0 rounded-b-[20px] animate-fadeIn whitespace-pre-line">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
