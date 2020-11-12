import React from "react";
import { ThumbUp as Thumb } from "@material-ui/icons";
import { colors } from "@material-ui/core";
import { useSpring, animated, interpolate } from "react-spring";
const ThumbUp = animated(Thumb);

const Like = ({ onLike }) => {
  const { scale, ...animations } = useSpring({
    scale: onLike ? 1 : 0,
    color: onLike ? colors.red[500] : "gray",
  });
  return (
    <ThumbUp
      style={{
        transform: scale
          .interpolate({
            range: [0, 0.9, 1],
            output: [1, 1.1, 1],
          })
          .interpolate((x) => `scale(${x}) rotate(${(x - 1) * 100}deg)`),
        ...animations,
      }}
    />
  );
};

export default Like;
