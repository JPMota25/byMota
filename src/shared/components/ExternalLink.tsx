import type { AnchorHTMLAttributes } from 'react'

/** Link externo seguro: sempre nova aba com noopener/noreferrer (OWASP: reverse tabnabbing). */
export function ExternalLink({ className = '', ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={`text-primary underline-offset-4 hover:underline ${className}`}
      {...props}
    />
  )
}
