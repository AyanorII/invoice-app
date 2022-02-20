import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import Logo from "./Logo";
import ThemeButton from "./ThemeButton";

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  background-color: #1e2139;

  @media (min-width: 1440px) {
    flex-direction: column;
    min-height: 100vh;
    border-radius: 0 30px 30px 0;
    justify-content: space-between;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    position: fixed;
  }
`;

const Wrapper = styled.div`
  display: flex;

  @media (min-width: 1440px) {
    flex-direction: column;
  }
`;

function Navbar({ theme, toggleTheme }) {
  return (
    <StyledNavbar>
      <Logo />
      <Wrapper>
        <ThemeButton theme={theme} toggleTheme={toggleTheme} />
        <Avatar />
      </Wrapper>
    </StyledNavbar>
  );
}

export default Navbar;
