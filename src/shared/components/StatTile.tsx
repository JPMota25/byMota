import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import type { SvgIconComponent } from '@mui/icons-material'

interface StatTileProps {
  value: string
  label: string
  icon: SvgIconComponent
}

/** Métrica em destaque (estilo KPI de painel). */
export function StatTile({ value, label, icon: Icon }: StatTileProps) {
  return (
    <Card className="flex h-full items-start justify-between gap-3 rounded-xl border border-line bg-surface p-5 shadow-none">
      <div>
        <Typography className="font-mono text-3xl font-medium text-fg">{value}</Typography>
        <Typography className="mt-1 text-sm text-muted">{label}</Typography>
      </div>
      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
        <Icon fontSize="small" />
      </span>
    </Card>
  )
}
