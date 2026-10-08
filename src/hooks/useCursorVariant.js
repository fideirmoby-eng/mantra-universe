import { useCallback } from 'react'
import { useApp } from '@context/AppContext'

/**
 * useCursorVariant
 *
 * Returns event handlers that update the custom cursor state
 * when attached to interactive elements.
 *
 * Usage:
 *   const { cursorHandlers } = useCursorVariant('hover')
 *   <img {...cursorHandlers} />
 *
 *   // Or with a label (shown in cursor):
 *   const { cursorHandlers } = useCursorVariant('zoom', 'View')
 *   <div {...cursorHandlers} />
 *
 * Cursor types (per PROJECT-5 spec):
 *   'default'     — normal arrow cursor
 *   'hover'       — cursor scales up on links / buttons
 *   'hover-image' — cursor turns into a dot when over artwork images
 *   'zoom'        — magnifier icon when over zoomable images
 *   'drag'        — drag cursor for interactive areas
 *
 * @param {'default'|'hover'|'hover-image'|'zoom'|'drag'} type
 * @param {string|null} [label]
 * @returns {{ cursorHandlers: { onMouseEnter, onMouseLeave }, setCursor, resetCursor }}
 */
export function useCursorVariant(type = 'hover', label = null) {
  const { setCursor, resetCursor } = useApp()

  const handleMouseEnter = useCallback(() => {
    setCursor(type, label)
  }, [setCursor, type, label])

  const handleMouseLeave = useCallback(() => {
    resetCursor()
  }, [resetCursor])

  return {
    cursorHandlers: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
    setCursor,
    resetCursor,
  }
}
