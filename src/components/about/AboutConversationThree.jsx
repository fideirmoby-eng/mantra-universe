import { motion } from "framer-motion";

import video from "@assets/videos/conversations/conversation-03-what-i-hope-you-feel.mp4";
import poster from "@assets/images/conversations/conversation-03-poster.jpg";
import EditorialVideo from "@components/ui/EditorialVideo";

export default function AboutConversationThree() {
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
          <div className="order-2 md:order-1">
            <h2 className="mb-6 font-serif text-4xl md:text-5xl">
              What I Hope You Feel
            </h2>

            <p className="max-w-lg text-lg leading-relaxed text-neutral-400">
              Art has never been about giving answers. It is about creating a
              space where every viewer can discover something deeply personal
              within themselves.
            </p>
          </div>

          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <EditorialVideo
              video={video}
              poster={poster}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}