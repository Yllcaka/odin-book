import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

const red = "#b61827";

const NavStyle = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 4px solid ${red};
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    li {
      margin-right: 5px;
    }
    // width: 100%;
  }
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  text-decoration: none;
  width: 100%;
  &.active {
    color: ${red};
    font-weight: bold;
  }
  :hover {
    color: ${red};
  }
`;

export { NavStyle, NavLink };
