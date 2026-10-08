import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { X } from 'lucide-react'
import { useApp } from '@context/AppContext'
import { useReducedMotion } from '@hooks/useReducedMotion'
import { NAV_ITEMS, isNavActive } from '@data/navigation'
import { cn } from '@utils/cn'

// ─────────────────────────────────────────────────────────────────
// ANIMATION VARIANTS
// Per IMPLEMENTATION_BLUEPRINT.md:
//   Links: stagger 80ms, translateY(20px→0) + fade, 500ms ease-out
// ─────────────────────────────────────────────────────────────────

const STAGGER_MS = 0.08  // 80ms in seconds

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25, ease: 'easeIn', delay: 0.15 },
  },
}

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER_MS,
      delayChildren:   0.05,
    },
  },
  exit: {
    transition: {
      staggerChildren:  STAGGER_MS / 2,
      staggerDirection: -1,
    },
  },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y:       0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y:       -10,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
}

const reducedItemVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15 } },
  exit:    { opacity: 0, transition: { duration: 0.1 } },
}

/**
 * MenuOverlay
 *
 * Fullscreen navigation overlay. Opens from Navbar hamburger button.
 * Traps focus when open (Tab does not exit until closed).
 * Closes on: close button, Escape key, nav link click.
 */
export function MenuOverlay() {
  const { isMenuOpen, closeMenu } = useApp()
  const { pathname } = useLocation()
  const prefersReducedMotion = useReducedMotion()

  const closeButtonRef = useRef(null)
  const overlayRef     = useRef(null)

  // ── Close on Escape ───────────────────────────────────────────
  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen, closeMenu])

  // ── Focus close button when overlay opens ─────────────────────
  useEffect(() => {
    if (isMenuOpen) {
      // Small delay allows the animation to start before focus moves
      setTimeout(() => closeButtonRef.current?.focus(), 50)
    }
  }, [isMenuOpen])

  // ── Focus trap ────────────────────────────────────────────────
  const handleKeyDown = (e) => {
    if (e.key !== 'Tab' || !isMenuOpen) return

    const focusable = overlayRef.current?.querySelectorAll(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    )
    if (!focusable || focusable.length === 0) return

    const first = focusable[0]
    const last  = focusable[focusable.length - 1]

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault()
        last.focus()
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
  }

  const navItem = prefersReducedMotion ? reducedItemVariants : itemVariants

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          ref={overlayRef}
          key="menu-overlay"
          id="menu-overlay"
          className="fixed inset-0 bg-void flex flex-col"
          style={{ zIndex: 'var(--z-modal)' }}
          variants={prefersReducedMotion ? {} : overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* ── Header ─────────────────────────────────────────── */}
          <div className="flex items-center justify-between px-[var(--gutter)] h-[var(--navbar-h)]">
            {/* Logo in overlay */}
            <Link
              to="/"
              onClick={closeMenu}
              className="type-label text-void-text-muted hover:text-paper transition-colors duration-250"
              aria-label="MANTRA — Go to home"
            >
              MANTRA
            </Link>

            {/* Close button */}
            <button
              ref={closeButtonRef}
              onClick={closeMenu}
              className={cn(
                'flex items-center justify-center',
                'w-10 h-10 -mr-2',
                'text-void-text-muted hover:text-paper',
                'transition-colors duration-250',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold',
                'rounded-sm'
              )}
              aria-label="Close navigation menu"
            >
              <X size={20} strokeWidth={1} />
            </button>
          </div>

          {/* ── Navigation links ────────────────────────────────── */}
          <nav className="flex-1 flex flex-col justify-center px-[var(--gutter)]" aria-label="Main navigation">
            <motion.ul
              variants={prefersReducedMotion ? {} : listVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-1"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = isNavActive(item.path, pathname)

                return (
                  <motion.li key={item.id} variants={navItem}>
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      className={cn(
                        'group flex items-baseline gap-4',
                        'py-3 md:py-4',
                        'transition-colors duration-250',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm',
                        isActive ? 'text-paper' : 'text-void-text-muted hover:text-paper'
                      )}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {/* Number indicator */}
                      <span className={cn(
                        'type-meta text-xs shrink-0 tabular-nums w-6',
                        'transition-colors duration-250',
                        isActive ? 'text-gold' : 'text-mist-dark group-hover:text-mist'
                      )}>
                        {String(NAV_ITEMS.indexOf(item) + 1).padStart(2, '0')}
                      </span>

                      {/* Link label */}
                      <span className="
                          text-3xl
                          md:text-4xl
                          lg:text-5xl
                          font-light
                          uppercase
                          tracking-[0.18em]
                          leading-none
                        ">
                        {item.label}
                      </span>

                      {/* Active indicator */}
                      {isActive && (
                        <span className="ml-auto type-label text-gold shrink-0">
                          ←
                        </span>
                      )}
                    </Link>
                  </motion.li>
                )
              })}
            </motion.ul>
          </nav>

          {/* ── Footer row ──────────────────────────────────────── */}
          <motion.div
            className="px-[var(--gutter)] pb-8 md:pb-12"
            variants={prefersReducedMotion ? {} : {
              hidden:  { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.5, duration: 0.4 } },
              exit:    { opacity: 0, transition: { duration: 0.15 } },
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <p className="type-label text-mist">
              MANTRA UNIVERSE · {new Date().getFullYear()}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}