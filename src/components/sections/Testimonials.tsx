import { TESTIMONIALS } from "@/data/testimonials";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { RevealText } from "@/components/ui/RevealText";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#030303] px-[5%] py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <div className="text-[#00b4a6] text-xs font-semibold uppercase tracking-widest mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            <RevealText>What Families Say</RevealText>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ quote, author, role }, i) => (
            <AnimatedSection key={author} delay={i * 0.1}>
              <div className="group bg-[#161616] border border-white/[0.08] rounded-2xl p-7 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,180,166,0.1)]">
                <div className="flex gap-1 mb-5" role="img" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-[#d4a017]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-white/65 text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#006fe6]/15 border border-[#006fe6]/25 flex items-center justify-center text-[#006fe6] font-bold text-xs">
                    {author.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{author}</div>
                    <div className="text-white/35 text-xs">{role}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
