export default function ContactGeneral() {
    return (
      <section className="mx-auto max-w-6xl px-6 py-32 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/50">
            General Enquiries
          </p>
  
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Choose how you'd like to begin.
          </h2>
  
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/70">
            Choose the communication channel that best fits your enquiry.
          </p>
        </div>
  
        <div className="mt-24 grid gap-8 lg:grid-cols-2">
          {/* EMAIL */}
  
          <div className="border border-white/10 p-10 transition duration-300 hover:border-white/30">
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-white/50">
              Email
            </p>
  
            <ul className="mb-10 space-y-4 text-lg text-white/70">
              <li>Exhibitions</li>
              <li>Collaborations</li>
              <li>Press & Interviews</li>
              <li>General Enquiries</li>
            </ul>
  
            <a
              href="mailto:mantrauniverse1@gmail.com"
              className="inline-flex border border-white px-6 py-3 text-sm uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
            >
              Continue by Email
            </a>
          </div>
  
          {/* TELEGRAM */}
  
          <div className="border border-white/10 p-10 transition duration-300 hover:border-white/30">
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-white/50">
              Telegram
            </p>
  
            <ul className="mb-10 space-y-4 text-lg text-white/70">
              <li>Commissions</li>
              <li>Quick Questions</li>
              <li>Project Updates</li>
              <li>Ongoing Conversations</li>
            </ul>
  
            <a
              href="https://t.me/mantra_universe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex border border-white px-6 py-3 text-sm uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
            >
              Continue with Telegram
            </a>
          </div>
        </div>
      </section>
    );
  }