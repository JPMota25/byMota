import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import type { Locale } from '../i18n/context'
import { useLocale } from '../i18n/useLocale'

export function LanguageToggle() {
  const { locale, setLocale, t } = useLocale()

  return (
    <ToggleButtonGroup
      size="small"
      exclusive
      value={locale}
      aria-label={t.topbar.language}
      onChange={(_, next: Locale | null) => next && setLocale(next)}
    >
      {(['pt', 'en'] as const).map((code) => (
        <ToggleButton
          key={code}
          value={code}
          className="border-line px-2.5 py-1 font-mono text-xs uppercase text-muted [&.Mui-selected]:bg-primary/15 [&.Mui-selected]:text-primary"
        >
          {code}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}
