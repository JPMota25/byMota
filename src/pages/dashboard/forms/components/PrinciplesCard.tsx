import Typography from '@mui/material/Typography'
import VerifiedOutlined from '@mui/icons-material/VerifiedOutlined'
import { DashboardCard } from '../../../../shared/components/DashboardCard'
import { useLocale } from '../../../../shared/i18n/useLocale'
import { principles } from '../data'

export function PrinciplesCard() {
  const { t, l } = useLocale()

  return (
    <DashboardCard title={t.dashboard.principlesTitle} icon={VerifiedOutlined}>
      <ul className="flex flex-col gap-4">
        {principles.map((principle) => {
          const Icon = principle.icon
          return (
            <li key={principle.id} className="flex gap-3">
              <Icon fontSize="small" className="mt-0.5 text-secondary" />
              <div>
                <Typography className="text-sm font-medium text-fg">{l(principle.title)}</Typography>
                <Typography className="text-xs leading-relaxed text-muted">{l(principle.description)}</Typography>
              </div>
            </li>
          )
        })}
      </ul>
    </DashboardCard>
  )
}
