import { Link } from 'react-router'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import PersonOutlined from '@mui/icons-material/PersonOutlined'
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded'
import { DashboardCard } from '../../../../shared/components/DashboardCard'
import { useLocale } from '../../../../shared/i18n/useLocale'
import { profile } from '../data'

export function ProfileCard() {
  const { t, l } = useLocale()
  const initials = profile.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)

  return (
    <DashboardCard id="overview" title={t.dashboard.profileTitle} icon={PersonOutlined}>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        {/* TODO: trocar por foto (src="/avatar.webp") */}
        <Avatar className="size-16 bg-primary/15 font-mono text-xl font-semibold text-primary">{initials}</Avatar>
        <div className="min-w-0 flex-1">
          <Typography component="h1" className="text-2xl font-semibold tracking-tight text-fg">
            {profile.name}
          </Typography>
          <Typography className="mt-0.5 text-sm font-medium text-primary">{l(profile.role)}</Typography>
          <Typography className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{l(profile.summary)}</Typography>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {profile.focus.map((item) => (
              <Chip key={item} label={item} variant="outlined" className="border-line font-mono text-xs text-fg" />
            ))}
          </div>
          <Button
            component={Link}
            to={{ hash: '#contact' }}
            variant="contained"
            disableElevation
            endIcon={<ArrowForwardRounded />}
            className="mt-5 rounded-lg"
          >
            {t.dashboard.contactCta}
          </Button>
        </div>
      </div>
    </DashboardCard>
  )
}
