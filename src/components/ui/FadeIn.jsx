import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useReducedMotion } from '@hooks/useReducedMotion'
import { cn } from '@utils/cn'

const ONCE = true

export function FadeIn({ delay = 0, duration = 0.6, y = 20, threshold = 0.1, className, children }) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const isInView = useInView(ref, { once: ONCE, amount: threshold })

  const hidden  = prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y }
  const visible = prefersReducedMotion
    ? { opacity: 1, transition: { duration: 0.2 } }
    : { opacity: 1, y: 0, transition: { duration, delay, ease: [0.16, 1, 0.3, 1] } }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{ hidden, visible }}
    >
      {children}
    </motion.div>
  )
}
