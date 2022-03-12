import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import arrow from "../../assets/icon-arrow-left.svg";

const Button = styled(NavLink)`
  color: ${(props) => props.theme.text.primary};
  font-size: 0.75rem;
  font-weight: 700;
  left: 1.5rem;
  position: relative;
  text-decoration: none;

  &::before {
    content: url(${arrow});
    left: -1.5rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.35s;
  }

  &:hover::before {
    left: -2rem;
  }
`;

function GoBackButton() {
  return <Button to="/">Go back</Button>;
}

export default GoBackButton;
