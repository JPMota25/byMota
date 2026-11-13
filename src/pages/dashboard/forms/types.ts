import type { SvgIconComponent } from '@mui/icons-material'
import type { Localized } from '../../../shared/i18n/context'

export interface Profile {
  name: string
  role: Localized
  summary: Localized
  focus: string[]
  location: Localized
  timezone: string
  languages: Localized
}

export interface Stat {
  id: string
  value: string
  label: Localized
  icon: SvgIconComponent
}

export interface ArchNode {
  label: string
  detail: Localized
  icon: SvgIconComponent
}

export interface ArchLayer {
  id: string
  title: Localized
  nodes: ArchNode[]
}

export interface ErpModule {
  id: string
  name: Localized
  description: Localized
  icon: SvgIconComponent
}

export interface SkillGroup {
  id: string
  title: Localized
  /** Skills de domínio principal ficam destacadas. */
  core: string[]
  other: string[]
}

export interface Experience {
  id: string
  company: string
  role: Localized
  period: Localized
  current: boolean
  description: Localized
  tags: string[]
}

export interface Principle {
  id: string
  title: Localized
  description: Localized
  icon: SvgIconComponent
}
