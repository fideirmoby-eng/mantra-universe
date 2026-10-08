import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import useArtwork from '@hooks/useArtwork'

import ArtworkDetails from '@components/artwork/ArtworkDetails'

export default function Artwork() {
  const { category, slug } = useParams()

  console.log('🎨 Artwork render:', slug)

  useEffect(() => {
    console.log('✅ Artwork mounted:', slug)

    return () => {
      console.log('❌ Artwork unmounted:', slug)
    }
  }, [slug])

  const { artwork, nextArtwork } = useArtwork(
    category,
    slug
  )

  if (!artwork) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl">
          Artwork not found.
        </h1>
      </main>
    )
  }

  return (
    <main>
      <ArtworkDetails
        artwork={artwork}
        nextArtwork={nextArtwork}
      />
    </main>
  )
}