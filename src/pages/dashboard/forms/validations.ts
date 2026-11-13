import type { Localized } from '../../../shared/i18n/context'
import type { Experience, Stat } from './types'

/** Ambos os idiomas preenchidos. */
export function isLocalizedFilled(value: Localized): boolean {
  return value.pt.trim().length > 0 && value.en.trim().length > 0
}

/** Aceita apenas URLs https (evita javascript:, data: etc. em hrefs). */
export function isSafeUrl(value: string): boolean {
  try {
    return new URL(value).protocol === 'https:'
  } catch {
    return false
  }
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function isValidStat(stat: Stat): boolean {
  return stat.value.trim().length > 0 && isLocalizedFilled(stat.label)
}

/** Experiências ordenadas: atual primeiro, depois a ordem do array. */
export function sortExperiences(items: Experience[]): Experience[] {
  return [...items].sort((a, b) => Number(b.current) - Number(a.current))
}
