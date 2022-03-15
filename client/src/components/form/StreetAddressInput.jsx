import React from "react";
import Input from "./Input";

function StreetAddressInput({ side, value }) {
  return (
    <Input
      name={`${side}Address.street`}
      value={value}
      label="Street Address"
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
