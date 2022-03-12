import React from 'react'
import styled from 'styled-components';
import GoBackButton from '../shared/GoBackButton';
import Heading from '../shared/Heading';

const StyledContainer = styled.div`
  background: ${props => props.theme.body.background};
  padding: 2rem 5.5%;
`;

function NewInvoice() {
  return (
    <StyledContainer> 
      <GoBackButton />
      <Heading>New Invoice</Heading>
    </StyledContainer>
  )
}
export default NewInvoice
