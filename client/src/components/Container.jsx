import React from "react";
import styled from "styled-components";

const StyleContainer = styled.div`
  padding: 6.4% 8.5%;
`;

function Container({ children, className }) {
  return <StyleContainer className={className}>{children}</StyleContainer>;
}

export default Container;
