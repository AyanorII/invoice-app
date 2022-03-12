import React from 'react'
import styled from 'styled-components';

const Message = styled.span`
  font-size: 0.7rem;
  color: ${props => props.theme.red.primary};
  justify-self: end;
  font-style: italic;
`;

function ErrorMessage({children}) {
  return (
    <Message>{children}</Message>
  )
}
export default ErrorMessage
