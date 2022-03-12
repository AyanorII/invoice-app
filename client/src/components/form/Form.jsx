import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import BillFrom from "./BillFrom";

function Form() {
  const methods = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <BillFrom />
        <button>submit</button>
      </form>
    </FormProvider>
  );
}
export default Form;
