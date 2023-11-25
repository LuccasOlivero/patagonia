import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { Link, NavLink } from "react-router-dom";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  position: relative;
`;

const Copyright = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--color-brand-600);
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />

      <a href="https://www.linkedin.com/in/lucas-olivero-319090264/">
        <Copyright>&copy; Luccas Olivero {new Date().getFullYear()}</Copyright>
      </a>
    </StyledSidebar>
  );
}

export default Sidebar;
