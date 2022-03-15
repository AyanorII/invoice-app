import React, { useState } from "react";
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
      border-radius: 5px;
    }

    & div {
      background: ${(props) => props.theme.background}95;
      border-color: ${(props) => props.theme.text.secondary}50;
      color: ${(props) => props.theme.text.primary} !important;
      font-size: 0.85rem;
    }

    @media (min-width: 768px) {
      grid-column: 2 / 3;
    }
  }
`;

function Dates({ invoice }) {
  const [inv, setInvoiceDate] = useState(
    {
      createdAt: invoice ? invoice.createdAt : new Date(),
      paymentTerms: invoice ? invoice.paymentTerms : "",
    }
  );

  const options = [
    { value: "7", label: "7 Days" },
    { value: "14", label: "14 Days" },
    { value: "30", label: "30 Days" },
  ];

  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Wrapper>
      <FormSection className="dates">
        <div className="invoice-date">
          <Label>Invoice Date</Label>
          <DatePicker invoiceDate={inv.createdAt} />
        </div>
        <div className="payment-terms">
          <Label>Payment Terms</Label>
          {errors.paymentTerms && (
            <ErrorMessage>{errors.paymentTerms.message}</ErrorMessage>
          )}
          <Controller
            control={control}
            name="paymentTerms"
            rules={{ required: "Cannot be empty" }}
            render={({ field }) => (
              <Select
                options={options}
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
