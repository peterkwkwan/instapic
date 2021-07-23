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
    borderRadius: 0,
    height: '1025px',
    width: '100%',
    position: 'relative',
    marginBottom: '25px'
  },
  header: {
    height: '60px',
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
    width: 100,
    display: 'flex',
    justifyContent: 'space-between',
    margin: '15px 0 0 18px',
  },
  postContent: {
    margin: '5px 0 10px 18px'
  },
  heart: {
    color: 'hsl(360, 80%, 55%)',
    fontSize: '30px',
    position: 'relative',
    bottom: 4
  },
  heartOutline: {
    color: 'black',
    fontSize: '30px',
    position: 'relative',
    bottom: 4
  },
  cardActions: {
    marginTop: 15
  },
});