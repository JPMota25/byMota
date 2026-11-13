import { useState } from 'react'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseRounded from '@mui/icons-material/CloseRounded'
import CodeRounded from '@mui/icons-material/CodeRounded'
import OpenInNewRounded from '@mui/icons-material/OpenInNewRounded'
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded'
import ScienceOutlined from '@mui/icons-material/ScienceOutlined'
import { DashboardCard } from '../../../../shared/components/DashboardCard'
import { useLocale } from '../../../../shared/i18n/useLocale'
import type { Project } from '../types'

export function ProjectCard({ project }: { project: Project }) {
  const { t, l } = useLocale()
  const [open, setOpen] = useState(false)

  return (
    <DashboardCard title={project.name} icon={ScienceOutlined}>
      <Typography className="text-sm text-muted">{l(project.description)}</Typography>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.stack.map((item) => (
          <Chip key={item} label={item} variant="outlined" className="border-line font-mono text-xs text-muted" />
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.embeddable && project.demoUrl && (
          <Button variant="contained" disableElevation startIcon={<PlayArrowRounded />} onClick={() => setOpen(true)} className="rounded-lg">
            {t.labs.tryHere}
          </Button>
        )}
        {project.demoUrl && (
          <Button component="a" href={project.demoUrl} target="_blank" rel="noopener noreferrer" variant="outlined" startIcon={<OpenInNewRounded />} className="rounded-lg border-line text-fg">
            {t.labs.demo}
          </Button>
        )}
        {project.repoUrl && (
          <Button component="a" href={project.repoUrl} target="_blank" rel="noopener noreferrer" variant="outlined" startIcon={<CodeRounded />} className="rounded-lg border-line text-fg">
            {t.labs.repo}
          </Button>
        )}
      </div>

      {project.embeddable && project.demoUrl && (
        <Dialog fullScreen open={open} onClose={() => setOpen(false)}>
          <div className="flex h-full flex-col bg-bg">
            <div className="flex h-14 items-center gap-2 border-b border-line px-4">
              <Typography className="flex-1 font-medium text-fg">{project.name}</Typography>
              <IconButton aria-label={t.labs.close} onClick={() => setOpen(false)} className="text-muted">
                <CloseRounded />
              </IconButton>
            </div>
            <iframe
              title={project.name}
              src={project.demoUrl}
              loading="lazy"
              referrerPolicy="no-referrer"
              sandbox="allow-scripts allow-same-origin allow-forms"
              className="w-full flex-1 border-0"
            />
          </div>
        </Dialog>
      )}
    </DashboardCard>
  )
}
