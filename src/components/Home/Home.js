import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { Navbar } from '../Navbar/Navbar'
import { getPosts } from '../../actions/posts'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import useStyles from './styles'

export const Home = () => {
  const classes = useStyles()
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
    console.log('gettingposts')
    // when currentId changes (edit or when set to null), fetch posts
  }, [currentId, dispatch])

  return (
    <Grow in>
      <Container>
      <Navbar />
        <Grid
          container
          className={classes.container}
          spacing={1}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}
