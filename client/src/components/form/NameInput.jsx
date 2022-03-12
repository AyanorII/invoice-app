import React from "react";
import Input from "./Input";

function NameInput() {
  return (
    <Input
      label="Client's Name"
      name={"clientName"}
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
