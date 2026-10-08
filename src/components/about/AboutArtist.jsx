import { motion } from "framer-motion";

import { artist } from "@data/about";
import portrait from "@assets/artist/portrait.jpg";

export default function AboutArtist() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-40">
      <motion.div
        className="grid gap-20 lg:grid-cols-[420px_1fr] lg:items-start"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="overflow-hidden rounded-sm">
          <img
            src={portrait}
            alt="Portrait of MANTRA"
            className="aspect-[4/5] h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-[var(--void-text-muted)]">
            {artist.eyebrow}
          </p>

          <h2 className="mt-8 text-6xl font-light">
            {artist.name}
          </h2>

          <p className="mt-4 text-xl text-[var(--void-text-muted)]">
            {artist.role}
          </p>

          <p className="mt-2 font-mono text-sm uppercase tracking-[0.25em] text-[var(--void-text-muted)]">
            {artist.location}
          </p>

          <div className="mt-16 max-w-2xl space-y-8">
            <p className="text-xl leading-9">
              {artist.statement}
            </p>

            {artist.biography.map((paragraph) => (
              <p
                key={paragraph}
                className="leading-8 text-[var(--void-text-muted)]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}