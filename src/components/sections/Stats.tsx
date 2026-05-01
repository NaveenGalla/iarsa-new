import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CountUp } from "@/components/ui/CountUp";
import { STATS } from "@/data/stats";

export function Stats() {
  return (
    <section className="bg-[#0d0d0d] border-y border-white/[0.08] px-[5%] py-20 md:py-24">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <div className="text-[#00b4a6] text-xs font-semibold uppercase tracking-widest mb-4">
            By the Numbers
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            A Proven Track Record
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/[0.08]">
          {STATS.map(({ value, suffix, label }, i) => (
            <AnimatedSection key={label} delay={i * 0.1} className="text-center px-6 py-4">
              <div className="text-4xl md:text-5xl font-bold text-white font-mono mb-2 tracking-tight">
                <CountUp to={value} suffix={suffix} />
              </div>
              <div className="text-white/40 text-sm tracking-wide">{label}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
