import { Link } from 'react-router'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { paths } from '../../router/routes'
import { DashboardCard } from '../../shared/components/DashboardCard'
import { useLocale } from '../../shared/i18n/useLocale'

export default function NotFoundPage() {
  const { t } = useLocale()

  return (
    <DashboardCard>
      <div className="flex flex-col items-center py-12 text-center">
        <Typography className="font-mono text-5xl font-medium text-primary">404</Typography>
        <Typography component="h1" className="mt-3 text-lg font-semibold text-fg">
          {t.notFound.title}
        </Typography>
        <Typography className="mt-1 text-sm text-muted">{t.notFound.text}</Typography>
        <Button component={Link} to={paths.dashboard} variant="outlined" className="mt-6 rounded-lg">
          {t.notFound.back}
        </Button>
      </div>
    </DashboardCard>
  )
}
