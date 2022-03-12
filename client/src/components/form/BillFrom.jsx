import React from "react";
import SubHeading from "../shared/SubHeading";
import FormSection from "./FormSection";
import CityInput from "./CityInput";
import StreetAddressInput from "./StreetAddressInput";
import PostCode from "./PostCodeInput";
import CountryInput from "./CountryInput";

const BillFrom = (props) => {
  return (
    <FormSection>
      <SubHeading>Bill From</SubHeading>
      <StreetAddressInput side="sender"/>
      <CityInput side="sender"/>
      <PostCode side="sender" />
      <CountryInput side="sender"/>
    </FormSection>
  );
};
export default BillFrom;
