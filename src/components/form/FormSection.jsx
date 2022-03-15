import React from "react";
import styled from "styled-components";

const StyledSection = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  &.dates {
    grid-template-columns: 1fr 1fr;
  }

  .city {
    grid-column: 1 / 2;
  }

  .postcode {
    grid-column: 2 / 3;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;

    .country {
      grid-column: 3 / 4;
    }
  }
`;

function FormSection({ children, className }) {
  return <StyledSection className={className}>{children}</StyledSection>;
}
export default FormSection;
