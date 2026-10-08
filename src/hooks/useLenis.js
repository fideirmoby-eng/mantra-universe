import { useEffect, useRef } from 'react'
import { getLenis } from '@lib/lenis'

/**
 * useLenis
 *
 * Subscribe to Lenis scroll events. The callback receives the
 * Lenis scroll event object on every frame while scrolling.
 *
 * Usage:
 *   useLenis(({ scroll, progress }) => {
 *     // scroll: current scroll position in px
 *     // progress: 0–1 scroll progress
 *   })
 *
 * If no callback is provided, simply returns the Lenis instance.
 *
 * @param {Function} [callback] — called on each Lenis scroll event
 * @param {Array} [deps] — dependency array for the callback
 * @returns {import('lenis').default|null}
 */
export function useLenis(callback, deps = []) {
  const callbackRef = useRef(callback)

  // Keep the ref in sync without re-subscribing on every render
  useEffect(() => {
    callbackRef.current = callback
  })

  useEffect(() => {
    if (!callback) return

    const lenis = getLenis()
    if (!lenis) return

    const handler = (...args) => callbackRef.current?.(...args)
    lenis.on('scroll', handler)

    return () => lenis.off('scroll', handler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return getLenis()
}
