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
    li {
      margin-right: 5px;
      a {
        color: black;
        text-decoration: none;
        text-decoration: none;
        &.active {
          color: ${red};
          font-weight: bold;
        }
        :hover {
          color: ${red};
        }
      }
    }
    // width: 100%;
  }
`;

export { NavStyle };
