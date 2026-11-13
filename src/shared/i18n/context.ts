import { createContext } from 'react'
import type { Dictionary } from './pt'

export type Locale = 'pt' | 'en'

/** Texto de conteúdo traduzido (usado nos data.ts das páginas). */
export type Localized = Record<Locale, string>

export interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
  /** Resolve um campo { pt, en } para o idioma atual. */
  l: (value: Localized) => string
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)
