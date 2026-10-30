import { DoctorProfile } from "@/data/doctorsData";

interface DoctorConditionsSectionProps {
  doctor: DoctorProfile;
  className?: string;
  id?: string;
}

export function DoctorConditionsSection({
  doctor,
  className = "",
  id = "doctor-conditions",
}: DoctorConditionsSectionProps) {
  const conditionsData = doctor.conditionsSection;

  if (!conditionsData) return null;

  return (
    <section
      id={id}
      className={`py-14 sm:py-16 lg:py-20 bg-background ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center space-y-3 lg:space-y-4 mb-10 lg:mb-14 max-w-[860px] mx-auto">
          <h2 className="heading-h2 text-primary">
            {conditionsData.heading}
          </h2>
          <p className="body-large text-body-text">
            {conditionsData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {conditionsData.conditions.map((condition) => (
            <div
              key={condition}
              className="bg-[#F7F3EC] rounded-[16px] shadow-[0px_1px_4px_rgba(0,0,0,0.06)] flex items-center overflow-hidden min-h-[64px]"
            >
              <div className="w-[8px] self-stretch bg-accent shrink-0" />
              <span className="font-sans font-semibold text-[15px] sm:text-[16px] leading-[26px] text-primary px-5 py-4">
                {condition}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
