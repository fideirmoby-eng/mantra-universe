import { Suspense, lazy } from 'react'
import { cn } from '@utils/cn'

const QRCodeSVG = lazy(() => import('qrcode.react').then((m) => ({ default: m.QRCodeSVG })))

const QR_DISPLAY_SIZE  = 120
const ERROR_CORRECTION = 'H'
const QR_COLORS = {
  void:  { fg: '#F5F0E8', bg: '#0A0A08' },
  paper: { fg: '#1A1A18', bg: '#F5F0E8' },
}

export function QRCode({ url, artworkNumber, surface = 'void', size = QR_DISPLAY_SIZE, className }) {
  const { fg, bg } = QR_COLORS[surface] ?? QR_COLORS.void
  return (
    <div className={cn('flex flex-col items-center gap-3', className)}>
      <div className="p-3" style={{ backgroundColor: bg, lineHeight: 0 }} aria-label={`QR code for ${url}`}>
        <Suspense fallback={<div className="skeleton" style={{ width: size, height: size }} aria-hidden="true" />}>
          <QRCodeSVG value={url} size={size} fgColor={fg} bgColor={bg} level={ERROR_CORRECTION} />
        </Suspense>
      </div>
      {artworkNumber && (
        <span className="font-mono text-[0.625rem] tracking-[0.14em]"
          style={{ color: surface === 'paper' ? 'var(--ink-faint)' : 'var(--void-text-muted)' }}
          aria-hidden="true">
          {artworkNumber}
        </span>
      )}
    </div>
  )
}
