import { makeStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60px'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '1280px'
  },
  heading: {
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Satisfy, cursive',
    fontSize: '35px',
    width: '30%',
    paddingLeft: '5%'
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '30%',
    paddingRight: '5%'
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    cursor: 'pointer',
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: teal[500],
  },
}));