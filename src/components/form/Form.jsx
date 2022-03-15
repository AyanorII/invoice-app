import React, { useState, useEffect } from "react";
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

function Form({ method, id, invoice }) {
  const [isSavedAsDraft, setIsSavedAsDraft] = useState(false);
  const handleDraftSave = () => {
    setIsSavedAsDraft(true);
  }

  const methods = useForm();

  const uri = process.env.FIXIE_URL + `/invoices/${
    method.toUpperCase() === "PUT" ? id : "create"
  }`;

  const onSubmit = (data) => {
    if (isSavedAsDraft) {
      data.status = "draft";
    }

    fetch(uri, {
      method: method.toUpperCase(),
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        window.location.href = "/";
      } else {
        alert(res.status + " Try Again");
      }
    });
  };

  // If editing, sets each field to the value of the invoice.
  useEffect(() => {
    if (method.toUpperCase() === "PUT") {
      for (const field in methods.getValues()) {
        if (typeof invoice[field] === "object") {
          for (const f in invoice[field]) {
            methods.setValue(field + "." + f, invoice[field][f]);
          }
        } else {
          methods.setValue(field, invoice[field]);
        }
      }
    }
  }, [])

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
        <BillFrom invoice={invoice} />
        <BillTo invoice={invoice} />
        <Dates invoice={invoice} />
        <ProductDescription invoice={invoice} />
        <ItemList invoice={invoice} />
        <FormFooter handleDraft={handleDraftSave}/>
      </StyledForm>
    </FormProvider>
  );
}
export default Form;
