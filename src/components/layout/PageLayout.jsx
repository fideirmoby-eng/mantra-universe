import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { MenuOverlay } from './MenuOverlay'

import { VideoOverlay } from '@components/overlays/VideoOverlay'
import { useUniverseVideo } from '@context/UniverseVideoContext'

/**
 * PageLayout
 *
 * Persistent application shell.
 */
export function PageLayout({ children, noFooter = false }) {
  const { isOpen, closeVideo } = useUniverseVideo()

  return (
    <>
      <Navbar />
      <MenuOverlay />

      <main
        id="main-content"
        className="navbar-offset"
        tabIndex={-1}
        style={{ outline: 'none' }}
      >
        {children}
      </main>

      {!noFooter && <Footer />}

      <VideoOverlay
        isOpen={isOpen}
        onClose={closeVideo}
      />
    </>
  )
}