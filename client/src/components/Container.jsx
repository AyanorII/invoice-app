import React from "react";
import styled from "styled-components";

const StyleContainer = styled.div`
  padding-inline: 8.5%;

  @media (min-width: 768px) {
    padding-inline: 6.25%;
  }
`;

function Container({ children, className }) {
  return <StyleContainer className={className}>{children}</StyleContainer>;
}

export default Container;
