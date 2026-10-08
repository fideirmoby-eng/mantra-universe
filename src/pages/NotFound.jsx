// NotFound.jsx — Sprint 1 minimal 404. Full artistic implementation in Sprint 7.
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '4rem',
          color: 'var(--gold)',
          lineHeight: 1,
          letterSpacing: '-0.02em',
        }}
      >
        404
      </span>
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: '1.25rem',
          color: 'var(--void-text-secondary)',
          letterSpacing: '-0.01em',
        }}
      >
        This page does not exist in the universe.
      </span>
      <Link
        to="/"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          letterSpacing: '0.12em',
          color: 'var(--void-text-muted)',
          textTransform: 'uppercase',
          textDecoration: 'none',
          transition: 'color 250ms',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--paper)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--void-text-muted)')}
      >
        ← Return to the universe
      </Link>
    </div>
  )
}
