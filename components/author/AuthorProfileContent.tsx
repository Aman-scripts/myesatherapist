import React from "react";
import { ProfileShell } from "@/components/legal-reviewer/ProfileShell";
import {
  AboutSection,
  BulletColumns,
  DisclosureCard,
  EducationEntry,
  EducationSection,
  FocusCardRow,
  SectionDivider,
  SidebarDivider,
  SidebarList,
  SidebarSection,
  TagList,
  TextSection,
} from "@/components/legal-reviewer/ReviewerUI";
import { AuthorProfile } from "@/data/authorsData";

// Author profile page (same layout as the Legal Reviewer Figma page)
export function AuthorProfileContent({ author }: { author: AuthorProfile }) {
  return (
    <ProfileShell
      name={author.name}
      title={author.credentials}
      avatar={author.avatar}
      avatarAlt={author.name}
      badges={[author.experienceLabel]}
      sidebar={
        <>
          <SidebarSection title={author.sidebarEducationTitle ?? "Education"}>
            <SidebarList items={author.sidebarEducation} />
          </SidebarSection>
          {author.sidebarFocusAreas && author.sidebarFocusAreas.length > 0 && (
            <>
              <SidebarDivider />
              <SidebarSection title="Focus Areas">
                <SidebarList items={author.sidebarFocusAreas.map((label) => ({ label }))} />
              </SidebarSection>
            </>
          )}
        </>
      }
    >
      <AboutSection heading={author.heroTagline} paragraphs={author.bioParagraphs} keepCase showBadge={false}>
        {author.focusCards ? (
          <FocusCardRow cards={author.focusCards} />
        ) : (
          author.skillTags && <TagList tags={author.skillTags} />
        )}
      </AboutSection>

      <SectionDivider />

      <EducationSection title="Education & Academic Background">
        {author.educationDetails.map((edu) => (
          <EducationEntry
            key={edu.degree}
            degree={edu.degree}
            field={edu.field}
            institution={edu.institution}
            date={edu.year}
            keepCase
          />
        ))}
      </EducationSection>

      <SectionDivider />

      <BulletColumns title="Focus Areas" items={author.focusAreas} />

      {author.contentSections.map((section) => (
        <React.Fragment key={section.heading}>
          <SectionDivider />
          <TextSection
            title={section.heading}
            intro={section.intro}
            bullets={section.bullets}
            closing={section.closing}
          />
        </React.Fragment>
      ))}

      <SectionDivider />

      <DisclosureCard title="Disclaimer" paragraphs={author.disclaimerParagraphs} keepCase />

      {author.articlesNote && (
        <TextSection title={`Articles by ${author.name}`} intro={author.articlesNote} />
      )}
    </ProfileShell>
  );
}
