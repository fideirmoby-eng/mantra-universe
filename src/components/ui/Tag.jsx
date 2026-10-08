import { cn } from '@utils/cn'

const VARIANT_CLASSES = {
  void:  'border-[var(--border-color)] text-[var(--void-text-muted)] hover:border-[var(--mist)] hover:text-[var(--void-text-secondary)]',
  paper: 'border-[var(--ink-faint)] text-[var(--ink-faint)] hover:border-[var(--ink-muted)] hover:text-[var(--ink-muted)]',
  gold:  'border-[var(--border-color-gold)] text-[var(--gold)] hover:border-[var(--gold)]',
}

export function Tag({ variant = 'void', active = false, onClick, className, children }) {
  const base = cn(
    'inline-flex items-center',
    'font-mono text-[0.625rem] tracking-[0.12em] uppercase',
    'border px-2.5 py-1',
    'transition-colors duration-250',
    VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.void,
    active && variant === 'void'  && 'border-[var(--mist)] text-[var(--void-text-primary)]',
    active && variant === 'paper' && 'border-[var(--ink-muted)] text-[var(--ink)]',
    active && variant === 'gold'  && 'border-[var(--gold)] text-[var(--gold)]',
    onClick && 'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] rounded-sm',
    className,
  )
  if (onClick) return <button type="button" onClick={onClick} className={base} aria-pressed={active}>{children}</button>
  return <span className={base}>{children}</span>
}
