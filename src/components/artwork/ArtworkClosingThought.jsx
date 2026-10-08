import { motion } from 'framer-motion'

export default function ArtworkClosingThought({ text }) {
  if (!text) return null

  return (
    <motion.section
      className="mx-auto max-w-3xl px-6 py-28 text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto h-px w-16 bg-white/10" />

      <p className="mt-10 font-mono uppercase tracking-[0.35em] text-[var(--void-text-muted)]">
        Closing Thought
      </p>

      <p className="mt-12 text-3xl font-light leading-relaxed md:text-4xl">
        {text}
      </p>
    </motion.section>
  )
}