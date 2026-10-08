/**
 * artwork.js — Artwork data utilities
 *
 * Stubs only in Sprint 0. Fully implemented in Sprint 3
 * when the Works Gallery is built.
 *
 * These functions are exported now so that any component
 * can import them; they will simply return null/empty until
 * the artwork data layer is in place.
 */

/**
 * Get a single artwork by its numeric ID.
 * @param {number} id
 * @param {Array} artworks — artwork data array
 * @returns {Object|null}
 */
export function getArtworkById(id, artworks = []) {
  return artworks.find((a) => a.id === id) ?? null
}

/**
 * Get artworks filtered by medium.
 * @param {string} medium — e.g. "painting", "digital", "sculpture"
 * @param {Array} artworks
 * @returns {Array}
 */
export function getArtworksByMedium(medium, artworks = []) {
  if (!medium || medium === 'all') return artworks
  return artworks.filter((a) => a.medium?.toLowerCase() === medium.toLowerCase())
}

/**
 * Get artworks filtered by year.
 * @param {number} year
 * @param {Array} artworks
 * @returns {Array}
 */
export function getArtworksByYear(year, artworks = []) {
  return artworks.filter((a) => a.year === year)
}

/**
 * Sort artworks by field.
 * @param {Array} artworks
 * @param {'id'|'year'|'title'} [field='id']
 * @param {'asc'|'desc'} [direction='asc']
 * @returns {Array}
 */
export function sortArtworks(artworks = [], field = 'id', direction = 'asc') {
  return [...artworks].sort((a, b) => {
    const av = a[field]
    const bv = b[field]
    if (av < bv) return direction === 'asc' ? -1 :  1
    if (av > bv) return direction === 'asc' ?  1 : -1
    return 0
  })
}

/**
 * Get adjacent artworks (previous / next) for artwork detail navigation.
 * @param {number} currentId
 * @param {Array} artworks — sorted array
 * @returns {{ prev: Object|null, next: Object|null }}
 */
export function getAdjacentArtworks(currentId, artworks = []) {
  const sorted = sortArtworks(artworks, 'id', 'asc')
  const index = sorted.findIndex((a) => a.id === currentId)

  if (index === -1) return { prev: null, next: null }

  return {
    prev: index > 0 ? sorted[index - 1] : null,
    next: index < sorted.length - 1 ? sorted[index + 1] : null,
  }
}

/**
 * Get unique mediums from artwork data.
 * @param {Array} artworks
 * @returns {string[]}
 */
export function getUniqueMediums(artworks = []) {
  return [...new Set(artworks.map((a) => a.medium).filter(Boolean))].sort()
}

/**
 * Get unique years from artwork data.
 * @param {Array} artworks
 * @returns {number[]}
 */
export function getUniqueYears(artworks = []) {
  return [...new Set(artworks.map((a) => a.year).filter(Boolean))].sort((a, b) => b - a)
}
