import { cn } from '@utils/cn'

export function StatNumber({ value, label, surface = 'void', className }) {
  const labelColor = surface === 'paper' ? 'text-[var(--ink-faint)]' : 'text-[var(--void-text-muted)]'
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <span
        className="font-mono leading-none tabular-nums text-[var(--gold)]"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
        aria-label={`${value} ${label}`}
      >
        {value}
      </span>
      <span className={cn('font-sans font-light text-xs tracking-[0.10em] uppercase', labelColor)}>
        {label}
      </span>
    </div>
  )
}
