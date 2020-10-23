// import React from "react";
import styled from "styled-components";
import { Input } from "@material-ui/core";
import { red } from "./Colors";
const InputStyled = styled(Input)`
  &.MuiInput-underline::after {
    border-color: ${red};
  }
`;

export default InputStyled;
