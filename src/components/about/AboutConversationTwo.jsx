import { motion } from "framer-motion";

import video from "@assets/videos/conversations/conversation-02-my-inspiration.mp4";
import poster from "@assets/images/conversations/conversation-02-poster.jpg";
import EditorialVideo from "@components/ui/EditorialVideo";

export default function AboutConversationTwo() {
  return (
    <section className="py-36">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid items-center gap-16 md:grid-cols-2"
        >
          <div className="flex justify-center md:justify-start">
            <EditorialVideo
              video={video}
              poster={poster}
            />
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-neutral-500">
              Conversation 02
            </p>

            <h2 className="mb-6 font-serif text-4xl md:text-5xl">
              My Inspiration
            </h2>

            <p className="max-w-lg text-lg leading-relaxed text-neutral-400">
              Every artwork begins long before the first brushstroke.
              Inspiration is not a single moment, but a lifetime of memories,
              questions, experiences, and the constant search for meaning.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}