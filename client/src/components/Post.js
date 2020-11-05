import React, { useCallback, useEffect, useState } from "react";
import { ThumbUp } from "@material-ui/icons";
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
const Post = ({ title, author, content, postDate, likes, comments }) => {
  const [liked, setLiked] = useState(false);
  const [allLikes, setAllLikes] = useState(likes + 1);
  console.log("Outside the callback", liked);
  const handleLike = useCallback(() => {
    setLiked(!liked);
    console.log("Inside the callBack", liked);
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
