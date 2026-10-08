import { motion } from "framer-motion";

import EditorialAutoplayVideo from "../ui/EditorialAutoplayVideo";
import video from "@assets/videos/merch/merch-film.mp4";

export default function MerchFilmBlock() {
  return (
    <>
      {/* ===================================================== */}
      {/* DESKTOP */}
      {/* ===================================================== */}

      <section className="hidden lg:flex items-center justify-center py-40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-32 px-8">

          {/* TEXT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-6 text-xs uppercase tracking-[0.45em] text-white/40">
              MANTRA ATTITUDE
            </p>

            <h2 className="text-[5.8rem] font-light leading-[0.84] tracking-[-0.045em]">
              <span className="block text-white">
                STYLE
              </span>

              <span className="block text-white">
                ISN'T
              </span>

              <span className="block font-bold text-[#8F1D22]">
                FOLLOWED
              </span>

              <span className="mt-10 block text-white">
                IT'S
              </span>

              <span className="block font-bold text-[#8F1D22]">
                CREATED.
              </span>
            </h2>

            <p className="mt-12 max-w-md text-lg leading-relaxed text-white/55">
              Clothing is only the medium.
              <br />
              Identity is the artwork.
            </p>
          </motion.div>

          {/* VIDEO */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="h-[760px] w-[480px] overflow-hidden rounded-xl">
              <EditorialAutoplayVideo
                video={video}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ===================================================== */}
      {/* MOBILE */}
      {/* ===================================================== */}

      <section className="lg:hidden px-5 py-16">

        <p className="mb-6 text-center text-[10px] uppercase tracking-[0.42em] text-white/40">
          MANTRA ATTITUDE
        </p>

        <div className="grid grid-cols-[0.68fr_1.82fr] items-center gap-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex h-full flex-col justify-center"
          >

            <h2 className="leading-[0.86] tracking-[-0.035em]">

              <span className="block text-[1.62rem] font-light text-white">
                STYLE
              </span>

              <span className="block text-[1.62rem] font-light text-white">
                ISN'T
              </span>

              <span className="block origin-left scale-y-[1.08] text-[1.58rem] font-black tracking-[-0.04em] text-[#8F1D22]">
                FOLLOWED
              </span>

              <span className="mt-3 block text-[1.62rem] font-light text-white">
                IT'S
              </span>

              <span className="block origin-left scale-y-[1.08] text-[1.58rem] font-black tracking-[-0.04em] text-[#8F1D22]">
                CREATED.
              </span>

            </h2>

            <p className="mt-5 max-w-[100px] text-[10px] leading-relaxed text-white/50">
              Clothing is only the medium.
              <br />
              Identity is the artwork.
            </p>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-end"
          >

            <div className="h-[390px] w-full overflow-hidden rounded-xl">

              <EditorialAutoplayVideo
                video={video}
                className="h-full w-full object-cover"
              />

            </div>

          </motion.div>

        </div>

      </section>
    </>
  );
}