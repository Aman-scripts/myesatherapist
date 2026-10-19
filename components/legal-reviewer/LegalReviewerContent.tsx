import React from "react";
import { ProfileShell } from "./ProfileShell";
import {
  AboutSection,
  BulletColumns,
  DisclosureCard,
  EducationEntry,
  EducationSection,
  NumberedSection,
  QuoteStatement,
  SectionDivider,
  SidebarDivider,
  SidebarList,
  SidebarSection,
  TagList,
} from "./ReviewerUI";

// Content follows the client-approved Awais Arshad profile doc verbatim.
const FOCUS_AREAS = [
  "White Collar Criminal Defense",
  "Government Investigations and Enforcement",
  "Regulatory Compliance",
  "Financial and Business Law",
  "Criminal Law and Procedure",
  "Administrative Law",
  "U.S. Legal Research and Content Review",
  "Client-Facing Legal Education",
];

// Awais Arshad legal reviewer profile (layout from the Legal Reviewer Figma page)
export function LegalReviewerContent() {
  return (
    <ProfileShell
      name="Awais Arshad"
      avatar="/legal_reviewer/legal-reviwer.webp"
      avatarAlt="Awais Arshad - Legal Reviewer & Attorney at Law"
      sidebar={
        <>
          <SidebarSection title="Education">
            <SidebarList
              items={[
                { label: "LL.M.", year: "2021" },
                { label: "Bar Professional Training Course", year: "2015" },
                { label: "LL.B. (Hons.)", year: "2014" },
              ]}
            />
          </SidebarSection>
          <SidebarDivider />
          <SidebarSection title="Focus Areas">
            <SidebarList items={FOCUS_AREAS.map((label) => ({ label }))} />
          </SidebarSection>
        </>
      }
    >
      <AboutSection
        heading="Legal Insight Behind the Information You Read"
        keepCase
        showBadge={false}
        paragraphs={[
          "Awais Arshad is a New York-licensed attorney and legal writer with 12 years of legal experience. He holds an LL.M. from Columbia Law School, where he was a Fulbright Scholar and received the Joseph V. Heffernan Scholarship. He was called to the Bar of England and Wales in 2016 and is also admitted in Pakistan. As a Legal Writer at Tax Law Offices of David W. Klasing, Awais has extensive experience writing, editing, and fact-checking U.S. legal content.",
          "At My ESA Therapist, he reviews legal content related to emotional support animals, checking claims for accuracy, currentness, reliable source support, and compliance with applicable federal and state laws. He also helps ensure legal information remains clear and accessible to non-lawyer readers.",
        ]}
      >
        <TagList
          tags={[
            "Legal Writing",
            "Fact-Checking & Compliance",
            "Fair Housing Law",
            "Federal & State Regulations",
            "Legal Accessibility",
            "Clear Client Communication",
          ]}
        />
      </AboutSection>

      <SectionDivider />

      <EducationSection title="Education & Academic Background">
        <EducationEntry degree="LL.M." institution="Columbia Law School, New York, May 2021" keepCase />
        <EducationEntry degree="Bar Professional Training Course" institution="BPP University, London, November 2015" keepCase />
        <EducationEntry degree="LL.B. (Hons.), Upper Division" institution="BPP University, London, September 2014" keepCase />
      </EducationSection>

      <SectionDivider />

      <BulletColumns title="Focus Areas" items={FOCUS_AREAS} />

      <SectionDivider />

      <NumberedSection
        title="Content Review Responsibilities"
        keepCase
        items={[
          {
            title: "Types of legal content I review",
            description:
              "I review public-facing legal content, including website copy, articles, blog posts, FAQs, legal explainers, compliance summaries, client guides, and educational materials intended for non-lawyer audiences.",
          },
          {
            title: "Legal review process",
            description:
              "I identify the legal claims being made and assess whether they are accurate, current, properly qualified, and supported by reliable authority. I flag overbroad, outdated, misleading, or jurisdiction-specific statements and make revisions where needed.",
          },
          {
            title: "How I verify legal accuracy",
            description:
              "I verify legal information using statutes, regulations, agency guidance, case law, and reputable secondary legal sources. I also use Westlaw and LexisNexis to research current legal authority, check citations, and confirm that the content accurately reflects applicable federal and state laws.",
          },
        ]}
      />

      <SectionDivider />

      <QuoteStatement
        title="Clinical Review Statement"
        text="My role is to review legal content for accuracy, clarity, source support, and compliance with applicable legal standards. I verify legal claims against credible authority, flag overbroad or misleading language, and revise content so it remains both legally reliable and understandable for a non-lawyer audience."
      />

      <DisclosureCard
        title="Reviewer Disclosure"
        keepCase
        items={[
          "I authorize My ESA Therapist to display my name, photo, biography, credentials, and professional information on its website.",
          "I have reviewed and approved the information provided.",
          "I understand that my review of website content does not establish an attorney-client relationship with website visitors.",
        ]}
      />
    </ProfileShell>
  );
}
