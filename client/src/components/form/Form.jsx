import React from 'react'
import { useForm } from "react-hook-form"
import BillFrom from './BillFrom';

function Form() {
  const { handleSubmit } = useForm();

  const onSubmit = () => {
    console.log("submit");
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BillFrom />
    </form>
  )
}
export default Form
