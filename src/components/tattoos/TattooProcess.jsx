import process from '@data/works/tattoos/process'

export default function TattooProcess() {
  return (
    <section className="relative -mt-40 w-full bg-black pt-40">

      {/* Sombra que cubre progresivamente la sección anterior */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-40
          -translate-y-full
          bg-gradient-to-b
          from-transparent
          via-black/40
          to-black
        "
      />

      <div className="relative mx-auto w-full max-w-[1800px] px-20 py-28">

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">

          {process.map((photo) => (
            <div
              key={photo.id}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={photo.image}
                alt={photo.alt}
                className="
                  w-full
                  h-auto
                  object-cover
                  transition-all
                  duration-700
                  hover:scale-[1.02]
                "
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}