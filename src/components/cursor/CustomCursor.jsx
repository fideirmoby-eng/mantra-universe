import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useApp } from '@context/AppContext'
import { cn } from '@utils/cn'

// ─────────────────────────────────────────────────────────────────
// CONSTANTS (per IMPLEMENTATION_BLUEPRINT.md — no magic numbers)
// ─────────────────────────────────────────────────────────────────

// Spring config per spec: stiffness 500, damping 40
const SPRING_CONFIG = { stiffness: 500, damping: 40, mass: 0.5 }

// Cursor sizes per state
const CURSOR_SIZE = {
  default:     12,
  hover:       40,
  'hover-image': 64,
  zoom:        48,
  drag:        48,
}

// Cursor labels per state
const CURSOR_LABEL = {
  zoom: 'View',
  drag: 'Drag',
}

/**
 * CustomCursor
 *
 * Renders a custom cursor that follows the mouse with a spring animation.
 * Four states: default (dot), hover (circle), hover-image (thin ring), zoom (magnifier).
 *
 * PROJECT-5 rule: The custom cursor does NOT replace the system cursor
 * on form elements (input, textarea, select).
 *
 * Hides on touch devices (pointer: coarse). Hides on reduced motion (falls
 * back to CSS cursor property changes via data-cursor attributes).
 *
 * Implementation note: We use raw mousemove + useMotionValue for
 * performance — this avoids React re-renders on every mouse move.
 */
export function CustomCursor() {
  const { cursor, prefersReducedMotion } = useApp()

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const isVisible = useRef(false)

  // Spring-smoothed position
  const springX = useSpring(mouseX, SPRING_CONFIG)
  const springY = useSpring(mouseY, SPRING_CONFIG)

  // Track mouse position
  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible.current) {
        isVisible.current = true
      }
    }

    const handleLeave = () => {
      mouseX.set(-200)
      mouseY.set(-200)
    }

    window.addEventListener('mousemove', handleMove)
    document.documentElement.addEventListener('mouseleave', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.documentElement.removeEventListener('mouseleave', handleLeave)
    }
  }, [mouseX, mouseY])

  // Hide on touch devices and reduced motion
  // The hook still mounts, but renders nothing — avoids DOM thrashing
  const isTouchDevice =
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: coarse)').matches

  if (isTouchDevice || prefersReducedMotion) return null

  const { type, label } = cursor
  const size = CURSOR_SIZE[type] ?? CURSOR_SIZE.default
  const displayLabel = label ?? CURSOR_LABEL[type] ?? null

  const isExpanded = type !== 'default'
  const isRing     = type === 'hover-image'

  return (
    <>
      {/* ── Outer ring / halo ──────────────────────────────────── */}
      <motion.div
        className={cn(
          'pointer-events-none fixed top-0 left-0 rounded-full',
          'border border-solid transition-colors duration-250',
          isRing
            ? 'border-paper/40 bg-transparent'
            : 'border-paper/20 bg-transparent',
          type === 'default' && 'opacity-0',
        )}
        style={{
          x: springX,
          y: springY,
          width:  size * 2.4,
          height: size * 2.4,
          translateX: '-50%',
          translateY: '-50%',
          zIndex: 'var(--z-cursor)',
        }}
        animate={{
          scale: isExpanded ? 1 : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        aria-hidden="true"
      />

      {/* ── Inner dot / core ───────────────────────────────────── */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 rounded-full bg-paper"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          zIndex: 'var(--z-cursor)',
        }}
        animate={{
          width:   isExpanded ? 6 : size,
          height:  isExpanded ? 6 : size,
          opacity: isRing ? 0 : 1,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        aria-hidden="true"
      />

      {/* ── Label (zoom / drag states) ─────────────────────────── */}
      {displayLabel && (
        <motion.div
          className={cn(
            'pointer-events-none fixed top-0 left-0',
            'type-label text-paper',
            'flex items-center justify-center',
          )}
          style={{
            x: springX,
            y: springY,
            width:       size * 2.4,
            height:      size * 2.4,
            translateX: '-50%',
            translateY: '-50%',
            zIndex: 'calc(var(--z-cursor) + 1)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-hidden="true"
        >
          {displayLabel}
        </motion.div>
      )}
    </>
  )
}
