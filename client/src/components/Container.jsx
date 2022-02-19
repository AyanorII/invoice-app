import React from "react";
import styled from "styled-components";

const StyleContainer = styled.div`
  padding: 6.4% 8.5%;
`;

function Container({ children }) {
  return <StyleContainer>{children}</StyleContainer>;
}

export default Container;
