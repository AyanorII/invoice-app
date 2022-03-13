import React from 'react'
import styled from 'styled-components';

const StyledLabel = styled.label`
  color: ${(props) => props.theme.text.secondary};
  font-weight: 500;
  font-size: 0.75rem;
  letter-spacing: -0.25px;
`;

function Label({children}) {
  return (
    <StyledLabel>{children}</StyledLabel>
  )
}
export default Label
