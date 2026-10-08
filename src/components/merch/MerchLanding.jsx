export default function MerchLanding() {
    return (
      <section className="bg-black text-white">
  
        {/* Hero */}
        <section className="relative h-screen overflow-hidden">
          <img
            src="/merch/hero.jpg"
            alt="MANTRA Merch"
            className="h-full w-full object-cover"
          />
        </section>
  
        {/* Primer bloque */}
        <section className="mx-auto max-w-7xl px-6 py-32">
  
          <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
  
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/40">
                01
              </p>
  
              <h2 className="mb-8 text-5xl font-light">
                Placeholder
              </h2>
  
              <p className="max-w-md text-lg leading-8 text-white/70">
                Placeholder.
              </p>
            </div>
  
            <div className="aspect-[4/5] rounded-xl bg-neutral-800" />
  
          </div>
  
          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="aspect-square rounded-lg bg-neutral-800" />
            <div className="aspect-square rounded-lg bg-neutral-800" />
            <div className="aspect-square rounded-lg bg-neutral-800" />
            <div className="aspect-square rounded-lg bg-neutral-800" />
          </div>
  
        </section>
  
      </section>
    );
  }