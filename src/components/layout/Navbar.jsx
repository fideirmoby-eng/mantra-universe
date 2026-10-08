import { useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { useApp } from '@context/AppContext'
import { useScrollProgress } from '@hooks/useScrollProgress'
import { useReducedMotion } from '@hooks/useReducedMotion'
import { NAV_ITEMS, isNavActive } from '@data/navigation'
import { cn } from '@utils/cn'

// ─────────────────────────────────────────────────────────────────
// CONSTANTS — no magic numbers
// ─────────────────────────────────────────────────────────────────

// px scroll threshold before Navbar gains a background
// Per IMPLEMENTATION_BLUEPRINT.md: "opacity 0→1, 500ms on scroll > 100px"
const NAVBAR_SCROLL_THRESHOLD = 100

/**
 * Navbar
 *
 * Persistent navigation bar. Sticks to top of viewport.
 * On scroll > 100px: gains a subtle backdrop-blur + dark background.
 *
 * Desktop: shows all 6 nav links inline.
 * Mobile: shows logo + hamburger only. MenuOverlay handles full nav.
 *
 * Accessibility:
 *   - <nav> with aria-label
 *   - aria-current="page" on active link
 *   - Keyboard accessible hamburger button
 *   - Skip-to-content link (visually hidden, shown on focus)
 */
export function Navbar() {
  const { toggleMenu, isMenuOpen } = useApp()
  const { pathname } = useLocation()
  const { isScrolled } = useScrollProgress({ threshold: NAVBAR_SCROLL_THRESHOLD })
  const prefersReducedMotion = useReducedMotion()

  const handleMenuToggle = useCallback(() => {
    toggleMenu()
  }, [toggleMenu])

  return (
    <>
      {/* ── Skip to main content — accessibility ──────────────── */}
      <a
        href="#main-content"
        className={cn(
          'sr-only focus:not-sr-only',
          'fixed top-4 left-4 z-[calc(var(--z-navbar)+1)]',
          'px-4 py-2 bg-gold text-void text-sm font-sans font-400',
          'rounded focus:outline-none'
        )}
      >
        Skip to content
      </a>

      {/* ── Navbar ────────────────────────────────────────────── */}
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0',
          'flex items-center justify-between',
          'h-[var(--navbar-h)]',
          'px-[var(--gutter)]',
          'transition-all',
        )}
        style={{ zIndex: 'var(--z-navbar)' }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                backgroundColor: isScrolled
                  ? 'rgba(10, 10, 8, 0.92)'
                  : 'rgba(10, 10, 8, 0)',
                backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
              }
        }
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        role="banner"
      >
        {/* ── Logo / Wordmark ─────────────────────────────────── */}
        <Link
          to="/"
          className={cn(
            'type-label text-void-text-primary',
            'hover:text-paper transition-colors duration-250',
            'focus-visible:outline-none focus-visible:ring-2',
            'focus-visible:ring-gold rounded-sm',
            'shrink-0',
          )}
          aria-label="MANTRA — Home"
        >
          MANTRA
        </Link>

        {/* ── Desktop navigation ──────────────────────────────── */}
        <nav
          className="hidden lg:flex items-center gap-8"
          aria-label="Main navigation"
        >
          <ul className="flex items-center gap-8" role="list">
            {NAV_ITEMS.map((item) => {
              const isActive = isNavActive(item.path, pathname)

              return (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={cn(
                      'relative type-label',
                      'transition-colors duration-250',
                      'focus-visible:outline-none focus-visible:ring-2',
                      'focus-visible:ring-gold rounded-sm px-1',
                      // Active: paper. Inactive: muted, hover to paper.
                      isActive
                        ? 'text-paper'
                        : 'text-void-text-muted hover:text-paper',
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}

                    {/* Active underline — gold, 1px */}
                    {isActive && (
                      <motion.span
                        className="absolute -bottom-1 left-0 right-0 h-px bg-gold"
                        layoutId="navbar-active-line"
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* ── Right side: hamburger (mobile) or hamburger (desktop condensed) */}
        <div className="flex items-center gap-4">
          {/* Hamburger — always visible; on desktop it opens overlay too */}
          <button
            onClick={handleMenuToggle}
            className={cn(
              'flex items-center justify-center',
              'w-10 h-10 -mr-2',
              'text-void-text-muted hover:text-paper',
              'transition-colors duration-250',
              'focus-visible:outline-none focus-visible:ring-2',
              'focus-visible:ring-gold rounded-sm',
            )}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="menu-overlay"
          >
            <Menu size={20} strokeWidth={1} aria-hidden="true" />
          </button>
        </div>
      </motion.header>
    </>
  )
}
