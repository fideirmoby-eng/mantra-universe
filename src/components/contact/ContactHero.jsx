import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="flex min-h-[92vh] items-center justify-center px-6 pt-40 pb-28">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 text-xs uppercase tracking-[0.35em] text-white/40"
        >
          Conversation Hub
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl font-serif text-5xl leading-[1.05] md:text-7xl"
        >
          Every meaningful collaboration
          <br />
          begins with a conversation.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-14 max-w-3xl text-lg leading-8 text-white/60"
        >
          Whether you wish to commission a new artwork, acquire an
          original piece, or simply begin a conversation, this space is
          designed to connect ideas before they become objects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 flex flex-col items-center"
        >
          <span className="mb-3 text-[10px] uppercase tracking-[0.35em] text-white/30">
            Scroll
          </span>

          <div className="h-16 w-px bg-white/20" />
        </motion.div>

      </div>
    </section>
  );
}