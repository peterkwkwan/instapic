import React, { useState, useEffect } from 'react'
import { AppBar, Typography, Avatar, Toolbar, Button } from '@material-ui/core'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'
import HomeIcon from '@material-ui/icons/Home'
import SendIcon from '@material-ui/icons/Send'
import ExploreIcon from '@material-ui/icons/Explore'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

import useStyles from './styles'
import instaPic from '../../images/instaPic.png'

export const Navbar = () => {
  const classes = useStyles()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    const token = user?.token
    if (token) {
      const decodedToken = decode(token)
      // if token is expired, logout the user
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout()
      }
    } else {
      logout()
    }
    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    history.push('/signin')
    setUser(null)
  }

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to={'/'}
          className={classes.heading}
          variant="h2"
        >
          InstaPic
        </Typography>
        <div style={{width: '40%'}}>

        </div>
        <Toolbar className={classes.toolbar}>
          <HomeIcon style={{ fontSize: '32px' }} />
          <SendIcon style={{ fontSize: '32px' }} />
          <ExploreIcon style={{ fontSize: '32px' }} />
          <FavoriteBorderIcon style={{ fontSize: '32px' }} />
          {user && (
            <div>
              <Avatar
                className={classes.purple}
                alt={user.result.name}
                src={user.result.imageUrl}
              >
                {user.result.name.charAt(0)}
              </Avatar>
              {/* <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography> */}
              {/* <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button> */}
            </div>
          )}
        </Toolbar>
      </div>
    </AppBar>
  )
}
