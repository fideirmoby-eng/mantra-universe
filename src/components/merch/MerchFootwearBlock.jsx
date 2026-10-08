export default function MerchFootwearBlock() {
  const footwear = [
    "/merch/footwear/footwear-01.jpg",
    "/merch/footwear/footwear-02.jpg",
    "/merch/footwear/footwear-03.jpg",
    "/merch/footwear/footwear-04.jpg",
  ];

  return (
    <section className="bg-black py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-32">

          {/* Texto */}
          <div>

            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/40">
              05
            </p>

            <h2 className="max-w-md text-5xl font-light leading-tight md:text-6xl">
              FOOTWEAR
            </h2>

            <p className="mt-10 max-w-lg text-lg leading-8 text-white/70">
              Existing footwear is transformed through painting, layered
              textures and hand-finished interventions. Every pair preserves
              its original identity while becoming a unique extension of the
              MANTRA Universe.
            </p>

            <p className="mt-8 text-sm uppercase tracking-[0.25em] text-white/40">
              Hand-painted · One-of-a-kind · Custom commissions
            </p>

          </div>

          {/* Imagen editorial */}
          <div className="aspect-[3/4] overflow-hidden">

            <img
              src="/merch/editorial/editorial-05.jpg"
              alt="Editorial Chapter 05"
              className="h-full w-full object-cover"
              loading="lazy"
              draggable={false}
            />

          </div>

        </div>

        {/* Colección */}
        <div className="mt-24 grid grid-cols-2 gap-6 md:grid-cols-4">

          {footwear.map((image, index) => (
            <div
              key={index}
              className="group aspect-[3/4] overflow-hidden border border-white/10 bg-white"
            >
              <img
                src={image}
                alt={`MANTRA Footwear ${index + 1}`}
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