import React, { useCallback, useEffect, useState } from "react";

import { ThumbUp, Add } from "@material-ui/icons";
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
import styled from "styled-components";
import Comments from "./Comments";
import { AvatarLink as Link } from "./styles/AvatarLink";
const CardStyled = styled(Card)`
  max-width: 800px;
  margin: 10px auto;
`;

const Post = ({
  title,
  author,
  content,
  date_posted,
  likes,
  comments,
  _id: id,
}) => {
  const postDate = new Date(date_posted).toLocaleString();
  const [liked, setLiked] = useState();
  const [allLikes, setAllLikes] = useState(likes.length + 1);

  const handleLike = useCallback(() => {
    postApi.likePost(id);
    setLiked(!liked);
  });
  useEffect(() => {
    setAllLikes(liked ? allLikes + 1 : allLikes - 1);
  }, [liked]);
  return (
    <CardStyled>
      <CardHeader
        title={title}
        avatar={
          <Link to={`/profile/${author._id}`}>
            <Avatar>{author.username[0]}</Avatar>
          </Link>
        }
      />
      <CardContent>
        <Typography>{content}</Typography>
        <Typography>Posted on: {postDate}</Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={handleLike}>
          <ThumbUp style={liked ? { color: colors.red[500] } : {}} />
        </IconButton>
        {allLikes}
      </CardActions>
      <Comments comments={comments} />
    </CardStyled>
  );
};

export default Post;
