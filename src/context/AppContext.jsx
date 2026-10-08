import { createContext, useContext, useState, useCallback, useEffect } from 'react'

// ─────────────────────────────────────────────────────────────────
// CONTEXT DEFINITION
// ─────────────────────────────────────────────────────────────────

const AppContext = createContext(null)

// ─────────────────────────────────────────────────────────────────
// DEFAULT STATE
// ─────────────────────────────────────────────────────────────────

const DEFAULT_STATE = {
  // Navigation
  isMenuOpen: false,

  // Theme — MANTRA is dark by default; paper mode is for artwork detail
  theme: 'dark', // 'dark' | 'paper'

  // Loading — used by page transition overlay
  isLoading: false,

  // Artwork grid view preference (persisted to localStorage)
  artworkView: 'grid', // 'grid' | 'list'

  // Current exhibition number — global counter shown across site
  // Populated from artwork data in Sprint 3
  totalArtworks: 0,

  // Cursor state — for custom cursor (Sprint 2)
  cursor: {
    type: 'default', // 'default' | 'hover' | 'drag' | 'zoom'
    label: null,
  },

  // Active filter — for Works gallery
  activeFilters: {
    medium: 'all',
    year: 'all',
    sort: 'id-asc',
  },

  // Reduced motion preference
  prefersReducedMotion: false,
}

// ─────────────────────────────────────────────────────────────────
// PROVIDER
// ─────────────────────────────────────────────────────────────────

export function AppProvider({ children }) {
  const [state, setState] = useState(() => {
    // Restore persisted preferences from localStorage
    const savedView = typeof window !== 'undefined'
      ? localStorage.getItem('mantra:artworkView')
      : null

    return {
      ...DEFAULT_STATE,
      artworkView: savedView ?? DEFAULT_STATE.artworkView,
      prefersReducedMotion:
        typeof window !== 'undefined'
          ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
          : false,
    }
  })

  // ── Listen for reduced-motion media query changes ──────────────
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')

    const handler = (e) => {
      setState((prev) => ({ ...prev, prefersReducedMotion: e.matches }))
    }

    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // ── Persist artworkView to localStorage ───────────────────────
  useEffect(() => {
    localStorage.setItem('mantra:artworkView', state.artworkView)
  }, [state.artworkView])

  // ─────────────────────────────────────────────────────────────
  // ACTIONS
  // ─────────────────────────────────────────────────────────────

  const openMenu = useCallback(() => {
    setState((prev) => ({ ...prev, isMenuOpen: true }))
    document.body.style.overflow = 'hidden' // prevent scroll behind menu
  }, [])

  const closeMenu = useCallback(() => {
    setState((prev) => ({ ...prev, isMenuOpen: false }))
    document.body.style.overflow = ''
  }, [])

  const toggleMenu = useCallback(() => {
    setState((prev) => {
      const next = !prev.isMenuOpen
      document.body.style.overflow = next ? 'hidden' : ''
      return { ...prev, isMenuOpen: next }
    })
  }, [])

  const setTheme = useCallback((theme) => {
    setState((prev) => ({ ...prev, theme }))
  }, [])

  const setLoading = useCallback((isLoading) => {
    setState((prev) => ({ ...prev, isLoading }))
  }, [])

  const setArtworkView = useCallback((view) => {
    setState((prev) => ({ ...prev, artworkView: view }))
  }, [])

  const setCursor = useCallback((type, label = null) => {
    setState((prev) => ({ ...prev, cursor: { type, label } }))
  }, [])

  const resetCursor = useCallback(() => {
    setState((prev) => ({ ...prev, cursor: { type: 'default', label: null } }))
  }, [])

  const setActiveFilters = useCallback((filters) => {
    setState((prev) => ({
      ...prev,
      activeFilters: { ...prev.activeFilters, ...filters },
    }))
  }, [])

  const resetFilters = useCallback(() => {
    setState((prev) => ({
      ...prev,
      activeFilters: DEFAULT_STATE.activeFilters,
    }))
  }, [])

  const setTotalArtworks = useCallback((count) => {
    setState((prev) => ({ ...prev, totalArtworks: count }))
  }, [])

  // ─────────────────────────────────────────────────────────────
  // CONTEXT VALUE
  // ─────────────────────────────────────────────────────────────

  const value = {
    // State
    ...state,

    // Actions
    openMenu,
    closeMenu,
    toggleMenu,
    setTheme,
    setLoading,
    setArtworkView,
    setCursor,
    resetCursor,
    setActiveFilters,
    resetFilters,
    setTotalArtworks,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

// ─────────────────────────────────────────────────────────────────
// HOOK
// ─────────────────────────────────────────────────────────────────

/**
 * useApp — access global app state and actions.
 * Must be used within <AppProvider>.
 *
 * @returns {typeof DEFAULT_STATE & { openMenu, closeMenu, ... }}
 */
export function useApp() {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error('useApp must be used within <AppProvider>')
  }

  return context
}

export default AppContext
