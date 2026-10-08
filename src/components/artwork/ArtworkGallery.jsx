import { useEffect, useState } from 'react'

import { motion } from 'framer-motion'

import { Link } from 'react-router-dom'

import { ArtworkImage } from '@components/ui/ArtworkImage'

import { getLenis } from '@lib/lenis'

export default function ArtworkGallery({ artworks = [] }) {
  const [activeVideo, setActiveVideo] = useState(null)

  useEffect(() => {
    if (!activeVideo) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveVideo(null)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeVideo])

  return (
    <section
      id="works-gallery"
      className="mx-auto max-w-7xl px-2 py-16 md:px-8 md:py-20"
    >
      <motion.div
        className="grid grid-cols-2 gap-x-2 gap-y-14 md:grid-cols-4 md:gap-x-8 md:gap-y-16 xl:gap-x-8 xl:gap-y-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {artworks.map((artwork) => {
          const isVideoArt = artwork.category === 'video-art'
          const isWatercolor = artwork.category === 'watercolors'

          if (isVideoArt) {
            return (
              <button
                key={artwork.id}
                type="button"
                onClick={() => setActiveVideo(artwork.video)}
                className="group block min-w-0 w-full text-left transition duration-300 hover:opacity-90"
              >
                <video
                  src={artwork.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="mb-4 aspect-[2/3] w-full object-cover md:mb-5"
                />

                <h3 className="min-w-0 break-words text-sm font-light leading-tight md:text-2xl">
                  {artwork.title}
                </h3>

                <p className="mt-2 text-xs opacity-60 md:text-sm">
                  {artwork.year}
                </p>
              </button>
            )
          }

          return (
            <Link
              key={artwork.id}
              to={`/works/${artwork.category}/${artwork.slug}`}
              onClick={() => {
                const lenis = getLenis()

                const position = lenis
                  ? lenis.scroll
                  : window.scrollY

                sessionStorage.setItem(
                  `works-scroll-position-${artwork.category}`,
                  String(position)
                )
              }}
              className="group block min-w-0 transition duration-300 hover:opacity-90"
            >
              {isWatercolor ? (
                <div className="mb-4 md:mb-5">
                  <ArtworkImage
                    src={artwork.image}
                    alt={artwork.title}
                    aspect="2/3"
                    fit="cover"
                    className="w-full"
                  />
                </div>
              ) : (
                <ArtworkImage
                  src={artwork.image}
                  alt={artwork.title}
                  className="mb-4 md:mb-5"
                />
              )}

              {artwork.mantra && (
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-50 md:text-xs md:tracking-[0.3em]">
                  MANTRA {artwork.mantra}
                </p>
              )}

              <h3 className="mt-2 min-w-0 break-words text-sm font-light leading-tight md:mt-3 md:text-2xl">
                {artwork.title}
              </h3>

              <p className="mt-2 text-xs opacity-60 md:text-sm">
                {artwork.year}
              </p>

              {artwork.description && (
                <p className="mt-4 hidden text-sm leading-6 opacity-70 md:block">
                  {artwork.description}
                </p>
              )}
            </Link>
          )
        })}
      </motion.div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          onClick={() => setActiveVideo(null)}
        >
          <button
            type="button"
            onClick={() => setActiveVideo(null)}
            aria-label="Close video"
            className="absolute right-6 top-6 z-10 text-3xl font-light text-white/80 transition hover:text-white"
          >
            ×
          </button>

          <video
            src={activeVideo}
            controls
            autoPlay
            loop
            playsInline
            className="h-full w-full object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}