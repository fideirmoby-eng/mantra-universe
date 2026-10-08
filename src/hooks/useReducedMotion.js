import { useState, useEffect } from 'react'

/**
 * useReducedMotion
 *
 * Returns true if the user has requested reduced motion via their OS
 * accessibility settings. All animation components must respect this.
 *
 * Connected to AppContext.prefersReducedMotion, but also available
 * as a standalone hook for components that don't need the full context.
 *
 * @returns {boolean}
 */
export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')

    const handler = (e) => {
      console.log(
        '[useReducedMotion] changed',
        {
          matches: e.matches,
          time: performance.now(),
        }
      )

      setReducedMotion(e.matches)
    }

    mq.addEventListener('change', handler)

    return () => mq.removeEventListener('change', handler)
  }, [])

  return reducedMotion
}