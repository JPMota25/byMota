import type { Project } from './types'

/** Aceita apenas URLs https (evita javascript:, data: etc. em href/src). */
export function isSafeUrl(value: string | undefined): value is string {
  if (!value) return false
  try {
    return new URL(value).protocol === 'https:'
  } catch {
    return false
  }
}

export function isValidProject(project: Project): boolean {
  const hasText = project.name.trim() !== '' && project.description.pt.trim() !== '' && project.description.en.trim() !== ''
  const urlsOk = (!project.repoUrl || isSafeUrl(project.repoUrl)) && (!project.demoUrl || isSafeUrl(project.demoUrl))
  const embedOk = !project.embeddable || isSafeUrl(project.demoUrl)
  return hasText && urlsOk && embedOk
}

/** Filtra projetos inválidos e avisa no console em dev. */
export function getValidProjects(items: Project[]): Project[] {
  return items.filter((project) => {
    const valid = isValidProject(project)
    if (!valid && import.meta.env.DEV) console.warn(`[labs] projeto inválido ignorado: ${project.id}`)
    return valid
  })
}
