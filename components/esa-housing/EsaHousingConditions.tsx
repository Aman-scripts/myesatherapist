import { QualifyingConditions } from "@/components/home/QualifyingConditions";

export function EsaHousingConditions() {
  return (
    <QualifyingConditions
      id="conditions"
      introMaxClass="max-w-[920px]"
      title="Conditions Commonly Considered During an ESA Evaluation"
      description="Emotional Support Animals may be considered for individuals experiencing DSM-recognized emotional or mental health conditions such as anxiety, depression, or PTSD. Eligibility is not based on diagnosis alone and depends on an individualized evaluation by a licensed mental health professional."
      labelOverrides={{ "Other Mental Health Conditions": "Other ADA Conditions" }}
    />
  );
}
