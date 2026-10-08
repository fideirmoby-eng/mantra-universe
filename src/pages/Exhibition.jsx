import { Link } from 'react-router-dom'

import {
  featuredExhibitions,
  allExhibitions,
} from '@data/works/exhibitions'


function ExhibitionCard({ exhibition, featured = false }) {
  return (
    <Link
      to={`/exhibition/${exhibition.slug}`}
      className="group block border border-white/10 bg-black transition-colors duration-300 hover:border-white/25"
    >

      {/* IMAGE */}

      <div className="aspect-[4/3] overflow-hidden bg-neutral-900">

        <img
          src={exhibition.cover}
          alt={exhibition.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />

      </div>


      {/* CONTENT */}

      <div className={featured ? 'p-3 md:p-6' : 'pt-3 md:pt-4'}>

        {exhibition.exhibitionDate && (
          <p className="text-[10px] tracking-[0.18em] text-neutral-500 md:text-xs">
            {exhibition.exhibitionDate}
          </p>
        )}

        <h3
          className={
            featured
              ? 'mt-2 text-lg font-light leading-tight tracking-tight md:text-2xl'
              : 'mt-2 text-sm font-light leading-tight tracking-tight md:text-base'
          }
        >
          {exhibition.title}
        </h3>

        {exhibition.location && (
          <p
            className={
              featured
                ? 'mt-2 text-[11px] uppercase tracking-[0.14em] text-neutral-500 md:mt-3 md:text-sm'
                : 'mt-2 text-[10px] uppercase tracking-[0.14em] text-neutral-600 md:text-xs'
            }
          >
            {exhibition.location}
          </p>
        )}

      </div>

    </Link>
  )
}


export default function Exhibitions() {
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
            Exhibitions
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-neutral-400 md:mt-8 md:text-lg">
            Exhibitions, presentations and moments where the MANTRA Universe has
            been brought into physical space.
          </p>

        </div>
      </section>


      {/* ─────────────────────────────────────────────
          FEATURED EXHIBITIONS
      ───────────────────────────────────────────── */}

      <section className="px-6 pb-20 md:px-10 md:pb-32 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-7 md:mb-10">

            <p className="text-[10px] tracking-[0.25em] text-neutral-500 md:text-xs">
              FEATURED
            </p>

            <h2 className="mt-2 text-xl font-light tracking-tight md:mt-3 md:text-3xl">
              PRINCIPAL EXHIBITIONS
            </h2>

          </div>


          {/* 
            IMPORTANT:
            2 columns on mobile.
            PC remains unchanged.
          */}

          <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3">

            {featuredExhibitions.map((exhibition) => (
              <ExhibitionCard
                key={exhibition.id || exhibition.slug}
                exhibition={exhibition}
                featured
              />
            ))}

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────
          ALL EXHIBITIONS
      ───────────────────────────────────────────── */}

      <section className="border-t border-white/10 px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-7 md:mb-10">

            <p className="text-[10px] tracking-[0.25em] text-neutral-500 md:text-xs">
              ARCHIVE
            </p>

            <h2 className="mt-2 text-xl font-light tracking-tight md:mt-3 md:text-3xl">
              ALL EXHIBITIONS
            </h2>

          </div>


          {/* 
            2 columns on mobile.
            2 columns on tablet.
            4 columns on large desktop.
          */}

          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-12 lg:grid-cols-4">

            {allExhibitions.map((exhibition) => (
              <ExhibitionCard
                key={exhibition.id || exhibition.slug}
                exhibition={exhibition}
              />
            ))}

          </div>

        </div>
      </section>

    </main>
  )
}