/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],

  theme: {
    extend: {

      // ─────────────────────────────────────────────
      // COLORS — MANTRA Design System
      // All colors also available as CSS custom properties
      // in globals.css. Use CSS vars in components for
      // theme-aware values; use Tailwind classes for utilities.
      // ─────────────────────────────────────────────
      colors: {
        void: {
          DEFAULT: '#0A0A08',   // Primary dark background
          soft:    '#111110',   // Slightly lighter dark (for layering)
        },
        paper: {
          DEFAULT: '#F5F0E8',   // Primary light background
          warm:    '#EDE8DF',   // Slightly darker warm white (for layering)
        },
        gold: {
          DEFAULT: '#C9A84C',   // MANTRA accent — numbers, highlights
          light:   '#D4B86A',   // Hover / lighter gold
          dark:    '#A8882E',   // Pressed / darker gold
        },
        ink: {
          DEFAULT: '#1A1A18',   // Primary text on paper
          muted:   '#4A4A46',   // Secondary text on paper
          faint:   '#8A8A84',   // Tertiary / captions on paper
        },
        mist: {
          DEFAULT: '#6B6B66',   // Mid-grey — borders, dividers
          light:   '#9A9A94',   // Light grey
          dark:    '#3A3A38',   // Dark grey
        },
        // On-void text colors
        void_text: {
          primary:   '#F5F0E8',  // Primary text on void
          secondary: '#C0BBB0',  // Secondary text on void
          muted:     '#7A7A74',  // Muted text on void
        },
      },

      // ─────────────────────────────────────────────
      // TYPOGRAPHY — Four-family system
      // ─────────────────────────────────────────────
      fontFamily: {
        // Inter: UI, navigation, body text, metadata
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        // Cormorant Garamond: artwork mantras, hero titles, editorial
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        // DM Sans: artwork stories, secondary editorial text
        body: ['DM Sans', 'Helvetica Neue', 'Arial', 'sans-serif'],
        // Space Mono: metadata, dimensions, technical data, labels
        mono: ['Space Mono', 'Courier New', 'monospace'],
      },

      // ─────────────────────────────────────────────
      // TYPE SCALE — Harmonious progression
      // ─────────────────────────────────────────────
      fontSize: {
        // Labels / metadata
        '2xs': ['0.625rem',  { lineHeight: '1rem',    letterSpacing: '0.12em' }],
        xs:    ['0.75rem',   { lineHeight: '1.125rem', letterSpacing: '0.10em' }],
        sm:    ['0.875rem',  { lineHeight: '1.375rem', letterSpacing: '0.02em' }],
        // Body
        base:  ['1rem',      { lineHeight: '1.625rem', letterSpacing: '0.01em' }],
        md:    ['1.0625rem', { lineHeight: '1.625rem', letterSpacing: '0.01em' }],
        lg:    ['1.125rem',  { lineHeight: '1.75rem',  letterSpacing: '0' }],
        xl:    ['1.25rem',   { lineHeight: '1.875rem', letterSpacing: '-0.01em' }],
        // Display / headings
        '2xl': ['1.5rem',    { lineHeight: '2rem',     letterSpacing: '-0.02em' }],
        '3xl': ['1.875rem',  { lineHeight: '2.25rem',  letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem',   { lineHeight: '2.75rem',  letterSpacing: '-0.03em' }],
        '5xl': ['3rem',      { lineHeight: '3.5rem',   letterSpacing: '-0.03em' }],
        '6xl': ['3.75rem',   { lineHeight: '4.25rem',  letterSpacing: '-0.04em' }],
        '7xl': ['4.5rem',    { lineHeight: '5rem',     letterSpacing: '-0.04em' }],
        '8xl': ['6rem',      { lineHeight: '6.5rem',   letterSpacing: '-0.05em' }],
        // Giant — the exhibition number, artwork numbers
        '9xl': ['8rem',      { lineHeight: '8.5rem',   letterSpacing: '-0.05em' }],
        '10xl':['12rem',     { lineHeight: '12rem',    letterSpacing: '-0.06em' }],
        '11xl':['16rem',     { lineHeight: '16rem',    letterSpacing: '-0.06em' }],
      },

      // ─────────────────────────────────────────────
      // SPACING — Generous negative space system
      // ─────────────────────────────────────────────
      spacing: {
        // Standard Tailwind preserved + additions
        '18':  '4.5rem',
        '22':  '5.5rem',
        '26':  '6.5rem',
        '30':  '7.5rem',
        '34':  '8.5rem',
        '38':  '9.5rem',
        '42':  '10.5rem',
        '46':  '11.5rem',
        '50':  '12.5rem',
        '54':  '13.5rem',
        '58':  '14.5rem',
        '62':  '15.5rem',
        '66':  '16.5rem',
        '70':  '17.5rem',
        '80':  '20rem',
        '88':  '22rem',
        '96':  '24rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
        '256': '64rem',
      },

      // ─────────────────────────────────────────────
      // BORDER RADIUS — PROJECT-5 RULE: zero radius on
      // images and cards. Radius only on interactive elements.
      // ─────────────────────────────────────────────
      borderRadius: {
        none:  '0',
        sm:    '2px',   // Focus rings, tiny badges only
        DEFAULT: '4px', // Buttons only
        md:    '6px',
        // No 'lg', 'xl', '2xl' etc. — keeps us honest.
      },

      // ─────────────────────────────────────────────
      // Z-INDEX — Named layers
      // ─────────────────────────────────────────────
      zIndex: {
        auto:        'auto',
        base:        '0',
        above:       '10',
        overlay:     '20',
        dropdown:    '30',
        sticky:      '40',
        navbar:      '50',
        modal:       '60',
        loading:     '70',
        cursor:      '9999',
      },

      // ─────────────────────────────────────────────
      // ANIMATION — Custom keyframes and durations
      // ─────────────────────────────────────────────
      transitionTimingFunction: {
        // MANTRA custom easings
        'mantra':    'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'mantra-in': 'cubic-bezier(0.55, 0, 1, 0.45)',
        'mantra-out':'cubic-bezier(0, 0.55, 0.45, 1)',
        'silk':      'cubic-bezier(0.16, 1, 0.3, 1)',   // Expo-out feel
        'heavy':     'cubic-bezier(0.77, 0, 0.175, 1)', // Circ-inout feel
      },

      transitionDuration: {
        '0':    '0ms',
        '150':  '150ms',
        '250':  '250ms',
        '400':  '400ms',
        '500':  '500ms',
        '600':  '600ms',
        '700':  '700ms',
        '800':  '800ms',
        '1000': '1000ms',
        '1200': '1200ms',
        '1500': '1500ms',
      },

      // ─────────────────────────────────────────────
      // SCREENS — Breakpoints (Tailwind defaults + 1440)
      // ─────────────────────────────────────────────
      screens: {
        sm:  '640px',
        md:  '768px',
        lg:  '1024px',
        xl:  '1280px',
        '2xl': '1440px',
        '3xl': '1920px',
      },

      // ─────────────────────────────────────────────
      // ASPECT RATIOS — Artwork image ratios
      // ─────────────────────────────────────────────
      aspectRatio: {
        '4/5':   '4 / 5',
        '3/4':   '3 / 4',
        '2/3':   '2 / 3',
        '1/1':   '1 / 1',
        'hero':  '16 / 9',
        'og':    '1200 / 630',
      },
    },
  },

  plugins: [],
}
