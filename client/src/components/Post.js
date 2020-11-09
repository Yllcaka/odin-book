import React, { useCallback, useEffect, useState } from "react";

import { ThumbUp, Add } from "@material-ui/icons";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
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

const CardStyled = styled(Card)`
  max-width: 800px;
  margin: 10px auto;
`;

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
  });
  useEffect(() => {
    setAllLikes(liked ? allLikes + 1 : allLikes - 1);
  }, [liked]);
  return (
    <CardStyled>
      <CardHeader
        title={title}
        avatar={
          <Link to={`/profile/${id}`}>
            <Avatar>{author[0]}</Avatar>
          </Link>
        }
      />
      <CardContent>
        <Typography>{content}</Typography>
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
