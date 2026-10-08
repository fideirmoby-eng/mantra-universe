import { motion } from 'framer-motion'
import { useReducedMotion } from '@hooks/useReducedMotion'

// ─────────────────────────────────────────────────────────────────
// ANIMATION VARIANTS
// Per IMPLEMENTATION_BLUEPRINT.md:
//   Exit:  opacity + scale(0.98), 400ms
//   Enter: opacity + scale(1.02→1), 400ms
// ─────────────────────────────────────────────────────────────────

const PAGE_TRANSITION_DURATION = 0.4 // seconds

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 1.02,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: PAGE_TRANSITION_DURATION,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: PAGE_TRANSITION_DURATION,
      ease: 'easeIn',
    },
  },
}

// Reduced motion: instant fade only, no scale
const reducedPageVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.15 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
}

/**
 * PageWrapper
 *
 * Wraps each page component to provide enter/exit transitions.
 * Used inside <AnimatePresence> in App.jsx.
 *
 * Note: <AnimatePresence> is placed in App.jsx so it can detect
 * route changes via the `key` prop on this component.
 *
 * @param {React.ReactNode} children
 * @param {string} [className]
 */
export function PageWrapper({ children, className }) {
  const prefersReducedMotion = useReducedMotion()
  const variants = prefersReducedMotion ? reducedPageVariants : pageVariants

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}