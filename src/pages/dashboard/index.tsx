import { useEffect } from 'react'
import { useLocation } from 'react-router'
import Grid from '@mui/material/Grid'
import { ArchitectureCard } from './forms/components/ArchitectureCard'
import { ContactCard } from './forms/components/ContactCard'
import { ErpModulesCard } from './forms/components/ErpModulesCard'
import { ExperienceCard } from './forms/components/ExperienceCard'
import { PrinciplesCard } from './forms/components/PrinciplesCard'
import { ProfileCard } from './forms/components/ProfileCard'
import { StackCard } from './forms/components/StackCard'
import { StatsRow } from './forms/components/StatsRow'
import { StatusCard } from './forms/components/StatusCard'

export default function DashboardPage() {
  const { hash } = useLocation()

  // Navegação por âncora vinda da sidebar
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash])

  return (
    <div className="flex flex-col gap-4">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <ProfileCard />
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <StatusCard />
        </Grid>
      </Grid>

      <StatsRow />

      <ArchitectureCard />

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, lg: 6 }}>
          <ErpModulesCard />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <StackCard />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <ExperienceCard />
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <PrinciplesCard />
        </Grid>
      </Grid>

      <ContactCard />
    </div>
  )
}
