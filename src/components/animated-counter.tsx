"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { repeatInView } from "@/lib/motion";

export function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const isInView = useInView(ref, repeatInView);

  useEffect(() => {
    if (!isInView) {
      setValue(0);
      return;
    }
    const duration = 1200;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(progress * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target]);

  return <span ref={ref}>{value + suffix}</span>;
}
