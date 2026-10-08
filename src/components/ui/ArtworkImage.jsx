import { useState } from 'react'
import { cn } from '@utils/cn'

const DEFAULT_ASPECT = '4/5'

export function ArtworkImage({ src, alt, aspect = DEFAULT_ASPECT, loading = 'lazy', fit = 'contain', className, imgClassName }) {
  const [loaded, setLoaded] = useState(false)
  const [error,  setError]  = useState(false)

  return (
    <div className={cn('relative overflow-hidden', className)} style={{ aspectRatio: aspect }}>
      {!loaded && !error && <div className="absolute inset-0 skeleton" aria-hidden="true" />}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--void-soft)]" aria-hidden="true">
          <span className="font-mono text-[0.625rem] tracking-widest text-[var(--mist-dark)] uppercase">Image unavailable</span>
        </div>
      )}
      {src && !error && (
        <img
          src={src} alt={alt} loading={loading} decoding="async"
          onLoad={() => setLoaded(true)} onError={() => setError(true)}
          className={cn(
            'absolute inset-0 w-full h-full rounded-none',
            fit === 'contain' ? 'object-contain' : 'object-cover',
            'transition-opacity duration-[400ms] ease-out',
            loaded ? 'opacity-100' : 'opacity-0',
            imgClassName,
          )}
        />
      )}
    </div>
  )
}
