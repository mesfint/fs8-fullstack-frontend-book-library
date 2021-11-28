import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(3),
    display: 'flex',
    width: '30%',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',

    justifyContent: 'center',
    alignItems: 'center',
  },
  textField: {
    border: '1px solid #c4c4c4',
    borderBottom: 'none',
    marginBottom: '10px',
    fontSize: '1rem',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#3eb269',
    color: '#fff',
  },
}))
