import React from "react";
import styled from "styled-components";
import DatePicker from "./DatePicker";
import FormSection from "./FormSection";
import Label from "./Label";

const Wrapper = styled.div`
  margin-top: 2rem;

  .invoice-date {
    grid-column: 1 / -1;

    @media (min-width: 768px) {
      grid-column: 1 / 2;
    }
  }

  .payment-terms {
    grid-column: 1 / -1;

    @media (min-width: 768px) {
      grid-column: 2 / 3;
    }
  }
`;

function Dates() {
  return (
    <Wrapper>
      <FormSection>
        <Label>Invoice Date</Label>
        <DatePicker className="invoice-date"/>
        <Label>Payment Terms</Label>
        
      </FormSection>
    </Wrapper>
  );
}
export default Dates;
