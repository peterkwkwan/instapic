import { Typography } from '@material-ui/core'
import useStyles from './styles'

const techStack = [
  'axios',
  '|',
  'express',
  '|',
  'jsonwebtoken',
  '|',
  'material-ui',
  '|',
  'mongoose',
  '|',
  'nodejs',
  '|',
  'react',
  '|',
  'react-redux',
]

export const AuthFooter = () => {
  const classes = useStyles()

  return (
    <div className={`${classes.authFooter} d-none d-lg-block`}>
      <div style={{ width: '100%', color: '#8e8e8e', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography variant="caption">tech stack below</Typography>
        <div className={classes.authContent}>
          {techStack.map((stack) => (
            <Typography variant="caption">{stack}</Typography>
          ))}
        </div>
        <Typography style={{marginTop: 15}} variant="caption">InstaPic by peterkwkwan &copy; twentytwentyone</Typography>
        <a href="https://www.linkedin.com/in/peterkwkwan/" target="_blank" rel="noreferrer noopener">my linkedin profile</a>
      </div>
    </div>
  )
}
