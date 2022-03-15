import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import image from "../../assets/logo.jpg";

const StyledLink = styled(Link)`
  width: 80px;
  height: 80px;

  @media(min-width: 1440px) {
    width: 103px;
    height: 103px;
  }
`;

const StyledLogo = styled.img`
  width: 100%;
  overflow: hidden;
  border-radius: 0 25px 25px 0;

  @media (min-width: 1440px) {
    border-radius: 0 30px 30px 0;
  }
`;

function Logo() {
  return (
    <StyledLink to="/">
      <StyledLogo src={image} />;
    </StyledLink>
  );
}

export default Logo;
