import { motion } from 'framer-motion'

import { ArtworkImage } from '@components/ui'

import EditorialSection from './EditorialSection'

import ArtworkLivingMantra from './ArtworkLivingMantra'

import ArtworkReflection from './ArtworkReflection'

import ArtworkClosingThought from './ArtworkClosingThought'

import ArtworkNavigator from './ArtworkNavigator'

export default function ArtworkDetails({
  artwork,
  nextArtwork,
}) {

  if (!artwork) return null

  const isVideoArt = artwork.category === 'video-art'

  return (

    <motion.section
      className="mx-auto max-w-6xl px-6 py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >

      {/* ---------- ACT I : Artwork ---------- */}

      <div className="grid items-start gap-16 md:grid-cols-2">

        <div>

          {isVideoArt ? (

            <video
              src={artwork.video}
              controls
              playsInline
              preload="metadata"
              className="h-auto w-full"
            />

          ) : (

            <ArtworkImage
              src={artwork.image}
              alt={artwork.title}
              aspect="2/3"
            />

          )}

        </div>

        <div className="flex flex-col justify-center">

          {!isVideoArt && artwork.mantra && (

            <p className="font-mono uppercase tracking-[0.35em] text-[var(--void-text-muted)]">
              MANTRA {artwork.mantra}
            </p>

          )}

          <h2 className="mt-6 text-4xl font-light">
            {artwork.title}
          </h2>

          <p className="mt-4 text-sm opacity-60">
            {artwork.year}
          </p>

          {!isVideoArt && artwork.artworkDetails && (

            <div className="mt-3 space-y-1 text-sm opacity-60">

              <p>{artwork.artworkDetails.dimensions}</p>

              <p>{artwork.artworkDetails.medium}</p>

            </div>

          )}

          {!isVideoArt && artwork.description && (

            <p className="mt-8 text-lg leading-8 opacity-70">
              {artwork.description}
            </p>

          )}

        </div>

      </div>

      {/* ---------- ACT II : Editorial Experience ---------- */}

      {!isVideoArt && (

        <div className="mx-auto mt-24 max-w-3xl">

          {artwork.introduction && (

            <EditorialSection
              title="Introduction"
              content={artwork.introduction}
            />

          )}

          {artwork.curatorialEssay && (

            <EditorialSection
              title="Curatorial Essay"
              content={artwork.curatorialEssay}
            />

          )}

          {artwork.beyondTheCanvas && (

            <EditorialSection
              title="Beyond the Canvas"
              content={artwork.beyondTheCanvas}
            />

          )}

          {artwork.livingMantra && (

            <ArtworkLivingMantra
              mantra={artwork.livingMantra}
            />

          )}

          {artwork.reflectionPrompt && (

            <ArtworkReflection
              question={artwork.reflectionPrompt}
            />

          )}

          {artwork.closingThought && (

            <ArtworkClosingThought
              text={artwork.closingThought}
            />

          )}

        </div>

      )}

      <ArtworkNavigator artwork={nextArtwork} />

    </motion.section>

  )

}