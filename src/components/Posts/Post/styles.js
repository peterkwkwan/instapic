import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    // paddingTop: '56.25%',
    height: '70%'
  },
  border: {
    border: 'solid',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    borderRadius: 0,
    height: '1025px',
    width: '100%',
    position: 'relative',
    marginBottom: '25px'
  },
  header: {
    height: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  userIcon: {
    marginLeft: '20px',
    border: '2px solid red',
    borderRadius: 100,
    height: '37px',
    width: '37px',
    textAlign: 'center'
  },
  grid: {
    display: 'flex',
  },
  icons: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  heart: {
    color: 'hsl(360, 80%, 55%)',
    fontSize: '28px'
  },
  heartOutline: {
    color: 'black',
    fontSize: '28px'
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});