import React from 'react'
import styled from 'styled-components';

const StyledSubHeading = styled.h2`
  color: ${(props) => props.theme.purple.primary};
  font-size: 0.75rem;
  grid-column: 1 / -1;
`;

function SubHeading({ children }) {
  return (
    <StyledSubHeading>{children}</StyledSubHeading>
  )
}
export default SubHeading
