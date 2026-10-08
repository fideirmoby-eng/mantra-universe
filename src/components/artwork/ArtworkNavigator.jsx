import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ArtworkNavigator({ artwork }) {
  if (!artwork) return null

  return (
    <motion.section
      className="mx-auto max-w-3xl px-6 py-40 text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto h-px w-16 bg-white/10" />

      <p className="mt-10 font-mono uppercase tracking-[0.35em] text-[var(--void-text-muted)]">
        Continue through the Universe
      </p>

      <h2 className="mt-12 text-6xl font-light">
        {artwork.mantra}
      </h2>

      <h3 className="mt-6 text-3xl font-light">
        {artwork.title}
      </h3>

      <Link
        to={`/works/${artwork.category}/${artwork.slug}`}
        className="mt-14 inline-block text-5xl opacity-70 transition-transform duration-300 hover:translate-x-2"
        aria-label={`Continue to ${artwork.title}`}
      >
        →
      </Link>
    </motion.section>
  )
}