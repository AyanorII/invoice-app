import React from "react";
import styled from "styled-components";

const StyleContainer = styled.div`
  margin-inline: 5.5%;
  margin-top: 2rem;

  @media (min-width: 768px) {
    margin-inline: 8%;
  }

  @media (min-width: 1440px) {
    margin-inline: calc(24.6% - 103px) 24.6%;
    grid-column: 2 / 3;
  }
`;

function Container({ children, className }) {
  return <StyleContainer className={className}>{children}</StyleContainer>;
}

export default Container;
