import React from "react";
import SubHeading from "../shared/SubHeading";
import FormSection from "./FormSection";
import Address from "./Address";
import NameInput from "./NameInput";
import EmailInput from "./EmailInput";

const BillTo = ({ invoice }) => {
  const { clientName, clientEmail } = invoice;
  return (
    <FormSection>
      <SubHeading>Bill To</SubHeading>
      <NameInput value={clientName} />
      <EmailInput value={clientEmail} />
      <Address side="client" invoice={invoice} />
    </FormSection>
  );
};
export default BillTo;
