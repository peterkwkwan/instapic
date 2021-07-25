import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'

import useStyles from './styles'
import { createPost, updatePost } from '../../actions/posts'

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    // creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  })
  
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null,
  )
  const classes = useStyles()
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('profile'))

  useEffect(() => {
    if (post) setPostData({...post, tags: post.tags.join(' ')})
  }, [post])

  const handleSubmit = (e) => {
    // prevent the browser from reloading
    e.preventDefault()
    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result.name, username: user?.result.username }))
      clear()
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result.name }))
      clear()
    }
  }

  const clear = () => {
    setCurrentId(0)
    setPostData({
      // creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    })
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? 'Edit Image' : 'Post image'}
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          inputProps={{ "data-testid": "title" }}
          fullWidth
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          value={postData.title}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
          value={postData.message}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          value={postData.tags}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
        title="dummyButton"
          variant="contained"
          color="secondary"
          size="large"
          onClick={clear}
          fullWidth
          data-testid="clear"
        >
          Clear
        </Button>
      </form>
    </Paper>
  )
}

export default Form
