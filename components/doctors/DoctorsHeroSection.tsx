import { BreakpointImage } from "@/components/common/BreakpointImage";
import { DesktopScaleWrapper } from "@/components/common/DesktopScaleWrapper";

const HEADING = "Meet Our Licensed Mental Health Professionals";
const DESCRIPTION =
  "My ESA Therapist works with a network of independent, state-licensed mental health professionals who conduct emotional support animal (ESA) evaluations through secure telehealth sessions.";

export function DoctorsHeroSection() {
  return (
    <section className="relative z-30 w-full bg-background overflow-visible">
      <div className="sm:hidden relative w-full aspect-[390/780] min-h-[660px]">
        <BreakpointImage
          media="(max-width: 639px)"
          quality={90}
          src="/doctors/doctors_hero-section_mobile.webp"
          alt={HEADING}
          fill
          className="object-cover object-bottom"
          sizes="(max-width: 639px) 100vw, 1px"
        />
        <div className="absolute inset-0 z-10 flex items-center px-5">
          <div className="flex flex-col items-start gap-3 max-w-[320px]">
            <h1 className="heading-h2 text-[#1A3D4F]">{HEADING}</h1>
            <p className="body-text text-[#1A3D4F]">{DESCRIPTION}</p>
          </div>
        </div>
      </div>

      <div className="hidden sm:block lg:hidden relative w-full aspect-[834/1100] min-h-[720px]">
        <BreakpointImage
          media="(min-width: 640px) and (max-width: 1023px)"
          quality={90}
          src="/doctors/doctors_hero-section_tablet.webp"
          alt={HEADING}
          fill
          className="object-cover object-bottom"
          sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
        />
        <div className="absolute inset-0 z-10 flex items-center px-10">
          <div className="flex flex-col items-start gap-4 max-w-[520px]">
            <h1 className="heading-h1 text-[#1A3D4F]">{HEADING}</h1>
            <p className="body-large text-[#1A3D4F]">{DESCRIPTION}</p>
          </div>
        </div>
      </div>

      <DesktopScaleWrapper
        designHeight={720}
        designWidth={1440}
        wrapperClassName="bg-background overflow-hidden"
        background={
          <BreakpointImage
            media="(min-width: 1024px)"
            quality={90}
            src="/doctors/doctors_hero-section.webp"
            alt={HEADING}
            fill
            className="object-cover object-right"
            sizes="(min-width: 1024px) 100vw, 1px"
          />
        }
      >
        <div className="relative w-[1440px] h-[720px] flex items-center">
          <div className="pl-[82px] max-w-[760px] z-10 flex flex-col items-start gap-5">
            <h1 className="heading-h1 text-[#1A3D4F] max-w-[640px]">{HEADING}</h1>
            <p className="body-large text-[#1A3D4F] max-w-[560px]">{DESCRIPTION}</p>
          </div>
        </div>
      </DesktopScaleWrapper>
    </section>
  );
}
