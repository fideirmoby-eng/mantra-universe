export default function MerchToteBagsBlock() {
  const totes = [
    "/merch/tote-bags/tote-01.jpg",
    "/merch/tote-bags/tote-02.jpg",
    "/merch/tote-bags/tote-03.jpg",
    "/merch/tote-bags/tote-04.jpg",
  ];

  return (
    <section className="bg-black py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-32">

          {/* Texto */}
          <div className="order-1 lg:order-2">

            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/40">
              06
            </p>

            <h2 className="max-w-md text-5xl font-light leading-tight md:text-6xl">
              TOTE BAGS
            </h2>

            <p className="mt-10 max-w-lg text-lg leading-8 text-white/70">
              Everyday canvas bags reimagined through painting, graphic
              interventions and handcrafted details. Practical objects elevated
              into collectible pieces that carry the visual language of the
              MANTRA Universe.
            </p>

            <p className="mt-8 text-sm uppercase tracking-[0.25em] text-white/40">
              Hand-painted · Limited editions · Custom commissions
            </p>

          </div>

          {/* Imagen editorial */}
          <div className="order-2 lg:order-1 aspect-[3/4] overflow-hidden">

            <img
              src="/merch/editorial/editorial-06.jpg"
              alt="Editorial Chapter 06"
              className="h-full w-full object-cover"
              loading="lazy"
              draggable={false}
            />

          </div>

        </div>

        {/* Colección */}
        <div className="mt-24 grid grid-cols-2 gap-6 md:grid-cols-4">

          {totes.map((image, index) => (
            <div
              key={index}
              className="group aspect-[3/4] overflow-hidden border border-white/10 bg-white"
            >
              <img
                src={image}
                alt={`Tote Bag ${index + 1}`}
                loading="lazy"
                draggable={false}
                className="
                  h-full
                  w-full
                  object-contain
                  p-3
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.02]
                "
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}