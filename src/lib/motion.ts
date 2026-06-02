export const brandEase = [0.22, 1, 0.36, 1] as const;

export const brandTransition = {
  duration: 0.75,
  ease: brandEase,
};

export const brandTransitionFast = {
  duration: 0.45,
  ease: brandEase,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1 },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

export const staggerContainerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

/** Scroll-triggered animations replay when the element leaves and re-enters view. */
export const repeatInView = {
  once: false,
  amount: 0.4,
  margin: "0px 0px -10% 0px",
} as const;
