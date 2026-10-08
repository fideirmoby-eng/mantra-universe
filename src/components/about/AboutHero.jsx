import { motion } from 'framer-motion'

import hero from '@data/about/hero'

export default function AboutHero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
      <motion.p
        className="font-mono text-xs uppercase tracking-[0.45em] text-[var(--void-text-muted)]"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {hero.eyebrow}
      </motion.p>

      <motion.h1
        className="mt-8 max-w-4xl text-5xl font-light leading-tight md:text-7xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {hero.title[0]}
        <br />
        {hero.title[1]}
      </motion.h1>

      <motion.p
        className="mt-14 max-w-2xl text-lg leading-8 text-[var(--void-text-muted)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {hero.description}
      </motion.p>
    </section>
  )
}