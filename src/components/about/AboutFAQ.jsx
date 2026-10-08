import { motion } from 'framer-motion'

import { faq } from '@data/about'

export default function AboutFAQ() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-40">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-[var(--void-text-muted)]">
          {faq.eyebrow}
        </p>

        <h2 className="mt-8 text-5xl font-light leading-tight md:text-6xl">
          {faq.title[0]}
          <br />
          {faq.title[1]}
        </h2>

        <div className="mt-20 space-y-12">
          {faq.items.map((item) => (
            <article
              key={item.question}
              className="border-t border-white/10 pt-8"
            >
              <h3 className="text-2xl font-light">
                {item.question}
              </h3>

              <p className="mt-5 leading-8 text-[var(--void-text-muted)]">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}