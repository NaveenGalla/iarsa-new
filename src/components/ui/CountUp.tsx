"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function CountUp({
  to,
  suffix = "",
  duration = 2,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const fps = 60;
    const frames = duration * fps;
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = 1 - Math.pow(1 - frame / frames, 3);
      setCount(Math.round(progress * to));
      if (frame >= frames) {
        setCount(to);
        clearInterval(timer);
      }
    }, 1000 / fps);
    return () => clearInterval(timer);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
