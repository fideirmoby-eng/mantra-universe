
import streetFragment1 from '../../assets/artworks/objects-installations/street-fragment-1.jpg'
import streetFragment2 from '../../assets/artworks/objects-installations/street-fragment-2.jpg'
import streetFragment3 from '../../assets/artworks/objects-installations/street-fragment-3.jpg'
import streetFragment4 from '../../assets/artworks/objects-installations/street-fragment-4.jpg'

import bound1 from '../../assets/artworks/objects-installations/bound-1.jpg'
import bound2 from '../../assets/artworks/objects-installations/bound-2.jpg'
import bound3 from '../../assets/artworks/objects-installations/bound-3.jpg'
import bound4 from '../../assets/artworks/objects-installations/bound-4.jpg'

import vanImage from '../../assets/artworks/objects-installations/van.jpg'
import sprayCansImage from '../../assets/artworks/objects-installations/spray-cans.jpg'

import david1 from '../../assets/artworks/objects-installations/david-urban-intervention-1.jpg'
import david2 from '../../assets/artworks/objects-installations/david-urban-intervention-2.jpg'

export const objectsInstallations = [
  {
    id: 'street-fragment',
    slug: 'street-fragment',
    category: 'sculptures',
    title: 'STREET FRAGMENT',
    year: 2025,

    artworkDetails: {
      dimensions: '47 × 28 cm',
      medium: 'Mixed-Media Sculpture / Scale Model; Industrial Objects, Reclaimed Materials, and Paint',
    },

    description:
      'STREET FRAGMENT transforms discarded materials and industrial fragments into a miniature urban environment. Graffiti-covered surfaces, miniature pallets, and reclaimed elements form an architectural landscape shaped by the visual language of the street.',

    introduction:
      'STREET FRAGMENT reconstructs the urban landscape as a compact world of accumulated traces, improvised structures, and reclaimed materials. The work invites the viewer to look closely at the fragments that compose the spaces we inhabit.',

    curatorialEssay:
      'Through the assembly of industrial objects, miniature pallets, graffiti surfaces, and discarded materials, the work reimagines the city as a layered and constantly evolving construction. What might otherwise be overlooked becomes part of a deliberate visual language, where texture, scale, and material memory give form to a new environment.',

    beyondTheCanvas:
      'STREET FRAGMENT suggests that a city is never simply built. It is continuously altered, repaired, marked, and reinterpreted by the people who move through it. Within this miniature landscape, fragments become structures and remnants become possibilities.',

    images: [
      streetFragment1,
      streetFragment2,
      streetFragment3,
      streetFragment4,
    ],
    image: streetFragment1,
  },

  {
    id: 'bound',
    slug: 'bound',
    category: 'sculptures',
    title: 'BOUND',
    year: 2025,

    artworkDetails: {
      dimensions: 'Real Size',
      medium: 'Mixed-Media Sculpture; Industrial Objects, Metal Wire, and Paint',
    },

    description:
      'BOUND is a sculptural bust assembled from industrial objects and marked by metal wire wrapped around the face. Its material tension evokes confinement, vulnerability, and the struggle to preserve identity under pressure.',

    introduction:
      'BOUND presents the human face as a site of tension between presence and restriction. Constructed from industrial materials, the bust carries the physical weight of objects that appear to contain, surround, or constrain it.',

    curatorialEssay:
      'The contrast between the human form and the harshness of industrial materials creates an unsettling encounter. The wire becomes more than a physical intervention: it suggests the invisible structures through which identity, freedom, and self-expression are controlled. The sculpture holds this conflict in a suspended state, balancing vulnerability with resistance.',

    beyondTheCanvas:
      'BOUND asks what remains of the self when freedom is restricted. Its stillness does not imply surrender; instead, it preserves the possibility of resistance within the very structures that seek to contain it.',

    images: [bound1, bound2, bound3, bound4],
    image: bound1,
  },

  {
    id: 'van',
    slug: 'van',
    category: 'sculptures',
    title: 'VAN',
    year: 2025,

    artworkDetails: {
      dimensions: 'Intervened Toy Vehicle',
      medium: 'Mixed Media',
    },

    description:
      'VAN transforms a toy vehicle through painting, graffiti, layered urban markings, and distressed textures. The familiar object becomes a sculptural surface carrying the energy and visual language of the street.',

    introduction:
      'VAN takes an everyday object and turns it into a small-scale expression of urban identity. Through colour, marks, and material intervention, the vehicle moves beyond its original function and becomes an artwork in its own right.',

    curatorialEssay:
      'The intervention combines the recognisable form of a toy vehicle with the expressive vocabulary of graffiti and street culture. Bold graphic elements and distressed surfaces create a tension between the manufactured object and the individuality of the artist’s gesture.',

    beyondTheCanvas:
      'VAN reflects the possibility of transforming familiar objects through imagination. A functional form becomes a personal statement, demonstrating how art can emerge wherever an existing surface is reconsidered.',

    images: [vanImage],
    image: vanImage,
  },

  {
    id: 'spray-cans',
    slug: 'spray-cans',
    category: 'sculptures',
    title: 'SPRAY CANS',
    year: 2025,

    artworkDetails: {
      dimensions: 'Collection of Objects',
      medium: 'Painted Spray Cans; Mixed Media',
    },

    description:
      'SPRAY CANS presents a collection of individually painted cans transformed with graffiti, expressive figures, and urban symbols. Objects associated with making street art become surfaces for artistic expression themselves.',

    introduction:
      'SPRAY CANS turns the tools of urban expression into artworks. Each can carries its own marks and visual character, allowing an object associated with the act of painting to become part of the finished artistic statement.',

    curatorialEssay:
      'The collection blurs the distinction between tool and artwork. Graffiti-inspired imagery, expressive figures, and urban symbols transform functional containers into objects that preserve the gestures, references, and visual vocabulary of street culture.',

    beyondTheCanvas:
      'SPRAY CANS celebrates the materials and objects that circulate within creative environments. By reimagining the tool as the artwork, the collection brings the process of creation into the foreground.',

    images: [sprayCansImage],
    image: sprayCansImage,
  },

  {
    id: 'david-urban-intervention',
    slug: 'david-urban-intervention',
    category: 'sculptures',
    title: 'DAVID — URBAN INTERVENTION',
    year: 2025,

    artworkDetails: {
      dimensions: '10 cm height',
      medium: 'Painted Plaster Bust and Mixed Media',
    },

    description:
      'DAVID — URBAN INTERVENTION reinterprets the classical bust through graffiti, expressive marks, and layered colours. Repurposed as a brush holder, the miniature sculpture brings classical art into direct contact with contemporary urban culture.',

    introduction:
      'DAVID — URBAN INTERVENTION places a familiar classical form within a different visual and functional context. At miniature scale, the bust becomes a meeting point between inherited artistic traditions and the immediate language of contemporary street culture.',

    curatorialEssay:
      'The intervention disrupts the authority traditionally associated with classical sculpture. Graffiti-inspired marks and layered colours introduce a new identity, while the object’s use as a brush holder connects the history of representation with the practical tools of artistic production.',

    beyondTheCanvas:
      'DAVID — URBAN INTERVENTION suggests that artistic traditions remain alive through reinterpretation. The classical form is neither erased nor preserved unchanged; it is transformed through use, gesture, and the visual language of another generation.',

    images: [david1, david2],
    image: david1,
  },
]
