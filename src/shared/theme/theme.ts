import { createTheme } from '@mui/material/styles'

/**
 * Paleta e comportamento padrão dos componentes.
 * Estilização visual fica nas classes Tailwind (ver tailwind.css);
 * aqui só cores, tipografia e defaultProps.
 */
export const theme = createTheme({
  cssVariables: { colorSchemeSelector: 'class' },
  colorSchemes: {
    dark: {
      palette: {
        primary: { main: '#38bdf8' },
        secondary: { main: '#a78bfa' },
        success: { main: '#22c55e' },
        warning: { main: '#f59e0b' },
        background: { default: '#0b0f14', paper: '#11161d' },
        divider: 'rgba(148, 163, 184, 0.14)',
        text: { primary: '#e5e7eb', secondary: '#94a3b8' },
      },
    },
    light: {
      palette: {
        primary: { main: '#0284c7' },
        secondary: { main: '#7c3aed' },
        success: { main: '#16a34a' },
        warning: { main: '#d97706' },
        background: { default: '#f4f6f9', paper: '#ffffff' },
        divider: 'rgba(15, 23, 42, 0.10)',
        text: { primary: '#0f172a', secondary: '#475569' },
      },
    },
  },
  typography: {
    fontFamily: '"Inter Variable", ui-sans-serif, system-ui, sans-serif',
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiCard: { defaultProps: { variant: 'outlined' } },
    MuiAppBar: { defaultProps: { elevation: 0, color: 'inherit' } },
    MuiChip: { defaultProps: { size: 'small' } },
  },
})
