export default function EditorialSection({ title, content }) {
    if (!content) return null
  
    return (
      <>
        <div className="mt-10 h-px w-16 bg-white/10" />
  
        <h3 className="mt-10 text-sm font-mono uppercase tracking-[0.3em] text-[var(--void-text-muted)]">
          {title}
        </h3>
  
        <p className="mt-5 leading-8 opacity-80">
          {content}
        </p>
      </>
    )
  }