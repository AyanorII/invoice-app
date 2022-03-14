import React from "react";
import styled from "styled-components";
import { useForm, FormProvider } from "react-hook-form";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import Dates from "./Dates";
import FormFooter from "./FormFooter";
import ItemList from "./ItemList";
import ProductDescription from "./ProductDescription";

const StyledForm = styled.form`
  padding-bottom: 6rem;

  @media (min-width: 768px) {
    padding-bottom: 7rem;
  }
`;

function Form() {
  const methods = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5001/invoices/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => console.log(res));
  };
  return (
    <FormProvider {...methods}>
      <StyledForm
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <BillFrom />
        <BillTo />
        <Dates />
        <ProductDescription />
        <ItemList />
        <FormFooter />
      </StyledForm>
    </FormProvider>
  );
}
export default Form;
