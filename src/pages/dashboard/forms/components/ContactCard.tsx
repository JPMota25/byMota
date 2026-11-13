import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import DescriptionOutlined from '@mui/icons-material/DescriptionOutlined'
import GitHub from '@mui/icons-material/GitHub'
import LinkedIn from '@mui/icons-material/LinkedIn'
import MailOutlined from '@mui/icons-material/MailOutlined'
import { DashboardCard } from '../../../../shared/components/DashboardCard'
import { socialLinks } from '../../../../shared/constants/socialLinks'
import { useLocale } from '../../../../shared/i18n/useLocale'
import { isSafeUrl, isValidEmail } from '../validations'

export function ContactCard() {
  const { t } = useLocale()

  const links = [
    { id: 'email', label: socialLinks.email, href: `mailto:${socialLinks.email}`, icon: MailOutlined, valid: isValidEmail(socialLinks.email), external: false },
    { id: 'linkedin', label: 'LinkedIn', href: socialLinks.linkedin, icon: LinkedIn, valid: isSafeUrl(socialLinks.linkedin), external: true },
    { id: 'github', label: 'GitHub', href: socialLinks.github, icon: GitHub, valid: isSafeUrl(socialLinks.github), external: true },
    { id: 'cv', label: 'CV', href: socialLinks.cv, icon: DescriptionOutlined, valid: isSafeUrl(socialLinks.cv), external: true },
  ].filter((link) => link.valid)

  return (
    <DashboardCard id="contact" title={t.dashboard.contactTitle} icon={MailOutlined}>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Typography className="max-w-xl text-sm text-muted">{t.dashboard.contactText}</Typography>
        <div className="flex flex-wrap gap-2">
          {links.map(({ id, label, href, icon: Icon, external }) => (
            <Button
              key={id}
              component="a"
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              variant="outlined"
              startIcon={<Icon />}
              className="rounded-lg border-line text-fg hover:border-primary hover:text-primary"
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
    </DashboardCard>
  )
}
