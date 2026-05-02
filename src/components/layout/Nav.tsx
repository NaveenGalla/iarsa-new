"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SITE } from "@/data/site";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#programs", label: "Programs" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => {
    // Hash anchors are homepage sections — don't mark any as "active"
    // since we can't track scroll position without an observer.
    // Only true page routes (e.g. /contact) get the active underline.
    if (href.includes("#")) return false;
    return pathname === href;
  };

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-50 bg-[#0d0d0d]/90 backdrop-blur-xl border-b border-white/[0.08]",
          "px-[5%] h-[60px] flex items-center justify-between transition-shadow duration-300"
        )}
        style={scrolled ? { boxShadow: "0 4px 24px rgba(0,0,0,0.4)" } : {}}
      >
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="text-[#006fe6]"
          >
            <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" />
            <path d="M10 20 Q16 10 22 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            <circle cx="12" cy="22" r="2" fill="currentColor" />
            <circle cx="20" cy="22" r="2" fill="currentColor" />
          </svg>
          <div>
            <div className="text-[13px] font-bold text-white tracking-tight leading-tight">
              {SITE.name}
            </div>
            <div className="text-[10.5px] text-white/40 leading-none">
              Roller Skating Academy
            </div>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href} className="relative">
              <Link
                href={href}
                className={cn(
                  "text-[13.5px] transition-colors pb-[3px] relative",
                  isActive(href) ? "text-white" : "text-white/55 hover:text-white"
                )}
              >
                {label}
                {isActive(href) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#006fe6]"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-block bg-[#006fe6] hover:bg-[#0059c2] text-white text-[13.5px] font-medium px-[22px] py-[9px] rounded-full transition-all hover:shadow-[0_4px_20px_rgba(0,111,230,0.4)] hover:-translate-y-px"
        >
          Enrol Now
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-[5px] p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-[22px] h-[2px] bg-white rounded-sm origin-center"
          />
          <motion.span
            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            className="block w-[22px] h-[2px] bg-white rounded-sm"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-[22px] h-[2px] bg-white rounded-sm origin-center"
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-[#0d0d0d]/97 backdrop-blur-xl border-b border-white/[0.08] px-[5%] py-5 flex flex-col gap-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-white/80 py-3 border-b border-white/[0.06]"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2.5 bg-[#006fe6] text-white text-center py-3.5 rounded-[14px] font-semibold"
            >
              Enrol Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
