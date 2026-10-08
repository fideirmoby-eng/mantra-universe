import { useState, useEffect, useRef, useCallback } from 'react'
import { useLenis } from './useLenis'

/**
 * useScrollProgress
 *
 * Returns the current scroll position and derived values.
 * Used by Navbar (scroll threshold detection) and scroll-driven UI.
 *
 * @param {Object} [options]
 * @param {number} [options.threshold=100] — px before isScrolled becomes true
 * @returns {{ scrollY: number, isScrolled: boolean, direction: 'up'|'down'|null, progress: number }}
 */
export function useScrollProgress({ threshold = 100 } = {}) {
  const [state, setState] = useState({
    scrollY:    0,
    isScrolled: false,
    direction:  null,
    progress:   0,
  })

  const prevScrollY = useRef(0)

  const handleScroll = useCallback(
    ({ scroll, progress }) => {
      const prev      = prevScrollY.current
      const direction = scroll > prev ? 'down' : scroll < prev ? 'up' : null
      prevScrollY.current = scroll

      setState({
        scrollY:    scroll,
        isScrolled: scroll > threshold,
        direction,
        progress,
      })
    },
    [threshold]
  )

  useLenis(handleScroll, [handleScroll])

  // Fallback: native scroll listener for when Lenis hasn't initialised yet
  useEffect(() => {
    const handleNativeScroll = () => {
      const scrollY   = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress  = docHeight > 0 ? scrollY / docHeight : 0
      const prev      = prevScrollY.current
      const direction = scrollY > prev ? 'down' : scrollY < prev ? 'up' : null
      prevScrollY.current = scrollY

      setState({
        scrollY,
        isScrolled: scrollY > threshold,
        direction,
        progress,
      })
    }

    window.addEventListener('scroll', handleNativeScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleNativeScroll)
  }, [threshold])

  return state
}
