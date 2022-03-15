import React from 'react'
import styled from 'styled-components';
import GoBackButton from '../shared/GoBackButton';
import Heading from '../shared/Heading';
import Form from "../form/Form"
import Container from "../shared/Container";

const StyledContainer = styled(Container)`
  @media (min-width: 768px) {
    margin-inline: 15%;
  }

  @media (min-width: 1440px) {
    margin-inline: calc(24.6% - 103px) 24.6%;
  }
`;

function NewInvoice() {
  return (
    <StyledContainer>
      <GoBackButton />
      <Heading>New Invoice</Heading>
      <Form method="post"/>
    </StyledContainer>
  )
}
export default NewInvoice
