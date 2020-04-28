import { withStyles, Theme, createStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'

export const AntSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 43,
      height: 24,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 3,
      color: theme.palette.common.white,
      '&$checked': {
        transform: 'translateX(19px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: '#59BA49',
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 18,
      height: 18,
      boxShadow: 'none',
    },
    track: {
      borderRadius: 12,
      opacity: 1,
      backgroundColor: theme.palette.grey[200],
    },
    checked: {},
  })
)(Switch)
