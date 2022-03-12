import React from "react";
import styled from "styled-components";
import sun from "../../assets/icon-sun.svg";
import moon from "../../assets/icon-moon.svg";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (min-width: 1440px) {
    flex: 0;
    justify-self: flex-end;
  }
`;

const Button = styled.button`
  border: none;
  height: 100%;
  padding: 2rem;
  background-color: transparent;
  background-image: url(${(props) => (props.theme === "light" ? moon : sun)});
  background-repeat: no-repeat;
  background-position: center;
  outline: none;
  justify-self: flex-end;
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 1.875rem 2rem;
  }

  @media (min-width: 1440px) {
    border: none;
    width: 100%;
    padding-block: 2.5rem;
  }
`;

function ThemeButton({ theme, toggleTheme }) {
  return (
    <Wrapper>
      <Button
        theme={theme}
        onClick={() => {
          toggleTheme();
        }}
      />
    </Wrapper>
  );
}

export default ThemeButton;
