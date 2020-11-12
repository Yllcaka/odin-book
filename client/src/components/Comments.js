import React from "react";
import { Typography, IconButton, CardActions } from "@material-ui/core";

import { Add } from "@material-ui/icons";

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
