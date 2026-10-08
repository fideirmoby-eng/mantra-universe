import CommissionForm from "./CommissionForm";

export default function ContactCommission() {
  return (
    <section
      id="commission"
      className="mx-auto max-w-7xl px-6 py-32 lg:px-12 lg:py-40"
    >
      {/* SECTION HEADER */}

      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/50">
          Commission
        </p>

        <h2 className="font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
          Create something that exists only once.
        </h2>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
          Every commission is developed through a direct conversation with the
          artist.
        </p>
      </div>

      {/* HOW IT WORKS */}

      <div className="mx-auto mt-32 max-w-6xl">
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/50">
            How It Works
          </p>

          <h3 className="font-serif text-3xl md:text-4xl">
            Four simple steps.
          </h3>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-6 font-serif text-5xl text-white/20">01</p>

            <h4 className="mb-3 text-2xl">
              Share Your Idea
            </h4>

            <p className="text-white/60">
              Tell us what you'd like to create.
            </p>
          </div>

          <div>
            <p className="mb-6 font-serif text-5xl text-white/20">02</p>

            <h4 className="mb-3 text-2xl">
              Discussion
            </h4>

            <p className="text-white/60">
              Together we define the project.
            </p>
          </div>

          <div>
            <p className="mb-6 font-serif text-5xl text-white/20">03</p>

            <h4 className="mb-3 text-2xl">
              Creation
            </h4>

            <p className="text-white/60">
              The artwork is carefully created.
            </p>
          </div>

          <div>
            <p className="mb-6 font-serif text-5xl text-white/20">04</p>

            <h4 className="mb-3 text-2xl">
              Delivery
            </h4>

            <p className="text-white/60">
              Secure worldwide shipping.
            </p>
          </div>
        </div>
      </div>

      {/* WHAT CAN BE COMMISSIONED */}

      <div className="mx-auto mt-40 max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/50">
            What Can Be Commissioned
          </p>

          <h3 className="font-serif text-3xl md:text-4xl">
            Tailored to your vision.
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="border border-white/10 p-8 transition duration-300 hover:border-white/30">
            <h4 className="mb-3 text-xl">
              Paintings
            </h4>

            <p className="text-white/60">
              Original large and small format works.
            </p>
          </div>

          <div className="border border-white/10 p-8 transition duration-300 hover:border-white/30">
            <h4 className="mb-3 text-xl">
              Wearable Art
            </h4>

            <p className="text-white/60">
              Custom garments and wearable pieces.
            </p>
          </div>

          <div className="border border-white/10 p-8 transition duration-300 hover:border-white/30">
            <h4 className="mb-3 text-xl">
              Objects
            </h4>

            <p className="text-white/60">
              Sneakers, furniture and unique objects.
            </p>
          </div>

          <div className="border border-white/10 p-8 transition duration-300 hover:border-white/30">
            <h4 className="mb-3 text-xl">
              Mixed Media
            </h4>

            <p className="text-white/60">
              Sculptures and experimental projects.
            </p>
          </div>
        </div>
      </div>

      {/* COMMISSION FORM */}

      <CommissionForm />
    </section>
  );
}
