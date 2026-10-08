/**
 * lib/gsap.js — GSAP configuration
 *
 * Central GSAP setup. Import gsap from here (not directly from 'gsap')
 * so that all components share the same registered plugins and defaults.
 *
 * Plugins registered here: ScrollTrigger (Sprint 2+), SplitText (Sprint 4)
 */

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

// ─── Register plugins ────────────────────────────────────────────
gsap.registerPlugin(ScrollTrigger, SplitText)

// ─── Global GSAP defaults ────────────────────────────────────────
gsap.defaults({
  ease: 'power2.out',
  duration: 0.6,
})

// ─── Configure ScrollTrigger to use Lenis scroll position ────────
// Called after Lenis is initialized (in main.jsx).
export function connectScrollTriggerToLenis(lenis) {
  if (!lenis) return

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

  console.info('[MANTRA] GSAP ScrollTrigger connected to Lenis') // eslint-disable-line no-console
}

// ─── Named easing presets matching CSS custom properties ─────────
export const EASE = {
  mantra: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  silk:   'expo.out',    // GSAP equivalent of --ease-silk
  heavy:  'power4.inOut',
  in:     'power2.in',
  out:    'power2.out',
  inOut:  'power2.inOut',
}

// ─── Re-export for convenience ───────────────────────────────────
export { gsap, ScrollTrigger, SplitText }
