import React from "react";
import styled from "styled-components";
import image from "../assets/logo.jpg";


const StyledLogo = styled.img`
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 0 25px 25px 0;

  @media (min-width: 1440px) {
    width: 103px;
    height: 103px;
    border-radius: 0 30px 30px 0;
  }
`;

function Logo() {
  return <StyledLogo src={image} />;
}

export default Logo;
