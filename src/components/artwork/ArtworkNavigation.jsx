import { motion } from 'framer-motion'

import { useNavigate } from 'react-router-dom'

import { workCategories } from '@data/works'

export default function ArtworkNavigation({
  activeCategory,
  onCategoryChange,
}) {
  const navigate = useNavigate()

  return (
    <motion.nav
      className="relative border-y border-white/10 bg-black/70 backdrop-blur-md lg:sticky lg:top-0 lg:z-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-6 py-5">
        {workCategories.map((category) => {
          const isActive = category.id === activeCategory

          return (
            <button
              key={category.id}
              type="button"
              disabled={!category.enabled}
              onClick={() => {
                if (!category.enabled) return

                if (category.id === 'tattoos') {
                  navigate('/tattoos')
                  return
                }

                onCategoryChange(category.id)
              }}
              className={[
                'text-sm uppercase tracking-[0.3em] transition-all duration-300',
                isActive
                  ? 'opacity-100'
                  : 'opacity-50 hover:opacity-100',
                !category.enabled
                  ? 'cursor-not-allowed opacity-20'
                  : 'cursor-pointer',
              ].join(' ')}
            >
              {category.label}

              {!category.enabled && (
                <span className="ml-2 text-[10px] tracking-[0.2em] opacity-50">
                  Coming Soon
                </span>
              )}
            </button>
          )
        })}
      </div>
    </motion.nav>
  )
}