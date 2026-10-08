import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@utils/cn'

const VARIANT_CLASSES = {
  light: ['text-paper/70 hover:text-paper', 'after:bg-paper'],
  dark:  ['text-ink/60 hover:text-ink',     'after:bg-ink'],
  gold:  ['text-gold/80 hover:text-gold',   'after:bg-gold'],
}

const SIZE_CLASSES = {
  sm: 'text-[0.6875rem] tracking-[0.14em]',
  md: 'text-[0.75rem] tracking-[0.16em]',
  lg: 'text-[0.8125rem] tracking-[0.16em]',
}

export const Button = forwardRef(function Button(
  { variant = 'light', size = 'md', to, href, onClick, disabled = false, type = 'button', className, children, ...rest },
  ref,
) {
  const base = cn(
    'font-sans font-light uppercase',
    SIZE_CLASSES[size] ?? SIZE_CLASSES.md,
    'inline-flex items-center gap-2 relative',
    'after:absolute after:bottom-[-2px] after:left-0',
    'after:h-px after:w-0 hover:after:w-full',
    'after:transition-[width] after:duration-300 after:ease-out',
    'transition-colors duration-250',
    disabled && 'opacity-40 cursor-not-allowed pointer-events-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm',
    VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.light,
    className,
  )
  if (to) return <Link ref={ref} to={to} className={base} {...rest}>{children}</Link>
  if (href) return <a ref={ref} href={href} target="_blank" rel="noopener noreferrer" className={base} {...rest}>{children}</a>
  return <button ref={ref} type={type} onClick={onClick} disabled={disabled} className={base} {...rest}>{children}</button>
})
