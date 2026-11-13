import Typography from '@mui/material/Typography'
import MonitorHeartOutlined from '@mui/icons-material/MonitorHeartOutlined'
import { DashboardCard } from '../../../../shared/components/DashboardCard'
import { StatusDot } from '../../../../shared/components/StatusDot'
import { useLocale } from '../../../../shared/i18n/useLocale'
import { profile } from '../data'

export function StatusCard() {
  const { t, l } = useLocale()

  const rows = [
    { label: t.dashboard.location, value: l(profile.location) },
    { label: t.dashboard.timezone, value: profile.timezone },
    { label: t.dashboard.languages, value: l(profile.languages) },
  ]

  return (
    <DashboardCard title={t.dashboard.statusTitle} icon={MonitorHeartOutlined}>
      <div className="flex items-center gap-2.5 rounded-lg border border-success/30 bg-success/10 px-3 py-2.5">
        <StatusDot />
        <Typography className="text-sm font-medium text-success">{t.dashboard.available}</Typography>
      </div>
      <dl className="mt-4 divide-y divide-line">
        {rows.map((row) => (
          <div key={row.label} className="flex items-baseline justify-between gap-4 py-2.5">
            <dt className="text-xs uppercase tracking-wider text-muted">{row.label}</dt>
            <dd className="text-right text-sm text-fg">{row.value}</dd>
          </div>
        ))}
      </dl>
    </DashboardCard>
  )
}
