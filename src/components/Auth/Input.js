import React from 'react'
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import useStyles from './styles'

export const Input = ({ name, half, label, handleChange, autoFocus, type, handleShowPassword }) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        label={label}
        onChange={handleChange}
        variant="outlined"
        size="small"
        fullWidth
        required
        className={classes.textField}
        autoFocus={autoFocus}
        type={type}
        InputLabelProps={{
          classes: {
            root: classes.labelRoot,
          }
        }}
        InputProps={{
          classes: {
            input: classes.inputRoot
          }
        },
          name === 'password' ? {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {type === 'password' ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          } : null
        }
      />
    </Grid>
  )
}
