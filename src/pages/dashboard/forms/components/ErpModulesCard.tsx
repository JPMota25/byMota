import Typography from '@mui/material/Typography'
import ViewModuleOutlined from '@mui/icons-material/ViewModuleOutlined'
import { DashboardCard } from '../../../../shared/components/DashboardCard'
import { useLocale } from '../../../../shared/i18n/useLocale'
import { erpModules } from '../data'

export function ErpModulesCard() {
  const { t, l } = useLocale()

  return (
    <DashboardCard id="modules" title={t.dashboard.modulesTitle} icon={ViewModuleOutlined}>
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {erpModules.map((module) => {
          const Icon = module.icon
          return (
            <li key={module.id} className="flex items-start gap-3 rounded-lg border border-line p-3">
              <span className="grid size-8 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
                <Icon fontSize="small" />
              </span>
              <div className="min-w-0">
                <Typography className="text-sm font-medium text-fg">{l(module.name)}</Typography>
                <Typography className="text-xs text-muted">{l(module.description)}</Typography>
              </div>
            </li>
          )
        })}
      </ul>
    </DashboardCard>
  )
}
