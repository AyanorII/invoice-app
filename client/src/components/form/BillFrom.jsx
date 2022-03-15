import React from "react";
import SubHeading from "../shared/SubHeading";
import FormSection from "./FormSection";
import Address from "./Address";

const BillFrom = (props) => {
  return (
    <FormSection>
      <SubHeading>Bill From</SubHeading>
      <Address side="sender" invoice={props.invoice}/>
    </FormSection>
  );
};
export default BillFrom;
