import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ScienceOutlined from '@mui/icons-material/ScienceOutlined'
import { DashboardCard } from '../../shared/components/DashboardCard'
import { useLocale } from '../../shared/i18n/useLocale'
import { ProjectCard } from './forms/components/ProjectCard'
import { projects } from './forms/data'
import { getValidProjects } from './forms/validations'

export default function LabsPage() {
  const { t } = useLocale()
  const items = getValidProjects(projects)

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Typography component="h1" className="text-2xl font-semibold tracking-tight text-fg">
          {t.labs.title}
        </Typography>
        <Typography className="mt-1 text-sm text-muted">{t.labs.subtitle}</Typography>
      </div>

      {items.length === 0 ? (
        <DashboardCard>
          <div className="flex flex-col items-center py-10 text-center">
            <span className="mb-4 grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <ScienceOutlined />
            </span>
            <Typography className="text-lg font-semibold text-fg">{t.labs.emptyTitle}</Typography>
            <Typography className="mt-1 max-w-md text-sm text-muted">{t.labs.emptyText}</Typography>
          </div>
        </DashboardCard>
      ) : (
        <Grid container spacing={2}>
          {items.map((project) => (
            <Grid key={project.id} size={{ xs: 12, md: 6, xl: 4 }}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  )
}
