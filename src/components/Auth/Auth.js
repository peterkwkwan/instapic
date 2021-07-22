import React, { useState } from 'react'
import { Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Icon from './icon'
import useStyles from './styles'
import { Input } from './Input'
import { AuthFooter } from './AuthFooter'
import { signin, signup } from '../../actions/auth'
import authImage from '../../images/auth_image.png'
import googlePlayBadge from '../../images/google-play-badge.png'
import appStoreIcon from '../../images/app-store.png'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const Auth = () => {
  const classes = useStyles()
  const [showPassword, setShowPassword] = useState(false)
  const [isSignup, setIsSignup] = useState(false)
  const [formData, setFormData] = useState(initialState)
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSignup) {
      dispatch(signup(formData, history)).then((res) => {
        console.log(res)
        if (res?.message) setError(res.message)
      })
    } else {
      dispatch(signin(formData, history)).then((res) => {
        if (res?.message) setError(res.message)
      })
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const switchMode = () => {
    setError('')
    setIsSignup((prevSignup) => !prevSignup)
    setShowPassword(false)
  }

  const googleSuccess = async (res) => {
    const result = res?.profileObj
    const token = res?.tokenId
    try {
      dispatch({ type: 'AUTH', data: { result, token } })
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  const googleFailure = (error) => {
    console.log('Google Sign In failed:', error)
  }

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Container component="main" maxWidth="lg" className={classes.container}>
        <img
          src={authImage}
          alt="instaPic"
          width="35%"
          className="d-none d-lg-block"
        />
        <div style={{ maxWidth: '550px' }}>
          <Paper className={classes.paper} elevation={1}>
            <h1 className={classes.title}>InstaPic</h1>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {isSignup && (
                  <React.Fragment>
                    <Input
                      name="firstName"
                      label="First Name"
                      handleChange={handleChange}
                      autoFocus={isSignup}
                      half
                    />
                    <Input
                      name="lastName"
                      label="Last Name"
                      handleChange={handleChange}
                      half
                    />
                  </React.Fragment>
                )}
                <Input
                  name="email"
                  label="Email Address"
                  handleChange={handleChange}
                  type="email"
                />
                <Input
                  name="password"
                  label="Password"
                  handleChange={handleChange}
                  type={showPassword ? 'text' : 'password'}
                  handleShowPassword={handleShowPassword}
                />
                {isSignup && (
                  <Input
                    name="confirmPassword"
                    label="Retype Password"
                    handleChange={handleChange}
                    type={showPassword ? 'text' : 'password'}
                  />
                )}
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={
                  isSignup
                    ? !formData.email ||
                      !formData.password ||
                      !formData.firstName ||
                      !formData.lastName
                    : !formData.email || !formData.password
                }
                className={classes.submit}
              >
                {isSignup ? 'Sign up' : 'Log In'}
              </Button>
              <div className={classes.separator}>
                <div className={classes.line} />
                <span className={classes.content}>OR</span>
                <div className={classes.line} />
              </div>
              <GoogleLogin
                clientId="625850687561-all17rlipf2krtm8l5pl2l4ppsvprnlk.apps.googleusercontent.com"
                render={(renderProps) => (
                  <Button
                    className={classes.googleButton}
                    color="primary"
                    fullWidth
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    startIcon={<Icon />}
                    variant="contained"
                  >
                    Google Sign In
                  </Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
              />
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="subtitle1" style={{ color: 'red' }}>
                  {error}
                </Typography>
                <Typography style={{ cursor: 'pointer' }} variant="caption">
                  Forgot Password?
                </Typography>
              </div>
            </form>
          </Paper>
          <Paper className={classes.paper} elevation={1}>
            <div className={classes.switchModeContainer}>
              <Typography variant="subtitle2">
                {isSignup
                  ? 'Already have an account?'
                  : " Don't have an account?"}
                &nbsp;
                <span className={classes.switchMode} onClick={switchMode}>
                  {isSignup ? 'Login' : 'Sign up'}{' '}
                </span>
              </Typography>
            </div>
          </Paper>
          <div className={classes.getApp}>
            <div className={classes.appContent}>
              <Typography variant="body1">Get the app.</Typography>
            </div>
            <div className={classes.appStoreButton}>
              <img
                className={classes.image}
                src={googlePlayBadge}
                alt="googlePlay"
                height="75"
                style={{ position: 'relative', right: '11px' }}
              />
              <img
                className={classes.image}
                src={appStoreIcon}
                alt="googlePlay"
                height="53"
                style={{ position: 'relative', top: '11px', right: '11px' }}
              />
            </div>
          </div>
        </div>
      </Container>
      <AuthFooter />
    </div>
  )
}
