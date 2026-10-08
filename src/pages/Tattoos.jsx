import TattooHero from '@components/tattoos/TattooHero'
import TattooLanding from '@components/tattoos/TattooLanding'
import TattooProcess from '@components/tattoos/TattooProcess'

import tattoosBackground from '@assets/backgrounds/tattoos/tattoos-background.jpg'

export default function Tattoos() {
  return (
    <>
      {/* Hero + Landing con fondo tribal */}
      <section className="relative overflow-hidden pb-32">

        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${tattoosBackground})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            opacity: 0.12,
          }}
        />

        <div className="relative z-10">
          <TattooHero />
          <TattooLanding />
        </div>

      </section>

      {/* Process con fondo negro */}
      <section className="relative bg-black">
        <TattooProcess />
      </section>
    </>
  )
}