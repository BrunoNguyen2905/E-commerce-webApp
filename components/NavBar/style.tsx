import { makeStyles, createStyles} from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    grow: {
      flexGrow: 1,
      marginBottom: '1rem'
    },
    toolBar1: {
      display: 'grid',
      gridTemplateColumns: '80px auto 40px 40px 24px 40px',
    },
    toolBar__location: {
      display: 'flex'
    },
  })
)

export default useStyles
