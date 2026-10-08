import { useEffect, useRef, useState } from 'react'

import universeVideo from '@assets/videos/universe-introduction.mp4'

const FADE_DURATION = 500

export function VideoOverlay({
  isOpen,
  onClose,
}) {
  const videoRef = useRef(null)
  const closeTimeoutRef = useRef(null)

  const [visible, setVisible] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      setVisible(false)
      setReady(false)
      return
    }

    const video = videoRef.current

    if (!video) return

    video.currentTime = 0

    const handleLoadedData = () => {
      setReady(true)

      requestAnimationFrame(() => {
        setVisible(true)
      })

      const playPromise = video.play()

      if (playPromise) {
        playPromise.catch(() => {})
      }
    }

    video.addEventListener('loadeddata', handleLoadedData)
    video.load()

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)

      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handleClose = () => {
    setVisible(false)

    closeTimeoutRef.current = setTimeout(() => {
      onClose()
    }, FADE_DURATION)
  }

  if (!isOpen) return null

  return (
    <div
      className={`
        fixed
        inset-0
        z-[9999]
        bg-black
        transition-opacity
        duration-500
        ${visible ? 'opacity-100' : 'opacity-0'}
      `}
    >
      {!ready && (
        <div className="absolute inset-0 bg-black" />
      )}

      <button
        type="button"
        onClick={handleClose}
        className="
          absolute
          right-6
          top-6
          z-10
          text-xs
          uppercase
          tracking-[0.25em]
          text-white/60
          transition-all
          duration-300
          hover:text-white
          focus:outline-none
          focus:text-white
        "
      >
        SKIP
      </button>

      <div className="flex h-full w-full items-center justify-center">
        <video
          ref={videoRef}
          className="
            h-full
            w-full
            object-cover
            md:h-auto
            md:w-auto
            md:max-h-[88vh]
            md:max-w-[520px]
            md:object-contain
          "
          autoPlay
          playsInline
          preload="auto"
          onEnded={handleClose}
        >
          <source src={universeVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
