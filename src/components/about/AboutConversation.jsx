import { motion } from "framer-motion";

import video from "@assets/videos/conversations/conversation-01-what-is-mantra.mp4";
import poster from "@assets/images/conversations/conversation-01-poster.jpg";
import EditorialVideo from "@components/ui/EditorialVideo";

export default function AboutConversation() {
  return (
    <section className="py-20 lg:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 lg:mb-16 text-center"
        >
          <h2 className="mb-6 font-serif text-4xl md:text-5xl">
            What is MANTRA?
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-400">
            Discover the philosophy behind MANTRA Universe through the artist's
            own words.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <EditorialVideo
            video={video}
            poster={poster}
          />
        </motion.div>
      </div>
    </section>
  );
}