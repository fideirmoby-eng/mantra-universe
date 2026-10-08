import { motion } from 'framer-motion'

import { manifesto } from '@data/about'

export default function AboutManifesto() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-40">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-[var(--void-text-muted)]">
          {manifesto.eyebrow}
        </p>

        <h2 className="mt-8 text-5xl font-light leading-tight md:text-6xl">
          {manifesto.title[0]}
          <br />
          {manifesto.title[1]}
        </h2>

        <div className="mt-16 space-y-8 text-lg leading-9 text-[var(--void-text-muted)]">
          {manifesto.paragraphs.map((paragraph) => (
            <p key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  )
}