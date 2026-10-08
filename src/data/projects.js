export const projects = [
  {
    id: 'numbers-that-speak-to-me',
    slug: 'numbers-that-speak-to-me',
    title: 'Numbers That Speak To Me',
    year: '2026–2027',
    location: 'Belgrade, Serbia',
    type: 'Exhibition Project',
    featuredRank: 1,

    description:
      'Numbers That Speak To Me is a multidisciplinary exhibition project exploring how lived experience can be transformed into a visual language. The project unfolds through three interconnected phases — Beginnings, Evolution and Alchemy — tracing a continuous artistic and human transformation.',

    coverArtwork: {
      category: 'paintings',
      slug: 'perseus',
    },

    stages: [
      {
        number: '01',
        title: 'Beginnings',
        description:
          'A classical visual language meets urban intervention through figurative references, symbolism, collage and the visible energy of the street.',
        artworks: [
          {
            category: 'paintings',
            slug: 'the-first-universe',
          },
          {
            category: 'paintings',
            slug: 'eternal-desire',
          },
          {
            category: 'paintings',
            slug: 'atlas',
          },
        ],
      },
      {
        number: '02',
        title: 'Evolution',
        description:
          'A more contemporary and experimental visual language where classical figures become fragmented and layered through graffiti, graphic codes, typography and popular culture.',
        artworks: [
          {
            category: 'paintings',
            slug: 'inner-vision',
          },
          {
            category: 'paintings',
            slug: 'silent-restraint',
          },
          {
            category: 'paintings',
            slug: 'perseus',
          },
        ],
      },
      {
        number: '03',
        title: 'Alchemy',
        description:
          'Matter becomes central through texture, erosion, metallic tones, black, earth tones and verdigris, creating a more abstract, atmospheric language while retaining a sense of classical presence.',
        artworks: [null, null, null],
      },
    ],

    mainWorks: [
      {
        category: 'paintings',
        slug: 'the-first-universe',
      },
      {
        category: 'paintings',
        slug: 'eternal-desire',
      },
      {
        category: 'paintings',
        slug: 'atlas',
      },
      {
        category: 'paintings',
        slug: 'inner-vision',
      },
      {
        category: 'paintings',
        slug: 'silent-restraint',
      },
      {
        category: 'paintings',
        slug: 'perseus',
      },
    ],

    sections: [
      {
        id: 'watercolors',
        title: 'Watercolors',
        artworks: [
          {
            category: 'watercolors',
            slug: 'regalia',
          },
          {
            category: 'watercolors',
            slug: 'velvet',
          },
          {
            category: 'watercolors',
            slug: 'odyssey',
          },
          {
            category: 'watercolors',
            slug: 'ancestral',
          },
          {
            category: 'watercolors',
            slug: 'fever',
          },
          {
            category: 'watercolors',
            slug: 'icon',
          },
          {
            category: 'watercolors',
            slug: 'liminal',
          },
          {
            category: 'watercolors',
            slug: 'elegy',
          },
          {
            category: 'watercolors',
            slug: 'halo',
          },
          {
            category: 'watercolors',
            slug: 'bewitched',
          },
        ],
      },

      {
        id: 'video-art',
        title: 'Video Art',
        artworks: [
          {
            category: 'video-art',
            slug: 'consciousness',
          },
          {
            category: 'video-art',
            slug: 'genesis',
          },
        ],
      },
    ],

    components: {
      mainWorks: 23,
      additionalWorks: 8,
      watercolors: 18,
      intervenedPhotographs: 5,
      installations: 3,
      videoWorks: 2,
      performance: 1,
    },

    images: [],
    videos: [],
  },
]

export const featuredProjects = projects
  .filter(
    (project) =>
      project.featuredRank !== null &&
      project.featuredRank !== undefined &&
      project.featuredRank >= 1 &&
      project.featuredRank <= 6
  )
  .sort((a, b) => a.featuredRank - b.featuredRank)

export const allProjects = [...projects].sort((a, b) =>
  b.year.localeCompare(a.year)
)

export default projects