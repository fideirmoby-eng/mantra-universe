export default function MerchHero() {
    return (
      <section className="bg-black">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
  
          {/* Mobile */}
          <div className="block md:hidden pb-6">
            <img
              src="/merch/hero-mobile.jpg"
              alt="MANTRA Merch"
              className="block w-full"
              loading="eager"
              draggable={false}
            />
          </div>
  
          {/* Desktop */}
          <div className="hidden md:flex justify-center py-16 lg:py-20">
            <img
              src="/merch/hero.jpg"
              alt="MANTRA Merch"
              className="block w-full max-w-[1180px] object-contain"
              loading="eager"
              draggable={false}
            />
          </div>
  
        </div>
      </section>
    );
  }