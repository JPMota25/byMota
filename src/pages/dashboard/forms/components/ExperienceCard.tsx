import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import BadgeOutlined from '@mui/icons-material/BadgeOutlined'
import { DashboardCard } from '../../../../shared/components/DashboardCard'
import { useLocale } from '../../../../shared/i18n/useLocale'
import { experiences } from '../data'
import { sortExperiences } from '../validations'

export function ExperienceCard() {
  const { t, l } = useLocale()

  return (
    <DashboardCard id="experience" title={t.dashboard.experienceTitle} icon={BadgeOutlined}>
      <ol className="relative ml-1.5 border-l border-line">
        {sortExperiences(experiences).map((item) => (
          <li key={item.id} className="relative pb-6 pl-6 last:pb-0">
            <span
              className={`absolute -left-[5px] top-1.5 size-2.5 rounded-full ring-4 ring-surface ${
                item.current ? 'bg-primary' : 'bg-muted'
              }`}
            />
            <div className="flex flex-wrap items-center gap-2">
              <Typography className="text-base font-semibold text-fg">{l(item.role)}</Typography>
              {item.current && <Chip label={t.dashboard.current} className="h-5 bg-success/15 text-[11px] text-success" />}
            </div>
            <Typography className="text-sm text-muted">
              {item.company} · <span className="font-mono text-xs">{l(item.period)}</span>
            </Typography>
            <Typography className="mt-2 text-sm leading-relaxed text-muted">{l(item.description)}</Typography>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <Chip key={tag} label={tag} variant="outlined" className="border-line font-mono text-xs text-muted" />
              ))}
            </div>
          </li>
        ))}
      </ol>
    </DashboardCard>
  )
}
