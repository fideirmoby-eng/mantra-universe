import { motion } from 'framer-motion'

export default function ArtworkReflection({ question }) {
  if (!question) return null

  return (
    <motion.section
      className="mx-auto max-w-2xl px-6 py-40 text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto h-px w-16 bg-white/10" />

      <p className="mt-14 font-mono uppercase tracking-[0.45em] text-[var(--void-text-muted)]">
        Reflection Prompt
      </p>

      <blockquote className="mt-16 text-4xl font-extralight italic leading-relaxed md:text-5xl">
        “{question}”
      </blockquote>
    </motion.section>
  )
}