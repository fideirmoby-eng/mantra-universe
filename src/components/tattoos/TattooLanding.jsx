import { Link } from 'react-router-dom'

import tattoosCover from '@assets/covers/tattoos-cover.jpg'
import tattooDesignsCover from '@assets/covers/tattoo-designs-cover.jpg'

export default function TattooLanding() {
  return (
    <section className="relative w-full pb-24">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          <Link
            to="/tattoos/gallery"
            className="group relative flex min-h-[320px] items-end overflow-hidden rounded-2xl border border-neutral-200 transition-all duration-300 hover:border-white"
          >
            <img
              src={tattoosCover}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/65 transition-colors duration-300 group-hover:bg-black/55" />

            <div className="relative z-10 p-8">
              <span className="mb-3 block text-xs uppercase tracking-[0.3em] text-neutral-300">
                Gallery
              </span>

              <h2 className="text-3xl font-light text-white">
                Tattoos
              </h2>

              <p className="mt-4 max-w-sm text-neutral-200">
                Explore completed tattoos from different projects and styles.
              </p>
            </div>
          </Link>

          <Link
            to="/tattoos/designs"
            className="group relative flex min-h-[320px] items-end overflow-hidden rounded-2xl border border-neutral-200 transition-all duration-300 hover:border-white"
          >
            <img
              src={tattooDesignsCover}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/65 transition-colors duration-300 group-hover:bg-black/55" />

            <div className="relative z-10 p-8">
              <span className="mb-3 block text-xs uppercase tracking-[0.3em] text-neutral-300">
                Available
              </span>

              <h2 className="text-3xl font-light text-white">
                Tattoo Designs
              </h2>

              <p className="mt-4 max-w-sm text-neutral-200">
                Browse original designs created to become future tattoos.
              </p>
            </div>
          </Link>

        </div>

      </div>
    </section>
  )
}