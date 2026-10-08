import { motion } from 'framer-motion'

import { practice } from '@data/about'

export default function AboutPractice() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:py-40">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-[var(--void-text-muted)]">
          {practice.eyebrow}
        </p>

        <h2 className="mt-8 text-5xl font-light leading-tight md:text-6xl">
          {practice.title[0]}
          <br />
          {practice.title[1]}
        </h2>

        <p className="mt-12 max-w-4xl text-lg leading-9 text-[var(--void-text-muted)]">
          {practice.introduction}
        </p>

        <div className="mt-16 lg:mt-24 grid gap-x-16 gap-y-12 lg:gap-y-16 md:grid-cols-2">
          {practice.disciplines.map((discipline) => (
            <article
              key={discipline.title}
              className="border-t border-white/10 pt-6"
            >
              <h3 className="text-2xl font-light">
                {discipline.title}
              </h3>

              <p className="mt-5 leading-8 text-[var(--void-text-muted)]">
                {discipline.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-20 lg:mt-32 max-w-4xl text-center text-xl font-light leading-10">
          {practice.closing}
        </p>
      </motion.div>
    </section>
  )
}