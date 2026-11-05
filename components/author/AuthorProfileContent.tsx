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
import { ContributorArticles } from "@/components/author/ContributorArticles";
import { AuthorProfile } from "@/data/authorsData";
import { AUTHORS, REVIEWERS } from "@/data/contributorsData";

export function AuthorProfileContent({ author }: { author: AuthorProfile }) {
  const linkedin = [...AUTHORS, ...REVIEWERS].find((person) => person.id === author.slug)?.linkedin;

  return (
    <ProfileShell
      name={author.name}
      title={author.credentials}
      avatar={author.avatar}
      avatarAlt={author.name}
      linkedin={linkedin}
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
        <ContributorArticles
          name={author.name}
          intro={author.articlesNote}
          extraCards={
            author.slug === "mohammed-ziauddin"
              ? [
                  {
                    id: "alabama-esa-laws",
                    url: "/esa-laws/alabama/",
                    title: "Alabama ESA Laws Explained: A Guide For Tenants And Landlords",
                    description:
                      "Learn Alabama ESA laws, FHA housing protections, ESA letter requirements, tenant rights, landlord rules, fees, and assistance animal regulations.",
                    image: "/esalawsblog/eslalaws-blogsimages.webp",
                  },
                ]
              : undefined
          }
        />
      )}
    </ProfileShell>
  );
}
