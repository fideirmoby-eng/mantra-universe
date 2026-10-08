import { motion } from 'framer-motion'

export default function ArtworkStory() {
  return (
    <motion.section
      className="px-6 py-40"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-4xl">
        <p className="font-mono uppercase tracking-[0.35em] text-[var(--void-text-muted)]">
          STORY
        </p>

        <h2 className="mt-8 text-4xl font-light leading-tight md:text-6xl">
          Every piece begins
          <br />
          before the canvas.
        </h2>

        <div className="mt-12 space-y-8 text-lg leading-8 opacity-70">
          <p>
            MANTRA Universe transforms every artwork into a living archive.
            Paintings are not isolated objects but portals connected to
            stories, numbers, memories and future exhibitions.
          </p>

          <p>
            Every physical artwork has its digital counterpart, allowing
            collectors, curators and visitors to discover the complete
            narrative behind each creation.
          </p>
        </div>
      </div>
    </motion.section>
  )
}