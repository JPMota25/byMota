import type { Localized } from '../../../shared/i18n/context'

export interface Project {
  id: string
  name: string
  description: Localized
  stack: string[]
  repoUrl?: string
  demoUrl?: string
  /** true = demo pode ser aberta em iframe dentro do portfólio (o domínio precisa estar no frame-src da CSP em vercel.json). */
  embeddable: boolean
}
