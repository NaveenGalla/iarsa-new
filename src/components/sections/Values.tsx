import { Shield, Trophy, Star } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { RevealText } from "@/components/ui/RevealText";

const VALUES = [
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Full safety gear provided. Our certified coaches maintain strict safety protocols for every age group.",
    accent: "text-[#00b4a6]",
    glow: "group-hover:shadow-[0_0_30px_rgba(0,180,166,0.15)]",
  },
  {
    icon: Trophy,
    title: "Expert Coaching",
    description: "Learn from a national champion and experienced coaches who have guided students to state and national podiums.",
    accent: "text-[#006fe6]",
    glow: "group-hover:shadow-[0_0_30px_rgba(0,111,230,0.15)]",
  },
  {
    icon: Star,
    title: "Competition Ready",
    description: "Structured pathways from beginner to district, state, and national competitions under RSFI.",
    accent: "text-[#d4a017]",
    glow: "group-hover:shadow-[0_0_30px_rgba(212,160,23,0.15)]",
  },
];

export function Values() {
  return (
    <section className="bg-[#0d0d0d] px-[5%] py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <div className="text-[#00b4a6] text-xs font-semibold uppercase tracking-widest mb-4">
            Why IARSA
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            <RevealText>Built for Champions</RevealText>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUES.map(({ icon: Icon, title, description, accent, glow }, i) => (
            <AnimatedSection key={title} delay={i * 0.1}>
              <div
                className={`group bg-[#161616] border border-white/[0.08] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${glow}`}
              >
                <Icon className={`w-8 h-8 mb-5 ${accent}`} />
                <h3 className="text-white font-semibold text-lg mb-3">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
