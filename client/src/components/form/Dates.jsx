import React from "react";
import styled from "styled-components";
import { useFormContext, Controller } from "react-hook-form";
import DatePicker from "./DatePicker";
import FormSection from "./FormSection";
import Label from "./Label";
import Select from "react-select";
import ErrorMessage from "./ErrorMessage";

const Wrapper = styled.div`
  margin-block: 2rem;

  .invoice-date,
  .payment-terms {
    & > div {
      margin-top: 0.5rem;
    }
  }

  .invoice-date {
    grid-column: 1 / -1;

    @media (min-width: 768px) {
      grid-column: 1 / 2;
    }
  }

  .payment-terms {
    grid-column: 1 / -1;

    & > div {
      border: 1px solid ${(props) => props.theme.text.secondary}50;
      border-radius: 5px;
    }

    & div {
      background: ${(props) => props.theme.background}50;
      color: ${(props) => props.theme.text.primary} !important;
    }

    @media (min-width: 768px) {
      grid-column: 2 / 3;
    }
  }
`;

function Dates() {
  const options = [
    { value: "7", label: "7 Days" },
    { value: "14", label: "14 Days" },
    { value: "30", label: "30 Days" },
  ];

  const { control, formState: {errors} } = useFormContext();

  return (
    <Wrapper>
      <FormSection>
        <div className="invoice-date">
          <Label>Invoice Date</Label>
          <DatePicker />
        </div>
        <div className="payment-terms">
          <Label>Payment Terms</Label>
          {errors.paymentTerms && <ErrorMessage>{errors.paymentTerms.message}</ErrorMessage>}
          <Controller
            control={control}
            name="paymentTerms"
            rules={{ required: "Cannot be empty" }}
            render={({ field }) => (
              <Select
                options={options}
                // value={"7"}
                onChange={(value) => field.onChange(value.value)}
              />
            )}
          />
        </div>
      </FormSection>
    </Wrapper>
  );
}
export default Dates;
