export default function MerchLeatherGoodsBlock() {
  const bags = [
    "/merch/leather-goods/bag-01.jpg",
    "/merch/leather-goods/bag-02.jpg",
    "/merch/leather-goods/bag-03.jpg",
    "/merch/leather-goods/bag-04.jpg",
  ];

  return (
    <section className="bg-black py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-32">

          {/* Texto */}
          <div className="order-1 lg:order-2">

            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/40">
              02
            </p>

            <h2 className="max-w-md text-5xl font-light leading-tight md:text-6xl">
              LEATHER GOODS
            </h2>

            <p className="mt-10 max-w-lg text-lg leading-8 text-white/70">
              Sculptural bags transformed through hand painting, textures and
              experimental finishes. Each piece is conceived as a collectible
              object, balancing everyday function with the artistic language of
              the MANTRA Universe.
            </p>

            <p className="mt-8 text-sm uppercase tracking-[0.25em] text-white/40">
              Hand-painted · Limited editions · Custom commissions
            </p>

          </div>

          {/* Imagen editorial */}
          <div className="order-2 lg:order-1 aspect-[3/4] overflow-hidden">

            <img
              src="/merch/editorial/editorial-02.jpg"
              alt="Editorial Chapter 02"
              className="h-full w-full object-cover"
              loading="lazy"
              draggable={false}
            />

          </div>

        </div>

        {/* Colección */}
        <div className="mt-24 grid grid-cols-2 gap-6 md:grid-cols-4">

          {bags.map((image, index) => (
            <div
              key={index}
              className="group aspect-[3/4] overflow-hidden border border-white/10 bg-white"
            >
              <img
                src={image}
                alt={`Leather Goods ${index + 1}`}
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