import { Link } from 'react-router-dom'

import { featuredProjects, allProjects } from '../data/projects'
import { workCollections } from '../data/works/collections'

function getArtwork(category, slug) {
  const collection = workCollections[category]

  if (!collection) {
    return null
  }

  return collection.find((artwork) => artwork.slug === slug) ?? null
}

function getProjectCover(project) {
  if (!project.coverArtwork) {
    return null
  }

  return getArtwork(
    project.coverArtwork.category,
    project.coverArtwork.slug
  )
}

export default function Projects() {
  return (
    <main className="bg-black text-white">

      {/* ─────────────────────────────────────────────
          INTRO
      ───────────────────────────────────────────── */}

      <section className="px-6 pb-14 pt-28 md:px-10 md:pb-20 md:pt-32 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <p className="text-[10px] tracking-[0.25em] text-neutral-500 md:text-xs">
            MANTRA
          </p>

          <h1 className="mt-4 text-4xl font-light tracking-tight md:mt-5 md:text-6xl lg:text-7xl">
            Projects
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-neutral-400 md:mt-8 md:text-lg">
            Creative projects developed through artistic research,
            experimentation and multidisciplinary practice.
          </p>

        </div>
      </section>


      {/* ─────────────────────────────────────────────
          FEATURED PROJECTS
      ───────────────────────────────────────────── */}

      <section className="px-6 pb-20 md:px-10 md:pb-32 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-7 md:mb-10">

            <p className="text-[10px] tracking-[0.25em] text-neutral-500 md:text-xs">
              FEATURED
            </p>

            <h2 className="mt-2 text-xl font-light tracking-tight md:mt-3 md:text-3xl">
              FEATURED PROJECTS
            </h2>

          </div>


          {/* 
            IMPORTANT:
            2 columns on mobile.
            PC remains exactly as before.
          */}

          <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3">

            {featuredProjects.map((project) => {
              const cover = getProjectCover(project)

              return (
                <Link
                  key={project.slug}
                  to={`/projects/${project.slug}`}
                  className="group block border border-white/10 bg-black transition-colors duration-300 hover:border-white/25"
                >

                  {/* IMAGE */}

                  {cover?.image && (
                    <div className="aspect-[4/3] overflow-hidden bg-neutral-900">

                      <img
                        src={cover.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />

                    </div>
                  )}


                  {/* CONTENT */}

                  <div className="p-3 md:p-6">

                    <div className="mb-2 flex items-center justify-between gap-2 md:mb-3">

                      <p className="text-[10px] tracking-[0.2em] text-neutral-500 md:text-xs">
                        {project.year}
                      </p>

                    </div>

                    <h3 className="text-lg font-light leading-tight tracking-tight md:text-2xl">
                      {project.title}
                    </h3>

                    {project.description && (
                      <p className="mt-2 text-[11px] leading-relaxed text-neutral-500 md:mt-3 md:text-sm">
                        {project.description}
                      </p>
                    )}

                  </div>

                </Link>
              )
            })}

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────
          ALL PROJECTS
      ───────────────────────────────────────────── */}

      <section className="border-t border-white/10 px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-7 md:mb-10">

            <p className="text-[10px] tracking-[0.25em] text-neutral-500 md:text-xs">
              ARCHIVE
            </p>

            <h2 className="mt-2 text-xl font-light tracking-tight md:mt-3 md:text-3xl">
              ALL PROJECTS
            </h2>

          </div>


          {/* 
            2 columns on mobile.
            2 columns on tablet.
            4 columns on large desktop.
          */}

          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-12 lg:grid-cols-4">

            {allProjects.map((project) => {
              const cover = getProjectCover(project)

              return (
                <Link
                  key={project.slug}
                  to={`/projects/${project.slug}`}
                  className="group block"
                >

                  {cover?.image ? (
                    <div className="aspect-[4/3] overflow-hidden bg-neutral-900">

                      <img
                        src={cover.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />

                    </div>
                  ) : (
                    <div className="aspect-[4/3] border border-white/10 bg-neutral-950" />
                  )}


                  <div className="pt-3 md:pt-4">

                    <div className="flex items-start justify-between gap-2">

                      <h3 className="text-sm font-light leading-tight tracking-tight md:text-base">
                        {project.title}
                      </h3>

                      {project.year && (
                        <span className="shrink-0 text-[10px] tracking-wider text-neutral-600 md:text-xs">
                          {project.year}
                        </span>
                      )}

                    </div>

                  </div>

                </Link>
              )
            })}

          </div>

        </div>
      </section>

    </main>
  )
}