import EditorialWall from '@components/tattoos/EditorialWall'
import { designs } from '@data/works/tattoos'

export default function TattooDesigns() {
  return <EditorialWall photos={designs} />
}