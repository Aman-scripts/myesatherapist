import React from "react";
import { ProfileShell } from "./ProfileShell";
import {
  AboutSection,
  BulletColumns,
  DisclosureCard,
  EducationEntry,
  EducationSection,
  FocusCardRow,
  NumberedSection,
  QuoteStatement,
  SectionDivider,
  SidebarInline,
  SidebarList,
  SidebarSection,
} from "./ReviewerUI";

// Max Phillips clinical reviewer profile (same layout as the Legal Reviewer Figma page)
export function MaxPhillipsReviewerContent() {
  return (
    <ProfileShell
      name="Max Phillips"
      title="MSW, LCSW"
      avatar="/author/max-phill.webp"
      avatarAlt="Max Phillips - Trauma Therapist & Licensed Clinical Social Worker"
      badges={["16 Years Experience"]}
      sidebar={
        <>
          <SidebarSection title="Educational Qualifications">
            <SidebarList
              items={[
                { label: "Master of Social Work (MSW)", year: "2020" },
                { label: "Bachelor of Science in Justice Systems, Pre-Law", year: "2017" },
                { label: "Licensed Clinical Social Worker (LCSW)", year: "Present" },
              ]}
            />
          </SidebarSection>
          <SidebarSection title="Authorized to Practice">
            <SidebarInline items={["Missouri"]} />
          </SidebarSection>
        </>
      }
    >
      <AboutSection
        heading="Where Clinical Knowledge Meets the Realities of Mental Health"
        keepCase
        showBadge={false}
        paragraphs={[
          "Max Phillips, MSW, LCSW, is a trauma therapist and licensed clinical social worker based in Missouri who contributes clinical insight to mental health content at My ESA Therapist. With six years of experience as a therapist and ten years as a social worker, he focuses on helping individuals heal from childhood trauma and build a life worth living. His areas of expertise include PTSD, BPD, anxiety, ADHD, autism, OCD, DID, sexual trauma, suicidal ideation, and self-harming behaviors.",
          "His therapeutic approaches include EMDR, DBT, psychodynamic therapy, attachment theory, feminist theory, anger management, and motivational interviewing. Max also brings his clinical perspective to educational resources covering autism and working with gender-diverse clients.",
        ]}
      >
        <FocusCardRow
          cards={[
            { title: "Trauma Therapy", subtitle: "PTSD & Healing" },
            { title: "Clinical Social Work", subtitle: "Diagnosis & Treatment" },
            { title: "Therapeutic Approaches", subtitle: "EMDR & DBT" },
          ]}
        />
      </AboutSection>

      <SectionDivider />

      <EducationSection title="Education & Academic Background">
        <EducationEntry degree="Master of Social Work (MSW)" institution="University of Southern California, 2020" keepCase />
        <EducationEntry degree="Bachelor of Science in Justice Systems, Pre-Law" institution="Truman State University, 2017" keepCase />
        <EducationEntry degree="Licensed Clinical Social Worker (LCSW)" institution="Missouri, License #2023001049" keepCase />
      </EducationSection>

      <SectionDivider />

      <BulletColumns
        title="Focus Areas"
        items={[
          "Trauma and PTSD",
          "Anxiety and OCD",
          "ADHD and Autism",
          "BPD and Emotional Regulation",
          "Suicidal Ideation and Self-Harm",
          "Sexual Trauma and Identity",
        ]}
      />

      <SectionDivider />

      <NumberedSection
        title="Content Review Responsibilities"
        keepCase
        items={[
          {
            title: "Clinical Accuracy",
            description:
              "Reviews mental health content for clinical accuracy, ensuring information reflects established therapeutic principles, terminology, and evidence-informed practices.",
          },
          {
            title: "Trauma-Informed Review",
            description:
              "Evaluates content involving trauma, PTSD, anxiety, and related concerns through a trauma-informed lens that prioritizes accuracy and appropriate context.",
          },
          {
            title: "Mental Health Clarity",
            description:
              "Helps ensure complex mental health topics are presented clearly, responsibly, and in language that is accessible to a general audience.",
          },
        ]}
      />

      <SectionDivider />

      <QuoteStatement
        title="Clinical Review Statement"
        text="My role is to review mental health content for clinical accuracy, clarity, appropriate terminology, and responsible presentation. I evaluate mental health information through my clinical experience and trauma-informed perspective, helping ensure content is accurate, accessible, and appropriate for a general audience."
      />

      <DisclosureCard
        title="Reviewer Disclosure"
        keepCase
        items={[
          "I authorize My ESA Therapist to display my name, photo, biography, credentials, and professional information on its website.",
          "I have reviewed and approved the information provided.",
          "I understand that my review of website content does not establish a therapist-client relationship with website visitors or constitute individual mental health treatment or professional advice.",
        ]}
      />
    </ProfileShell>
  );
}
