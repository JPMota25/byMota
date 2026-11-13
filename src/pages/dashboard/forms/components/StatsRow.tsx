import Grid from '@mui/material/Grid'
import { StatTile } from '../../../../shared/components/StatTile'
import { useLocale } from '../../../../shared/i18n/useLocale'
import { stats } from '../data'
import { isValidStat } from '../validations'

export function StatsRow() {
  const { l } = useLocale()

  return (
    <Grid container spacing={2}>
      {stats.filter(isValidStat).map((stat) => (
        <Grid key={stat.id} size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatTile value={stat.value} label={l(stat.label)} icon={stat.icon} />
        </Grid>
      ))}
    </Grid>
  )
}
