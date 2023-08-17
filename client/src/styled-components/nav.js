import { styled } from "styled-components";

const NavHeader = styled.h1`
  color: blue;
  font-weight: bold;
  font-size: 1.5rem;
`;

const NavBar = styled.nav`
  min-height: 10vh;
  padding: 0em 2em;
  display: grid;
  align-items: center;
  justify-items: start;
  grid-template-columns: 3fr 1fr;
  margin-bottom: 2em;
`;

const ButtonGroup = styled.div`
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
`;

export { NavHeader, NavBar, ButtonGroup };
