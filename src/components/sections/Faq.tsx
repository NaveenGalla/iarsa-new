"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQ } from "@/data/faq";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { RevealText } from "@/components/ui/RevealText";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#0d0d0d] px-[5%] py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <div className="text-[#00b4a6] text-xs font-semibold uppercase tracking-widest mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            <RevealText>Common Questions</RevealText>
          </h2>
        </AnimatedSection>

        <div className="space-y-3">
          {FAQ.map(({ question, answer }, i) => (
            <AnimatedSection key={question} delay={i * 0.05}>
              <div className="bg-[#161616] border border-white/[0.08] rounded-xl overflow-hidden">
                <button
                  type="button"
                  aria-expanded={open === i}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span
                    className={cn(
                      "text-[15px] font-medium transition-colors",
                      open === i ? "text-white" : "text-white/75"
                    )}
                  >
                    {question}
                  </span>
                  <motion.div
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <Plus className="w-4 h-4 text-white/40" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-sm text-white/50 leading-relaxed border-t border-white/[0.06] pt-4 whitespace-pre-line">
                        {answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
