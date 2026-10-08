import { motion } from "framer-motion";

export default function AboutEditorialPause() {
  return (
    <section className="py-56">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="font-serif text-2xl font-light tracking-wide text-neutral-300 md:text-3xl">
          Silence is where meaning begins.
        </p>
      </motion.div>
    </section>
  );
}