import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Styles — single consolidated entry point.
// globals.css owns all @tailwind directives, @layer blocks,
// design tokens, reset, typography classes, keyframes, and utilities.
import '@styles/globals.css'

// App
import App from './App'

// ─────────────────────────────────────────────────────────────────
// LENIS — Smooth scroll initialization
// Initialized before React mounts so scroll is ready on first paint.
// ─────────────────────────────────────────────────────────────────
import { initLenis } from '@lib/lenis'

// Disable browser scroll restoration.
// Lenis will be the only scroll manager.
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

initLenis().catch((err) => {
  console.warn(
    '[MANTRA] Lenis initialization failed, falling back to native scroll:',
    err,
  )
})

// ─────────────────────────────────────────────────────────────────
// REACT MOUNT
// ─────────────────────────────────────────────────────────────────
const container = document.getElementById('root')

if (!container) {
  throw new Error('[MANTRA] Could not find #root element. Check index.html.')
}

createRoot(container).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)