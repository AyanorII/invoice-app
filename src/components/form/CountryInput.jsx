import React from "react";
import Input from "./Input";

function CountryInput({ side }) {
  return (
    <Input
      label="Country"
      name={`${side}Country`}
      placeholder="alexgrim@mail.com"
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
