import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { RevealText } from "@/components/ui/RevealText";
import { SITE } from "@/data/site";

export function About() {
  return (
    <section id="about" className="bg-[#030303] px-[5%] py-20 md:py-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <AnimatedSection direction="left">
          <div className="text-[#00b4a6] text-xs font-semibold uppercase tracking-widest mb-4">
            Our Story
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            <RevealText>Founded by a Champion</RevealText>
          </h2>
          <p className="text-white/55 text-base leading-relaxed mb-5">
            {SITE.fullName} was founded by {SITE.founderTitle} {SITE.founder} in {SITE.established} with a single mission: bring world-class roller skating coaching to {SITE.city}.
          </p>
          <p className="text-white/55 text-base leading-relaxed mb-5">
            What began as a small group of passionate skaters at Shivaji Park has grown into {SITE.city}&apos;s most trusted academy, producing state and national-level champions year after year.
          </p>
          <p className="text-white/55 text-base leading-relaxed">
            Our coaching philosophy combines technical precision with genuine joy — we believe the best skaters are the ones who love the sport.
          </p>
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.15}>
          <div className="relative bg-[#161616] border border-white/[0.08] rounded-2xl p-8 md:p-10">
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#d4a017] to-transparent rounded-full" />
            <div className="text-[#d4a017] text-4xl font-serif mb-4 leading-none">&ldquo;</div>
            <blockquote className="text-white/80 text-lg leading-relaxed mb-6 font-light italic">
              Skating is not just a sport — it is discipline, courage, and the freedom to fly on wheels. Every child who trains here carries that spirit.
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#006fe6]/20 border border-[#006fe6]/30 flex items-center justify-center text-[#006fe6] font-bold text-sm">
                LR
              </div>
              <div>
                <div className="text-white font-semibold text-sm">{SITE.founder}</div>
                <div className="text-[#d4a017] text-xs">{SITE.founderTitle} · Head Coach</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
