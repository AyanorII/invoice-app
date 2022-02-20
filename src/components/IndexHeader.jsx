import React from "react";
import styled from "styled-components";
import IndexButtons from "./IndexButtons";
import Container from "./Container";

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
`;

const Span = styled.span`
  font-size: 0.75rem;
  line-height: 15px;
  letter-spacing: -0.25px;
`;

const pluralize = (count, word) =>
  count === 1 ? `1 ${word}` : `${count} ${word}s`;

function IndexHeader({ invoices, handleChange }) {
  return (
    <Container>
      <Header>
        <Wrapper>
          <Heading>Invoices</Heading>
          <Span>{pluralize(invoices.length, "invoice")}</Span>
        </Wrapper>
        <IndexButtons handleChange={handleChange}/>
      </Header>
    </Container>
  );
}

export default IndexHeader;
