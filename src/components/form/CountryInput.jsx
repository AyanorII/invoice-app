import React from "react";
import Input from "./Input";

function CountryInput({ side, value }) {
  return (
    <Input
      name={`${side}Address.country`}
      value={value}
      label="Country"
      placeholder="United Kingdom"
      className="country"
      rules={{
        required: {
          value: true,
          message: "Cannot be empty",
        },
      }}
    />
  );
}
export default CountryInput;
