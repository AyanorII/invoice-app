import React from "react";
import Input from "./Input";

function CityInput({side}) {
  return (
    <Input
      label="City"
      name={`${side}Address.city`}
      placeholder="London"
      className="city"
      rules={{
        required: {
          value: true,
          message: "Cannot be empty",
        },
      }} />
  );
}
export default CityInput;
