import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import Dates from "./Dates";

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
        <Dates />
        <button>submit</button>
      </form>
    </FormProvider>
  );
}
export default Form;
