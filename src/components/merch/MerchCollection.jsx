import { Link } from "react-router-dom";

export default function MerchCollection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">

        <p className="mb-5 text-xs uppercase tracking-[0.4em] text-white/50">
          MERCH
        </p>

        <h2 className="text-4xl font-light leading-tight md:text-6xl">
          Objects that extend
          <br />
          the universe
          <br />
          beyond the canvas.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
          Every object is conceived as an extension of an artwork, not as a
          souvenir.
        </p>

        <div className="my-10 h-px w-24 bg-white/10" />

        <p className="max-w-2xl text-sm leading-8 text-white/70 md:text-base">
          Every piece is created on commission. MANTRA does not manufacture
          garments or accessories. Each project begins with a selected base item
          chosen by the client or sourced specifically for the commission.
          Pricing depends on the garment, materials and artistic intervention.
        </p>

        <Link
          to="/contact#commission"
          className="mt-10 text-sm font-medium uppercase tracking-[0.25em] text-white transition-opacity duration-300 hover:opacity-60"
        >
          START A COMMISSION →
        </Link>

      </div>
    </section>
  );
}