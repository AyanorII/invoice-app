import React from "react";
import Input from "./Input";

function CountryInput({ side }) {
  return (
    <Input
      label="Country"
      name={`${side}Address.country`}
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
