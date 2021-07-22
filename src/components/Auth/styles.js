import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    margin: '32px auto 0',
    paddingBottom: '32px',
    maxWidth: '1280px'
  },
  paper: {
    margin: '5% 10%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    borderRadius: '0',
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  title: {
    fontFamily: 'Satisfy, cursive',
    fontSize: 60,
    margin: 0,
  },
  form: {
    width: '85%',
    marginTop: theme.spacing(3),
  },
  separator: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px',
  },
  line: {
    borderBottom: '1px solid #DBDBDB',
    width: '100%',
  },
  content: {
    padding: '0 10px 0 10px',
    color: '#8E8E8E',
    fontFamily: 'Arial',
    fontSize: '14px',
    fontWeight: 600,
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  textField: {
    backgroundColor: '#FAFAFA',
  },
  inputRoot: {
    fontSize: 12,
  },
  labelRoot: {
    fontSize: 12,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: 'hsl(204, 100%, 48%)',
    color: '#fff',
    textTransform: 'none',
    '&:disabled': {
      backgroundColor: 'hsl(204, 93%, 84%)',
      color: '#fff',
    },
    '&:hover' : {
      backgroundColor: 'hsl(204, 100%, 48%)',
    }
  },
  switchModeContainer: {
    padding: '20px 20px',
  },
  switchMode: {
    cursor: 'pointer',
    color: 'hsl(204, 100%, 48%)',
    fontWeight: 550,
  },
  getApp: {
    width: '100%',
  },
  appContent: {
    marginTop: '25px',
    marginBottom: '15px',
    display: 'flex',
    justifyContent: 'center',
  },
  appStoreButton: {
    display: 'flex',
    justifyContent: 'center',
  },
  authFooter: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    maxWidth: '1280px',
    paddingBottom: '20px'
  },
  authContent: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
  },
}))
