import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * cn — Class Name utility
 *
 * Combines clsx (conditional classes) with tailwind-merge
 * (conflict resolution). Use this everywhere instead of
 * plain template strings or clsx alone.
 *
 * @example
 * cn('px-4 py-2', isActive && 'bg-gold', 'px-6')
 * // → 'py-2 bg-gold px-6'  (px-4 removed by twMerge)
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
