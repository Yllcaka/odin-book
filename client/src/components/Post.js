import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ThumbUp } from "@material-ui/icons";
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
  const selector = useSelector((state) => state.user);

  const [liked, setLiked] = useState(likes.includes(selector._id));
  const [allLikes, setAllLikes] = useState(likes.length);

  const postDate = new Date(date_posted).toLocaleString();

  const handleLike = useCallback(() => {
    postApi.likePost(id);
    setAllLikes(liked ? allLikes - 1 : allLikes + 1);
    setLiked(!liked);
    console.log("Liked");
  });
  // useEffect(() => {}, [liked]);
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
