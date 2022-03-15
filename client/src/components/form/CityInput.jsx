import React from "react";
import Input from "./Input";

function CityInput({ side, value }) {
  return (
    <Input
      name={`${side}Address.city`}
      value={value}
      label="City"
      placeholder="London"
      className="city"
      rules={{
        required: {
          value: true,
          message: "Cannot be empty",
        },
      }}
    />
  );
}
export default CityInput;
