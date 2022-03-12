import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledButton = styled(NavLink)`
  padding: ${(props) =>
    props.variant === "new" ? "0.5rem" : "1.125rem 1.5rem"};

  background-color: ${(props) => {
    switch (props.variant) {
      case "new":
        return props.theme.purple.primary;
      case "mark":
        return props.theme.purple.primary;
      case "delete":
        return props.theme.red.primary;
      case "edit":
        return props.theme.text.secondary;
      case "draft":
        return props.theme.body.background;
      default:
        return "#F9FAFE";
    }
  }};
  border: none;
  border-radius: 30px;
  text-align: center;
  transition: all 0.35s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  color: ${(props) =>
    props.variant === "edit" ? props.theme.body.background : "#FFF"};

  &:hover {
    background-color: ${(props) => {
      switch (props.variant) {
        case "new":
          return props.theme.purple.secondary;
        case "mark":
          return props.theme.purple.secondary;
        case "delete":
          return props.theme.red.secondary;
        case "edit-light":
          return "#DFE3FA";
        case "edit-dark":
          return "#FFFFFF";
        default:
          return "#DFE3FA";
      }
    }};
  }
`;

function Button(props) {
  return (
    <StyledButton
      to={props.to}
      variant={props.variant}
      className={props.className}
      color={props.color}
    >
      {props.children}
    </StyledButton>
  );
}

export default Button;
