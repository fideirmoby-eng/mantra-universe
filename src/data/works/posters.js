
const posterModules = import.meta.glob(
    '../../assets/artworks/posters/*',
    {
      eager: true,
      query: '?url',
      import: 'default',
    }
  )
  
  export const posters = Object.entries(posterModules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, image], index) => ({
      id: `poster-${String(index + 1).padStart(3, '0')}`,
      slug: `poster-${String(index + 1).padStart(3, '0')}`,
      category: 'posters',
      image,
    }))
  
  export default posters
  