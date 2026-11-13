import { Fragment } from 'react'
import Typography from '@mui/material/Typography'
import AccountTreeOutlined from '@mui/icons-material/AccountTreeOutlined'
import EastRounded from '@mui/icons-material/EastRounded'
import { DashboardCard } from '../../../../shared/components/DashboardCard'
import { useLocale } from '../../../../shared/i18n/useLocale'
import { architecture } from '../data'

/** Diagrama em camadas do ERP: dispositivos → serviços → mensageria → dados. */
export function ArchitectureCard() {
  const { t, l } = useLocale()

  return (
    <DashboardCard id="architecture" title={t.dashboard.architectureTitle} icon={AccountTreeOutlined}>
      <Typography className="mb-5 text-sm text-muted">{t.dashboard.architectureHint}</Typography>

      <div className="flex flex-col items-stretch gap-3 lg:flex-row">
        {architecture.map((layer, index) => (
          <Fragment key={layer.id}>
            <div className="flex-1 rounded-lg border border-dashed border-line p-3">
              <Typography className="mb-2.5 font-mono text-[11px] uppercase tracking-wider text-muted">
                {String(index + 1).padStart(2, '0')} · {l(layer.title)}
              </Typography>
              <ul className="flex flex-col gap-2">
                {layer.nodes.map((node) => {
                  const Icon = node.icon
                  return (
                    <li key={node.label} className="flex items-center gap-2.5 rounded-md bg-fg/[0.04] px-2.5 py-2">
                      <Icon fontSize="small" className="text-primary" />
                      <div className="min-w-0">
                        <Typography className="truncate text-sm font-medium text-fg">{node.label}</Typography>
                        <Typography className="truncate text-xs text-muted">{l(node.detail)}</Typography>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
            {index < architecture.length - 1 && (
              <EastRounded aria-hidden className="mx-auto shrink-0 rotate-90 self-center text-muted lg:rotate-0" />
            )}
          </Fragment>
        ))}
      </div>
    </DashboardCard>
  )
}
