import React from "react";
import SubHeading from "../shared/SubHeading";
import FormSection from "./FormSection";
import CityInput from "./CityInput";
import StreetAddressInput from "./StreetAddressInput";
import PostCode from "./PostCodeInput";
import CountryInput from "./CountryInput";
import NameInput from "./NameInput";
import EmailInput from "./EmailInput";

const BillTo = (props) => {
  return (
    <FormSection>
      <SubHeading>Bill To</SubHeading>
      <NameInput />
      <EmailInput />
      <StreetAddressInput side="client" />
      <CityInput side="client" />
      <PostCode side="client" />
      <CountryInput side="client" />
    </FormSection>
  );
};
export default BillTo;
