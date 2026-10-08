import { useEffect, useRef } from 'react'

import { useUniverseVideo } from '@context/UniverseVideoContext'

import { useGSAP } from '@gsap/react'

import { gsap, SplitText, EASE } from '@lib/gsap'

import { useReducedMotion } from '@hooks/useReducedMotion'

import { cn } from '@utils/cn'

import mantraLogo from '@assets/logo/mantra-logo.png'
import heroBackground from '@assets/backgrounds/hero-background.gif'

// ─────────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────────

const LOGO_NATURAL_WIDTH = 1254
const LOGO_NATURAL_HEIGHT = 1254

const HERO_REVEAL_DURATION = 0.8
const HERO_CHAR_STAGGER = 0.03
const HERO_FADE_DURATION = 0.5

const heroLogoFrom = { opacity: 0 }
const heroCharFrom = { opacity: 0, y: 16 }
const heroFadeFrom = { opacity: 0, y: 12 }

// ─────────────────────────────────────────────────────────────────
// DIAGNOSTIC LOGGING HELPERS
// ─────────────────────────────────────────────────────────────────

let __heroInstanceCount = 0

function __logCtaComputedState(ctaEl, label) {
  if (!ctaEl) {
    console.log(
      `[HERO DEBUG] (${label}) ctaRef.current is NULL — cannot read computed style`,
    )
    return
  }

  const computed = window.getComputedStyle(ctaEl)

  console.log(
    `[HERO DEBUG] (${label}) CTA computed style -> opacity: ${computed.opacity} | transform: ${computed.transform}`,
  )
}

export function Hero() {
  const sectionRef = useRef(null)
  const logoRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const scrollRef = useRef(null)

  const instanceIdRef = useRef(null)

  if (instanceIdRef.current === null) {
    __heroInstanceCount += 1
    instanceIdRef.current = __heroInstanceCount
  }

  const prefersReducedMotion = useReducedMotion()
  const { openVideo } = useUniverseVideo()

  // ── Hero mounted / unmounted ───────────────────────────────────

  useEffect(() => {
    console.log(
      `[HERO DEBUG] Hero mounted (instance #${instanceIdRef.current})`,
    )

    return () => {
      console.log(
        `[HERO DEBUG] Hero UNMOUNTED (instance #${instanceIdRef.current})`,
      )
    }
  }, [])

  useGSAP(
    () => {
      console.log(
        `[HERO DEBUG] Entrada en useGSAP callback (instance #${instanceIdRef.current}) — prefersReducedMotion = ${prefersReducedMotion}`,
      )

      if (prefersReducedMotion) {
        console.log(
          `[HERO DEBUG] prefersReducedMotion=true -> callback retorna undefined, NO se crea timeline (instance #${instanceIdRef.current})`,
        )

        return undefined
      }

      const split = new SplitText(subtitleRef.current, {
        type: 'chars',
      })

      const tl = gsap.timeline({
        defaults: {
          ease: EASE.silk,
        },
      })

      console.log(
        `[HERO DEBUG] Timeline creado (instance #${instanceIdRef.current})`,
      )

      tl.from(logoRef.current, {
        ...heroLogoFrom,
        duration: HERO_REVEAL_DURATION,

        onStart: () => {
          console.log(
            `[HERO DEBUG] Logo tween START (instance #${instanceIdRef.current})`,
          )
        },

        onComplete: () => {
          console.log(
            `[HERO DEBUG] Logo tween COMPLETE (instance #${instanceIdRef.current})`,
          )
        },
      })

      tl.from(
        split.chars,
        {
          ...heroCharFrom,
          stagger: HERO_CHAR_STAGGER,
          duration: HERO_FADE_DURATION,

          onStart: () => {
            console.log(
              `[HERO DEBUG] Subtitle (chars) tween START (instance #${instanceIdRef.current})`,
            )
          },

          onComplete: () => {
            console.log(
              `[HERO DEBUG] Subtitle (chars) tween COMPLETE (instance #${instanceIdRef.current})`,
            )
          },
        },
        '-=0.4',
      )

      tl.from(
        [ctaRef.current, scrollRef.current],
        {
          ...heroFadeFrom,
          stagger: 0.1,
          duration: HERO_FADE_DURATION,

          onStart: function () {
            const target = this.targets()[0]

            const label =
              target === ctaRef.current
                ? 'CTA'
                : target === scrollRef.current
                  ? 'Scroll Indicator'
                  : 'unknown target'

            console.log(
              `[HERO DEBUG] ${label} tween START (instance #${instanceIdRef.current})`,
            )
          },

          onComplete: function () {
            const target = this.targets()[0]

            const label =
              target === ctaRef.current
                ? 'CTA'
                : target === scrollRef.current
                  ? 'Scroll Indicator'
                  : 'unknown target'

            console.log(
              `[HERO DEBUG] ${label} tween COMPLETE (instance #${instanceIdRef.current})`,
            )

            if (target === ctaRef.current) {
              gsap.set(ctaRef.current, {
                opacity: 1,
                y: 0,
                clearProps: 'opacity,transform',
              })

              __logCtaComputedState(
                ctaRef.current,
                `snapshot 2/3 — CTA tween just COMPLETED, instance #${instanceIdRef.current}`,
              )
            }
          },
        },
        '-=0.2',
      )

      __logCtaComputedState(
        ctaRef.current,
        `snapshot 1/3 — right after timeline created, instance #${instanceIdRef.current}`,
      )

      return () => {
        console.log(
          `[HERO DEBUG] Cleanup ejecutándose (instance #${instanceIdRef.current})`,
        )

        __logCtaComputedState(
          ctaRef.current,
          `snapshot 3/3 — right before cleanup, instance #${instanceIdRef.current}`,
        )

        console.log(
          `[HERO DEBUG] Ejecutando split.revert() (instance #${instanceIdRef.current})`,
        )

        split.revert()

        console.log(
          `[HERO DEBUG] split.revert() completado (instance #${instanceIdRef.current})`,
        )
      }
    },
    {
      scope: sectionRef,
      dependencies: [prefersReducedMotion],
      revertOnUpdate: true,
    },
  )

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      className={cn(
        'relative -mt-[var(--navbar-h)]',
        'h-screen overflow-hidden',
        'flex items-center justify-center',
        'px-[var(--gutter)]',
      )}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden bg-black">
        <img
          src={heroBackground}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-contain object-center scale-[1.05]"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Soft top light */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#d9b56b]/4
          via-transparent
          to-black/20
        "
      />

      {/* Content */}
      <div className="relative z-10 -mt-4 flex flex-col items-center text-center">
        <h1 className="leading-none">
          <img
            ref={logoRef}
            src={mantraLogo}
            alt="MANTRA Logo"
            width={LOGO_NATURAL_WIDTH}
            height={LOGO_NATURAL_HEIGHT}
            style={{ opacity: 1 }}
            className="mx-auto block h-auto w-60 sm:w-72 md:w-80 lg:w-[26rem] drop-shadow-[0_0_18px_rgba(255,255,255,0.25)]"
            decoding="async"
            fetchPriority="high"
          />
        </h1>

        <div className="mt-2 flex flex-col items-center">
          <div
            className="
              text-[0.78rem]
              sm:text-[0.92rem]
              md:text-[1.05rem]
              lg:text-[1.15rem]
              font-light
              uppercase
              tracking-[0.45em]
              leading-none
              text-white
            "
          >
            UNIVERSE
          </div>
        </div>

        <p
          ref={subtitleRef}
          className="mt-14 max-w-[460px] px-6 text-center text-[18px] sm:text-[19px] leading-[1.75] tracking-[0.01em] font-light text-white"
        >
          A Living Platform for Art,
          <br />
          Creative Expression and
          <br />
          Cultural Experiences.
        </p>

        <button
          ref={ctaRef}
          type="button"
          onClick={openVideo}
          className={cn(
            'mt-12 inline-flex items-center justify-center',

            'min-w-[240px]',
            'px-12 py-4',

            'border border-[#E0C477]',
            'bg-black/20',

            'uppercase',
            'tracking-[0.35em]',
            'text-[11px]',
            'font-medium',

            'text-[#E8D18A]',

            'backdrop-blur-sm',

            'transition-all duration-500',

            'hover:bg-[#C8A55A]',
            'hover:text-black',
            'hover:border-[#DDBE74]',
            'hover:shadow-[0_0_40px_rgba(200,165,90,.35)]',
          )}
        >
          Explore Universe
        </button>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center"
      >
        <span className="mb-3 text-[10px] tracking-[0.4em] text-white/90">
          SCROLL
        </span>

        <div className="h-12 w-px bg-[#C8A55A]/70" />
      </div>
    </section>
  )
}