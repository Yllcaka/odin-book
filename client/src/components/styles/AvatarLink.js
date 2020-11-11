import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const LinkCss = css`
  display: inline-block;
  text-decoration: none;
  border-radius: 100%;
`;

const AvatarLink = styled(Link)`
  ${LinkCss}
`;
const AvatarNavLink = styled(NavLink)`
  ${LinkCss}
  > div {
    height: 2rem;
    width: 2rem;
  }
`;

export { AvatarLink, AvatarNavLink };
