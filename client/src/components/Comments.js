import React from "react";
import { Typography, IconButton, colors, CardActions } from "@material-ui/core";

import { ThumbUp, Add } from "@material-ui/icons";

const Comments = ({ comments }) => {
  return (
    <CardActions>
      <IconButton>
        <Add />
      </IconButton>
    </CardActions>
  );
};

export default Comments;
