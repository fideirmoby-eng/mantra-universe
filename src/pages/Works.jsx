import { useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom'

import { getLenis } from '@lib/lenis'

import { workCollections } from '@data/works'

import ArtworkHero from '@components/artwork/ArtworkHero'

import ArtworkMantra from '@components/artwork/ArtworkMantra'

import ArtworkStory from '@components/artwork/ArtworkStory'

import ArtworkNavigation from '@components/artwork/ArtworkNavigation'

import ArtworkGallery from '@components/artwork/ArtworkGallery'

export default function Works() {
  const [searchParams, setSearchParams] = useSearchParams()

  const categoryFromUrl = searchParams.get('category')

  const activeCategory =
    categoryFromUrl && workCollections[categoryFromUrl]
      ? categoryFromUrl
      : 'paintings'

  const artworks = workCollections[activeCategory] ?? []

  const [isRestoring, setIsRestoring] = useState(() => {
    const savedPosition = sessionStorage.getItem(
      `works-scroll-position-${activeCategory}`
    )

    return savedPosition !== null
  })

  const handleCategoryChange = (category) => {
    setSearchParams({ category })
  }

  useEffect(() => {
    const savedPosition = sessionStorage.getItem(
      `works-scroll-position-${activeCategory}`
    )

    if (savedPosition === null) {
      setIsRestoring(false)
      return
    }

    const position = Number(savedPosition)

    if (!Number.isFinite(position)) {
      setIsRestoring(false)
      return
    }

    const timer = setTimeout(() => {
      const lenis = getLenis()

      if (lenis) {
        lenis.scrollTo(position, {
          immediate: true,
        })
      } else {
        window.scrollTo({
          top: position,
          behavior: 'auto',
        })
      }

      requestAnimationFrame(() => {
        setIsRestoring(false)
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [activeCategory])

  console.log('📦 Active category:', activeCategory)

  console.table(
    artworks.map((artwork) => ({
      id: artwork.id,
      slug: artwork.slug,
      title: artwork.title,
    }))
  )

  return (
    <main
      style={{
        visibility: isRestoring ? 'hidden' : 'visible',
      }}
    >
      <ArtworkHero />

      <ArtworkMantra />

      <ArtworkStory />

      <ArtworkNavigation
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <ArtworkGallery artworks={artworks} />
    </main>
  )
}