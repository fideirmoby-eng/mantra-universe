import { motion } from 'framer-motion'

export default function ArtworkMantra() {
  return (
    <motion.section
      className="px-6 py-40"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono uppercase tracking-[0.35em] text-[var(--void-text-muted)]">
          MANTRA
        </p>

        <h2 className="mt-8 text-4xl font-light leading-tight md:text-6xl">
          Every artwork
          <br />
          has its own mantra.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 opacity-70">
          Numbers inside MANTRA Universe are not inventory codes.
          They are symbolic identifiers that connect every physical artwork
          with its permanent digital archive, future exhibitions and evolving
          narrative.
        </p>
      </div>
    </motion.section>
  )
}