import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import LayersOutlined from '@mui/icons-material/LayersOutlined'
import { DashboardCard } from '../../../../shared/components/DashboardCard'
import { useLocale } from '../../../../shared/i18n/useLocale'
import { skillGroups } from '../data'

export function StackCard() {
  const { t, l } = useLocale()

  return (
    <DashboardCard id="stack" title={t.dashboard.stackTitle} icon={LayersOutlined}>
      <div className="flex flex-col gap-5">
        {skillGroups.map((group) => (
          <div key={group.id}>
            <Typography className="mb-2 font-mono text-[11px] uppercase tracking-wider text-muted">
              {l(group.title)}
            </Typography>
            <div className="flex flex-wrap gap-1.5">
              {group.core.map((skill) => (
                <Chip key={skill} label={skill} className="bg-primary/15 font-medium text-primary" />
              ))}
              {group.other.map((skill) => (
                <Chip key={skill} label={skill} variant="outlined" className="border-line text-muted" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  )
}
