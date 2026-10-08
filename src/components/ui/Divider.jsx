import { cn } from '@utils/cn'

export function Divider({ variant = 'subtle', className }) {
  return (
    <hr
      className={cn(
        'border-0 border-t',
        variant === 'gold' ? 'border-t-[var(--border-color-gold)]' : 'border-t-[var(--border-color)]',
        className,
      )}
      aria-hidden="true"
    />
  )
}
