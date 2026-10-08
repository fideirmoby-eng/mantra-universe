import { motion } from 'framer-motion'

import { timeline } from '@data/about'

export default function AboutTimeline() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-40">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-[var(--void-text-muted)]">
          {timeline.eyebrow}
        </p>

        <h2 className="mt-8 text-5xl font-light leading-tight md:text-6xl">
          {timeline.title[0]}
          <br />
          {timeline.title[1]}
        </h2>

        <p className="mt-12 max-w-4xl text-lg leading-9 text-[var(--void-text-muted)]">
          {timeline.introduction}
        </p>

        <div className="mt-24 space-y-20">
          {timeline.milestones.map((milestone) => (
            <article
              key={milestone.title}
              className="border-l border-white/10 pl-8"
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--void-text-muted)]">
                {milestone.period}
              </p>

              <h3 className="mt-4 text-3xl font-light">
                {milestone.title}
              </h3>

              <p className="mt-5 max-w-3xl leading-8 text-[var(--void-text-muted)]">
                {milestone.description}
              </p>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}