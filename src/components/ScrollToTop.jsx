import { useLayoutEffect } from 'react'

import {
  useLocation,
  useNavigationType,
} from 'react-router-dom'

import { getLenis, scrollTo } from '@lib/lenis'

export default function ScrollToTop() {

  const { pathname, hash } = useLocation()

  const navigationType = useNavigationType()

  useLayoutEffect(() => {

    window.history.scrollRestoration = 'manual'

    if (hash) {

      requestAnimationFrame(() => {

        const element = document.querySelector(hash)

        if (element) {

          scrollTo(element)

        }

      })

      return

    }

    if (navigationType === 'POP') {

      const savedPosition =
        sessionStorage.getItem('works-scroll-position')

      if (
        pathname === '/works' &&
        savedPosition !== null
      ) {

        const position = Number(savedPosition)

        requestAnimationFrame(() => {

          requestAnimationFrame(() => {

            const lenis = getLenis()

            if (lenis) {

              lenis.scrollTo(position, {
                immediate: true,
              })

            } else {

              window.scrollTo({
                top: position,
                behavior: 'auto',
              })

            }

          })

        })

        return

      }

      return

    }

    scrollTo(0, {
      immediate: true,
    })

  }, [pathname, hash, navigationType])

  return null

}