import React from "react";
import Input from "./Input";

function CityInput({side}) {
  return (
    <Input
      label="City"
      name={`${side}City`}
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
