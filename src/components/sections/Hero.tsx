"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { ElegantShape } from "@/components/ui/shape-landing-hero";
import { SITE } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.2,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-teal-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ElegantShape delay={0.3} width={600} height={140} rotate={12} gradient="from-blue-500/[0.15]" className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]" />
        <ElegantShape delay={0.5} width={500} height={120} rotate={-15} gradient="from-teal-500/[0.15]" className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]" />
        <ElegantShape delay={0.4} width={300} height={80} rotate={-8} gradient="from-blue-400/[0.12]" className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]" />
        <ElegantShape delay={0.6} width={200} height={60} rotate={20} gradient="from-teal-400/[0.12]" className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]" />
        <ElegantShape delay={0.7} width={150} height={40} rotate={-25} gradient="from-blue-300/[0.10]" className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
          >
            <Circle className="h-2 w-2 fill-[#00b4a6]" />
            <span className="text-sm text-white/60 tracking-wide">
              {SITE.founderTitle} Founded · Est. {SITE.established}
            </span>
          </motion.div>

          <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight leading-[1.02]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Train with
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent",
                  "bg-gradient-to-r from-blue-300 via-white/90 to-teal-300"
                )}
              >
                India&apos;s Best Skaters
              </span>
            </h1>
          </motion.div>

          <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible">
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              {SITE.fullName} — a great and fun place for roller skaters in {SITE.city}. Founded by {SITE.founderAchievement.split(",")[0]}, the All India National Champion.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <Link
              href="/contact"
              className="bg-[#006fe6] hover:bg-[#0059c2] text-white px-7 py-3.5 rounded-full text-[15px] font-medium transition-all hover:shadow-[0_8px_24px_rgba(0,111,230,0.38)] hover:-translate-y-0.5"
            >
              Enrol Now
            </Link>
            <Link
              href="/programs"
              className="text-white border border-white/20 hover:border-white/50 hover:bg-white/[0.05] px-7 py-3.5 rounded-full text-[15px] font-medium transition-all"
            >
              View Programs
            </Link>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex justify-center gap-0 mt-14 pt-8 border-t border-white/[0.08]"
          >
            {[
              { num: "500+", label: "Students" },
              { num: "10+", label: "Years" },
              { num: "3", label: "Programs" },
            ].map(({ num, label }, i) => (
              <div
                key={label}
                className={cn(
                  "flex-1 text-center px-6",
                  i < 2 && "border-r border-white/[0.08]"
                )}
              >
                <div className="text-2xl font-bold text-white font-mono">{num}</div>
                <div className="text-xs text-white/35 mt-1 tracking-wide">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </section>
  );
}
