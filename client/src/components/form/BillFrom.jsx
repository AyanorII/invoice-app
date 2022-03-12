import React from 'react'
import { useForm } from "react-hook-form"
import SubHeading from "../shared/SubHeading"
import FormSection from './FormSection';
import Input from './Input';

function BillFrom() {
  const { register, errors } = useForm();

  return (
    <FormSection>
      <SubHeading>Bill From</SubHeading>
      <Input label="Street Address" placeholder="Street Address" {...register("streetAddress")}></Input>
    </FormSection>
  )
}
export default BillFrom
