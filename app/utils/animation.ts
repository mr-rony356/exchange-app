// src/utils/animations.ts
import { Variants, Transition } from 'framer-motion';

// Basic Transitions
export const springTransition: Transition = { type: 'spring', stiffness: 100, damping: 20 };
export const smoothTransition: Transition = { duration: 1.2, ease: [0.04, 0.62, 0.23, 0.98] };

// Container Variants
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.4,
      delayChildren: 0.3,
    },
  },
};

export const listStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

// Text Variants
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { ...springTransition, duration: 1.2 } },
  };
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { ...springTransition, duration: 1.2 } },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { ...springTransition, duration: 1.2 } },
};
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { ...springTransition, duration: 1.2 } },
};

export const heroTitle: Variants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { ...springTransition, stiffness: 80, duration: 1.2 } },
};

export const typewriter: Variants = {
  hidden: { width: 0 },
  visible: { 
    width: 'auto', 
    transition: { duration: 2.5, ease: 'easeInOut' } 
  },
};

// Image Variants
export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { ...smoothTransition, duration: 1.5 } },
};

export const rotateIn: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { ...springTransition, duration: 1.5 } },
};

export const floatImage: Variants = {
  rest: { y: 0 },
  hover: { 
    y: -10, 
    transition: { 
      type: 'spring', 
      stiffness: 300, 
      damping: 15, 
      repeat: Infinity, 
      repeatType: 'reverse',
      duration: 2
    } 
  },
};

// Button Variants
export const pulseButton: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05, 
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
    transition: { ...springTransition, duration: 1.2 },
  },
  tap: { scale: 0.95 },
};

export const waveButton: Variants = {
  hidden: { opacity: 0, x: -100, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: { ...springTransition, delay: i * 0.4, duration: 1.2 },
  }),
  hover: { 
    scale: 1.05,
    boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.2)',
    transition: { ...springTransition, stiffness: 200, duration: 1.2 },
  },
  tap: { scale: 0.95 },
};

// List Item Variants
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { ...springTransition, duration: 1.2 } },
};

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { type: 'spring', stiffness: 400, damping: 30, duration: 1.2 } 
  },
};

// Section Variants
export const fadeInSection: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 1.5, ease: 'easeInOut', when: 'beforeChildren' } 
  },
};

export const slideUpSection: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.5, ease: 'easeOut', when: 'beforeChildren' } 
  },
};

// Special Animations
export const staggeredLetters = (staggerTime: number = 0.05) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerTime,
    },
  },
});

export const letterVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 150, damping: 15, duration: 1.2 },
  },
};

export const revealText: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.8, 
      ease: 'easeInOut',
      staggerChildren: 0.15,
    },
  },
};

export const revealWord: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 40, damping: 12, duration: 1.2 } 
  },
};

export const drawSVGPath: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1, 
    transition: { duration: 2, ease: 'easeInOut' } 
  },
};
