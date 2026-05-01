const ITEMS = [
  "Est. 2003",
  "500+ Students Trained",
  "National Champion Founder",
  "Visakhapatnam's #1 Academy",
  "State & National Medalists",
  "Shivaji Park, MVP Colony",
];

export function CredibilityStrip() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="bg-[#0d0d0d] border-y border-white/[0.08] overflow-hidden py-4">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-8 px-8 flex-shrink-0">
            <span className="text-sm text-white/50 font-medium tracking-wide whitespace-nowrap">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#00b4a6] flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
