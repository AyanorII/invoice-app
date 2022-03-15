import React from "react";
import styled from "styled-components";
import illustration from "../assets/illustration-empty.svg";

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  min-height: calc(100vh - 80px - 82px);
  text-align: center;

  h1 {
    font-size: 1.75rem;
    margin-block: 2rem 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (min-width: 1440px) {
    min-height: 70vh;
  }
`;

function NoInvoices() {
  return (
    <Wrapper>
      <div>
        <img src={illustration} alt="No invoices" />
        <h1>There is nothing here</h1>
        <p>
          Create a new invoice by clicking the <strong>New Invoice</strong>{" "}
          button and get started
        </p>
      </div>
    </Wrapper>
  );
}
export default NoInvoices;
