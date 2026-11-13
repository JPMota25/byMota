import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import type { SvgIconComponent } from '@mui/icons-material'
import type { ReactNode } from 'react'

interface DashboardCardProps {
  title?: string
  icon?: SvgIconComponent
  /** Elemento à direita do header (chip, botão...). */
  action?: ReactNode
  /** Usado como âncora de navegação. */
  id?: string
  className?: string
  children: ReactNode
}

/** Card base de todo o dashboard: header uniforme + corpo. */
export function DashboardCard({ title, icon: Icon, action, id, className = '', children }: DashboardCardProps) {
  return (
    <Card
      id={id}
      component="section"
      className={`h-full scroll-mt-24 rounded-xl border border-line bg-surface shadow-none ${className}`}
    >
      {title && (
        <header className="flex items-center gap-2 border-b border-line px-5 py-3">
          {Icon && <Icon fontSize="small" className="text-primary" />}
          <Typography component="h2" className="flex-1 text-xs font-semibold uppercase tracking-wider text-muted">
            {title}
          </Typography>
          {action}
        </header>
      )}
      <div className="p-5">{children}</div>
    </Card>
  )
}
