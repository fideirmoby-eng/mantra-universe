import { useMemo } from 'react'

import { paintings, workCollections } from '../data/works'

export default function useArtwork(categoryOrSlug, maybeSlug) {

  return useMemo(() => {

    // Compatibilidad con la versión antigua y la nueva
    const category = maybeSlug ? categoryOrSlug : 'paintings'
    const slug = maybeSlug ?? categoryOrSlug

    // Utiliza la colección correspondiente a la categoría
    const collection =
      workCollections[category] ?? paintings

    const currentIndex = collection.findIndex(
      (item) => item.slug === slug
    )

    if (currentIndex === -1) {

      return {
        artwork: null,
        previousArtwork: null,
        nextArtwork: null,
      }

    }

    const artwork = collection[currentIndex]

    const previousArtwork =
      currentIndex > 0
        ? collection[currentIndex - 1]
        : collection[collection.length - 1]

    const nextArtwork =
      currentIndex < collection.length - 1
        ? collection[currentIndex + 1]
        : collection[0]

    return {
      artwork,
      previousArtwork,
      nextArtwork,
    }

  }, [categoryOrSlug, maybeSlug])

}