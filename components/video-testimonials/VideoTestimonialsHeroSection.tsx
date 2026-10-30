import { BreakpointImage } from "@/components/common/BreakpointImage";
import { DesktopScaleWrapper } from "@/components/common/DesktopScaleWrapper";
import { VideoTestimonialsTrustBar } from "./VideoTestimonialsTrustBar";

const HEADING_LINE_1 = "Real Stories,";
const HEADING_LINE_2 = "Real Impact";
const DESCRIPTION =
  "Hear directly from our clients about their journey with emotional support animal therapy and how we’ve helped them live better lives.";

export function VideoTestimonialsHeroSection() {
  return (
    <section className="relative z-20 w-full bg-background overflow-visible">
      <div className="sm:hidden relative w-full aspect-[390/740] min-h-[660px]">
        <BreakpointImage
          media="(max-width: 639px)"
          quality={80}
          src="/video_testimonial/video_testimonial-herosection_mobile.webp"
          alt={`${HEADING_LINE_1} ${HEADING_LINE_2}`}
          fill
          className="object-cover object-bottom"
          sizes="(max-width: 639px) 100vw, 1px"
        />
        <div className="absolute inset-0 z-10 flex items-center px-5 pb-16">
          <div className="flex flex-col items-start gap-3 max-w-[300px]">
            <h1 className="heading-h2 text-primary">
              {HEADING_LINE_1}
              <br />
              {HEADING_LINE_2}
            </h1>
            <p className="body-text text-body-text">{DESCRIPTION}</p>
          </div>
        </div>
      </div>

      <div className="hidden sm:block lg:hidden relative w-full aspect-[941/1100] min-h-[720px]">
        <BreakpointImage
          media="(min-width: 640px) and (max-width: 1023px)"
          quality={80}
          src="/video_testimonial/video_testimonial-herosection_tablet.webp"
          alt={`${HEADING_LINE_1} ${HEADING_LINE_2}`}
          fill
          className="object-cover object-bottom"
          sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
        />
        <div className="absolute inset-0 z-10 flex items-center px-10 pb-16">
          <div className="flex flex-col items-start gap-4 max-w-[480px]">
            <h1 className="heading-h1 text-primary">
              {HEADING_LINE_1}
              <br />
              {HEADING_LINE_2}
            </h1>
            <p className="body-large text-body-text">{DESCRIPTION}</p>
          </div>
        </div>
      </div>

      <DesktopScaleWrapper
        designWidth={1440}
        designHeight={680}
        className="hidden lg:block relative"
        wrapperClassName="bg-background overflow-hidden"
        background={
          <BreakpointImage
            media="(min-width: 1024px)"
            quality={80}
            src="/video_testimonial/video_testimonial-herosection.webp"
            alt={`${HEADING_LINE_1} ${HEADING_LINE_2}`}
            fill
            className="object-cover object-center"
            sizes="(min-width: 1024px) 100vw, 1px"
          />
        }
      >
        <div className="relative w-[1440px] h-[680px] flex items-center">
          <div className="pl-[82px] max-w-[620px] z-10 flex flex-col items-start gap-5 pb-10">
            <h1 className="heading-h1 text-primary">
              {HEADING_LINE_1}
              <br />
              {HEADING_LINE_2}
            </h1>
            <p className="body-large text-body-text max-w-[520px]">{DESCRIPTION}</p>
          </div>
        </div>
      </DesktopScaleWrapper>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-30 w-full max-w-[1040px] px-4 pointer-events-auto">
        <VideoTestimonialsTrustBar />
      </div>
    </section>
  );
}
