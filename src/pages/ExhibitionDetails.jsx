import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import { exhibitions } from '@data/works/exhibitions'

export default function ExhibitionDetails() {
  const { slug } = useParams()

  const exhibition = exhibitions.find(
    (item) => item.slug === slug
  )

  const [activeVideo, setActiveVideo] = useState(null)

  useEffect(() => {
    if (!activeVideo) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveVideo(null)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [activeVideo])

  if (!exhibition) {
    return (
      <main className="min-h-screen bg-black px-6 py-32 text-white md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Exhibition
          </p>

          <h1 className="mt-5 text-4xl font-light md:text-6xl">
            Exhibition not found
          </h1>

        </div>
      </main>
    )
  }

  const images = exhibition.images ?? []
  const videos = exhibition.videos ?? []

  const painting = images[0]
  const catalog01 = images[1]
  const catalog02 = images[2]
  const newspaper = images[3]
  const paintingExtra = images[4]

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Header */}
      <section className="px-6 pb-20 pt-32 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <span className="block text-xs uppercase tracking-[0.3em] text-neutral-500">
            Exhibition
          </span>

          <h1 className="mt-5 max-w-5xl text-5xl font-light tracking-tight md:text-6xl lg:text-7xl">
            {exhibition.title}
          </h1>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-neutral-500">
            <span>{exhibition.exhibitionDate}</span>
            <span>{exhibition.location}</span>
          </div>

        </div>
      </section>

      {/* Description */}
      {exhibition.description && (
        <section className="px-6 pb-28 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">

            <p className="max-w-3xl text-lg leading-relaxed text-neutral-400 md:text-xl">
              {exhibition.description}
            </p>

          </div>
        </section>
      )}

      {/* Exhibition visual archive */}
      {(painting ||
        catalog01 ||
        catalog02 ||
        newspaper ||
        paintingExtra ||
        videos.length > 0) && (
        <section className="px-6 pb-24 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">

              {/* Left column */}
              <div className="flex flex-col gap-5 md:gap-6">

                {/* Painting */}
                {painting && (
                  <figure className="overflow-hidden">
                    <img
                      src={painting.src || painting}
                      alt={
                        painting.alt ||
                        `${exhibition.title} — Artwork`
                      }
                      className="block h-auto w-full"
                    />
                  </figure>
                )}

                {/* Videos */}
                {videos.length > 0 && (
                  <>
                    {videos.map((video, index) => (
                      <button
                        key={video.src || index}
                        type="button"
                        onClick={() =>
                          setActiveVideo(video.src || video)
                        }
                        className="group relative block w-full overflow-hidden bg-black text-left"
                        aria-label={`Open exhibition video ${index + 1}`}
                      >
                        <video
                          src={video.src || video}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          className="block h-auto max-h-[760px] w-full cursor-pointer object-contain"
                        />

                        <div className="pointer-events-none absolute bottom-4 left-4">
                          <span className="bg-black/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-white/80 backdrop-blur-sm">
                            Video {index + 1}
                          </span>
                        </div>
                      </button>
                    ))}
                  </>
                )}

              </div>

              {/* Right column */}
              <div className="flex flex-col gap-5 md:gap-6">

                {/* Catalog 01 */}
                {catalog01 && (
                  <figure className="overflow-hidden">
                    <img
                      src={catalog01.src || catalog01}
                      alt={
                        catalog01.alt ||
                        `${exhibition.title} — Catalog 01`
                      }
                      className="block h-auto w-full"
                    />
                  </figure>
                )}

                {/* Catalog 02 */}
                {catalog02 && (
                  <figure className="overflow-hidden">
                    <img
                      src={catalog02.src || catalog02}
                      alt={
                        catalog02.alt ||
                        `${exhibition.title} — Catalog 02`
                      }
                      className="block h-auto w-full"
                    />
                  </figure>
                )}

                {/* Catalog 03 */}
                {newspaper && (
                  <figure className="overflow-hidden">
                    <img
                      src={newspaper.src || newspaper}
                      alt={
                        newspaper.alt ||
                        `${exhibition.title} — Catalog 03`
                      }
                      className="block h-auto w-full"
                    />
                  </figure>
                )}

                {/* Additional Painting */}
                {paintingExtra && (
                  <figure className="overflow-hidden">
                    <img
                      src={paintingExtra.src || paintingExtra}
                      alt={
                        paintingExtra.alt ||
                        `${exhibition.title} — Artwork`
                      }
                      className="block h-auto w-full"
                    />
                  </figure>
                )}

              </div>

            </div>

          </div>
        </section>
      )}

      {/* Exhibition information */}
      <section className="border-t border-neutral-900 px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">

          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-600">
              Exhibition
            </span>

            <h2 className="mt-4 text-2xl font-light">
              {exhibition.title}
            </h2>
          </div>

          <div className="space-y-6 text-sm text-neutral-400">

            <div>
              <span className="block text-xs uppercase tracking-[0.2em] text-neutral-600">
                Date
              </span>

              <p className="mt-2">
                {exhibition.exhibitionDate}
              </p>
            </div>

            <div>
              <span className="block text-xs uppercase tracking-[0.2em] text-neutral-600">
                Location
              </span>

              <p className="mt-2">
                {exhibition.location}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Video overlay */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          role="dialog"
          aria-modal="true"
          aria-label="Exhibition video"
        >

          {/* Close */}
          <button
            type="button"
            onClick={() => setActiveVideo(null)}
            className="absolute right-6 top-6 z-20 flex h-12 w-12 items-center justify-center text-3xl font-light text-white transition-opacity duration-300 hover:opacity-60"
            aria-label="Close video"
          >
            ×
          </button>

          {/* Video */}
          <video
            src={activeVideo}
            autoPlay
            controls
            playsInline
            preload="auto"
            onEnded={() => setActiveVideo(null)}
            className="max-h-[90vh] max-w-[92vw] object-contain"
          />

        </div>
      )}

    </main>
  )
}