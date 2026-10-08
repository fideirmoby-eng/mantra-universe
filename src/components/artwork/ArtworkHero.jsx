import { motion } from 'framer-motion'

export default function ArtworkHero() {
  return (
    <motion.section
      className="relative flex min-h-screen items-center justify-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl text-center">
        <p className="font-mono uppercase tracking-[0.4em] text-[var(--void-text-muted)]">
          ARTWORK
        </p>

        <h1 className="mt-8 text-5xl font-light leading-tight md:text-7xl">
          Every artwork
          <br />
          is a portal.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 opacity-70">
          Every painting inside MANTRA Universe exists simultaneously as a
          physical artwork and as a permanent digital archive connected through
          stories, numbers and future exhibitions.
        </p>
      </div>
    </motion.section>
  )
}