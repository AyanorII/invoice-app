import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.background};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.35s;
`;

function Card(props) {
  return <StyledCard className={props.className}>{props.children}</StyledCard>;
}

export default Card;
