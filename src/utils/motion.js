export const transition = { type: "spring", duration: 0.8, bounce: 0.3 };

export const slideAnimation = (direction) => ({
  initial: {
    x: direction === "left" ? -120 : direction === "right" ? 120 : 0,
    y: direction === "up" ? 120 : direction === "down" ? -120 : 0,
    opacity: 0,
    transition: { ...transition, delay: 0.3 },
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { ...transition, delay: 0 },
  },
  exit: {
    x: direction === "left" ? -80 : direction === "right" ? 80 : 0,
    y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
    opacity: 0,
    transition: { ...transition, duration: 0.5 },
  },
});

export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { ...transition, duration: 0.5, delay: 0.3 },
  },
  animate: {
    opacity: 1,
    transition: { ...transition, duration: 0.5, delay: 0 },
  },
  exit: {
    opacity: 0,
    transition: { ...transition, duration: 0.4 },
  },
};

export const headTextAnimation = {
  initial: { x: 150, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 8,
    stiffness: 60,
    restDelta: 0.001,
    duration: 0.4,
  },
};

export const headContentAnimation = {
  initial: { y: 150, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 10,
    stiffness: 50,
    restDelta: 0.001,
    duration: 0.7,
    delay: 0.2,
    staggerChildren: 0.15,
  },
};

export const headContainerAnimation = {
  initial: { x: -150, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
  transition: { ...transition, duration: 0.5 },
};
