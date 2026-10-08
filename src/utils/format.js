/**
 * format.js — MANTRA Universe data formatters
 *
 * All formatters return strings. Pure functions, no side effects.
 * Used extensively in artwork metadata display.
 */


// ─────────────────────────────────────────────────────────────────
// DATE FORMATTERS
// ─────────────────────────────────────────────────────────────────

/**
 * Format a year or year range for display.
 * @param {number|string} year
 * @param {number|string} [endYear] — if ongoing, pass null
 * @returns {string} e.g. "2021" | "2021–2024" | "2021–Present"
 */
export function formatYear(year, endYear) {
  if (!endYear) return String(year)
  if (endYear === 'present' || endYear === null) return `${year}–Present`
  return `${year}–${endYear}`
}

/**
 * Format a full date for display.
 * @param {string|Date} date
 * @param {'short'|'medium'|'long'} [style='medium']
 * @returns {string} e.g. "Jun 2024" | "June 2024" | "June 15, 2024"
 */
export function formatDate(date, style = 'medium') {
  const d = date instanceof Date ? date : new Date(date)
  if (isNaN(d.getTime())) return String(date)

  const formats = {
    short:  { year: 'numeric', month: 'short' },
    medium: { year: 'numeric', month: 'long' },
    long:   { year: 'numeric', month: 'long', day: 'numeric' },
  }

  return new Intl.DateTimeFormat('en-GB', formats[style] ?? formats.medium).format(d)
}

/**
 * Format a date as Space Mono metadata string (uppercase, spaced).
 * @param {string|Date} date
 * @returns {string} e.g. "JUNE 2024"
 */
export function formatDateMeta(date) {
  return formatDate(date, 'medium').toUpperCase()
}


// ─────────────────────────────────────────────────────────────────
// NUMBER FORMATTERS
// ─────────────────────────────────────────────────────────────────

/**
 * Format an artwork number for display (zero-padded).
 * @param {number} n — artwork index (1-based)
 * @param {number} [total] — total artworks (for width calculation)
 * @returns {string} e.g. "001" | "042" | "100"
 */
export function formatArtworkNumber(n, total = 999) {
  const width = String(total).length
  return String(n).padStart(Math.max(width, 3), '0')
}

/**
 * Format a large number with locale separators.
 * @param {number} n
 * @returns {string} e.g. "1,234"
 */
export function formatNumber(n) {
  return new Intl.NumberFormat('en-US').format(n)
}

/**
 * Format a percentage.
 * @param {number} value — 0 to 1 or 0 to 100
 * @param {boolean} [isRatio=true] — true if value is 0–1
 * @returns {string} e.g. "42%"
 */
export function formatPercent(value, isRatio = true) {
  const pct = isRatio ? value * 100 : value
  return `${Math.round(pct)}%`
}


// ─────────────────────────────────────────────────────────────────
// DIMENSION FORMATTERS
// ─────────────────────────────────────────────────────────────────

/**
 * Format artwork physical dimensions.
 * @param {Object} dims
 * @param {number} dims.width
 * @param {number} dims.height
 * @param {number} [dims.depth]
 * @param {'cm'|'in'} [dims.unit='cm']
 * @returns {string} e.g. "120 × 80 cm" | "120 × 80 × 4 cm"
 */
export function formatDimensions({ width, height, depth, unit = 'cm' }) {
  const parts = [width, height]
  if (depth) parts.push(depth)
  return `${parts.join(' × ')} ${unit}`
}

/**
 * Format a file size in human-readable form.
 * @param {number} bytes
 * @returns {string} e.g. "4.2 MB"
 */
export function formatFileSize(bytes) {
  if (bytes < 1024)        return `${bytes} B`
  if (bytes < 1024 ** 2)   return `${(bytes / 1024).toFixed(1)} KB`
  if (bytes < 1024 ** 3)   return `${(bytes / 1024 ** 2).toFixed(1)} MB`
  return `${(bytes / 1024 ** 3).toFixed(1)} GB`
}


// ─────────────────────────────────────────────────────────────────
// STRING FORMATTERS
// ─────────────────────────────────────────────────────────────────

/**
 * Truncate a string to a maximum number of characters.
 * @param {string} str
 * @param {number} [max=120]
 * @param {string} [ellipsis='…']
 * @returns {string}
 */
export function truncate(str, max = 120, ellipsis = '…') {
  if (!str || str.length <= max) return str ?? ''
  return str.slice(0, max).trimEnd() + ellipsis
}

/**
 * Convert a string to title case.
 * @param {string} str
 * @returns {string} e.g. "the quick brown fox" → "The Quick Brown Fox"
 */
export function toTitleCase(str) {
  if (!str) return ''
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
