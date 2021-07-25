import React, { useState, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Typography,
  Avatar,
  Toolbar,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'
import HomeIcon from '@material-ui/icons/Home'
import SendIcon from '@material-ui/icons/Send'
import ExploreIcon from '@material-ui/icons/Explore'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import useStyles from './styles'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    marginTop: 10,
    '& .MuiList-padding': {
      padding: 0
    }
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
      backgroundColor: theme.palette.background.default,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.text.primary,
      },
      '&:hover': {
        backgroundColor: 'hsl(5, 0%, 95%)'
      }
    
  },
}))(MenuItem);

export const Navbar = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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
        <div style={{ width: '40%' }}></div>

        <Toolbar className={classes.toolbar}>
          <HomeIcon style={{ fontSize: '32px' }} />
          <SendIcon style={{ fontSize: '32px' }} />
          <ExploreIcon style={{ fontSize: '32px' }} />
          <FavoriteBorderIcon style={{ fontSize: '32px' }} />
          <Avatar
            onClick={handleClick}
            className={classes.avatar}
            alt={user?.result.name}
            src={user?.result.imageUrl}
          >
            {user?.result.name.charAt(0)}
          </Avatar>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem>
              <ListItemIcon>
                <AccountCircleIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </StyledMenuItem>

            <StyledMenuItem style={{borderBottom: '1px solid hsl(0, 0%, 80%)'}}>
              <ListItemIcon>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </StyledMenuItem>

            <StyledMenuItem onClick={logout}>
              <ListItemIcon>
                <ExitToAppIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </StyledMenuItem>
          </StyledMenu>
        </Toolbar>
      </div>
    </AppBar>
  )
}
