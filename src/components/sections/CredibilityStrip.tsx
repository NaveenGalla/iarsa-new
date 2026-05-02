import { SITE, } from "@/data/site";
import { STATS } from "@/data/stats";

const ITEMS = [
  `Est. ${SITE.established}`,
  `${STATS[0].value}${STATS[0].suffix} ${STATS[0].label}`,
  "National Champion Founder",
  `${SITE.city}'s Premier Academy`,
  "State & National Medalists",
  `${SITE.address.split(",")[0]}, MVP Colony`,
];

export function CredibilityStrip() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="bg-[#0d0d0d] border-y border-white/[0.08] overflow-hidden py-4">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div key={`${i}-${item}`} className="flex items-center gap-8 px-8 flex-shrink-0">
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
