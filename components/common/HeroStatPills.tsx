type HeroStat = { value: string; label: string };

/** Horizontal stat pills used above the review cards on mobile hero sections. */
export function HeroStatPills({
  stats,
  className = "",
}: {
  stats: HeroStat[];
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-5 py-2 shadow-[0px_2px_4px_rgba(0,0,0,0.1)]"
        >
          <span className="body-strong text-primary">{stat.value}</span>
          <span className="body-text text-primary">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
