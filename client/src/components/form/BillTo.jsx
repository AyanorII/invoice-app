import React from "react";
import SubHeading from "../shared/SubHeading";
import FormSection from "./FormSection";
import Address from "./Address";
import NameInput from "./NameInput";
import EmailInput from "./EmailInput";

const BillTo = (props) => {
  return (
    <FormSection>
      <SubHeading>Bill To</SubHeading>
      <NameInput />
      <EmailInput />
      <Address side="client"/>
    </FormSection>
  );
};
export default BillTo;
