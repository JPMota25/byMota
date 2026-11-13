/** Indicador de status "online" pulsante. */
export function StatusDot({ className = '' }: { className?: string }) {
  return (
    <span className={`relative inline-flex size-2.5 ${className}`} aria-hidden>
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
      <span className="relative inline-flex size-2.5 rounded-full bg-success" />
    </span>
  )
}
