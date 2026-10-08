/**
 * slugify.js — URL slug utilities
 *
 * Converts strings to URL-safe slugs consistent with
 * the routing conventions in IMPLEMENTATION_BLUEPRINT.md.
 */

/**
 * Convert a string to a URL slug.
 * @param {string} str
 * @returns {string} e.g. "Painting #001 — Soul" → "painting-001-soul"
 */
export function slugify(str) {
  if (!str) return ''
  return str
    .toLowerCase()
    .normalize('NFD')                      // decompose accented chars
    .replace(/[\u0300-\u036f]/g, '')       // strip diacritics
    .replace(/['']/g, '')                  // smart quotes → nothing
    .replace(/[^a-z0-9\s-]/g, ' ')        // non-alphanumeric → space
    .trim()
    .replace(/\s+/g, '-')                  // spaces → hyphens
    .replace(/-+/g, '-')                   // collapse multiple hyphens
}

/**
 * Generate the canonical URL path for an artwork.
 * @param {string|number} id — artwork number e.g. 1, "001"
 * @param {string} title — artwork title
 * @returns {string} e.g. "/works/001-soul"
 */
export function artworkPath(id, title) {
  const paddedId = String(id).padStart(3, '0')
  const titleSlug = slugify(title)
  return `/works/${paddedId}-${titleSlug}`
}

/**
 * Generate the canonical URL path for a project.
 * @param {string} slug — project slug
 * @returns {string} e.g. "/projects/new-york-city"
 */
export function projectPath(slug) {
  return `/projects/${slugify(slug)}`
}

/**
 * Extract the artwork ID from a slug.
 * @param {string} slug — e.g. "001-soul"
 * @returns {number} e.g. 1
 */
export function slugToArtworkId(slug) {
  if (!slug) return null
  const match = slug.match(/^(\d+)/)
  return match ? parseInt(match[1], 10) : null
}
