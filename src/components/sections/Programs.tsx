import Link from "next/link";
import { Check } from "lucide-react";
import { PROGRAMS } from "@/data/programs";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

export function Programs() {
  return (
    <section className="bg-[#030303] px-[5%] py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <div className="text-[#00b4a6] text-xs font-semibold uppercase tracking-widest mb-4">
            Programs
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Find Your Level
          </h2>
          <p className="text-white/45 text-base max-w-xl mx-auto">
            Structured programs for every age and skill level, from first-timers to competitive athletes.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map(({ id, title, level, ageRange, duration, fee, description, highlights, accent }, i) => (
            <AnimatedSection key={id} delay={i * 0.08}>
              <div
                className={cn(
                  "group bg-[#161616] border border-white/[0.08] rounded-2xl p-7 h-full flex flex-col",
                  "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,0,0,0.4)]"
                )}
              >
                <div className={cn("h-[3px] w-12 rounded-full bg-gradient-to-r to-transparent mb-6", accent)} />

                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-white font-bold text-lg leading-tight">{title}</h3>
                  <span className="text-[10px] font-semibold bg-white/[0.06] text-white/40 px-2.5 py-1 rounded-full ml-3 flex-shrink-0">
                    {level}
                  </span>
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1">{description}</p>

                <ul className="space-y-2 mb-6">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-white/60">
                      <Check className="w-3.5 h-3.5 text-[#00b4a6] flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-white/[0.06] pt-5 grid grid-cols-3 gap-2 text-center mb-5">
                  {[["Age", ageRange], ["Duration", duration], ["Fee", fee]].map(([label, val]) => (
                    <div key={label}>
                      <div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">{label}</div>
                      <div className="text-white/70 text-xs font-medium">{val}</div>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/contact?program=${id}`}
                  className="block w-full text-center bg-[#006fe6]/10 hover:bg-[#006fe6] text-[#006fe6] hover:text-white border border-[#006fe6]/30 hover:border-[#006fe6] px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                >
                  Enquire About This Program
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
