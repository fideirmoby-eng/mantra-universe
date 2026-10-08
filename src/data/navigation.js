/**
 * data/navigation.js — Navigation structure
 *
 * Single source of truth for navbar links, footer links,
 * and mobile menu items. Consumed by Navbar and MenuOverlay.
 */

export const NAV_ITEMS = [
  {
    id: 'works',
    label: 'Works',
    path: '/works',
    description: 'The complete archive of artworks',
  },
  {
    id: 'projects',
    label: 'Projects',
    path: '/projects',
    description: 'Creative projects and series',
  },
  {
    id: 'merch',
    label: 'Merch',
    path: '/merch',
    description: 'Objects that extend the universe beyond the canvas',
  },
  {
    id: 'exhibition',
    label: 'Exhibition',
    path: '/exhibition',
    description: 'Physical exhibition and digital bridge',
  },
  {
    id: 'biography',
    label: 'About',
    path: '/biography',
    description: "MANTRA's story and artistic philosophy",
  },
  {
    id: 'collaborations',
    label: 'Collaborations',
    path: '/collaborations',
    description: 'Creative partnerships and joint works',
  },
  {
    id: 'contact',
    label: 'Contact',
    path: '/contact',
    description: 'Get in touch',
  },
]

/**
 * Footer links
 */
export const FOOTER_LINKS = [
  ...NAV_ITEMS,
  {
    id: 'privacy',
    label: 'Privacy',
    path: '/privacy',
    description: 'Privacy policy',
    footerOnly: true,
  },
]

/**
 * Social links
 */
export const SOCIAL_LINKS = [
  // { id: 'instagram', label: 'Instagram', url: 'https://instagram.com/mantra', icon: 'Instagram' },
]

/**
 * Get nav item by id
 */
export function getNavItem(id) {
  return NAV_ITEMS.find((item) => item.id === id)
}

/**
 * Active navigation helper
 */
export function isNavActive(navPath, currentPath) {
  if (navPath === '/') return currentPath === '/'
  return currentPath.startsWith(navPath)
}