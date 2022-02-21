import React from "react";
import styled from "styled-components";
import IndexButtons from "./IndexButtons";
import Container from "./Container";

const StyledContainer = styled(Container)`
  margin-bottom: 2rem;

  @media (min-width: 1440px) {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div``;

const Heading = styled.h1`
  font-size: 1.25rem;
  line-height: 22.4px;
  letter-spacing: -0.63px;

  @media (min-width: 768px) {
    font-size: 2rem;
    line-height: 32px;
    letter-spacing: -1px;
    margin-bottom: 5px;
  }
`;

const InvoiceNumber = styled.span`
  font-size: 0.75rem;
  line-height: 15px;
  letter-spacing: -0.25px;

  .tablet {
    display: none;

    @media (min-width: 768px) {
      display: inline;
    }
  }
`;

const pluralize = (count, word) =>
  count === 1 ? `1 ${word}` : `${count} ${word}s`;

function IndexHeader({ invoices, handleChange }) {
  return (
    <StyledContainer>
      <Header>
        <Wrapper>
          <Heading>Invoices</Heading>
          <InvoiceNumber>
            <span className="tablet">There {invoices.length === 1 ? "is" : "are"} </span>
            {pluralize(invoices.length, "invoice")}
          </InvoiceNumber>
        </Wrapper>
        <IndexButtons handleChange={handleChange} />
      </Header>
    </StyledContainer>
  );
}

export default IndexHeader;
