import { motion } from 'framer-motion'

export default function ArtworkLivingMantra({ mantra }) {
  if (!mantra) return null

  return (
    <motion.section
      className="mx-auto max-w-2xl px-6 py-36"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto h-px w-16 bg-white/10" />

      <p className="mt-14 text-center font-mono uppercase tracking-[0.45em] text-[var(--void-text-muted)]">
        The Living Mantra
      </p>

      <h2 className="mt-12 text-center text-8xl font-extralight leading-none tracking-tight">
        {mantra.number}
      </h2>

      <div className="mt-24 space-y-20">

        <div>
          <h3 className="font-mono uppercase tracking-[0.35em] text-sm text-[var(--void-text-muted)]">
            Meaning
          </h3>

          <p className="mt-6 text-lg leading-9 opacity-80">
            {mantra.meaning}
          </p>
        </div>

        <div>
          <h3 className="font-mono uppercase tracking-[0.35em] text-sm text-[var(--void-text-muted)]">
            Reflection
          </h3>

          <p className="mt-6 text-lg leading-9 opacity-80">
            {mantra.reflection}
          </p>
        </div>

        <div>
          <h3 className="font-mono uppercase tracking-[0.35em] text-sm text-[var(--void-text-muted)]">
            Practice
          </h3>

          <p className="mt-6 text-lg leading-9 opacity-80">
            {mantra.practice}
          </p>
        </div>

      </div>
    </motion.section>
  )
}