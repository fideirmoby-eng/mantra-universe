import AboutHero from '@components/about/AboutHero'
import AboutUniverse from '@components/about/AboutUniverse'
import AboutConversation from '@components/about/AboutConversation'
import AboutArtist from '@components/about/AboutArtist'
import AboutConversationTwo from '@components/about/AboutConversationTwo'
import AboutPrinciples from '@components/about/AboutPrinciples'
import AboutManifesto from '@components/about/AboutManifesto'
import AboutConversationThree from '@components/about/AboutConversationThree'
import AboutPractice from '@components/about/AboutPractice'
import AboutTimeline from '@components/about/AboutTimeline'
import AboutFAQ from '@components/about/AboutFAQ'

import EditorialImage from '@components/editorial/EditorialImage'

import artistLive from '@assets/images/biography/artist-live.jpg'
import studio from '@assets/images/biography/studio.jpg'
import process from '@assets/images/biography/process.jpg'

export default function Biography() {
  return (
    <main>
      <AboutHero />

      <AboutUniverse />

      <AboutConversation />

      <AboutArtist />

      <EditorialImage
        src={artistLive}
        alt="Mantra painting during a live artistic performance"
      />

      <AboutConversationTwo />

      <AboutPrinciples />

      <EditorialImage
        src={studio}
        alt="MANTRA Universe studio"
      />

      <AboutManifesto />

      <AboutConversationThree />

      <AboutPractice />

      <EditorialImage
        src={process}
        alt="Creative process at MANTRA Universe"
      />

      <AboutTimeline />

      <AboutFAQ />
    </main>
  )
}