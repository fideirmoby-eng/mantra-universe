import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const UniverseVideoContext = createContext(null)

export function UniverseVideoProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const openVideo = useCallback(() => {
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeVideo = useCallback(() => {
    setIsOpen(false)
    document.body.style.overflow = ''
  }, [])

  const value = useMemo(
    () => ({
      isOpen,
      openVideo,
      closeVideo,
    }),
    [isOpen, openVideo, closeVideo],
  )

  return (
    <UniverseVideoContext.Provider value={value}>
      {children}
    </UniverseVideoContext.Provider>
  )
}

export function useUniverseVideo() {
  const context = useContext(UniverseVideoContext)

  if (!context) {
    throw new Error(
      'useUniverseVideo must be used within UniverseVideoProvider',
    )
  }

  return context
}