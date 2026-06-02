"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  brandTransition,
  brandTransitionFast,
  fadeUp,
  repeatInView,
  scaleIn,
  slideInRight,
  staggerContainer,
} from "@/lib/motion";

export function HeroStagger({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const isInView = useInView(ref, repeatInView);

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export function HeroItem({
  children,
  className = "",
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  variant?: "up" | "scale" | "right";
}) {
  const reduced = useReducedMotion();
  const variants: Record<string, Variants> = {
    up: fadeUp,
    scale: scaleIn,
    right: slideInRight,
  };

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={variants[variant]} transition={brandTransition}>
      {children}
    </motion.div>
  );
}

export function ParallaxLayer({
  children,
  className = "",
  speed = 0.12,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * -70, speed * 70]);

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      <motion.div className="h-full w-full" style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

export function FloatingOrb({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className} />;
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -22, 0], scale: [1, 1.04, 1] }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

export function AnimatedStat({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const isInView = useInView(ref, repeatInView);
  const match = value.match(/^([^0-9.-]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  const isNumeric = Boolean(match);
  const [, prefix = "", numStr = "0", suffix = ""] = match ?? [];
  const target = parseFloat(numStr);
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  const zeroDisplay =
    decimals > 0 ? `${prefix}${(0).toFixed(decimals)}${suffix}` : `${prefix}0${suffix}`;
  const [display, setDisplay] = useState(isNumeric ? zeroDisplay : value);

  useEffect(() => {
    if (reduced || !isNumeric) {
      setDisplay(value);
      return;
    }

    if (!isInView) {
      setDisplay(zeroDisplay);
      return;
    }

    const duration = 1400;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      const formatted =
        decimals > 0 ? current.toFixed(decimals) : String(Math.round(current));
      setDisplay(`${prefix}${formatted}${suffix}`);

      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [decimals, isInView, isNumeric, prefix, reduced, suffix, target, value, zeroDisplay]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

export function BrandReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const isInView = useInView(ref, repeatInView);

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ ...brandTransition, delay }}
    >
      {children}
    </motion.div>
  );
}

export function HoverLift({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={{ y: -6 }}
      transition={brandTransitionFast}
    >
      {children}
    </motion.div>
  );
}

/** Grid cards: fade + lift in on every scroll into view, hover lift on top. */
export function CardReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const isInView = useInView(ref, repeatInView);

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 28, scale: 0.96 }
      }
      whileHover={{ y: -6 }}
      transition={{ ...brandTransition, delay }}
    >
      {children}
    </motion.div>
  );
}
