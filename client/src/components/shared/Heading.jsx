import React from 'react'
import styled from 'styled-components';

const StyledHeading = styled.h1`
  color: ${(props) => props.theme.text.primary};
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1.5rem;
`;

function Heading({ children }) {
  return (
    <StyledHeading>{children}</StyledHeading>
  )
}
export default Heading
