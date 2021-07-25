import React from 'react';
import { Avatar, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { ThumbUpAltOutlined } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import CommentIcon from '../../../images/comment.png';
import SendIcon from '../../../images/send.png';
import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'))

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <FavoriteIcon className={classes.heart} fontSize="small" />
        ) : (
          <FavoriteBorderIcon className={classes.heartOutline} fontSize="small" />
        );
    }

    return <FavoriteBorderIcon className={classes.heartOutline} fontSize="small" />;
  };

  const NumberOfLikes = () => {
    let alreadyLiked = post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
    return alreadyLiked && post.likes.length > 2 ? (
      <Typography variant="body2">Liked by <b>You</b> and <b>{post.likes.length - 1} others</b></Typography>
    ) : post.likes.length == 0 ? (<Typography variant="body2"> Be the first to like this!</Typography>
    ) : <Typography variant="body2">{post.likes.length} like{post.likes.length > 1 ? 's' : ''}</Typography>
  }
  return (
    <Card className={classes.card}>
      <div className={classes.header}>
        <div style={{display: 'flex', alignItems: 'center'}}>
        <Typography variant="h6" className={classes.userIcon}><span style={{position: 'relative', top: 1, left: 1}}>{post.name.charAt(0).toUpperCase()}</span></Typography> 
        <Typography variant="subtitle2" style={{marginLeft: 10}}>{post.username ? post.username : post.name}</Typography>
        </div>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <Button style={{ color: 'black' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="medium" /></Button>
      )}
      </div>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.icons}>
          <div style={{cursor: 'pointer'}} disabled={!user?.result} color="primary" onClick={() => dispatch(likePost(post._id))}>
            <Likes/> 
          </div>
          <img src={CommentIcon} alt="Comment" height="22px"/>
          <img src={SendIcon} alt="Send" height="22px"/>
      </div>
      <div className={classes.postContent}>
      <Typography variant="subtitle1">
        <NumberOfLikes/>
      </Typography>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: 5, height: '100%'}}>
        <Typography variant="subtitle2">{post.username ? post.username: post.name}
        <span style={{marginLeft: 7, fontWeight: 400}}>{post.title}</span></Typography>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
        <Typography variant="caption">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      </div>
      <CardActions className={classes.cardActions}>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
          <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;