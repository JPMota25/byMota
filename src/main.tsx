import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import '@fontsource-variable/inter'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/500.css'
import './shared/theme/tailwind.css'
import { router } from './router'
import { LocaleProvider } from './shared/i18n/LocaleProvider'
import { theme } from './shared/theme/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* enableCssLayer: estilos do MUI vão para @layer mui → Tailwind sempre vence */}
    <StyledEngineProvider enableCssLayer>
      <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
      <ThemeProvider theme={theme} defaultMode="dark" disableTransitionOnChange>
        <CssBaseline />
        <LocaleProvider>
          <RouterProvider router={router} />
        </LocaleProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>,
)
