import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ExternalLink } from "lucide-react";
import { SITE } from "@/data/site";

const GALLERY_ITEMS = [
  { id: 1, alt: "Students in beginner class at Shivaji Park", aspect: "aspect-square" },
  { id: 2, alt: "Advanced speed skating training", aspect: "aspect-video" },
  { id: 3, alt: "Competition day — district finals", aspect: "aspect-square" },
  { id: 4, alt: "Artistic skating performance", aspect: "aspect-square" },
  { id: 5, alt: "Coach Lakshman Rao demonstrating technique", aspect: "aspect-video" },
  { id: 6, alt: "Annual skating showcase", aspect: "aspect-square" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-[#0d0d0d] border-t border-white/[0.08] px-[5%] py-20 md:py-24">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <div className="text-[#00b4a6] text-xs font-semibold uppercase tracking-widest mb-4">
            Gallery
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Life at IARSA
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {GALLERY_ITEMS.map(({ id, alt, aspect }, i) => (
            <AnimatedSection key={id} delay={i * 0.07}>
              <div
                className={`${aspect} bg-[#161616] border border-white/[0.08] rounded-xl overflow-hidden relative group`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#006fe6]/10 to-[#00b4a6]/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/20 text-xs text-center px-4">{alt}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <a
            href={SITE.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#00b4a6] border border-[#00b4a6]/30 hover:bg-[#00b4a6]/10 px-6 py-3 rounded-full text-sm font-medium transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            Watch us on YouTube
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
