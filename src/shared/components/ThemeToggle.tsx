import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { useColorScheme } from '@mui/material/styles'
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlined from '@mui/icons-material/LightModeOutlined'
import { useLocale } from '../i18n/useLocale'

export function ThemeToggle() {
  const { mode, systemMode, setMode } = useColorScheme()
  const { t } = useLocale()
  const current = mode === 'system' ? systemMode : mode
  const isDark = current !== 'light'

  return (
    <Tooltip title={t.topbar.toggleTheme}>
      <IconButton
        aria-label={t.topbar.toggleTheme}
        onClick={() => setMode(isDark ? 'light' : 'dark')}
        className="text-muted hover:text-fg"
      >
        {isDark ? <LightModeOutlined fontSize="small" /> : <DarkModeOutlined fontSize="small" />}
      </IconButton>
    </Tooltip>
  )
}
