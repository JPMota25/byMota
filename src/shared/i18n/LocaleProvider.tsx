import { useEffect, useState, type ReactNode } from 'react'
import { LocaleContext, type Locale, type Localized } from './context'
import { en } from './en'
import { pt } from './pt'

const STORAGE_KEY = 'bymota-locale'
const dictionaries = { pt, en }

function readInitialLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'pt' || saved === 'en') return saved
  } catch {
    /* storage bloqueado: cai no idioma do navegador */
  }
  return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale)

  useEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en'
  }, [locale])

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignora */
    }
  }

  const value = {
    locale,
    setLocale,
    t: dictionaries[locale],
    l: (text: Localized) => text[locale],
  }

  return <LocaleContext value={value}>{children}</LocaleContext>
}
