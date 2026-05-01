"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function RevealText({
  children,
  className,
  delay = 0,
}: {
  children: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const words = children.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.08,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="inline-block mr-[0.25em] last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
