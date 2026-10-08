export default function EditorialWall({ photos = [] }) {
    return (
      <section className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="columns-1 gap-8 md:columns-2 xl:columns-3">
          {photos.map((photo) => (
            <article
              key={photo.id}
              className="mb-8 break-inside-avoid"
            >
              <img
                src={photo.image}
                alt={photo.alt}
                className="w-full rounded-xl object-contain transition-transform duration-500 hover:scale-[1.02]"
              />
            </article>
          ))}
        </div>
      </section>
    )
  }