import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router'
import AppBar from '@mui/material/AppBar'
import Chip from '@mui/material/Chip'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import GitHub from '@mui/icons-material/GitHub'
import LinkedIn from '@mui/icons-material/LinkedIn'
import MenuRounded from '@mui/icons-material/MenuRounded'
import { navItems, paths, type NavItem } from '../../router/routes'
import { socialLinks } from '../constants/socialLinks'
import { useLocale } from '../i18n/useLocale'
import { LanguageToggle } from './LanguageToggle'
import { StatusDot } from './StatusDot'
import { ThemeToggle } from './ThemeToggle'

const drawerPaper = 'w-64 border-r border-line bg-surface bg-none'

function isActive(item: NavItem, pathname: string, hash: string) {
  if (item.path !== pathname) return false
  return (item.hash ?? '') === hash.replace('#', '')
}

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const { t } = useLocale()
  const { pathname, hash } = useLocation()

  return (
    <div className="flex h-full flex-col">
      <Link to={paths.dashboard} onClick={onNavigate} className="flex h-16 items-center gap-3 px-5">
        <span className="grid size-8 place-items-center rounded-lg bg-primary font-mono text-sm font-bold text-bg">
          bM
        </span>
        <span className="text-lg font-semibold tracking-tight text-fg">byMota</span>
      </Link>

      <Typography className="px-5 pb-2 pt-4 text-[11px] font-semibold uppercase tracking-wider text-muted">
        {t.nav.section}
      </Typography>

      <List className="flex-1 px-3 py-0">
        {navItems.map((item) => {
          const active = isActive(item, pathname, hash)
          const Icon = item.icon
          return (
            <ListItemButton
              key={item.labelKey}
              component={Link}
              to={{ pathname: item.path, hash: item.hash ? `#${item.hash}` : '' }}
              onClick={onNavigate}
              selected={active}
              className={`mb-0.5 rounded-lg px-3 py-1.5 ${
                active ? 'bg-primary/10 text-primary' : 'text-muted hover:bg-fg/5 hover:text-fg'
              }`}
            >
              <ListItemIcon className="min-w-9 text-inherit">
                <Icon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={t.nav[item.labelKey]} slotProps={{ primary: { className: 'text-sm font-medium' } }} />
              {item.soon && (
                <Chip label={t.nav.soon} variant="outlined" className="h-5 border-line text-[10px] text-muted" />
              )}
            </ListItemButton>
          )
        })}
      </List>

      <div className="m-3 flex items-center gap-2 rounded-lg border border-line px-3 py-2.5">
        <StatusDot />
        <Typography className="text-xs text-muted">{t.dashboard.available}</Typography>
      </div>
    </div>
  )
}

/** Shell do app: sidebar fixa (desktop) / temporária (mobile) + topbar. */
export function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t } = useLocale()
  const { pathname } = useLocation()
  const pageTitles: Record<string, string> = { [paths.dashboard]: t.nav.overview, [paths.labs]: t.nav.labs }
  const pageTitle = pageTitles[pathname] ?? t.notFound.title

  return (
    <div className="min-h-dvh bg-bg text-fg">
      {/* Desktop */}
      <Drawer variant="permanent" className="hidden md:block" slotProps={{ paper: { className: drawerPaper } }}>
        <SidebarContent />
      </Drawer>

      {/* Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        className="md:hidden"
        slotProps={{ paper: { className: drawerPaper } }}
      >
        <SidebarContent onNavigate={() => setMobileOpen(false)} />
      </Drawer>

      <AppBar position="fixed" className="border-b border-line bg-bg/80 backdrop-blur md:w-[calc(100%-16rem)]">
        <Toolbar className="h-16 gap-2 px-4 md:px-6">
          <IconButton
            aria-label={t.nav.openMenu}
            onClick={() => setMobileOpen(true)}
            className="-ml-2 text-muted md:hidden"
          >
            <MenuRounded />
          </IconButton>

          <Typography className="flex-1 truncate text-sm text-muted">
            <span className="hidden sm:inline">
              {t.topbar.dashboard} <span className="mx-1.5 text-muted/50">/</span>
            </span>
            <span className="font-medium text-fg">{pageTitle}</span>
          </Typography>

          <LanguageToggle />
          <ThemeToggle />
          {socialLinks.github && (
            <Tooltip title="GitHub">
              <IconButton
                component="a"
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted hover:text-fg"
              >
                <GitHub fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
          {socialLinks.linkedin && (
            <Tooltip title="LinkedIn">
              <IconButton
                component="a"
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted hover:text-fg"
              >
                <LinkedIn fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
      </AppBar>

      <main className="px-4 pb-10 pt-20 md:ml-64 md:px-6">
        <div className="mx-auto max-w-7xl">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
