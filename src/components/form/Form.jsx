import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";

function Form() {
  const methods = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <BillFrom />
        <BillTo />
        <button>submit</button>
      </form>
    </FormProvider>
  );
}
export default Form;
