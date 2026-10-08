import { cn } from '@utils/cn'

export function SectionLabel({ variant = 'default', count, className, children }) {
  const colorClass = {
    default: 'text-[var(--void-text-muted)]',
    gold:    'text-[var(--gold)]',
    paper:   'text-[var(--ink-faint)]',
  }[variant] ?? 'text-[var(--void-text-muted)]'

  return (
    <div className={cn('flex items-center gap-3', 'font-mono text-[0.625rem] tracking-[0.18em] uppercase', colorClass, className)}>
      <span>{children}</span>
      {count !== undefined && (
        <>
          <span className="opacity-30">—</span>
          <span className="tabular-nums">{count}</span>
        </>
      )}
    </div>
  )
}
