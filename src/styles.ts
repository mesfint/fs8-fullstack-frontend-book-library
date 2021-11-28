import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '80px auto',
    display: 'flex',
    width: '70%',
    height: '50px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    flex: 1,
    marginLeft: '10px',
  },
  search: {
    width: '70%',
    height: '70%',
    borderRadius: '15px',
    top: 0,
    left: 0,
    zIndex: 9999,
  },
  title: {
    flexGrow: 1,
    color: 'rgba(0,183,255, 1)',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginLeft: '10px',
  },
  root: {
    flexGrow: 1,
  },
  a: {
    textDecoration: 'none',
    color: 'rgba(0,183,255, 1)',
  }
}))
