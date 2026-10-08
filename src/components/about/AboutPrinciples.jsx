import { motion } from 'framer-motion'

import { principles } from '@data/about'

export default function AboutPrinciples() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-40">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-[var(--void-text-muted)]">
          {principles.eyebrow}
        </p>

        <h2 className="mt-8 text-5xl font-light leading-tight md:text-6xl">
          {principles.title[0]}
          <br />
          {principles.title[1]}
        </h2>

        <div className="mt-20 grid gap-12 md:grid-cols-2 xl:grid-cols-3">
          {principles.items.map((item) => (
            <div
              key={item.title}
              className="border-t border-white/10 pt-6"
            >
              <h3 className="text-2xl font-light">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-[var(--void-text-muted)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}