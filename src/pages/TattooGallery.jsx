import EditorialWall from '@components/tattoos/EditorialWall'
import { gallery } from '@data/works/tattoos'

export default function TattooGallery() {
  return <EditorialWall photos={gallery} />
}