import type { SvgIconComponent } from '@mui/icons-material'
import AccountTreeOutlined from '@mui/icons-material/AccountTreeOutlined'
import BadgeOutlined from '@mui/icons-material/BadgeOutlined'
import DashboardOutlined from '@mui/icons-material/DashboardOutlined'
import LayersOutlined from '@mui/icons-material/LayersOutlined'
import MailOutlined from '@mui/icons-material/MailOutlined'
import ScienceOutlined from '@mui/icons-material/ScienceOutlined'
import ViewModuleOutlined from '@mui/icons-material/ViewModuleOutlined'
import type { Dictionary } from '../shared/i18n/pt'

export const paths = {
  dashboard: '/',
  labs: '/labs',
} as const

export interface NavItem {
  /** Chave do label em t.nav */
  labelKey: keyof Dictionary['nav']
  icon: SvgIconComponent
  path: string
  /** Âncora dentro da página (id do card). */
  hash?: string
  soon?: boolean
}

export const navItems: NavItem[] = [
  { labelKey: 'overview', icon: DashboardOutlined, path: paths.dashboard },
  { labelKey: 'architecture', icon: AccountTreeOutlined, path: paths.dashboard, hash: 'architecture' },
  { labelKey: 'modules', icon: ViewModuleOutlined, path: paths.dashboard, hash: 'modules' },
  { labelKey: 'stack', icon: LayersOutlined, path: paths.dashboard, hash: 'stack' },
  { labelKey: 'experience', icon: BadgeOutlined, path: paths.dashboard, hash: 'experience' },
  { labelKey: 'contact', icon: MailOutlined, path: paths.dashboard, hash: 'contact' },
  { labelKey: 'labs', icon: ScienceOutlined, path: paths.labs, soon: true },
]
