import { Link } from 'react-router-dom'
import { NAV_ITEMS } from '@data/navigation'
import { cn } from '@utils/cn'

/**
 * Footer
 *
 * Three-column layout per PROJECT-5 spec.
 *
 * Column 1: MANTRA wordmark + brief descriptor
 * Column 2: Navigation links (same as navbar)
 * Column 3: Copyright + legal
 *
 * Always on --void background. Space Mono labels. Inter links.
 * No social icons until MANTRA's social profiles are confirmed.
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="bg-void border-t"
      style={{ borderColor: 'var(--border-color)' }}
      role="contentinfo"
    >
      <div className="container-mantra section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">

          {/* ── Column 1 — Identity ─────────────────────────────── */}
          <div className="space-y-4">
            <Link
              to="/"
              className={cn(
                'block type-label text-paper',
                'hover:text-gold transition-colors duration-250',
                'focus-visible:outline-none focus-visible:ring-2',
                'focus-visible:ring-gold rounded-sm',
                'w-fit',
              )}
              aria-label="MANTRA — Return to home"
            >
              MANTRA
            </Link>

            <p className="type-body-light text-sm max-w-[22ch]" style={{ color: 'var(--void-text-muted)', fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.8125rem', lineHeight: '1.7' }}>
              A living archive of artworks, projects, and the philosophy behind them.
            </p>
          </div>

          {/* ── Column 2 — Universe ───────────────────────────── */}
          <div>
            <p
              className="type-caption mb-5"
              style={{ color: 'var(--void-text-muted)', marginBottom: '1.25rem' }}
            >
              UNIVERSE
            </p>

            <div className="space-y-3">
              <p className="type-label text-void-text-muted">Belgrade, Serbia</p>
              <p className="type-label text-void-text-muted">Available for exhibitions</p>
              <p className="type-label text-void-text-muted">and collaborations.</p>
              <p className="type-label text-paper">mantrauniverse1@gmail.com</p>
            </div>
          </div>

          {/* ── Column 3 — Legal / Copyright ───────────────────── */}
          <div className="space-y-4 md:text-right">
            <p className="type-caption" style={{ color: 'var(--void-text-muted)' }}>
              LEGAL
            </p>

            <div className="space-y-2">
              <p
                className="font-mono text-[0.625rem] tracking-wider"
                style={{ color: 'var(--void-text-muted)', letterSpacing: '0.08em' }}
              >
                © {currentYear} MANTRA
              </p>
              <p
                className="font-mono text-[0.625rem] tracking-wider"
                style={{ color: 'var(--mist-dark)', letterSpacing: '0.08em' }}
              >
                ALL RIGHTS RESERVED
              </p>
            </div>

            {/* Placeholder for social links — activated in a future sprint */}
            {/* when MANTRA's social profiles are confirmed (per IMPLEMENTATION_BLUEPRINT.md) */}
          </div>
        </div>

        {/* ── Bottom rule ──────────────────────────────────────── */}
        <div
          className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <p
            className="font-mono text-[0.625rem]"
            style={{ color: 'var(--mist-dark)', letterSpacing: '0.10em' }}
          >
            MANTRA UNIVERSE · DIGITAL ARCHIVE
          </p>

          <p
            className="font-mono text-[0.625rem]"
            style={{ color: 'var(--mist-dark)', letterSpacing: '0.10em' }}
          >
            BUILT FOR THE WORK
          </p>
        </div>
      </div>
    </footer>
  )
}
