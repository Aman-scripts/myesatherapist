"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function BlogArticleContent() {
  return (
    <div className="w-full flex-1 max-w-[870px] space-y-10 lg:space-y-12 text-[#5F6B6F] font-sans">
      
      {/* Intro Paragraph */}
      <p className="text-sm sm:text-base leading-[26px] sm:leading-[28px] font-medium text-[#5F6B6F]">
        Emotional Support Animals (ESAs) play an important role in helping individuals manage mental and emotional health conditions. Landlords frequently receive ESA letters from tenants asking for reasonable accommodations because ESAs are eligible for housing accommodations under the Fair Housing Act (FHA). However, with the rise of online ESA services, fraudulent and invalid ESA letters have become increasingly common. Understanding how to validate an ESA letter is crucial, whether you’re a landlord evaluating accommodation requests or a tenant looking for housing protections. This guide provides a practical checklist to help determine whether an emotional support animal letter is legitimate and compliant with current housing guidelines.
      </p>

      {/* 1. What is a Legitimate ESA Letter? */}
      <section id="what-is-a-legitimate-esa-letter" className="space-y-4 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-[28px] font-bold text-[#2E5A66] leading-[36px] tracking-tight">
          What is a Legitimate ESA Letter?
        </h2>
        <p className="text-sm sm:text-base leading-[26px] sm:leading-[28px] font-medium">
          A legitimate ESA letter is a written recommendation from a licensed mental health professional (LMHP) stating that an individual has a qualifying mental or emotional health condition and benefits from the presence of an emotional support animal. The qualifying diagnosis itself does not have to be disclosed in the letter; a valid ESA letter should discuss how the ESA helps the individual with their disability. A valid ESA letter must also have an accompanying mental health assessment by a licensed mental health professional. An ID card, vest, online database listing, or registration certificate is not proof of a legit ESA letter. Rather, it is a formal medical record that backs up a request for housing accommodations.
        </p>
      </section>

      {/* 2. Why ESA Letter Verification Matters? */}
      <section id="why-verification-matters" className="space-y-4 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-[28px] font-bold text-[#2E5A66] leading-[36px] tracking-tight">
          Why ESA Letter Verification Matters?
        </h2>
        <p className="text-sm sm:text-base leading-[26px] sm:leading-[28px] font-medium">
          For tenants, having a legitimate ESA letter helps ensure housing rights are protected and reduces the risk of accommodation denials.
        </p>
        <p className="text-sm sm:text-base leading-[26px] sm:leading-[28px] font-medium">
          Verification keeps landlords in compliance with fair housing laws while preventing fraud. Property owners have the right to review ESA documentation, but they must do so without violating a tenant’s privacy rights. Understanding what makes an ESA letter valid can help both parties avoid unnecessary disputes.
        </p>

        {/* Quote Callout Box: Frame 1000012004 */}
        <div className="w-full bg-[#E8B92C]/20 rounded-[15px] flex flex-row items-center overflow-hidden gap-3.5 sm:gap-[16px] pr-4 sm:pr-8 lg:pr-[67px] min-h-[69px] mt-4">
          <div className="w-[14px] sm:w-[17px] self-stretch bg-[#E8B92C] rounded-l-[10px] shrink-0 min-h-[69px]" />
          <p className="font-sans font-semibold text-[13px] sm:text-[14px] leading-[22px] sm:leading-[26px] text-[#5F6B6F] py-3 sm:py-3.5">
            “An ESA letter reflects a proper clinical judgement, not a parent’s preference or a child’s attachment for an animal.” - Leslie K. Gamble. Licensed Independent Clinical Social Worker
          </p>
        </div>
      </section>

      {/* 3. Tenant Checklist */}
      <section id="tenant-checklist" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-[28px] font-bold text-[#2E5A66] leading-[36px] tracking-tight">
          Tenant Checklist: How to Ensure Your ESA Letter Is Legitimate
        </h2>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-heading text-lg sm:text-[20px] font-bold text-[#2E5A66] leading-[28px]">
              Confirm the Provider is Licensed
            </h3>
            <p className="text-sm sm:text-base leading-[26px] font-medium">
              The most crucial requirement is that the letter must be from a mental health professional with an active state license and a National Provider Identifier (NPI) number. This may include: Licensed Professional Counselors (LPCs), Licensed Clinical Social Workers (LCSWs), Psychologists, Psychiatrists, Licensed Marriage and Family Therapists (LMFTs). The provider should be legally authorized to practice in your state. While primary care doctors/general physicians (MDs/DOs) can legally write ESA letters, many do not feel comfortable making a mental health evaluation and will often refer their patient out to a licensed mental health provider.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-heading text-lg sm:text-[20px] font-bold text-[#2E5A66] leading-[28px]">
              Verify the Letter Includes Professional Information
            </h3>
            <p className="text-sm sm:text-base leading-[26px] font-medium">
              A legitimate ESA letter should contain: The provider’s full name, Professional license number, State of licensure, Contact information, Official letterhead, Date of mental health assessment. Missing professional credentials may raise concerns about the document’s validity.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-heading text-lg sm:text-[20px] font-bold text-[#2E5A66] leading-[28px]">
              Ensure the Letter Is Personalized
            </h3>
            <p className="text-sm sm:text-base leading-[26px] font-medium">
              Generic ESA letters are often red flags. The letter should include the ESA owner’s name, date of birth, and how the ESA supports them in managing specific symptoms of their disability. Remember, the disability/diagnosis itself does not need to be disclosed. A valid emotional support animal letter should be written specifically for the individual and confirm that the professional has evaluated their mental health needs.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-heading text-lg sm:text-[20px] font-bold text-[#2E5A66] leading-[28px]">
              Watch for Instant Approvals
            </h3>
            <p className="text-sm sm:text-base leading-[26px] font-medium">
              Be cautious of websites promising the following: Instant or same-day ESA letters, Guaranteed approval, No consultation or assessment required, ESA registrations as proof of legitimacy. A legitimate ESA recommendation requires an assessment by a licensed professional before a letter can be issued.
            </p>
          </div>
        </div>

        {/* Infographic 1: Tenant Checklist */}
        <div className="w-full relative rounded-[20px] overflow-hidden shadow-md my-8 bg-white border border-[#DECDBB]/50">
          <Image
            src="/blogs-tentant-checklist.png"
            alt="Tenant Checklist: How to Ensure Your ESA Letter Is Legitimate"
            width={870}
            height={1300}
            priority
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* 4. Landlord Checklist */}
      <section id="landlord-checklist" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-[28px] font-bold text-[#2E5A66] leading-[36px] tracking-tight">
          Landlord Checklist: How to Verify an ESA Letter?
        </h2>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-heading text-lg sm:text-[20px] font-bold text-[#2E5A66] leading-[28px]">
              Review the Letterhead and Licensing Information
            </h3>
            <p className="text-sm sm:text-base leading-[26px] font-medium">
              Start by confirming that the letter includes: Professional letterhead, The provider’s full name, License number, State of licensure, Contact details, Signature of the licensed provider (not simply a typed name). Professional credentials should be clear and verifiable.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-heading text-lg sm:text-[20px] font-bold text-[#2E5A66] leading-[28px]">
              Verify the Letter Includes Professional Information
            </h3>
            <p className="text-sm sm:text-base leading-[26px] font-medium">
              A legitimate ESA letter should contain: The provider’s full name, Professional license number, State of licensure, Contact information, Official letterhead, Date of mental health assessment. Missing professional credentials may raise concerns about the document’s validity.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-heading text-lg sm:text-[20px] font-bold text-[#2E5A66] leading-[28px]">
              Confirm the Provider Exists
            </h3>
            <p className="text-sm sm:text-base leading-[26px] font-medium">
              Landlords may contact the provider solely to verify the following: The provider authored the letter, The provider is licensed, The letter is authentic. Confidential medical records, diagnosis specifics, treatment plans, and other protected health information should not be requested by landlords.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-heading text-lg sm:text-[20px] font-bold text-[#2E5A66] leading-[28px]">
              Check for Individualized Language
            </h3>
            <p className="text-sm sm:text-base leading-[26px] font-medium">
              Legitimate ESA letters are generally specific to the individual and clarify the need for an emotional support animal in a professional manner. Documents that appear copied, generic, or mass-produced may warrant additional review.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-heading text-lg sm:text-[20px] font-bold text-[#2E5A66] leading-[28px]">
              Understand What Landlords Cannot Request
            </h3>
            <p className="text-sm sm:text-base leading-[26px] font-medium">
              While landlords can verify documentation, they cannot ask for the following: Demand detailed medical records (such as progress notes, treatment plans, or entire mental health assessments), Require disclosure of a specific diagnosis or disability, Ask about treatment history for the diagnosis or disability, Charge pet fees for a valid ESA accommodation. Housing providers have to strike a balance between fair housing compliance and verification.
            </p>
          </div>
        </div>

        {/* Infographic 2: Landlord Checklist */}
        <div className="w-full relative rounded-[20px] overflow-hidden shadow-md my-8 bg-white border border-[#DECDBB]/50">
          <Image
            src="/blogs-landlord-checklist.png"
            alt="Landlord Checklist: How to Verify an ESA Letter"
            width={870}
            height={1300}
            priority
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* 5. Common Signs of a Fake ESA Letter */}
      <section id="common-signs-of-a-fake-esa-letter" className="space-y-4 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-[28px] font-bold text-[#2E5A66] leading-[36px] tracking-tight">
          Common Signs of a Fake ESA Letter
        </h2>
        <p className="text-sm sm:text-base leading-[26px] font-medium">
          Watch for these warning signs:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base leading-[26px] font-medium">
          <li>No licensed mental health professional involved</li>
          <li>Missing license number</li>
          <li>No provider contact information</li>
          <li>No letterhead for the provider or their mental health practice</li>
          <li>Instant approval without a mental health evaluation</li>
          <li>ESA registration certificates are used instead of a letter</li>
          <li>Generic templates with no personalized assessment</li>
          <li>Claims that registration alone grants legal rights</li>
        </ul>
        <p className="text-sm sm:text-base leading-[26px] font-medium pt-2">
          Remember that there is no official federal ESA registry. A legitimate ESA letter for housing from a qualified professional cannot be replaced by registration websites.
        </p>
      </section>

      {/* 6. Ensuring Compliance */}
      <section id="ensuring-compliance" className="space-y-4 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-[28px] font-bold text-[#2E5A66] leading-[36px] tracking-tight">
          How My ESA Therapist Helps Ensure Compliance?
        </h2>
        <p className="text-sm sm:text-base leading-[26px] sm:leading-[28px] font-medium">
          At My ESA Therapist, individuals connect with licensed mental health professionals who evaluate whether an emotional support animal may be appropriate for their situation. When qualified, clients receive professionally prepared ESA documentation that includes the information commonly requested by housing providers. The approach is confidential, secure, and designed to align with the latest housing accommodation standards.
        </p>
      </section>

      {/* Inline CTA Banner: Frame 1000011717 */}
      <div
        className="w-full rounded-[20px] sm:rounded-[24px] xl:rounded-[30px] p-6 sm:p-8 lg:p-7 xl:p-11 text-[#FAF7F2] relative overflow-hidden shadow-lg"
        style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
      >
        {/* Paw decoration background (Scaled appropriately for 1024px and up) */}
        <div className="hidden sm:block absolute right-0 sm:right-2 lg:right-3 xl:right-6 bottom-0 w-[140px] sm:w-[180px] lg:w-[170px] xl:w-[260px] h-[140px] sm:h-[180px] lg:h-[170px] xl:h-[260px] opacity-40 xl:opacity-75 pointer-events-none z-0">
          <Image
            src="/paw-icons.png"
            alt=""
            fill
            className="object-contain object-right-bottom"
          />
        </div>

        <div className="relative z-10 max-w-[620px] mx-auto sm:mx-0 text-center sm:text-left flex flex-col items-center sm:items-start space-y-3 sm:space-y-4">
          <h3 className="font-heading text-xl sm:text-2xl lg:text-[26px] xl:text-[34px] font-bold text-[#FAF7F2] leading-[1.25] tracking-[-0.00015em] max-w-[480px]">
            Request Housing Accommodations with Confidence
          </h3>
          <p className="text-xs sm:text-sm lg:text-[14px] xl:text-base text-[#FAF7F2]/90 font-sans font-medium leading-[22px] sm:leading-[24px] xl:leading-[26px] max-w-[420px] xl:max-w-[540px]">
            A valid ESA letter can help support your housing accommodation request. Connect with a licensed mental health professional to see if you qualify.
          </p>
          <div className="pt-1.5 sm:pt-2 w-full sm:w-auto flex justify-center sm:justify-start">
            <Link
              href="#faq"
              className="inline-flex items-center justify-center px-6 py-2.5 sm:px-7 sm:py-3 xl:px-8 xl:py-3.5 rounded-[12px] bg-[#E8B92C] shadow-[0px_1px_4px_#E8B92C] hover:opacity-95 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="font-[family-name:var(--font-lato)] font-bold text-sm sm:text-base xl:text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72]">
                Start your Evaluation
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* 7. Final Thoughts */}
      <section id="final-thoughts" className="space-y-4 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-[28px] font-bold text-[#2E5A66] leading-[36px] tracking-tight">
          Final Thoughts
        </h2>
        <p className="text-sm sm:text-base leading-[26px] sm:leading-[28px] font-medium">
          As ESA accommodation requests become more common, understanding how to verify an ESA letter benefits both tenants and landlords. A legitimate ESA letter should come from a licensed mental health professional, include verifiable credentials, and reflect an individualized assessment. Generic letters without information specific to the individual pursuing an ESA are a sign of a fake ESA letter.
        </p>
        <p className="text-sm sm:text-base leading-[26px] sm:leading-[28px] font-medium">
          For tenants, obtaining proper documentation can help support housing rights. For landlords, following a consistent verification process can reduce fraud concerns while ensuring compliance with fair housing obligations. Taking a few minutes to verify an ESA letter correctly can prevent misunderstandings and create a smoother housing experience for everyone involved.
        </p>
      </section>

    </div>
  );
}
