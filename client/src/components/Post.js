import React, { useCallback, useEffect, useState } from "react";
import { ThumbUp } from "@material-ui/icons";
import { useSelector } from "react-redux";
import postApi from "../api/postApi";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  IconButton,
  colors,
} from "@material-ui/core";
const Post = ({
  title,
  author,
  content,
  postDate,
  likes,
  comments,
  _id: id,
}) => {
  const [liked, setLiked] = useState();
  const [allLikes, setAllLikes] = useState(likes.length + 1);

  const handleLike = useCallback(() => {
    postApi.likePost(id);
    setLiked(!liked);
    // console.log("Inside the callBack", liked);
  });
  useEffect(() => {
    setAllLikes(liked ? allLikes + 1 : allLikes - 1);
  }, [liked]);
  return (
    <Card>
      <CardHeader title={title} avatar={<Avatar>{author[0]}</Avatar>} />
      <CardContent>
        <Typography>{content}</Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={handleLike}>
          <ThumbUp style={liked ? { color: colors.red[500] } : {}} />
        </IconButton>
        {allLikes}
      </CardActions>
    </Card>
  );
};

export default Post;
