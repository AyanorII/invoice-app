import React from "react";
import Input from "./Input";

function StreetAddressInput({ side }) {
  return (
    <Input
      label="Street Address"
      name={`${side}Address.street`}
      placeholder="19 Union Terrace"
      rules={{
        required: {
          value: true,
          message: "Cannot be empty",
        },
      }} />
  );
}
export default StreetAddressInput;
