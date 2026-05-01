"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type Direction = "up" | "left" | "right";

const directionMap: Record<Direction, { y?: number; x?: number }> = {
  up: { y: 40 },
  left: { x: -40 },
  right: { x: 40 },
};

export function AnimatedSection({
  children,
  delay = 0,
  direction = "up",
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
