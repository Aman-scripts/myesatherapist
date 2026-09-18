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
      className={`py-14 sm:py-16 lg:py-20 bg-[#FAF7F2] ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header: eyebrow + heading, description below */}
        <div className="space-y-3 lg:space-y-4 mb-10 lg:mb-14 max-w-[820px]">
          <p className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-[#2E5A66]">
            Areas of Focus
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#2E5A66] leading-tight tracking-[-0.006em]">
            {conditionsData.heading}
          </h2>
          <p className="text-[#5F6B6F] text-base sm:text-lg font-semibold leading-relaxed">
            {conditionsData.description}
          </p>
        </div>

        {/* Condition cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {conditionsData.conditions.map((condition) => (
            <div
              key={condition}
              className="bg-white rounded-[10px] border border-[#E4E4E4] border-l-4 border-l-[#E8B92C] px-5 sm:px-6 py-5 sm:py-6"
            >
              <span className="font-sans font-bold text-[15px] sm:text-[16px] text-[#2E5A66]">
                {condition}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
