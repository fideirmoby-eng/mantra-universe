
import { paintings } from './paintings'
import { gallery as tattoos } from './tattoos'
import { videoArt } from './video-art'
import { watercolors } from './watercolors'
import { smallPaintings } from './small-paintings'
import { objectsInstallations } from './objects-installations'

export const workCollections = {
  paintings,
  'small-paintings': smallPaintings,
  tattoos,
  'video-art': videoArt,
  watercolors,
  sculptures: objectsInstallations,
}
