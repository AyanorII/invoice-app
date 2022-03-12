import React from 'react'
import styled from 'styled-components';

const StyledSection = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`;

function FormSection({ children }) {
  return (
    <StyledSection>{children}</StyledSection>
  )
}
export default FormSection
