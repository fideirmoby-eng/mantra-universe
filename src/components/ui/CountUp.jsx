import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '@hooks/useReducedMotion'
import { cn } from '@utils/cn'

const COUNT_DURATION       = 2.0
const VISIBILITY_THRESHOLD = 0.2

export function CountUp({ to, from = 0, duration = COUNT_DURATION, prefix = '', suffix = '', className }) {
  const prefersReducedMotion = useReducedMotion()
  const containerRef = useRef(null)
  const gsapRef      = useRef(null)
  const hasFired     = useRef(false)
  const [displayValue, setDisplayValue] = useState(from)

  useEffect(() => {
    if (prefersReducedMotion) { setDisplayValue(to); return }

    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting && !hasFired.current) { hasFired.current = true; runAnimation() } },
      { threshold: VISIBILITY_THRESHOLD },
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => { observer.disconnect(); gsapRef.current?.kill() }
  }, [to, from, duration, prefersReducedMotion]) // eslint-disable-line react-hooks/exhaustive-deps

  async function runAnimation() {
    const { gsap } = await import('@lib/gsap')
    const obj = { value: from }
    gsapRef.current = gsap.to(obj, {
      value: to, duration, ease: 'expo.out',
      onUpdate:   () => setDisplayValue(Math.round(obj.value)),
      onComplete: () => setDisplayValue(to),
    })
  }

  return (
    <span ref={containerRef} className={cn('tabular-nums', className)} aria-label={`${prefix}${to}${suffix}`}>
      {prefix}{displayValue}{suffix}
    </span>
  )
}
