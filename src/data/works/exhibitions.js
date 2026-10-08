import coverImage from '../../assets/exhibitions/synesthesia-visualization-of-music/cover/cover.jpg'

import paintingImage from '../../assets/exhibitions/synesthesia-visualization-of-music/images/painting-01.jpg'

import catalogImage01 from '../../assets/exhibitions/synesthesia-visualization-of-music/images/catalog-01.jpg'

import catalogImage02 from '../../assets/exhibitions/synesthesia-visualization-of-music/images/catalog-02.jpg'

import newspaperImage from '../../assets/exhibitions/synesthesia-visualization-of-music/images/newspaper-01.jpg'

import exhibitionVideo01 from '../../assets/exhibitions/synesthesia-visualization-of-music/videos/video-01.mp4'

import exhibitionVideo02 from '../../assets/exhibitions/synesthesia-visualization-of-music/videos/video-02.mp4'

import synesthesiaPaintingImage from '../../assets/exhibitions/synesthesia-visualization-of-music/images/painting.jpg'


import teslaCoverImage from '../../assets/exhibitions/dani-nikole-tesle-2026/cover/cover.jpg'

import teslaArtworkImage from '../../assets/exhibitions/dani-nikole-tesle-2026/images/artwork-01.jpg'

import teslaCatalogImage01 from '../../assets/exhibitions/dani-nikole-tesle-2026/images/catalog-01.jpg'

import teslaCatalogImage02 from '../../assets/exhibitions/dani-nikole-tesle-2026/images/catalog-02.jpg'

import teslaCatalogImage03 from '../../assets/exhibitions/dani-nikole-tesle-2026/images/catalog-03.jpg'

import teslaPaintingImage from '../../assets/exhibitions/dani-nikole-tesle-2026/images/painting.jpg'

import teslaVideo01 from '../../assets/exhibitions/dani-nikole-tesle-2026/videos/video-01.mp4'

import teslaVideo02 from '../../assets/exhibitions/dani-nikole-tesle-2026/videos/video-02.mp4'


export const exhibitions = [
  {
    id: 'synesthesia-visualization-of-music',

    slug: 'synesthesia-visualization-of-music',

    title: 'Synesthesia — Visualization of Music',

    exhibitionDate: '2026-09-10',

    featuredRank: 1,

    type: 'Group Exhibition',

    location: 'FSU Gallery, Svetozara Miletića 12, Belgrade, Serbia',

    artist: 'Fidel de la Iglesia Reina (MANTRA)',

    description:
      'Synesthesia — Visualization of Music is a group exhibition exploring the relationship between sound and image, and the different ways music can be translated into color, form, movement, light, space and digital expression.',

    cover: coverImage,

    images: [
      {
        src: paintingImage,
        alt: 'Artwork by Fidel de la Iglesia Reina at Synesthesia — Visualization of Music',
      },

      {
        src: catalogImage01,
        alt: 'Synesthesia — Visualization of Music catalog',
      },

      {
        src: catalogImage02,
        alt: 'Synesthesia — Visualization of Music catalog',
      },

      {
        src: newspaperImage,
        alt: 'Newspaper publication about Synesthesia — Visualization of Music',
      },

      {
        src: synesthesiaPaintingImage,
        alt: 'Artwork by Fidel de la Iglesia Reina at Synesthesia — Visualization of Music',
      },
    ],

    videos: [
      {
        src: exhibitionVideo01,
      },

      {
        src: exhibitionVideo02,
      },
    ],
  },


  {
    id: 'dani-nikole-tesle-2026',

    slug: 'dani-nikole-tesle-2026',

    title: 'Dani Nikole Tesle 2026',

    exhibitionDate: '2026-06-01',

    featuredRank: 2,

    type: 'Group Exhibition',

    location: 'Belgrade, Serbia',

    artist: 'Fidel de la Iglesia Reina (MANTRA)',

    description:
      'Dani Nikole Tesle 2026 is an international group exhibition dedicated to the legacy of Nikola Tesla, bringing together contemporary artists who explore his life, ideas and influence through different forms of artistic expression. The exhibition was presented in Belgrade from June 1 to 15, 2026, and later continued in Šabac at the Cultural Center Šabac on July 23, 2026.',

    cover: teslaCoverImage,

    images: [
      {
        src: teslaArtworkImage,
        alt: 'Fidel de la Iglesia Reina (MANTRA) with his artwork at Dani Nikole Tesle 2026',
      },

      {
        src: teslaCatalogImage01,
        alt: 'Dani Nikole Tesle 2026 catalog — page 01',
      },

      {
        src: teslaCatalogImage02,
        alt: 'Dani Nikole Tesle 2026 catalog — page 02',
      },

      {
        src: teslaCatalogImage03,
        alt: 'Dani Nikole Tesle 2026 catalog — page 03',
      },

      {
        src: teslaPaintingImage,
        alt: 'Artwork by Fidel de la Iglesia Reina at Dani Nikole Tesle 2026',
      },
    ],

    videos: [
      {
        src: teslaVideo01,
      },

      {
        src: teslaVideo02,
      },
    ],
  },
]


export const featuredExhibitions = exhibitions
  .filter(
    (exhibition) =>
      exhibition.featuredRank !== null &&
      exhibition.featuredRank !== undefined &&
      exhibition.featuredRank >= 1 &&
      exhibition.featuredRank <= 6
  )
  .sort((a, b) => a.featuredRank - b.featuredRank)


export const allExhibitions = [...exhibitions].sort(
  (a, b) =>
    b.exhibitionDate.localeCompare(a.exhibitionDate)
)


export default exhibitions