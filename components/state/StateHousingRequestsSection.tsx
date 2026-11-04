import React from "react";
import { CtaButton } from "@/components/common/CtaButton";
import { StateData } from "@/data/statesData";

export function StateHousingRequestsSection({ data }: { data: StateData }) {
  const requests = data.housingRequests;
  if (!requests) return null;

  return (
    <section id="housing-requests" className="w-full bg-background pt-4 pb-16 sm:pb-20 lg:pb-24">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 sm:space-y-12">
        <div className="space-y-6 sm:space-y-8">
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-[34px] xl:text-[44px] font-bold text-primary leading-tight sm:leading-[54px] lg:leading-[42px] xl:leading-[54px] tracking-tight max-w-[980px] mx-auto">
            {requests.mayRequestTitle}
          </h2>
          <div className="space-y-4 max-w-[960px] mx-auto text-base sm:text-lg text-body-text font-semibold leading-[1.7] font-sans">
            <p>{requests.mayRequestIntro}</p>
            {requests.mayRequestItems.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-[34px] xl:text-[44px] font-bold text-primary leading-tight sm:leading-[54px] lg:leading-[42px] xl:leading-[54px] tracking-tight max-w-[980px] mx-auto">
            {requests.cannotRequestTitle}
          </h2>
          <div className="space-y-4 max-w-[960px] mx-auto text-base sm:text-lg text-body-text font-semibold leading-[1.7] font-sans">
            {requests.cannotRequestItems.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>

        <div>
          <CtaButton className="w-auto min-w-[270px]">Start your ESA Evaluation</CtaButton>
        </div>
      </div>
    </section>
  );
}
