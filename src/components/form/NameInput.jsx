import React from "react";
import Input from "./Input";

function NameInput({ value }) {
  return (
    <Input
      name={"clientName"}
      value={value}
      label="Client's Name"
      placeholder="Alex Grim"
      rules={{
        required: {
          value: true,
          message: "Cannot be empty",
        },
      }}
    />
  );
}
export default NameInput;
