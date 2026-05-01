import { TEAM } from "@/data/team";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { RevealText } from "@/components/ui/RevealText";

export function Team() {
  return (
    <section id="team" className="bg-[#030303] px-[5%] py-20 md:py-24">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <div className="text-[#00b4a6] text-xs font-semibold uppercase tracking-widest mb-4">
            Our Coaches
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            <RevealText>Meet the Team</RevealText>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM.map(({ name, role, badge, bio }, i) => (
            <AnimatedSection key={name} delay={i * 0.1}>
              <div className="group bg-[#161616] border border-white/[0.08] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,111,230,0.1)]">
                <div className="w-12 h-12 rounded-full bg-[#006fe6]/15 border border-[#006fe6]/25 flex items-center justify-center text-[#006fe6] font-bold mb-4">
                  {name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>

                {badge && (
                  <div className="inline-block bg-[#00b4a6]/10 border border-[#00b4a6]/20 text-[#00b4a6] text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3">
                    {badge}
                  </div>
                )}

                <h3 className="text-white font-semibold text-base mb-1">{name}</h3>
                <div className="text-white/40 text-xs mb-4">{role}</div>
                <p className="text-white/45 text-sm leading-relaxed">{bio}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
