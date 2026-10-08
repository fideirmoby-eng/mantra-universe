import { Link, useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

import projects from '../data/projects'
import { workCollections } from '../data/works/collections'

import exhibitionVisualization01 from '../assets/projects/numbers-that-speak-to-me/exhibition/exhibition-visualization-01.jpg'
import exhibitionVisualization02 from '../assets/projects/numbers-that-speak-to-me/exhibition/exhibition-visualization-02.jpg'

function getArtwork(category, slug) {
  const collection = workCollections[category]

  if (!collection) {
    return null
  }

  return collection.find((artwork) => artwork.slug === slug) ?? null
}

function getArtworkUrl(category, slug) {
  return `/works/${category}/${slug}`
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  const [activeVideo, setActiveVideo] = useState(null)
  const fullscreenVideoRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    if (!activeVideo) {
      document.body.style.overflow = ''
      return
    }

    document.body.style.overflow = 'hidden'

    const handlePopState = () => {
      setActiveVideo(null)
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        window.history.back()
      }
    }

    window.addEventListener('popstate', handlePopState)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeVideo])

  useEffect(() => {
    if (!activeVideo || !fullscreenVideoRef.current) {
      return
    }

    const video = fullscreenVideoRef.current

    video.play().catch(() => {
      // Browser autoplay policy may require manual play.
    })
  }, [activeVideo])

  const openVideo = (artwork) => {
    setActiveVideo(artwork)

    window.history.pushState(
      { projectVideo: true },
      '',
      `#video-${artwork.slug}`
    )
  }

  const closeVideo = () => {
    if (window.history.state?.projectVideo) {
      window.history.back()
    } else {
      setActiveVideo(null)
    }
  }

  if (!project) {
    return (
      <main className="min-h-screen bg-black px-6 pb-24 pt-32 text-white md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            MANTRA
          </p>

          <h1 className="mt-5 text-5xl font-light tracking-tight md:text-6xl lg:text-7xl">
            Project not found
          </h1>

          <Link
            to="/projects"
            className="mt-10 inline-block text-xs uppercase tracking-[0.2em] text-neutral-500 transition-colors hover:text-white"
          >
            ← Back to Projects
          </Link>
        </div>
      </main>
    )
  }

  const watercolorSection = project.sections?.find(
    (section) => section.id === 'watercolors'
  )

  const watercolorWorks = (watercolorSection?.artworks ?? [])
    .map((reference) => ({
      reference,
      artwork: getArtwork(reference.category, reference.slug),
    }))
    .filter((item) => item.artwork)

  const videoSection = project.sections?.find(
    (section) => section.id === 'video-art'
  )

  const videoWorks = (videoSection?.artworks ?? [])
    .map((reference) => ({
      reference,
      artwork: getArtwork(reference.category, reference.slug),
    }))
    .filter((item) => item.artwork)

  return (
    <>
      <main className="min-h-screen bg-black font-light text-white">

        {/* Header */}
        <section className="px-6 pb-20 pt-32 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <Link
              to="/projects"
              className="mb-12 inline-block text-xs uppercase tracking-[0.3em] text-neutral-500 transition-colors hover:text-white"
            >
              ← Projects
            </Link>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_280px] md:gap-20">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  {project.type}
                </p>

                <h1 className="mt-5 max-w-5xl text-5xl font-light tracking-tight md:text-6xl lg:text-7xl">
                  {project.title}
                </h1>
              </div>

              <div className="border-t border-neutral-800 pt-5 md:mt-2">
                <div className="grid grid-cols-2 gap-y-6 text-xs uppercase tracking-[0.15em]">
                  <div>
                    <p className="mb-2 text-neutral-600">Year</p>
                    <p className="text-neutral-300">{project.year}</p>
                  </div>

                  <div>
                    <p className="mb-2 text-neutral-600">Location</p>
                    <p className="text-neutral-300">{project.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About the Project */}
        <section className="border-t border-neutral-900 px-6 py-20 md:px-10 md:py-28 lg:px-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-[280px_1fr] md:gap-20">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                About the Project
              </p>
            </div>

            <div>
              <p className="max-w-4xl text-2xl font-light leading-relaxed text-neutral-200 md:text-4xl">
                {project.description}
              </p>
            </div>
          </div>
        </section>

        {/* The Experience */}
        <section className="border-t border-neutral-900 px-6 py-20 md:px-10 md:py-28 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-[280px_1fr] md:gap-20">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  The Experience
                </p>
              </div>

              <div>
                <h2 className="max-w-4xl text-3xl font-light leading-tight md:text-5xl">
                  From experience to image, and from image to transformation.
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 border-t border-neutral-800 md:grid-cols-2">
              <div className="border-b border-neutral-800 py-8 md:border-r md:px-8 lg:px-10">
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                  01 — Enter
                </p>

                <h3 className="mt-4 text-xl font-light">
                  Darkness & Revelation
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-neutral-400">
                  The experience begins in darkness. A projected video
                  introduces the conceptual universe of MANTRA.
                </p>
              </div>

              <div className="border-b border-neutral-800 py-8 md:px-8 lg:px-10">
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                  02 — Connect
                </p>

                <h3 className="mt-4 text-xl font-light">
                  Music & Atmosphere
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-neutral-400">
                  Light and original music gradually transform the space,
                  creating the atmosphere for the works.
                </p>
              </div>

              <div className="border-b border-neutral-800 py-8 md:border-r md:px-8 lg:px-10">
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                  03 — Explore
                </p>

                <h3 className="mt-4 text-xl font-light">
                  The Living Exhibition
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-neutral-400">
                  Paintings, watercolors, installations, photography and
                  fashion unfold through the exhibition. The numbered
                  paintings act as personal mantras, with QR codes revealing
                  the stories behind them.
                </p>
              </div>

              <div className="border-b border-neutral-800 py-8 md:px-8 lg:px-10">
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                  04 — Experience
                </p>

                <h3 className="mt-4 text-xl font-light">
                  Art in the Present
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-neutral-400">
                  The journey culminates in a live performance, where the
                  artist creates new works in front of the audience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conceptual Structure */}
        {project.stages?.length > 0 && (
          <section className="border-t border-neutral-900 px-6 py-20 md:px-10 md:py-28 lg:px-16">
            <div className="mx-auto max-w-7xl">
              <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-[280px_1fr] md:gap-20">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                    Conceptual Structure
                  </p>
                </div>

                <div>
                  <h2 className="max-w-4xl text-3xl font-light leading-tight md:text-5xl">
                    One continuous transformation through three visual
                    languages.
                  </h2>
                </div>
              </div>

              <div className="space-y-24">
                {project.stages.map((stage) => {
                  const stageWorks = (stage.artworks ?? []).map(
                    (reference) => {
                      if (!reference) {
                        return {
                          reference: null,
                          artwork: null,
                        }
                      }

                      return {
                        reference,
                        artwork: getArtwork(
                          reference.category,
                          reference.slug
                        ),
                      }
                    }
                  )

                  return (
                    <div key={stage.number}>
                      {/* Stage Header */}
                      <div className="mb-8 border-t border-neutral-800 pt-6">
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-[100px_280px_1fr] md:gap-10">
                          <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                            {stage.number}
                          </p>

                          <h3 className="text-2xl font-light uppercase tracking-wide md:text-3xl">
                            {stage.title}
                          </h3>

                          <p className="max-w-2xl text-sm leading-7 text-neutral-400">
                            {stage.description}
                          </p>
                        </div>
                      </div>

                      {/* Stage Works */}
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {stageWorks.map(
                          ({ reference, artwork }, index) => {
                            if (!artwork) {
                              return (
                                <div
                                  key={`${stage.number}-future-${index}`}
                                  className="overflow-hidden border border-neutral-800"
                                >
                                  <div className="flex aspect-[4/5] items-center justify-center bg-neutral-950">
                                    <div className="px-8 text-center">
                                      <p className="text-xs uppercase tracking-[0.25em] text-neutral-600">
                                        {stage.number}
                                      </p>

                                      <p className="mt-3 text-sm font-light text-neutral-500">
                                        {stage.title}
                                      </p>

                                      <p className="mt-2 text-xs text-neutral-700">
                                        Work in development
                                      </p>
                                    </div>
                                  </div>

                                  <div className="border-t border-neutral-800 p-5">
                                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                                      Future Work
                                    </p>
                                  </div>
                                </div>
                              )
                            }

                            return (
                              <Link
                                key={`${reference.category}-${reference.slug}`}
                                to={getArtworkUrl(
                                  reference.category,
                                  reference.slug
                                )}
                                className="group block overflow-hidden border border-neutral-800 transition-colors duration-500 hover:border-neutral-500"
                              >
                                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
                                  {artwork.image ? (
                                    <img
                                      src={artwork.image}
                                      alt={artwork.title}
                                      className="h-full w-full object-cover object-top"
                                    />
                                  ) : (
                                    <div className="flex h-full items-center justify-center px-6 text-center">
                                      <span className="text-neutral-600">
                                        {artwork.title}
                                      </span>
                                    </div>
                                  )}

                                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
                                </div>

                                <div className="p-5">
                                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                                    {artwork.year}
                                  </p>

                                  <h4 className="mt-2 text-xl font-light">
                                    {artwork.title}
                                  </h4>
                                </div>
                              </Link>
                            )
                          }
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* Exhibition Visualization */}
        <section className="border-t border-neutral-900 px-6 py-20 md:px-10 md:py-28 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[280px_1fr] md:gap-20">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  Exhibition Visualization
                </p>
              </div>

              <div>
                <p className="max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
                  A glimpse into the possible spatial experience of Numbers
                  That Speak To Me.
                </p>
              </div>
            </div>

            <div className="space-y-10 md:space-y-16">
              <div className="overflow-hidden">
                <img
                  src={exhibitionVisualization01}
                  alt="Exhibition visualization of Numbers That Speak To Me"
                  className="h-auto w-full"
                />
              </div>

              <div className="overflow-hidden">
                <img
                  src={exhibitionVisualization02}
                  alt="Exhibition visualization of Numbers That Speak To Me"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Watercolors */}
        {watercolorWorks.length > 0 && (
          <section className="border-t border-neutral-900 px-6 py-20 md:px-10 md:py-28 lg:px-16">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  Watercolors
                </p>

                <h2 className="mt-3 text-2xl font-light uppercase tracking-wide md:text-3xl">
                  Watercolor Works
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
                {watercolorWorks.map(({ reference, artwork }) => (
                  <Link
                    key={`${reference.category}-${reference.slug}`}
                    to={getArtworkUrl(
                      reference.category,
                      reference.slug
                    )}
                    className="group block"
                  >
                    <div className="aspect-[3/4] overflow-hidden bg-neutral-900">
                      {artwork.image ? (
                        <img
                          src={artwork.image}
                          alt={artwork.title}
                          className="h-full w-full object-cover object-top"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center px-4 text-center">
                          <span className="text-sm text-neutral-600">
                            {artwork.title}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="pt-4">
                      <h3 className="text-sm font-light">
                        {artwork.title}
                      </h3>

                      <p className="mt-1 text-xs text-neutral-500">
                        {artwork.year}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Video Art */}
        {videoWorks.length > 0 && (
          <section className="border-t border-neutral-900 px-6 py-20 md:px-10 md:py-28 lg:px-16">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  Video Art
                </p>

                <h2 className="mt-3 text-2xl font-light uppercase tracking-wide md:text-3xl">
                  Moving Image
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {videoWorks.map(({ reference, artwork }) => (
                  <button
                    key={`${reference.category}-${reference.slug}`}
                    type="button"
                    onClick={() => openVideo(artwork)}
                    className="group block w-full overflow-hidden border border-neutral-800 text-left transition-colors duration-500 hover:border-neutral-500"
                  >
                    <div className="relative aspect-video overflow-hidden bg-neutral-900">
                      {artwork.video ? (
                        <video
                          src={artwork.video}
                          muted
                          loop
                          autoPlay
                          playsInline
                          preload="auto"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <span className="text-neutral-600">
                            {artwork.title}
                          </span>
                        </div>
                      )}

                      <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-black/20" />

                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                          <span className="ml-1 text-xl">▶</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5">
                      <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                        {artwork.year}
                      </p>

                      <h3 className="mt-2 text-xl font-light">
                        {artwork.title}
                      </h3>

                      <p className="mt-3 text-xs uppercase tracking-[0.15em] text-neutral-600">
                        Open Video
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Project Structure */}
        {project.components && (
          <section className="border-t border-neutral-900 px-6 py-20 md:px-10 md:py-28 lg:px-16">
            <div className="mx-auto max-w-7xl">
              <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[280px_1fr] md:gap-20">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                    Project Structure
                  </p>
                </div>

                <div>
                  <h2 className="max-w-4xl text-3xl font-light leading-tight md:text-5xl">
                    A multidisciplinary exhibition project.
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 border-t border-neutral-800 sm:grid-cols-2 lg:grid-cols-4">
                <div className="border-b border-neutral-800 py-8 sm:border-r sm:px-6 lg:px-8">
                  <p className="text-4xl font-light">
                    {project.components.mainWorks}
                  </p>

                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-neutral-500">
                    Main Works
                  </p>
                </div>

                <div className="border-b border-neutral-800 py-8 sm:px-6 lg:px-8">
                  <p className="text-4xl font-light">
                    {project.components.additionalWorks}
                  </p>

                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-neutral-500">
                    Additional Works
                  </p>
                </div>

                <div className="border-b border-neutral-800 py-8 sm:border-r sm:px-6 lg:px-8">
                  <p className="text-4xl font-light">
                    {project.components.watercolors}
                  </p>

                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-neutral-500">
                    Watercolors
                  </p>
                </div>

                <div className="border-b border-neutral-800 py-8 sm:px-6 lg:px-8">
                  <p className="text-4xl font-light">
                    {project.components.intervenedPhotographs}
                  </p>

                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-neutral-500">
                    Intervened Photographs
                  </p>
                </div>

                <div className="border-b border-neutral-800 py-8 sm:border-r sm:px-6 lg:px-8">
                  <p className="text-4xl font-light">
                    {project.components.installations}
                  </p>

                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-neutral-500">
                    Installations
                  </p>
                </div>

                <div className="border-b border-neutral-800 py-8 sm:px-6 lg:px-8">
                  <p className="text-4xl font-light">
                    {project.components.videoWorks}
                  </p>

                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-neutral-500">
                    Video Works
                  </p>
                </div>

                <div className="border-b border-neutral-800 py-8 sm:border-r sm:px-6 lg:px-8">
                  <p className="text-4xl font-light">
                    {project.components.performance}
                  </p>

                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-neutral-500">
                    Performance
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Footer Navigation */}
        <section className="border-t border-neutral-900 px-6 py-20 md:px-10 md:py-28 lg:px-16">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
            <Link
              to="/projects"
              className="text-xs uppercase tracking-[0.25em] text-neutral-500 transition-colors hover:text-white"
            >
              ← All Projects
            </Link>

            <span className="text-xs uppercase tracking-[0.25em] text-neutral-700">
              MANTRA
            </span>
          </div>
        </section>
      </main>

      {/* Fullscreen Video Viewer */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
          <button
            type="button"
            onClick={closeVideo}
            className="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center text-2xl font-light text-white/70 transition-colors hover:text-white"
            aria-label="Close video"
          >
            ×
          </button>

          <div className="absolute left-6 top-6 z-20">
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">
              {activeVideo.title}
            </p>
          </div>

          <video
            ref={fullscreenVideoRef}
            src={activeVideo.video}
            autoPlay
            controls
            playsInline
            className="max-h-screen max-w-full object-contain"
          />
        </div>
      )}
    </>
  )
}