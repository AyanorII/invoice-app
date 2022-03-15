import React, {useState} from "react";
import SubHeading from "../shared/SubHeading";
import FormSection from "./FormSection";
import Address from "./Address";
import NameInput from "./NameInput";
import EmailInput from "./EmailInput";

const BillTo = ({ invoice }) => {
  const [inv, setInv] = useState({
    clientName: invoice ? invoice.clientName : "",
    clientEmail: invoice ? invoice.clientEmail : "",
  });
  return (
    <FormSection>
      <SubHeading>Bill To</SubHeading>
      <NameInput value={inv.clientName} />
      <EmailInput value={inv.clientEmail} />
      <Address side="client" invoice={invoice} />
    </FormSection>
  );
};
export default BillTo;
