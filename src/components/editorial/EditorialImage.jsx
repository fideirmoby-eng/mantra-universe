import { motion } from 'framer-motion'

export default function EditorialImage({
  src,
  alt,
  aspectRatio = '16 / 9',
}) {
  return (
    <section className="py-14 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto w-full max-w-6xl px-6"
      >
        <div
          className="overflow-hidden bg-neutral-100"
          style={{ aspectRatio }}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  )
}