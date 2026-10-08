/**
 * lib/lenis.js — Lenis smooth scroll singleton
 *
 * Initializes and manages a single Lenis instance for the app.
 * Consumed by: main.jsx (init), useLenis hook (Sprint 2).
 *
 * Configuration follows PROJECT-5 specification:
 * - Duration: 1.2s
 * - Easing: custom cubic-bezier matching --ease-silk
 * - Smooth touch: disabled (native feel on mobile)
 */

let lenisInstance = null

/**
 * Initialize Lenis. Called once in main.jsx.
 * @returns {import('lenis').default} the Lenis instance
 */
export async function initLenis() {
  if (lenisInstance) return lenisInstance

  // Dynamic import — Lenis is only needed client-side
  const { default: Lenis } = await import('lenis')

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo ease-out
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    smoothTouch: false,       // Native scroll on touch devices
    touchMultiplier: 1.5,
    infinite: false,
    autoResize: true,
  })

  // RAF loop — drives Lenis on every frame
  function raf(time) {
    lenisInstance.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  console.info('[MANTRA] Lenis smooth scroll initialized') // eslint-disable-line no-console

  return lenisInstance
}

/**
 * Get the active Lenis instance (null if not yet initialized).
 * @returns {import('lenis').default|null}
 */
export function getLenis() {
  return lenisInstance
}

/**
 * Programmatically scroll to a target.
 * @param {string|HTMLElement|number} target — selector, element, or y value
 * @param {Object} [options]
 * @param {number} [options.offset=0]
 * @param {number} [options.duration=1.2]
 * @param {boolean} [options.immediate=false]
 */
export function scrollTo(target, options = {}) {
  if (!lenisInstance) {
    // Fallback to native scroll if Lenis isn't ready
    if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior: 'smooth' })
    } else if (typeof target === 'string') {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
    }
    return
  }

  lenisInstance.scrollTo(target, {
    offset: 0,
    duration: 1.2,
    ...options,
  })
}

/**
 * Pause Lenis (e.g. when a modal is open).
 */
export function pauseScroll() {
  lenisInstance?.stop()
}

/**
 * Resume Lenis.
 */
export function resumeScroll() {
  lenisInstance?.start()
}

/**
 * Destroy Lenis (called on unmount / hot reload in dev).
 */
export function destroyLenis() {
  lenisInstance?.destroy()
  lenisInstance = null
}
