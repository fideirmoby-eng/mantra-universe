export default function ContactCollect() {
    return (
      <section
        id="collect"
        className="mx-auto max-w-7xl px-6 py-32 lg:px-12 lg:py-40"
      >
        {/* SECTION HEADER */}
  
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/50">
            Collect
          </p>
  
          <h2 className="font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
            Original Artwork
          </h2>
  
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
            Looking for an existing piece instead of a custom commission?
            Discover available works and start the conversation.
          </p>
        </div>
  
        {/* INFORMATION */}
  
        <div className="mx-auto mt-32 max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="border border-white/10 p-8 transition duration-300 hover:border-white/30">
              <h3 className="mb-4 text-2xl">
                Availability
              </h3>
  
              <p className="text-white/60 leading-relaxed">
                Original paintings, watercolours and selected works become
                available throughout the year.
              </p>
            </div>
  
            <div className="border border-white/10 p-8 transition duration-300 hover:border-white/30">
              <h3 className="mb-4 text-2xl">
                Certificate
              </h3>
  
              <p className="text-white/60 leading-relaxed">
                Every original artwork includes a signed Certificate of
                Authenticity documenting its provenance.
              </p>
            </div>
  
            <div className="border border-white/10 p-8 transition duration-300 hover:border-white/30">
              <h3 className="mb-4 text-2xl">
                Worldwide Shipping
              </h3>
  
              <p className="text-white/60 leading-relaxed">
                Carefully packed and shipped internationally using trusted
                carriers.
              </p>
            </div>
  
            <div className="border border-white/10 p-8 transition duration-300 hover:border-white/30">
              <h3 className="mb-4 text-2xl">
                Purchase Process
              </h3>
  
              <p className="text-white/60 leading-relaxed">
                Contact the studio, confirm availability and receive pricing,
                payment and shipping details.
              </p>
            </div>
          </div>
        </div>
  
        {/* PROCESS */}
  
        <div className="mx-auto mt-40 max-w-6xl">
          <div className="mb-20 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/50">
              Purchase Process
            </p>
  
            <h3 className="font-serif text-3xl md:text-4xl">
              Four simple steps.
            </h3>
          </div>
  
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="mb-6 font-serif text-5xl text-white/20">01</p>
  
              <h4 className="mb-3 text-2xl">
                Enquire
              </h4>
  
              <p className="text-white/60">
                Share the artwork you're interested in.
              </p>
            </div>
  
            <div>
              <p className="mb-6 font-serif text-5xl text-white/20">02</p>
  
              <h4 className="mb-3 text-2xl">
                Availability
              </h4>
  
              <p className="text-white/60">
                Receive confirmation and pricing.
              </p>
            </div>
  
            <div>
              <p className="mb-6 font-serif text-5xl text-white/20">03</p>
  
              <h4 className="mb-3 text-2xl">
                Confirmation
              </h4>
  
              <p className="text-white/60">
                Finalise the purchase securely.
              </p>
            </div>
  
            <div>
              <p className="mb-6 font-serif text-5xl text-white/20">04</p>
  
              <h4 className="mb-3 text-2xl">
                Shipping
              </h4>
  
              <p className="text-white/60">
                Your artwork is carefully packed and shipped.
              </p>
            </div>
          </div>
        </div>
  
        {/* CTA */}
  
        <div className="mx-auto mt-40 max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/50">
            Ready to Collect
          </p>
  
          <h3 className="font-serif text-3xl md:text-4xl">
            Interested in a particular artwork?
          </h3>
  
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
            Tell me which piece caught your attention and I'll provide
            availability, pricing and shipping information.
          </p>
  
          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:mantrauniverse1@gmail.com"
              className="border border-white px-8 py-4 text-sm uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
            >
              Continue by Email
            </a>
  
            <a
              href="https://t.me/mantra_universe"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-8 py-4 text-sm uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
            >
              Continue with Telegram
            </a>
          </div>
        </div>
      </section>
    );
  }