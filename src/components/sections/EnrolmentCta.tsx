import Link from "next/link";
import { SITE } from "@/data/site";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function EnrolmentCta() {
  const whatsappMsg = encodeURIComponent(
    `Hi! I'm interested in enrolling at ${SITE.fullName}. Please share more details.`
  );

  return (
    <section className="bg-[#030303] px-[5%] py-20 md:py-28">
      <AnimatedSection>
        <div className="max-w-4xl mx-auto relative bg-gradient-to-br from-[#006fe6]/10 via-[#161616] to-[#00b4a6]/10 border border-white/[0.08] rounded-3xl p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#006fe6]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#00b4a6]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="text-[#00b4a6] text-xs font-semibold uppercase tracking-widest mb-4">
              Get Started
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-5">
              Start Your Skating Journey
            </h2>
            <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Join 500+ students at {SITE.city}&apos;s most trusted skating academy. First trial session is free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#006fe6] hover:bg-[#0059c2] text-white px-8 py-4 rounded-full text-[15px] font-medium transition-all hover:shadow-[0_8px_24px_rgba(0,111,230,0.38)] hover:-translate-y-0.5"
              >
                WhatsApp Us
              </a>
              <Link
                href="/contact"
                className="text-white border border-white/20 hover:border-white/50 hover:bg-white/[0.05] px-8 py-4 rounded-full text-[15px] font-medium transition-all"
              >
                Contact Form
              </Link>
            </div>

            <p className="text-white/25 text-xs mt-8">
              {SITE.address} &middot; {SITE.phone}
            </p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
