import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import postApi from "../../api/postApi";
import Like from "./Like";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import styled from "styled-components";
import Comments from "../Comments";
import { AvatarLink as Link } from "../styles/AvatarLink";
import Avatar from "../Avatar";
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
  //The post State
  const [liked, setLiked] = useState(likes.includes(selector._id));
  const [allLikes, setAllLikes] = useState(likes.length);
  //Animation
  console.log("The author's data:", author);

  const postDate = new Date(date_posted).toLocaleString();

  const handleLike = useCallback(() => {
    //Posts the like data to the database
    postApi.likePost(id);
    //Changes the number of likes shown on the post
    setAllLikes(liked ? allLikes - 1 : allLikes + 1);
    //Likes the post if user hasn't already liked it
    setLiked(!liked);
  });
  // useEffect(() => {}, [liked]);
  return (
    <CardStyled>
      <CardHeader
        title={title}
        avatar={
          <Link to={`/profile/${author._id}`}>
            <Avatar profilePic={author.profilePic} username={author.username} />
          </Link>
        }
      />
      <CardContent>
        <Typography>{content}</Typography>
        <Typography>Posted on: {postDate}</Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={handleLike}>
          <Like onLike={liked} />
        </IconButton>
        {allLikes}
      </CardActions>
      <Comments comments={comments} />
    </CardStyled>
  );
};

export default Post;
