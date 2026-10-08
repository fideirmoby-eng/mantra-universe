import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from '@context/AppContext'
import { useReducedMotion } from '@hooks/useReducedMotion'

// ─────────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────────

// LoadingScreen appears only once per session — tracked via sessionStorage
const SESSION_KEY = 'mantra:hasSeenLoader'

// Timing per IMPLEMENTATION_BLUEPRINT.md:
// symbol fade+scale: 800ms, wordmark: 600ms delay 400ms, exit: 500ms
const SYMBOL_DURATION   = 0.8   // seconds
const WORDMARK_DURATION = 0.6
const WORDMARK_DELAY    = 0.4
const EXIT_DURATION     = 0.5

// Total minimum display time before auto-dismiss
const MIN_DISPLAY_MS = 2000

// ─────────────────────────────────────────────────────────────────
// ANIMATION VARIANTS
// ─────────────────────────────────────────────────────────────────

const symbolVariants = {
  hidden:  { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale:   1,
    transition: { duration: SYMBOL_DURATION, ease: [0.16, 1, 0.3, 1] },
  },
}

const wordmarkVariants = {
  hidden:  { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y:       0,
    transition: {
      duration: WORDMARK_DURATION,
      delay:    WORDMARK_DELAY,
      ease:     [0.16, 1, 0.3, 1],
    },
  },
}

const containerVariants = {
  visible: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: { duration: EXIT_DURATION, ease: 'easeIn' },
  },
}

/**
 * LoadingScreen
 *
 * Appears once per browser session on first visit to Home.
 * NOT shown on direct artwork URL arrival (QR code flow) — per PROJECT-5.
 *
 * Implementation:
 * - sessionStorage key prevents re-display on tab navigation
 * - aria-busy on root signals screen readers that content is loading
 * - Focus is NOT trapped (screen is decorative, not interactive)
 * - Dismissed automatically after MIN_DISPLAY_MS
 *
 * @param {boolean} [forceShow=false] — override sessionStorage for development
 */
export function LoadingScreen({ forceShow = false }) {
  const { setLoading } = useApp()
  const prefersReducedMotion = useReducedMotion()

  const [shouldShow, setShouldShow] = useState(() => {
    if (typeof window === 'undefined') return false
    if (forceShow) return true
    return !sessionStorage.getItem(SESSION_KEY)
  })

  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    if (!shouldShow) return

    // Signal app is loading
    setLoading(true)
    document.documentElement.setAttribute('aria-busy', 'true')

    const timer = setTimeout(() => {
      setIsExiting(true)
      // Mark as seen so it won't show again this session
      sessionStorage.setItem(SESSION_KEY, '1')
    }, MIN_DISPLAY_MS)

    return () => clearTimeout(timer)
  }, [shouldShow, setLoading])

  // After exit animation completes, remove from DOM
  const handleExitComplete = () => {
    setShouldShow(false)
    setLoading(false)
    document.documentElement.removeAttribute('aria-busy')
  }

  // In reduced motion, skip the animation entirely — just show briefly then remove
  useEffect(() => {
    if (!shouldShow || !prefersReducedMotion) return

    const timer = setTimeout(() => {
      setShouldShow(false)
      setLoading(false)
      sessionStorage.setItem(SESSION_KEY, '1')
    }, 500)

    return () => clearTimeout(timer)
  }, [shouldShow, prefersReducedMotion, setLoading])

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {shouldShow && !isExiting && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 flex flex-col items-center justify-center bg-void"
          style={{ zIndex: 'var(--z-loading)' }}
          variants={containerVariants}
          initial="visible"
          exit="exit"
          role="status"
          aria-label="Loading MANTRA Universe"
        >
          {/* ── Symbol — the M lettermark ── */}
          <motion.div
            className="mb-8 select-none"
            variants={prefersReducedMotion ? {} : symbolVariants}
            initial="hidden"
            animate="visible"
            aria-hidden="true"
          >
            {/* Inline SVG so it renders immediately without a network request */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              fill="none"
              width="48"
              height="48"
            >
              <text
                x="2"
                y="38"
                fontFamily="'Inter', 'Helvetica Neue', sans-serif"
                fontWeight="300"
                fontSize="38"
                letterSpacing="0.02em"
                fill="#F5F0E8"
              >
                M
              </text>
              {/* Gold accent line beneath the M */}
              <rect x="2" y="42" width="44" height="1.5" fill="#C9A84C" opacity="0.9" />
            </svg>
          </motion.div>

          {/* ── Wordmark ── */}
          <motion.div
            className="type-label text-void-text-muted select-none"
            style={{ letterSpacing: '0.22em' }}
            variants={prefersReducedMotion ? {} : wordmarkVariants}
            initial="hidden"
            animate="visible"
            aria-hidden="true"
          >
            MANTRA UNIVERSE
          </motion.div>
        </motion.div>
      )}

      {/* Separate exit animation phase */}
      {shouldShow && isExiting && (
        <motion.div
          key="loading-screen-exit"
          className="fixed inset-0 bg-void"
          style={{ zIndex: 'var(--z-loading)' }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: EXIT_DURATION, ease: 'easeIn' }}
          onAnimationComplete={handleExitComplete}
          aria-hidden="true"
        />
      )}
    </AnimatePresence>
  )
}
